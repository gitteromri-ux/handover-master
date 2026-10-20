/* =====================================================================
   French Atelier — eTeacher E-COMMERCE relay (Vercel serverless)
   ---------------------------------------------------------------------
   Mirrors the three Longevity checkout routes, but for French Atelier
   (ProductID 25) with its OWN credentials. The eTeacher CRM web API sits
   behind Cloudflare Access, so the browser cannot call it: this function
   adds the CF-Access service-token headers + the API Authorization token,
   forwards the JSON body, FORCES ProductID = 25 on order creation, and
   returns the CRM answer with the CORS headers the site needs.

   Routes (rewritten in vercel.json):
     POST /api/lead/ecomm              -> {CRM}/Students/AddNewECommerceLeadAndOrder   (lead + unpaid order)
     POST /api/checkout/details        -> {CRM}/Students/GetECommerceFirstPaymentDetails (Airwallex intent, amounts, classes)
     POST /api/checkout/payments/crm   -> {CRM}/Students/SetECommercePayment            (payment report)
     Prefix /staging/... (or ?env=staging) targets the staging CRM.

   Environment variables (Vercel project fa-leads-proxy):
     FA_CRM_STG_BASE      default https://stg-webapi2.eteacherapps.com
     FA_CRM_STG_CF_ID, FA_CRM_STG_CF_SECRET, FA_CRM_STG_TOKEN
     FA_CRM_PROD_BASE     default https://webapi2.eteacherapps.com
     FA_CRM_PROD_CF_ID, FA_CRM_PROD_CF_SECRET, FA_CRM_PROD_TOKEN

   If an environment has no credentials configured, the route answers
   503 {ok:false, error:'ENV_NOT_CONFIGURED'} so the site can fall back
   to the proven lead-gen path instead of failing a paying customer.
   ===================================================================== */

const FA_PRODUCT_ID = 25; // French Atelier — NEVER 26 (Longevity)

const ALLOWED_ORIGINS = new Set([
  'https://www.frenchatelierlive.com',
  'https://frenchatelierlive.com',
  'https://fa-staging-checkout-gitter1.vercel.app',
  'https://fa-staging-light-gitter1.vercel.app',
  'https://fa-staging-light.vercel.app',
  'https://gitteromri-ux.github.io',
]);

const ROUTES = {
  'lead/ecomm':             { path: '/Students/AddNewECommerceLeadAndOrder',   forceProduct: true },
  'checkout/details':       { path: '/Students/GetECommerceFirstPaymentDetails', forceProduct: false },
  'checkout/payments/crm':  { path: '/Students/SetECommercePayment',           forceProduct: false },
};

// Raw card data must never transit this relay (Airwallex handles PCI).
const FORBIDDEN_KEYS = /^(card_?number|cardnumber|pan|cvc|cvv|cvv2|expiry|exp_?month|exp_?year)$/i;

function applyCors(req, res) {
  const origin = req.headers.origin || '';
  const allowOrigin = ALLOWED_ORIGINS.has(origin) ? origin : 'https://www.frenchatelierlive.com';
  res.setHeader('Access-Control-Allow-Origin', allowOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
  res.setHeader('Access-Control-Max-Age', '86400');
  res.setHeader('Vary', 'Origin');
  res.setHeader('Cache-Control', 'no-store');
}

function resolveEnv(req) {
  const q = (req.query && req.query.env) || '';
  if (q === 'staging' || q === 'production') return q;
  return /^\/staging\//.test(req.url || '') ? 'staging' : 'production';
}

function resolveRoute(req) {
  const q = (req.query && req.query.route) || '';
  if (ROUTES[q]) return q;
  const m = (req.url || '').match(/\/api\/(lead\/ecomm|checkout\/details|checkout\/payments\/crm)/);
  return m ? m[1] : '';
}

function creds(env) {
  const p = env === 'staging' ? 'FA_CRM_STG_' : 'FA_CRM_PROD_';
  const base = process.env[p + 'BASE'] || (env === 'staging' ? 'https://stg-webapi2.eteacherapps.com' : 'https://webapi2.eteacherapps.com');
  const id = process.env[p + 'CF_ID'], secret = process.env[p + 'CF_SECRET'], token = process.env[p + 'TOKEN'];
  if (id && secret && token) return { base: base.replace(/\/+$/, ''), id, secret, token };
  /* Production gateway mode: forward server-to-server through the existing eTeacher
     production gateway (no change to it). Only when FA_PROD_GATEWAY is set. ProductID 25
     is still forced HERE before forwarding, so every order is a French Atelier order. */
  if (env === 'production' && process.env.FA_PROD_GATEWAY) return { gateway: process.env.FA_PROD_GATEWAY.replace(/\/+$/, '') };
  return null;
}
const GATEWAY_PATHS = { 'lead/ecomm': '/api/lead/ecomm', 'checkout/details': '/api/checkout/details', 'checkout/payments/crm': '/api/checkout/payments/crm' };

async function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string' && req.body.length) {
    try { return JSON.parse(req.body); } catch (e) { return null; }
  }
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString('utf8');
  if (!raw) return {};
  try { return JSON.parse(raw); } catch (e) { return null; }
}

module.exports = async (req, res) => {
  applyCors(req, res);
  if (req.method === 'OPTIONS') { res.statusCode = 204; return res.end(); }

  const env = resolveEnv(req);
  const routeKey = resolveRoute(req);

  if (req.method === 'GET') {
    const pc = creds('production'); const configured = { staging: !!creds('staging'), production: !!pc, productionMode: pc ? (pc.gateway ? 'gateway' : 'direct') : null };
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ ok: true, service: 'fa-eteacher-ecomm-relay', productId: FA_PRODUCT_ID, routes: Object.keys(ROUTES), configured }));
  }
  if (req.method !== 'POST') { res.statusCode = 405; return res.end(JSON.stringify({ ok: false, error: 'METHOD_NOT_ALLOWED' })); }
  if (!routeKey) { res.statusCode = 404; return res.end(JSON.stringify({ ok: false, error: 'UNKNOWN_ROUTE' })); }

  const c = creds(env);
  if (!c) {
    res.statusCode = 503;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ ok: false, error: 'ENV_NOT_CONFIGURED', env }));
  }

  const body = await readBody(req);
  if (!body || typeof body !== 'object') { res.statusCode = 400; return res.end(JSON.stringify({ ok: false, error: 'INVALID_JSON' })); }
  for (const k of Object.keys(body)) {
    if (FORBIDDEN_KEYS.test(k)) { res.statusCode = 400; return res.end(JSON.stringify({ ok: false, error: 'FORBIDDEN_FIELD', field: k })); }
  }

  const route = ROUTES[routeKey];
  if (route.forceProduct) {
    body.ProductID = FA_PRODUCT_ID;
    delete body.ProductId; delete body.productId; delete body.productID;
  }

  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 25000);
  let upstream, text;
  try {
    upstream = await fetch(c.gateway ? c.gateway + GATEWAY_PATHS[routeKey] : c.base + route.path, {
      method: 'POST',
      headers: c.gateway ? { 'Content-Type': 'application/json', 'Accept': 'application/json' } : {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'CF-Access-Client-Id': c.id,
        'CF-Access-Client-Secret': c.secret,
        'Authorization': c.token,
      },
      body: JSON.stringify(body),
      redirect: 'manual',
      signal: ctrl.signal,
    });
    text = await upstream.text();
  } catch (e) {
    clearTimeout(timer);
    res.statusCode = 502;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ ok: false, error: 'UPSTREAM_UNREACHABLE', detail: String(e && e.message || e) }));
  }
  clearTimeout(timer);

  // Cloudflare Access rejecting the service token answers 302 to its login page.
  if (upstream.status >= 300 && upstream.status < 400) {
    res.statusCode = 502;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ ok: false, error: 'ACCESS_DENIED_BY_CLOUDFLARE', env }));
  }

  let json = null;
  try { json = JSON.parse(text); } catch (e) { json = null; }
  res.statusCode = upstream.status;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('X-FA-Env', env);
  if (json !== null && typeof json === 'object') return res.end(JSON.stringify(json));
  return res.end(JSON.stringify({ ok: upstream.ok, status: upstream.status, raw: (text || '').slice(0, 2000) }));
};

