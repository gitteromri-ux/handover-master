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
