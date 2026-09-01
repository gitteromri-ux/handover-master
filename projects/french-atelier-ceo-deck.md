# French Atelier CEO Deck

## One-line purpose

French Atelier CEO Deck is the CEO/board-facing marketing review deck hosted at `gitteromri-ux/french-atelier-ceo-deck`, with recent versions focused on video correctness, organic social mockups, platform slides, sound toggles, and mobile l...

## Status / where we left off

- **Knowledge-page updated:** 2026-07-15T09:34:00+00:00
- **Source file:** `memory/knowledge/projects/french-atelier-ceo-deck.md`
- **Last recorded state details:**
  - **Email-slide final sizing rule** — the latest deck fixes made email cards size to content, corrected banner aspect ratio from a stretched 1920/640 shape to the true 1920/502 source ratio, and reduced the email pair width from 1280px to 1088px.
  - **No-autoplay presentation mode** — the June 2026 deck recovery ended with click-to-play video behavior, clear posters/play badges, and sound off until a per-video toggle rather than scroll-triggered autoplay.
  - **Upload-ready organic video package** — the deck now gives every organic, paid-ad, and site-walkthrough video a Download button plus copy-caption/view controls, making the deck the approved posting surface rather than only a review artifact.

## All public links & deliverables

### GitHub commits

- <https://github.com/gitteromri-ux/french-atelier-ceo-deck/commit/4f137dc45b0e71fbbe09b6a179f76541392158b6>
- <https://github.com/gitteromri-ux/french-atelier-ceo-deck/commit/17ffbd56f8055a18819a32e5548156e5ab7de418>
- <https://github.com/gitteromri-ux/french-atelier-ceo-deck/commit/9188dc24f43e844ebd99bb7ebcf23e0f69112113>
- <https://github.com/gitteromri-ux/french-atelier-ceo-deck/commit/47bd8ef879fe711d079d10a8771ef2e6eab4b350>
- <https://github.com/gitteromri-ux/french-atelier-ceo-deck/commit/b3d115b29df32bbc1f28569d613d965ea1cbe541>
- <https://github.com/gitteromri-ux/french-atelier-ceo-deck/commit/b817d75a1dd8ebc07501166040698e0319743fd9>
- <https://github.com/gitteromri-ux/french-atelier-ceo-deck/commit/a79bd32446858b080c1dca961df558be3204d000>
- <https://github.com/gitteromri-ux/french-atelier-ceo-deck/commit/6c311f947d04ffb9668528deece67b7dea382f2f>
- <https://github.com/gitteromri-ux/french-atelier-ceo-deck/commit/5a281d6f7a455ab9fd53f5b03d79ea5cca445815>

### GitHub repositories

- <https://github.com/gitteromri-ux/french-atelier-ceo-deck>

### Session records (context only; may require the Perplexity account)

- <pplx://sessions/85b692df-72da-4431-a54f-95ee00def74b>
- <pplx://sessions/04a1afc3-a3e7-46e3-8100-c522ce7529ec>
- <pplx://sessions/82be4399-9e83-45b1-a02c-9aec9c8285cf>

## Assets & where they are stored

### Repositories / code / static asset hubs

- `gitteromri-ux/french-atelier-ceo-deck` (GitHub; exact repository references also appear in the links section)

## Rules & preferences for this project

The following source notes are retained in full because they contain the project’s decisions, rules, creative direction, delivery constraints, and known technical guardrails.

- The deck is a static HTML/CSS/JS presentation with versioned releases, Python build scripts, many MP4/WebM assets, sound-toggle JavaScript, and cache-busting version parameters.
- **Muted autoplay with explicit sound** — after a broken attempt to kill autoplay, the chosen behavior became videos playing muted for visual motion while audio only starts through a per-video toggle click.
- **Burned overlays carry meaning** — the organic French clips depend on visible FORMAL/SPOKEN bars, French Tourism frames, and homonym phrase overlays; v9.4–v9.6 restored and aligned those overlays and captions.
- **No duplicate-looking organic slides without evidence** — the user required no repetition of the same video within any slide; later checks used hashes and frames, but the session exposed that first-frame/hash evidence was not equivalent to watching full playback.
- **Board delivery cannot rely on unverified claims** — the user repeatedly asked whether the deck was safe to send to a board; the agent eventually admitted cross-device, full-duration lipsync, and all-video playback had not been verified.
- **Broken-state recovery returns to a known baseline** — the 2026-06-10 recovery path restored the v8.10 working baseline and then redeployed it to GitHub Pages rather than continuing to stack fixes on the broken build.
- **Reference structure outranks additive rebuilds** — after an attempted organic-video rebuild added extra slides, tiny video frames, and black boxes, the durable recovery rule is to preserve the approved deck structure and apply only verified fixes.
- **Version archive is part of recovery** — the repo holds a heavy archive of v1 through v8.10+ builds, with v8.10 restoring the Quora section from the earlier working v7.41 baseline and mobile fixes for platform grids/Bastille layering.
- **Email-slide final sizing rule** — the latest deck fixes made email cards size to content, corrected banner aspect ratio from a stretched 1920/640 shape to the true 1920/502 source ratio, and reduced the email pair width from 1280px to 1088px.
- **No-autoplay presentation mode** — the June 2026 deck recovery ended with click-to-play video behavior, clear posters/play badges, and sound off until a per-video toggle rather than scroll-triggered autoplay.
- **June 2026 board polish stack** — the 2026-06-14 commit wave added a website walkthrough slide, rebuilt organic sections as solo-video slides with click-to-play/no-autoplay behavior, pinned mobile special slides to `100dvh`, fixed desktop vertical scroll after an `overflow:hidden` regression, and replaced email hero crops with native 1920×502 banners.
- **Upload-ready organic video package** — the deck now gives every organic, paid-ad, and site-walkthrough video a Download button plus copy-caption/view controls, making the deck the approved posting surface rather than only a review artifact.
- **Homonym text follows the actual videos** — the deck corrected homonym slide labels and captions to match each video’s burned-in text and VO instead of changing videos that were internally consistent.

## Key people / stakeholders mentioned

- Omri
- French Atelier
- Acadomia

## Open questions / next steps

- **No-autoplay presentation mode** — the June 2026 deck recovery ended with click-to-play video behavior, clear posters/play badges, and sound off until a per-video toggle rather than scroll-triggered autoplay.

## Access notes

- GitHub links can be viewed publicly when the repository is public; editing, pushing code, changing Pages settings, or viewing private repositories requires GitHub access with the appropriate repository permission.
- The listed `pplx://` references are internal context links and may require access to the relevant Perplexity account/session.

## Source coverage

- Created from the complete local source page: `memory/knowledge/projects/french-atelier-ceo-deck.md`.
- URLs preserved from source: **13** unique URL(s).
