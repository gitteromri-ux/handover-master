# Julie Masterclass (LLA) — Handover, 9 October 2026, 19:40 Israel

Written by Perplexity Computer at Omri Gitter's request so that another tool/agency can take over.

## 0. Read this first — reliability warning (written at the owner's instruction)

The owner's assessment of the author of this document: he considers the assistant that wrote it not competent at this work ("an idiot", his word) and does not want this document treated as a bible. Rules for the reader:

- Only lines marked **VERIFIED** are raw data read from a system of record in this session (Meta Graph API v21.0, Meta pixel stats endpoint, GitHub, the live site, Playwright test runs). Re-pull them yourself before acting; the numbers move hourly.
- Lines marked **ASSUMED** are the assistant's interpretation. Treat as unproven.
- Lines marked **WITHDRAWN** are conclusions the assistant stated earlier and later retracted or that were contradicted by data. They are listed so the next tool does not inherit them.
- Lines marked **USER-STATED** are things Omri said; the assistant did not verify them.
- The assistant looped on a "learning phase" explanation repeatedly on 9 Oct; the owner rejected it. Do not re-open that line of reasoning with him without new data.
- The assistant made several errors of statement during the day (listed in §9). Assume there are others.

Owner's rules for anyone operating these accounts (USER-STATED, firm):
- Purchase optimization stays. No change of optimization goal or "intent level". No broad audiences. No Instagram feed. No untested UGC in the main ad sets. Do not pause live ad sets. Budget edits: desktop Ads Manager only, one save.
- Plain ad-set names ("set 3", "set 5"), no code words.
- Every number shown must exclude QA/test orders. Verified facts only; label assumptions.
- Target: 500+ paid enrollments in October (event 27 Oct, 7:00 PM ET); daily operating objective he stated: 20 purchases/day without a major budget increase, max $150 CPA (USER-STATED).

## 1. Entities, IDs, systems (VERIFIED unless noted)

**Meta**
- Ad account: `act_1459085242361281`, time zone Asia/Jerusalem, currency USD.
- Pixel / dataset: `1440305917310328`.
- Campaign: `52668266203628` "LGV_EN_PPC_ecomm-02_2026-09-02_#118149", objective OUTCOME_SALES. All sets: optimization OFFSITE_CONVERSIONS (Purchase), billing IMPRESSIONS, bid LOWEST_COST_WITHOUT_CAP, attribution 7-day click / 1-day view, Advantage+ audience OFF, US only (home/recent/frequently_in), age 35–65 (set 1: 44–65), all genders, placements Facebook feed + Facebook Reels + Instagram feed (set 1: Facebook only), mobile + desktop.
- Shared interest list (41 interests) in every set: Apple Watch, Wearable technology, Human nutrition, Fitbit, Prevention (magazine), Walking, Healthy Habits, Sauna, HIIT, Pilates, Magnesium, TED, Creatine, Physical fitness, Audiobook, Oprah Winfrey, Distance education, Genetics, Metabolism, Web conferencing, Life extension, PayPal, Healthy diet, Self-help, Continuing education, Non-fiction books, Paleolithic diet, Master class, Probiotic, Udemy, Ketone, Meditations, Strength training, Personal development, Collagen, Omega, Turmeric, Audible.com, Well-being, MyFitnessPal, Vitamins and nutritional supplements.

| Set | Ad set ID | CRM id (adGroupID) | Status 19:30 | Daily budget | Audience add-on (AND with the interests) | Learning-window conversions (Meta) |
|---|---|---|---|---|---|---|
| Set 1 | 52668330533628 | 108813 | ACTIVE since 9 Oct 13:36 | $220 | Engaged Shoppers OR income top 10% OR top 10–25%; age 44–65 | 0 |
| Set 2 (retargeting) | 52668268711228 | 108814 | PAUSED since 6 Oct | $44 | — | — |
| Set 3 | 52668330165828 | 108815 | ACTIVE | $555 | Engaged Shoppers | 13 |
| Set 4 | 52668330870828 | 108816 | ACTIVE | $549 | Engaged Shoppers OR income top 10% OR top 10–25% | 11 |
| Set 5 | 52668330871228 | 108817 | ACTIVE | $399 | income top 10% only (no Engaged Shoppers) | 0 |
| Set 6 (empty shell) | 52668330871028 | 108818 | PAUSED | $69 | — | — |
| TEST / TEST2 controlled-purchase TLV sets | 52668956239228 / 52668961777228 | — | PAUSED since 28 Sep | $60 / $500 | — | — |

Meta reports every live set as status LEARNING. (The owner does not want this used as an explanation.)

**Ads (campaign 118149)**

| Set | Ad | Ad ID | Status | Post ID | url_tags adGroupID |
|---|---|---|---|---|---|
| 1 | Ad#19 UGC 69s Woman · Deadlier than smoking | 52671564228228 | ACTIVE (from 9 Oct) | — | 108813 |
| 1 | Ad#20 UGC 75s Woman · 33 years | 52671564250028 | ACTIVE (from 9 Oct) | — | 108813 |
| 3 | Ad#17 UGC 69s Woman · Five… | 52670355336628 | ACTIVE | 1179505785236150_122150432127346827 | 108815 |
| 3 | Ad#12 Julie film 65s | 52670183445628 | PAUSED at 9 Oct 17:32 Israel (actor not in Meta log at 19:00) | 1179505785236150_122149468821346827 | **108813 (set 1's id — mismatch)** |
| 3 | card-gold Reels 15s | 52670313921028 | ACTIVE | 1179505785236150_122150334177346827 | 108815 |
| 4 | Ad#17 | 52670065101028 | ACTIVE | 1179505785236150_122149855059346827 | 108816 |
| 4 | card-gold Reels | 52670313942228 | ACTIVE (since 8 Oct 01:45) | — | 108816 |
| 4 | Ad#18 UGC 75s Man · Deadlier | 52670065151028 | PAUSED 8 Oct 01:45 | — | 108816 |
| 4 | Ad#12 | 52670043258028 | PAUSED, never spent | different post | 108816 |
| 4 | Ad#15, Ad#16, card-gold Revised, zoom-gold Revised | 52670065053028, 52670065066828, 52670043277028, 52670043297028 | PAUSED | — | — |
| 5 | Ad#17 | 52670277632228 | ACTIVE (only live ad in set 5) | 1179505785236150_122150274483346827 | 108817 |
| 5 | Ad#12 copy | 52670177531628 | PAUSED since 7 Oct 00:46 | same post as set 3 Ad#12 | **108813 (wrong for set 5)** |
| 5 | card-gold Reels copy | 52670187364628 | PAUSED, never spent | different post | **108813 (wrong for set 5)** |
| 5 | Ad#15, card-gold Static, card-gold Revised, Ad#12 (2nd) | 52670178207028, 52670186867628, 52670063737028, 52670065326628 | PAUSED | — | — |

All ads link to `https://www.longevitylifeacademy.com/julie-masterclass/?preview=zoom-l…` with url_tags `cid=118149&adGroupID=<CRM id>&utm_source=Facebook&utm_medium=Topic&&utm_campaign={{campaign.id}}&utm_term={{adset.id}}&utm…` ("golden tags"). The CRM (eTeacher, contact Anant) reports by adGroupID; Meta attribution does not depend on these tags.

**Site / code / hosting**
- Live page: `https://www.longevitylifeacademy.com/julie-masterclass/` — served by **GitHub Pages** (response header `server: GitHub.com`, cache-control max-age=600) from repo `Longevity-Academy/julie-masterclass`, branch `main`. Deploy = push to main; Pages build takes about 1 minute; browser cache up to 10 minutes.
- main at start of 9 Oct: `6e795f4` (7 Oct 05:38 UTC, "Nav: Support text link"). main at 19:30 Israel: `058c1f0` (see §6).
- Key files: `index.html` (page, enrollment modal, checkout screen, Meta pixel gate), `assets/julie-meta-tracking.js` (release julie-meta-20260927-4; pixel + CAPI relay client), `assets/julie-payment-safety.js` (Airwallex drop-in options, price validation), `assets/julie-v8.css` (incl. v9.9d phone enrollment dialog: sticky Continue, 30 Sep, authorized by Omri), `assets/julie-international-checkout.js`, `assets/julie-attribution.js`.
- CAPI relay: `https://lla-ac-events.vercel.app/api/meta/capi` (Vercel project lla-ac-events, prj_3v7g4Xwve6OmXrcPCVQOWJOiN2SK). Relay refuses `qa=1` traffic (qa_excluded).
- Order API: eTeacher backend via a Cloudflare worker `eteacher-leads-proxy` (metrics not readable in this session: Cloudflare connector needs a Global API key, not the token that was supplied; Comet local browser never connected).
- Payments: Airwallex drop-in (checkout.airwallex.com), live mode, $49 Standard / $79 VIP, plus eTeacher PayPal Smart Buttons tab. Airwallex account config returned to the live form on 9 Oct 18:55: `card`, `applepay`, `googlepay` all active, all currencies, all countries, one-off + recurring. Apple domain file served at `https://www.longevitylifeacademy.com/.well-known/apple-developer-merchantid-domain-association` (HTTP 200, 9.1 KB).
- ActiveCampaign: API key was available this session (file deleted at end). AC relay writes stage field 206 only to existing contacts; 1,274 new contacts 5–9 Oct are eTeacher-group-wide; AC cannot split the Julie funnel.
- Handover repo: `gitteromri-ux/handover-master`, `_today-log.md` (entry appended 9 Oct 18:08 for the checkout publish).

## 2. Timeline (times Israel; VERIFIED from Meta activity log, Meta `updated_time`, Git history, unless noted)

- 24 Sep: campaign ad sets created (sets 1–6).
- 24 Sep 13:00: Google Pay restored in the Airwallex drop-in by Omri's instruction ("removed 2026-09-23 by mistake") — commit 5e69876.
- 27 Sep: tracking release julie-meta-20260927-4 (pixel + CAPI, event_id = CRM order id).
- 28 Sep: two "controlled-purchase TLV" test sets created and paused (never relevant to October data).
- 30 Sep 11:49: v9.9d phone enrollment dialog — sticky Continue button at the dialog bottom, authorized by Omri (commit b3961ca).
- 3 Oct: current ads created (Ad#12, Ad#17 etc.). Set 4 Ad#17 first sale 3 Oct.
- 4 Oct 14:10: Events Manager notice "dataset no longer using Conversions API". Pixel log shows server events never stopped; until 4 Oct server volume was 2–4× browser (two server senders), from 5 Oct server = browser (one sender). Interpretation that this was a duplicate sender going silent: ASSUMED. Sales afterwards: 5 Oct 4, 6 Oct 8, 7 Oct 11–12.
- 5 Oct 05:19 UTC: last significant edit on set 4 before 9 Oct (per Meta learning info).
- 6 Oct 21:44 UTC: set 2 (retargeting) and set 6 shell paused.
- 7 Oct 00:46: set 5 Ad#12 copy paused.
- 7 Oct 05:38 UTC: commit 6e795f4 (Support links in nav). No checkout code change between 7 Oct and 9 Oct 18:04.
- 7 Oct 17:10 and 8 Oct 00:04: set 5 budget edits via Ads Manager **Android app** (Meta last_sig_edit for set 5 = 7 Oct 21:04 UTC = 8 Oct 00:04 Israel). Set 5 learning-window conversions since then: 0.
- 7 Oct: Facebook iOS app 582.0.0 released (Sensor Tower / App Store). Relevance to the drop: ASSUMED, unproven (see §7).
- 8 Oct 01:45: actor "Perplexity Computer" (a previous session) paused set 4 Ad#18, activated set 4 card-gold Reels, paused set 3 Ad#17.
- 8 Oct 10:45: Omri reactivated set 3 Ad#17 and changed set 3 budget ($499 → …).
- 9 Oct 06:40 / 06:41 (Android app): set 4 $799 → $549; set 5 $699 → $399.
- 9 Oct 09:49 (Android app): set 3 $425 → $555.
- 9 Oct 13:36: set 1 activated by this session on Omri's instruction ("activate number 1"): $220/day, age 44–65, set-4 audience rule, Advantage+ off, Facebook feed + Reels, Ad#19 and Ad#20 (UGC, untested). Instagram feed was first copied by mistake and removed before any spend. Set 1 to 19:30: $135 spent, 12 clicks, 4 visits, 0 carts.
- 9 Oct 17:32: set 3 Ad#12 paused (`updated_time` 14:32:40 UTC). Not by this session. Actor not yet visible in the activity log at 19:00.
- 9 Oct 18:04: Omri approved; commits 86a4751 + 058c1f0 pushed to main; Pages build "built" 18:05 (see §6).
- 9 Oct, all day: Omri created no new sets; the owner proposed/declined various moves (see §8).

## 3. Performance data (VERIFIED, Meta insights, Meta default attribution; QA excluded by design — `qa=1` disables pixel and server sending)

### 3.1 Campaign lifetime (to 9 Oct 19:00)
Spend $17,138 · impressions 65,213 · CPM $263 · landing-page views 1,827 ($9.40/visit) · add-to-cart 50 · purchases 36 · cost per purchase $476 · visit→purchase 2.0%.

### 3.2 Per set per day (spend / landing-page views / add-to-cart / purchases)

| Day | Set 3 | Set 4 | Set 5 | Account total purchases |
|---|---|---|---|---|
| 5 Oct | $717 / 103 / 4 / 2 | $699 / 78 / 2 / 2 | $255 / 43 / 0 / 0 | 4 |
| 6 Oct | $607 / 67 / 3 / 2 | $803 / 86 / 4 / 3 | $399 / 42 / 2 / 2 | 8 |
| 7 Oct | $855 / 87 / 4 / 3 | $1,016 / 78 / 3 / 3 | $630 / 64 / 6 / 5 | 11 |
| 8 Oct | $582 / 60 / 3 / 2 | $737 / 79 / 1 / 1 | $736 / 105 / 0 / 0 | 3 |
| 9 Oct to 19:00 | $436 / 54 / 2 / 2 | $513 / 67 / 0 / 0 | $402 / 66 / 1 / 0 | 2 |

Reach/frequency per set per day: frequency 1.04–1.26 every day (no per-person fatigue). Set 5 reach jumped 1,016 (7 Oct) → 1,282 (8 Oct) after the budget raise.

Cost per visit: set 5 $9.80 (7 Oct) → $7.00 (8 Oct) → $6.10 (9 Oct); set 4 $13.00 → $9.30 → $7.70; set 3 $9.80 → $9.70 → $8.10. (Cheaper visits, zero carts in sets 4/5 — interpretation in §7.)

### 3.3 Per ad, 3–9 Oct (spend / visits / carts / purchases / cost per purchase)

| Ad | Total | By day |
|---|---|---|
| Set 3 Ad#17 | $2,130 / 301 / 10 / 6 / $355 | 5 Oct $443/72/1/0 · 6 Oct $516/64/3/2 · 7 Oct $702/78/3/2 · 8 Oct $211/38/1/1 · 9 Oct $258/49/2/1 |
| Set 3 Ad#12 | $1,323 / 97 / 5 / 3 / $441 | 4 Oct $400/33/2/1 · 5 Oct $249/28/2/1 · 6 Oct $71/2/0/0 · 7 Oct $116/6/0/0 · 8 Oct $321/16/1/1 · 9 Oct $161/10/0/0 |
| Set 3 card-gold Reels | $157 / 16 / 4 / 3 / $52 | 5 Oct $25/3/1/1 · 6 Oct $20/1/0/0 · 7 Oct $37/3/1/1 · 8 Oct $50/6/1/0 · 9 Oct $25/3/1/1 |
| Set 4 Ad#17 | $2,503 / 317 / 8 / 8 / $313 | 3 Oct $22/37/1/1 · 5 Oct $193/17/1/1 · 6 Oct $479/58/2/2 · 7 Oct $726/63/3/3 · 8 Oct $666/76/1/1 · 9 Oct $415/66/0/0 |
| Set 4 Ad#18 | $1,407 / 153 / 4 / 3 / $469 | 3 Oct $42/7/1/1 · 4 Oct $261/43/0/0 · 5 Oct $495/60/1/1 · 6 Oct $311/27/2/1 · 7 Oct $290/15/0/0 · 8 Oct $7/1/0/0 |
| Set 4 card-gold Reels | $180 / 8 / 0 / 0 / none | 8 Oct $64/2/0/0 · 9 Oct $102/5/0/0 |
| Set 4 Ad#12 | $0, never ran | — |
| Set 5 Ad#17 | $2,252 / 305 / 9 / 7 / $322 | 4 Oct $44/5/0/0 · 5 Oct $195/31/0/0 · 6 Oct $247/34/2/2 · 7 Oct $628/64/6/5 · 8 Oct $736/105/0/0 · 9 Oct $402/66/1/0 |
| Set 5 Ad#12 copy | $292 / 26 / 0 / 0 / none | 4–7 Oct |
| Set 5 card-gold copy | $0, never ran | — |
| Set 1 Ad#19 / Ad#20 (9 Oct) | $78/1/0/0 and $58/3/0/0 | — |

Same creative, 8–9 Oct: Ad#17 in set 3 $468 → 2 sales; in set 4 $1,080 → 1; in set 5 $1,139 → 0.

Engagement on the three Ad#17 posts (lifetime): reactions 70 / 59 / 77, saves 30 / 28 / 33, ThruPlays 749 / 781 / 854 — equivalent; social proof is not a differentiator (VERIFIED).

### 3.4 Breakdowns

Placement 5–9 Oct: Facebook Reels $9,152 / 1,063 visits / 32 carts / 25 sales (CPA $366); Facebook feed $1,413 / 88 / 4 / 3; Instagram feed $361 / 13 / 0 / 0. Sets 4 and 5 delivered 100% to Facebook Reels on 7–9 Oct although feed is enabled. Set 3, 8–9 Oct: Reels $552/89v/4c/3p, feed $354/20v/1c/1p, IG feed $114/5v/0/0.

Device (spend/clicks/visits/carts/checkouts/sales): set 5 iPhone 7 Oct 504/54/52/5/5/4 → 8 Oct 616/112/96/0/0/0 → 9 Oct 259/59/49/1/1/0; set 4 iPhone 833/72/70/3/3/3 → 625/77/67/1/1/1 → 320/47/40/0/0/0; set 3 iPhone 728/77/73/4/4/3 → 419/55/50/1/1/1 → 245/38/33/1/1/1. All three Android carts on 8–9 Oct were in set 3.

Age, 7 Oct vs 8–9 Oct (spend/visits/carts/purchases): set 3: 65+ $343/31/2/2 → $491/57/0/0; 55–64 $309/40/1/1 → $342/35/5/4; 45–54 $159/11/1/0 → $150/17/0/0. Set 4: 65+ $500/36/1/1 → $501/70/1/1; 55–64 $335/30/2/2 → $493/48/0/0; 45–54 $144/8/0/0 → $216/29/0/0. Set 5: 65+ $317/33/3/2 → $587/91/1/0; 55–64 $198/24/2/2 → $377/48/0/0; 45–54 $105/6/1/1 → $158/30/0/0.

Cart → purchase 5–9 Oct by day: 4/6, 8/10, 11/13, 3/4, 2/3 — stable. The loss is visit → cart.

CPM: lifetime $263; 9 Oct set 3 $585, set 4 $643, set 5 $588, set 1 $1,070; other LLA campaigns same day $157–253. Owner's playbook benchmark: US Facebook feed $8–16, Reels $10–12; LLA Blueprint sets with the same video reached $15–19 on feed (USER-STATED/earlier sessions).

Hourly pattern (from the owner's playbook, 28–30 Sep): Israel 01:00–07:00 carry 42% of visits at ~$11 each; 12:00–19:00 carry 57% of spend at ~$28/visit. Not re-verified on 9 Oct.

## 4. Events Manager / pixel checks (VERIFIED, pixel stats endpoint, Israel days)

- Events received, browser / server: 1 Oct 928/1,862 · 3 Oct 595/2,262 · 4 Oct 714/2,291 · 5 Oct 847/881 · 6 Oct 891/789 · 7 Oct 835/769 · 8 Oct 861/840 · 9 Oct (to 18:34) 743 PageView total.
- Purchase pairs browser/server exact every day: 5 Oct 4/4, 6 Oct 8/8, 7 Oct 12/12, 8 Oct 3/3, 9 Oct 2/2. AddToCart and InitiateCheckout pairs likewise (9 Oct ATC 31/31).
- Unattributed check, pixel unique purchases vs ads-credited (account-wide): 5 Oct 4 vs 4; 6 Oct 8 vs 8; 7 Oct 12 vs 11; 8 Oct 3 vs 3; 9 Oct 2 vs 2. Attribution is complete; the drop is real sales, not lost credit.
- 9 Oct purchases by device: 1 iPhone, 1 Android (both credited to set 3). 9 Oct AddToCart by host: 24 on www.longevitylifeacademy.com (Julie page + Blueprint path, not separable by this endpoint), 7 on longevitylifeacademy.pages.dev (Blueprint). Ads-credited ATC account-wide 9 Oct: 9.
- Dataset diagnostics: only two `da_checks` flags, both catalog/DPA-related, irrelevant. Match-key quality: fbp 64.5% on PageView, 71% on ViewContent, 93–100% on enroll clicks, AddToCart, InitiateCheckout, Purchase (page-load events fire the server copy before the _fbp cookie exists — ASSUMED cause).
- "Dataset no longer using the Conversions API" notice (4 Oct): server events continued every day after; interpretation in §2 (ASSUMED).
- Custom events seen 9 Oct: Enroll_CTA_Click 33, Clicked_on_Enroll 18, About_Us 4, Visited_one_of_the_six_pillars 2, Clicked_on_curriculum 1.
- Tracking code mode logic (VERIFIED in code): `?qa=1` or `?llatest=1` or staging or any URL other than the exact production page → nothing sent (pixel and relay); `?meta_test=TESTnnnnn` → server copies only with test_event_code; otherwise live.

## 5. Checkout and site checks (VERIFIED, Playwright WebKit on Linux; NOT a real iPhone)

- Engine: Playwright WebKit (Safari engine) with iPhone 14 (390×664, DPR 3) and iPhone SE (375×553, DPR 2) viewports, Facebook iOS 582 in-app UA (`[FBAN/FBIOS;FBAV/582.0.0.40.108;IABMV/1]`), also iPhone Safari UA and desktop Safari 1440×900. Chromium was used earlier in the day (iPhone emulation) but was not installed later.
- Order creation (step 2 → payment screen) succeeded in every run: 2.1–7.3 s on the valid path. **WITHDRAWN**: an earlier statement that the order call took 6.6–7.8 s was measured on the worker's error path, not the valid path.
- Payment screen: Airwallex "Secure card entry ready" after 5–15 s in every run (one run 20+ s). Pay button disabled until card input. Payment frame auto-resizes (441 px before, 453 px after the change) within ~8 s.
- Clickability audit (both sizes): close × 44×44; name/email/country/state inputs 330×52; phone 251×52; SMS consent 20×20 checkbox with 301×73 tappable label; Continue 330×56; date select 330×52; Continue to payment 330×56; fonts 16–17 px (no iOS zoom); no horizontal overflow; nothing overlapped inside the dialog.
- Friction found (not the 8 Oct cause; live since 30 Sep by owner's decision): on ≤664 px screens the sticky Continue button covers the State dropdown; Phone and SMS consent sit below it; tapping Continue early shows "Please select your state" above the button while the State field is hidden under it. The owner was told; no change made.
- Nav header: semi-transparent gradient over the hero, becomes solid (rgba .97) after 40 px scroll via a scroll listener — verified to switch in WebKit on real scroll. An earlier "smeared logo" screenshot was a test artifact (programmatic scroll before the listener fired) — **WITHDRAWN** as a finding.
- Payment methods as rendered on the Linux WebKit engine: Google Pay button first, then card (Visa, Mastercard, Amex, Discover, Diners), name, save-card, Pay button. Apple Pay cannot render on this engine. On a real iPhone in Safari the Apple Pay button is expected (account enabled + domain file + method listed) — **ASSUMED**, not observed. Inside the Facebook in-app browser wallets are generally unavailable (Breeze embedding guide: Google Pay unavailable in Facebook/Instagram in-app browsers; Apple Pay in WKWebView disabled when the host app injects JavaScript) — **ASSUMED** for this page, not observed.
- A third-party obfuscated script error (`null is not an object (evaluating 'this[O4(r4R)][I4]')`) appears on the payment screen on the unmodified live page too; pre-existing, source not identified.
- CSP report-only warnings for checkout.airwallex.com scripts: pre-existing, report-only, not blocking.
- A live $49 purchase + refund to prove the Purchase event end-to-end was offered and never run (no card available). Payment success and Purchase event on a real device remain UNTESTED in this session.

## 6. Production change made on 9 Oct (VERIFIED)

Repo `Longevity-Academy/julie-masterclass`, main `6e795f4` → `86a4751` → `058c1f0`, pushed 18:04 Israel after explicit approval ("Yes, publish"). GitHub Pages build "built" 15:05 UTC. Two files, 11 lines:
1. `assets/julie-payment-safety.js` — Airwallex drop-in options only: `autoSaveCardForFuturePayments: false`; `appearance: { locale:'en', mode:'light', variables: { colorBrand:'#006EFF', colorText:'#111722', colorBackground:'#FFFFFF' }, rules: { '.Button': { borderRadius:'6px', fontWeight:'700', fontSize:'17px', minHeight:'52px' }, '.Button:hover': { backgroundColor:'#0059D6' }, '.Input': { borderRadius:'8px' } } }`. Methods list (`card, googlepay, applepay`), validation, prices, tracking untouched.
2. `assets/lla-logo-header.webp` — replaced by a 1314×596 version (same file name; built from `assets/lla-logo-checkout.png` recoloured to the header palette). `index.html` untouched.
Live verification 18:10–18:20: new JS served; logo 1314×596; iPhone 14 + SE (FB UA) full checkout to "Secure card entry ready"; Pay button rgb(0,110,255), 52 px, inside frame; save-card unticked; no new script errors vs baseline.
Rollback: `git revert 058c1f0 86a4751` on main; live within ~10 minutes.
Not changed on purpose: Google Pay (owner restored it 24 Sep), sticky Continue (owner's 30 Sep decision).

## 7. Hypotheses about the 8–9 Oct drop — status

- **VERIFIED pattern**: from 8 Oct, sets 4 and 5 (Ad#17 only or mostly, 100% Facebook Reels) buy visits ~30% cheaper than on 7 Oct, visit share from 45–54 and 65+ roughly triples, carts go to ~0; the same Ad#17 keeps selling in set 3's audience (Engaged Shoppers, no income filter). Frequency flat (~1.1). Attribution complete. Checkout technically functional on the Safari engine.
- **ASSUMED**: Meta's delivery for sets 4/5 drifted to cheaper, lower-intent people after the set 5 budget changes (7 Oct 17:10, 8 Oct 00:04 via Android app) and with a single creative; the set 4 decline is more gradual and has no edit of its own (last significant edit 5 Oct), so the single-creative/Reels-only drift explanation is weaker there.
- **ASSUMED / UNPROVEN**: Facebook iOS 582 (released 7 Oct) changed in-app browser behaviour. Against it: set 3 Ad#17 still sold on iPhone Reels 8–9 Oct; another LLA campaign's iPhone traffic looked normal; no code change on the page 7–9 Oct. A real-device test was never done.
- **WITHDRAWN** by the assistant during the day: (a) "learning phase / reset" as the explanation (owner rejected; also not actionable); (b) the 6.6–7.8 s order-call finding (error path); (c) "add Engaged Shoppers to set 5" (set 5 was best without it); (d) re-activating set 4 Ad#18 / set 5 Ad#12 (worse CPA, and set 5 Ad#12 had 0 carts on $292); (e) toggling card-gold in sets 4/5 (0 carts on $180 in set 4); (f) "creative rotation turnaround" proposed at 19:00 — retracted at 19:20 because two of the three ads had no sales history and one had failed in that audience; (g) "the 8 Oct cause is the checkout/thank-you path" — not supported; (h) the "smeared logo" and "payment page information removed" alarms — both disproved by side-by-side screenshots.
- **UNKNOWN**: the actual cause of the 8 Oct break in sets 4 and 5. Nobody in this session proved it.

Three-model council (Claude Fable 5.1, GPT 6.1 Sol, Gemini 3.7 Flash, 9 Oct ~13:00–13:20) verdict: set 5 verified collapse from the 8 Oct 00:04 reset; set 4 not a verified collapse at that time (p≈0.13); set 3 control, hold; iOS 582 unproven; stop Android-app edits; do a physical iPhone test. Reports: `model-council-*.md`, synthesis `model-council-synthesis.md` (shared in the thread).

## 8. Decisions proposed by the assistant and the owner's position (all still OPEN unless noted)

- Budget re-allocation tonight (set 5 → $150, set 4 → $300, set 3 → $665): proposed three times; owner's position: this is "giving up", does not reach the target. Not done.
- Cost cap $330 on set 4: proposed once; owner did not accept. Not done. Never tried on this account.
- Hold set 5 untouched 72 h: proposed; not explicitly accepted.
- Creative rotation into sets 4/5: WITHDRAWN (see §7).
- New parallel set (women 45–65, Advantage+ audience on with the interests as suggestion, Facebook feed + Reels, Ad#17 + Ad#12 + card-gold Reels + card-gold static, $1,000/day, lowest cost, own CRM id): proposed 19:30; owner's reply was to take the business elsewhere. Note: an empty paused shell exists, set 6 `52668330871028` with CRM id 108818 — a new set may not need a new id from Anant (ASSUMED; confirm with eTeacher).
- Microsoft Clarity install on the page: proposed; no answer.
- Live $49 purchase + refund test: offered; no card provided.
- Set 3 Ad#12 (paused 17:32 by unknown actor): owner not asked yet whether he paused it.
- Owner's own earlier stated plan items (USER-STATED): women-only W1/W4 test (no confirmed config), "build 06" with card-gold only (proposed by assistant at ~13:40, not approved), scoped set 3 Ad#17 reactivation + budget cut (done 8 Oct by owner).

The arithmetic the next operator must own: 500 in October requires ~26 sales/day from 10 Oct; at the current $476 CPA that is ~$12,400/day; at the owner's $150 CPA ceiling, cost per visit must fall from $9.40 to ~$2.50–3.00 at the observed 2% visit→purchase. The constraint set in §0 blocks the usual levers (consolidation, Advantage+ audience, more creatives). This conflict was stated to the owner at 19:30.

## 9. Errors of statement by the assistant on 9 Oct (so they are not inherited)

1. Said "only ads that already sold this week" about set 4 Ad#12 (never ran) and set 5 copies (0 sales). Corrected.
2. Said adGroupID 108813 is "set 3's tag"; it is set 1's id (set 3 is 108815). Set 3's Ad#12 and set 5's paused copies carry 108813.
3. Said an iPhone buyer "is offered Google Pay and no Apple Pay" — true only on the Linux test engine. Corrected.
4. Early in the day reported a 6.6–7.8 s order call as the cause — error path. Corrected.
5. Repeated "learning" explanations the owner had forbidden.
6. Copied Instagram feed into set 1 when activating it; removed before spend.
7. Showed a cropped proof image that made the owner think payment-page content was removed; it was not.
8. Reported CPM at face value without flagging that $585–643 implies something structurally wrong with how these sets buy; the owner's playbook had already recorded the 20–30× market CPM.

## 10. QA / test records to exclude from every count (VERIFIED)

Created by this session on 9 Oct, all unpaid, name "QA Test Omri …", `qa=1` (pixel + relay off): eTeacher order ids 8046603, 8046609, 8046670, 8046672, 8046729 plus roughly 15 further unpaid QA orders from the WebKit runs between 13:30 and 19:00 (emails `omri.qa.*@longevitylifeacademy.com`, e.g. omri.qa.logo.1009@, omri.qa.design.1009@, omri.qa.golden.1009@, omri.qa.live.1009@, omri.qa.live2.1009@, omri.qa.applepay.1009@, omri.qa.applepay2.1009@; student ids incl. 11665340, 11665345, 11665391). No payment was ever submitted. Exclude by name/email prefix in the CRM and in AC.

## 11. Access and tooling state (for whoever takes over)

- Worked this session: Meta Graph API v21.0 (ads insights, activity log, pixel stats, ad/adset config); GitHub (clone/push via `gh`/git); Vercel API (projects/deployments list; runtime logs 403); live-site HTTP checks; Playwright WebKit in a Linux sandbox.
- Did not work: Cloudflare connector (token supplied, Global API key required → worker metrics unread); Comet local browser (extension never connected, 6 attempts); ActiveCampaign Pipedream connector (Invalid URL) — AC reached only via cloud browser with API-token header; facebook_pages (needs page token); no real iOS device; no Airwallex dashboard access; no eTeacher CRM/order API access beyond creating QA orders through the public page.
- Files from this session: `/tmp/ads_daily_full.json` (per-ad daily 3–9 Oct), `/tmp/dev.json`, `/tmp/place.json`, `/tmp/acts_full.json`, `/tmp/acts_today.json`, `/tmp/ck/*.jpg` (checkout screenshots), `/tmp/ck/awx_methods.json` (Airwallex payment-method config response). Shared images in the thread: checkout walkthrough, payment form before/after, live proof, payment page comparison.

## 12. Sources used outside the owner's systems

- Airwallex drop-in docs (appearance variables, rules, autoSaveCardForFuturePayments): https://www.airwallex.com/docs/js/payments/dropin/ and https://www.airwallex.com/docs/payments/integration-options/web-checkout/customize-appearance
- Airwallex Apple Pay web checkout requirements: https://www.airwallex.com/docs/payments/payment-methods/global/apple-pay/web-checkout
- Apple Pay / Google Pay inside iOS in-app browsers: https://docs.breeze.com/docs/embedding-mobile-app-guidelines
- Facebook iOS 582.0.0 release date: https://apps.apple.com/us/app/facebook/id284882215 and https://app.sensortower.com/overview/284882215?os=ios
