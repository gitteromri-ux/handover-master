'use strict';
const crypto = require('crypto');

// Operational receipt only. Never log payloads, credentials, contact details,
// raw click IDs, raw order IDs, IP addresses, user agents or complete URLs.
module.exports = function receipt(input, forwardedUserData, outcome) {
  try {
    const b = input || {}, u = forwardedUserData || {}, o = outcome || {};
    const names = ['AddToCart', 'InitiateCheckout', 'Purchase'];
    if (!names.includes(b.event_name)) return;
    let campaign = null, adset = null;
    try {
      const url = new URL(b.url);
      if (url.hostname === 'longevitylifeacademy.pages.dev') {
        const c = url.searchParams.get('cid');
        const a = url.searchParams.get('adGroupID');
        if (/^\d{1,20}$/.test(c || '')) campaign = c;
        if (/^\d{1,20}$/.test(a || '')) adset = a;
      }
    } catch (_) {}
    const row = {
      kind: 'lla_blueprint_capi_receipt',
      release: 'blueprint-receipts-20260928-1',
      at: new Date().toISOString(),
      event_name: b.event_name,
      event_key: b.event_id
        ? crypto.createHash('sha256').update(String(b.event_id)).digest('hex')
        : null,
      campaign_id: campaign,
      ad_group_id: adset,
      test_classification: /^TEST\d{3,10}$/.test(String(b.test_event_code || ''))
        ? 'declared_test' : 'unclassified',
      match_keys: Object.fromEntries(
        ['fbc', 'fbp', 'em', 'ph', 'fn', 'ln', 'st', 'country',
          'external_id', 'client_ip_address', 'client_user_agent']
          .map(k => [k, !!(u[k] && (!Array.isArray(u[k]) || u[k].length))])
      ),
      http_status: Number.isInteger(o.http_status) ? o.http_status : null,
      meta_status: Number.isInteger(o.meta_status) ? o.meta_status : null,
      events_received: Number.isInteger(o.events_received) ? o.events_received : null,
      result: o.http_status === 200 && o.meta_status >= 200 &&
        o.meta_status < 300 && o.events_received >= 1
        ? 'accepted' : o.network_error ? 'unconfirmed' : 'rejected',
      error_code: Number.isInteger(o.error_code) ? o.error_code : null,
      fbtrace_id: /^[A-Za-z0-9_-]{1,160}$/.test(o.fbtrace_id || '')
        ? o.fbtrace_id : null
    };
    console.log(JSON.stringify(row));
  } catch (_) {
    // Logging must never affect event forwarding, response or checkout.
  }
};
