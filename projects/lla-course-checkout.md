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
