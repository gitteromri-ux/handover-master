/* LLA — ActiveCampaign checkout-event endpoint (Sandra latest-status model)
 * POST /api/ac/event {email, fullName, phone, stage, productEvent, ...}
 * Populates existing contact fields only: latest cart stage (206), supplied
 * masterclass personalization, and Chris's existing Regular/VIP discriminator.
 * The existing purchase route uses purchase status (218), not cart stage.
 * No field definitions, automation definitions, lists or tags are modified.
 * Secret: AC_API_KEY (Vercel env). */

const AC_BASE = 'https://eteachergroup.api-us1.com/api/3';
/* Sandra's field: LGV_checkout_events, id 206. Our API user currently has
 * no READ visibility on it (403 on GET /fields/206) but the field exists —
 * its options endpoint returns the three LGV_Abandoned_Cart values. We
 * resolve by name first, then verify id 206 via its options. If neither
 * works, we write NOTHING and never create anything. */
const AC_FIELD_TITLE = 'LGV_checkout_events';
const AC_FIELD_KNOWN_ID = '206';
let fieldCache = { id: null, ts: 0 };

/* eTeacher-adopted personalization fields (their team: "created and waiting to be
 * populated"). Resolved by title from the visible fields list; known ids as fallback.
 * Values are written only when the site actually sends them. */
const EXTRA_FIELDS = [
  { title: 'LGV_Masterclass_Session_Date', knownId: '214', key: 'sessionDate' },
  { title: 'LGV_Masterclass_Order_Id', knownId: '216', key: 'orderId' },
  { title: 'LGV_Masterclass_Student_Id', knownId: '217', key: 'studentId' },
  /* Chris created this field in ActiveCampaign on 2026-09-23. It separates
   * the $49 Regular and $79 VIP masterclass funnels. Resolve it by its exact
   * existing title; never create it and never guess a numeric field id. */
  { title: 'LGV_Product_Event', knownId: null, key: 'productEvent' },
];
let extraCache = { map: null, ts: 0 };

/* 2026-09-24 (Chris, eTeacher): LGV_Masterclass_Session_Date is now a DATE field that drives the
 * "wait until 3 days before session" onboarding step. The page sends the human label
 * ("Tuesday, October 27 · 7:00 PM ET"); ActiveCampaign only accepts YYYY-MM-DD, YYYY/MM/DD or
 * MM/DD/YYYY for date fields and displays them in the account format (dd/mm/yyyy). We write
 * YYYY-MM-DD, and never write a value the field cannot parse. */
const MONTHS = { jan: 1, january: 1, feb: 2, february: 2, mar: 3, march: 3, apr: 4, april: 4, may: 5,
  jun: 6, june: 6, jul: 7, july: 7, aug: 8, august: 8, sep: 9, sept: 9, september: 9, oct: 10, october: 10,
  nov: 11, november: 11, dec: 12, december: 12 };
function isoDate(y, m, d) {
  y = Number(y); m = Number(m); d = Number(d);
  const t = new Date(Date.UTC(y, m - 1, d));
  if (!(y >= 2000 && y <= 2100) || t.getUTCMonth() !== m - 1 || t.getUTCDate() !== d) return '';
  return y + '-' + String(m).padStart(2, '0') + '-' + String(d).padStart(2, '0');
}
function toAcDate(raw) {
  const s = String(raw || '').trim();
  if (!s) return '';
  let m;
  if ((m = s.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})/))) return isoDate(m[1], m[2], m[3]);
  /* dd/mm/yyyy as displayed in this ActiveCampaign account */
  if ((m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/))) return isoDate(m[3], m[2], m[1]);
  let monName, day;
  if ((m = s.match(/([A-Za-z]{3,9})\.?\s+(\d{1,2})(?:st|nd|rd|th)?\b/)) && MONTHS[m[1].toLowerCase()]) { monName = m[1]; day = m[2]; }
  else if ((m = s.match(/\b(\d{1,2})(?:st|nd|rd|th)?\s+([A-Za-z]{3,9})\b/)) && MONTHS[m[2].toLowerCase()]) { monName = m[2]; day = m[1]; }
  else return '';
  const mon = MONTHS[monName.toLowerCase()];
  const ym = s.match(/\b(20\d{2})\b/);
  let year;
  if (ym) year = Number(ym[1]);
  else {
    /* No year in the label: the session is the next occurrence of that calendar date. */
    const now = new Date();
    year = now.getUTCFullYear();
    const cand = Date.UTC(year, mon - 1, Number(day));
    if (cand < now.getTime() - 14 * 86400000) year += 1;
  }
  return isoDate(year, mon, day);
}

async function resolveExtraIds(key) {
  if (extraCache.map && Date.now() - extraCache.ts < 300000) return extraCache.map;
  const map = {};
  try {
    for (let offset = 0; offset < 10000; offset += 100) {
      const r = await fetch(AC_BASE + '/fields?limit=100&offset=' + offset, { headers: { 'Api-Token': key } });
      if (!r.ok) break;
      const d = await r.json();
      for (const f of d.fields || []) {
        const hit = EXTRA_FIELDS.find((x) => x.title === (f.title || '').trim());
        if (hit) map[hit.key] = f.id;
      }
      if (!d.fields || d.fields.length < 100) break;
    }
  } catch (e) {}
  for (const x of EXTRA_FIELDS) if (!map[x.key] && x.knownId) map[x.key] = x.knownId;
  extraCache = { map, ts: Date.now() };
  return map;
}

async function resolveFieldId(key) {
  if (fieldCache.id && Date.now() - fieldCache.ts < 300000) return fieldCache.id;
  for (const offset of [0, 100]) {
    const r = await fetch(AC_BASE + '/fields?limit=100&offset=' + offset, { headers: { 'Api-Token': key } });
    if (!r.ok) break;
    const d = await r.json();
    const hit = (d.fields || []).find((f) => (f.title || '').trim() === AC_FIELD_TITLE);
    if (hit) { fieldCache = { id: hit.id, ts: Date.now() }; return hit.id; }
    if (!d.fields || d.fields.length < 100) break;
  }
  /* Fallback: field 206 is read-hidden from this API user; confirm it still
   * exists and carries the cart-stage options before writing to it. */
  try {
    const r = await fetch(AC_BASE + '/fields/' + AC_FIELD_KNOWN_ID + '/options', { headers: { 'Api-Token': key } });
    if (r.ok) {
      const d = await r.json();
      const vals = (d.fieldOptions || []).map((o) => o.value);
      if (AC_CART_STAGES.every((s) => vals.includes(s))) {
        fieldCache = { id: AC_FIELD_KNOWN_ID, ts: Date.now() };
        return AC_FIELD_KNOWN_ID;
      }
    }
  } catch (e) {}
  return null;
}
const AC_CART_STAGES = [
  'LGV_Abandoned_Cart_Name_Details',
  'LGV_Abandoned_Cart_Course_Details',
  'LGV_Abandoned_Cart_No_Payment',
];
/* Existing optional purchase route. Availability here does NOT prove the Julie
 * page invokes it or that CRM-to-AC purchase suppression has completed.
 * Writes existing LGV_Masterclass_Purchase_Status (218), never cart field 206. */
const PURCHASE_STAGE = 'LGV_Purchased';
const PURCHASE_FIELD = { title: 'LGV_Masterclass_Purchase_Status', knownId: '218' };

const ORIGINS = [
  'https://www.longevitylifeacademy.com',
  'https://longevitylifeacademy.com',
  'https://longevitylifeacademy.pages.dev',
  'https://longevity-academy.github.io',
  'https://gitteromri-ux.github.io',
  'https://lla-checkout.gitter-omri.workers.dev',
];
const PAGES_DEV_SUFFIX = '.longevitylifeacademy.pages.dev';

function cors(origin) {
  let allow = ORIGINS[0];
  if (origin && (ORIGINS.includes(origin) || (origin.startsWith('https://') && origin.endsWith(PAGES_DEV_SUFFIX)))) allow = origin;
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Vary': 'Origin',
  };
}

module.exports = async function handler(req, res) {
  const h = cors(req.headers.origin || '');
  for (const [k, v] of Object.entries(h)) res.setHeader(k, v);
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });
  if (!process.env.AC_API_KEY) return res.status(503).json({ error: 'ac_not_configured' });

  let b = req.body || {};
  if (typeof b === 'string') { try { b = JSON.parse(b); } catch (e) { b = {}; } }
  const email = String(b.email || '').trim().toLowerCase();
  const stage = String(b.stage || '').trim();
  const productEvent = String(b.productEvent || '').trim();
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return res.status(400).json({ error: 'invalid_email' });
  const isPurchase = stage === PURCHASE_STAGE;
  if (!isPurchase && !AC_CART_STAGES.includes(stage)) return res.status(400).json({ error: 'unknown_stage' });
  if (productEvent && !['Regular', 'VIP'].includes(productEvent)) {
    return res.status(400).json({ error: 'unknown_product_event' });
  }

  const fieldValues = [];
  if (isPurchase) {
    fieldValues.push({ field: PURCHASE_FIELD.knownId, value: 'Purchased' });
  } else {
    const fieldId = await resolveFieldId(process.env.AC_API_KEY).catch(() => null);
    if (!fieldId) return res.status(202).json({ queued: false, reason: 'field_missing', field: AC_FIELD_TITLE });
    fieldValues.push({ field: fieldId, value: stage });
  }

  const full = String(b.fullName || '').trim();
  const sp = full.indexOf(' ');
  const extraIds = await resolveExtraIds(process.env.AC_API_KEY).catch(() => ({}));
  /* Masterclass abandonment must never fall through to the old one-size-fits-all
   * funnel. If the page sent Regular/VIP but the existing AC field cannot be
   * resolved, write nothing and report the configuration failure. */
  if (productEvent && !extraIds.productEvent) {
    return res.status(202).json({
      queued: false,
      reason: 'field_missing',
      field: 'LGV_Product_Event',
    });
  }
  const personalization = [];
  for (const x of EXTRA_FIELDS) {
    let v = String(b[x.key] || '').trim();
    if (x.key === 'sessionDate') v = toAcDate(v);   /* date field: YYYY-MM-DD or nothing */
    if (v && extraIds[x.key]) personalization.push({ field: extraIds[x.key], value: v.slice(0, 255) });
  }
  const identity = { email };
  if (full) {
    identity.firstName = sp > 0 ? full.slice(0, sp) : full;
    if (sp > 0) identity.lastName = full.slice(sp + 1);
  }
  if (String(b.phone || '').trim()) identity.phone = String(b.phone).trim().slice(0, 32);
  async function sync(contact) {
    return fetch(AC_BASE + '/contact/sync', {
      method: 'POST',
      headers: { 'Api-Token': process.env.AC_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ contact }),
    });
  }
  try {
    // Ensure Regular/VIP and date exist before the stage field triggers the
    // team's automation. A rejected pre-write must never trigger a generic flow.
    if (productEvent) {
      const contextResult = await sync({ ...identity, fieldValues: personalization });
      if (!contextResult.ok) return res.status(202).json({
        queued: false, reason: 'personalization_rejected', stage,
        productEvent, ac_status: contextResult.status,
      });
    }
    const r = await sync(productEvent ? { email, fieldValues } :
      { ...identity, fieldValues: fieldValues.concat(personalization) });
    const sd = personalization.find((f) => extraIds.sessionDate && f.field === extraIds.sessionDate);
    return res.status(202).json({ queued: r.ok, stage, productEvent: productEvent || null, ac_status: r.status,
      sessionDate: sd ? sd.value : null });
  } catch (e) {
    return res.status(202).json({ queued: false, stage });
  }
};
module.exports.toAcDate = toAcDate;
