# French Atelier — Culture Capsules & Course E-commerce Launch — Full Handover
Date: 2026-10-20 (Asia/Jerusalem). Author: Perplexity Computer, for the next operator.
Scope: everything done, checked, deployed, and left open in this assignment, from the first message to the last.
Framing requested by the owner: wherever a difficulty appears below, it is written as "I did not have full context; the challenge I encountered was …". The next operator should treat every such item as unresolved and re-verify it with full context, not as an established fact.

---

## 1. The assignment (owner's brief, in order)

1. Launch the French Atelier Culture Capsules e-commerce activity today, urgently. Same three checkout screens as the Longevity / Julie masterclass, in French Atelier design; payments page with credit cards and PayPal only (no Apple Pay / Google Pay).
2. All abandoned-cart triggers to ActiveCampaign (AC) and the CRM exactly like the Longevity masterclass website, but fully separate for French Atelier. Everything connected to eTeacher and Airwallex. Tracking: pixel + CAPI "golden" set-up, correct triggers, so that CRM-automated abandoned-checkout emails fire like the other schools.
3. People must still be able to leave a lead or do full e-commerce.
4. Change nothing and touch nothing in Longevity.
5. Push the course e-commerce page live as a hidden landing page (reachable only by link), on the website URL, coded into the CRM, with pixel and CAPI. Do the same for the Culture Capsules page, inside frenchatelierlive.com, hidden, invite link only, French brand only.
6. Owner stated all keys already exist; emails done with Chris and Sandra for French are already connected in AC.
7. Discount rates must be adjusted on the website to the CRM set prices or payments will not be accepted (CRM price table supplied, see §4).
8. WhatsApp: French number wa.me/15557947802 only.
9. Tracking must use the same event fields and the same format as the Julie masterclass page, with French naming instead of Longevity naming.
10. Price changes allowed only on the new hidden e-commerce course page and the Culture Capsules page, never on the normal frenchatelierlive.com homepage or other pages.
11. Final instruction: no compromises; capsules must be full end-to-end e-commerce, like the masterclass.

---

## 2. Live URLs and deliverables

### Live hidden pages (noindex, not linked from any menu; all return HTTP 200, verified today)
- Course e-commerce LP: https://www.frenchatelierlive.com/french-course-enroll.html
- Culture Capsules e-commerce LP: https://www.frenchatelierlive.com/culture-capsules-enroll.html
- Checkout (3 screens, card + PayPal only): https://www.frenchatelierlive.com/enroll-checkout.html
  - Query parameters: `?product=fa-course&level=beginner|elementary|foundation|intermediate` or `?product=capsule-1&capsules=gastronomy|fashion-art|cinema-music` (also `capsule-2`, `capsule-3`). `?qa=1` or `?fatest=1` marks the session as QA (excluded from CAPI by the relay). `?env=staging` routes to the staging CRM.

### Page provenance (which version of which page each file came from)
| Live file | Source | Notes |
|---|---|---|
| french-course-enroll.html | `pricing.html` from branch `staging-checkout-ecom-dark` (dark design, commit f2f04f1 lineage) | prices changed today, see §5 |
| culture-capsules-enroll.html | `capsules.html` from branch `staging-capsules-light` (light design) | video assets copied as `assets/video/pillar-tradition-v2.*` |
| enroll-checkout.html | `checkout.html` from `staging-checkout-ecom-dark` (3a72507 lineage) | wallets removed; CRM-driven payment summary |

### Repositories and commits (GitHub, org gitteromri-ux)
Repo `gitteromri-ux/french-atelier`, branch `main` (site served at www.frenchatelierlive.com via GitHub Pages / Cloudflare). Working branch `fa-ecom-live` was pushed to `main` after each step. Commits today, oldest first:
| SHA | Content |
|---|---|
| 4aea60b | Hidden LPs created (new files only; no existing page changed). FA pixel 4075596186030950, CAPI mirror, FA AC stages, capsule CRM course ids, card + PayPal only |
| b4b4b3f | Main-course AbroadCourseIDs per level (1768 / 1770 / 1772 / 1773) |
| c077619 | Pricing aligned to CRM table (course $1,235 list; $199 + 3 × $200 = $799, 35% off; full $1,050; monthly 4 × $308.75); MainAbroadCourseId per level/capsule; multi-capsule packs go to reserve (lead) mode |
| 0489dfb | WhatsApp wa.me/15557947802 (French) replaces Longevity 12015023701 on all three pages |
| 19250aa | "Golden" tracking: 1:1 port of the Julie tracking module with French naming (see §6) |
| 7fdb96a | Real MainAbroadCourseIds read back from the CRM (254 / 255 / 256 / 257 levels; 267 / 270 / 269 capsules) — see §7 |
| 291416a | Checkout shows "X% off CRM list price" (course 35% off $1,235; capsule 41% off $500); fixed a wrong "then 4 × $200 · 45% off" line |
| 9e18981 | Course LP + checkout set to $89 today + 4 × $199 = $885 (28% off $1,235), matching what the CRM returned; CRM payment semantics in validation (hidden pages only) |
Rollback of the whole day: `git revert 9e18981 291416a 7fdb96a 19250aa 0489dfb c077619 b4b4b3f 4aea60b` or delete the three HTML files plus `js/fa-checkout.js`, `js/fa-checkout-config.js`, `js/fa-meta-tracking.js`, `js/fa-promo.js`, `js/fa-whatsapp.js`.

Staging branches also had the WhatsApp fix applied: `staging-capsules-light` 00a8952, `staging-checkout` 5880601, `staging-checkout-ecom-dark` f5ff616.

Repo `gitteromri-ux/handover-master` (`_today-log.md` entries 48f7879, 557e998, 98266b7, f92eb31, c970b41; relay source copy in `projects/french-atelier-golden-relay/`; this document).

### Site files added (all French-only, loaded only by the three hidden pages)
- `js/fa-checkout-config.js` — env detection (production on frenchatelierlive.com, staging otherwise), pixel id, relay endpoints, products, levels and capsules with CRM ids, pricing.
- `js/fa-checkout.js` — 3-screen checkout modal/flow, CRM order creation, payment-details validation, FA_AC abandoned-cart module, Meta tracking bridge, reserve (lead) fallback.
- `js/fa-meta-tracking.js` — 1:1 port of `jml/assets/julie-meta-tracking.js` (release julie-meta-20260927-4) → release `fa-meta-20261020-1`.
- `js/fa-promo.js`, `js/fa-whatsapp.js` — promo bar (CAPSULE20) and WhatsApp button (French number).

---

## 3. Server side (Vercel project fa-leads-proxy)

- Project: `fa-leads-proxy` (id prj_byAoWWUN5aXdGDrGRb7PJ25hINlI, team gitter1). Public base: https://fa-leads-proxy.vercel.app
- Production deployments today: dpl_CScnEfKhxb2sZ6i39qasj3pQoBQH (first golden relay), then dpl_5MKWHx75sUWYkfZBvZ3LQyBycSRt (current). Previous production (rollback target): dpl_DgtqCgtqQLpzs6gwaCfJKpKKMBYk (only `api/ecomm.js`, `api/leads.js`).
- Routes: `/leads` (lead relay), `/api/lead/ecomm` (CRM AddNewECommerceLeadAndOrder, ProductID forced to 25), `/api/checkout/details` (GetECommerceFirstPaymentDetails → Airwallex intent), `/api/checkout/payments/crm` (SetECommercePayment), `/staging/api/...` (same against staging CRM), `/api/meta/capi` (CAPI relay, strict: origin frenchatelierlive.com, source `french-atelier`, allowed paths only, QA sessions excluded), `/api/ac/event` (AC abandoned-cart stage writer). Health: https://fa-leads-proxy.vercel.app/api/ecomm/health and https://fa-leads-proxy.vercel.app/api/meta/capi
- Environment variables (production): FA_CRM_PROD_BASE, FA_CRM_STG_BASE / _TOKEN / _CF_ID / _CF_SECRET (pre-existing); added today with owner approval: FA_PROD_GATEWAY = https://eteacher-leads-proxy.gitter-omri.workers.dev (production CRM calls go through the existing eTeacher Cloudflare gateway worker, which forwards to the CRM; the FA relay has no production CRM credentials of its own), FA_AC_API_KEY (the eTeacher ActiveCampaign key, account eteachergroup.api-us1.com, verified 200 against /api/3/users/me), FA_META_PIXEL_ID = 4075596186030950. NOT set: FA_META_CAPI_TOKEN (see §8).
- Source of the relay: handover-master `projects/french-atelier-golden-relay/` (api/ecomm.js, api/leads.js, api/ac/event.js, api/meta/capi.js, lib/fa-capi.js, lib/click-id.js, vercel.json, package.json). `api/ac/event.js` and `lib/fa-capi.js` are ports of the frozen Julie golden relay (handover-master `projects/julie-tracking-freeze/relay-golden-dpl_DQogoRsNj1XXTpJQmFrRk9zzCCrU/`) with French names.
- Longevity relay `lla-ac-events`, the Julie masterclass page, and pixel 1440305917310328 were not modified (frozen until 2026-10-26).

---

## 4. CRM identifiers used (eTeacher CRM, brand/product French Atelier = ProductID 25)

Supplied by the owner (screenshots and messages) and used in `js/fa-checkout-config.js`:

| Item | Value |
|---|---|
| ProductID (French Atelier) | 25 (Longevity is 26; never used for French) |
| LanguageId | 101 (assumption carried from Longevity; the CRM echoed 101 on French courses) |
| Capsules campus | CampusId 4204, MainGroupID 4202 |
| Gastronomy & Wine | semester 2268 (starts 8 Dec 2026, Sun 21:30), CourseID 170256, AbroadCourseID 1807, GroupNum 3 |
| Fashion & Art | semester 2268, CourseID 170581, AbroadCourseID 1798, GroupNum 6 |
| Cinema & Music | semester 2381 (starts 10 Jan 2027), CourseID 170258, AbroadCourseID 1806, GroupNum 4 |
| Main course AbroadCourseIDs (owner's dropdown) | Foundation 1768 (study group 1737), Beginner 1770 (1738), Elementary 1772 (1808), Intermediate 1773 (1809); 1749/1776/1777/1775 Let's Speak French; 1730/1731 old, not needed |
| MainAbroadCourseIds (read back from CRM responses today) | Foundation 254, Beginner 255, Elementary 256, Intermediate 257, Fashion & Art 267, Gastronomy & Wine 270, Cinema & Music 269 |

CRM price table supplied by the owner (USA): French Atelier levels — No-Trial course $1,235, 4 payments, max discount 44%, min first payment 18%; Trial course $1,111. Culture Capsules — No-Trial $500, 4 payments, max 44%; Trial $380. Let's Speak French $800, max 25%. Study kit $120; registration fee (return) 11%.

Other CRM data seen in the owner's screenshots: Beginner/Intermediate semester 2026-11 $247 + $741 = $988; Elementary 2026-12 $160 + $480 = $640.

---

## 5. Pricing as currently shown on the hidden pages

| Product | Shown today | Basis |
|---|---|---|
| French Atelier course (any level), "Enroll online" | $89 today, then 4 × $199, $885 total, "28% off $1,235" | commit 9e18981 — set to the plan the CRM returned on every French order (see §7); the owner later stated this $89/$199 plan is one he invented yesterday and configured on a website/CRM only very recently |
| Course, "Monthly" card | 4 × $308.75 = $1,235 — advisor CTA (not e-commerce) | CRM list |
| Course, "Pay in full" card | $1,050 — advisor CTA (not e-commerce) | 15% off list; the `fa-course-full` product in config ($799 single payment) is not linked from the page |
| 1 Culture Capsule | $99 × 3 months = $297, shown as "41% off $500" | CRM list $500; 297 = 40.6% off |
| 2 capsules | $534 ($89 × 3 × 2) | currently reserve (lead) mode, see §7 |
| 3 capsules | $567 ($63 × 3 × 3) | currently reserve (lead) mode |
| CAPSULE20 promo bar | 20% off any capsule package, 7 days | left as is; flagged that with list $500 and a 44% maximum it may breach the rule on 2/3 packs |
| "Your first two weeks free" copy | kept from the staging design | flagged, not verified against CRM trial rules |

Earlier today the course was $199 today + 3 × $200 = $799 (35% off) (commit c077619) and before that $99 + 4 × $175 (staging design).

The normal homepage and all other frenchatelierlive.com pages were not changed.

---

## 6. Tracking (Meta pixel, CAPI, ActiveCampaign) — what is in place

Format: identical to the Julie masterclass golden set-up, renamed for French:
- Pixel: 4075596186030950 "French Atelier" (ETeacher Group business 1545475089051742; used by the French Atelier v2 Sales ad sets, e.g. ad set 120251205806290546). Pixel 4400286150281912 "FA" (Gita Agency, never fired) is NOT used. Ad accounts: act_1188017096669618 (French Atelier), act_1358975119724184 (v2).
- Event ids: PageView `fa_pv_<session>`, ViewContent `fa_vc_<session>`, AddToCart `fa_atc_<session>_<product>`, InitiateCheckout `fa_ic_<CRM orderid>`, Purchase `= <CRM orderid>`. Browser pixel and CAPI share the same event id (dedup). InitiateCheckout fires on the payment screen once the CRM order exists.
- Identity: fbp/fbc cookies (`fa_fbc_v1` on frenchatelierlive.com), fbclid capture, email/phone/name/external_id (student id) hashed by the relay; QA sessions (`?qa=1`, `?fatest=1`, TEST### codes) excluded.
- AC abandoned-cart stages (client module `FA_AC`, 1:1 port of Julie's `LLA_AC`, same payload fields `{email, fullName, phone, sessionDate, stage, env, productEvent, orderId, studentId, page, ts}`): `FA_Abandoned_Cart_Name_Details` (screen 1 identified) → `FA_Abandoned_Cart_Course_Details` (screen 2) → `FA_Abandoned_Cart_No_Payment` (payment screen, with CRM order and student ids). productEvent: `Regular` (course), `VIP` (course paid in full), `Capsules`. Nothing is written to AC on payment success (as in Julie; the CRM→AC sync handles buyers). Staging sessions never write to production AC.
- Relay AC writer expects these AC field titles: `FA_checkout_events` (dropdown with the three stage values), `FA_Course_Session_Date`, `FA_Course_Order_Id`, `FA_Course_Student_Id`, `FA_Product_Event`, `FA_Course_Purchase_Status`.
- Verified in a headless browser on the live pages: pixel 4075596186030950 loads; PageView / ViewContent / AddToCart / InitiateCheckout fire with the ids above; AC stage posts fire in the right order with the CRM order id (server calls simulated in that test; then re-verified against the real relay in the production order of §7).

---

## 7. CRM orders created and what came back

All orders below are test orders created by me. Nothing was charged (no card was entered).

| Env | Order | Student | Course | Request sent | CRM response |
|---|---|---|---|---|---|
| production | 8056259 | 11676664 | Beginner 255 / 1770 | FirstPayment 199, NumberOfPayments 4, LeftToPay 600 | AmountToCharge 89, OrderCoursePrice 885, 4 × 199 → page refused to charge (mismatch), lead saved instead |
| production | 8056277 | 11676701 | Beginner 255 / 1770 | FirstPayment 89, NumberOfPayments 4, LeftToPay 796 | AmountToCharge 89, 885 total, PaymentID 64612556, Airwallex intent $89 → card form mounted on the live page |
| staging | 8054183 | 11674592 | 283 / 1770 (probe) | — | used to read back MainAbroadCourse mapping |
| staging | 8054270 | 11674688 | Gastronomy & Wine 270 / 1807, class 170256 | FirstPayment 99, NumberOfPayments 2, LeftToPay 198 | CoursePrice 500, LengthInMonths 3; order: AmountToCharge 89, ListCoursePrice 885, 4 × 199 |
| staging | ~60 probe orders | gitter.omri+…@gmail.com | all seven French courses | many price / payment / discount / trial / academic / country variants, and ProductIDs 1–30 | ProductID 25: always 89 + 4 × 199 = 885. Every other ProductID (incl. 26): course list price honored, FirstPayment/NumberOfPayments/LeftToPay honored, DiscountPercent honored (e.g. $500 − 40% = $300) |

Observed API facts (AddNewECommerceLeadAndOrder, as echoed back by the CRM): accepted fields are the lead fields plus MainAbroadCourseId, AbroadCourseId, PreferredCourseId, ProductId, LanguageId, IsTrial, IsAcademic, FirstPayment, NumberOfPayments, LeftToPay, DiscountPercent (integer; decimals echoed as null), DiscountReason, ASyncDuration, CheckOutUrl. 25 other candidate names (RegistrationFee, RegFee, StudyKit, PricePlanId, CouponCode, PromoCode, CoursePrice, UseWebsitePrice, SemesterId, CampusId, GroupNum, …) were not echoed. GetECommerceFirstPaymentDetails semantics on orders that honored the website price: AmountToCharge = today's payment, NumOfPayments = payments after it, PaymentPerMonth each, OrderCoursePrice = plan total. Where DiscountPercent was honored it overrode the installment fields and charged the discounted total at once.

I did not have full context; the challenge I encountered was: every French (ProductID 25) e-commerce order, on staging and production, came back priced $89 + 4 × $199 = $885 regardless of course (capsules included) and regardless of the price fields sent, while the same requests under other ProductIDs took the course price and the website's payment plan. I could not determine from the website side why the French brand behaves this way or how the CRM's e-commerce pricing is configured per brand/course. The owner states the CRM is configured correctly, that each course has its own price, that sales sell capsules at about $299 in payments, that a "registration fee" acts as the first payment on eTeacher e-commerce sites, and that the $89/$199 plan is a new price he configured very recently and not an established French Atelier price. The next operator should start from the CRM's e-commerce price configuration for ProductID 25 and for the capsule courses 267/270/269 (and the FA levels 254–257), with someone who has full CRM context, before changing any website code.

Because of this, the live capsule checkout currently creates the CRM order, then refuses to charge when the Airwallex amount differs from the page price, and saves the person as a lead ("reserve" path). The live course checkout charges $89 today because that matches the CRM order.

---

## 8. Other items checked, and open items

- ActiveCampaign: the eTeacher account has 142 custom fields; none starts with "FA" and `FA_checkout_events` does not exist (Longevity's `LGV_checkout_events` id 206 and LGV_Masterclass_* fields 214–218 do). The relay returns `queued:false, reason:field_missing` for French stages; the CRM order itself is still created. I did not have full context; the challenge I encountered was: the owner said the Chris/Sandra French emails are connected in AC, but I could not find the French stage field or an FA automation via the API (the automations list returned 0 items with this key; the AC connector returned "Invalid URL" on every call), so I could not confirm which field/automation the French abandoned-cart emails are built on. Chris's French email set (repo `french-atelier-lifecycle-emails`, `launch-email-for-chris/`) uses stages FA_Abandoned_Cart_* and tokens like `%FACOURSESTARTDATE%`, and tiers Regular $99 / VIP $1,460.
- Meta CAPI token: the Longevity token (lla-ac-events env META_CAPI_TOKEN) returns "(#100) Missing Permission" on pixel 4075596186030950, so FA_META_CAPI_TOKEN is not set and the relay reports `configured:false`; browser pixel events fire, server events do not. A Conversions API token generated in Events Manager for pixel 4075596186030950 is needed.
- WhatsApp: all three pages use wa.me/15557947802 (verified live). Longevity 12015023701 and eTeacher sales 12067467744 are not used.
- Multi-capsule purchases: one CRM order on the first capsule with the others in DynamicParameters; the owner asked for one order per capsule (1 of each). Not built.
- Owner's earlier abandoned-cart test ran on the staging checkout; staging CRM does not sync to AC, so no email was expected.
- The eTeacher "Leads API — Integration Guide for External Providers" (Google Doc 1NUBY2YNpgd3lqbV7ybTMi0mdLqP9a461nyVF9PbbXck) covers the leads endpoint only, not the e-commerce endpoints. I did not have full context; the challenge I encountered was: I did not locate an e-commerce API document for AddNewECommerceLeadAndOrder / GetECommerceFirstPaymentDetails / SetECommercePayment; the field list in §7 comes from the CRM's own echoes and from the Longevity code (`lla-course-checkout/assets/eteacher-ecomm.js`, `julie-masterclass-live/index.html`), not from documentation.
- The "IIBS way" reference (Sept 27 Longevity/Roberto thread): one brand checkout link `/checkout/?stid=X&orderid=Y`, page reads the CRM order and charges AmountToCharge ("course registration fee (today)") then NumOfPayments × PaymentPerMonth. The French checkout does not yet accept `stid/orderid` links.

---

## 9. Everything I consulted
- Repos: gitteromri-ux/french-atelier (all branches above), handover-master (HANDOVER.md, _today-log.md, projects/french-atelier*.md, projects/julie-tracking-freeze/), lla-course-checkout (worker/src/index.js gateway, assets/eteacher-ecomm.js, assets/lla-promo.js, worker/CLOUDFLARE-INTEGRATION-SPEC.md), julie-masterclass-live (index.html, assets/julie-meta-tracking.js), french-atelier-lifecycle-emails.
- Vercel: projects fa-leads-proxy, lla-ac-events (env names; Longevity values read only to test reuse, not changed), deployment file trees.
- eTeacher CRM via fa-leads-proxy staging/production and the eteacher-leads-proxy gateway (orders in §7).
- ActiveCampaign API (fields, automations) with the eTeacher key.
- Meta Graph API (pixel ownership, ad sets, token permission check).
- Google Drive: eTeacher Leads API guide; searches for e-commerce/Airwallex docs.
- Memory/knowledge wiki: french-atelier, french-atelier-checkout, french-atelier-capsules-launch, julie-meta-tracking, lla-course-checkout; session notes 2026-09-21..27 (IIBS reference thread).
- Owner uploads: CRM AbroadCourse dropdown screenshot, CRM price table screenshot (×2), CRM semester/price screenshots.

## 10. Credentials and access touched
No credentials were printed or stored outside the sandbox; temporary decrypted copies were shredded. Added to fa-leads-proxy production: FA_PROD_GATEWAY, FA_AC_API_KEY, FA_META_PIXEL_ID (owner approved at 13:04). No Longevity project, page, pixel, env or AC field was changed.
