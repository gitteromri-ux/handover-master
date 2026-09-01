# Longevity Life Academy

## One-line purpose

Longevity Life Academy is the user's longevity education project for a premium, science-first online course/school associated with eTeacher Group.

## Status / where we left off

- **Knowledge-page updated:** 2026-08-21T10:45:00+00:00
- **Source file:** `memory/knowledge/projects/longevity-life-academy.md`
- **Last recorded state details:**
  - The course story is framed around a structured longevity learning journey: website discovery, six pillars, 18 live sessions, CGM/data, live cohort, personal protocol, and future-self outcome.
  - **Production repo as source of truth** — the live custom-domain site is served from `Longevity-Academy/Longevity-Academy.github.io` on `main`, not from the similarly named `gitteromri-ux` support repos. Future edits should target that org Pages repo, wait for GitHub Pages publication, and verify the cache-busted live domain before claiming delivery.
  - **Support repos stay separate from production** — active July 2026 LLA work expanded through personal support repos for promo emails/LPs, S09/S10 Courtney downloads, turnaround planning, homepage demos, article decks, and PR kits, while the production org Pages repo remained the custom-domain source of truth.
  - **Public Founder's Gift pages** — `/lp/founders-voucher` and `/lp/founders-invitation` are public and indexable without the former `?k=lgv-aug26` gate; campaign attribution remains active, and the pages submit leads to eTeacher CRM with ProductID 26.
  - **Org repo contains CRM history** — commit search on the production org repo surfaces the staging CRM integration, Cloudflare Worker proxy, and production-endpoint flip commits, making `Longevity-Academy/Longevity-Academy.github.io` the canonical source for live LLA lead-form code history.
  - **Meta Pixel / GTM tracking source of truth** — Pixel ID `1440305917310328` is the tracking ID the user supplied for the live site; the support repo records the pixel plus CSP allowlist, while the production org repo first restored the pixel and then removed the duplicate inline init because GTM already fires it.

## All public links & deliverables

### GitHub commits

- <https://github.com/Longevity-Academy/Longevity-Academy.github.io/commit/23b57727a35a7296b530029369e0bce221efd86c>
- <https://github.com/Longevity-Academy/Longevity-Academy.github.io/commit/655974a86ec8f7f72c27b3690a7808250fdb4dab>
- <https://github.com/Longevity-Academy/Longevity-Academy.github.io/commit/a97bbeda1651fb72c2a6ef8eabeb74a053ecc1bf>
- <https://github.com/gitteromri-ux/eteacher-longevity/commit/46c9e50fa2d9e18850020113b9d4c5bac1bba80f>
- <https://github.com/Longevity-Academy/Longevity-Academy.github.io/commit/fb30e4e90a1cc502ea5bed11f1d672d88ca87195>
- <https://github.com/Longevity-Academy/Longevity-Academy.github.io/commit/12417db8e60e34a71f5f1f28bfdac7bae9858125>
- <https://github.com/Longevity-Academy/Longevity-Academy.github.io/commit/acf2036892e72ab1a03ee7b58174e226be7f331b>
- <https://github.com/Longevity-Academy/Longevity-Academy.github.io/commit/fb5080edf241ffd3b4aa43e26db1081085e5cde4>
- <https://github.com/Longevity-Academy/Longevity-Academy.github.io/commit/3b03baae3cf7510a2815477a26ab0ec57f572d26>
- <https://github.com/Longevity-Academy/Longevity-Academy.github.io/commit/357873849ee844227c702fab39b206e58bde2c72>
- <https://github.com/Longevity-Academy/Longevity-Academy.github.io/commit/4ad7be353f72985ea2941c07c79279f3fdbda63f>
- <https://github.com/Longevity-Academy/Longevity-Academy.github.io/commit/a0768fc582a048b96180bec1202719ae359cd845>
- <https://github.com/Longevity-Academy/Longevity-Academy.github.io/commit/e4efaa10926b21733d08da099c755ad193843a98>
- <https://github.com/Longevity-Academy/Longevity-Academy.github.io/commit/c989b8915ced4cffa42d259095d676b5c57068bc>
- <https://github.com/gitteromri-ux/lla-favicons/commit/43cc63e296230e2f6338e88b1fde92ef037a7fdf>
- <https://github.com/Longevity-Academy/Longevity-Academy.github.io/commit/813120391c9f4590669484b7f9ec3fe9dfdd2f2e>
- <https://github.com/gitteromri-ux/lla-marketing-dashboard/commit/f0899780da5fbd0812123e03e63ce5f6e72c2a10>
- <https://github.com/Longevity-Academy/Longevity-Academy.github.io/commit/521115b0fcfeaab38471e6bd5e2f8a2fe387bb9f>
- <https://github.com/gitteromri-ux/longevity-pilot-command/commit/41bf81f0e510a8a08e2b6b301fc0afe9f3455800>
- <https://github.com/gitteromri-ux/longevity-pilot-command/commit/d04bc04304e1c857b8a408e445ea2e33cf4578be>
- <https://github.com/gitteromri-ux/longevity-pilot-command/commit/8425c2621b12a5ca438ca496f49a69d1166eb8c3>
- <https://github.com/Longevity-Academy/Longevity-Academy.github.io/commit/42ec06323c69d5b42778e059b1d141c024eef774>
- <https://github.com/gitteromri-ux/courtney-lla-masterclass/commit/31b63255ddc114938b38cac13308072d788fea39>
- <https://github.com/gitteromri-ux/eteacher-longevity-pr-campaign/commit/b87074afe7286d2484c83ff8c09027a1ea2ac5ac>
- <https://github.com/Longevity-Academy/Longevity-Academy.github.io/commit/02a639e026bd4461983f147cca912ff867e68e50>
- <https://github.com/Longevity-Academy/Longevity-Academy.github.io/commit/cb97fa246b68188a452b9afac40dccc2777c7f93>
- <https://github.com/Longevity-Academy/Longevity-Academy.github.io/commit/503716578b9677435153a48ce6052003b40ca349>
- <https://github.com/Longevity-Academy/Longevity-Academy.github.io/commit/13aaef1ad38efb3ae43117bfe5738bf3c1be61f6>
- <https://github.com/gitteromri-ux/eteacher-longevity-pr-campaign/commit/2d0d55f66d94371f9e2069106f453f9342e82ad2b>
- <https://github.com/Longevity-Academy/Longevity-Academy.github.io/commit/622c34c>
- <https://github.com/Longevity-Academy/Longevity-Academy.github.io/commit/d6f1cd8>
- <https://github.com/Longevity-Academy/Longevity-Academy.github.io/commit/cc0aec5>
- <https://github.com/gitteromri-ux/longevity-life-academy/commit/f144a4a4>
- <https://github.com/gitteromri-ux/longevity-life-academy/commit/b684cc49>
- <https://github.com/Longevity-Academy/Longevity-Academy.github.io/commit/0914910>
- <https://github.com/Longevity-Academy/Longevity-Academy.github.io/commit/c512c55>
- <https://github.com/Longevity-Academy/Longevity-Academy.github.io/commit/6a0d0b3>
- <https://github.com/gitteromri-ux/longevity-life-academy/commit/6156e40>
- <https://github.com/Longevity-Academy/Longevity-Academy.github.io/commit/edbda07fc62dff5d37edeabeca20560938433b9a>

### GitHub repositories

- <https://github.com/gitteromri-ux/longevity-life-academy>
- <https://github.com/gitteromri-ux/longevity-life-academy-ads-deck>
- <https://github.com/gitteromri-ux/lla-favicons>
- <https://github.com/gitteromri-ux/lla-thank-you>
- <https://github.com/gitteromri-ux/lla-marketing-dashboard>
- <https://github.com/gitteromri-ux/eteacher-school-banners>
- <https://github.com/gitteromri-ux/july-planning-longevity>
- <https://github.com/gitteromri-ux/longevity-july-plan>
- <https://github.com/gitteromri-ux/longevity-pilot-command>
- <https://github.com/gitteromri-ux/lla-promo-emails>
- <https://github.com/gitteromri-ux/lla-s09-s10-downloads>
- <https://github.com/gitteromri-ux/lla-turnaround-plan>
- <https://github.com/gitteromri-ux/lla-homepage-demo>
- <https://github.com/gitteromri-ux/lla-articles-deck>
- <https://github.com/gitteromri-ux/lla-pr-kit>
- <https://github.com/Longevity-Academy/Longevity-Academy.github.io>
- <https://github.com/gitteromri-ux/lla-course-checkout>

### Other public links

- <https://lla-ad-kit.pplx.app`.[cite:25>
- <https://lla-bioage.pplx.app`>
- <https://lla-ad-kit.pplx.app`>
- <https://lla-ad-kit2.pplx.app`>
- <https://lla-bioage2.pplx.app`>

### Session records (context only; may require the Perplexity account)

- <pplx://sessions/d456e3ba-a027-4cd5-9d91-282354d2e6a1>
- <pplx://sessions/aca2b1ad-3b1f-44ce-89f6-00e881cc0a03>
- <pplx://sessions/ddacf705-794a-4795-a7b7-ac50ce14c2d6>
- <pplx://sessions/8f1327d9-5b17-4f37-aacb-82e3c71f4b58>
- <pplx://sessions/6c9a305b-07f3-42e8-beec-83d1cef908b5>
- <pplx://sessions/41481b84-d534-4004-a873-e3029fbac94c>
- <pplx://sessions/29cdf558-1ea0-4948-866e-535f255334e5>
- <pplx://sessions/1b103941-3d9d-403c-a63b-8a1a740d811d>
- <pplx://sessions/d510394c-4615-43c1-bbf6-a699cece0a89>
- <pplx://sessions/6f4343c2-faf4-417d-a0ea-6b43b8706aa5>
- <pplx://sessions/a2332acd-98df-4805-8385-edb94c0612ba>
- <pplx://sessions/cc41bb1c-e781-4d56-8b70-8c32caebdaee>
- <pplx://sessions/f5d5772e-bfd2-4175-a6a4-2ee5042be4ca>
- <pplx://sessions/63923bdb-313e-4b83-a6e0-b43128d643d0>
- <pplx://sessions/69bc0c2a-ff66-44e3-bf37-f6188d94db60>
- <pplx://sessions/60ea14bb-4529-459e-b1a8-0f89b8c73201>
- <pplx://sessions/b8911c89-17c7-451d-8831-58e2ef1bc748>
- <pplx://sessions/a78433f8-e74b-4ee9-a5fe-b6e9e4cc4029>
- <pplx://sessions/0c50072f-ca47-4e4f-994d-32f92916ebc7>
- <pplx://sessions/050202a8-57f9-442a-9fa5-c333d3329a50>
- <pplx://sessions/78a06eda-d53a-4bf7-b141-7c9444887219>
- <pplx://sessions/ba33eb0e-9489-4a50-82d8-a7d93abebc54>
- <pplx://sessions/d0b2bb9d-724a-40ce-be26-b6e175d5a2f8>
- <pplx://sessions/bfdc2744-58b8-4981-a862-479275550e0b>
- <pplx://sessions/195e787c-56ce-4e2e-b267-a1e86cdab9b7>
- <pplx://sessions/893cb430-706a-4b3d-8996-afaa8a1a5356>
- <pplx://sessions/f58a045f-e6ad-4f4a-93f0-87c1c82d34b9>
- <pplx://sessions/638da4da-1a2b-4d7c-b051-325f70160696>
- <pplx://sessions/c966e212-9393-4b56-8cce-cb9bdd563446>
- <pplx://sessions/4ab62498-e614-41a4-9fc8-933107d24174>
- <pplx://sessions/1125e6c3-c735-43a8-a586-d3048e6d829f>
- <pplx://sessions/c1703d80-de11-4a29-ab4c-912976ae90c8>
- <pplx://sessions/84575e96-cc26-4493-af84-901f0675521f>
- <pplx://sessions/0102f294-5d49-4cae-9fa6-b8563c20561c>

## Assets & where they are stored

### Repositories / code / static asset hubs

- `gitteromri-ux/lla-favicons` (GitHub; exact repository references also appear in the links section)
- `gitteromri-ux/lla-course-checkout` (GitHub; exact repository references also appear in the links section)
- `gitteromri-ux/longevity-life-academy` (GitHub; exact repository references also appear in the links section)
- `gitteromri-ux/eteacher-school-banners` (GitHub; exact repository references also appear in the links section)
- `gitteromri-ux/longevity-pilot-command` (GitHub; exact repository references also appear in the links section)
- `gitteromri-ux/courtney-lla-masterclass` (GitHub; exact repository references also appear in the links section)
- `gitteromri-ux/eteacher-longevity-pr-campaign` (GitHub; exact repository references also appear in the links section)
- `gitteromri-ux/eteacher-longevity` (GitHub; exact repository references also appear in the links section)
- `gitteromri-ux/longevity-life-academy-ads-deck` (GitHub; exact repository references also appear in the links section)
- `gitteromri-ux/lla-thank-you` (GitHub; exact repository references also appear in the links section)
- `Longevity-Academy/Longevity-Academy.github.io` (GitHub; exact repository references also appear in the links section)
- `gitteromri-ux/lla-marketing-dashboard` (GitHub; exact repository references also appear in the links section)
- `gitteromri-ux/july-planning-longevity` (GitHub; exact repository references also appear in the links section)
- `gitteromri-ux/longevity-july-plan` (GitHub; exact repository references also appear in the links section)
- `gitteromri-ux/lla-promo-emails` (GitHub; exact repository references also appear in the links section)
- `gitteromri-ux/lla-s09-s10-downloads` (GitHub; exact repository references also appear in the links section)
- `gitteromri-ux/lla-turnaround-plan` (GitHub; exact repository references also appear in the links section)
- `gitteromri-ux/lla-homepage-demo` (GitHub; exact repository references also appear in the links section)
- `gitteromri-ux/lla-articles-deck` (GitHub; exact repository references also appear in the links section)
- `gitteromri-ux/lla-pr-kit` (GitHub; exact repository references also appear in the links section)

## Rules & preferences for this project

The following source notes are retained in full because they contain the project’s decisions, rules, creative direction, delivery constraints, and known technical guardrails.

- The course story is framed around a structured longevity learning journey: website discovery, six pillars, 18 live sessions, CGM/data, live cohort, personal protocol, and future-self outcome.
- **Ads-deck companion surface** — `longevity-life-academy-ads-deck` holds the ad-analysis/presentation surface with 40+ slides across sheet-based ad groups and longevity themes such as glucose, blood sugar, metabolism, aging skin, and energy.
- **Reusable brand-generation language** — the banner-derived brand kit uses Instrument Serif for wordmarks/headlines, Instrument Sans for UI/body, deep navy gradients (`#020610`, `#050B18`, `#04081A→#08152A`), steel-blue whites (`#B8D4E8`, `#7AA8C8`, `#E8EEF4`), and sparse mint `#7CFFB2` accents.
- **Premium ad-motion format** — the Meta showcase work renders real animated banners inside Instagram/Facebook story phone frames and exports short 16:9/9:16 videos with dark editorial framing, subtle UI sound design, and phone/mockup-focused motion rather than AI-generated footage.
- **Hero imagery standard** — exact-size LLA hero assets are expected as verified 1920×945 JPGs or 3840×1890 4K variants, with dark-luxe clinical visuals, CGM/glucose/HRV/ApoB/sleep UI metrics, no fake text, and no obvious AI artifacts.
- **Favicon/logo asset pack** — `gitteromri-ux/lla-favicons` is a showcase/download site for 15 Longevity Life Academy emblem-only, LLA-only, and emblem+LLA lockup variants in SVG, PNG, ICO, and exact favicon sizes; the June rebuild converted the SVG set to true vector paths with no embedded raster artwork.
- **Production-domain thank-you page** — the lead-form success state remains an inline popup, but `/thank-you.html` now exists on `www.longevitylifeacademy.com` as a standalone internal app link matching the popup UX without changing the homepage form flow.
- **GTM containment on the minimal thank-you page** — the public site exposes GTM container `GTM-PMRKXXJV`, but GTM was removed from the standalone thank-you page after a misconfigured GTM tag rendered stray literal `<>` text on the minimal page.
- **HF mockup-compositing constraint** — for HF-style premium mockups, the user rejected reflective/blurred, tilted, or “dancing” tracked screen replacements; the last explicit direction was static but different Longevity frames per screen, planted full and sharp on top of each screen at the correct angle.
- **Production repo as source of truth** — the live custom-domain site is served from `Longevity-Academy/Longevity-Academy.github.io` on `main`, not from the similarly named `gitteromri-ux` support repos. Future edits should target that org Pages repo, wait for GitHub Pages publication, and verify the cache-busted live domain before claiming delivery.
- **Support repos stay separate from production** — active July 2026 LLA work expanded through personal support repos for promo emails/LPs, S09/S10 Courtney downloads, turnaround planning, homepage demos, article decks, and PR kits, while the production org Pages repo remained the custom-domain source of truth.
- **Public Founder's Gift pages** — `/lp/founders-voucher` and `/lp/founders-invitation` are public and indexable without the former `?k=lgv-aug26` gate; campaign attribution remains active, and the pages submit leads to eTeacher CRM with ProductID 26.
- **Checkout as a separate funnel** — `gitteromri-ux/lla-course-checkout` carries the self-service sales and three-step checkout experience, keeping offer/checkout iteration separate from the production marketing-site repository.
- **Footer/contact support-site update** — the personal `gitteromri-ux/longevity-life-academy` support repo added the eTeacher Inc. New York address, subtle social icons, and the US toll-free number `+1-888-230-5110` to its footer layer.
- **Legal and deliverability trust layer** — the personal support site added Privacy, Terms, and Medical Disclaimer pages and repaired footer links so email and enrollment surfaces have explicit policy, unsubscribe, address, and health-disclaimer destinations.
- **Org repo contains CRM history** — commit search on the production org repo surfaces the staging CRM integration, Cloudflare Worker proxy, and production-endpoint flip commits, making `Longevity-Academy/Longevity-Academy.github.io` the canonical source for live LLA lead-form code history.
- **CEO FAQ/About correction round** — the 2026-06-17 production edit replaced the equipment and missed-session FAQ answers, added official high-res About/trust-fold logos for National Geographic Learning, The Hebrew University of Jerusalem, State of Israel Ministry of Education, and Ministry of Foreign Affairs Israel, and fixed the About methodology quote comma/visibility issue.
- **Meta Pixel / GTM tracking source of truth** — Pixel ID `1440305917310328` is the tracking ID the user supplied for the live site; the support repo records the pixel plus CSP allowlist, while the production org repo first restored the pixel and then removed the duplicate inline init because GTM already fires it.
- **Bio-Age Meta banner production spec** — the upload-ready ad-banners spec is 8 exact current user-uploaded clips × 4 Meta placements (1080×1080, 1080×1350, 1080×1920, 1200×628), MP4, Meta safe-zoned, brightened real footage, wider centered headlines, approved Bio-Age copy, and a large Instrument Serif wordmark matching the user's HTML reference (`Longevity` pale blue, `Life Academy` white, `by eTeacher Group` beneath).
- **Partner-logo polish on production** — the 2026-06-22 production About-page logo pass restored the NatGeo yellow frame and replaced the rough Ministry of Education crest with a sharpened asset while leaving the Hebrew University and Ministry of Foreign Affairs logos untouched.
- **FAQ medical-background answer on production** — the 2026-06-22 homepage edit updated FAQ #02 medical-background copy in the production org Pages repo.
- **LLA ad-kit link requirement** — the user explicitly rejected file/app handoffs for the 2026-06-21 LLA ad work and required public links only; the working gallery URL used during the session was `https://lla-ad-kit.pplx.app`.
- **Bio-Age creative gallery handoff** — the Bio-Age Meta kit was published as `https://lla-bioage.pplx.app` with 63 downloadable creatives: 53 MP4 video banners and 10 PNG statics grouped into Square, Portrait, Story/Reels, Landscape, and Statics folders.
- **Bio-Age page enrollment CTA** — the production Bio-Age internal page CTA is top-positioned on desktop and mobile, uses the label “ENROLL NOW · The Longevity Blueprint” with “$289 / MO,” and bypasses the quiz to reveal and scroll directly to the lead-gen form.
- **Homepage media performance pass** — the 2026-06-22 production pass compressed homepage videos from 32MB to 8MB, reduced oversized logo/image assets, re-encoded Six Pillars videos with faststart filenames, and clamped Six Pillars descriptions to six lines.
- **Pricing page as canonical offer surface** — `/pricing.html` presents $1,249 upfront or five monthly installments of $289 for a $1,445 monthly-plan total, with the Pricing nav link deployed site-wide.
- **Shared nav and global CTA layer** — internal pages use shared navigation and a floating enrollment CTA that links into the lead-generation flow rather than acting as a decorative prompt.
- **US-state lead-gen constraint** — the lead-gen form uses 50 US states plus DC with NANP area-code state autofill while preserving the CRM-facing `name="country"` field.
- **Published Meta forms require a new ID for CSV changes** — the country/state conditional-answer file preserves full country names and “Not applicable” for non-US rows while using full names for all 50 states plus District of Columbia. Because a published Instant Form is locked, replacing the CSV requires duplicating the form, publishing a new form ID, reconnecting that ID to the existing CRM delivery, swapping it into the ads, and testing one US and one non-US lead.
- **Ad-kit gallery variants** — `https://lla-ad-kit.pplx.app` is the original Meta-ready ad-kit gallery, `https://lla-ad-kit2.pplx.app` adds live Meta post mockups, `https://lla-bioage.pplx.app` is the original Bio-Age gallery, and `https://lla-bioage2.pplx.app` adds Bio-Age LP and post mockups.
- **Marketing dashboard surface** — the LLA marketing command center is a separate GitHub Pages dashboard that models the June four-rep plan, 100% monthly pricing, about 100 leads/day, and a $1,720/day budget without unavailable revenue/sales data.
- **Shared school-banner hub** — LLA and French Atelier banner-image delivery moved into `gitteromri-ux/eteacher-school-banners`, which hosts exact-size school banner assets and preview/download links.
- **July call-center planning surface** — `july-planning-longevity` models July behavior planning and budget options around French Atelier call-center benchmarks, Longevity rep action plans, contacted-rate definitions, leads/shift, and calls-per-lead depth.
- **July CEO plan dashboard** — `longevity-july-plan` is the standalone July 2026 CEO plan built around $15 CPL, $5,800/week spend, 37% contacted, 3% conversion, 6 acquisitions/week target, break-even/sensitivity analysis, and 3-rep capacity risk.
- **Evidence-first power-claim rule** — LLA campaign claims must attach institution, publication, year, sample/study basis, and the comparison behind each number; “Our graduates” phrasing remains a branded claim that needs LLA cohort outcome data to be defensible as an advertised result.
- **Session-length source of truth** — production site copy now uses 50-minute sessions across FAQ, curriculum, and site copy after the 2026-07-02 org-repo fix, superseding older 90-minute FAQ text.
- **Combined ad showcase** — `lla-ad-mockups44.pplx.app` is the same-link public showcase for the combined LLA ad kit and Bio-Age creative set; the final handoff expects 62 motion creatives and 28 static creatives on one page, grouped by aspect-ratio bands, locally referenced, lazy-loaded, and never distorted.
- **Pilot Command successor surface** — `gitteromri-ux/longevity-pilot-command` is a new 2026-07-03 interactive CEO planning dashboard repo created after the July CEO Plan iteration, with early commits for the dashboard, Jekyll bypass, and control-bar layout.
- **USA-only lead capture** — the production org repo now blocks non-US phone numbers, forces `CountryIsoCode=US` and `CountryIsoCodeByIp=US`, preserves state, and requires a valid U.S. NANP area code so foreign dial codes and IPs cannot re-tag LLA leads downstream.
- **Courtney masterclass track** — `gitteromri-ux/courtney-lla-masterclass` is a separate LLA deck for three 60–90 second masterclass video ads with SEE/HEAR storyboards, LLA branding, and action-verb graphic CTA cards.
- **PR campaign wave system** — `gitteromri-ux/eteacher-longevity-pr-campaign` frames LLA as an eTeacher market-entry story followed by Julie, Hub/app, and course-expansion waves, with Wave 1 targeted for 2026-07-13 and the full sequence wrapping in early September.
- **ProductID 26 across live forms** — Bio-Age, homepage, and refer-a-friend production payloads carry Longevity ProductID 26, while French Atelier remains ProductID 25; the 2026-07-09 live audit submitted test leads and saw HTTP 200 CRM responses for all three LLA lead forms.
- **Live CRM code outside checked branches** — the same audit found the live ProductID 26 CRM integration served through the Cloudflare Worker proxy but not present in the checked `gitteromri-ux/longevity-life-academy` or `gitteromri-ux/eteacher-longevity` main/gh-pages branches, making a source-control reconciliation important before future redeploys.
- **Bio-Age course-info conversion panel** — the Bio-Age form flow now reveals a personalized course-info panel after assessment engagement, with the 18-week live program, 8–15 cohort, 50-minute sessions, free Abbott Lingo CGM, real pricing, Trustpilot proof, and preserved CRM/US-only lead mechanics.
- **Julie profile production integration** — Julie Gibson Clark's production profile lives at `/teachers/julie-gibson-clark.html`, with homepage instructor placement and imagery treated as CEO-review assets rather than draft mockups.
- **Sitewide eTeacher lockup and nav** — the production site standardized the transparent LLA logo lockup with “by eTeacher Group” below it, restored full nav menus on internal teacher/topic pages, and uses the org Pages repo as the custom-domain source of truth.
- **Bio-Age Julie authority banner** — the production Bio-Age page places a Julie Gibson Clark hero banner between the intro hero and the assessment, frames her as Founding Faculty, keeps the quiz as the CTA entry point, and tells visitors that the post-result admissions call is for enrollment in The Longevity Blueprint at $289/mo rather than a quiz-results review.
- **Blueprint/masterclass separation** — the July PR/site work distinguishes The Longevity Blueprint as the course product from Julie Gibson Clark's masterclass/founding-faculty role, avoiding copy that implies Julie fronts the full Blueprint course.
- **CEO-reviewed production edits** — 2026-07-08/09 production commits on `Longevity-Academy/Longevity-Academy.github.io` show direct main-branch implementation of CEO feedback for wordmark sizing, lockup structure, nav, and the Bio-Age Julie banner.

## Key people / stakeholders mentioned

- Julie Gibson Clark
- Courtney
- eTeacher Group
- Longevity Life Academy
- French Atelier

## Open questions / next steps

- **Evidence-first power-claim rule** — LLA campaign claims must attach institution, publication, year, sample/study basis, and the comparison behind each number; “Our graduates” phrasing remains a branded claim that needs LLA cohort outcome data to be defensible as an advertised result.

## Access notes

- GitHub links can be viewed publicly when the repository is public; editing, pushing code, changing Pages settings, or viewing private repositories requires GitHub access with the appropriate repository permission.
- The listed `pplx://` references are internal context links and may require access to the relevant Perplexity account/session.

## Source coverage

- Created from the complete local source page: `memory/knowledge/projects/longevity-life-academy.md`.
- URLs preserved from source: **95** unique URL(s).
