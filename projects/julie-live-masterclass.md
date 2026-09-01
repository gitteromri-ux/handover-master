# Julie Gibson Clark Live Masterclass

## 🕰️ Started: **Aug 18, 2026**
## 🟢 Last interaction: **Aug 27, 2026** (5 days ago)

---

## One-line purpose

Julie Gibson Clark Live Masterclass is LLA's public landing experience for a live protocol-focused event.

## Status / where we left off

- **Knowledge-page updated:** 2026-08-27T10:00:00+00:00
- **Source file:** `memory/knowledge/projects/julie-live-masterclass.md`
- **Last recorded state details:**
  - Julie Gibson Clark Live Masterclass is a Longevity Life Academy landing and self-service enrollment experience for a live protocol-focused event led by founding faculty member Julie Gibson Clark. It is published from public personal and organization repositories and served at `www.longevitylifeacademy.com/julie-masterclass/`.
  - The page turns Julie's longevity authority into a direct-response event proposition and a three-step purchase path through a cinematic hero, ranking and press proof, a full-length promotional film, protocol outcomes, live-room visualization, curriculum/value reveals, and checkout.
  - **Reference absorbed, not copied** — MasterClass supplied the broadcast-scale and luxury benchmark, while typography, color, proof assets, and interaction were required to remain recognizably LLA rather than imitate the reference site's house style.
  - **Public mirrored delivery** — the working source is public at `gitteromri-ux/lla-julie-masterclass` and mirrored to `Longevity-Academy/julie-masterclass`, with both repositories carrying the same live experience.
  - **Video geometry is a release gate** — Julie's footage must open on a useful frame, remain prominent in the first viewport, and avoid dead-black loading states. Desktop and mobile must both be checked on the live domain before handoff.
  - **Live-room realism makes the offer tangible** — the live-session fold uses both gallery and speaker views with Julie as host and adults aged roughly 40–55; synthetic-looking participants or generic meeting imagery fail acceptance.

## All public links & deliverables

### GitHub Actions / deployment runs

- <https://github.com/Longevity-Academy/julie-masterclass/actions/runs/32303664892>

### GitHub commits

- <https://github.com/gitteromri-ux/lla-julie-masterclass/commit/94acf8d564b6360d9a9506e7afcb0fc0f230bbc9>
- <https://github.com/Longevity-Academy/julie-masterclass/commit/ed4d4b7a2a68a49b97fcd49b364c67eaec12a926>
- <https://github.com/Longevity-Academy/julie-masterclass/commit/464cbb94bc780f4457ae69e0ae0ea1a7df2876a9>
- <https://github.com/Longevity-Academy/julie-masterclass/commit/a3a7434d18971f54f719f0f6aff5088a4d946b44>
- <https://github.com/Longevity-Academy/julie-masterclass/commit/5404509ace1bd86fba9271dc044cdb8ce5251649>
- <https://github.com/Longevity-Academy/julie-masterclass/commit/1b8ea24>

### Session records (context only; may require the Perplexity account)

- <pplx://sessions/d8f968ed-cebf-4527-8a85-5e5c20691fd5>
- <pplx://sessions/8a4852a5-7bf4-40ea-bd4b-405611a29340>
- <pplx://sessions/0add0f07-9fde-4365-85ef-515f2d9439a1>
- <pplx://sessions/40f5de66-36b4-4d8b-af5b-aa8d34e8b1f3>

## Assets & where they are stored

### Repositories / code / static asset hubs

- `gitteromri-ux/lla-julie-masterclass` (GitHub; exact repository references also appear in the links section)
- `Longevity-Academy/julie-masterclass` (GitHub; exact repository references also appear in the links section)

## Rules & preferences for this project

The following source notes are retained in full because they contain the project’s decisions, rules, creative direction, delivery constraints, and known technical guardrails.

- The page turns Julie's longevity authority into a direct-response event proposition and a three-step purchase path through a cinematic hero, ranking and press proof, a full-length promotional film, protocol outcomes, live-room visualization, curriculum/value reveals, and checkout.
- **Reference absorbed, not copied** — MasterClass supplied the broadcast-scale and luxury benchmark, while typography, color, proof assets, and interaction were required to remain recognizably LLA rather than imitate the reference site's house style.
- **Public mirrored delivery** — the working source is public at `gitteromri-ux/lla-julie-masterclass` and mirrored to `Longevity-Academy/julie-masterclass`, with both repositories carrying the same live experience.
- **Video geometry is a release gate** — Julie's footage must open on a useful frame, remain prominent in the first viewport, and avoid dead-black loading states. Desktop and mobile must both be checked on the live domain before handoff.
- **Authority must appear immediately** — the hero trust layer combines Julie's Rejuvenation Olympics ranking with recognizable press mastheads so the page establishes credibility before deeper curriculum and protocol content.
- **Mobile readability is a release gate** — body copy must stay large and scannable on mobile, with short passages and a clear headline for each fold rather than small run-on text.
- **Live-room realism makes the offer tangible** — the live-session fold uses both gallery and speaker views with Julie as host and adults aged roughly 40–55; synthetic-looking participants or generic meeting imagery fail acceptance.
- **Funnel logic determines the fold order** — the conversion path leads with a concrete hero promise and film, then enrollment and dates, real linked press proof, Julie's measured authority, LLA credibility, checkout, FAQ, and a final CTA. Redundant or context-free image bands are removed rather than retained as decorative folds.
- **Concrete longevity copy over buzzwords** — the page centers specific claims such as Julie's ranking, aging pace, event length, dates, and $79 single-payment price instead of dreamy or repetitive language.
- **Real proof, not inventory decoration** — press cards use real Julie imagery, mastheads, publication dates, headlines, and outbound article links; the LLA fold uses the official lockup and institutional scale proof rather than a generic school summary.
- **Premium mockups must preserve the screen content** — laptop and phone frames are large, straight, and clean, with Julie fully visible and no notches, chips, or UI overlays obscuring the screens.
- **Push completion is not deployment proof** — rapid consecutive pushes can make GitHub Pages deployment requests fail while an earlier deployment is still in progress. A live handoff must verify the production URL rather than infer freshness from a successful push.
- **The repositories move in lockstep** — the organization source and personal mirror receive the same direct-to-main revisions, with version 50 adding a 3D enrollment-card fan after version 49 rebuilt the first viewport around Julie's cut video and unique supporting imagery.
- **Asset provenance is strict** — Julie visuals must use approved real photos or frames from the live site, while synthetic faces, unrelated graphics, and off-brand imagery fail review even when the composition is otherwise polished.
- **Acceptance remains unresolved** — version 50 is deployed successfully, but later asset work still drew repeated brand and approved-image objections, so the experience has no recorded final visual or conversion approval.
- **Masterclass-specific checkout identity** — the live three-step checkout reuses LLA's established CRM and Airwallex path with MainAbroadCourseId 283, AbroadCourseId 1823, CampusId 4203, and LanguageId 101. Staging completed a $79 demo payment; production generated the same $79 intent without a real-card capture.
- **Approved ActiveCampaign field only** — checkout-abandonment states write through `LGV_checkout_events` field 206 without creating contacts, lists, or fields. A 403 read response meant restricted visibility, not deletion; the endpoint was revised and verified through the field-options and write paths.

## Key people / stakeholders mentioned

- Julie Gibson Clark
- Courtney
- Longevity Life Academy

## Open questions / next steps

- **Reference absorbed, not copied** — MasterClass supplied the broadcast-scale and luxury benchmark, while typography, color, proof assets, and interaction were required to remain recognizably LLA rather than imitate the reference site's house style.
- **Video geometry is a release gate** — Julie's footage must open on a useful frame, remain prominent in the first viewport, and avoid dead-black loading states. Desktop and mobile must both be checked on the live domain before handoff.
- **Acceptance remains unresolved** — version 50 is deployed successfully, but later asset work still drew repeated brand and approved-image objections, so the experience has no recorded final visual or conversion approval.

## Access notes

- GitHub links can be viewed publicly when the repository is public; editing, pushing code, changing Pages settings, or viewing private repositories requires GitHub access with the appropriate repository permission.
- The listed `pplx://` references are internal context links and may require access to the relevant Perplexity account/session.

## Source coverage

- Created from the complete local source page: `memory/knowledge/projects/julie-live-masterclass.md`.
- URLs preserved from source: **11** unique URL(s).
