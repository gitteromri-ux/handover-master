# LLA (Longevity Life Academy) — Full Tracking, Meta, Checkout Handover
Date: 2026-11-05 (Asia/Jerusalem). Owner: Omri Gitter. For: Claude, Cursor, Codex, any auditor.
Status labels: VERIFIED (checked live 2026-11-05 in this session) / RECORDED (from repo or handover history, not re-checked today).

---

## 1. Hard rules (do not break)
1. Never change live Meta ad sets, budgets, pixel settings, attribution, ad links or URL parameters without Omri's explicit written approval for that named item.
2. Never change tracking files, the CAPI relay, payment or CRM code on production without approval. Snapshot first, rollback path written, verify after.
3. Duplicate Meta events are past trauma: every browser event and its CAPI twin share the same `event_name` + `event_id`. Purchase fires only after confirmed payment (Airwallex SUCCEEDED / PayPal capture). Never on click or redirect.
4. `fbclid` / `fbc` must be byte-exact (no URL decoding; `+` must not become space). Format `fb.1.<ms>.<fbclid>`.
5. Never show numbers that may include tests. Test devices are silenced with `?llatest=1` or `?qa=1` (sticky in localStorage `lla_tester`); `?llatest=0` clears. Team emails (gitter, eteacher, gita-agency, example.com, mailinator, test.com) auto-silence.
6. Never echo the Meta CAPI token. Never put any secret in this public repo.
7. Never create ActiveCampaign objects without Sandra. Do not delete AC fields 214-220. Only test AC with contact 7179031 (gitter.omri@gmail.com).
8. Done = proof (URL + status, screenshot at 390px mobile, commit SHA, Meta read-back). Otherwise label it unverified.
9. Recommendations limited to Meta direct purchases unless Omri reopens scope.
10. Copy rules: no em/en dashes, no emojis, no exclamation points; never claim live Q&A with Julie; only scarcity line "When a session fills, it closes."

## 2. Systems map
| Layer | Value |
|---|---|
| Ad destination (all active ecomm ads) | `https://longevitylifeacademy.pages.dev/` (VERIFIED) |
| Marketing site | `https://www.longevitylifeacademy.com/` (GitHub Pages, repo `Longevity-Academy/Longevity-Academy.github.io`) |
| Julie masterclass page | `https://www.longevitylifeacademy.com/julie-masterclass/` (repo `Longevity-Academy/julie-masterclass`) |
| Funnel + checkout source | `gitteromri-ux/lla-course-checkout`, branch `master`. Deploy dir `dist/`. Repo `HANDOVER.md` has deploy scripts |
| Hosting | Cloudflare Pages project `longevitylifeacademy`, account `55eb74f4002b7237e393bd6980a1676a`. Worker mirror `lla-checkout` |
| CRM / lead proxy | Cloudflare Worker `eteacher-leads-proxy.gitter-omri.workers.dev` (`/leads/production`, `/leads/staging`). Do NOT modify |
| Meta CAPI relay | `https://lla-ac-events.vercel.app/api/meta/capi` (Vercel project `ac-events`, `prj_3v7g4Xwve6OmXrcPCVQOWJOiN2SK`). Source copy in repo `capi-relay/`. Accepts `test_event_code` format `TESTnnnnn` |
| AC event endpoint | `lla-ac-events.vercel.app/api/ac/event` → writes only `LGV_checkout_events` |
| Pixel / dataset | `1440305917310328` "Longevity Life Academy" |
| GTM | `GTM-PMRKXXJV` (has a known bad Custom HTML tag injecting `<--->`; client-side cleaner in place) |
| Payments | Airwallex Drop-In (card) + PayPal JS SDK. USD only. No Apple/Google Pay on main checkout |
| Meta ad account | `act_1459085242361281` |
| FB Page / IG | Page `1036363559571443`, IG user `17841432251901978` |

## 3. Access (how each tool gets in, no questions needed)
| System | How to access |
|---|---|
| GitHub | `gitteromri-ux/handover-master` (public). `gitteromri-ux/lla-course-checkout` (clone with Omri's GitHub auth; `gh repo clone`). Org repos under `Longevity-Academy` |
| Meta Ads (read) | App "Instinct Reader" `1787156302401260`, scope `ads_read`, token expires 2026-12-10. Token file is in Omri's private Google Drive (handover credentials folder). Graph API v25: `GET /act_1459085242361281/ads?fields=name,effective_status,adset_id,creative{url_tags,object_story_spec}` and `/insights` |
| Meta Ads (write) | Only via Omri's Ads Manager login or approved operator. No write token is handed over |
| Meta Events Manager | Omri's login (business that owns pixel 1440305917310328). Receiving operators reported `/stats` denied with the read token |
| Cloudflare | API token stored by Omri (Perplexity `custom-cred:api.cloudflare.com`); workers observability read credential + `PURCHASE-CHECK-METHOD.md` in private Drive |
| Vercel | Omri's Vercel account (project `ac-events`) |
| Airwallex, eTeacher CRM, ActiveCampaign UI | Omri's logins only. CRM reachable through the lead proxy; AC through the relay |
If a tool lacks a credential above, the one ask is: "Omri, share the <system> credential from the private Drive handover folder."

## 4. Live Meta structure (VERIFIED 2026-11-05)
Active ecomm ad sets, all OUTCOME_SALES, optimize OFFSITE_CONVERSIONS on pixel 1440305917310328 PURCHASE:

| Ad set ID | Name | Campaign | Daily budget | Attribution | adGroupID in links |
|---|---|---|---|---|---|
| 52669013718628 | ecomm Adset 2 #108808 | LGV_EN_PPC_ecomm-01 (cid 118148) | $179 | 7d click, 1d view | 108808 OK |
| 52666232368428 | ecomm Adset 4 #108810 | ecomm-01 (cid 118148) | $300 | 7d click, 1d view, 1d engaged view | 108810 OK |
| 52668330870828 | ecomm_Adset_04 #108816 | LGV_EN_PPC_ecomm-02 (cid 118149) | $175 | 7d click, 1d view | 108816 OK |
| 52673824399628 | ecomm_Adset_02 #108814 | ecomm-02 (cid 118149) | $40 | 7d click, 1d view, 1d engaged view | 108814 OK |

Active lead-form ad sets (OUTCOME_LEADS, instant form `1661211004952839`, no website, $95/day each): 52632882695828 (#108775, links say adGroupID 108779), 52596391921628 (#108719, links say 108778), 52596364713228 (#108718, links say 108777). Mismatch is in url_tags only; instant forms do not use the website, so impact is CRM labeling only.

Active ads (17): 52678067285428, 52678067317028, 52670269935428 (set 52669013718628); 52678067260828, 52666266371228 (52666232368428); 52674115544628, 52670065101028 (52668330870828); 52678067343828, 52678067365228 (52673824399628); 8 lead-form ads.

URL parameter template on every ecomm ad (VERIFIED):
`cid=<118148|118149>&adGroupID=<number>&utm_source=Facebook&utm_medium=Topic&utm_campaign={{campaign.id}}&utm_term={{adset.id}}&utm_content={{ad.id}}&creative={{ad.id}}&placement={{placement}}&cq_src=facebook&cq_cmp={{campaign.name}}&cq_con={{ad.name}}&cq_med={{placement}}&cq_net={{site_source_name}}&cq_plt=fp`

Note: the 2026-09-28 GOLDEN freeze (see `projects/julie-tracking-freeze/`) pinned different ad sets (52668330533628, 52668268711228) and a different landing URL (www.../julie-masterclass/). Those are no longer the active ones. The freeze expired 2026-10-26.

## 5. Meta results, Ads Manager attribution (VERIFIED read 2026-11-05)
| Ad set | Today spend / clicks / LPV / VC / ATC / IC / Purch | Last 7d spend / LPV / VC / ATC / IC / Purch ($) |
|---|---|---|
| 52673824399628 #108814 | $48 / 1 / 1 / 1 / 0 / 0 / 0 | $564 / 26 / 29 / 2 / 2 / 2 ($128) |
| 52669013718628 #108808 | $85 / 13 / 13 / 13 / 0 / 0 / 0 | $499 / 35 / 7 / 0 / 0 / 0 |
| 52668330870828 #108816 | $99 / 9 / 9 / 11 / 1 / 0 / 0 | $3,058 / 240 / 261 / 6 / 6 / 4 ($256) |
| 52666232368428 #108810 | $164 / 12 / 12 / 11 / 0 / 0 / 0 | $1,198 / 62 / 7 / 1 / 1 / 0 |
AddPaymentInfo: 0 everywhere (event added 2026-11-04 21:04 UTC). Today ViewContent now tracks landing page views 1:1 on sets #108808/#108810, which were near zero over 7 days before the 2026-11-04 repair.

## 6. Event contract on pages.dev (VERIFIED in a live iPhone 14 run 2026-11-05, Meta/relay requests intercepted so no test data reached Meta)
| Step | Browser Pixel | CAPI relay | Identity carried |
|---|---|---|---|
| Land | PageView, ViewContent | PageView `lla_pageview_<ts>_<rand>`, ViewContent `lla_viewcontent_<ts>_<rand>` | fbc `fb.1.<ms>.<fbclid>` exact, fbp |
| Enroll click | Enroll_CTA_Click (custom) | same | fbc, fbp |
| Step 1 Continue | AddToCart, SubscribedButtonClick | AddToCart `lla_addtocart_<ts>_<rand>`, value 79 USD, content_id `lla-longevity-blueprint`, em/ph/fn/ln/st/country/external_id | fbc, fbp |
| Step 2 date + continue | InitiateCheckout (after CRM order) | InitiateCheckout | CRM OrderId |
| Payment page | AddPaymentInfo `lla_api_<orderid>` on first card focus / PayPal createOrder | same | |
| Paid | Purchase, event_id = CRM order id | Purchase, same id, bounded retries + replay | value = charged amount |
`_fbc` and `_fbp` cookies set on landing. `LLA_LIVE=true` for real visitors. Console warns "Duplicate Pixel ID 1440305917310328" (pixel init called twice; only one PageView was sent in the run, but this should be cleaned).

Offer on mobile (VERIFIED screenshot): Blueprint $79 month 1, then 4 x $169, $755 total, 18 weeks, start dates Mon Nov 23 8pm EST and Wed Nov 25 12pm EST, promo JULIE249 auto-applied.

## 7. Recent production changes (lla-course-checkout master)
| SHA | Time (UTC) | Change |
|---|---|---|
| 54103e1 | 11-05 06:48 | Mobile v2 hero headline restored |
| a9df7c2 | 11-05 06:43 | Hero copy, removed "with Julie" |
| 93af534 | 11-05 06:33 | Mobile v2 hero readability, nav |
| 6d4ad28 | 11-05 05:13 | Mobile v2 layer excluded from all forms |
| 46d8bb8 | 11-05 00:50 | Mobile v2 layer (<=760px only) |
| 518ab1d | 11-04 23:28 | fbq.disablePushState, relay receipts + Purchase replay (approved by Omri) |
| 2e2f512 | 11-04 21:45 | Relay retries, same event_id |
| 0337f55 | 11-04 21:04 | AddPaymentInfo Pixel + CAPI |
| 8972591 | 11-04 18:48 | Paired funnel tracking, ViewContent, cid/adGroupID persistence |
| 08cd325 | 11-02 20:52 | Airwallex customer_id + payment_consent for installments |
Rollback: `git revert <sha>` then redeploy `dist/` to Pages project `longevitylifeacademy` (script in repo `HANDOVER.md`).

## 8. Open items an auditor must close
1. Step 2 → payment page → card/PayPal mount on mobile: re-run (step 2 continue button sits below the fold; run in progress 2026-11-05).
2. Relay acceptance by Meta: send one event to the relay with `test_event_code` and confirm it in Events Manager Test Events.
3. Events Manager dedup per event (browser + server merged) and Purchase EMQ.
4. CRM side: whether `cid`/`adGroupID` reach the eteacher CRM order for the new Meta ad set IDs.
5. Settled real Purchase traced ad click → order → Airwallex → Meta ad set.
6. Duplicate pixel init warning.
7. Attribution windows differ: #108810 and #108814 include 1-day engaged view, #108808 and #108816 do not.
8. Lead-form ad sets carry adGroupID values that differ from their names (108775→108779, 108719→108778, 108718→108777).

## 9. How to reproduce what a buyer sees
```
pip install playwright && playwright install chromium
# iPhone 14 emulation, land with:
https://longevitylifeacademy.pages.dev/?fbclid=AUDIT123&cid=118149&adGroupID=108816&utm_source=Facebook&utm_medium=Topic&utm_term=52668330870828&utm_content=52674115544628&cq_src=facebook&cq_plt=fp
# Intercept facebook.com/tr and lla-ac-events.vercel.app (fulfill 200) so no test data reaches Meta.
# Click "Enroll now" → fill #emName #emEmail #emPhone (state #bpBuyerState if shown) → Continue → pick date → scroll to continue → /checkout
```
Use a non-team email if you need events to fire; any real CRM order created must be reported to Omri for deletion.
