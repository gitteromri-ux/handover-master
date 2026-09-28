'use strict';
/* Julie Gibson Clark Live Masterclass - strict Conversions API module.
 *
 * Handles ONLY marked Julie payloads:
 *   POST, Origin https://www.longevitylifeacademy.com, body.source === 'julie-masterclass',
 *   body.url on https://www.longevitylifeacademy.com/julie-masterclass/ (or /index.html).
 * Anything else is not a Julie request and must keep the existing handlers
 * (api/meta/capi.js general handler, lib/blueprint-golden-capi.js for Blueprint).
 *
 * Invariants enforced here:
 *   - event_name in {PageView, ViewContent, AddToCart, InitiateCheckout, Purchase}
 *   - event_id required (browser eventID === this event_id -> Meta dedup)
 *   - Purchase: event_id === order_id, value > 0 (the charged amount), currency USD
 *   - event_time: the browser's original time when within [now-7d, now+5min], else relay time
 *   - PII hashed SHA-256 after normalisation; IP/UA taken from the request (never hashed)
 *   - fbc resolved with lib/click-id.js (URL fbclid wins, case preserved, never modified)
 *   - QA/test URLs (?qa=1 / ?llatest=1) are never forwarded, even if a browser sends them
 *   - test_event_code (TESTnnn..) is forwarded to Meta Test Events only when supplied
 *
 * Env: META_PIXEL_ID (1440305917310328 shared dataset), META_CAPI_TOKEN.
 * Release: julie-strict-20260927-2
 */
const crypto = require('crypto');
const { resolveFbc } = require('./click-id');

const RELEASE = 'julie-strict-20260927-2';
const ORIGIN = 'https://www.longevitylifeacademy.com';
const PATHS = ['/julie-masterclass/', '/julie-masterclass/index.html'];
const SOURCE = 'julie-masterclass';
const EVENTS = ['PageView', 'ViewContent', 'AddToCart', 'InitiateCheckout', 'Purchase'];
const COMMERCE = ['AddToCart', 'InitiateCheckout', 'Purchase'];
const GRAPH_BASE = 'https://graph.facebook.com/v21.0/';
const PRODUCT_LINE = 'julie_masterclass';
const PRODUCT_NAME = 'Julie Gibson Clark Live Masterclass';
const PLANS = {
  standard: { id: 'standard', content_id: 'julie-masterclass-standard', content_name: 'The Masterclass', value: 49 },
  vip:      { id: 'vip',      content_id: 'julie-masterclass-vip',      content_name: 'VIP Masterclass', value: 79 },
};
const ID_RE = /^[A-Za-z0-9_.:-]{1,100}$/;
const ORDER_RE = /^[A-Za-z0-9_-]{1,64}$/;
const FBP_RE = /^fb\.\d+\.\d{13}\.\d+$/;
const TEST_RE = /^TEST\d{3,10}$/;
const QA_RE = /[?&](qa|llatest)=1(?:&|$)/;

function parseBody(raw) {
  if (raw == null) return null;
  if (typeof raw === 'string') { try { return JSON.parse(raw); } catch (_) { return null; } }
  return typeof raw === 'object' ? raw : null;
}
function pageUrl(body) {
  try { return new URL(String(body && body.url)); } catch (_) { return null; }
}
/* Routing predicate used by api/meta/capi.js. Strict: every clause must hold. */
function isJulieRequest(req, body) {
  if (!req || req.method !== 'POST') return false;
  if (String((req.headers && req.headers.origin) || '') !== ORIGIN) return false;
  if (!body || body.source !== SOURCE) return false;
  const u = pageUrl(body);
  return !!u && u.origin === ORIGIN && PATHS.includes(u.pathname);
}

function sha256(v) { return crypto.createHash('sha256').update(String(v)).digest('hex'); }
function normEmail(v) { const s = String(v || '').trim().toLowerCase(); return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s) ? s : ''; }
function normPhone(v) { const d = String(v || '').replace(/\D/g, ''); return d.length >= 7 ? d : ''; }
/* Same normalisation as the browser helper so both hashes agree. */
function normName(v) { return String(v || '').toLowerCase().replace(/[^a-z\u00C0-\u024F\u0370-\u03FF\u0400-\u04FF\u0590-\u05FF]/g, ''); }
function norm2(v) { const s = String(v || '').trim().toLowerCase(); return /^[a-z]{2}$/.test(s) ? s : ''; }
function normXid(v) { const s = String(v || '').trim(); return s ? s : ''; }

function classify(body) {
  const plan = String(body.plan || '').trim();
  if (PLANS[plan]) return PLANS[plan];
  const ids = [].concat(body.content_ids || []).map(String);
  for (const k of Object.keys(PLANS)) if (ids.includes(PLANS[k].content_id)) return PLANS[k];
  const name = String(body.content_name || '').trim();
  for (const k of Object.keys(PLANS)) if (PLANS[k].content_name === name) return PLANS[k];
  return null;
}

function clientIp(req) {
  return String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
    String(req.headers['x-real-ip'] || '').trim() || undefined;
}

/* Validates and builds the Meta event. Returns {error, status} or {event, plan, fbc, warnings}. */
function buildEvent(body, req, now) {
  now = now || Date.now();
  const name = String(body.event_name || '').trim();
  if (!EVENTS.includes(name)) return { status: 400, error: 'unknown_event' };
  const eventId = String(body.event_id || '').trim();
  if (!ID_RE.test(eventId)) return { status: 400, error: 'missing_event_id' };
  const testCode = body.test_event_code === undefined ? '' : String(body.test_event_code || '').trim();
  if (body.test_event_code !== undefined && !TEST_RE.test(testCode)) return { status: 400, error: 'invalid_test_event_code' };

  const warnings = [];
  const plan = classify(body);
  let value = Number(body.value);
  const currency = String(body.currency || 'USD').trim().toUpperCase();
  let orderId = '';
  if (COMMERCE.includes(name)) {
    if (!Number.isFinite(value) || value <= 0) return { status: 400, error: 'invalid_value' };
    if (currency !== 'USD') return { status: 400, error: 'invalid_currency' };
    if (name === 'Purchase') {
      orderId = String(body.order_id || '').trim();
      if (!ORDER_RE.test(orderId)) return { status: 400, error: 'missing_order_id' };
      if (eventId !== orderId) return { status: 400, error: 'purchase_event_id_mismatch' };
    }
    if (!plan) warnings.push('plan_unresolved');
    else if (value !== plan.value) warnings.push('plan_value_mismatch');
  }

  const userData = {
    client_user_agent: String(req.headers['user-agent'] || ''),
    client_ip_address: clientIp(req),
  };
  const em = normEmail(body.email); if (em) userData.em = [sha256(em)];
  const ph = normPhone(body.phone); if (ph) userData.ph = [sha256(ph)];
  const fn = normName(body.fn); if (fn) userData.fn = [sha256(fn)];
  const ln = normName(body.ln); if (ln) userData.ln = [sha256(ln)];
  const st = norm2(body.st); if (st) userData.st = [sha256(st)];
  let country = norm2(body.country);
  if (!country) country = norm2(req.headers['x-vercel-ip-country']) || norm2(req.headers['cf-ipcountry']);
  if (country) userData.country = [sha256(country)];
  if (!st) { const region = norm2(req.headers['x-vercel-ip-country-region']); if (region && (!country || country === 'us')) userData.st = [sha256(region)]; }
  const xid = normXid(body.external_id); if (xid) userData.external_id = [sha256(xid)];
  if (typeof body.fbp === 'string' && FBP_RE.test(body.fbp)) userData.fbp = body.fbp;
  const click = resolveFbc(body.fbc, body.url, now);
  if (click.value) userData.fbc = click.value;

  /* Original browser event_time when plausible (Meta accepts up to 7 days back); otherwise relay time. */
  const serverTime = Math.floor(now / 1000);
  let eventTime = serverTime;
  if (body.event_time !== undefined && body.event_time !== null && body.event_time !== '') {
    const t = Number(body.event_time);
    if (Number.isInteger(t) && t >= serverTime - 7 * 86400 && t <= serverTime + 300) eventTime = t;
    else warnings.push('event_time_out_of_range');
  }
  const event = {
    event_name: name,
    event_time: eventTime,
    event_id: eventId,
    action_source: 'website',
    event_source_url: String(body.url).slice(0, 1024),
    user_data: userData,
  };
  if (COMMERCE.includes(name)) {
    const cd = { currency: 'USD', value: value, product_line: PRODUCT_LINE };
    if (plan) {
      cd.content_ids = [plan.content_id];
      cd.content_type = 'product';
      cd.content_name = plan.content_name;
      cd.contents = [{ id: plan.content_id, quantity: 1, item_price: value }];
      cd.plan = plan.id;
    } else if (body.content_name) cd.content_name = String(body.content_name).slice(0, 120);
    if (name === 'Purchase') cd.order_id = orderId;
    event.custom_data = cd;
  } else if (name === 'ViewContent') {
    event.custom_data = {
      content_ids: [PLANS.standard.content_id, PLANS.vip.content_id],
      content_type: 'product',
      content_name: PRODUCT_NAME,
      product_line: PRODUCT_LINE,
    };
  }
  return { event, plan, fbc: click, warnings, testCode };
}

function cors(res) {
  res.setHeader('Access-Control-Allow-Origin', ORIGIN);
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Expose-Headers', 'x-lla-fbc, x-lla-release, x-lla-julie');
  res.setHeader('x-lla-release', RELEASE);
  res.setHeader('Cache-Control', 'no-store');
}

/* deps: { fetch, now, env } are injectable for offline tests; production uses globals. */
async function handle(req, res, body, deps) {
  deps = deps || {};
  const doFetch = deps.fetch || fetch;
  const now = typeof deps.now === 'function' ? deps.now() : Date.now();
  const env = deps.env || process.env;
  cors(res);
  body = parseBody(body === undefined ? req.body : body);
  if (!isJulieRequest(req, body)) return res.status(400).json({ error: 'not_julie_request' });
  const u = pageUrl(body);
  if (QA_RE.test(u.search)) {
    res.setHeader('x-lla-julie', 'qa_excluded');
    return res.status(200).json({ ok: false, skipped: 'qa_excluded', release: RELEASE });
  }
  const PIXEL_ID = env.META_PIXEL_ID;
  const TOKEN = env.META_CAPI_TOKEN;
  if (!PIXEL_ID || !TOKEN) return res.status(500).json({ error: 'not_configured' });

  const built = buildEvent(body, req, now);
  if (built.error) {
    res.setHeader('x-lla-julie', built.error);
    return res.status(built.status).json({ error: built.error, release: RELEASE });
  }
  res.setHeader('x-lla-fbc', built.fbc.state);
  res.setHeader('x-lla-julie', built.plan ? built.plan.id : 'no_plan');
  const payload = built.testCode ? { data: [built.event], test_event_code: built.testCode } : { data: [built.event] };
  try {
    const r = await doFetch(GRAPH_BASE + PIXEL_ID + '/events?access_token=' + encodeURIComponent(TOKEN), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const rb = await r.json().catch(() => ({}));
    return res.status(r.ok ? 200 : 502).json({
      ok: r.ok,
      meta_status: r.status,
      events_received: rb.events_received,
      fbtrace_id: rb.fbtrace_id,
      julie: {
        release: RELEASE,
        event_name: built.event.event_name,
        event_id: built.event.event_id,
        plan: built.plan ? built.plan.id : null,
        fbc_state: built.fbc.state,
        test_event_code: built.testCode || null,
        warnings: built.warnings,
      },
      error: rb.error ? { message: rb.error.message, code: rb.error.code } : undefined,
    });
  } catch (e) {
    return res.status(502).json({ ok: false, error: 'meta_unreachable', release: RELEASE });
  }
}

module.exports = { RELEASE, ORIGIN, PATHS, SOURCE, EVENTS, PLANS, isJulieRequest, parseBody, buildEvent, handle };
