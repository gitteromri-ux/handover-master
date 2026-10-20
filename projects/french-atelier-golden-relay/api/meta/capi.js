'use strict';
/* THE FRENCH ATELIER — Meta Conversions API endpoint (FA-only relay).
 * Every request goes through the strict Golden module lib/fa-capi.js. Pixel 4075596186030950. */
const fa = require('../../lib/fa-capi');
module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', fa.ORIGIN); res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS'); res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('x-fa-release', fa.RELEASE); return res.status(204).end();
  }
  if (req.method === 'GET') return res.status(200).json({ ok: true, service: 'fa-capi', release: fa.RELEASE, pixel: process.env.FA_META_PIXEL_ID || '4075596186030950', configured: !!process.env.FA_META_CAPI_TOKEN });
  return fa.handle(req, res);
};
