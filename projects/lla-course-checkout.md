# LLA Course Checkout

## 🕰️ Started: **Jul 29, 2026**
## 🟢 Last interaction: **Aug 28, 2026** (4 days ago)

---

## One-line purpose

LLA Course Checkout is the separate `gitteromri-ux/lla-course-checkout` sales-funnel and self-service enrollment surface for The Longevity Blueprint.

## Status / where we left off

- **Knowledge-page updated:** 2026-08-28T10:06:00+00:00
- **Source file:** `memory/knowledge/projects/lla-course-checkout.md`
- **Last recorded state details:**
  - **Single-field ActiveCampaign event model** — `/api/ac/event` writes checkout status only to Sandra's `LGV_checkout_events` field, without adding lists, tags, or extra custom-field writes.

## All public links & deliverables

### GitHub commits

- <https://github.com/gitteromri-ux/lla-course-checkout/commit/5330fdc>
- <https://github.com/gitteromri-ux/lla-course-checkout/commit/3a93fd0>
- <https://github.com/gitteromri-ux/lla-course-checkout/commit/00f3bf9f>
- <https://github.com/gitteromri-ux/lla-course-checkout/commit/940ba8cf>
- <https://github.com/gitteromri-ux/lla-course-checkout/commit/57a7a33a>
- <https://github.com/gitteromri-ux/lla-course-checkout/commit/96fb0b5d>
- <https://github.com/Longevity-Academy/Longevity-Academy.github.io/commit/a834bb2>
- <https://github.com/gitteromri-ux/lla-course-checkout/commit/7dc419a>

### GitHub repositories

- <https://github.com/gitteromri-ux/lla-course-checkout>

### Session records (context only; may require the Perplexity account)

- <pplx://sessions/56e0e9b9-031a-489a-955a-1a9b55edb2ea>
- <pplx://sessions/483a9ca7-c8d5-402e-ac2f-322cf3b046db>
- <pplx://sessions/533d0277-9127-4d2b-a04b-eda8e4279674>

## Assets & where they are stored

### Repositories / code / static asset hubs

- `gitteromri-ux/lla-course-checkout` (GitHub; exact repository references also appear in the links section)
- `Longevity-Academy/Longevity-Academy.github.io` (GitHub; exact repository references also appear in the links section)

## Rules & preferences for this project

The following source notes are retained in full because they contain the project’s decisions, rules, creative direction, delivery constraints, and known technical guardrails.

- The project separates offer presentation and a three-step checkout flow from the production Longevity Life Academy marketing site. Its user-facing Cloudflare Pages surface is `longevitylifeacademy.pages.dev`, while eTeacher lead handling remains behind the `eteacher-leads-proxy` Worker.
- **Rosen-pattern checkout** — the flow was rebuilt around the Rosen School of Hebrew three-step checkout structure while retaining LLA-specific content and offer framing.
- **Sales page and transaction flow together** — the repo combines the course landing page, pricing/CTA path, and self-service checkout so funnel changes can be tested as one surface.
- **No CRM write on page visit** — automatic order creation was removed from the page-load path after it caused visits to write orders into CRM. CRM and Airwallex actions should occur only at their intended checkout stages.
- **Airwallex Drop-In payment path** — the checkout uses Airwallex Drop-In, with the Pages migration requiring the production origin to be allow-listed by the lead proxy without changing payment or CRM behavior.
- **AddToCart at the enrollment boundary** — the enrollment Continue action emits a data-layer event and direct Meta `AddToCart` call using the $279 monthly value, while the site retains GTM container `GTM-PMRKXXJV`.
- **Compact floating CTA** — the checkout uses a small floating “Enroll Now / The Longevity Blueprint / $279/MO” control modeled on the production LLA site rather than a full-width sticky bar.
- **Cohort alignment remains load-bearing** — `PreferredCourseId 168663` is associated with an October 2026 cohort, while the founder landing pages were set to an August 17 start; the production course ID and campaign dates must match before checkout is treated as aligned.
- **Single-field ActiveCampaign event model** — `/api/ac/event` writes checkout status only to Sandra's `LGV_checkout_events` field, without adding lists, tags, or extra custom-field writes.

## Key people / stakeholders mentioned

- Rosen
- Longevity Life Academy

## Open questions / next steps

- No explicit open question or next step was recorded in the project page.

## Access notes

- GitHub links can be viewed publicly when the repository is public; editing, pushing code, changing Pages settings, or viewing private repositories requires GitHub access with the appropriate repository permission.
- The listed `pplx://` references are internal context links and may require access to the relevant Perplexity account/session.

## Source coverage

- Created from the complete local source page: `memory/knowledge/projects/lla-course-checkout.md`.
- URLs preserved from source: **12** unique URL(s).

## TRACKING TRUTH TABLE — read this before ANY tracking work (written 2026-09-26 22:40 IDT, all VERIFIED from Meta API / repo / live replay)

Do NOT redo these. They are settled. Start from "Still open" below.

### Settled facts
- Landing for all Ad Set 2 (#108808, 52663512093428) and Ad Set 4 (#108810, 52666232368428) ads: https://longevitylifeacademy.pages.dev/ with url_tags cid=118148&adGroupID=1088xx (identical except adGroupID). Pixel/dataset 1440305917310328. Account 1459085242361281, campaign 52663511211628.
- Production = Cloudflare Pages project `longevitylifeacademy`, deployment 3cc41778 (2026-09-26 12:49 IDT); previous 7a37f7ca. Deploy credential that works: "LLA Funnel Deploy (Cloudflare)". Pipedream Cloudflare connector = Invalid X-Auth-Key, never use.
- Vercel relay https://lla-ac-events.vercel.app/api/meta/capi (project ac-events prj_3v7g4Xwve6OmXrcPCVQOWJOiN2SK) is NOT visible to connected Vercel team gitter1. Do not retry. Server receipts/logs are unreachable until that project is shared.
- Live code path (dist/index.html + assets/lla-relay-receipts.js + lla-clickid-v20260922.js + _worker.js): PageView/ATC/IC fire fbq + relay with shared event_id; relay POST delayed 1.5 s or on pagehide (keepalive); fbc = _fbc cookie → lla_fbc_v1 → URL fbclid; worker re-issues _fbc/_fbp 90 d. IC fires after CRM staging (eteacher-leads-proxy /api/lead/ecomm) returns or after 7 s fallback, then navigates to /checkout with fbclid preserved.
- Live replay 2026-09-26 (Chromium, iPhone FB in-app UA, fbclid, all outbound requests intercepted): ATC and IC emitted on both browser and relay paths with click ID. CRM staging did not answer within 7 s (fallback fired). Replay identifiers to exclude if ever seen: fbclid …REPLAYPROBE20260926NOTANAD, email replay.probe.20260926@outlook.com.
- Synthetic replays PROVE NOTHING about attribution. Three sessions ran them; stop running them.
- Meta pixel-wide: Sep 19 = total funnel blackout (0 ATC/IC/Purchase on 2110 PV). Sep 20–24 = test-flooded (LLA2_* counters, test ATC/IC in the hundreds) — never quote numbers from those days. Server ATC/IC copies are 2–4x browser copies every day incl. golden days → an unidentified second server sender exists (candidate: eTeacher CRM's own CAPI on ProductID 26). Not proven.
- Ad Set 2 attribution_spec = 1d click only (updated 2026-09-25 04:37Z). Ad Sets 4/5 = 7d click + 1d view + engaged view. User does not want this discussed or changed.
- Ad Set 2 daily (1d_click): Sep 24 ATC 1, Sep 25 ATC 4 (100 clicks, $178), Sep 26 ATC 0 (38 clicks, $103 by 20:19 IDT). IC and Purchase attributed to Ad Set 2 = 0 every day since Sep 13. No click-attributed IC on ANY ad set since Sep 18.
- Sep 19–26 device/placement split (proof-20260926/bd_*.json): Ad Set 2 iPhone 1517 clicks → 1982 LPV → 5 click-ATC; Android 405 clicks → 0 ATC; facebook/feed 1884 clicks → 1 ATC; instagram/feed 12 clicks → 3 ATC. Ad Set 4 same page, same code: iPhone 76 clicks → 7 click-ATC. Same pixel/code yields click-attributed ATC for Ad Set 4 at ~30x the rate; therefore the site tracking code is NOT the differentiator between the two ad sets.

### Still open (the only work left)
1. Vercel ac-events project access → read real relay outcome logs for Ad Set 2 visitors (fbc present? Meta events_received? dedup?).
2. Identify the second server-side ATC/IC sender (ask eTeacher if CRM fires CAPI on pixel 1440305917310328).
3. US step-1 form: state select required; area-code autofill did not populate in replay. Check with a real phone whether buyers are blocked by "Please select your U.S. state".
4. Real paid Purchase end-to-end (buyer-linked settled payment + Events Manager receipt + Ads Manager credit). Never claim without all three.

### Never again
- No "all fixed" without Ads Manager-level non-test proof. No numbers from Sep 20–24. No test events to the live pixel. No campaign/budget/attribution changes. No Julie masterclass (www.longevitylifeacademy.com) touches from this repo.
