/* Meta Conversions API relay for Longevity Life Academy.
 * Browser posts {event_name, event_id, email, phone, fn, ln, st, country,
 * external_id, value, currency, order_id, url, fbp, fbc}.
 * Server hashes PII (SHA-256) and forwards to graph.facebook.com with the CAPI token,
 * sharing event_id with the browser pixel so Meta de-duplicates.
 * Env: META_PIXEL_ID, META_CAPI_TOKEN.
 *
 * 2026-09-15: EMQ recovery — adds server copies for PageView,
 * Clicked_on_curriculum, Clicked_on_Enroll (currently 6.1/10 vs 9.3/10 on
 * AddToCart/InitiateCheckout/Purchase). Adds hashed external_id, fn, ln, st,
 * country to lift match quality across all events without touching Pixel or
 * GTM configuration.
 */
const crypto = require('crypto');
const { resolveFbc } = require('../../lib/click-id');
const blueprintGolden = require('../../lib/blueprint-golden-capi');
const julieCapi = require('../../lib/julie-capi');
const RELEASE = 'clickid-exact-20260922';

const ORIGINS = [
  'https://www.longevitylifeacademy.com',
  'https://longevitylifeacademy.com',
  'https://lla-checkout.gitter-omri.workers.dev',
  'https://longevitylifeacademy.pages.dev',
];
/* Standard Meta events we already sent + custom events tracked in the pixel
 * that also need CAPI server copies for EMQ. Custom events are legal in CAPI
 * and Meta rates them the same way as standard events. */
const EVENTS = [
  'Purchase', 'InitiateCheckout', 'AddToCart', 'Lead', 'PageView',
  'Clicked_on_curriculum', 'Clicked_on_Enroll',
  'Enroll_CTA_Click', 'Clicked_on_Enroll_Pricing',
  'About_Us', 'Visited_one_of_the_six_pillars',
];

function sha256(v) {
  return crypto.createHash('sha256').update(String(v).trim().toLowerCase()).digest('hex');
}
function lettersOnly(v) {
  return String(v || '').toLowerCase().replace(/[^a-z]/g, '');
}

module.exports = async (req, res) => {
  // Scope the historical handler to Blueprint commerce events only.
  // Julie, ActiveCampaign, other origins and other event names retain the
  // current deployed handler. The archived historical module is byte-exact.
  let blueprintBody = req.body;
  if (typeof blueprintBody === 'string') {
    try { blueprintBody = JSON.parse(blueprintBody); } catch (_) { blueprintBody = null; }
  }
  let blueprintUrl = false;
  try {
    const u = new URL(blueprintBody && blueprintBody.url);
    blueprintUrl = u.origin === 'https://longevitylifeacademy.pages.dev' &&
      ['/', '/index.html', '/checkout', '/checkout.html'].includes(u.pathname);
  } catch (_) {}
  if (req.method === 'POST' &&
      req.headers.origin === 'https://longevitylifeacademy.pages.dev' &&
      blueprintUrl &&
      ['AddToCart', 'InitiateCheckout', 'Purchase'].includes(blueprintBody.event_name)) {
    res.setHeader('x-lla-release', 'blueprint-golden-20260927');
    res.setHeader('Access-Control-Expose-Headers', 'x-lla-release');
    res.setHeader('Cache-Control', 'no-store');
    return blueprintGolden(req, res);
  }
  // Julie masterclass only: marked payloads from https://www.longevitylifeacademy.com
  // whose page URL is /julie-masterclass/ use the strict module. Every other request
  // (Blueprint above, ActiveCampaign, other origins/paths, unmarked legacy Julie
  // payloads) keeps the handler below unchanged.
  if (julieCapi.isJulieRequest(req, blueprintBody)) return julieCapi.handle(req, res, blueprintBody);
  const origin = req.headers.origin || '';
  if (ORIGINS.includes(origin)) res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Expose-Headers', 'x-lla-fbc, x-lla-release');
  res.setHeader('x-lla-release', RELEASE);
  res.setHeader('Cache-Control', 'no-store');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const PIXEL_ID = process.env.META_PIXEL_ID;
  const TOKEN = process.env.META_CAPI_TOKEN;
  if (!PIXEL_ID || !TOKEN) return res.status(500).json({ error: 'not_configured' });

  let b = req.body || {};
  if (typeof b === 'string') { try { b = JSON.parse(b); } catch (e) { b = {}; } }

  const name = String(b.event_name || '').trim();
  if (!EVENTS.includes(name)) return res.status(400).json({ error: 'unknown_event' });

  /* Optional supervised-test support: Meta Test Events code (format TESTnnnnn). */
  const testCode = String(b.test_event_code || '').trim();
  const useTestCode = /^TEST\d{3,10}$/.test(testCode);
  if (b.test_event_code !== undefined && !useTestCode) {
    return res.status(400).json({ error: 'invalid_test_event_code' });
  }

  /* Build full user_data payload. Every additional identifier raises EMQ.
   * Server-side enrichment: pull country from Vercel/Cloudflare geo headers
   * (always present on request) so every event gets 100% country coverage
   * without any browser code path. Same for IP/UA. */
  const userData = {
    client_user_agent: String(req.headers['user-agent'] || ''),
    client_ip_address:
      String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
      String(req.headers['x-real-ip'] || '').trim() ||
      undefined,
  };
  const email = String(b.email || '').trim();
  if (email && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) userData.em = [sha256(email)];
  const phone = String(b.phone || '').replace(/\D/g, '');
  if (phone.length >= 7) userData.ph = [sha256(phone)];
  const fn = lettersOnly(b.fn);
  if (fn) userData.fn = [sha256(fn)];
  const ln = lettersOnly(b.ln);
  if (ln) userData.ln = [sha256(ln)];
  const st = String(b.st || '').trim().toLowerCase();
  if (st) userData.st = [sha256(st)];
  /* Country from body if browser resolved it, else fall back to Vercel's own
   * request-geo header (`x-vercel-ip-country`) which is present on every
   * request routed through Vercel edge. This alone lifts country coverage on
   * anonymous pageviews from ~1% to ~100%. Value is a 2-letter ISO code. */
  let country = String(b.country || '').trim().toLowerCase();
  if (!country) {
    country = String(req.headers['x-vercel-ip-country'] || '').trim().toLowerCase() ||
              String(req.headers['cf-ipcountry'] || '').trim().toLowerCase();
  }
  if (country && country.length === 2) userData.country = [sha256(country)];
  /* Region/state from Vercel geo header as an additional identifier. */
  if (!st) {
    const regionCode = String(req.headers['x-vercel-ip-country-region'] || '').trim().toLowerCase();
    if (regionCode) userData.st = [sha256(regionCode)];
  }
  const xid = String(b.external_id || '').trim();
  if (xid) userData.external_id = [sha256(xid)];
  /* Preserve valid browser IDs; compare fbc against the original URL click ID
   * when available. A format-only regex cannot detect lowercase/truncation. */
  const FBP_RE = /^fb\.\d+\.\d{13}\.\d+$/;
  if (typeof b.fbp === 'string' && FBP_RE.test(b.fbp)) userData.fbp = b.fbp;
  const click = resolveFbc(b.fbc, b.url);
  if (click.value) userData.fbc = click.value;
  res.setHeader('x-lla-fbc', click.state);

  const event = {
    event_name: name,
    event_time: Math.floor(Date.now() / 1000),
    event_id: String(b.event_id || '') || undefined,
    action_source: 'website',
    event_source_url: String(b.url || '').slice(0, 1024) || undefined,
    user_data: userData,
  };
  if (name === 'Purchase' || name === 'InitiateCheckout' || name === 'AddToCart') {
    event.custom_data = {
      currency: String(b.currency || 'USD').toUpperCase(),
      value: Number(b.value) || 0,
    };
    if (b.content_name) event.custom_data.content_name = String(b.content_name).slice(0, 120);
    if (b.order_id && name === 'Purchase') event.custom_data.order_id = String(b.order_id);
  } else if (b.content_name || b.content_ids) {
    /* Optional context on the low-scoring click events. */
    event.custom_data = {};
    if (b.content_name) event.custom_data.content_name = String(b.content_name).slice(0, 120);
    if (b.content_ids) event.custom_data.content_ids = [].concat(b.content_ids).slice(0, 10).map(String);
  }

  try {
    const r = await fetch(
      'https://graph.facebook.com/v21.0/' + PIXEL_ID + '/events?access_token=' + encodeURIComponent(TOKEN),
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(useTestCode ? { data: [event], test_event_code: testCode } : { data: [event] }),
      }
    );
    const body = await r.json().catch(() => ({}));
    return res.status(r.ok ? 200 : 502).json({
      ok: r.ok,
      meta_status: r.status,
      events_received: body.events_received,
      fbtrace_id: body.fbtrace_id,
      ...(useTestCode ? { validation: {
        release: RELEASE,
        fbc_state: click.state,
        fbc_length: userData.fbc ? userData.fbc.length : 0,
        // Deliberately NOT sha256(): that helper lowercases identity fields.
        fbc_sha256: userData.fbc ? crypto.createHash('sha256').update(userData.fbc).digest('hex') : null,
        click_id_sha256: userData.fbc ? crypto.createHash('sha256').update(userData.fbc.split('.').slice(3).join('.')).digest('hex') : null
      } } : {}),
      error: body.error ? { message: body.error.message, code: body.error.code } : undefined,
    });
  } catch (e) {
    return res.status(502).json({ ok: false, error: 'meta_unreachable' });
  }
};
