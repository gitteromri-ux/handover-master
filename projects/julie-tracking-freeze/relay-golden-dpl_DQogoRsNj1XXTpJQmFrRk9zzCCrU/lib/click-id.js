'use strict';

// Click identifiers are opaque and case-sensitive. Never run them through
// identity normalization, hashing, trimming, truncation or cookie decoding.
function parseFbc(value) {
  if (typeof value !== 'string') return null;
  const match = /^(fb\.\d+\.\d{13}\.)([A-Za-z0-9_-]+)$/.exec(value);
  return match ? { value, prefix: match[1], clickId: match[2] } : null;
}

function clickIdFromUrl(value) {
  if (typeof value !== 'string') return null;
  let url;
  try { url = new URL(value); } catch (_) { return null; }
  // Read URL transport encoding once. URLSearchParams also changes literal '+'
  // to spaces, so do not use it for an opaque click identifier.
  const match = /(?:^|&)fbclid=([^&]*)/.exec(url.search.slice(1));
  if (!match) return null;
  let id;
  try { id = decodeURIComponent(match[1]); } catch (_) { return null; }
  return /^[A-Za-z0-9_-]+$/.test(id) ? id : null;
}

function resolveFbc(cookie, sourceUrl, now = Date.now()) {
  const parsed = parseFbc(cookie);
  const original = clickIdFromUrl(sourceUrl);
  if (original) {
    if (parsed && parsed.clickId === original) {
      return { value: parsed.value, state: 'kept_exact' };
    }
    // Meta permits constructing fbc from the original fbclid in the request URL.
    // A different cookie may be stale, lowercased or truncated. Do not forward
    // its click ID or pretend its creation time belongs to the current click.
    return {
      value: 'fb.1.' + now + '.' + original,
      state: parsed ? 'url_replaced_mismatch' : 'url_original'
    };
  }
  if (parsed) return { value: parsed.value, state: 'kept_cookie' };
  return { value: undefined, state: cookie ? 'invalid_omitted' : 'absent' };
}

module.exports = { parseFbc, clickIdFromUrl, resolveFbc };
