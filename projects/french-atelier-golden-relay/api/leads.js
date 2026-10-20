/* =====================================================================
   French Atelier — eTeacher Leads CORS Proxy (Vercel serverless)
   ---------------------------------------------------------------------
   The eTeacher AWS API Gateway endpoint returns NO CORS headers, so a
   browser on https://www.frenchatelierlive.com cannot POST to it
   directly. This function answers the CORS preflight, forwards the POST
   to the eTeacher endpoint, FORCES ProductID = 25 (French Atelier), and
   returns the response WITH the CORS headers the browser needs.

   This is SEPARATE from the Longevity proxy (ProductID 26). It must
   never touch the Longevity setup.

   Routes (rewritten in vercel.json):
     POST /leads/staging     -> staging eTeacher endpoint
     POST /leads/production  -> production eTeacher endpoint
   Query param ?env=staging|production also works.
   ===================================================================== */

const FA_PRODUCT_ID = 25; // French Atelier — NEVER 26 (that is Longevity)

const ETEACHER_ENDPOINTS = {
  staging:    'https://81pg281wke.execute-api.eu-west-1.amazonaws.com/staging/leads',
  production: 'https://u6ygel4ywa.execute-api.eu-west-1.amazonaws.com/prod/leads',
};

const ALLOWED_ORIGINS = new Set([
  'https://www.frenchatelierlive.com',
  'https://frenchatelierlive.com',
  'https://gitteromri-ux.github.io',
]);

function applyCors(req, res) {
  const origin = req.headers.origin || '';
  const allowOrigin = ALLOWED_ORIGINS.has(origin) ? origin : 'https://www.frenchatelierlive.com';
  res.setHeader('Access-Control-Allow-Origin', allowOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
  res.setHeader('Access-Control-Max-Age', '86400');
  res.setHeader('Vary', 'Origin');
}

function resolveEnv(req) {
  // From path /leads/{env} (via rewrite, exposed as req.query.env) or ?env=
  const q = (req.query && (req.query.env || req.query.environment)) || '';
  if (q === 'staging' || q === 'production') return q;
  // Fallback: parse the raw URL path
  const m = (req.url || '').match(/\/leads\/(staging|production)/);
  return m ? m[1] : 'production';
}

async function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string' && req.body.length) {
    try { return JSON.parse(req.body); } catch (e) { return null; }
  }
  // Stream fallback
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString('utf8');
  if (!raw) return {};
  try { return JSON.parse(raw); } catch (e) { return null; }
}

module.exports = async (req, res) => {
  applyCors(req, res);

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    return res.end();
  }

  if (req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ ok: true, service: 'fa-eteacher-leads-proxy', productId: FA_PRODUCT_ID }));
  }

  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ ok: false, error: 'Method not allowed' }));
  }

  const env = resolveEnv(req);
  const target = ETEACHER_ENDPOINTS[env];

  const payload = await readBody(req);
  if (!payload || typeof payload !== 'object') {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ ok: false, error: 'Invalid payload' }));
  }

  // FORCE French Atelier ProductID 25 (safety net regardless of client).
  payload.ProductID = FA_PRODUCT_ID;

  let upstream, text;
  try {
    upstream = await fetch(target, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload),
    });
    text = await upstream.text();
  } catch (e) {
    res.statusCode = 502;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ ok: false, error: 'Upstream fetch failed: ' + String(e) }));
  }

  res.statusCode = upstream.status;
  res.setHeader('Content-Type', upstream.headers.get('content-type') || 'application/json');
  return res.end(text || JSON.stringify({ ok: upstream.status === 200, status: upstream.status }));
};

