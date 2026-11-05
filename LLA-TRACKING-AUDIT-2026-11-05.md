# LLA tracking audit, 2026-11-05 09:30 Asia/Jerusalem
Production = https://longevitylifeacademy.pages.dev/ at lla-course-checkout 8921037 (CF deploy 46c780ba). Pixel 1440305917310328. Relay https://lla-ac-events.vercel.app/api/meta/capi.
Labels: VERIFIED = observed live in this audit. RECORDED = from code/handover, not re-run. UNVERIFIED = cannot be proven without a real paid order or Events Manager UI.

## A. Landing + funnel events, iPhone 14 emulation, real Enroll flow (VERIFIED)
| Step | Browser pixel (facebook.com/tr) | CAPI relay -> Meta | event_id identical | Identity in CAPI |
|---|---|---|---|---|
| Land with fbclid | PageView, ViewContent | PageView, ViewContent: HTTP 200, meta_status 200, events_received 1, fbtrace_id present | yes (lla_pageview_<ts>_<rand>, lla_viewcontent_...) | fbp, fbc, external_id |
| Enroll click | Enroll_CTA_Click | same, events_received 1 | yes | fbp, fbc, external_id |
| Step 1 Continue | AddToCart (+ Meta auto SubscribedButtonClick) | AddToCart value 79 USD, events_received 1 | yes | em, ph, fn, ln, st, country=us, external_id, fbp, fbc |
| Step 2 date + Continue | InitiateCheckout | InitiateCheckout, 200 | yes | CRM order id |
| Payment page | PageView, AddPaymentInfo | PageView, AddPaymentInfo lla_api_<orderid>, 200 | yes | |
| Paid | Purchase, event_id = CRM order id (RECORDED, code + handover) | same | | UNVERIFIED today: no real charge made |
Checkout on 360px Android: Airwallex/PayPal card fields mounted, Proceed button, "Secure payment ready, live payment of $79.00 USD" (VERIFIED, screenshot in session). Zero JS errors on home or checkout.

## B. Click identity (VERIFIED)
- Landing with fbclid=IwAR2AUDIT_abc-XYZ9: cookie _fbc = fb.1.1793863665285.IwAR2AUDIT_abc-XYZ9; same string in browser PageView/ViewContent and in CAPI PageView/ViewContent. _fbp set.
- Byte-exactness: fbclid containing "+" and "%2B" reached CAPI as fb.1.<ms>.AUDIT123+PLUS_x%2By, untouched. (Meta's pixel itself ignores such non-standard fbclid for its _fbc cookie; our code still carries it. Real fbclids never contain "+".)
- LLA_LIVE=true for a non-team visitor; lla_tester not set.

## C. Meta acceptance and volume (VERIFIED via Graph API /stats)
- Every CAPI call in this audit: meta_status 200, events_received 1, fbtrace_id returned.
- Today by hour (browser / server): 02:00 33/31, 03:00 11/12, 04:00 19/18, 05:00 5/4, 06:00 3/5, 07:00 14/12, 08:00 49/48 (hour after this morning's deploys). Near 1:1 pairing.
- Last 48h received: PageView 794, ViewContent 419, Enroll_CTA_Click 40, AddToCart 39, InitiateCheckout 34, AddPaymentInfo 9, Purchase 7, Lead 3, CompleteRegistration 1.

## D. Other surfaces (VERIFIED, pixel + relay on load)
- www.longevitylifeacademy.com mobile and desktop: pixel 1440305917310328 PageView + ViewContent, CAPI PageView + ViewContent. GTM-PMRKXXJV, GA4 G-PDT6DPCBQN, Google Ads AW-18139914538 present.
- www.longevitylifeacademy.com/julie-masterclass/ mobile: pixel PageView + ViewContent, CAPI PageView + ViewContent (no GTM on that page, as designed).
- pages.dev: GA4 page_view (G-PDT6DPCBQN) and Google Ads page_view (AW-18139914538) fire.

## E. CRM request (VERIFIED request body, CRM-side parsing not visible to me)
POST eteacher-leads-proxy .../api/lead/ecomm carries QueryString "fbclid=...&cid=118149&adGroupID=108816&utm_source=Facebook&utm_medium=Topic&utm_term=<adset>&utm_content=<ad>", LandingPage with the same, DynamicParameters with fbclid + utm_* and a fixed google_campaign_id=116641 (pre-existing value, not changed). First/Last name, email, phone, country, state, plan, FirstPayment/NumberOfPayments/LeftToPay included.

## F. Findings that are not blockers
1. Console warning "Duplicate Pixel ID 1440305917310328": pixel init runs twice; only ONE PageView is sent per load (verified), so no duplicate events. Cosmetic, pre-existing (open item 6 in LLA-FULL-HANDOVER).
2. Browser pixel advanced matching sends only external_id; em/ph/fn/ln go to Meta via CAPI only. Fine for dedup; EMQ could rise if the browser side also sent hashed em/ph after step 1. No change made.
3. Strip HTML text "$149 instead of $179 JULIE249" vs scripts $79/$169 (copy, not tracking).

## G. Still UNVERIFIED (needs a real paid order or Omri's Events Manager login)
- Purchase on a physical phone traced ad click -> order -> Airwallex/PayPal -> Meta, with EMQ. Meta did receive 7 Purchase events in 48h.
- Events Manager dedup view per event (API has no browser-vs-server split per event name).

## Test records created today (for deletion if wanted)
- CRM: Verify Person, verify.person.1105@gmail.com, stid 11690336, order 8072727 (created 09:20, no payment).
- The identity-audit runs used audit.person.1105@gmail.com with the CRM proxy blocked, so no CRM record; Meta did receive their PageView/ViewContent/Enroll_CTA_Click/AddToCart events.
