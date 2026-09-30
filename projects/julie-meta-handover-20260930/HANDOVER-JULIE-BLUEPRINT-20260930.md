# HEY AI TOOL — READ THIS FIRST. LLA / Julie Masterclass / Blueprint — complete account handover

**Written:** 2026-09-30 17:10 IDT (Israel time = UTC+3). All Meta numbers pulled live from Graph API v25.0 between 15:50 and 16:55 IDT on 2026-09-30 unless a different time is stated.
**Owner:** Omri Gitter (gitter.omri@gmail.com · work alias omri.gitter@eteachergroup.com · GitHub `gitteromri-ux` · Tel Aviv).
**Labels used everywhere:** `VERIFIED` = read from Meta API / repo / live page. `USER-REPORTED` = Omri said it. `ASSUMED` / `INFERENCE` = reasoning, not a fact.
**Raw data behind every table:** `handover-master/projects/julie-meta-handover-20260930/data/*.json` (account, campaigns, ad sets, ads with creatives, lifetime ad insights, daily/placement/age-gender per ad set, full activity log 1–30 Sep, pixel, pages, token permissions).

---

## 0. HEY AI TOOL — the 4-minute version

1. **Business:** Longevity Life Academy (LLA), a brand of eTeacher Group LTD (Meta Business 1545475089051742). Two products: **The Longevity Blueprint** course (~$1,400 / $279 per month, sold on `https://longevitylifeacademy.pages.dev/`) and the **Julie Gibson Clark Live Masterclass** ($49 Masterclass / $79 VIP Access, sold on `https://www.longevitylifeacademy.com/julie-masterclass/`). Live dates: Tue Oct 27 7:00 pm ET and Sat Nov 14 1:00 pm ET.
2. **Goal Omri set (USER-REPORTED, non-negotiable in his words):** 1,000 paid masterclass enrollments by ~27 Oct 2026, 500 by end of week 2. Deck: `gitteromri-ux/julie-500-launch-plan`.
3. **Where we are (VERIFIED):** masterclass campaign has spent **$1,548 since 28 Sep for 2 purchases ($128 revenue)**, 94 landing-page views at $16.5 each, CPM $333. Blueprint campaign has spent **$13,991 lifetime (3–30 Sep)** for 3 attributed purchases ($537). Account lifetime spend since April: $139,204.
4. **The one mechanical problem (VERIFIED + INFERENCE, confidence high):** every masterclass ad set runs "Highest volume" (LOWEST_COST_WITHOUT_CAP) with a purchase optimisation. Under that strategy Meta never sees the $49 price; the daily budget is the only value signal, so with a $399 budget and ~1 predicted purchase/day Meta happily pays $300–450 CPM for "likely buyers". Proof: **the same Julie 65-second video, same Page, same interests, same age range, same US geo costs $15–29 CPM in the Blueprint ad sets and $250–374 CPM in the masterclass ad sets** (section 7.1). Only two things differ: destination/offer and Meta's learned purchase probability.
5. **Rules you cannot break (section 1):** GOLDEN CAPI freeze on masterclass ad sets 01/02, the live page, pixel and relay until 2026-10-26; no synthetic test events; nothing live without Omri's written "approve"; log every live change in `handover-master/_today-log.md`; answer only what is asked; charts = markdown tables; never revise a stated cause.
6. **Open decisions waiting for Omri (section 12):** placement/cost-goal change on set 01; the organic group post (copy final, publishing blocked by token permission); `og:image` fix (needs freeze-lift sentence); Julie's sign-off; VIP CRM/payment proof.
7. **Access you have as a Perplexity tool (section 13):** Meta connector token (ads_management on act_1459085242361281, Page 1179505785236150), GitHub (`gitteromri-ux` + org `Longevity-Academy`), Vercel team GITTER (read only, no deploy), Cloudflare (Pipedream connector is broken; the credential that works is "LLA Funnel Deploy (Cloudflare)"), ActiveCampaign, Google Calendar/Gmail. **No passwords are held anywhere in this doc or in any repo; section 13 says how each access is granted.**

---

## 1. HEY AI TOOL — RULES. Break one and Omri stops using you

### 1.1 Communication rules (USER-REPORTED, verbatim where possible)
- "You are forbidden to answer anything other than my question clearly as I ask it." "Do not write a sentence to me, ever, that does not answer my question."
- Every figure shows the **real Meta entity name + ID** next to it, labelled VERIFIED / USER-REPORTED / ASSUMED.
- "Are you allowed to change your answer every single time? That's a no." → pull ALL relevant metrics **before** stating a cause; never revise a stated cause between messages.
- "When I ask for something on Meta, it happens in a second… I'm not waiting more than 60 seconds." Meta data requests: answer with data, no planning narration.
- "I don't want a graph. I said a chart." → **charts are markdown tables, never images** (images cost him credits he did not ask for).
- "Never again blame me." "Don't tell me about my time estimates." No apologies, no self-deprecation, no "you're right" loops, no progress narration.
- "I don't want your recommendations… I don't want your email marketing advice." Page/email/funnel recommendations are only allowed as an **appendix at the end** of a deliverable, clearly marked.
- Deliverables: working clickable public link + verified public GitHub repo; test end-to-end incl. mobile before calling it ready; premium, brand-aligned, never template-like.
- Hebrew name spelling: עמרי. Works in English and Hebrew.

### 1.2 GOLDEN CAPI / SACRED FREEZE (permanent rule, VERIFIED in `handover-master/projects/julie-tracking-freeze/`)
Frozen 2026-09-28 15:30 IDT → **2026-10-26**. Nothing below changes for any reason — including Omri's own in-the-moment request — unless he writes the literal sentence **"I lift the Julie tracking freeze for <item>"** and `verify_julie_tracking.py` is run before and after.
- Meta: campaign 52668266203628; ad sets **01** 52668330533628 and **02** 52668268711228 (optimisation goal, pixel/event, attribution, bid strategy, geo, audiences, placements, conversion domain, ad link, URL parameters, editing an existing ad's creative in place, custom conversions 1426010666308623 / 1099790382424644 / 1417373073897207, pixel settings). **Allowed with Omri's approval:** daily budget, schedule, pausing an ad, adding an ad only by duplicating an active ad so link + URL params are inherited.
- Ad set **03** 52668330165828 is NOT on the frozen list (it was created 24 Sep but first spent 29 Sep).
- Live page: repo `Longevity-Academy/julie-masterclass`, `main`, golden tag `tracking-golden-20260928`. Protected files: `index.html` (pixel base code + 3 `LLA_META.track` call sites), `assets/julie-meta-tracking.js`, `julie-attribution.js`, `julie-payment-safety.js`, `julie-international-checkout.js`, `julie-premium-routing.js`. Lifts granted so far: **index.html pricing copy** (30 Sep 11:16, merged 091617f; golden.json updated). CSS file `assets/julie-v8.css` is not protected.
- Relay: Vercel project `lla-ac-events` (prj_3v7g4Xwve6OmXrcPCVQOWJOiN2SK, team gitter1), production deployment **dpl_DQogoRsNj1XXTpJQmFrRk9zzCCrU**. No relay deployment during the freeze (the connector has no deploy permission anyway).
- Change procedure for anything else: `git checkout -b change/<yyyymmdd>-<topic>` → `python3 verify_julie_tracking.py --repo <checkout>` all PASS → preview (desktop + 390 px) → Omri writes "approve" → merge → within 5 min run `--repo`, `--meta`, `--vercel` guards **in separate shells** (running with meta_ads+vercel credentials together makes the Graph calls return empty and false-FAILs) → any FAIL = `git revert` at once → log in `_today-log.md` with repo, SHA, what, rollback.
- Rollback: site `git checkout tracking-golden-20260928 -- index.html assets/ && git commit && git push`; relay: Vercel dashboard → promote dpl_DQogoRsNj1XXTpJQmFrRk9zzCCrU; Meta: pause the bad ad set, never delete 52668330533628 / 52668268711228.

### 1.3 Meta operating rules (USER-REPORTED unless noted)
- Never touch live ad sets 01/02, site, tracking or budgets without written approval. Log every live Meta change in `_today-log.md` (what, ID, old→new, rollback).
- **No synthetic/test events on the live pixel; synthetic tests prove nothing about attribution** (three sessions wasted days on this). Never quote pixel numbers from 20–24 Sep (test-flooded days).
- Ad 52669232322428 (set 03, per-placement 3-video ad): "do not touch" — it is now PAUSED (30 Sep 11:05, approved).
- Keep both ad sets 01 and 03 running. Omri: set 03 "will become our main ad set soon". Do NOT pause set 01 statics: zoom-gold has a purchase.
- No audience or budget changes outside the CEO plan without approval; Omri rejected broad targeting and rejected spend cuts ("I CAN'T HAVE THIS HAPPEN. I MUST GET MY TARGETS").
- Never rename ad sets with anything after the last `#` (Anant's naming convention; two GOLDEN CAPI suffixes had to be removed 29 Sep 12:41).
- Any change to an ad's Page identity, creative, link or parameters during a duplicate needs explicit approval (violation recorded 28 Sep 16:55, reverted).
- Anant Gautam (Meta editor) edits ads and ad sets in Ads Manager without warning; every one of his edits restarts the learning phase. Rule Omri accepted in principle (not yet sent to Anant): no edits without written go.

### 1.4 Social/organic copy rules (stored in Omri's memory; USER-REPORTED)
Startup-announcement style, point first; identify product + provider clearly; use website wording (ages ~8 months a year ≈ 6 years per decade; "separates the fluff from what matters"; "unique proven protocol"); no name-drop strings; no announcer/"uncle" tone; "short never means unclear"; do not write "instead of building your own from scratch" (that's the full course); "unique protocol" not "complete protocol"; tiers are "Masterclass" and "VIP Access", never "Standard"; no 14-day refund in posts; VIP = "$249 credit toward the full Longevity Blueprint course"; dates with ET (CT · PT) in brackets; don't change lines he didn't ask to change; Julie is "the second-slowest aging human on Earth" (not "slowest"); include Bryan Johnson's $2M/yr vs her ~$100/month; exclude the Bryan Johnson group from any group list.

---

## 2. HEY AI TOOL — ACCOUNT MAP (all VERIFIED 30 Sep)

| Entity | Name | ID | Notes |
|---|---|---|---|
| Ad account | Longevity Life Academy | act_1459085242361281 | USD, timezone Israel, status active, lifetime spend $139,204.16, no spend cap |
| Business (account owner) | ETeacher Group LTD | 1545475089051742 | |
| Business (pixel owner) | Gita Agency | 1489173449541995 | Omri's agency |
| Pixel / dataset | Longevity Life Academy | 1440305917310328 | created 22 Apr 2026; last fired 30 Sep 02:59 IDT at pull time; advanced matching ON |
| Facebook Page (masterclass ads, all new Blueprint ads) | Longevity Life Academy | 1179505785236150 | 37 fans; IG 17841432251901978 (@longevitylifeacademy) |
| Facebook Page (old Blueprint ads) | "Page A" | 1036363559571443 | connected token has **no Advertiser role** → ads on this Page cannot be created/edited by API |
| Other Pages on token | Gita Marketing agency 834843056374699 · French Atelier 677053902156593 · Keren Or Farm 1350914481603601 | | not LLA |
| Other ad accounts on token | 570542045255370, 1188017096669618, 950981877715538, 1358975119724184 | | not LLA |
| Campaign — Masterclass | `LGV_EN_PPC_ecomm-02_2026-09-02_#118149` | 52668266203628 | OUTCOME_SALES, ABO, created 24 Sep 09:03 IDT by Anant, activated 27 Sep 23:00 IDT, first spend 28 Sep |
| Campaign — Blueprint | `LGV_EN_PPC_ecomm-01_2026-09-02_#118148` | 52663511211628 | OUTCOME_SALES, ABO, created 3 Sep 09:13 IDT by Anant |
| Custom conversions — masterclass | `LLA Julie Masterclass \| Purchase` 1426010666308623 · `\| InitiateCheckout` 1099790382424644 · `\| AddToCart` 1417373073897207 | | rule: event AND url contains `www.longevitylifeacademy.com/julie-masterclass/` AND product_line contains `julie_masterclass` |
| Custom conversions — Blueprint | `LLA Blueprint (pages.dev) \| Purchase` 1786158289389247 · `\| InitiateCheckout` 1434992078766510 · `\| AddToCart` 1125972029763023 | | created 28 Sep 15:58 |
| Test ad sets (never activate; may delete) | TEST2 52668961777228 · TEST 52668956239228 | | PAUSED; TEST2 ran 40 impressions on 28 Sep 10:44–12:38 (Tel Aviv, Omri's own device) |

### 2.1 Masterclass ad sets (campaign 52668266203628) — VERIFIED 16:00 IDT 30 Sep
All three: OFFSITE_CONVERSIONS → pixel 1440305917310328 event PURCHASE · billing IMPRESSIONS · **LOWEST_COST_WITHOUT_CAP ("Highest volume")** · attribution 7-day click + 1-day view (set 02 also 1-day engaged video view) · US · age 35–64 · all genders · Advantage+ placements · Advantage audience OFF · learning stage LEARNING · `conversion_domain` empty on every ad.

| Ad set | ID | Status | Budget/day | Targeting | Budget history |
|---|---|---|---|---|---|
| `ecomm_Adset_01_All_All_CPM_#108813` | 52668330533628 | ACTIVE, FROZEN | **$399** | 11 interests (Wearable technology, Bulletproof, Physical fitness, Life extension, Healthy diet, Weight training, Bodybuilding, Meditations, Personal development, High-net-worth individual, Vitamins and nutritional supplements); MAU est. 78.8–92.7M | $10 → $320 (27 Sep 22:01) → $350 (27 Sep 22:59) → $399 (30 Sep 11:12) |
| `ecomm_Adset_02_All_All_CPM_#108814` | 52668268711228 | ACTIVE, FROZEN | **$75** | 11 custom audiences: Website Visitors 30/90d, InitiateCheckout 30/90d, AddToCart 30/90d, form openers 90d, Lead 30/90d, FB Page & campaign highly-engaged video viewers 365d (IDs 52666079066428, 52666079110028, 52666079163628, 52666079230228, 52666079297628, 52666079370628, 52666963633828, 52666964011628, 52666964040828, 52666964306428, 52666964616028) | $10 → $180 (27 Sep 22:01) → $75 (27 Sep 22:59) |
| `ecomm_Adset_03_All_All_CPM_#108815` | 52668330165828 | ACTIVE, not frozen | **$299** | same 11 interests as 01; geo changed from US-state list to all-US 29 Sep 14:34 | $10 → $140 (29 Sep 14:28, Anant) → $230 (30 Sep 11:02, approved) → $299 (30 Sep 13:41) |
| `ecomm_Adset_04/05/6_0…` #108816/#108817/#108818 | 52668330870828 / 52668330871228 / 52668330871028 | PAUSED, never spent | Anant's spare sets, $10 | — |

`ad_set_value_rules` "Women (+80%)" appears in the activity log for sets 01/02/03 (Anant 24 Sep; re-applied 27 Sep 22:35 and 29 Sep). The Graph field `bid_adjustments` returns null for all sets, so whether the +80% women bid multiplier is live cannot be confirmed by API — **check it in Ads Manager UI** (ad set → Optimisation & delivery → value rules). If live, it raises the price Meta pays for women, who take 80% of spend (section 4.4).

### 2.2 Masterclass ads — lifetime 28–30 Sep (VERIFIED ~15:50 IDT). Link on every ad: `https://www.longevitylifeacademy.com/julie-masterclass/?preview=zoom-link-sample`; CTA APPLY_NOW; url_tags `cid=118149&adGroupID=<108813|108814|108815>&utm_source=Facebook&utm_medium=Topic&&utm_campaign={{campaign.id}}&utm_term={{adset.id}}&utm_content={{ad.id}}&creative={{ad.id}}&placement={{placement}}&cq_src=facebook&cq_cmp={{campaign.name}}&cq_con={{ad.name}}&cq_med={{placement}}&cq_net={{site_source_name}}&cq_plt=fp`.

| Set | Ad | ID | Format | Status | Spend | Impr | CPM | CTR | LPV | ATC | IC | Purch |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 01 | Ad#12 – Video 65s Julie | 52668330731428 | video (post 1179505785236150_122148071265346827) | ACTIVE | $339 | 906 | $374 | 2.32% | 20 | 1 | 1 | **1 · $79** (28 Sep 11:05 IDT, Potter Eric, VIP, man 45–54) |
| 01 | card-gold static | 52668898107028 | image | ACTIVE | $326 | 881 | $370 | 2.61% | 19 | 3 | 3 | 0 |
| 01 | zoom-gold static | 52668898143028 | image | ACTIVE | $247 | 576 | $429 | 2.08% | 11 | 1 | 1 | **1 · $49** (29 Sep 09:xx IDT, woman 55–64) |
| 01 | original7c static | 52668897625628 | image | **PAUSED 30 Sep 11:02** (approved) | $43 | 180 | $237 | 1.11% | 2 | 0 | 0 | 0 |
| 01 | Ad#11 – Video 90s Julie | 52668330730828 | video | ACTIVE | $27 | 61 | $448 | 6.56% | 5 | 0 | 0 | 0 |
| 01 | 7B / 7C / EVENT-ZOOM statics, card-blue, zoom-blue, video11, video12, Ad#3 Courtney, Ad#6 static | 52668877520228, 52668877503028, 52668877520428, 52668898052628, 52668898133228, 52668897677628, 52668897578828, 52668330731228, 52668330730628 | — | PAUSED, never spent | 0 | | | | | | | |
| 02 | card-blue static | 52668898222428 | image | ACTIVE | $112 | 421 | $266 | 2.38% | 9 | 0 | 0 | 0 |
| 02 | Ad#12 – Video 65s | 52668330002628 | video | **PAUSED 30 Sep 13:42** | $102 | 332 | $307 | 2.11% | 4 | 0 | 0 | 0 |
| 02 | zoom-blue static | 52668898253228 | image | ACTIVE | $74 | 202 | $366 | 2.97% | 7 | 0 | 0 | 0 |
| 02 | original7c static | 52668898199228 | image | **PAUSED 30 Sep 13:41** | $16 | 47 | $346 | 0% | 0 | 0 | 0 | 0 |
| 02 | Ad#11 – Video 90s | 52668330002428 | video | ACTIVE | $2 | 16 | $146 | 0% | 0 | 0 | 0 | 0 |
| 02 | card-gold, zoom-gold, video11, video12, Ad#3, Ad#6 | 52668898242428, 52668898285028, 52668897657428, 52668897629628, 52668330002828, 52668330003228 | — | PAUSED, never spent | 0 | | | | | | | |
| 03 | Ad#12 – Video 65s (per-placement: square 1076147518617785 / vertical 1071020772591512 / landscape 1698029105269428 "Julie – 65s Final JUSTIN.mp4") | 52669232322428 | video | **PAUSED 30 Sep 11:02** (approved) | $187 | 537 | $348 | 2.61% | 13 | 0 | 0 | 0 |
| 03 | Ad#12 – Video 65s (single standard video 28073238119010653, creative 917501771244053) | 52669371390428 | video | ACTIVE (created 30 Sep 03:06, approved "Test adset approved") | $139 | 556 | $250 | 0.90% | 5 | 0 | 0 | 0 |

Quality / engagement / conversion rankings: UNKNOWN on every masterclass ad (too few impressions). `ad_review_feedback`, `issues_info`, `recommendations`: **null on all active ads** → Meta is NOT flagging or penalising any masterclass ad (checked 16:50 IDT, answers Omri's "check whether Meta penalises ads").

### 2.3 Blueprint ad sets (campaign 52663511211628) — VERIFIED
Link on all ads `https://longevitylifeacademy.pages.dev/`, url_tags same template with `cid=118148&adGroupID=<108807…108811>`.

| Ad set | ID | Status | Budget | Targeting / attribution | Lifetime |
|---|---|---|---|---|---|
| `ecomm Adset 2_All_All_CPM_#108808` (original) | 52663512093428 | **PAUSED** (28 Sep 18:06) | $160 | US 35–64, same 11 interests; attribution **1-day click only** (changed 25 Sep 04:37Z) | $7,550 · CPM $24 · 4,471 LPV ($1.69) · 16 ATC · 4 IC · **2 P $358** |
| `ecomm Adset 2_All_All_CPM_#108808` (GOLDEN CAPI copy) | 52669013718628 | ACTIVE since 28 Sep 18:06 | **$199** (was $160→$180→$130→$199 on 30 Sep 02:06) | copy of original, 7d click + 1d view; 5 ads recreated on Page 1179505785236150 | $367 · CPM $29 · 116 LPV · 0 ATC (Ad#12 video 52669014002428 reuses ORIGINAL post 122144382249346827 → inherited social proof; statics 52669042694228 / 52669042697828 active; 4 ads of 28 Sep 13:43 paused) |
| `ecomm Adset 5_All_All_CPM_#108811` (original) | 52666296222628 | PAUSED | $40 | 15 Sep; Ad#6 static Julie dominated | $1,437 · CPM $134 |
| `ecomm Adset 5_All_All_CPM_#108811` (copy) | 52669048300628 | ACTIVE since 28 Sep 18:06 | **$155** (was $130→$100→$155) | US 35–64, 11 interests, 7d click + 1d view; ONE ad: Ad#12 video 52669048640628 with a **NEW post** 122148360027346827 | $265 · CPM $23 · 103 LPV · 1 ATC · 0 P |
| `ecomm Adset 4_All_All_CPM_#108810` (retargeting) | 52666232368428 | ACTIVE | **$50** (was $222→$80→$50) | age 25–65, 11 custom audiences (site/ATC/IC/lead/video) | $2,549 · CPM $254 · 162 LPV · 54 ATC · 24 IC · **1 P $179** |
| Adset 1 #108807 / Adset 3 #108809 | 52663511359228 / 52664534627228 | PAUSED | | 18–65 broad-ish, Sep 3–14 | $1,244 CPM $27 / $569 CPM $18, 0 P |

**Blueprint Ad#12 65s Julie video, original set 2 (52663533667028):** $4,667 · 270,803 impressions · **CPM $17** · CTR 1.46% · 4,078 LPV · 4 ATC · 1 IC · 1 P · quality **ABOVE_AVERAGE**. Same set, **Ad#6 static Julie (52663514284228):** $1,683 · **CPM $220** · 141 LPV · 11 ATC · 2 IC · 1 P.

---

## 3. HEY AI TOOL — COMPLETE TIMELINE (who did what, when; VERIFIED from the account activity log, Israel time)

Actor "Gitter Omri" in the Meta log = Omri's own token, which Perplexity sessions use. Where the `_today-log.md` records the session and the approval, it is noted.

### Blueprint (3–27 Sep)
- **3 Sep 09:13–11:03** Anant creates campaign #118148, ad sets 1 (#108807) and 2 (#108808) with 8 ads each (Courtney statics/video, Julie 7B/7C statics, Ad#6 static, Ad#12 video), state-list geo, budgets $10→$220 each; campaign live 11:03. Day-1 CPM $293 / $276.
- **3–8 Sep** set 1 CPM falls $293→$10→$37→$31; set 2 $276→$153→$77→$52→$39→$38. Zero purchases.
- **8 Sep 20:21** Anant adds ad set 3 (#108809, 18–65) and duplicate ads. **9 Sep** sets 1 and 3 paused; set 2 continues.
- **10 Sep** first Blueprint purchase (set 2, $179, day 8, CPM $17). **13 Sep** second purchase (set 2, $179).
- **15 Sep 10:54–16:02** Anant creates retargeting set 4 (#108810) and set 5 (#108811). **16 Sep** set 4 purchase ($179). Set 2 CPM spikes $167 on 16 Sep (edit day), back to $22 by 18 Sep.
- **17 Sep 09:25 IDT** WhatsApp widget wa.me/12015023701 (IIBS) added to masterclass repo, .com repo and pages.dev (pages.dev already had a wa.me link since 3 Sep).
- **19 Sep** pixel blackout (0 ATC/IC/Purchase on 2,110 PV). **20–24 Sep** test-flooded pixel days — never quote.
- **24 Sep** 15 pixel Purchase events on www.longevitylifeacademy.com (test day). **25 Sep 04:37Z** set 2 attribution changed to 1-day click (by another session). **25 Sep 14:50** pages.dev golden-parity tracking fix live (`_worker.js` server-side test-device filter). 
- **27 Sep** Blueprint tracking recovery approved and live; hero/wallet changes approved; truth table written (see `handover-master/projects/lla-course-checkout.md`).
- **28 Sep 12:41–18:06** GOLDEN CAPI parity: new set 2 copy 52669013718628 (7d+1d), custom conversions created, 4 ads duplicated via Omri's Comet browser but published on the wrong Page (1179505785236150) without approval → paused 16:55; set 5 copy 52669048300628 created 17:47; **18:06 both copies ACTIVE, originals set 2 (52663512093428) and set 5 (52666296222628) PAUSED**; set 4 budget $222→$80.
- **29 Sep 09:46** budgets: set 2 copy $180→$130, set 5 copy $130→$100, set 4 $80→$50. **12:07** Anant edits set 4 custom audiences + value rules. **12:41** Anant removes "GOLDEN CAPI" suffix from set names.
- **30 Sep 02:05–02:06** (another session) set 5 copy $100→$155 and set 2 copy $130→$199, targeting spec edited (learning reset).

### Masterclass (24–30 Sep)
- **24 Sep 09:03** Anant creates campaign #118149 ($10). **09:19** set 02 (#108814, custom audiences). **14:19–14:30** sets 03, 01, 04, 05, 6_0 created; Ad#12/Ad#11/Ad#3/Ad#6 uploaded to 01 and 02; "Women +80%" value rules on 01/02/03. Nothing activated.
- **27 Sep 15:22** (session) Ad#12 creative updated in 01/02. **18:34** three statics 7B/7C/EVENT-ZOOM created in 01. **22:01** budgets 01 $320, 02 $180. **22:17–22:24** revised ads created in both sets (video12, video11, original7c, card-blue, card-gold, zoom-blue, zoom-gold). **22:35** targeting spec + value rules re-applied to 01/02. **22:47** Courtney video + Ad#6 static paused in both sets; Ad#11 creative updated. **22:59** budgets 01 **$350**, 02 **$75**; card-gold, original7c, Ad#11, zoom-gold activated in 01; card-blue, original7c, Ad#11, zoom-blue in 02. **23:00 campaign ACTIVE.**
- **28 Sep 08:33** Anant edits Ad#11 creative in 01 and 02. **10:43–12:38** TEST2 controlled purchase ad set (Tel Aviv 1 km, reach, $600 budget, bid cap) — 40 impressions, paused 12:38. **11:05 IDT first real purchase** (Potter Eric, $79 VIP, Airwallex) attributed to set 01 / Ad#12 video → **GOLDEN STATE recorded 15:45, freeze until 26 Oct**. Set 01 spent **$461 on a $350 budget** that day (Meta allows up to 125% daily overspend).
- **29 Sep 09:xx** second purchase ($49, zoom-gold, set 01). **12:08** Anant edits set 02 custom audiences + value rules. **13:03** Anant creates per-placement Ad#12 in set 03 (52669232322428). **14:28** Anant sets set 03 budget $10→$140 and ACTIVATES it. **14:34–14:36** Anant changes set 03 geo to all-US, adds value rules, edits the ad's creative (text). The session reported set 03 "paused" at 13:03 (true then) and failed to re-check → Omri called it a lie.
- **30 Sep 03:06** (session, approved "Test adset approved") single-video copy ad 52669371390428 created in set 03. **11:02** (approved) original7c in 01 PAUSED; per-placement ad 52669232322428 PAUSED; set 03 $140→$230. **11:12** set 01 $350→**$399**. **13:41–13:42** set 03 $230→**$299**; set 02 original7c and Ad#12 video PAUSED.
- **30 Sep site work (all guarded, logged):** 10:53–11:05 phone layout v9.9 (CSS only, main 790a875); 11:16–11:32 Standard-card "You learn" bullets (freeze lifted for index.html pricing copy, 091617f); 11:49–12:05 phone enrollment dialog Continue sticky (CSS only, ea36be0).

---

## 4. HEY AI TOOL — PERFORMANCE TABLES (VERIFIED)

### 4.1 Masterclass campaign 52668266203628, 28–30 Sep (to ~15:50 IDT 30 Sep)
| Metric | Value |
|---|---|
| Spend | $1,548 |
| Impressions / reach / frequency | 4,652 / 2,833 / 1.64 |
| CPM | $333 |
| Link clicks / LPV / cost per LPV | 104 / 94 / $16.5 |
| ATC / IC / Purchases / revenue | 4 / 4 / **2 / $128** |
| LPV → purchase | 2.1% |
| Cost per purchase | $774 |

### 4.2 Masterclass daily per ad set
| Date | Set | Spend | Impr | CPM | Clicks | LPV | ATC | IC | Purch |
|---|---|---|---|---|---|---|---|---|---|
| 28 Sep | 01 | $461 | 1,446 | $319 | 38 | 34 | 1 | 1 | 1 ($79) |
| 28 Sep | 02 | $130 | 536 | $242 | 14 | 12 | 0 | 0 | 0 |
| 29 Sep | 01 | $284 | 611 | $465 | 14 | 15 | 2 | 2 | 1 ($49) |
| 29 Sep | 02 | $120 | 326 | $367 | 6 | 5 | 0 | 0 | 0 |
| 29 Sep | 03 | $106 | 281 | $376 | 5 | 4 | 0 | 0 | 0 |
| 30 Sep (to 16:00) | 01 | $236 | 547 | $432 | 10 | 8 | 2 | 2 | 0 |
| 30 Sep | 02 | $57 | 156 | $365 | 3 | 3 | 0 | 0 | 0 |
| 30 Sep | 03 | $220 | 812 | $271 | 14 | 14 | 0 | 0 | 0 |

Set 01 pacing: spent $461 on a $350 budget on 28 Sep, then Meta paced down ($284 on 29 Sep, $236 by 16:00 on 30 Sep). Set 01's CPM has risen every day ($319 → $465 → $432) while set 03 (video only, all-US, no statics) fell $376 → $271.

### 4.3 Masterclass placement (lifetime, all sets)
| Placement | Spend | CPM | LPV | Purchases |
|---|---|---|---|---|
| Facebook feed | $725 | $290 | 45 | **2** |
| Instagram feed | $557 | $490 | 24 | 0 |
| Instagram stories | $83 | $540 | 3 | 0 |
| Facebook reels | $85 | $430 | 6 | 0 |
| Facebook reels overlay | $34 | $150 | 4 | 0 |
| Facebook stories | $28 | $650 | 6 | 0 |
| Instagram reels | $46 | $360 | 2 | 0 |
| Facebook in-stream | $21 | $700 | 0 | 0 |
| Threads | $14 | $153 | 5 | 0 |

Set 03 today: Facebook feed $95 at **CPM $168** vs Instagram feed $175 at **CPM $686** — Meta is pushing the new video into IG feed at 4× the FB price.

### 4.4 Masterclass age/gender (lifetime, all sets)
| Segment | Spend | CPM | LPV | ATC | Purch |
|---|---|---|---|---|---|
| 55–64 F | $682 | $380 | 41 | 4 | 1 |
| 45–54 F | $411 | $340 | 26 | 0 | 0 |
| 55–64 M | $221 | $330 | 8 | 0 | 0 |
| 35–44 F | $138 | $250 | 10 | 0 | 0 |
| 45–54 M | $107 | $370 | 7 | 1 | 1 |
| 35–44 M | $41 | $250 | 2 | 0 | 0 |
Women take **80% of spend** ($1,231 of $1,548). Purchasers: a 45–54 man ($79 VIP, Ad#12 video) and a 55–64 woman ($49, zoom-gold static).

### 4.5 Masterclass hourly, 28–29 Sep combined (Israel time; US evening = IL night)
| Hour (IL) | Spend | Impr | CPM | LPV | $/LPV | ATC | IC | Purchases |
|---|---|---|---|---|---|---|---|---|
| 00 | $30 | 162 | $186 | 1 | $30 | 0 | 0 | 0 |
| 01 | $52 | 240 | $219 | 4 | $13 | 0 | 0 | 0 |
| 02 | $62 | 258 | $239 | 6 | $10 | 0 | 0 | 0 |
| 03 | $65 | 202 | $324 | 8 | $8 | 0 | 0 | 0 |
| 04 | $81 | 209 | $387 | 4 | $20 | 0 | 0 | 0 |
| 05 | $44 | 160 | $276 | 3 | $15 | 1 | 1 | 0 |
| 06 | $60 | 138 | $432 | 5 | $12 | 0 | 0 | 0 |
| 07 | $26 | 81 | $316 | 2 | $13 | 0 | 0 | 0 |
| 08 | $17 | 54 | $309 | 5 | $3 | 0 | 0 | 0 |
| 09 | $14 | 39 | $356 | 2 | $7 | 1 | 1 | **1** |
| 10 | $6 | 18 | $345 | 2 | $3 | 0 | 0 | 0 |
| 11 | $12 | 56 | $206 | 2 | $6 | 1 | 1 | **1** |
| 12 | $20 | 38 | $513 | 2 | $10 | 0 | 0 | 0 |
| 13 | $32 | 82 | $387 | 1 | $32 | 0 | 0 | 0 |
| 14 | $65 | 176 | $370 | 2 | $33 | 0 | 0 | 0 |
| 15 | $101 | 229 | $442 | 2 | $51 | 0 | 0 | 0 |
| 16 | $68 | 191 | $354 | 4 | $17 | 0 | 0 | 0 |
| 17 | $50 | 120 | $415 | 2 | $25 | 0 | 0 | 0 |
| 18 | $42 | 93 | $447 | 4 | $10 | 0 | 0 | 0 |
| 19–23 | $40 | 145 | $276 | 1 | $40 | 0 | 0 | 0 |
Reading: the cheapest visits and both purchases come 08:00–12:00 IL (01:00–05:00 ET, US late night / early morning); the most expensive spend is 13:00–18:00 IL (US morning), $17–51 per visit. Meta's daily pacing front-loads spend at 01:00–06:00 IL because that is when Israel's calendar day starts (the account timezone is Israel — the budget day resets at 00:00 IL = 17:00 ET, so "daily" spend is split across two US days).

### 4.6 Blueprint daily (key rows)
| Date | Set | Spend | CPM | LPV | ATC | IC | P |
|---|---|---|---|---|---|---|---|
| 3 Sep | set 2 orig | $141 | $276 | 24 | 0 | 0 | 0 |
| 4 Sep | set 2 orig | $179 | $153 | 23 | 0 | 0 | 0 |
| 5 Sep | set 2 orig | $140 | $77 | 15 | 0 | 0 | 0 |
| 6 Sep | set 2 orig | $183 | $52 | 37 | 0 | 0 | 0 |
| 7 Sep | set 2 orig | $130 | $39 | 27 | 0 | 0 | 0 |
| 8 Sep | set 2 orig | $83 | $38 | 33 | 0 | 0 | 0 |
| 9 Sep | set 2 orig | $261 | $29 | 109 | 1 | 1 | 0 |
| 10 Sep | set 2 orig | $240 | $17 | 106 | 1 | 1 | **1** |
| 13 Sep | set 2 orig | $354 | $21 | 271 | 1 | 1 | **1** |
| 14–15 Sep | set 2 orig | $344 / $460 | $23 / $25 | 392 / 370 | 0 / 1 | 0 | 0 |
| 16 Sep | set 2 orig | $471 | **$167** (edit day) | 47 | 1 | 0 | 0 |
| 16 Sep | set 4 RT | $135 | $419 | 6 | 1 | 1 | **1** |
| 18–24 Sep | set 2 orig | $330–713/day | $15–28 | 207–525/day | 0–1 | 0 | 0 |
| 25–28 Sep | set 2 orig | $126–185 | $24–63 | 47–108 | 0–4 | 0–1 | 0 |
| 28 Sep | set 2 copy / set 5 copy | $102 / $50 | $90 / $59 | 11 / 9 | 0 | 0 | 0 |
| 29 Sep | set 2 copy / set 5 copy | $156 / $116 | $29 / $28 | 46 / 35 | 0 | 0 | 0 |
| 30 Sep (to 16:00) | set 2 copy / set 5 copy | $117 / $100 | **$18 / $15** | 60 / 59 | 0 / 1 | 0 | 0 |
| 15–30 Sep | set 4 RT | $36–350/day | $146–419 | 2–19/day | 54 total | 24 total | 1 |

Blueprint placement: set 2 orig Facebook feed $5,366 at **CPM $19** (3,312 LPV, 1 P) vs Instagram feed $811 at **CPM $572** (58 LPV, 1 P); Threads $159 at $16 (871 LPV, 0 P); Audience Network $34 at $6 (60 LPV). Set 2 copy: FB feed $254 at $22 vs IG feed $34 at $373. Set 5 copy: FB feed $214 at $19 vs IG feed $8 at $607.

### 4.7 Pixel 1440305917310328 (VERIFIED)
- Purchase events by host: 24 Sep 15 on www.longevitylifeacademy.com (test day; TEST2 ad set 52668961777228 / ad 52668961794628 on 28 Sep was Omri's own device, 40 impressions, 1 LPV, 0 purchase); 25 Sep 4 on pages.dev + 1 on .com; 28 Sep 3 on .com (one real order, browser+server copies dedup to 1); 29 Sep 3 on .com.
- PageView since 17 Sep: pages.dev 17,499; .com 3,379. Since 3 Sep: pages.dev 25,511; .com 5,517. .com since 28 Sep: 635. The pixel reports domain only, not path; the masterclass is the only paid destination on .com since 28 Sep.
- 14-day event totals (17–30 Sep, includes test days): PageView 24,357; AddToCart 930; InitiateCheckout 721; ViewContent 907; Enroll_CTA_Click 1,220; Clicked_on_Enroll 664; plus LLA_*/LLA2_* diagnostic events (thousands) from the pages.dev in-app-browser instrumentation.
- Server-side ATC/IC copies are 2–4× browser copies every day → an unidentified second server sender exists (candidate: eTeacher CRM's own CAPI on ProductID 26). Not proven; open item.
- `.com` is GitHub Pages (server `GitHub.com`) → no server-side test-device filter there (that filter lives in pages.dev `_worker.js`). Omri's own visits to the masterclass page hit the live pixel unless tracking hosts are blocked (all QA sessions block them).

---

## 5. HEY AI TOOL — WHAT WAS CONCLUDED, WITH CONFIDENCE

| # | Conclusion | Label | Evidence |
|---|---|---|---|
| 1 | Under "Highest volume" Meta never sees the $49/$79 value; the daily budget is the value signal. A $399 budget with ~1 predicted purchase/day means Meta will pay up to ~$300–400 per purchase and therefore $300–450 CPM for predicted buyers. | INFERENCE, high | Same video/Page/interests/age/geo: CPM $15–29 in Blueprint copies (Meta learned buyers are ~0.04% of visitors, so it bids low and buys cheap inventory) vs $250–374 in masterclass sets (2.1% of visitors buy, so it bids high). Cost-per-result goal / cost cap is the only way to tell Meta the price. |
| 2 | Purchase optimisation cold-start: a new/edited ad set starts at ~$280 CPM and needs ~8 uninterrupted days to fall under $30. | VERIFIED pattern | Blueprint set 2 day 1–8 CPM $276, $153, $77, $52, $39, $38, $29, $17; set 1 the same; set 2 copy $90→$29→$18; set 5 copy $59→$28→$15. Masterclass sets never got 8 uninterrupted days: edits by Anant/sessions on 27, 28, 29 and 30 Sep each reset learning (`last_sig_edit_ts` on set 01 = 28 Sep 00:14Z, set 03 = 30 Sep 10:46Z, set 02 = 29 Sep 19:48Z). |
| 3 | Julie static image ads run at $170–430 CPM everywhere; the Julie 65-second video runs at $15–30 CPM once learned. | VERIFIED | Blueprint set 2: Ad#12 video CPM $17 (ABOVE_AVERAGE quality) vs Ad#6 static $220 in the same set; set 5 orig static $172; masterclass statics $237–429. |
| 4 | Instagram inventory costs 1.7–5× Facebook feed for this audience and has produced 1 purchase in $1,368 of IG spend across both campaigns. | VERIFIED | Section 4.3 / 4.6 placement tables. |
| 5 | Removing Instagram does not make Facebook more expensive: the FB feed price is set by the FB feed auction, not by pool size; the auction pool for US 35–64 + interests on FB alone is tens of millions. Reducing placements only risks under-delivery, which has not been observed on FB feed in this account. | INFERENCE, high | Blueprint set 2 spent $5,366 on FB feed at $19 with no ceiling hit. |
| 6 | Sets 01 and 03 (identical targeting) compete in the same auction against each other; Meta de-duplicates within a campaign only for the same ad set, not across sets. Effect is second-order vs #1. | ASSUMED | Standard auction behaviour; not measured. |
| 7 | Meta is not penalising the masterclass ads. | VERIFIED 30 Sep 16:50 | `ad_review_feedback` null, `issues_info` none, `recommendations` null on all active ads; all statuses ACTIVE, no "Update required" or policy flags since 27 Sep 22:35 (Ad#11 "Update Required" was a creative-edit state, resolved 22:59). |
| 8 | The 15 test purchases fired on www.longevitylifeacademy.com on 24 Sep (before campaign start) and the controlled test on 28 Sep are inside the pixel's 7-day-click training window for a PURCHASE-optimised ad set that started 28 Sep. | VERIFIED events; INFERENCE on effect | Meta uses pixel history on the promoted domain for early predictions; test purchases inflate the predicted purchase rate for masterclass visitors → higher bids. Effect size unknown; it fades as real data accumulates (day 7 = 5 Oct). |
| 9 | Blueprint copies are not apples-to-apples with the masterclass: set 2 copy reuses the original post with 3 weeks of social proof; set 5 copy uses a new post but is still a $1,400 product with a 0.04% purchase rate (Meta bids low). | VERIFIED | Post IDs in section 2.3. |
| 10 | The CEO plan assumed $0.61 per LPV; the account's best ever is $1.69 (Blueprint set 2). At Blueprint-like prices the masterclass would get ~550 visits/day on $700; at the masterclass's current 2.1% LPV→purchase that is ~11 sales/day; at Blueprint-like 0.5% it is ~3/day. | VERIFIED inputs, ASSUMED conversion | Plan deck `gitteromri-ux/julie-500-launch-plan`. |
| 11 | 1,000 sales in 27 days on the current ~$775/day budget (≈$21k) requires a blended CPA of ≤$21. Nothing in the account has produced a CPA under $128. | VERIFIED math | Section 9. |
| 12 | Set 03 (video only, all-US) is already the cheapest set ($271 CPM today, falling) and Omri has designated it the future main set. Set 01 keeps rising ($432 today) because statics + repeated edits + budget raises reset it. | VERIFIED | Section 4.2. |
| 13 | The +80% women value rule (if live) multiplies the bid for 80% of spend by 1.8. | VERIFIED rule exists in log; UNKNOWN if active | Check in Ads Manager UI. |

---

## 6. HEY AI TOOL — BIDDING STRATEGIES (Meta, sales objective) and what each does here

| Strategy (Ads Manager name) | API value | What Meta does | Effect on this account |
|---|---|---|---|
| Highest volume (current on every set) | LOWEST_COST_WITHOUT_CAP | Spend the whole budget on the most likely purchasers, at any CPM | Budget becomes the value signal → $300–450 CPM, 1–2 sales/day, learning never completes |
| Cost per result goal (cost cap) | COST_CAP + `bid_amount` = target CPA in cents | Aims at an average cost per purchase ≈ goal; bids on cheaper inventory; **throttles spend if the goal cannot be met** | Tells Meta the product is worth ~$50–80. Spend may drop to $50–150/day for 2–4 days while it re-learns; that is the trade Omri refused so far ("I can't have this happen"). Only lever that both lowers CPM and keeps purchase optimisation. Settable per ad set by editing `bid_strategy` + `bid_amount`; **frozen on 01/02, allowed on 03 with approval** |
| Bid cap | LOWEST_COST_WITH_BID_CAP + `bid_amount` | Hard maximum bid per auction | Most aggressive throttle; not advisable at this volume |
| Highest value | LOWEST_COST_WITHOUT_CAP with `optimization_goal=VALUE` | Optimises for purchase value; needs ≥ ~30 value events / week | Not available yet (2 purchases) |
| ROAS goal | LOWEST_COST_WITH_MIN_ROAS | Min ROAS floor | Same data requirement; not available |
| Other optimisation goals: Landing page views / Link clicks / Reach | `optimization_goal=LANDING_PAGE_VIEWS` etc. | Buys cheap visits, ignores purchase probability | CPM would fall to Blueprint-like $15–30 within days (the audience CAN be bought cheaply — proven), but visitor intent drops; LPV→purchase would fall from 2.1% toward 0.3–0.8% (ASSUMED). Break-even needs ≥2.5% at $1.26/visit. |

What "Meta learning the price" actually means: Meta's model predicts P(purchase) per person and bids ≈ P(purchase) × (implied value). Under Highest volume the implied value is derived from the budget and the predicted conversions ("spend it all"). Under cost cap the implied value is the cap. **There is no setting that feeds the $49 price except a cost/bid cap or a value optimisation.** Omri's line "Meta is bidding as if it's a diamond" is literally true: the $399 budget tells it each sale is worth ~$300+.

Minimums Meta needs to exit learning: ~50 optimisation events per ad set in 7 days. Masterclass: 2 events in 3 days → learning will never complete at this rate; that is why every edit hurts so much (there is nothing learned to keep).

---

## 7. HEY AI TOOL — THE APPLES-TO-APPLES PROOF TABLE (why the CPM is 10× — VERIFIED)

### 7.1 Same video, same everything, different campaign
| Ad set | Product / link | Optimisation | Created | Ad | Post | CPM lifetime | CPM today | LPV | P |
|---|---|---|---|---|---|---|---|---|---|
| Blueprint set 5 copy 52669048300628 | Blueprint / pages.dev | Purchase, Highest volume | 28 Sep 17:47 | Ad#12 65s video 52669048640628 | **new** 122148360027346827 | **$23** | **$15** | 103 | 0 |
| Blueprint set 2 copy 52669013718628 | Blueprint / pages.dev | Purchase, Highest volume | 28 Sep 12:41 | Ad#12 65s video 52669014002428 | original 122144382249346827 | $18 | $18 | 106 | 0 |
| Masterclass set 03 52668330165828 | Masterclass / .com | Purchase, Highest volume | first spend 29 Sep 14:28 | Ad#12 65s video 52669371390428 (same source video 28073238119010653) | new 122148833121346827 | **$250** | $250 | 5 | 0 |
| Masterclass set 01 52668330533628 | Masterclass / .com | Purchase, Highest volume | first spend 28 Sep | Ad#12 65s video 52668330731428 | 122148071265346827 | **$374** | — | 20 | 1 |
Identical: Page 1179505785236150, US, 35–64, the same 11 interests, Advantage+ placements, 7d click + 1d view, same video file. Different: destination + price + copy, budget ($155–199 vs $299–399), predicted purchase rate (0.04% vs 2.1%), value rules (masterclass sets carry "Women +80%" in the log), and pixel purchase history on the domain (15 test + 2 real on .com within 7 days).

### 7.2 Static vs video inside one ad set (Blueprint set 2 original, 3–28 Sep)
| Ad | CPM | LPV | ATC | P | Quality |
|---|---|---|---|---|---|
| Ad#12 video Julie 52663533667028 | $17 | 4,078 | 4 | 1 | ABOVE_AVERAGE |
| Ad#6 static Julie 52663514284228 | $220 | 141 | 11 | 1 | AVERAGE |
| Ad #3 static Courtney 52663523247228 | $40 | 37 | 0 | 0 | AVERAGE |
| Ad #2 static Courtney 52663523247428 | $82 | 22 | 0 | 0 | AVERAGE |

### 7.3 What the two purchasers did (VERIFIED at ad level)
- 28 Sep 11:05 IDT: Ad#12 video, set 01, Facebook feed, man 45–54 → $79 VIP (Potter Eric per CRM; browser + CAPI Purchase, event_id = CRM order id, dedup OK).
- 29 Sep 09:xx IDT: zoom-gold static, set 01, Facebook feed, woman 55–64 → $49.
Both on Facebook feed, both 08:00–12:00 IL.

---

## 8. HEY AI TOOL — THE 1,000-ENROLLMENT PLAN (what it says, what it needs)

Deck: `gitteromri-ux/julie-500-launch-plan` (27 Sep; daily tabs added 29 Sep 19:40). Target 1,000 paid by 27 Oct, 500 by end of week 2. Omri: "My targets is 1,000. Not 300."

| Input | Plan assumption | Account reality (VERIFIED) |
|---|---|---|
| Cost per landing-page view | $0.61 | Masterclass $16.5; Blueprint best $1.69 (set 2 orig lifetime), $1.20–1.70 on good days |
| LPV → purchase | ~1.5% | Masterclass 2.1% (2/94); Blueprint 0.04% |
| Visits needed for 1,000 sales at 1.5% | ~67,000 | at 2.1% → ~48,000 |
| Budget needed at $1.26/visit (Blueprint-like CPM $25, CTR 2.2%, 90% LPV rate) | $60–85k | current run-rate $775/day ≈ $21k to 27 Oct |
| Required CPA on current budget | — | **≤$21** for 1,000 sales; achieved so far $774 |

---

## 9. HEY AI TOOL — THE CURRENT PLAN (proposed to Omri, NOT approved, NOT executed) with certainties

Certainties are the session's stated estimates given to Omri on 30 Sep; do not restate them differently (rule 1.1).

### 9.1 Decisions on the table
| # | Action | Where | Freeze status | Certainty stated | Risk |
|---|---|---|---|---|---|
| A | Set 03: Facebook feed + Facebook reels overlay placements only (drop IG, stories, in-stream) | set 03 52668330165828 | not frozen; needs approval | CPM lower within 48 h ≈85% | under-delivery on a $299 budget: low (FB feed alone spent $5.4k for Blueprint) |
| B | Set 03: cost-per-result goal, start $150, step to $100 then $70 every 48 h with ≥1 purchase | set 03 | not frozen; needs approval | spend >$300/day ≈70%; sales/day up ≈70% | spend can fall to $50–150 for 2–4 days (the thing Omri refuses) |
| C | Set 01: leave untouched as the frozen control (statics stay, zoom-gold has a purchase) | set 01 | frozen | — | keeps paying $430 CPM |
| D | No new ads, no creative edits, no targeting edits on any set for 7 days; message to Anant: no edits without written go | all | — | — | none |
| E | Budget day: account timezone is Israel; consider that "daily" spend spans two US days (informational; changing account timezone is not possible) | — | — | — | — |
| F | 1,000 by 27 Oct on current budget: <10%. With ~$2.5–3k/day from day 8 (≈$55–65k total) and CPM at Blueprint levels: ≈45% | — | — | — | — |

### 9.2 Alternative Omri asked about: broad targeting / Advantage+ audience
Rejected by Omri ("why broad on a low-basket product"). Session answer given: broad only helps once Meta has ≥50 purchases to model on; at 2 purchases it would spray. Not planned.

### 9.3 What to measure every 12 h (fast Meta pull, section 13.2 gives the commands)
Per ad set: spend, CPM, LPV, $/LPV, ATC, IC, purchases, purchase value, FB-feed vs IG-feed CPM, learning status. Report as a markdown table with IDs.

---

## 10. HEY AI TOOL — TRACKING / CAPI ARCHITECTURE (VERIFIED from golden record and today-log)

### 10.1 Masterclass (www.longevitylifeacademy.com/julie-masterclass/)
- Hosting: GitHub Pages from `Longevity-Academy/julie-masterclass` `main`; CNAME `www.longevitylifeacademy.com` → `longevity-academy.github.io`; a push to main is live in ~1–2 min. Personal mirror `gitteromri-ux/lla-julie-masterclass` (may lag).
- Tracking release `julie-meta-20260927-4`: PIXEL_ID 1440305917310328, RELAY_URL `https://lla-ac-events.vercel.app/api/meta/capi`, PRODUCT_LINE `julie_masterclass`, USD, standard 49 / VIP 79.
- Event identity (browser eventID === server event_id): PageView `julie_pv_<session>`, ViewContent `julie_vc_<session>`, AddToCart `julie_atc_<CRM orderid>`, InitiateCheckout `julie_ic_<CRM orderid>`, **Purchase `<CRM orderid>`** fired only after Airwallex SUCCEEDED / PayPal capture.
- Click ID: `fbclid` → `fb.1.<ms>.<fbclid>` → `_fbc` cookie + localStorage `julie_fbc_v1`; `_fbp` from cookie. Attribution keys stored in `julie_attribution_v2`, returned by `LLA_ATTR.queryString()` for the CRM order (utm_source/medium/campaign/content/term).
- Buyer identity from the CRM checkout-details response, memory-only, SHA-256 hashed before send.
- Checkout: LLA CRM + Airwallex path with MainAbroadCourseId 283, AbroadCourseId 1823, CampusId 4203, LanguageId 101; abandonment states written to ActiveCampaign field `LGV_checkout_events` (field 206) only.
- Guard: `handover-master/projects/julie-tracking-freeze/verify_julie_tracking.py` (`--repo <checkout>`, `--meta`, `--vercel`; run flags in separate shells; 52 checks incl. live file hashes, relay preflight + `x-lla-release: clickid-exact-20260922` header + CORS, ad-set invariants, all ad links/url_tags, custom conversions, pixel settings, test sets paused, Vercel production deployment id).
- Live page facts used in copy: Julie ages ~8 months per year (DunedinPACE 0.665), ~$100/month, No. 2 on the Rejuvenation Olympics ahead of Bryan Johnson ($2M/yr), VIP $79 = 90 min incl. 30-min private Q&A + $249 Blueprint credit valid to 31 Dec 2026, 14-day refund (site only, not posts).
- Known page items not done: `og:image` is a 1080×1920 video frame → Facebook link previews render a blurred crop; fix is one tag in frozen `index.html` (needs "I lift the Julie tracking freeze for og:image"). Header-fix branch from 28 Sep (`julie-mobile-header-20260928`) likely superseded by v9.9. Eyebrow suffix "· 60 minutes, live" and "You learn" copy were left as-is.

### 10.2 Blueprint (longevitylifeacademy.pages.dev)
- Repo `gitteromri-ux/lla-course-checkout` (private). Cloudflare Pages project `longevitylifeacademy`; deploy credential that works: "LLA Funnel Deploy (Cloudflare)"; Pipedream Cloudflare connector = Invalid X-Auth-Key, never use. Production deployment as of 26 Sep: 3cc41778 (later releases 27–28 Sep logged in `_today-log.md`: tracking recovery, hero/wallet, limited tracking release 28 Sep 01:47, receipt logging 02:21).
- Code path: `dist/index.html` + `assets/lla-relay-receipts.js` + `lla-clickid-v20260922.js` + `_worker.js` (server-side test-device filter, re-issues `_fbc`/`_fbp` 90 d). PageView/ATC/IC fire fbq + relay with shared event_id; IC fires after CRM staging (`eteacher-leads-proxy` Worker `/api/lead/ecomm`) or 7 s fallback, then `/checkout`. Checkout worker host `lla-checkout.gitter-omri.workers.dev`. GTM container `GTM-PMRKXXJV`. AddToCart uses the $279 monthly value. `PreferredCourseId 168663` = October 2026 cohort.
- Open Blueprint items (from the truth table): (1) Vercel `ac-events` relay logs not readable (project not shared with team gitter1); (2) identify the second server-side ATC/IC sender; (3) US step-1 form "Please select your U.S. state" may block buyers — test on a real phone; (4) a real paid Blueprint purchase end-to-end (buyer-linked settled payment + Events Manager receipt + Ads Manager credit) has never been proven for the new copies.
- Clicklog sink: `clicklog-sink/site` artifact; TEMP click-log relay patch was never deployed.

### 10.3 Relay (Vercel `lla-ac-events`)
Production dpl_DQogoRsNj1XXTpJQmFrRk9zzCCrU; files `api/ac/event.js`, `api/meta/capi.js`, `lib/julie-capi.js`, `lib/click-id.js`, `lib/blueprint-golden-capi.js`, `lib/blueprint-receipt.js` (SHA-1s in golden record; byte-exact copy in `projects/julie-tracking-freeze/relay-golden-dpl_…/`). Env vars META_PIXEL_ID, META_CAPI_TOKEN, AC_API_KEY live only in Vercel.

---

## 11. HEY AI TOOL — ORGANIC / GROUPS / CREATIVE ASSETS

### 11.1 Final organic post copy (delivered 29 Sep, approved wording; publishing NOT done)
**Facebook**
> Longevity Life Academy announces the Longevity Masterclass of the Year, live with Julie Gibson Clark — the second-slowest aging human on Earth.
>
> Most people age one year, every year. Julie ages about eight months. Over a decade, that's roughly six years of aging instead of ten, and it isn't a claim — it's measured, with verified epigenetic testing. In 2023 it placed her No. 2 on the Rejuvenation Olympics leaderboard, ahead of Bryan Johnson and his $2-million-a-year program.
>
> Her budget: about $100 a month. No lab, no team of doctors. A single mom and recruiter from Phoenix who worked out what actually moves the needle — and dropped everything that didn't.
>
> That's what makes this hour rare. Longevity is full of noise: a thousand protocols, a supplement behind every one, and clinics that start at five figures. Julie's approach cuts through it.
>
> Join our exclusive masterclass live on Zoom, where Julie reveals her unique protocol — how she sleeps, how she eats, how she moves, the few supplements she kept, and the testing loop that proves it works.
>
> This is a one-time Longevity Life Academy event, and seats are limited.
>
> **Dates**
> Tuesday, October 27 · 7:00 pm ET (6:00 pm CT · 4:00 pm PT)
> Saturday, November 14 · 1:00 pm ET (12:00 pm CT · 10:00 am PT)
>
> **Tickets**
> Masterclass · $49
> VIP Access · $79 — the masterclass plus a private 30-minute Q&A with Julie afterwards, and a $249 credit toward the full Longevity Blueprint course
>
> Reserve your seat: [link]

**Instagram**
> Longevity Life Academy announces the Longevity Masterclass of the Year, live with Julie Gibson Clark — the second-slowest aging human on Earth.
>
> Most people age a year every year. Julie ages about eight months — roughly six years per decade — measured with verified epigenetic testing. In 2023 it placed her No. 2 on the Rejuvenation Olympics leaderboard, ahead of Bryan Johnson's $2-million-a-year program. Her budget: about $100 a month.
>
> Longevity is drowning in noise. Julie cut through it — kept what moves the needle, dropped what didn't.
>
> Join our exclusive masterclass live on Zoom, where Julie reveals her unique protocol: sleep, food, movement, the few supplements she kept, and the testing that proves it works.
>
> One-time Longevity Life Academy event. Seats are limited.
>
> Dates
> Tue, Oct 27 · 7:00 pm ET (4:00 pm PT)
> Sat, Nov 14 · 1:00 pm ET (10:00 am PT)
>
> Tickets
> Masterclass $49
> VIP Access $79 — plus a private 30-min Q&A with Julie and a $249 credit toward the full Longevity Blueprint course
>
> Link in bio.
>
> #longevity #healthyaging #juliegibsonclark #longevitylifeacademy

Publishing facts: the connector token lacks `pages_manage_posts` → cannot post to the Page by API; Omri posts from Ads Manager/Meta Business Suite or grants the permission. A Page post cannot tag a group; groups are reached by sharing the Page post from a member profile. Link for the post: the masterclass URL with `utm_source=facebook&utm_medium=organic&utm_campaign=julie0930&utm_content=<group>&utm_term=<poster>` (kit v2 uses `utm_campaign=julie0930&utm_medium=group`). Pending Omri: which link/UTMs and which Page.

### 11.2 Groups (largest first; Bryan Johnson groups excluded; counts third-party)
Anti Aging, Biohacking & Longevity Knowledge 25K · BioHackers (GLOBAL) 18K · Age Reversal Protocols 17.8K · Dr David Sinclair Fans 17.8K · Medicine 3.0: High-Performance Aging & Longevity 15.1K (facebook.com/groups/1748665035269223) · FoundMyFitness (Rhonda Patrick) 14.2K · Bio Hacker Tribe 12K · Immortality (Lifespan.io/SENS) 10.4K · Ending Aging: SENS 10K · Life Extension & Anti-Aging NAD/NMN 6.8K (facebook.com/groups/455921274493833) · International Longevity Alliance 6.5–7.1K (facebook.com/groups/longevity.alliance) · Dr. Peter Attia Fans 4.8K · Dave Asprey's BEYOND (facebook.com/groups/biohackingconference). Sources: thehiveindex.com/topics/longevity/platform/facebook/, outliyr.com/biohacking-facebook-groups, longevityadvice.com/longevity-facebook-groups/. Full 115-group kit with per-group tracked links, poster/wave scheduler, share cards and DM templates: private repo `gitteromri-ux/julie-groups-uplift` (a9ba890). Most groups ban self-promotion without admin approval; automation gets the profile and linked IG banned (never automate).

### 11.3 Creative assets
- Full Julie film 2:19: `https://longevitylifeacademy.pages.dev/assets/julie-film-v20260927/`; masterclass edit (2:19, offer cards rewritten to masterclass copy, v2 headline "Longevity Masterclass of the Year / Claim your seat.") in `gitteromri-ux/lla-masterclass-assets` tile 18 (commits 8e47988, a1a853b).
- 65s Ad#12 video: Meta video ID 28073238119010653 (Blueprint history) and per-placement uploads 1076147518617785 / 1071020772591512 / 1698029105269428 ("Julie – 65s Final JUSTIN.mp4"). 90s Ad#11 video also on the Page.
- Static banners (card-gold/blue, zoom-gold/blue, original7c, 7B/7C): review previews `julie-banner-readable-preview`, `julie-current-ad-inventory-preview`; repo `gitteromri-ux/lla-meta-ig-ad-sizes` for sizes.
- UGC ads (not approved, no finished approved video): `gitteromri-ux/lla-julie-ugc-ads` → https://gitteromri-ux.github.io/lla-julie-ugc-ads/ (ad1-man42, ad2-woman42 done; ad3-woman51 blocked by Artlist credits until 16 Oct).
- Storyboards/scripts: `gitteromri-ux/courtney-lla-masterclass`, `gitteromri-ux/longevity-productions-courtney-julie`, `gitteromri-ux/lla-julie-cuts`, `gitteromri-ux/lla-courtney-cuts`.
- Emails: `gitteromri-ux/lla-masterclass-emails` (20 emails, 5 funnel groups; ActiveCampaign field-only model).
- Plan decks: `gitteromri-ux/julie-500-launch-plan`; Blueprint activation hub `gitteromri-ux/lla-delta-force`; board report project `lla-gal-september-2026`.

---

## 12. HEY AI TOOL — OPEN ITEMS AND WHO OWNS THEM

| Item | Owner | State |
|---|---|---|
| Approve/reject set 03 placement + cost-per-result goal (section 9.1 A/B) | Omri | waiting |
| Tell Anant: no Meta edits without written go | Omri | not sent |
| Verify "Women +80%" value rule live or not (Ads Manager UI) | next tool | open |
| Organic post: link/UTMs, Page, who shares into groups | Omri | waiting |
| `og:image` fix on masterclass page | Omri (freeze-lift sentence) → tool | waiting |
| Julie's sign-off on the masterclass page | Omri/Julie | open (USER-REPORTED) |
| VIP CRM + payment proof (VIP $79 flow end-to-end with a real buyer) | tool, after Omri OK | 1 real VIP order exists (28 Sep); no full audit |
| Week-2 enrollment gap vs plan (500 by ~11 Oct) | Omri | open |
| Blueprint: real paid purchase proof on the copies; relay logs; second server sender; US state field | tool | open (see 10.2) |
| September board report (`lla-gal-september-2026`): trusted figures, no pixel-test conversions as sales | tool | open |
| Anant's spare masterclass sets #108816/17/18 and Blueprint test sets — delete or leave paused | Omri | leave paused |

---

## 13. HEY AI TOOL — ACCESS. What you have, what you don't, how Omri grants more

No passwords, tokens or API keys are stored in this document, in any repo, or in any handover file. Everything below is connector-based or granted by Omri.

| System | How a Perplexity tool reaches it | Scope verified | Missing / how to grant |
|---|---|---|---|
| Meta Marketing API | bash with `api_credentials=["meta_ads"]`, `TOK="$META_ACCESS_TOKEN"`, Graph v25.0 | ads_management, ads_read, business_management, leads_retrieval, pages_manage_ads, pages_read_engagement, pages_show_list on act_1459085242361281, Page 1179505785236150, pixel 1440305917310328 | `pages_manage_posts` (organic posting) — Omri re-authorises the Meta connector with that permission; Advertiser role on Page 1036363559571443 — Omri grants in Business Manager 1545475089051742 |
| Meta Ads Manager UI | Omri's logged-in Comet/local browser only | | Business Manager 1545475089051742 admin: Omri / eTeacher |
| GitHub | `api_credentials=["github"]` (Omri's `gitteromri-ux`); clone private repos over HTTPS with the injected token | member of org `Longevity-Academy` (repos `julie-masterclass`, `Longevity-Academy.github.io`); all `gitteromri-ux/*` repos | none needed |
| Vercel | connector, team GITTER / gitter1 (team_QsIIEvdvnmtyD40s3mcnka6k) | read; `lla-ac-events` deployments visible | **no deploy/promote permission** (by design during freeze); to promote a deployment Omri uses the Vercel dashboard |
| Cloudflare Pages (`longevitylifeacademy`) | credential "LLA Funnel Deploy (Cloudflare)" saved in Omri's credential store | deploy verified 26 Sep | Pipedream Cloudflare connector is broken (Invalid X-Auth-Key) — never use |
| ActiveCampaign | connector `activecampaign__pipedream` | write to field `LGV_checkout_events` (206) only | no lists/tags/fields creation allowed |
| Google Calendar / Gmail | connector `gcal` | Omri's calendar & mail | — |
| Google Drive / Sheets, GTM, Wix, DocuSign, Jotform | connectors present | not used for LLA Meta work | — |
| eTeacher CRM / `eteacher-leads-proxy` Worker / Airwallex | no direct access | — | eTeacher IT (Roberto / Sandra named in logs) |
| WhatsApp business line | wa.me/12015023701 (IIBS) on all three sites since 17 Sep 09:25 IDT | — | eTeacher |
| handover-master | `gitteromri-ux/handover-master` (this doc lives in `projects/julie-meta-handover-20260930/`); `_today-log.md` is the live change log; `_global-rules.md`; `projects/julie-tracking-freeze/` | | — |

### 13.1 People
Omri Gitter (CEO/owner, all approvals) · **Anant Gautam** (Meta editor at eTeacher — creates/edits ads and ad sets; every edit resets learning) · Ronen & Justin (video files; "Julie – 65s Final JUSTIN.mp4") · Courtney (LLA presenter, Blueprint videos) · **Julie Gibson Clark** (talent; sign-off pending) · Roberto (CRM, brand checkout URL router request 27 Sep) · Sandra (ActiveCampaign field owner) · Gal (September board report recipient).

### 13.2 Fast Meta pulls (copy-paste; answer in <60 s)
```bash
# in bash with api_credentials=["meta_ads"]
TOK="$META_ACCESS_TOKEN"; G(){ curl -s -G "https://graph.facebook.com/v25.0/$1" "${@:2}" --data-urlencode "access_token=$TOK"; }
# today per ad set, masterclass
G 52668266203628/insights --data-urlencode "level=adset" --data-urlencode "date_preset=today" \
  --data-urlencode "fields=adset_name,adset_id,spend,impressions,cpm,inline_link_clicks,actions,action_values" \
  --data-urlencode "action_attribution_windows=['7d_click','1d_view']"
# lifetime per ad, both campaigns (swap campaign id 52663511211628 for Blueprint)
G 52668266203628/insights --data-urlencode "level=ad" --data-urlencode "date_preset=maximum" \
  --data-urlencode "fields=ad_name,ad_id,adset_id,spend,impressions,cpm,inline_link_click_ctr,actions,action_values,quality_ranking"
# placement / age-gender breakdowns: add --data-urlencode "breakdowns=publisher_platform,platform_position"  or  "breakdowns=age,gender"
# hourly (account timezone = Israel): --data-urlencode "breakdowns=hourly_stats_aggregated_by_advertiser_time_zone"
# ad set config
G 52668330165828 --data-urlencode "fields=name,status,daily_budget,bid_strategy,bid_amount,optimization_goal,attribution_spec,targeting,learning_stage_info,promoted_object"
# who changed what
G act_1459085242361281/activities --data-urlencode "since=2026-09-28" --data-urlencode "fields=event_time,event_type,actor_name,object_name,object_id,extra_data" --data-urlencode "limit=500"
# pixel purchases by host
G 1440305917310328/stats --data-urlencode "aggregation=host" --data-urlencode "event=Purchase" --data-urlencode "start_time=2026-09-24"
```
Actions: `landing_page_view`, `add_to_cart`, `initiate_checkout`, `purchase`; purchase value in `action_values`. Custom-audience listing on the account fails with "reduce the amount of data" — query a single audience ID instead.

### 13.3 Glossary Omri expects you to know
- **7-day click / 1-day view** = Meta attribution window: a purchase is credited if the buyer clicked an ad in the last 7 days or saw one in the last day. Ad set 2 (Blueprint original) was on 1-day click only, hence "not apples to apples" with 7d sets.
- **LPV** = landing page view (page loaded after the click; ~90% of link clicks). **ATC / IC** = AddToCart / InitiateCheckout pixel events (on the masterclass: ATC = enrollment form Continue, IC = checkout screen after CRM order creation).
- **CPM** = cost per 1,000 impressions. **Highest volume** = LOWEST_COST_WITHOUT_CAP. **Cost per result goal** = COST_CAP. **Learning phase** = first ~50 optimisation events per ad set in 7 days; any "significant edit" (budget change >~20%, targeting, creative, bid) restarts it.
- **ABO** = ad-set budgets (this account), not campaign budget (CBO).
- **GOLDEN CAPI** = Omri's code name for a tracking state proven by a real attributed purchase; frozen, never changed in place.
- **Guard** = `verify_julie_tracking.py`; its output is the only allowed source for "tracking OK" statements.
- **Synthetic test** = any event fired without a real buyer; proves nothing; forbidden on the live pixel.

---

## 14. HEY AI TOOL — MISTAKES ALREADY MADE (so you do not repeat them)
1. Reported set 03 "paused" from a stale read (13:03) after Anant activated it (14:28) → always re-read status before stating it.
2. Changed the stated cause of poor performance between messages → pull everything first, state once.
3. Delivered a PNG chart → costs credits; tables only.
4. Suggested pausing set 01 statics although zoom-gold has a purchase, and said original7c was cheapest while it was already paused (11:02) → check current status of each ad before recommending.
5. Compared Blueprint copies to masterclass sets as apples-to-apples → they differ in post history and product; say so.
6. Duplicated ads onto the wrong Page without approval (28 Sep) → any identity/creative/link change during a duplicate needs written approval.
7. Renamed ad sets with a suffix after `#` → never.
8. Ran synthetic tracking tests and called them proof → never.
9. Gave email/page recommendations unasked → appendix only.

---

## APPENDIX A — page/funnel observations (Omri: recommendations only here, none executed)
- `og:image` on the masterclass page is a portrait video frame; group shares show a blurred crop (needs freeze-lift).
- The Continue button on the phone enrollment dialog is now sticky (v9.9 + ea36be0); the pricing slider shows Masterclass 448 px / VIP 517 px cards.
- LPV→purchase 2.1% on 94 visits is a small sample; the number that decides the plan is cost per visit, not conversion rate.
- Blueprint US step-1 form: "Please select your U.S. state" may block; untested on a real phone.

## APPENDIX B — file index
- This doc: `handover-master/projects/julie-meta-handover-20260930/HANDOVER-JULIE-BLUEPRINT-20260930.md`
- Data: `…/data/` (see top) incl. `timeline_meta.txt` (538 filtered account events 1–30 Sep, IDT) and `activities_full.json` (2,893 raw events).
- Golden record + guard: `handover-master/projects/julie-tracking-freeze/` (README.md, golden.json, verify_julie_tracking.py, relay byte copy).
- Live change log: `handover-master/_today-log.md`. Rules: `handover-master/_global-rules.md`. Project pages: `handover-master/projects/julie-live-masterclass.md`, `lla-course-checkout.md` (Blueprint truth table), `lla-masterclass-emails.md`, `julie-gibson-clark-plan.md`.
- Session artifacts from this thread: `Julie masterclass · spend, LPV, cost per LPV by hour (Israel time)`, `Julie masterclass tracking: golden state and 4-week freeze`, `Julie and Blueprint: full attribution parameter audit`, `Blueprint tracking-only correction`, `Perplexity compliance case: agreement of 28 Sep 2026 and record since`.
