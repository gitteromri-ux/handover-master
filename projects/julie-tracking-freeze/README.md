# Julie Masterclass tracking — GOLDEN STATE and 4-WEEK FREEZE

**Frozen:** 2026-09-28 15:30 IDT → **2026-10-26** (extend only on Omri's explicit word).
**Owner:** Omri Gitter. **Scope:** Meta campaign `LGV_EN_PPC_ecomm-02_2026-09-02_#118149` (52668266203628), the live page `https://www.longevitylifeacademy.com/julie-masterclass/`, the CAPI relay `lla-ac-events.vercel.app`, pixel 1440305917310328.

## Why this state is golden (VERIFIED 2026-09-28 14:46 IDT, Graph API v25.0)

Real customer purchase: Potter Eric, USA, Longevity Masterclass Regular, $79, Airwallex, CRM 28/09/2026 11:05:01.
Meta shows it on **ad set `ecomm_Adset_01_All_All_CPM_#108813` (52668330533628)**, today: purchase 1 / value $79, add_to_cart 1, initiate_checkout 1, custom conversion `LLA Julie Masterclass | Purchase` (1426010666308623) 1 / $79. Pixel 1440305917310328 received 3 raw Purchase events in the 11:00–12:00 IDT hour (browser + server copies of the same order, deduplicated to 1). Zero Purchase events in any other hour today. End-to-end chain proven: ad click → fbclid → fbc → CRM order → Airwallex SUCCEEDED → browser Purchase + CAPI Purchase (same event_id = CRM order id) → attributed at ad-set level.

## THE RULE (stored in memory + `omri-operator-os` skill)

> Until 2026-10-26 nothing listed under **Frozen** below may be changed, redeployed, duplicated-and-edited, "optimized", or "fixed" — by anyone, for any request, including Omri's own request in the moment — unless Omri writes the literal sentence **"I lift the Julie tracking freeze for <item>"** and the guard (`verify_julie_tracking.py`) is run before and after. Everything else on the page or campaign is changed only through the **Change procedure** below, never directly on `main` or on the live ad sets.

## Frozen (do not touch)

### A. Meta (account act_1459085242361281)
| Item | Value |
|---|---|
| Campaign | `LGV_EN_PPC_ecomm-02_2026-09-02_#118149` · 52668266203628 · OUTCOME_SALES · AUCTION · ABO |
| Live ad set 01 | `ecomm_Adset_01_All_All_CPM_#108813` · 52668330533628 · ACTIVE · $350/day · OFFSITE_CONVERSIONS / IMPRESSIONS · LOWEST_COST_WITHOUT_CAP · promoted object pixel 1440305917310328 PURCHASE · attribution 7-day click + 1-day view · US · 35–64 · no custom audiences |
| Live ad set 02 | `ecomm_Adset_02_All_All_CPM_#108814` · 52668268711228 · ACTIVE · $75/day · same optimization/pixel/bid · attribution 7-day click + 1-day view + 1-day engaged video view · US · 35–64 · custom audiences: 52666079066428, 52666079110028, 52666079163628, 52666079230228, 52666079297628, 52666079370628, 52666963633828, 52666964011628, 52666964040828, 52666964306428, 52666964616028 |
| 10 active ads | 01: 52668330730828 (cr 1421688130109374), 52668898143028 (1565187478264079), 52668897625628 (1343381372190610), 52668898107028 (1080508261494838), 52668330731428 (1785478019474524) · 02: 52668330002428 (4959491497611868), 52668898253228 (1050596871309653), 52668898199228 (1641722501007422), 52668898222428 (1794108565116066), 52668330002628 (1354653956510067) |
| Every ad's link | `https://www.longevitylifeacademy.com/julie-masterclass/?preview=zoom-link-sample` |
| Every ad's URL parameters | `cid=118149&adGroupID=<108813 or 108814>&utm_source=Facebook&utm_medium=Topic&&utm_campaign={{campaign.id}}&utm_term={{adset.id}}&utm_content={{ad.id}}&creative={{ad.id}}&placement={{placement}}&cq_src=facebook&cq_cmp={{campaign.name}}&cq_con={{ad.name}}&cq_med={{placement}}&cq_net={{site_source_name}}&cq_plt=fp` |
| Pixel | 1440305917310328 "Longevity Life Academy" · first-party cookies enabled · automatic advanced matching ON (em, fn, ln, ge, ph, ct, st, zp, db, country, external_id) |
| Custom conversions | `LLA Julie Masterclass \| Purchase` 1426010666308623 · `\| InitiateCheckout` 1099790382424644 · `\| AddToCart` 1417373073897207 — rule: event AND url contains `www.longevitylifeacademy.com/julie-masterclass/` AND product_line contains `julie_masterclass` |
| Test ad sets | 52668961777228 and 52668956239228 stay PAUSED (may be deleted; never activated) |

Forbidden on the live ad sets: optimization goal, conversion event / pixel, attribution setting, bid strategy, geo, audiences, placements, conversion domain, ad link, URL parameters, editing an existing ad's creative in place, archiving/editing a custom conversion, any pixel setting. **Allowed with Omri's approval (no tracking impact):** daily budget, schedule, pausing an ad, adding a new ad only by *duplicating* an existing active ad so link + URL parameters are inherited unchanged.

### B. Live page (GitHub Pages)
| Item | Value |
|---|---|
| Repo / branch | `Longevity-Academy/julie-masterclass` · `main` · golden commit `42726fcd6a46908a499f2d94bb5cbf2f9558c947` · tag `tracking-golden-20260928` |
| Hosting | GitHub Pages; `www.longevitylifeacademy.com` CNAME → `longevity-academy.github.io`; a push to `main` is live within ~1–2 min |
| Protected files (SHA-1) | `index.html` dec2210e7f89fc498b2c8b76b9584022167fb064 · `assets/julie-meta-tracking.js` 763b1da28e769075cc617dedad03350781317ca2 · `assets/julie-attribution.js` 23d0780f1e0f84d59799bead220e36b778cc3a5c · `assets/julie-payment-safety.js` 3e0a036b2b0ed7f2bcbb9213c258ea9f87b916c6 · `assets/julie-international-checkout.js` 650d2b115ef6cd792ddc719e8efe01faa8abe3d4 · `assets/julie-premium-routing.js` c85635b22e9f180a397cce41b583836f4d2daafc |
| Tracking release | `julie-meta-20260927-4` · PIXEL_ID 1440305917310328 · RELAY_URL `https://lla-ac-events.vercel.app/api/meta/capi` · PRODUCT_LINE `julie_masterclass` · USD · standard 49 / VIP 79 |
| Event identity | browser eventID === server event_id: PageView `julie_pv_<session>`, ViewContent `julie_vc_<session>`, AddToCart `julie_atc_<CRM orderid>`, InitiateCheckout `julie_ic_<CRM orderid>`, **Purchase `<CRM orderid>`** (fires only after Airwallex SUCCEEDED / PayPal capture) |
| Click ID | `fbclid` from the ad URL → `fb.1.<ms>.<fbclid>` → `_fbc` cookie on `longevitylifeacademy.com` + localStorage `julie_fbc_v1`; `_fbp` from cookie |
| Buyer identity | from the CRM checkout-details response bound to the exact StudentId/OrderId, memory-only, hashed SHA-256 before sending |

`index.html` contains the Pixel base code and the three `LLA_META.track` call sites, so **every** edit to `index.html` — even copy — goes through the change procedure.

### C. CAPI relay (Vercel)
| Item | Value |
|---|---|
| Project | `lla-ac-events` · prj_3v7g4Xwve6OmXrcPCVQOWJOiN2SK · team gitter1 (team_QsIIEvdvnmtyD40s3mcnka6k) · no git link (CLI-deployed) |
| Production deployment | **dpl_DQogoRsNj1XXTpJQmFrRk9zzCCrU** (promoted 2026-09-28 07:35 IDT, i.e. the build that processed the 11:05 purchase) · aliases `lla-ac-events.vercel.app`, `lla-ac-events-gitter1.vercel.app` · previous: dpl_5SuufwCXfp7DFafmSRbs7SN7giiC (Julie path byte-identical) |
| Files (SHA-1, downloaded from Vercel) | `api/ac/event.js` 85f663113123e0e6501a3afb3865133a10ead369 · `api/meta/capi.js` b6b2fb2bcd534b688008404fc9580e31f2f39bfc · `lib/julie-capi.js` d835604aea87e7e66585526aa4d7635e96775bb1 · `lib/click-id.js` 9dc4f336c1f978d8805e09805acdf8a19b658f9e · `lib/blueprint-golden-capi.js` d05b9a5654cdcdf32e5f5ba49f85651b45e921dd · `lib/blueprint-receipt.js` b11ba702c9a4271ede2b3b60c08e11323ab11278 · `package.json` 62cb340852ed6b8e2f9ddc81a655003eab83fd45 |
| Byte-exact copy | `relay-golden-dpl_DQogoRsNj1XXTpJQmFrRk9zzCCrU/` in this folder |
| Env vars (values live in Vercel only) | META_PIXEL_ID, META_CAPI_TOKEN, AC_API_KEY |
| Live signature | OPTIONS → 204, `x-lla-release: clickid-exact-20260922`, CORS origin `https://www.longevitylifeacademy.com` |

**No relay deployment of any kind during the freeze.** The Perplexity Vercel connection has no deploy permission (verified 2026-09-28: "You don't have permission to create a Production Deployment"), which is now a feature. If Vercel ever shows a different production deployment: Vercel dashboard → Deployments → dpl_DQogoRsNj1XXTpJQmFrRk9zzCCrU → "Promote to Production".

## Change procedure (how website / campaign changes happen without breaking this)

1. **Branch, never main.** `git checkout -b change/<yyyymmdd>-<topic>` from `main`. Edit only what was asked.
2. **Static guard before merge:** `python3 verify_julie_tracking.py --repo <checkout>` → must print all PASS. Protected files must be byte-identical; if the change genuinely needs `index.html` (copy, images, sections), the diff must be reviewed line-by-line to show the Pixel base code and the three `LLA_META.track(...)` call sites are untouched, and the file's new SHA-1 is written into `golden.json` **only after** step 5 proves purchases still attribute.
3. **Preview:** open the branch on a preview URL (GitHub Pages preview / local), check desktop + 390px mobile, console clean, network shows `facebook.com/tr` PageView with pixel 1440305917310328 and the POST to the relay returning 200.
4. **Approval gate:** Omri sees the preview + diff + rollback command and writes "approve".
5. **Merge → live guard within 5 min:** `python3 verify_julie_tracking.py` (site + relay) and `python3 verify_julie_tracking.py --meta`. Anything FAIL → `git revert <merge sha> && git push` immediately, then report.
6. **Meta changes:** budgets/schedules only, through Ads Manager or API, then `--meta` guard. New creative = Duplicate an active ad in the same ad set, replace media/text only, keep link and URL parameters, then `--meta` guard.
7. **Log** every change in handover-master `_today-log.md` (repo, SHA, what, rollback).

## Rollback commands
- Site: `git -C <checkout> revert <bad sha> && git push origin main` — or hard restore: `git checkout tracking-golden-20260928 -- index.html assets/ && git commit -m "restore golden tracking" && git push`.
- Relay: promote dpl_DQogoRsNj1XXTpJQmFrRk9zzCCrU in the Vercel dashboard (or `vercel promote dpl_DQogoRsNj1XXTpJQmFrRk9zzCCrU --scope gitter1` from an account with deploy rights).
- Meta: values above are the restore targets; ad set optimization/attribution cannot be edited after creation — if wrong, pause the bad ad set and reactivate the golden one, never delete the golden ad sets 52668330533628 / 52668268711228.

## Guard
`verify_julie_tracking.py` (52 checks, all PASS at 2026-09-28 15:40 IDT): live file hashes, tracking constants, relay preflight + release header + CORS, both live ad sets' optimization/promoted object/attribution/bid/geo/status, all 10 ads' link + URL parameters, no unexpected ads, 3 custom conversions intact, pixel settings, test ad sets paused, Vercel production deployment id. Run it after any change and on demand.
