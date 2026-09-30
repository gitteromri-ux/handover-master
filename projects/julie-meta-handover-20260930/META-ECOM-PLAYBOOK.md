# Meta e-commerce war playbook — Julie masterclass / LLA (installed 2026-09-30 20:25 IDT)

Read before any Meta decision on LLA. Every line has a source (Meta docs, named practitioner, or this account's verified data). Use it to give a recommendation with basis, never a menu.

## 1. What changed in Meta (Andromeda, live since Oct 2025)
- Retrieval is creative-first: Meta picks who sees an ad from the creative itself. Broad audience + a diverse creative library beats hand-built interest audiences in most accounts. Sources: servoad.com/blog/meta-andromeda-creative-is-targeting-2026; segwise.ai/blog/meta-andromeda-update-creative-strategy-2026; uproas.io/blog/meta-andromeda-update-explained.
- Consequence for LLA: one video in an ad set (set 03 today) is the weakest possible input. Minimum 6–10 materially different creatives per campaign (different hook, format, length, speaker, static vs video). New creative only by duplicating an active ad (link + URL parameters inherited) — never editing in place.

## 2. Learning-phase floor
- Below ~50 optimisation events per ad set per week Meta bids with a guessed model ("Learning limited" does not clear itself). Sources: Meta Help (learning phase); growthcurve.co/meta-learning-phase-floor-fifty-conversions-per-ad-set; adlibrary.com/posts/meta-ads-learning-phase-problems.
- On small budgets change nothing for 7–10 days (Ben Heath, LinkedIn 2026). LLA rule: no edit on a set for 7 days after its last significant edit.
- Low-volume fix used by top buyers: optimise for the deepest event that clears 50/week, then move down-funnel. LLA numbers (28–30 Sep): purchases 2/3 days, InitiateCheckout ~3/day, LandingPageView ~26/day. Only LPV clears the floor today. A new LPV- or IC-optimised ad set is allowed (new ad set ≠ frozen set); changing the optimisation event on 01/02 is forbidden by the freeze. Caveat: LPV traffic is cheaper and shallower; judge it by IC and purchases only.

## 3. Cost cap / bid cap
- A cap below the auction clearing price gives an "Active" ad set with near-zero delivery; Meta's own fix: raise the cap or remove it, restore delivery, re-introduce gradually. Sources: facebook.com/business/help/1725302974308722; facebook.com/business/help/844297793050478; adlibrary.com/posts/not-delivering-facebook-ad.
- LLA evidence 30 Sep: caps $150/$200 → 0 impressions for 100 minutes on both sets while the uncapped set delivered. A cap is only usable once the set has real purchase history (≥20 purchases); set it at 1.5–2× the observed CPA, never at the target.

## 4. Advantage+ Sales campaigns
- Meta-reported +32% ROAS / −17% CPA vs manual; works when there is conversion volume and creative variety, not before. Sources: adlibrary.com/posts/advantage-plus-sales-campaigns-2026; digitalscholar.in/blog/meta-advantage-plus-campaigns.
- LLA: a third engine once ≥6 creatives exist. Constraint: every ad's URL must carry `cid=118149&adGroupID=<CRM id>` + the golden url_tags; a new ad set needs its CRM `#ID` from Anant before creation, and the ad set name must follow `ecomm_Adset_0N_All_All_CPM_#ID`.

## 5. Placements and price
- Industry Facebook feed CPM $8–16, Stories/Reels $10–12, Audience Network $0.50–2 (uproas.io/blog/facebook-ads-statistics; foundrycro.com/blog/facebook-ads-benchmarks-by-industry-2026). LLA masterclass sets paid $290–438 CPM = 20–30× market: a model problem, not a market problem. Blueprint sets with the same video reached $15–19 on Facebook feed.
- All LLA purchases (masterclass and Blueprint) came from Facebook feed; IG/Reels/Stories/AN: $1,368, 1 purchase. Keep Facebook feed + reels overlay until a set holds <$40 CPM for 3 days, then test IG feed as a separate duplicated set.

## 6. Live-event / webinar ticket ads
- Single-purpose destination, one CTA, date urgency in copy, micro-commitment structure (problem → agitation → mechanism → proof → CTA). Sources: ghlwebinarsnapshot.com/blog/facebook-ads-for-webinars; roaspy.com/blog/how-to-write-facebook-ads-for-a-webinar-2026-the-micro-commitment-method.
- Retarget video viewers and page visitors continuously (set 02 does this; keep it funded).
- Creator/UGC creative cut purchase cost most in 2025 playbooks (jondavids.com Meta Ads Selling Machine, June 2025): the Julie UGC scripts (repo lla-julie-ugc-ads) are the highest-value unmade asset.

## 7. Meta's own guidance for this account (UGP, read 30 Sep)
- Mixed formats: video + image in the same ad set (duplicate and swap media, keep original running).
- 9:16 vertical version with audio for Reels placements.
- CAPI-CRM connection recommended by Meta for lead quality (LLA already sends CAPI Purchase with event_id = CRM order id).
Pull fresh: `meta --output json ads --ad-account-id act_1459085242361281 guidance list`.

## 8. Daily read (mandatory, unprompted)
Per live ad set with name + ID: spend, CPM, LPV, $/LPV, ATC, IC, purchases, revenue, FB-feed vs other CPM, learning status, last_sig_edit. Israel hours 01:00–07:00 carry 42% of masterclass visits at $11 each; 12:00–19:00 carry 57% of spend at $28 each (verified 28–30 Sep).
