'use strict';
/* THE FRENCH ATELIER — strict Conversions API module (Golden CAPI).
 * 1:1 port of the frozen Julie golden module (julie-strict-20260927-2) with FA naming.
 * Handles ONLY marked FA payloads: POST, Origin https://www.frenchatelierlive.com,
 * body.source === 'french-atelier', body.url on one of PATHS.
 * Invariants: event_name in {PageView, ViewContent, AddToCart, InitiateCheckout, Purchase};
 * event_id required (browser eventID === event_id -> Meta dedup); Purchase: event_id === order_id,
 * value > 0, USD; PII SHA-256 after normalisation; IP/UA from request; fbc via lib/click-id.js;
 * QA URLs (?qa=1 / ?fatest=1) never forwarded; test_event_code only when supplied.
 * Env: FA_META_PIXEL_ID (4075596186030950 French Atelier, ETeacher Group), FA_META_CAPI_TOKEN.
 */
const crypto = require('crypto');
const { resolveFbc } = require('./click-id');

const RELEASE = 'fa-strict-20261020-1';
const ORIGIN = 'https://www.frenchatelierlive.com';
const PATHS = ['/french-course-enroll.html', '/culture-capsules-enroll.html', '/enroll-checkout.html'];
const SOURCE = 'french-atelier';
const EVENTS = ['PageView', 'ViewContent', 'AddToCart', 'InitiateCheckout', 'Purchase'];
const COMMERCE = ['AddToCart', 'InitiateCheckout', 'Purchase'];
const GRAPH_BASE = 'https://graph.facebook.com/v21.0/';
const PRODUCT_LINE = 'french_atelier';
const PRODUCT_NAME = 'The French Atelier by Acadomia';
const PLANS = {
  'fa-course':      { id: 'fa-course',      content_id: 'fa-course',      content_name: 'The French Atelier — 20 live lessons', value: 199 },
  'fa-course-full': { id: 'fa-course-full', content_id: 'fa-course-full', content_name: 'The French Atelier — paid in full',  value: 799 },
  'capsule-1':      { id: 'capsule-1',      content_id: 'capsule-1',      content_name: '1 Culture Capsule',                 value: 99 },
  'capsule-2':      { id: 'capsule-2',      content_id: 'capsule-2',      content_name: '2 Culture Capsules',                value: 178 },
  'capsule-3':      { id: 'capsule-3',      content_id: 'capsule-3',      content_name: 'All 3 Culture Capsules',            value: 189 },
};
const ID_RE = /^[A-Za-z0-9_.:-]{1,100}$/;
const ORDER_RE = /^[A-Za-z0-9_-]{1,64}$/;
const FBP_RE = /^fb\.\d+\.\d{13}\.\d+$/;
const TEST_RE = /^TEST\d{3,10}$/;
const QA_RE = /[?&](qa|fatest)=1(?:&|$)/;

function parseBody(raw) {
  if (raw == null) return null;
  if (typeof raw === 'string') { try { return JSON.parse(raw); } catch (_) { return null; } }
  return typeof raw === 'object' ? raw : null;
}
function pageUrl(body) {
  try { return new URL(String(body && body.url)); } catch (_) { return null; }
}
/* Routing predicate used by api/meta/capi.js. Strict: every clause must hold. */
function isFaRequest(req, body) {
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
      content_ids: Object.keys(PLANS),
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
  res.setHeader('Access-Control-Expose-Headers', 'x-fa-fbc, x-fa-release, x-fa-plan');
  res.setHeader('x-fa-release', RELEASE);
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
  if (!isFaRequest(req, body)) return res.status(400).json({ error: 'not_fa_request' });
  const u = pageUrl(body);
  if (QA_RE.test(u.search)) {
    res.setHeader('x-fa-plan', 'qa_excluded');
    return res.status(200).json({ ok: false, skipped: 'qa_excluded', release: RELEASE });
  }
  const PIXEL_ID = env.FA_META_PIXEL_ID || '4075596186030950';
  const TOKEN = env.FA_META_CAPI_TOKEN;
  if (!PIXEL_ID || !TOKEN) return res.status(500).json({ error: 'not_configured' });

  const built = buildEvent(body, req, now);
  if (built.error) {
    res.setHeader('x-fa-plan', built.error);
    return res.status(built.status).json({ error: built.error, release: RELEASE });
  }
  res.setHeader('x-fa-fbc', built.fbc.state);
  res.setHeader('x-fa-plan', built.plan ? built.plan.id : 'no_plan');
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
      fa: {
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

module.exports = { RELEASE, ORIGIN, PATHS, SOURCE, EVENTS, PLANS, isFaRequest, parseBody, buildEvent, handle };
