# Retrofit log: Bone & Joint Health (`book/chapters/bone-health-osteoporosis.qmd`)

Files changed: the chapter, `book/diagrams/bone-bank.yml`, `book/quizzes/bone-health-osteoporosis.quiz.yml`,
`book/cases/madam-lim-bone.case.yml`, `book/cases/mr-tan-joint.case.yml`. Nothing else touched.

## Summary of changes

- **Opener** rewritten as a two-sentence italic hook (no "you", no "This chapter"); the altitude sentence
  ("You will not prescribe…") was dropped here, and its content stays in the recognise-and-refer callout.
- **Learning objectives** (6) and a **chapter map** (4 branches = the 4 movements, with children) added.
- **Section ids** added to every `##`/`###` (chapter-prefixed `sec-bone-*`); the 3 figure ids are unchanged.
- **Term ownership** (term-ownership.md overrides the plan's conditional): osteoclast and osteoporosis are
  owned here, so the plan's *fallback* was used: osteoporosis is bold-defined in the at-a-glance, and
  osteoblasts/osteoclasts are pre-taught in a definition list. Bold-defined here: osteoporosis,
  osteoarthritis, gout, acid-ash hypothesis, urate, purines, rheumatoid arthritis; definition lists mark
  osteoblasts, osteoclasts, OSTA, FRAX, T-score and fragility fracture. Terms owned elsewhere are now
  unbolded (peak bone mass, CKD–mineral and bone disease, menopause, RANKL, mechanical loading, IGF-1, DXA,
  bioavailability, insulin resistance) with a pointer or plain gloss where needed.
- **§11g voice:** 26 em dashes → 0; bold 27.1 → 3 per 1,000 words; italic emphasis removed; "myth",
  "leverage", "organizing", "the elderly", "landmark", "actually", "genuinely" (except "genuine
  deficiency/shortfall") removed; the chapter is never the subject of an action verb; every movement intro
  and roadmap sentence deleted; cross-references use canonical names, the first mention of each chapter is
  a link. Vague "guideline bodies" in the vitamin D section named as the Endocrine Society guideline (its
  cited source). ACE, ACR, OARSI and NICE expanded once.
- **Common beliefs:** headings retitled as neutral questions: "Does protein leach calcium from bone?", "Do
  salt, caffeine and cola harm bone?".
- **§11j passes / form by relation:** at-a-glance inline-header list → plain bulleted principles; the
  three-nutrient inline-header list → a 3-row Nutrient | Role | How it acts table, with the vitamin D causal
  chain kept in prose beside it; vitamin D causes, the 🍜 calcium foods, the three contested claims, the gout
  urate raisers/lowerers and the close's recommendations → bulleted lists; OSTA/FRAX/T-score/fragility
  fracture → a definition list before the diagnostic sentence; an evidence spectrum added under *The joints*
  (every node is a claim the movement makes and cites; no figure or island shows it). Long paragraphs split
  (OA 230 words → 3; gout 280 words → 5 blocks); long sentences split; citation clusters split by claim
  (key set and counts unchanged). The Hernandez "higher peak" paragraph moved to sit directly after the
  bone-bank island it interprets; the vitamin D figure moved beside the mechanism sentence.
- **Check yourself:** 6 collapsed callouts, 1–2 at the end of each `##` movement (CY1 three conditions; CY2
  living bank; CY3+CY4 bone levers; CY5+CY6 joints).
- **Close:** the summary-and-Part-IV paragraph replaced by two short recommendation lists answering the
  heading's question.
- **Practise paragraphs** trimmed to a setup (they duplicated the case intro nodes and telegraphed the MCQs).
- **Island data:** bone-bank `intro` reduced to the one instruction sentence; `caption` removed and `credit`
  trimmed because both repeated the chapter paragraph beside the island (decision 9, §11i.8; the component
  renders the caption only when present). Comment header de-dashed (not rendered).
- **Quiz/case YAML:** every "Correct."/"Right."/"Exactly" opener removed; all em dashes (42 + 47 + 39)
  replaced; emphasis bold removed from stems, options and feedback (cases keep at most one warning per
  node); "OA" → "osteoarthritis"; GAIT/Wandel trial names (never named in the chapter) removed from
  student-facing text; "busted/busting… myth" and "this chapter's altitude" removed; "Menopause & Midlife
  Health chapter" as owner → parenthetical "see the *…* chapter"; options rebalanced to similar lengths; no
  two consecutive feedbacks share an opening word (checked by script).

## Gate and checks

- Citation multiset: identical (74 keys, every count).
- Islands 4 → 4; callouts 4 → 11 (+1 Learning objectives, +6 Check yourself); table separators 1 → 2 (+ the
  nutrient-roles table); figures 3 → 3; HEAD ids (`fig-disambiguation`, `fig-calcium-bio`, `fig-vitd-axis`)
  all present.
- copy-audit on the 5 files: 0 flags; chapter 0 em dashes, bold 3/1,000 words, "rather than" 2, `you` 7
  tokens on 5 lines (2 clinician-in-practice: "When you advise a patient", "When you counsel a patient with
  gout" + its quoted patient message; 2 island instructions "Your choices branch the case").
- YAML: all 4 files load with js-yaml. validate-cases: OK for both cases (MCQ-only, no patient-chat).
- grep for "honest", "bisphosph", "GAIT", "Wandel", "OA", "myth", "this chapter" in rendered text: none.

## Content fixes (decision 1 categories)

| File | Location | Before | After | Category |
|---|---|---|---|---|
| chapter | Opener (row added in fix round 1) | "one true lever (weight) and a best-selling supplement that does not work" | "their main lever is weight loss (or, for gout, a drug), and their best-selling supplement does not work" | Internal contradiction (the chapter's cited gout text makes a urate-lowering drug the strong lever) |
| chapter | Gout, final parenthesis | "The metabolic drivers (obesity, insulin resistance) and the kidney's role in urate belong to the *Obesity & Metabolic Syndrome* and *Chronic Kidney Disease* chapters." | "(The metabolic drivers of gout, obesity and insulin resistance, are covered in the *Obesity & Metabolic Syndrome* chapter.)" | Cross-reference to a chapter that does not cover the topic (the CKD chapter never mentions urate or gout) |
| chapter | Living bank P1 | "a genetically-set **peak bone mass**" | "peak bone mass, which is mostly inherited" | Internal contradiction (the chapter's cited text says 20–40% is modifiable; the quiz says "mostly inherited") |
| chapter | Close | "With that, Part IV is complete, from the diseases of *too much* … stay well." | deleted | Internal contradiction with book structure (*Brain Health & Dementia* now follows in Part IV) |
| quiz | q8 a feedback | "The bone scans, fracture thresholds, bisphosphonates and hormone therapy are specialist decisions." | "Osteoporosis drugs and hormone therapy are specialist decisions." | Quiz contradicts chapter (the chapter has the generalist refer for DXA using OSTA/FRAX) |
| quiz | q8 b option | "Start a bisphosphonate and titrate it to the scan" | "Start an osteoporosis drug and titrate it to the scan" | Quiz vs chapter terminology (bisphosphonate never taught in the chapter) |
| quiz | q8 stem | "A patient's **fragility fracture** and low weight worry you." | "An older woman's fragility fracture and low weight worry you." | Internal inconsistency in the item (options c and d refer to "she", "her age") |
| quiz | q2 c option | "Only if eaten raw, which frees up the calcium" | "Only if cooked, which frees up the calcium" | Option contradicted its own feedback (which is about cooking) |
| case (Madam Lim) | q-drug b option; remedial-drug ¶2 | "start a bisphosphonate today"; "a bisphosphonate today is the wrong reflex" | "start an osteoporosis drug today"; "an osteoporosis drug today is the wrong reflex" | Case vs chapter terminology (bisphosphonate never taught in the chapter) |
| diagram (bone-bank) | intro | "you build it to a peak by about 30" | removed (intro is now the instruction sentence only) | Island contradicts chapter's cited "late twenties" |

## Deferred content concerns (source-checking or out of scope)

1. *The Singapore picture* sits between *The bone levers* and *The joints*, not after all movements (§11c).
   Decision 4 permits moving it, but its OSTA/FRAX/T-score/fragility-fracture definition list must precede
   the recognise-and-refer callout and the cases, so moving it needs those definitions relocated (prose
   rewrite). Kept in place, per the plan's recommendation; author to decide.
2. LIFTMOR (`@watson2018liftmor`) is named without its limits; *Menopause & Midlife Health* calls it "one small,
   supervised trial" and its comparator was low-intensity home exercise. "landmark"/"actually" were removed;
   adding "small" needs a source check.
3. Calcium-requirement lead-in mentions a raised need in pregnancy and lactation, but the table has no such row.
4. `@weaver2016cavitd` (~15% total, ~30% hip fractures) pooled community-dwelling and institutionalised
   adults; the chapter, quiz q7 and the Madam Lim case attribute the effect to "genuinely deficient or
   institutionalised" people. Check the subgroup framing against the source.
5. ESCEO sentence ("an industry-linked minority position that independent panels reviewed and did not
   accept") is cited only to ESCEO's own paper (`@bruyere2018esceo`), which cannot support it.
6. Age at peak bone mass differs across the book: "late twenties" (this chapter), "~30" (BoneBank.svelte
   label, model PEAK_AGE and FALLBACK text), "around age 30" (*Micronutrients*), "early twenties"
   (*Childhood & Adolescence*).
7. "Age … more than halves the skin's capacity to make vitamin D" is stated flatly; *Healthy Ageing* notes
   newer work questions the size of the effect.
8. BoneBank.svelte (not owned) hard-codes "women lose bone faster for ~7 years afterwards"; *Menopause &
   Midlife Health* puts accelerated loss from ~1 year before to 2–3 years after the final menstrual period.
9. "Cooking doesn't release oxalate-bound calcium" (quiz q2 c, Madam Lim q-spinach c) is not in the chapter
   and is contestable (boiling leaches some soluble oxalate).
10. Quiz q2 a and Madam Lim q-spinach a give "about half" absorbed from kai-lan/bok choy; the chapter and its
    figure say only "better still".
11. Quiz q6 a/c say low weight is "built into" FRAX; the chapter does not state this (true, but uncited here).
12. At-a-glance: after splitting the citation cluster by claim, "gout … common" sits beside
    `@leung2018sgkoa`, a knee-osteoarthritis prevalence study; gout prevalence has no supporting source.
13. Gout pointer: *Obesity & Metabolic Syndrome* covers obesity and insulin resistance but never links them
    to urate or gout; the claim that they are gout's metabolic drivers is uncited.
14. Vitamin D: the Endocrine Society 2024 guideline (`@demay2024endoSocVitD`) suggests empiric supplementation
    for some groups (e.g. older age, pregnancy); check the chapter's "advises against … empiric
    supplementation in otherwise healthy adults" framing against it.
15. Duplicate bib entries: `ye2023daha` = `ye2023calciumSG`; `nofPeakBoneMass2016` =
    `nof_weaver_2016_pbm_position` (bib, not owned).
16. (Added in fix round 2.) IDEA (`@messier2013idea`, `@messier2018morebetter`) is named without its limits
    (§11d); add design and size after a source check. Named in: the OA paragraph ("In the IDEA trial, …"), the
    joints Check yourself answer, quiz q10 a feedback, and the Mr Tan case (objective 3, q-lever a feedback,
    end-good keyPoints). Text left unchanged.

## Deferred backlog (house blocks, figures, big restructures)

- Only a 🍜 block exists; 🔬 Food science and 🍳 Healthy kitchen blocks are absent (e.g. calcium-set tofu
  chemistry; cooking greens). Deferred per decision 4.
- *The bone levers* carries six `###` sub-topics; splitting it (e.g. nutrients vs supplements and
  contested claims) is a movement split, deferred per decision 4.
- A teaching figure for the gout mechanism (purines → urate → crystals) or the OA load–inflammation
  mechanism would serve §11f; deferred (new figures).
- BoneBank.svelte (not owned) keeps em dashes, ALL-CAPS and the old intro/caption in its FALLBACK object and
  its readout warning; align it with the new YAML when components are next edited.
- Glossary rows below to be merged into `book/glossary.qmd` by the integrator.

## Glossary rows owned (Introduced in: Bone & Joint Health)

| Term | Meaning | Introduced in |
|---|---|---|
| Acid-ash hypothesis | The belief that dietary protein leaches calcium from bone; with adequate calcium, higher protein is instead linked to fewer hip fractures | Bone & Joint Health |
| Fragility fracture | A break from a fall from standing height or less; any fragility fracture defines osteoporosis | Bone & Joint Health |
| FRAX | A tool that estimates 10-year fracture probability, with Singapore-calibrated models | Bone & Joint Health |
| Gout | A metabolic disease of urate handling, in which uric acid crystals inflame the joint | Bone & Joint Health |
| OSTA | An Asian screen, based on age and weight, that flags who needs a bone scan | Bone & Joint Health |
| Osteoarthritis | Worn, painful joint cartilage; the commonest arthritis | Bone & Joint Health |
| Osteoblast | A bone-forming cell that lays down new bone | Bone & Joint Health |
| Osteoclast | A cell that resorbs (breaks down) old bone | Bone & Joint Health |
| Osteoporosis | Low bone density, silent until a bone breaks; defined by a DXA T-score of −2.5 or below or any fragility fracture | Bone & Joint Health |
| Purines | Compounds, rich in red and organ meat and some seafood, that the body breaks down into urate | Bone & Joint Health |
| Rheumatoid arthritis | An autoimmune joint disease managed with disease-modifying drugs | Bone & Joint Health |
| T-score | Bone density on a DXA scan, expressed in standard deviations from the young-adult peak; −2.5 or below defines osteoporosis | Bone & Joint Health |
| Urate | Uric acid; its crystals inflame the joint in gout | Bone & Joint Health |

## Owner terms (term-ownership.md) not found in the chapter

None: all 13 terms owned by Bone & Joint Health occur and are defined here.

## Fix round 1 (verifier findings)

Files changed: the chapter, the quiz, both cases. `bone-bank.yml` untouched this round.

### Structure (decision 4, whole-block moves, no prose rewrite)

- *The Singapore picture* (`#sec-bone-singapore`, whole block incl. the OSTA/FRAX/T-score/fragility-fracture
  definition list) moved from between *The bone levers* and *The joints* to after *The joints* (after the gout
  Check yourself), immediately before the close: the §11c order is now movements → Singapore → close.
  Deferred concern 1 above is resolved.
- The *Recognise and refer, for bone and joints alike* callout moved from the end of the RA subsection to the
  end of the relocated Singapore picture, after the "T-score of −2.5 or below … defines osteoporosis"
  paragraph, so OSTA, FRAX and the T-score are defined before the callout uses them. *The joints* now ends
  with its two Check yourself callouts.
- ACE expansion moved to its new first use (OA guideline sentence: "Singapore's Agency for Care Effectiveness
  (ACE)"); the Singapore picture now says "the national ACE guidance".

### Restored claims (round-0 edits that changed meaning without a log entry)

| File | Location | Round-0 text | Now | Reason |
|---|---|---|---|---|
| chapter | OA, supplements sentence | "no better than placebo … in trials" | "… in the major independent trials" | Round 0 broadened HEAD's "in the landmark trials" to all trials (contradicts the ESCEO sentence) |
| quiz | q9 a feedback | "… pain or joint structure in trials," | "… in the major independent trials," | Same broadening (HEAD: "in the landmark trials (GAIT, Wandel)") |
| case (Mr Tan) | q-supplement a / b feedback; end-partial | "in trials"; "the trials found no meaningful benefit"; "(the trials found no real effect" | "in the major independent trials"; "the major independent trials found no meaningful benefit"; "(the major independent trials found no real effect" | Same broadening; "the trials" had no antecedent once GAIT/Wandel were unnamed |
| case (Mr Tan) | remedial-supplement | "In trials they were no better than placebo" | "In a large independent trial they were no better than placebo" | HEAD described one trial (GAIT); "in trials" contradicted "the benefit shrank the more independent the trial" |
| case (Madam Lim) | q-bmi b option | "…, and sun is plentiful." | "…, and no one here lacks vitamin D." | Round 0 made the second premise true (quiz q3: "The tropical sun is ample"), so the feedback "Both are wrong." no longer fitted; restored a false premise the feedback refutes |
| chapter | Calcium, spinach sentence | "absorption varies widely"; "a poor source for bone, and the tofu beside it a good one" | "absorption varies enormously"; "nearly useless for bone, and the tofu beside it an excellent source" | HEAD strength restored (round 0 weakened it unlogged). The fig-calcium-bio caption's closing sentence ("Content is not availability: the spinach … is nearly useless for bone.") stays cut, as it repeats this sentence beside the figure (decision 9) |
| chapter | At-a-glance principle 3 | "Calcium and vitamin D correct real deficiency" | "Calcium and vitamin D help people who are genuinely short" | HEAD claim of benefit in the deficient restored |
| chapter | At-a-glance paragraph | "**Osteoarthritis** (…), especially of the knee, and **gout** … are common too, and heavily marketed with supplements" | "Knee **osteoarthritis** (…) and **gout** … are common too, and supplements are heavily marketed for both" | Prevalence claim re-scoped to knee osteoarthritis, matching HEAD and `@leung2018sgkoa`; grammar fixed |
| chapter | Refer callout; Singapore picture | "never prescribed by the generalist"; "the generalist signposts them" | "never prescribed at this level"; "at this level they are signposted, not managed" | Round 0 hardened HEAD's altitude statement ("from here") into a claim that generalists never prescribe (contradicted by the cited SG primary-care gout cohort) |
| chapter | CKD aside | "bone disease, covered in the *Chronic Kidney Disease* chapter.)" | "bone disease, which is recognised and referred; see the *Chronic Kidney Disease* chapter.)" | HEAD's recognise-and-refer cue restored (semicolon instead of the suggested nested parentheses) |
| chapter | Protein | (verdict dropped) | "The belief draws on the extra calcium … after a protein meal. The evidence points the other way: that calcium comes from better intestinal absorption …" | HEAD verdict restored; placed after the belief's origin, per the §11g common-beliefs order (belief → origin → evidence) |
| chapter | Glucosamine callout | "These supplements are physically fairly safe" | "The do-no-harm point is subtle: these supplements are physically fairly safe" | HEAD naming of the do-no-harm point restored (Mr Tan objective 4 builds on it) |
| case (Mr Tan) | q-harm a option | "It's fairly safe; the harm …" | "It's fairly safe physically; the harm …" | "physically" carries the node's distinction |
| case (Madam Lim) | q-bmi a option | "Both are red flags, for fracture and for vitamin D deficiency." | "Both are red flags: low weight for fracture, her covered life for vitamin D." | Restores HEAD's pairing of each flag with its risk |

### Further content fixes (decision 1 categories)

| File | Location | Before | After | Category |
|---|---|---|---|---|
| chapter | Opener | "one true lever (weight) and a best-selling supplement that does not work" (HEAD) | "their main lever is weight loss (or, for gout, a drug), and their best-selling supplement does not work" (kept from round 0; row now also in the content-fix table above) | Internal contradiction (the chapter's cited gout text makes a urate-lowering drug the strong lever) |
| quiz | q4 a feedback | "Guideline bodies also advise against routine testing and empiric dosing in healthy adults;" | "The Endocrine Society guideline also advises against …" | Quiz vs chapter (the chapter names the cited guideline) |
| chapter | Gout, first sentence | "Gout is the one joint condition where diet matters" | "Gout is the one joint condition where particular foods matter, if only modestly" | Internal contradiction (weight loss through diet is the OA lever; diet nudges urate "only modestly") |
| chapter | Joints evidence spectrum | two nodes: "Weight loss of about 10% in knee osteoarthritis: less pain, better function" then "Urate-lowering drug to target in gout: the strong lever" | one node at the proven end: "The real levers: about 10% weight loss in knee osteoarthritis; a urate-lowering drug to target in gout" | Diagram implied an evidence ranking the chapter never makes |
| chapter | Gout parenthesis | "(The metabolic drivers of gout, obesity and insulin resistance, are covered in …)" | "(Obesity and insulin resistance, the metabolic drivers of gout, are covered in …)" | Read as a list of three, and implied the Obesity chapter covers gout |

### Style fixes (§11g/§11h/§11j)

- Hernandez sentence (50 words) split; "and the two must not be conflated" dropped as redundant with the new
  second sentence. The citation stays with the modelled finding.
- Refer callout: "There is no drug regimen to memorise here, for either system." deleted (metacommentary).
- *Do salt, caffeine and cola harm bone?*: closing aside "A claim is worth placing in one group or the other
  before it is repeated to a patient." deleted (no antecedent for "group"; the verifier allowed deletion).
- Heading "Supplements: correct deficiency, don't dose everyone" → "Supplements: for deficiency, not for
  everyone" (imperative → topical, §11h); chapter-map node changed to match. Id unchanged.
- Check yourself (supplements) title now specifies "living at home with a calcium-adequate diet and no risk
  factors for deficiency", so "She belongs to the second group" (replete, community-dwelling) follows.
- Cases: "altitude" (AUTHOR jargon, untaught) → "the generalist's role" / "scope-of-practice" (Madam Lim
  objective 4, remedial-drug, end-good, end-partial; Mr Tan end-good). Emphasis bold on "do-no-harm" removed in
  both end-good nodes. "slipped on at least one key point" → "… one point" in both end-partial nodes.
- Line re-wraps in the OA, glucosamine-callout and gout paragraphs (no wording change).

### Logged rather than restored

- HEAD's "This is the chapter's most important caveat, because it is where good intentions go wrong." (before
  the supplements evidence) stays deleted. The verifier's rephrase ("This is the most important caveat on
  bone, …") still tells the reader something is important rather than stating the fact, which §11g
  ("Do not tell the reader that something is important") and §11h (cut "the single most important thing…")
  rule out; the heading and the section's "food first" conclusion carry the emphasis.
- HEAD's framing link "This chapter is the other half of the deficiency-and-frailty pair the *Undernutrition &
  Malnutrition* chapter opened." stays deleted. It depended on the old Part IV ending ("Part IV … closes with
  too little"), which the *Undernutrition & Malnutrition* chapter no longer says and which *Brain Health &
  Dementia* now follows; same category as the deleted "Part IV is complete" close. The muscle–bone link to that
  chapter remains in the protein subsection.

### Gate and checks after fix round 1

- Citation multiset vs HEAD: identical (73 distinct keys, every count unchanged).
- Islands 4 → 4; callouts 4 → 11 (unchanged from round 0: +1 Learning objectives, +6 Check yourself); table
  separators 1 → 2; figures 3 → 3; HEAD ids `fig-disambiguation`, `fig-calcium-bio`, `fig-vitd-axis` present;
  all round-0 `sec-bone-*` ids present (none renamed).
- Heading order: at a glance → Three conditions → Living bank → Bone levers → The joints → The Singapore
  picture → close → quiz → cases.
- copy-audit (5 files): 0 flags; chapter 0 em dashes, bold 3/1,000 words, "rather than" 2, `you` 7 (unchanged:
  clinician-in-practice and island instructions).
- YAML: bone-bank, quiz and both cases load with js-yaml. validate-cases: OK (madam-lim-bone, mr-tan-joint).

## Fix round 2 (verifier findings)

Files changed: the chapter, the quiz, both cases. `bone-bank.yml` untouched this round. All 27 findings were
addressed; one optional sub-suggestion was declined (see *Not applied*).

### Restored claims (earlier edits that changed meaning without a log entry)

| File | Location | Before (end of round 1) | Now | Reason |
|---|---|---|---|---|
| chapter | Mechanical loading callout | "In a supervised trial, high-intensity resistance and impact training raised bone density … safely" | "In a trial, supervised high-intensity resistance and impact training raised bone density … safely" | Clinical-safety meaning restored. In HEAD "supervised" qualified the training, and the safety finding applies to supervised training; when round 0 cut "landmark", "supervised" moved onto the trial, so "safely" described unqualified high-intensity impact training in women with low bone mass. Not logged in round 0 |
| chapter | Opener | "while the joints have almost the mirror-image story" | "while osteoarthritis and gout have almost the mirror-image story" | HEAD scope restored ("Worn cartilage (osteoarthritis) and urate crystals (gout)"). The round-0 wording extended the claim to rheumatoid arthritis, which this chapter manages with disease-modifying drugs and whose supplement (fish oil) modestly helps |
| chapter | Sentence after the nutrient table | "A shortfall of vitamin D therefore means calcium passes through unabsorbed, …" | "Because vitamin D's active form drives calcium absorption, a shortfall means calcium passes through unabsorbed, … [@laird2010vitDbone]." | The key again covers both the mechanism and its consequence, as HEAD's single bullet did (key count unchanged); the mechanism had been left in an uncited table cell |
| chapter | Same sentence | HEAD: "calcium passes through uneaten" | "calcium passes through unabsorbed" (round-0 change, now logged) | Wording slip corrected toward the stated mechanism (the calcium is eaten but not absorbed) |
| chapter | Protein | "it drives the growth factor IGF-1" | "it drives the bone-building growth factor IGF-1" | HEAD wording restored; the unlogged cut left the chapter not saying what IGF-1 does for bone (the table row, unchanged, follows HEAD's bullet) |
| chapter | Contested risks | "The solid dietary risks are low intakes of calcium, vitamin D or protein, low body weight and heavy alcohol" | "The solid dietary risks are low calcium, vitamin D or protein, low body weight and heavy alcohol" | HEAD wording restored. "Intakes" cast vitamin D as a dietary intake, against the chapter's vitamin D section (few foods contain it; skin synthesis drives deficiency). Not logged in round 0 |
| chapter | Singapore picture, first paragraph | "… with about half of older adults below the requirement [@cheong2021vitDsg; @ye2023daha]." | "… (see [vitamin D](#sec-bone-vitd) above) [@cheong2021vitDsg]. Average calcium intake (~794 mg/day) falls short, with about half of older adults below the requirement (see [calcium](#sec-bone-calcium) above) [@ye2023daha]." | HEAD's pointer ("both covered above") restored. Without it, and with the section now further from the levers, the ~794 mg/day figure appeared to rest on @cheong2021vitDsg and @ye2023daha, neither of which is its source (the calcium section cites @hpbNNS2010 and @balkGlobalCalcium2017). The sentence split is logged under *Style fixes* |
| chapter | Joints Check yourself answer | "Glucosamine and chondroitin were no better than placebo for pain or joint structure, …" | "In the major independent trials, glucosamine and chondroitin were no better than placebo for pain or joint structure, …" | The same broadening that round 1 reversed in the OA prose, quiz q9 and the Mr Tan case (it contradicts the ESCEO sentence) |
| chapter | Joints evidence spectrum | "- Glucosamine and chondroitin for osteoarthritis: no better than placebo" | "- … : no better than placebo in the major independent trials" | Same broadening |

### Further content fixes (decision 1 categories)

| File | Location | Before | After | Category |
|---|---|---|---|---|
| chapter | Living bank | "… with about 90% of it laid down by the end of adolescence. Thereafter resorption gradually wins, …" | "… by the end of adolescence. After the peak, resorption gradually wins, …" | Internal contradiction: once the sentence was split, "Thereafter" could be read as resorption winning from adolescence, against "reached by the late twenties" and the living-bank Check yourself ("After the late twenties, resorption gradually outpaces building") |
| chapter | Bone-levers Check yourself (supplements) title | "a healthy woman in her sixties, living at home with a calcium-adequate diet and no risk factors for deficiency, asks whether she should start calcium and vitamin D tablets." | "a woman in her sixties who lives at home and is not deficient asks about calcium and vitamin D tablets." | Internal contradiction: the vitamin D section lists age and being older as risk factors for shortfall, so a woman in her sixties cannot have "no risk factors for deficiency". The verifier's second finding on this title (37 words, §11j) supplied this wording, which also keeps the community-dwelling and replete premises that "She belongs to the second group" relies on; it supersedes the first finding's narrower fix ("and adequate vitamin D") and the round-1 style note on this title |
| chapter | Close, bone list item 2 | "- eat a well-absorbed calcium source (dairy optional), with enough vitamin D, protein and energy;" | "- a well-absorbed calcium source (dairy optional), with enough vitamin D, protein and energy;" | Internal contradiction: "eat … enough vitamin D" made vitamin D sound mainly dietary, against the vitamin D section. Resolved by the noun-phrase rewrite of the close (below) instead of "eat" → "get" |

### Style fixes (§11c/§11g/§11h/§11j)

- Opener: the patient's questions are set apart in straight quotes inside the italic blockquote ("… a doctor
  hears: "What should I eat?" and "Should I take a supplement?""); unquoted, "I" read as the narrator.
- `#fig-disambiguation` caption: decision-2 gloss at the first use of the owned term: "silent until a bone
  breaks in a minor fall (a fragility fracture)". The definition-list entry is unchanged.
- Chapter map: "[Bone is a living bank](#sec-bone-bank): build to a peak, then defend the balance" →
  "[The science underneath: bone is a living bank](#sec-bone-bank)", matching the heading (§11c). The heading
  was kept, because "The science underneath: …" is the shared Part IV scaffold heading (Type 2 Diabetes, CVD,
  CKD, Obesity, Undernutrition, Brain Health); the descriptor was dropped to avoid a double colon. Id unchanged.
- Long sentences split (§11j): living bank, the peak-bone-mass sentence (37 words → 2: "… climbs to peak bone
  mass. Peak bone mass is mostly inherited and is reached by the late twenties, …"); Singapore picture, the
  hip-fracture sentence (38 words → 2: "… and Chinese Singaporeans carry the highest ethnic risk
  [@yong2019hipfracSG]. A hip fracture also carries high mortality: about double the background rate in women,
  and higher in men [@yong2020mortalitySG]."; "and" kept before "Chinese Singaporeans" so the split does not
  leave a comma splice); protein, the 43-word sentence now ends at "… keeps frail people from falling." and
  the cross-reference is its own parenthetical sentence ("(The muscle–bone overlap is approached from the
  sarcopenia side in the *Undernutrition & Malnutrition* and *Healthy Ageing* chapters.)").
- Singapore picture, first paragraph: with the restored pointer the two-fact sentence would have run to 42
  words, so it is one sentence per fact, each with its own pointer and its own key (@cheong2021vitDsg on the
  vitamin D fact and @ye2023daha on the calcium fact, as the levers section cites them); key set and counts
  unchanged. The imported assumptions are now stated (§11j cohesion): "The imported assumptions (that a sunny
  country has little vitamin D deficiency, and that calcium means dairy) therefore fail here, …" (was "The
  "sunny country, dairy-rich West" assumptions therefore fail here, …").
- Definition-list lead-in: "Case-finding and diagnosis rest on four terms:" → "Four terms describe
  case-finding and diagnosis:".
- Gout list: its fifth item ("purine-rich vegetables and total protein are not the problem at all") is not a
  direction urate moves in, so it left the list. The list now ends "- low-fat dairy and coffee lower it." and is
  followed by "Purine-rich vegetables and total protein, however, are not the problem at all." The citation
  cluster stays on the lead-in.
- Mechanical loading callout moved, whole and otherwise unchanged (decision 4), from under *Supplements: for
  deficiency, not for everyone* to the end of *Body weight, and the whole pattern*, after the *What a Healthy
  Diet Looks Like* pointer. The bone-levers movement still ends with its two Check yourself callouts.
- Calcium table: "1000" → "1,000" in the adolescent and 51-and-over rows (§11g units).
- Close: the restating last line "For both, the generalist recognises the real levers, deflates the hype, and
  refers." deleted (§11c; §11g section summaries); the close now ends on the joints list. Both lists are
  parallel noun phrases. Bone: "a high peak built in youth, then a defended balance; a well-absorbed calcium
  source (dairy optional), with enough vitamin D, protein and energy; weight-bearing exercise; correction of
  genuine deficiency without medicalising everyone, and referral for the scan." Joints: "weight loss and
  activity for a worn knee; urate-lowering treatment to target for gout, without blaming the seafood; no
  glucosamine, the supplement the guidelines advise against."
- Quiz q2 and q5 stems: the full stop moved outside the closing quotation mark ("… great for my bones\"."; "…
  leaches calcium from bone\"."), matching the chapter and cases.
- Cases: "Your choices branch the case." removed from the end of both intro nodes (madam-lim-bone, mr-tan-joint),
  since the chapter's sentence above each island already says it (decision 9); the chapter sentences stay.
  Mr Tan reveal-lever: "a modest calorie reduction" → "a modest cut in energy intake" (§11g: energy/kcal,
  never "calorie").

### Not applied (verifier's optional suggestion)

- Refer callout (*Recognise and refer, for bone and joints alike*): the optional cut of its first two sentences
  was not made. The callout's closing cluster [@aceOsteoporosis2018; @kolasinski2020acr; @fitzgerald2020goutacr]
  supports the whole callout, and @kolasinski2020acr (the 2019 ACR/Arthritis Foundation osteoarthritis
  guideline) supports the second sentence's "weight and activity for osteoarthritis". Cutting that sentence
  while the gate keeps the key would leave @kolasinski2020acr on the specialist-drugs sentence, which it does not
  support. The remaining sentence would also repeat the Singapore picture's preceding "Drug treatment and
  menopausal hormone decisions are specialist …". The required deletion of the close's last line removes the
  restatement of the chapter's stance; the callout (the clinician's scope) and the close (what helps) now
  overlap only in the levers they name. Author to decide if a further trim is wanted.

### Deferred content concern added

- Item 16 in the deferred list above: IDEA is named without its limits (§11d); text unchanged pending a source
  check.

### Gate and checks after fix round 2

- Citation multiset vs HEAD: identical (73 distinct keys, 92 citations, every count unchanged).
- Islands 4 → 4; callouts 4 → 11 (unchanged since round 0: +1 Learning objectives, +6 Check yourself); table
  separators 1 → 2; figures 3 → 3; HEAD ids `fig-disambiguation`, `fig-calcium-bio`, `fig-vitd-axis` present;
  every round-1 `sec-bone-*` id present; every in-page link (`#sec-bone-*`, including the two new pointers)
  resolves to an id in the chapter.
- Heading order unchanged: at a glance → Three conditions → Living bank → Bone levers → The joints → The
  Singapore picture → close → quiz → cases.
- copy-audit --you (5 files): 0 flags; chapter 0 em dashes, bold 2.9/1,000 words, "rather than" 2, `you` 7
  (unchanged: "When you advise a patient", "When you counsel a patient with gout" + its quoted message, and the
  chapter's two "Your choices branch the case." island instructions).
- YAML: bone-bank, quiz and both cases load with js-yaml. validate-cases: exit 0; madam-lim-bone and
  mr-tan-joint OK.
- Glossary rows: unchanged.
