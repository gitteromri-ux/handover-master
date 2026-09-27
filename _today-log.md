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
