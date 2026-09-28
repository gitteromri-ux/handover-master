## 2026-09-28 | Julie page CAPI timing-only release

- User approved the prepared timing-only fix. Production repo: `Longevity-Academy/julie-masterclass`; only `assets/julie-meta-tracking.js` changed.
- Commit: https://github.com/Longevity-Academy/julie-masterclass/commit/42726fcd6a46908a499f2d94bb5cbf2f9558c947 ; release `julie-meta-20260927-4`.
- GitHub Pages built this commit; unversioned production helper byte-matches it. Production HTML unchanged.
- Page-level CAPI gets a two-second scheduled fallback independent of full page load and a visibility-hidden flush, retaining the existing one-time guard and cookie reread. No design, form, checkout, payment, AC, CRM, relay, or ad-setting changes.
- Real 390px slow-network visit: page CAPI sent at 2.83 seconds while still loading; both responses accepted. Browser/server event IDs matched. Early cold-visit server events lacked fbp because the pixel cookie appeared later; do not claim full cookie coverage.
- Six focused checks, fourteen controlled checkout cases and eight post-deploy simulated-payment cases passed. Simulated tests are not real CRM, payment, wallet or paid-attribution proof.
- Rollback snapshot: `backup/20260928-0035-capi-timing` at `dea444050697c4d66dd1125f5c86cfc4f9a763c2`. Reverse only this change with `git revert 42726fcd6a46908a499f2d94bb5cbf2f9558c947` on a new branch from current main, then review/promote. Never reset over later work.
- Keep this release when other tabs edit the website. Outstanding business-outcome proofs remain separate; no blanket tracking sign-off.

## 2026-09-27 | Julie: three new banner ads created, existing ads protected

- Latest explicit user scope: "No dont touch existing ones just upload new ones in full under same exact settings as the older ones." Any prior plan to replace eight older posts is cancelled. Do not execute it.
- Campaign52668266203628 / CRM118149 remains PAUSED. Three new PAUSED ads were created only in Ad Set1 52668330533628 / CRM108813.
- 7C ad52668877503028 / creative1768998810966061; 7B ad52668877520228 / creative2064252291124869; EVENT-ZOOM ad52668877520428 / creative1107956188434366.
- Each new creative has original 4:5 Feed, 9:16 Stories/Reels and square fallback images, approved masterclass copy, Apply Now CTA and https://www.longevitylifeacademy.com/julie-masterclass/?preview=zoom-link-sample. Destination returned HTTP200. Original Ad Set1 URL tags retained byte-for-byte.
- Attribution: 7-day click +1-day view. Pixel1440305917310328, Purchase, OFFSITE_CONVERSIONS. Audience35–64, selected US regions/D.C., original interest/income flexible group, no custom audience retargeting. No adset or budget mutation.
- Compared all ten old ads' IDs/names/creative IDs/status/tracking_specs, plus all six adsets' retrieved config and campaign status before/after: unchanged. New ads' initially copied old-post interaction reference was removed before completion; their own new post IDs read back correctly. Reference ad never edited.
- Meta returned three durable ad IDs; final readback new ads PAUSED/effective IN_PROCESS, no issues_info. This does not certify final policy approval. Browser-rendered Meta Feed previews for7C/7B and Story preview forEVENT visually inspected.
- Ad links:
  - https://www.facebook.com/adsmanager/manage/ads/edit?act=1459085242361281&selected_ad_ids=52668877503028
  - https://www.facebook.com/adsmanager/manage/ads/edit?act=1459085242361281&selected_ad_ids=52668877520228
  - https://www.facebook.com/adsmanager/manage/ads/edit?act=1459085242361281&selected_ad_ids=52668877520428
- Evidence: julie-meta-banners-20260927/final-snapshot.json, creative-readback.json, ad-verification.json, actual-meta-previews.jpg, Julie-ad-upload-review.md.
- No website/checkout/payment/AC/CRM/CAPI changes. No production source SHA changed. Rollback: keep the three new ads PAUSED; they already are. Do not activate campaign without separate instruction.


## 2026-09-27 | Julie masterclass Meta banner uploads only

- Scope: Meta ad account 1459085242361281, campaign 52668266203628. Uploaded the user's original 7C, 7B and EVENT-ZOOM concepts from https://gitteromri-ux.github.io/lla-meta-ig-ad-sizes/adset-masterclass.html?v=3 in 4:5 1440x1800, 9:16 1440x2560 and 1:1 1440x1440. Nine images, intended as three ads. Meta readback verified all nine dimensions and image hashes.
- No ads/creatives created or replaced; no campaign/adset, budgets, targeting, pixel, website, checkout, CRM or ActiveCampaign changes. Campaign reread PAUSED.
- Proposed new-ad destination: populated prospecting Ad Set 1 52668330533628 / CRM108813, same URL tags and settings. Await exact copy/scope approval before creating three paused ads.
- Existing posts: two Ad#12 creatives already have the masterclass offer; eight remaining ads in AS1/AS2 still have Blueprint $179/month copy. Original Page1036363559571443 is not accessible to the connected identity; previous mutation failed Advertiser-role code10/subcode3858749 and today's Page metadata read failed permission. Do not retry unchanged or silently substitute Page identity. Connected LLA Page1179505785236150 has Advertise/Create Content access. Ask whether to preserve original Page and obtain access or approve new posts under the connected LLA Page, losing old post engagement.
- Image hashes, Feed / vertical / square:
  - 7C: 1245b2180185701fef53a748a3ae01af / 8441be0a5b2863ca29afc1563b8b0cd1 / b5e3149017e17c487f56dff09422005f
  - 7B: 96d53f935f8b41e57e1e0847d2d59b75 / 4bd88a43ed68de0bffdc127124435534 / 0df339ed1a04f42bf55108fe7c6cd42a
  - EVENT-ZOOM: 55ae342a7ff71f2164aabd9a9d5163ee / 549d70dff9b8315702b028373401dbaa / f15f3e1ad3aa33eb632acc4230f93d82
- Evidence/workspace: julie-meta-banners-20260927; shared review artifact0f69f815-f617-4d0b-9f4a-d6d1e8b6c87c. Rollback: none needed for existing ads because untouched; unused uploaded media has no delivery effect. No production source SHA changed.


## 2026-09-27 · Approved home-banner video repair LIVE

- User reported slow/nonworking hero video and required no design changes. Video-only candidate explicitly approved at 12:15 IDT.
- Found 176 original HLS files missing from current Pages manifest; warm cache sometimes served them but cold requests returned homepage HTML. Recovered the complete original from `1deb9241f274eda642bd7a66588c4cae43d85263`; 138.967s video, 139s delivery, no cut.
- Repo `gitteromri-ux/lla-course-checkout`, branch `fix/home-video-20260927`, code commit `84efbc2`. Added adaptive 480/720/1080 HLS + full MP4 fallback. Restored old HLS asset hashes for cached-player compatibility. Only existing `index.html` (script cache version) and `assets/julie-approved-player.js` changed; no layout/content/forms/payments/tracking changes.
- Live https://longevitylifeacademy.pages.dev/ ; Cloudflare `49e32c83-83b2-44a8-866f-ce66a271ccdc`, success, uses_functions true, 617 assets, none removed.
- Live Chromium desktop first playing 0.98s; 390px simulated mobile at 4 Mbps / 150ms first playing 2.982s. Full duration, sound toggle, end seek/playback passed; no JS or media-request errors. Source and cold video segment byte-exact; checkout/tracking-helper hashes unchanged.
- Actual iPhone Safari NOT tested (WebKit unavailable). Emergency MP4 preview starts with sound but end-seek timed out; full-file HTTP 200 rather than Range 206. No claim of universal playback guarantee.
- QA blocked analytics and outbound writes; no Meta, CRM, or payment test pollution.
- Rollback CF: POST `/client/v4/accounts/55eb74f4002b7237e393bd6980a1676a/pages/projects/longevitylifeacademy/deployments/7811edbc-7259-45f1-bd82-79d7b6210255/rollback`.
- Vercel remains approved tracking deployment `dpl_7ptRYWVGUsbhVPsmx4diuCsEXLvP`. This video task did not touch relay or campaigns. Real paid attribution remains unproven.


## 2026-09-27 · Blueprint tracking recovery approved and LIVE

- User explicitly approved the exact tracking-only promotion at 11:47 IDT. Deployment completed around 11:48 IDT.
- Repo `gitteromri-ux/lla-course-checkout`; branch `fix/blueprint-golden-tracking-20260927`. Browser code commit `e6d305fb4e34c92eccaa1d44236f91afef2d442e`; scoped relay/evidence commit `e14ec5f012a7024048d37c902a7540a3aed586cb`.
- Cloudflare production `7811edbc-7259-45f1-bd82-79d7b6210255`, successful and uses_functions=true. https://longevitylifeacademy.pages.dev/ and `/checkout` HTTP 200. All three approved changed files byte-exact; 226 assets retained, only those three hashes changed.
- Vercel production `dpl_7ptRYWVGUsbhVPsmx4diuCsEXLvP` confirmed by project target. Deployed CAPI source byte-identical to candidate; current AC source hash preserved. Live OPTIONS 204 for Blueprint and Julie origins; GET 405 as expected.
- Live desktop 1440px and mobile 390px homepage/checkout: four HTTP 200 responses, no page JS errors, `qa=1` tracking exclusion active and outbound writes blocked. No payment or live Meta test event sent.
- Scope: historical Blueprint commerce fbc fallback and immediate dispatch; historical CAPI handler for Blueprint commerce only. Design, forms, card/PayPal, AC, CRM, Julie, ad sets and budgets were not edited.
- Rollback Cloudflare: POST `/client/v4/accounts/55eb74f4002b7237e393bd6980a1676a/pages/projects/longevitylifeacademy/deployments/3cc41778-8b06-4d8f-8556-01869e438064/rollback`.
- Rollback Vercel: POST `/v9/projects/prj_3v7g4Xwve6OmXrcPCVQOWJOiN2SK/rollback/dpl_EPnkKzboNGiXLhYUwap9fcxoFWj8` with empty JSON body. Git snapshot remains `backup/20260927-blueprint-tracking`.
- NOT a whole-system September 17 rollback and NOT proof of restored paid attribution. Real payment settlement, Meta receipt/deduplication and Ads Manager ad-set credit remain unverified. Never present offline tests or deployment checks as sale/attribution proof.


## 2026-09-27 · Blueprint tracking historical recovery, staged only

- Repo: `gitteromri-ux/lla-course-checkout`, branch `fix/blueprint-golden-tracking-20260927`.
- Browser commit `e6d305fb4e34c92eccaa1d44236f91afef2d442e`; evidence/scoped-relay commit `e14ec5f` (full SHA in branch history).
- Preview: https://4757e40b.longevitylifeacademy.pages.dev/ and `/checkout`, HTTP 200; three changed files byte-exact to candidate. Cloudflare preview ID `4757e40b-b7ed-40b0-82bb-09c409f4fa4b`, uses_functions true.
- Restored historical commerce fbc helpers and immediate commerce dispatch only. Design, forms, payments and Julie unchanged. 18 offline tests pass; desktop and 390px screenshots inspected; no live Meta test traffic or payment transactions.
- Actual Vercel project name is `lla-ac-events`, ID `prj_3v7g4Xwve6OmXrcPCVQOWJOiN2SK`. Unscoped built-in `vercel api` reads/source retrieval and deployment creation succeeded, unlike scoped CLI linkage. Candidate `dpl_7ptRYWVGUsbhVPsmx4diuCsEXLvP` READY with `autoAssignCustomDomains:false`. Preview endpoint is SSO protected (302), not runtime-validated.
- Production NOT promoted. Cloudflare remains `3cc41778-8b06-4d8f-8556-01869e438064`; Vercel remains `dpl_EPnkKzboNGiXLhYUwap9fcxoFWj8`. These are the rollback targets.
- Git snapshot `backup/20260927-blueprint-tracking` points to `6ad9a08c960bb968879831c0a67b828e6f7bab37`.
- This is NOT a complete September 17 rollback. Historical matching/dispatch is scoped while newer payments, order-stable Purchase IDs, browser exclusions and receipts remain. No guarantee of attribution or sales; Meta acceptance, deduplication and paid ad-set credit still unverified.
- Required next gate: explicit post-preview approval, then promote only scoped candidate and re-verify. Never replace the full relay with the old deployment: current AC behavior must remain.


## 2026-09-27 · Julie CEO acquisition chart

- Repo: `gitteromri-ux/julie-500-launch-plan`.
- User authorized uploading the reviewed, enlarged chart as the first slide.
- Changed only `index.html` and new `acquisition-plan.html`: current daily/weekly chart first, color coding, large typography, weekly volumes and unit costs, plain-language funnel ratios. Original deck preserved and labeled earlier assumptions.
- Commit: `40c64f9c328be02e84da8b31569931f818614f89`.
- Snapshot: `backup/20260927-1027-ceo-chart` at `a9e14a28304a78578c4fd0268e5580b877e133f5`.
- Rollback: `git revert 40c64f9c328be02e84da8b31569931f818614f89` and push normally.
- Preview verified HTTP 200, 1920px desktop and 390px mobile, no page errors. Model remains assumptions: $40,813 total, 294 paid by week 2 (206 short), exactly 1,000 by week 4; no campaign budgets changed.

# 📆 Today's Activity Log — September 1, 2026

Compiled at **10:08 PM Asia/Jerusalem** (19:08 UTC).

## Sessions active today

- **80105805** — IN Venture proposal deck iteration (10:15 UTC → 19:07 UTC · 23 turns · very heavy design feedback)
- **91e2e6d7** — auxiliary IN Venture session (08:24 → 13:28 UTC · 16 turns)
- **696c0fdf** — spans Aug 31 → Sep 1 (30 turns)
- **e8b39865** — "Find the Inventor VC Fund website" recall session (10:02 → 10:05 UTC)
- **e0a68a7f** — Upwork Gaurav Goyal contract check (08:30 UTC)
- **40f5de66** — LLA Julie Masterclass long-running session (Aug 26 → Sep 1 18:58 UTC)


## 📆 Every commit landed **today** (Sep 1, 2026)

| Time (UTC) | Repo | What changed |
|---|---|---|
| **19:02** | [`lla-julie-letter`](https://github.com/gitteromri-ux/lla-julie-letter) | Full-width layout, magazine-scale hero, larger nav, no wasted margins |
| **18:58** | [`lla-julie-letter`](https://github.com/gitteromri-ux/lla-julie-letter) | Redesign: premium editorial letter, huge Playfair Italic type, embedded media |
| **16:01** | [`handover-master`](https://github.com/gitteromri-ux/handover-master) | Add clear dates + large date headers on every task |
| **14:46** | [`handover-master`](https://github.com/gitteromri-ux/handover-master) | Master handover — 36 projects, 365 URLs, 62 repos, full ruleset |
| **13:30** | [`lla-julie-letter`](https://github.com/gitteromri-ux/lla-julie-letter) | Communications plan letter — initial full public site |
| **11:04** | [`lla-masterclass-press`](https://github.com/gitteromri-ux/lla-masterclass-press) | Round-three press articles: two full Yahoo/AP-format releases |
| **10:58** | [`Longevity-Academy/julie-masterclass`](https://github.com/Longevity-Academy/julie-masterclass) | Fix checkout blocker: parse lead API response body, accept PascalCase |
| **10:51** | [`lla-masterclass-syllabus`](https://github.com/gitteromri-ux/lla-masterclass-syllabus) | Rewrite in LLA Blueprint course format (teaching-beat arrows) |
| **10:47** | [`lla-masterclass-syllabus`](https://github.com/gitteromri-ux/lla-masterclass-syllabus) | Real teaching syllabus, minute-by-minute, no fluff |
| **10:45** | [`Longevity-Academy/julie-masterclass`](https://github.com/Longevity-Academy/julie-masterclass) | AC events carry session date + CRM order/student ids for eTeacher ads |
| **10:37** | [`lla-masterclass-syllabus`](https://github.com/gitteromri-ux/lla-masterclass-syllabus) | Masterclass one-hour syllabus site — initial commit |
| **10:23** | [`in-venture-website`](https://github.com/gitteromri-ux/in-venture-website) | Premium design overhaul v2 — Playfair Display, brand-true dark keynote hero |
| **09:52** | [`lla-julie-communications-plan-v2`](https://github.com/gitteromri-ux/lla-julie-communications-plan-v2) | V2 · zero external buttons · every material rendered as in-page mockup |
| **09:36** | [`lla-julie-communications-plan-v2`](https://github.com/gitteromri-ux/lla-julie-communications-plan-v2) | V2 · inline media (videos, banners, animations, mockups, press mockups) |
| **09:01** | [`lla-julie-communications-plan-v2`](https://github.com/gitteromri-ux/lla-julie-communications-plan-v2) | V2 · exact V1 structural clone · masterclass launch content |
| **08:30** | [`lla-julie-communications-plan-v2`](https://github.com/gitteromri-ux/lla-julie-communications-plan-v2) | V2 communications plan — masterclass launch (initial commit) |

**Total commits today:** **16** across **7 repos**.


## Repos created today

1. `gitteromri-ux/lla-julie-letter` — 08:30 UTC was communications-plan-v2; letter site created at 13:30 UTC
2. `gitteromri-ux/lla-julie-communications-plan-v2` — created 08:30 UTC
3. `gitteromri-ux/lla-masterclass-syllabus` — created 10:37 UTC
4. `gitteromri-ux/lla-masterclass-press` — created 11:04 UTC

## Key operational updates

- **LLA checkout:** production `Longevity-Academy/julie-masterclass` repo received two important fixes today —
  1. **Checkout blocker fix** parsing lead API response body and accepting PascalCase keys (10:58 UTC)
  2. **ActiveCampaign event enrichment** — events now carry session date + CRM order/student IDs so eTeacher's ads and reporting can attribute properly (10:45 UTC)
- **IN Venture design system:** Playfair Display + dark keynote hero was accepted after multiple rejections. Store this as the confirmed premium editorial baseline.
- **Communications plan V2 principle established:** zero external buttons; every material renders inline as an in-page mockup.

## Preference reinforcements observed today

- Every font 2x larger than default
- No yellow, no monotonic palettes, no template look
- Content must match prompts exactly
- "Premium" means real color, 3D/light, editorial typography — not white minimalism
- Playfair Italic (not just Playfair Display) for the letter hero

## 2026-09-25 07:45 IDT — lla-course-checkout (longevitylifeacademy.pages.dev)
- Live: Cloudflare Pages deployment 543adb13 (production). Rollback: redeploy/rollback to a5414f7c.
- Fix 1: dist/_worker.js + _routes.json — server re-issues _fbc/_fbp (90 days, byte-identical) and sets _fbc=fb.1.<ms>.<fbclid> on landing; HTML routes only.
- Fix 2: index.html + checkout.html gate — ?llatest=1 or a test email (example.com, test/qa/demo tokens, gitter, eteacher, gita-agency) silences pixel+relay on that device permanently; ?llatest=0 clears.
- Fix 3: index.html — LLA2_*/LLA_Load/CTA_Seen counter events no longer sent to the Meta pixel (Cloudflare counters kept).
- Verified: live 200, byte hash = repo, Set-Cookie on fbclid URL, 390px render. Commit: see lla-course-checkout main.

## 2026-09-25 14:50 IDT — LLA course site (longevitylifeacademy.pages.dev, Ad Set 2 / Ad #12 landing) — golden-parity tracking fix LIVE (user-approved)
- Repo lla-course-checkout branch fix/golden-parity-20260925, commits 4604e3c, b9f8edc, 49c5a24. Cloudflare Pages production 7a37f7ca (was 543adb13).
- Changed: server fbc fallback (cookie → lla_fbc_v1 → exact URL fbclid); worker _fbc prefix fb.2 = Pixel; removed lla-rt-*.workers.dev counters; tester regex = team only; phones load 4K film/hls.js only when on screen or tapped.
- Unchanged (verified vs 543adb13): all visible text home+checkout at 390/1440, page heights, script order, relay payload fields (AC triggers), checkout flow.
- Julie masterclass site (www.longevitylifeacademy.com, Longevity-Academy/julie-masterclass): NOT touched.
- Rollback: Cloudflare Pages → longevitylifeacademy → deployment 543adb13 → Rollback.
# 2026-09-26 01:25 IDT: tracking receipt repair candidate, not production

- Repository: gitteromri-ux/lla-course-checkout.
- Branch: fix/tracking-receipts-20260925; commit: 6ad9a08c960bb968879831c0a67b828e6f7bab37.
- Changes: browser relay receipts, server structured outcome logs, server known-test exclusion, order-stable Purchase event IDs and callback guard, removal of fabricated Purchase amount fallback, original event timestamp retention, funnel product-field forwarding.
- Verification: 21 receipt regressions and 20 click-ID regressions passed locally with upstream requests mocked; three offline WebKit IC paths passed. Desktop 1440px and mobile 390px checks returned local HTTP 200, no page errors and no horizontal overflow. Non-script markup unchanged.
- Production: NOT DEPLOYED. No live attribution or real-buyer proof asserted. Runtime logs still need durable retention and actual project access.
- Blockers: connected Vercel context cannot see existing lla-ac-events project; Cloudflare connector invalid X-Auth-Key header, reauthorization requested.
- Rollback: no production rollback needed. Candidate can be abandoned; base 49c5a24, backup/20260925-2209-measurement retained. Prior Cloudflare production record 7a37f7ca must be reverified before any eventual promotion.

## 2026-09-26 12:45 IDT: Cloudflare Pages access verified; receipt preview deployed

- Repository: gitteromri-ux/lla-course-checkout; candidate SHA 6ad9a08c960bb968879831c0a67b828e6f7bab37.
- The established approved LLA Funnel Deploy credential successfully reads and deploys Pages. The separate Pipedream API-key connector remains invalid; it is not the Pages deployment route.
- Preview only: https://0d6ba1c7.longevitylifeacademy.pages.dev, deployment 0d6ba1c7-e770-4bd7-867c-fdffd294aea5, branch receipt-review-20260926. Provider reports successful preview deployment.
- Preview index and receipt helper HTTP 200; helper bytes match the candidate. Browser checks: receipt API loaded, LLA_LIVE=false, no horizontal overflow at desktop and 390px mobile. No form was submitted.
- Production remains 7a37f7ca-007f-484a-82c1-4437e695083a, verified against the Pages project API. No production change or rollback needed. For a later approved promotion, rollback target is that deployment.
- Vercel connector still cannot see the recorded ac-events project, including its documented ID. Server repair remains undeployed. Preview does not prove CAPI repair, Meta deduplication, or real Ad Set 2 attribution.

## 2026-09-26 22:40 IDT — LLA tracking: no production change; truth table written
- Repo lla-course-checkout: unchanged (production 3cc41778). No test events sent. Replay identifiers recorded in projects/lla-course-checkout.md.
- Wrote "TRACKING TRUTH TABLE" into projects/lla-course-checkout.md: settled facts, the 4 open items, and what never to redo. Every future tracking session must start from that section, not from re-pulling Sep 19–26 data.
- Rollback: n/a.

## 2026-09-27 — Julie masterclass v8 (production)
- Repo: Longevity-Academy/julie-masterclass, main 9c69156 → **5bf678c** (live at https://www.longevitylifeacademy.com/julie-masterclass/, HTTP 200, `assets/julie-v8.css` 200).
- Changed: container 1400px + larger type sitewide; pricing cards full width, bigger fonts; Zoom shot enlarged/symmetric with cards; `#protocol` fold removed, phone mockup moved into new `#how` fold; `#dv-news` removed, `#press` rebuilt as 9 .dev-style cards with real Julie/Harel photos; `#school` = exact .dev institution fold (PNG eTeacher logo); `#reveal` flat wide grid + movement video card 2; `#julie` restored v48 claims fold (3 animations + portrait + stats).
- New assets: assets/julie-v8.css, assets/pillars/exercise-yoga-v2.mp4 (+poster), assets/phone-mockup-julie-live.jpg, assets/press-people/harel-tayeb.jpg, assets/instructors/julie-gibson-clark.jpg.
- Rollback: `git revert 5bf678c` on main (or `git push origin 9c69156:main --force`).
- Not verified: real-device fonts (Codec Pro via cdnfonts) and video autoplay on iOS Safari.

## 2026-09-27 13:11 IDT: approved Blueprint hero presentation and wallet removal

- Repo `gitteromri-ux/lla-course-checkout`, branch `fix/hero-wallet-20260927`, code SHA `36b2148`.
- User approved production at 13:10 IDT after preview `https://a71754f2.longevitylifeacademy.pages.dev/?qa=1`.
- Live only `https://longevitylifeacademy.pages.dev/`, Cloudflare deployment `9b2b07d7-a8c5-4ff6-8813-bf2a9f4a143b`.
- Three files only: index cache version, player presentation overrides removed, checkout Google Pay logo and both wallet request configurations removed. Card/PayPal allowlists remain. Hero HTML/CSS equals pre-video-repair `77f2bdb` except cache version. Full 139-second adaptive video retained.
- Production verified HTTP 200, exact bytes, desktop1440/mobile390 matching original hero computed dimensions/fit/position/radius/controls, video/sound pass, wallet logos absent, JS errors none. Chromium only; no physical Apple-device test and no completed payment. All outgoing payment/CRM/analytics writes blocked during QA.
- Julie masterclass, tracking relay, form handlers, CRM backend and campaigns untouched.
- Rollback: POST `/client/v4/accounts/55eb74f4002b7237e393bd6980a1676a/pages/projects/longevitylifeacademy/deployments/49e32c83-83b2-44a8-866f-ce66a271ccdc/rollback`. Backup `backup/20260927-1232-hero-wallet`.
- Proof: https://github.com/gitteromri-ux/lla-course-checkout/tree/fix/hero-wallet-20260927/hero-wallet-20260927

## 2026-09-27: Julie tracking candidate and approved reporting separation

- Confirmed target only https://www.longevitylifeacademy.com/julie-masterclass/?preview=zoom-link-sample. User approved exact tracking-only release after remaining checks at 15:07 IDT. Campaign activation, ad-set optimization, design, video, forms, payments, AC triggers and normal .dev changes excluded.
- Operator OS tracking/change safety loaded; Claude Fable 5 maximum effort implemented candidate, main agent independently reviewed and corrected 7 identity/retry/gating risks.
- Site repo Longevity-Academy/julie-masterclass: backup branch backup/20260927-julie-tracking at 2f51535008e1011d32d5b612b75257c842dee934; candidate branch fix/julie-tracking-20260927 at 395c4967ee6b4d20d8a804419346dec3992211dd. Only index.html tracking/attribution wiring and new assets/julie-meta-tracking.js changed. Main NOT promoted.
- Relay candidate dpl_5SuufwCXfp7DFafmSRbs7SN7giiC, READY, autoAssignCustomDomains false. Only api/meta/capi.js Julie dispatch + new lib/julie-capi.js changed. AC, historical Blueprint, click-id and package files byte-identical. Production target remains dpl_7ptRYWVGUsbhVPsmx4diuCsEXLvP. Preview returned SSO302; vercel curl failed linked-project visibility. No bypass/security change attempted.
- Live Meta reporting-only custom conversions created and read back: ATC 1417373073897207; IC 1099790382424644; Purchase 1426010666308623. Each rule requires exact standard event + URL contains www.longevitylifeacademy.com/julie-masterclass/ + product_line contains julie_masterclass. Account1459085242361281/pixel1440305917310328. Campaign52668266203628 stillPAUSED; all existing standardPurchase optimization unchanged.
- 55/55 offline tests pass, allfetch mocked. Desktop1440/mobile390 hero + firstform computedgeometry/styles match baseline; zero JS errors, externaltracking/CRM/payment writesblocked. Not actual iPhone/wallet/settledpayment or ad-setattributionproof.
- Release remains gated: current MetaTestEventscode pending, previewruntime unverified, realpaidPurchase/CRMqueue/dedup/EMQ notproven. No inventedtestcode/fakeproductionPurchase. No AC mutations or paymenttransactions. Replacementadcopy drafted only; token lacks pages_manage_posts.
- Rollback: restorewebsite2f51535 andrelaydpl_7ptRYWVGUsbhVPsmx4diuCsEXLvP; remove only the three newJulie customconversions if required. No existingcampaignpixelrules edited/deleted.
- Candidate source https://github.com/Longevity-Academy/julie-masterclass/commit/395c4967ee6b4d20d8a804419346dec3992211dd

## 2026-09-27 15:30 IDT — Brand checkout URL router (Roberto / CRM request) — LIVE
- Ask: CRM keeps one generic link per brand, `https://www.longevitylifeacademy.com/checkout/?stid=&orderid=`, and the page must show the right product dynamically (IIBS pattern). CRM unchanged; site matches it.
- Repo `Longevity-Academy/Longevity-Academy.github.io` main `3049b72` — `checkout/index.html` (+33): `LLA_COURSE_ROUTER`. After the existing `/api/checkout/details` read, if `CoursePrice.MainAbroadCourseID==283 || AbroadCourseID==1823` (Longevity Masterclass, same IDs `LLA_PLAN` writes) → `location.replace('https://www.longevitylifeacademy.com/julie-masterclass/' + raw location.search)` BEFORE Airwallex init and before any AddToCart/InitiateCheckout/Purchase (only base PageView has fired). Blueprint 258/1774 and unknown ids: unchanged code path. Loop guard `sessionStorage lla_course_routed_<orderid>`.
- Repo `Longevity-Academy/julie-masterclass` main `af9fdc5` — `index.html` (+14) mirror inside `openFromCrmLink`: Blueprint order (258/1774) on `/julie-masterclass/?stid=&orderid=` → `location.replace('https://www.longevitylifeacademy.com/checkout/' + raw location.search)`. Masterclass orders unchanged. No change to pixel, LLA_META, AC, payments, LLA_PLAN.
- Live proof (external trackers blocked, CRM read-only, real Blueprint order 8035221 = course 258 $279): `/checkout/`+masterclass order → forwarded to `/julie-masterclass/?stid=…&orderid=…&IsForTesting=1&cid=118149&adGroupID=108813&utm_source=fb&fbclid=IwAR2_ab-cd` byte-identical; `/checkout/`+8035221 → stays Blueprint; `/julie-masterclass/`+8035221 → forwarded to `/checkout/?…` byte-identical; `/julie-masterclass/`+masterclass order → stays, Pay screen opens. Not tested: a real masterclass CRM order (none created; no CRM writes).
- Tracking sync (tab 955af4aa, branch `fix/julie-tracking-20260927` @ 395c496, based on 2f51535): `git merge origin/main` (af9fdc5) → auto-merges `index.html`, 0 conflicts (b06ae7b locally, not pushed). Forward target `https://www.longevitylifeacademy.com/julie-masterclass/` is exactly the `onProductionPage()` host/path the helper requires, and the full query (fbclid, cid, adGroupID, utm_*) is carried, so Julie AddToCart/IC/Purchase events for CRM-link buyers fire under the Julie rules. Rebase the tracking branch on af9fdc5 before promoting.
- Rollback: `git revert 3049b72` (github.io) / `git revert af9fdc5` (julie-masterclass). Earlier today (julie-masterclass, design only): 80058e5, ff72c22, 3a6b77b, 3c1a9e3, a6008d7, 2f51535 (v8.1→v9.5); rollback to pre-v8 = `9c69156`.

## 2026-09-27 15:26 IDT approval: Julie tracking promoted and live checks completed

- User explicitly approved controlled production check after Vercel protected-preview access failed. No protection setting changed. User took over ad/post edits at15:24; no subsequent ad mutations.
- Site https://www.longevitylifeacademy.com/julie-masterclass/ now release https://github.com/Longevity-Academy/julie-masterclass/commit/03e8a91da0f0455929f541076efcdba7f4580ed9. Latest pre-release main af9fdc58bf5ff157796c50a3582366cff40e6cbb included a CRM course router; preserved by applying exact original tracking patch on top. Backup backup/20260927-julie-before-promotion.
- Vercel lla-ac-events production is dpl_5SuufwCXfp7DFafmSRbs7SN7giiC, READY. Julie module julie-strict-20260927-2. QA POST200/skipped qa_excluded; GET405; OPTIONS204; invalid legacy event400; invalid Julie Purchase400. No test events forwarded to Meta.
- Production HTML and helper HTTP200 and exact source bytes. Browser1440/390 hero and first-form controls/computedstyle/geometry match latest baseline; no JS errors. External analytics, CRM and payment writes blocked. Full checkout/AC/payment block byte-identical to latest baseline.
- 55/55 offline tracking tests passed. Real Meta receipt/dedup/EMQ, real ad-set attribution, paid transaction, and CRM sales-queue assignment NOTverified. Meta Test Events code not obtained: no reachable logged-in local browser, device list empty. ActiveCampaign read connector failed TypeError Invalid URL. No AC/CRM/payment writes.
- Prior ad work before user takeover: two Ad#12 ads52668330731428 and52668330002628 replaced with correct masterclass text, creatives2275301083265175 and1116734164202511. Oldcreatives1419810903366334 and1116895674611630. Eightothersunchanged due Page1036363559571443 Ads permissiondenial code10/subcode3858749. This was API permission rejection, NOT ad-policy rejection. Lastread twoedited IN_PROCESS, campaignPAUSED.
- Reporting-only conversions remain ATC1417373073897207, IC1099790382424644, Purchase1426010666308623. Existing shared-pixel Purchase optimization unchanged.
- Rollback website: revert03e8a91 preservinglatercommits; baselineaf9fdc5. Relay: rollback to dpl_7ptRYWVGUsbhVPsmx4diuCsEXLvP. Do not restoreolder2f51535 overlatestCRMrouter.
- Operational note: first publiccheck ran underVercel credentialproxy and failedlocalconnection; automaticrollback409 becausepromotioninprogress. Subsequent publicchecks withoutcredentialproxy passed and confirmednewtarget. No completedrollback and no observedproductionoutage.
## 2026-09-27 15:55 IDT — Julie: approved film + desktop checkout scroll fix — LIVE
- Repo `Longevity-Academy/julie-masterclass` main `99da1df` (on top of tracking promotion 03e8a91).
- Film: the page used a 90 s Julie film (cloudfront e4f963bb) and a 9 s b-roll loop (5ad9539e). Replaced with the approved 2:19 film identical to the .dev site (`julie-film-v20260927`, 1080p HLS rendition remuxed with `-c copy`, no re-encode, 139.05 s): `assets/film/julie-film-1080p.mp4` (43 MB, hero sound + trailer on ≥900px), `assets/film/julie-film-720p.mp4` (19.5 MB, hero muted loop + phones), poster `julie-film-poster.jpg` (= .dev `julie-approved-4k-poster.jpg`). Live HTTP 200, accept-ranges bytes.
- Checkout scroll (Mac reports, step 2 stuck): reproduced headless 1440px — wheel over `.em-dialog` moved the page behind (scrollY 1193) and not the dialog (scrollTop 0) because Lenis hijacks wheel. Fix: `lenisPause()` stops Lenis on `open()`/`openCheckout()`, restarts on `close()`/`closeCheckout()`; `data-lenis-prevent` on `.em-dialog`, `#ckScreen`, `#trailerModal`. Live re-test: dialog scrollTop 345 (bottom), page scrollY 0.
- No change to pixel/LLA_META/tracking helper, LLA_PLAN, CRM, AC, payments. Rollback `git revert 99da1df`.

## 2026-09-27: Julie complete-browser tracking regression, all 24 scenarios passed

- After user demanded further end-to-end testing, ran actual-site browser flows for all six supplied CRM adGroupIDs108813–108818, both Standard49/VIP79 and both existing Airwallex/PayPal success callbacks. Desktop1440 and mobile390 covered.
- Every external write intercepted and payment SDK mocked: no reallead/order/charge/Meta conversion. Results are integration tests, NOT provider acceptance or paid attribution proof.
- All24 passed: PV/VC/ATC/IC/Purchase onceperside andpairedIDs; Purchase onlyafter simulatedsuccess, duplicatecallbackguard; correctUSDamount/orderID/fbc; cid118149/adGroupID inCRMpayload; allthree existingACstages withRegular/VIP; singlepaymentreport; card/googlepay/applepayconfigretained; noJSerrors.
- Script julie-tracking-20260927/funnel-browser-regression.cjs; results evidence/funnel-browser-regression.json. No additionalproductioncodechanges.
- Current main99da1dff44c9d6f84bba687a8e2f89ce25645c02 was addedbyothertab forfilm/Lenisscrolling; comparedwith03e8a91 andconfirmedtrackingpatchpreserved. Otherworkersmuststartlatestmain, notrestore03e8a91overlaterwork.
- MetaAPI GETpixel fields=test_event_code returned100 nonexistingfield. No logged-inbrowser/devices available; actualMetaTestEvents/receipt/dedup/ROAS andCRMqueue remainunverified. Do notpresent24testsassalesoractualattribution.

## 2026-09-27 16:10 IDT — Julie hero film uncut (v9.6) — LIVE `a4e90d4`
- `julie-masterclass` main `a4e90d4` (descendant of 03e8a91 → 99da1df). CSS only (`assets/julie-v8.css?v=10`): hero film is a 16:9 frame beside the copy on desktop (no mask fade, no gradient over the film, rounded frame), and on ≤980px it sits under the copy in its own 16:9 frame (never behind the headline). Copy/video overlap measured 0 at 1024/1280/1440/1920/390.
- Film identity proven: `julie-film-720p.mp4` md5 2d135f18c24e == .dev `full-film-720p.mp4`; 1080p frames at t=10/70/130 md5-identical to the .dev 1080p HLS rendition; duration 139.05 s on both. Live: hero 720p, trailer 1080p (1120×630, 16:9), sound unmuted on open.
- Desktop dialog scroll re-tested live on a4e90d4: scrollTop 345, page 0.
- Cache: www.longevitylifeacademy.com is a direct CNAME to GitHub Pages (server GitHub.com/varnish, no Cloudflare proxy) → nothing to purge; CDN already serves last-modified 12:57Z. Browser HTML cache max-age=600 → any visitor sees the new page within ≤10 min on the same link; assets are versioned.

## 2026-09-27 approximately16:24 IDT: live Meta receipt evidence improved, no complete sign-off

- Meta dataset1440305917310328 active; server_last_fired_time2026-09-27T06:09:21-0700 (16:09:21IDT). SERVER_ONLY query returned PageView/ViewContent/ATC/IC activity on sharedpixel; do not inferJulie-specificPurchase orquotevolumes thatcouldincludetests.
- Julie-specific customconversion1099790382424644 InitiateCheckout reports first/last_fired_time2026-09-27T12:36:22+0000 (15:36:22IDT). Rule ANDInitiateCheckout + JulieURL + product_linejulie_masterclass. This is actualMetareceiptproof forJuliecheckout, channel/dedupnotidentified.
- JulieATC1417373073897207 andPurchase1426010666308623 return nofirst/lastreceipt timestamp, bothis_unavailablefalse. NoactualPurchase/ROAS/CRMqueueverificationyet. Do notsignofftheseitemsaspassed.
- Freshlocalbrowserattemptstillnoreachableloggedinsession. Noadditionalads/site/CRM/paymentmutations.

## 2026-09-27 16:40 IDT — Privacy Policy replaced on all 3 LLA sites (LLA_Privacy_Policy_Professional, Last Updated Sept 18, 2026)
- Source: user docx `LLA_Privacy_Policy_Professional-1-1.docx`; converted via pandoc; plain-text of the page body verified identical to the docx (25,452 chars). Callouts → `.pp-callout`, info box → `.pp-box`; each site keeps its existing privacy-page shell (topbar/footer/theme).
- `Longevity-Academy/Longevity-Academy.github.io` main `6c34c79` (from 3049b72): `privacy.html` replaced. Live https://www.longevitylifeacademy.com/privacy.html bytes == repo. Rollback `git revert 6c34c79`.
- `Longevity-Academy/julie-masterclass` main `d9f77be` (from a4e90d4): new `privacy.html` + one footer link "Privacy Policy" in The Academy column (index.html, +1 line). Live https://www.longevitylifeacademy.com/julie-masterclass/privacy.html 200, bytes == repo. Rollback `git revert d9f77be`.
- `gitteromri-ux/lla-course-checkout` branch `fix/privacy-20260927` `734f476` (from 05119b7 = live 9b2b07d7 dist, verified byte-identical for /, /checkout, /privacy, /cancellation before change): `privacy.html` + `dist/privacy.html` replaced. Cloudflare Pages production deployment `5205c5b4-f72a-4099-8460-1ae98772f963` (direct upload, 444 files, 3 new hashes). Live https://longevitylifeacademy.pages.dev/privacy bytes == dist; /, /checkout, /cancellation unchanged bytes; 258 referenced assets incl. HLS film all 200. Rollback: POST `/accounts/55eb74f4002b7237e393bd6980a1676a/pages/projects/longevitylifeacademy/deployments/9b2b07d7-a8c5-4ff6-8813-bf2a9f4a143b/rollback`.
- Screenshots 1440 + 390 for all three pages: no horizontal overflow, 21 sections, ends at "21. Contact Us". No CRM/tracking/checkout code touched.

## 2026-09-27 approximately 16:35–16:38 IDT: Julie authorized real pre-payment checks passed

- User explicitly requested a real test up to payment, without payment. No source/config/deployment/automation/ads changes. Browser used actual website and providers; no intercepted/mocked responses.
- Standard CRM test order8035288/student11655929, campaign118149/adGroupID108814; VIP order8035290/student11655930, campaign118149/adGroupID108817. Real CRM returned identities, query parameters and Longevity Masterclass checkout amounts49/79USD; real Airwallex card/wallet forms rendered. VIP PayPal iframe also rendered. No charge and no Purchase event.
- Production CAPI accepted PV/VC/ATC/IC. ATC/IC browser IDs match server IDs: julie_atc_8035288, julie_ic_8035288, julie_atc_8035290, julie_ic_8035290. CAPI oktrue/meta_status200/events_received1. Meta trace IDs: AQ1M2m3QhnfLrtd5W4sLKvm, A3Bi96NPERhZicDbJilOYgM, A-RoDw0kUZDfAxAbC_47nbz, AFt-sB7F_Brkj7PIBSZOZDa.
- Actual AC relay NoPayment stage accepted for Regular/VIP, ac_status200, sessionDate2026-10-27. VIP name/course stages also individually captured accepted. This proves API acceptance, not sales-agent queue assignment or automation execution.
- TEST RECORDS, NOT CUSTOMER RESULTS: names LLA Launch Test / LLA VIP Test; utm_source manual_qa, medium launch_check, campaign julie_pre_payment_20260927 / julie_pre_payment_vip_20260927. Exclude these orders/events from business metrics. Direct visits, no fakefbclid; fbcabsent expected. Campaign/adset parameters carried are not paid Meta attribution proof.
- Independent ActiveCampaign read connector remains TypeError Invalid URL. Purchase/ROAS/actual Meta dedup and assigned sales queue remain beyond no-payment proof.
- Screenshots1440desktop/390mobile-emulation and receipts recorded in Julie masterclass tracking release status. No actual iPhone/wallet transaction. Existing tracking release03e8a91/helper julie-meta-20260927-2 and relaydpl_5SuufwCXfp7DFafmSRbs7SN7giiC unchanged; later other-tab website revisions preserved.
- Rollback not applicable: no code/config change. Do not delete test records or alter automations without authorization; identify/exclude them using IDs above.


## 2026-09-27: Julie tracking-only repair candidate, NOT production

- Repository: Longevity-Academy/julie-masterclass.
- Candidate commit: 6b1746ab79019b1b5e7663833e44a93c98a28db2; branch fix/julie-attribution-20260927.
- Baseline/main: eeed4057fff9d5a8211652905f25678841d76fad (v9.7 latest single-scrollbar checkout fix).
- Scope: index.html tracking-only attribution and read-only checkout response observers; assets/julie-attribution.js new; assets/julie-meta-tracking.js release julie-meta-20260927-3.
- Repairs: Julie-owned attribution storage; full cid/adGroupID/UTM/cq handoff; no inherited Google fallback; valid first-seen fbc persistence; order-bound CRM email matching; full surnames. No repeated Pixel init.
- Preserved: visible HTML/CSS, forms, payment validation/callbacks, card/Google Pay/Apple Pay/PayPal configuration, AC stages/triggers, approved 139.05-second videos, latest Mac/desktop scroll code. No Blueprint, Vercel relay, Cloudflare, or Meta writes.
- Tests: 16/16 attribution/protected checks, 31/31 helper tests, 24/24 intercepted full browser scenarios, 6/6 intercepted CRM-link scenarios, desktop/390px parity. Mock purchases are NOT sales or paid-attribution proof.
- Preview: https://www.perplexity.ai/computer/a/julie-tracking-repair-protecte-I32MNfFVRyqZLH8RLw5bxg . Review copy blocks writes and uses temporary memory; not a live checkout.
- Diff: https://github.com/Longevity-Academy/julie-masterclass/compare/eeed4057fff9d5a8211652905f25678841d76fad...6b1746ab79019b1b5e7663833e44a93c98a28db2 .
- Production NOT promoted. Live Meta dedup/paid attribution/ROAS, sales queue execution, physical Safari/wallet charges and webhook durability remain unverified/unresolved. Do not call this a full launch sign-off.
- Rollback after any approved promotion: revert ONLY 6b1746ab79019b1b5e7663833e44a93c98a28db2, preserving newer approved changes. Backup: backup/20260927-1708-tracking.


## 2026-09-27: APPROVED Julie tracking candidate promoted and production verified

- This supersedes the earlier “NOT production” candidate status for commit 6b1746ab79019b1b5e7663833e44a93c98a28db2.
- User explicitly approved exact tracking-only promotion at 17:45 IDT.
- Repository: Longevity-Academy/julie-masterclass. Main was still eeed4057fff9d5a8211652905f25678841d76fad before the fast-forward; no other approved work overwritten.
- LIVE commit: 6b1746ab79019b1b5e7663833e44a93c98a28db2. Helper julie-meta-20260927-3; attribution module julie-attribution-20260927-1.
- Deployment succeeded: https://github.com/Longevity-Academy/julie-masterclass/actions/runs/36327100925 (built 2026-09-27T14:46:44Z).
- Production https://www.longevitylifeacademy.com/julie-masterclass/ returns HTTP 200. Index + helper + attribution module exactly byte-match approved files.
- Post-deploy tests: 24/24 checkout and 6/6 CRM-link cases using real production assets with external writes intercepted; NOT real charges/Meta attribution proof.
- Production desktop/390px: no page errors/horizontal overflow, forms open, hero autoplay and “Watch with sound” playback verified. Full player 1080p desktop/720p mobile, duration139.050667 seconds.
- Normal ecommerce https://longevitylifeacademy.pages.dev/ unchanged; pre/post HTML SHA256 70f2aa82fc10bd1dfc6897befb2af0dcd5f52bcd5cf071a696e427a69233906b.
- No Vercel relay, Cloudflare, Meta campaign/ad-set/rule, AC trigger/automation, video, CSS or payment-method changes.
- Remaining unverified/unresolved: actual Meta receipt/dedup/paid ad-set attribution/ROAS for this release, CRM sales-queue execution, physical Safari/wallet charges, durable webhook purchase recovery. Do not describe these mocked tests as sales.
- Preserve this code in other tabs. Rollback, if needed: revert ONLY 6b1746ab79019b1b5e7663833e44a93c98a28db2; backup branch backup/20260927-1708-tracking. Do not overwrite v9.7 Mac/desktop checkout fix or later approved work.

## 2026-09-27 | Julie banner review revision 02 (not approved for Meta)

- Repository: `gitteromri-ux/lla-meta-ig-ad-sizes`
- Branch: `review/masterclass-readable-20260927`
- Commit: `75d2f5d9d8cdd3d1d675d6e905304edeae8dcca8`
- User rejected first revision for generic flyer composition and missing real Playfair Display italic. Revision 02 restores the exact italic font, stronger presenter-led layouts, larger price and original-style dimensional blue card.
- Three concepts: Zoom, standing Julie portrait converted from Blueprint to masterclass, and 7C-style masterclass card. 27 rendered PNG exports and phone-size proof sheets on review branch.
- Original production banner generators, default branch, existing Meta ads, ad sets, campaign settings, pixels, website functionality, payments and ActiveCampaign remain unchanged.
- Status: review screenshots shared; user approval still pending. Do not upload these replacements to Meta without approval.
- Preview: https://www.perplexity.ai/computer/a/julie-masterclass-banner-revie-oe9n6lIESCWNtFZ4S9BGTA
- Source: https://github.com/gitteromri-ux/lla-meta-ig-ad-sizes/tree/review/masterclass-readable-20260927
- Review-only rollback: prior revision `cf31a2861f27e9275a011729001d90aecbfc2702` (rejected; preserve history, do not publish). No production rollback necessary because production was not changed.

## 2026-09-27 | Julie banner brand revision 03 | APPROVAL PENDING

- Repo: gitteromri-ux/lla-meta-ig-ad-sizes.
- Review branch: review/masterclass-readable-20260927. Commit: b4e4cde.
- Revisions 01 and 02 rejected by user. Revision 03 rebuilds the three original concepts with only original Playfair Display, Playfair Display Italic and Inter files.
- 27 PNG exports in brand-v3-exports. All sizes rendered and visually inspected; zero automated missing-image, text-overflow or named-block-overlap failures.
- Review gallery checked at desktop 1440px and mobile 390px. All five format selectors verified.
- No existing Meta ad, campaign setting, production website, form, payment flow, CRM, AC or tracking changed.
- Source: masterclass-brand-v3.html/css. Review evidence: BRAND-V3-REVIEW.md and brand-v3-exports/proof.json.
- User approval required before any Meta upload. Rollback: withdraw review candidate; original generators and production ads remain untouched.

## 2026-09-27 | Julie banner copy/color revision 04 | APPROVAL PENDING

- Repo: gitteromri-ux/lla-meta-ig-ad-sizes. Review branch: review/masterclass-readable-20260927. Commit: 83dbffe.
- User requested two stronger authority-led headline directions, LLA Exclusive, Limited Seats, larger lighter brand lettering and gold/light-blue/white variants.
- Implemented both headlines across all three concepts and three colors. 162 PNG exports in brand-v4-exports; zero automated image/overflow/named-block-overlap failures.
- All placement compositions and 18 Feed variants visually inspected. Review gallery verified at 1440px desktop and 390px mobile; all 30 copy/color/format control combinations passed.
- Exact original Playfair Display regular, Playfair Display Italic and Inter files only. $49 starting price only.
- Updated existing private review preview; no Meta upload, no production website or tracking/checkout/CRM changes.
- Claim boundary: world-ranking language is user-requested campaign wording consistent with the masterclass page, not independently verified current ranking. Zoom image is original illustrative artwork.
- Source: masterclass-brand-v4.html/css. Proof: brand-v4-exports/proof.json and review-checks.json.
- Rollback: withdraw review candidate. Original production banners and ads remain unchanged.

## 2026-09-27 | Julie layout proof 05 | APPROVAL PENDING

- Repo: gitteromri-ux/lla-meta-ig-ad-sizes, review/masterclass-readable-20260927, commit 372f064.
- Removed the exclusivity line at user's request. Replaced oversized decorative Playfair $49 with compact Inter price; reworked headline hierarchy and aligned price/CTA/date footer.
- 18 Feed proofs only: three concepts, two headline directions, gold/blue/white. Further placement export work held for layout approval to avoid another long batch.
- All 18 pass image/overflow/named-block-overlap checks. Gallery checked at desktop and 390px mobile; all six copy/color combinations load.
- Updated private review preview; no Meta upload or production website/checkout/CRM/tracking changes.
- Rollback: discard review candidate; production remains untouched.

## 2026-09-27 | Julie editorial rebuild 06 | APPROVAL PENDING

- Repo: gitteromri-ux/lla-meta-ig-ad-sizes, review/masterclass-readable-20260927, commit 568a497.
- User rejected revision 05. Rebuilt from blank stylesheet with no inherited prior banner CSS: one dominant promise/title, presenter-led imagery, compact price and unified enrollment strip.
- Original font files and imagery preserved. Exclusivity line remains removed. Blue portrait uses full-height editorial material plane, not old rounded floating panel.
- Three concepts in gold, blue and white: nine Feed proofs only. More placement sizes held for approval.
- Rendered and checked all nine for font/image loads and text-block overflow/intersection. Gallery inspected at 1440px desktop and 390px mobile. Three color selectors tested.
- Updated private review preview and shared three blue full-size proofs. No Meta upload or production websites/payments/forms/CRM/tracking changes.
- Source: masterclass-editorial-v6.html/css. Notes: EDITORIAL-V6-REVIEW.md. Rollback: withdraw review candidate; existing production remains unchanged.

## 2026-09-27 | Julie full-width proofs 07 | Approval pending

- Repo: gitteromri-ux/lla-meta-ig-ad-sizes. Review branch: review/masterclass-readable-20260927. Commit: ecd462e.
- User rejected narrow left-column compositions and forbade all-capital words. Replaced them with full-width headline lines, full-width imagery and centered three-line event/enrollment copy.
- Removed arrows, isolated price strips and left-half text panels. Original font files only; compact $49. Exclusivity remains removed.
- Nine Feed proofs: three original image concepts in gold, light blue and white.
- All nine passed image/font loading, text overflow, main-block overlap and uppercase-word checks. Gallery color controls tested; 1440px desktop and 390px mobile screenshots inspected.
- Updated private review preview; three blue proofs shared. No Meta upload, existing ad changes or production website/checkout/CRM/tracking changes.
- Other placement sizes await design approval. Rollback: withdraw review candidate; production remains unchanged.

## 2026-09-27 · Julie banner review 08

- Enlarged single-line subheaders most, then presenter, duration, dates, pricing line and button text. Main headlines and original logo remain unchanged.
- Restored a structured blue information panel inspired by the supplied originals. Uses existing Playfair Display, Playfair Display Italic and Inter only.
- Nine 1080 × 1350 Feed drafts: three concepts in light blue, gold and white. Three light-blue proofs shared for approval.
- Review branch commit: `4cba3e9`, repository `gitteromri-ux/lla-meta-ig-ad-sizes`, branch `review/masterclass-readable-20260927`.
- Render checks found no text overlap, overflow or new all-capital copy. Desktop and mobile review gallery checked, all three color controls work.
- No Meta upload, existing-ad change, production website change, checkout change or tracking change. Other placement sizes await layout approval.
- Next: user approval of revised banner layout before placement exports and any authorized upload.

## 2026-09-27 · Julie banner review 09

- Removed the top logo from three review creatives. Enlarged subheaders using actual Playfair Display and Playfair Display Italic, with light-blue or gold emphasis; white-headline variants retain blue subheader emphasis.
- Added 72px space between Zoom subheader block and image. Added cyan edge lighting and separated presenter, event dates and enrollment rows in the bottom frame.
- Nine Feed proofs rendered with original assets; no detected text overflow. Three screenshots shared immediately. Review gallery inspected at desktop and 390px mobile.
- Source commit `9485a7a` on `review/masterclass-readable-20260927`, repository `gitteromri-ux/lla-meta-ig-ad-sizes`. Prior proof commit `4cba3e9` remains available.
- No Meta upload, ad edit, activation, tracking, checkout, website-production or CRM change. Current ad-set inventory being checked read-only in parallel for user selection.
- Next: user selects banners and destination ad sets. No launch sign-off inferred from creative rendering.

## 2026-09-27 · Consolidated banner and ad-set approval board

- Replaced fragmented review with one private board in `julie-banner-readable-preview`: revised choices, current Meta inventory, and prior rejected/superseded proofs.
- Fifteen selectable revised creative/size options; thirteen existing Meta ads grouped across six ad sets from the read-only 21:21 IDT snapshot. Existing Meta artwork and revised proofs are explicitly separated.
- Added per-creative destination-set selection, enlarge view, copy/download selection summary. Selections are in memory only; user must copy/download before reload. No direct publishing or activation action exists.
- Further refined original 7B/7C source: requested “The world’s 2nd slowest ager reveals her protocol” subheader, no bullet dots, compact full-width event rows, only $49, no VIP/$79. Commit `092e85e` on `review/masterclass-readable-20260927` in `gitteromri-ux/lla-meta-ig-ad-sizes`; prior source `7ba1c2b` retained.
- Six card exports report fit=true/no $79/no VIP. Unified board tested at 1440px and 390px: selection summary, thirteen Meta cards, image zoom and no horizontal overflow, with no page errors.
- No Meta change, upload or activation. No checkout, tracking, production site or CRM change. Creative approval is not payment or tracking sign-off.


## 2026-09-28 Blueprint attribution candidate, not production

Repo: gitteromri-ux/lla-course-checkout. Branch fix/blueprint-attribution-20260928, SHA c3c0147da351eb8c224028e48a1e122a957ecabd. One commerce helper changed to retain same-touch campaign/ad-set/click data and restore missing CRM QueryString values. Actual preview b3d7e1cd-4d4d-425c-afe1-5e853f761355 reactivates byte-identical existing click-cookie worker; baseline production 5205c5b4-f72a-4099-8460-1ae98772f963 reports uses_functions=false. Fourteen offline checks plus 390/1440 preview checks pass; not customer attribution or CRM queue proof. Production unchanged pending exact promotion approval. Rollback target production 5205c5b4-f72a-4099-8460-1ae98772f963; code backup/20260928-attribution-before at 734f476a5c981e880887a158d775c3d4424b1a47. Do not pause campaigns or change Julie/payments/AC.


## 2026-09-28 01:47 IDT Blueprint limited tracking release approved and live

Production Cloudflare deployment 9ddfcf0c-9231-4659-aa5d-3f661d7b6b59 successful, uses_functions=true. Code c3c0147da351eb8c224028e48a1e122a957ecabd. Exactly one of 444 asset hashes changed (dist/assets/eteacher-ecomm.js); home/checkout HTML unchanged. Existing click-cookie worker reactivated, source unchanged. Production Set-Cookie verified; 390/1440 return-visit QA passed with writes/Meta blocked. Rollback 5205c5b4-f72a-4099-8460-1ae98772f963. Campaigns remain running; no Meta/AC/Julie/payment changes. Original end-to-end attribution/CRM queue task is NOT COMPLETE; this release is not proof of buyer attribution or queue assignment.


## 2026-09-28 02:21 IDT approval: Blueprint receipt logging only

User approved receipt logging on existing Vercel lla-ac-events. Production deployment dpl_DQogoRsNj1XXTpJQmFrRk9zzCCrU promoted successfully; aliases API confirms lla-ac-events.vercel.app assigned. Rollback dpl_5SuufwCXfp7DFafmSRbs7SN7giiC. Only lib/blueprint-golden-capi.js logging calls and new lib/blueprint-receipt.js changed. AC, Julie, dispatch router, click-id and package hashes exactly match prior deployed source. 25 local tests: forwarded requests and client responses identical to baseline, no sensitive raw data in logs. Live GET405, OPTIONS204, Julie QA exclusion200, invalid event400; declared Test Events ATC returned Meta200/events_received1 (event receipt_diagnostic_1790551385037, repeated with SAME id for log checks). Runtime log stream returned zero entries, so receipt retrieval remains UNVERIFIED. No customer attribution, sales-queue arrival or complete fix claimed. Website, Meta campaigns/budgets, forms, payments and AC triggers unchanged. Archived exact relay source at https://github.com/gitteromri-ux/lla-course-checkout/commit/bc5d3ddd9f7db8b048f20663327d7605225b0ae1. Do not repeat synthetic receipts as customer-attribution proof.


## 2026-09-28 12:55 IDT Israel Ziv cover: 10 split-screen background directions (review only)

Repo: gitteromri-ux/ziv-book-cover-directions (new, PRIVATE), main, SHA 22bb54c834b050af859891714f71c92e07395ed9. Ten GPT Image 2.5 split-screen backgrounds (left: one iconic 7.10 object — migunit, Tkuma car lot, mamad door, burnt sukkah, Re'im grove, breached fence, 06:29 clock, child's bicycle, kibbutz aerial, burnt orchard; right: same object risen). Title/subtitle/author copied verbatim from the approved reference (includes reference spelling "ד"ח המתקירה" — flagged to user, one TEXT constant in cover.html). Real IDF Aluf insignia (Wikimedia Commons IDF_aluf_gold.svg, CC BY-SA) placed above author name. Gallery + lightbox + PNG 2000×3000 downloads; private Perplexity preview deployed and verified HTTP 200 (index, cover PNG, fonts, insignia); desktop 1440 + mobile 390 checked, no console errors. Public repo/GitHub Pages NOT enabled pending explicit approval. No direction approved yet. Rollback: delete repo or revert to c09501bf732674a90dab26d70f2dc31611d623a5.

## 2026-09-28 13:20 IDT Israel Ziv cover v2 — concepts replaced after user rejection

User rejected v1 (generic before/after objects, not recognisably 7.10). Replaced all ten backgrounds with icon-first concepts: Kfar Aza kites vs descending paragliders, "standing in the breach" human line in the fence gap, Nova field vs hora circle (aerial), Route 232 burnt cars vs anemones (road = seam), Re'im migunit as lantern, cranes raising red roofs, mamad door handle opening onto anemones, harvest with volunteers, burnt vs raised sunflowers, inspection spray-mark vs children's handprints. Repo gitteromri-ux/ziv-book-cover-directions (private) SHA 4fe1dae770bc76a77b04803dc64df6291ba14c7b; v1 remains in history at 22bb54c. Private preview redeployed, HTTP 200 verified. Text and rank insignia unchanged. No direction approved yet.

## 2026-09-28 13:35 IDT Israel Ziv cover v3 — "one form, two readings"

User rejected v2 as not iconic/coherent. v3 replaces all ten with concepts built on a single shared form across the seam: same red (Color Red alert / Darom Adom anemones), same road 232 opposite directions, chain-link → linked hands, one sun on the seam (setting/rising), house reflection showing the rebuilt future, Nova shoes empty → dancing, same grip (mamad handle → pulling someone up), Kfar Aza kites vs descending canopies, Nova shade-sail → chuppah on the same four poles, surveillance screens → lit windows. Repo gitteromri-ux/ziv-book-cover-directions (private), SHA recorded above in git; v1/v2 remain in history. Text and Aluf insignia unchanged. Private preview redeployed. No direction approved yet.

## 2026-09-28 15:45 IDT Julie masterclass tracking — GOLDEN STATE recorded, 4-week FREEZE (until 2026-10-26)

VERIFIED first real attributed customer purchase: Potter Eric (USA, $79 Regular, Airwallex, CRM 11:05:01) appears in Meta on ad set ecomm_Adset_01_All_All_CPM_#108813 (52668330533628): purchase 1 / $79, ATC 1, IC 1, custom conversion 1426010666308623 = 1. Pixel 1440305917310328 received 3 raw Purchase events in the 11:00 IDT hour, deduplicated to 1. Snapshot of every component (Meta campaign/ad sets/ads/url_tags/custom conversions/pixel, site repo 42726fcd + protected file SHA-1s, relay production dpl_DQogoRsNj1XXTpJQmFrRk9zzCCrU + byte-exact source) in projects/julie-tracking-freeze/. Guard script verify_julie_tracking.py: 52/52 PASS. Site repo tagged tracking-golden-20260928. Rule stored in memory + omri-operator-os skill: nothing on the frozen list changes until 2026-10-26 without the literal sentence "I lift the Julie tracking freeze for <item>" and a guard run before/after. Nothing live was changed in this entry. Earlier today: TEMP click-log relay patch was NEVER deployed (Vercel connection lacks deploy permission); test ad sets 52668961777228 / 52668956239228 remain PAUSED; stray Vercel project 'src' created by a failed CLI link was removed.

## 2026-09-28 15:58 IDT GOLDEN CAPI parity — Blueprint campaign (LGV_EN_PPC_ecomm-01 #118148, 52663511211628)

User ordered the Julie golden setup applied to Blueprint ad sets 2/4/5 + pages.dev. Meta changes made (user-approved in chat): (1) NEW ad set 52669013718628 "ecomm Adset 2 … | 7d-click 1d-view (GOLDEN CAPI)" = exact copy of ad set 2 (52663512093428) targeting/budget $160/day/optimization, attribution changed from 1-day click to 7-day click + 1-day view (not editable in place). Status PAUSED. One ad recreated inside it: 52669014002428 (Ad#12 video, creative 2451889585302174, PENDING_REVIEW). The 4 other ads (creatives 1700554797713979, 2107464206506356, 1770358404156994, 1696770474717119) could NOT be recreated by API: their Page 1036363559571443 gives the connected user no Advertiser role ("No Advertiser Permission On Page"). Old ad set 2 left ACTIVE until the user duplicates those 4 ads into 52669013718628. (2) Custom conversions created on pixel 1440305917310328: LLA Blueprint (pages.dev) | Purchase 1786158289389247, | InitiateCheckout 1434992078766510, | AddToCart 1125972029763023 (rule: event + url contains longevitylifeacademy.pages.dev). Ad sets 4 (52666232368428) and 5 (52666296222628) already match Julie attribution (7dc+1dv+EVV) and promoted object; untouched. Site (pages.dev) and relay NOT changed: site rebuild to the Julie isolated-helper pattern requires branch → preview → approval per GOLDEN CAPI. Rollback: pause/delete 52669013718628; archive the 3 custom conversions.
