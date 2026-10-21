# Retrofit log: *What a Healthy Diet Looks Like* (`dietary-guidelines-patterns`)

Files changed:
- book/chapters/dietary-guidelines-patterns.qmd
- book/diagrams/healthy-plate.yml
- book/quizzes/dietary-guidelines-patterns.quiz.yml
- book/cases/three-households-one-plate.case.yml

## Gate and checks

| Check | Before | After |
|---|---|---|
| Citation multiset | 18 keys, 25 uses | identical (diff empty) |
| `data-island` | 3 | 3 |
| callouts | 9 | 16 (+1 Learning objectives, +6 collapsed Check yourself) |
| table separator rows | 1 | 3 (+ popular-diets table, + food-environment tools table) |
| figures | 0 | 0 |
| `{#sec-…}`/`{#fig-…}` ids | none at HEAD | 17 new `{#sec-…}` ids; every chapter-map link resolves |
| copy-audit (4 files) | 113 flags | 0 flags; 0 em dashes; 0 "rather than"; bold 33.9 → 2.4 per 1,000 words |
| "you" in chapter | 20 | 8, all clinician-in-practice or the case instruction |
| YAML (js-yaml) | | all three files load |
| validate-cases | | exit 0, three-households-one-plate OK |

## Summary of changes

- **Front matter.** New opener (no bold, no generic "you"); Learning objectives callout (6 items);
  chapter map (3 branches = the 3 movements, 4/2/3 children). Ids on every `##`/`###`.
- **At a glance.** Roadmap and aim sentences cut (duplicated the map/objectives); "Part I took… This
  chapter puts…" and "Part II showed…" rewritten so the book does not act; bold/italic emphasis removed.
- **Movement 1 (guidelines and plate).** Movement intro deleted. Headings renamed ("What a dietary
  guideline is", "My Healthy Plate: the Singapore anchor", "Where the guidelines converge"). Owner
  terms bold-defined: dietary guideline, numeric thresholds, plate models (split into two paragraphs).
  QQH inline-header list → in-sentence list. "(For the record: …)" and "it anchors everything else in
  this chapter" cut. AHA 2021 / US DGA abbreviations introduced in the bullets the table uses. Table
  unbolded. Two Check yourself callouts.
- **Movement 2 (patterns).** Rhetorical Q/A opener → topic sentence; food synergy bold-defined; one
  example kept in an `.example` box (second example cut, §11g one example per idea). Book-acting
  cross-ref fixed. PREDIMED sentence split; numbered caveats → bullets; DASH design features → a
  4-item list with the reasoning paragraph kept in prose. Endpoint/risk terms glossed in plain words
  (owned by *Evidence vs Hype*, so unbolded; decision 2/3). Two Check yourself callouts.
- **Movement 3 (advising).** Movement intro deleted. Popular-diet inline-header list → table
  (Diet | What the evidence shows | Verdict) with the cross-references in a paragraph after it.
  "The one-line answer" → "What most popular diets have in common". "How to counsel." run-in →
  topic sentence. Food environment bold-defined (U2 resolved: this chapter owns it); tool list →
  table, the joint citation split so @hpbNutriGrade sits with the label description and
  @nutriGradeRCT2023 with the trial sentence. 🔬 callout restructured (fibre's three jobs as a list),
  🍜 and 🍳 callouts as parallel lists; all unbolded. Two Check yourself callouts.
- **Singapore picture / close / quiz / case sections.** Rhetorical Q/A and antithesis removed; close
  answers the question without bold; Practise intro aligned to the case persona; em dash removed from
  the progress callout.
- **healthy-plate.yml.** `intro:` deleted (repeated the chapter paragraph beside the island; component
  renders it only if present). Every note: em dashes out, "you" out, "myth" out, "veg" → "vegetable",
  "Grade-C/D" → "Nutri-Grade C/D", "oversized" → "too big a portion" (clears the -ize false flag).
- **Quiz.** No "Correct —" openers, no em dashes, no "myth", no consecutive same-opening feedback;
  stems and options unbolded; q4/q5/q6 options brought to similar length with detail moved to feedback.
- **Case.** Em dashes, "honestly", "myth", italic emphasis and the out-of-character "You'll learn to
  weigh claims like this properly later" removed; three correct options trimmed to the distractors'
  length (detail moved to feedback); chapter names in italics; feedback openers vary.
- **Terminology.** "calorie deficit" → "energy deficit"; "type-2-diabetes remission" → "type 2
  diabetes remission"; "freshly-prepared" → "freshly prepared"; "omega-3s" → "omega-3 fatty acids";
  "hypertensives" → "participants with hypertension"; contractions expanded in chapter prose.

### Deviations from the plan (and why)

- **U1 (definition list of trial terms):** not done. term-ownership.md reassigns composite, hard and
  surrogate endpoint and relative/absolute risk reduction to *Evidence vs Hype*. This chapter (earlier
  in reading order) therefore glosses them in plain, unbolded words at first use: relative reduction and
  composite in the PREDIMED paragraph, absolute and hard endpoint in the observational paragraph,
  surrogate endpoint in the DASH list. The plan's cut of "relative versus absolute, composite versus
  hard endpoint" from the observational paragraph was reversed (it relied on the definition list).
- **Popular-diets table columns:** "What the evidence shows | Verdict" instead of the plan's
  "… | What to watch", so @keto2023umbrella stays in one cell with all the claims it supports
  (early loss, attenuation, adherence, LDL, low certainty) and the old bullets' verdicts ("a tool, not a
  cure", "not a metabolic reset") stay in the table instead of a separate paragraph.
- **Satiety gloss:** replaced with the owner chapter's definition instead of the plan's "feels full on
  fewer kcal" rewording (see content fix 6).
- **Part II pointer:** "(see Part II, *Nutrition across Life Stages*)" (the part title from
  `_quarto.yml`) in place of the plan's generic "the life-stage chapters".

## Content fixes (decision 1 categories)

| # | File / location | Before | After | Category |
|---|---|---|---|---|
| 1 | chapter, Practise intro | "A community-health volunteer asks you to help three families…" | "A community health nurse asks you to help three families…" | Chapter contradicts its own case (persona.occupation is "community health nurse") |
| 2 | healthy-plate.yml, Chinese veg "A little garnish" note | "the half-plate is the single biggest gap in most local dinners" | "the half-plate is the section most often missing from a real local dinner" | Island contradicts the chapter's cited gaps (NNS 2022: wholegrain and sodium); aligned with the book's own quiz q1 wording |
| 3 | healthy-plate.yml, Chinese drink "Canned soft drink" note | "the second real local gap after wholegrains" | "swapping it for water is one of the two biggest levers in the local diet" | Island contradicts the chapter's cited text (the NNS second gap is sodium); aligned with the chapter's "two biggest levers" sentence |
| 4 | case, end-good body | "hit the two biggest local gaps (wholegrains, sugary drinks)" | "pulled the two biggest local levers (wholegrains, sugary drinks)" | Case contradicts the chapter's cited gaps (wholegrain and sodium); aligned with the chapter's levers sentence |
| 5 | quiz q2 stem | "which national dietary guideline is \"right\" — WHO, …" | "which dietary guideline is \"right\": WHO, …" | Label misnames the content (WHO is not a national guideline) |
| 6 | chapter, 🔬 callout | "promotes satiety (feeling full on fewer calories, the *Appetite & Weight Regulation* chapter's lever)" | "promotes satiety (the fullness after a meal that delays the next one; see the *Appetite & Weight Regulation* chapter)" | Gloss contradicted the owner chapter's definition of satiety (decision 3; plan C8) |
| 7 | chapter, popular diets (IF) | "(Appraised in depth in the *Evidence vs Hype* chapter.)" | "time-restricted eating is appraised in the *Evidence vs Hype* chapter" | Cross-reference overstated the target's coverage (one bullet on time-restricted eating, no "intermittent fasting" section) |
| 8 | chapter, DASH | "belongs to the cardiovascular disease chapters later" | "belongs to the *Cardiovascular Disease & Hypertension* chapter" | Cross-reference to canonical chapter name |
| 9 | chapter, keto | "belongs to the diabetes chapter" | "(see the *Type 2 Diabetes* chapter)" | Cross-reference to canonical chapter name |
| 10 | case, objectives[2] and end-good keyPoints[3] | "leave the deeper appraisal to the right chapter" / "…to the appraisal chapter" | "…to the *Evidence vs Hype* chapter" | Cross-reference to canonical chapter name |
| 11 | chapter, convergence table, "Limit ultra-processed foods" × My Healthy Plate | "—" | "not stated" | Label made explicit (em dash read as "not stated"; the plate's three companion messages do not mention it); claim unchanged |
| 12 (round 1, was C6) | chapter, popular diets, paragraph after the table | "The therapeutic use of low-carb eating, very-low-calorie diets for type 2 diabetes remission, is real but specific (see the *Type 2 Diabetes* chapter)." | "Two therapeutic uses in type 2 diabetes are real but specific, and distinct from each other: a low-carbohydrate pattern, and the very-low-calorie total diet replacement used for remission (see the *Type 2 Diabetes* chapter)." | Contradiction with another chapter's cited text (*Type 2 Diabetes*: low-carbohydrate pattern @goldenberg2021lowcarb and total diet replacement for remission @lean2018direct are separate interventions) |
| 13 (round 1) | chapter, popular diets, paragraph after the table | (no pointer at HEAD) | "The physiology of fasting and ketosis is in the *Integrative Metabolism* chapter" | New cross-reference to the owner chapter (decisions 3 and 6); *Integrative Metabolism* covers fasting and ketosis in #sec-starvation and #sec-dka |
| 14 (round 1) | chapter, DASH paragraph | "Cutting sodium on top of DASH lowers blood pressure further (see the *Micronutrients, Hydration & Electrolytes* chapter), and the therapeutic use of DASH belongs to the *Cardiovascular Disease & Hypertension* chapter." | "Cutting sodium on top of DASH lowers blood pressure further, and the therapeutic use of DASH belongs to the *Cardiovascular Disease & Hypertension* chapter (the sodium–blood pressure link itself is in the *Micronutrients, Hydration & Electrolytes* chapter)." | Cross-reference retargeted to the chapter that covers DASH plus sodium (*Micronutrients* never mentions DASH; *Cardiovascular Disease & Hypertension* has an objective on how DASH adds to sodium reduction) |
| 15 (round 1) | case, q-indian option a | "\"Dhal or chana is your protein; add wholemeal chapati, more subji and a plainer drink.\"" | "\"Dhal or chana is your protein; chapati in place of naan, more subji, a plainer drink.\"" | Case option contradicted its own feedback and the island (chapati replaces naan in the grain slot; round 0 had turned "swap" into "add") |
| 16 (round 1) | quiz q4 option a feedback; case q-predimed option a feedback | "cardiac death" | "cardiovascular death" | Island contradicted the chapter's cited endpoint wording ("cardiovascular death", @estruch2018predimed) |
| 17 (round 2) | chapter, Singapore picture (#sec-singapore), topic sentence | HEAD: "Why press so hard on wholegrains and drinks? Because that is where Singapore's real gap sits." (round 1 had "The emphasis on wholegrains and salt follows…") | "The emphasis on wholegrains, sugary drinks and salt follows from where Singapore's diet falls short." | Chapter contradicted its own quiz q7 and the cited NNS text (HEAD's topic sentence left out salt, the cited sodium gap); HEAD's drinks are kept, which matches the paragraph's own "cut the free sugar and salt" and the case's framing. The missing local sugar datum stays deferred as C3 |
| 18 (round 0 edit, logged in round 2) | chapter, at a glance, third paragraph | no pointer ("…reading the whole **dietary pattern**.") | "…reading the whole dietary pattern (see the *Why Nutrition Matters* chapter)." | Cross-reference to the owner chapter (decisions 3 and 6): *Why Nutrition Matters* bold-defines dietary pattern |
| 19 (round 0 edit, logged in round 2) | chapter, My Healthy Plate (#sec-plate), first sentence | no pointer ("…the Health Promotion Board's **My Healthy Plate**, built on…") | "…the Health Promotion Board's My Healthy Plate (introduced in the *Why Nutrition Matters* chapter)." | Cross-reference to the owner chapter (decisions 3 and 6): *Why Nutrition Matters* defines My Healthy Plate (its definition list) |
| 20 (round 0 edit, logged in round 2) | chapter, Patterns over nutrients (#sec-patterns), second paragraph | "The reductionist question is the wrong question, a theme the *Evidence vs Hype* chapter returns to in depth." | "Asking about one food in isolation is the wrong question, a trap known as single-nutrient reductionism (see the *Why Nutrition Matters* and *Evidence vs Hype* chapters)." | Cross-reference to the owner chapter (decisions 3 and 6): *Why Nutrition Matters* bold-defines single-nutrient reductionism, so the term is named here unbolded; HEAD's *Evidence vs Hype* pointer is kept, now in parentheses so the chapter is not the subject (§11g) |
| 21 (round 2) | chapter, DASH design list, endpoint bullet | "a surrogate endpoint (a measured marker that stands in for clinical events)" | "a surrogate endpoint (a measured marker that stands in for a hard endpoint)" | Gloss differed from the owner chapter's definition (decision 3; §11g, never cycle a technical term). *Evidence vs Hype*: "A measured marker, such as blood pressure or a blood test, that stands in for a hard endpoint"; the example is left out because the sentence already names blood pressure |
| 22 (round 2) | chapter, Mediterranean, appraisal paragraph | "a hard endpoint (an event that matters to the patient directly, such as a heart attack or death)" | "a hard endpoint (an outcome that matters to the patient directly, such as a heart attack or death)" | Gloss was one word off the owner chapter's definition ("An outcome that matters to the patient directly, such as a heart attack or death"); round 1 reported it as word for word. Both endpoint glosses now match *Evidence vs Hype* |

Glosses added (decision 2, no new claims): relative reduction ("a fall expressed as a share of the
starting risk"), composite ("counts several outcomes together as one result"), absolute ("the actual
difference in risk between the groups"), hard endpoint ("an event that matters to the patient
directly, such as a heart attack or death"), surrogate endpoint ("a measured marker that stands in for
clinical events"); AHA 2021 and US DGA abbreviations introduced. Removed as style, not content: the
second food-synergy example (Mediterranean meal "more than the arithmetic sum"), "(For the record: …)",
"it anchors everything else in this chapter", roadmap sentences.

## Deferred content concerns (need source-checking; not changed)

- **C1** Convergence table, "Limit ultra-processed foods" row: US DGA 2020–2025 does not, to the
  planner's knowledge, use that term, and the WHO bullet lists no UPF limit, yet both are ticked; all
  per-guideline ticks are sourced only to @herforth2019fbdg (a review of national FBDGs, which does not
  grade WHO or AHA). The My Healthy Plate tick for "Limit salt" is not among the plate's three companion
  messages.
- **C2** "Guidelines evolve and are debated" callout: the 2025–2030 US edition (January 2026) and the
  expert criticism are uncited.
- **C3** Singapore picture: the "two biggest levers" are the brown-rice and water-over-sugary-drink
  swaps, but the cited NNS 2022 figures are wholegrain and sodium; no local sugar datum supports the
  drink lever. (The island and case were aligned to the chapter's sentences, fixes 2–4; the chapter's
  own gap/lever mismatch remains.)
  **Round 2, for the author: still deferred; the gap and lever wording needs settling once across
  chapter, island and case.**
  (a) Inside #sec-singapore the topic sentence (now "wholegrains, sugary drinks and salt", fix 17) is
  backed by the NNS datum for wholegrains and salt only, while the closing sentence names the
  brown-rice swap and the water-over-sugary-drink swap as "the two biggest levers in the local diet".
  Island fix 3 repeats that levers sentence in the Chinese "Canned soft drink" note ("swapping it for
  water is one of the two biggest levers in the local diet").
  (b) The same paragraph says both moves (wholegrains; "cut the free sugar and salt") are "already on
  the plate built in the interactive above", but the island has no salt choice: its slots are
  vegetables, grain, protein and drink.
  (c) Four case strings still count sugary drinks inside "the two gaps": intro body ("not enough
  wholegrain, and too much sugary drink and salt"), objectives[1] ("Tackle the two biggest local gaps,
  too little wholegrain and too much free sugar and salt, with practical swaps."), remedial body
  ("target the two real gaps (wholegrains and sugary drinks/salt)") and end-partial keyPoints[1]
  ("Target the two real local gaps: more wholegrains, fewer sugary drinks and less salt."). End-good
  says "levers" (fix 4). They were not aligned to "wholegrain and salt" in round 2: no case choice and
  no island slot exercises salt, so an objective of "too much salt" would name a gap the case never
  teaches, and aligning the case alone would settle C3 in one file while the chapter keeps it.
  Settling C3 needs either a cited local datum on sugary drinks (then "gaps" can include them in all
  three files) or a decision to call the sugary-drink swap a lever, not a gap, everywhere, with a salt
  choice or salt wording added where the plate is said to carry the salt move.
- **C4** Popular-diets table, intermittent fasting: "head-to-head trials show it is no better than
  ordinary calorie restriction" has no citation in this chapter (*Evidence vs Hype* cites
  lowe2020treat and lin2023tre; *Integrative Metabolism* cites liu2022tre).
- **C5** @crowley2019 (a systematic review of nutrition in medical education) supports the
  "dietitian's work / hand over to a dietitian" boundary only loosely; cited for it twice.
- ~~**C6**~~ Fixed in round 1 (content fix 12): the low-carbohydrate pattern and the very-low-calorie
  total diet replacement are now named as two distinct therapeutic uses, as in the *Type 2 Diabetes*
  chapter's cited text.
- **C7** "My Healthy Plate dates from 2014 (the page was refreshed in 2024)" is uncited (minor).
- **C9** DIETFITS "~5–6 kg" is a rounded range of the two arms (about 5.3 and 6.0 kg); no change needed.
- **New, C11** healthy-plate.yml, Chinese veg note (after fix 2) "the section most often missing from a
  real local dinner" and quiz q1 feedback "the one most often missing from a real local dinner" are
  uncited observations.
- **New, C12 (cross-chapter, not mine)** *Why Nutrition Matters* (HEAD line ~84) describes PREDIMED as
  "a combined measure of heart-disease events"; this chapter's cited text says a stroke-dominated
  composite of major cardiovascular events. The owner of that chapter should check it (decision 1,
  "stroke counted as a heart-disease event").

## Deferred backlog

- §11f: the chapter has no substantive teaching figure (the island and the convergence table carry
  the visual load); a My Healthy Plate or hawker-plate figure needs a licensed asset.
- `components/src/HealthyPlate.svelte` (not owned) hard-codes the all-on-target message ("…you reached
  it… adapt the plate to the cuisine, not the family to a foreign diet") and a "Chapter 9" comment;
  it also renders notes only for non-"good" options, so the good-option notes in healthy-plate.yml
  are never shown.
- *Evidence vs Hype* retrofit: as owner of composite/hard/surrogate endpoint and relative/absolute risk
  reduction, it should bold-define them; this chapter now glosses them in plain words before that
  point. Its "Re-appraising the landmarks" callout names this chapter as the subject ("The *What a
  Healthy Diet Looks Like* chapter met PREDIMED…").
- The case's household-label stems keep their bold scene labels ("**Chen household (Chinese).**",
  "**Mr Chen's brother**"), treated as labelled fields; unbold if the house decides stems carry no
  bold at all.
- The 🔬 callout is longer than the 2–4-sentence house-block guide (content kept, restructured with a
  list); trimming it would cut content.

## Glossary rows owned by this chapter

| Term | Meaning | Introduced in |
|---|---|---|
| Dietary guideline | A consensus synthesis in which an expert body weighs the whole evidence and translates it into advice a population can act on | What a Healthy Diet Looks Like |
| Food environment | What is sold, priced, labelled and placed within reach of the people choosing food | What a Healthy Diet Looks Like |
| Food synergy | The idea that foods act in combination, so a whole dietary pattern can predict health better than any nutrient studied in isolation | What a Healthy Diet Looks Like |
| Numeric threshold | A population limit set by a dietary guideline, such as free sugars under 10% of energy or salt under 5 g a day | What a Healthy Diet Looks Like |
| Plate model | A dietary guideline expressed for individuals as the proportions of a plate, such as My Healthy Plate | What a Healthy Diet Looks Like |

## Owner terms from term-ownership.md that do not occur in the chapter

None: all five owned terms occur and are bold-defined at their teaching point.

## Fix round 1

### Gate and checks after round 1

| Check | HEAD | After round 1 |
|---|---|---|
| Citation multiset | 18 keys, 25 uses | identical (diff empty); @hpbHealthyPlate moved from the last 🍜 bullet to the lead-in, with the whole list it supports |
| `data-island` | 3 | 3 |
| callouts | 9 | 15 (+1 Learning objectives, +6 Check yourself, −1 "What most popular diets have in common", folded into prose: see below) |
| table separator rows | 1 | 3 (unchanged from round 0) |
| figures | 0 | 0 |
| HEAD `{#sec-…}`/`{#fig-…}` ids | none | none missing; every chapter-map link resolves |
| copy-audit `--you` (4 files) | | 0 flags; 0 em dashes; bold 2.4 per 1,000 words; 5 "you", all clinician-in-practice or the case instruction |
| YAML (js-yaml) | | all three files load |
| validate-cases | | exit 0, three-households-one-plate OK |

### Chapter (`dietary-guidelines-patterns.qmd`)

- Popular diets: "(rows run from the least to the most aligned with the guidelines)" deleted (an
  unsupported ranking; blocker).
- Popular diets: callout "What most popular diets have in common" removed (a summary box restating
  the sentence above it, §11j). Its content is kept in prose, not lost: "Most popular diets "work"
  through that same mechanism: a person eats less, of better food, in a way they can keep up." joins
  the paragraph before the table, and "The best diet for a patient is the healthy pattern they will
  sustain, not the cleverest one." opens the counselling paragraph. Callouts 16 → 15.
- Popular diets: content fix 12 (was C6) and content-fix row 13 (Integrative Metabolism pointer) above.
- Counselling paragraph: "Instead, you can ask what they are hoping for" → "Instead, ask what they are
  hoping for".
- Close (`#sec-close`): the movement-by-movement recap replaced with an answer in content: "No single
  diet is best. A healthy diet is any pattern that keeps the shared core: mostly plants and whole foods,
  wholegrains in place of refined staples, unsaturated fats, and little free sugar and salt. Among the
  patterns that meet it, the best for a patient is the one they will keep eating, which is usually
  their own cuisine rebuilt to the plate. When a plan has to become therapeutic or restrictive, it
  passes to a dietitian [@crowley2019]." (@crowley2019 stays with the dietitian claim; this also
  removes the "best-studied patterns" superlative.)
- At a glance: "Up to this point we have taken food apart:" → "In the foundation chapters we took food
  apart:" (Part II did not take food apart; avoids both a part number and the book as actor).
- At a glance: "(see Part II, *Nutrition across Life Stages*)" → "(see the *Pregnancy & Lactation*,
  *Childhood & Adolescence* and *Healthy Ageing* chapters)"; "That baseline works as an archetype" →
  "That baseline is an archetype".
- Plate: "…refreshed in 2024), so it is current national guidance, not a new release." → "…refreshed
  in 2024); it remains current national guidance." (removes the non-sequitur "so" and the antithesis).
- International: topic sentence → "My Healthy Plate closely resembles the major international
  guidelines. Three are worth knowing for their structure and intent (the full nutrient targets are in
  the *Macronutrients* and *Micronutrients, Hydration & Electrolytes* chapters):".
- Guidelines callout: "Until that debate settles, the stable 2020–2025 edition is the reference here."
  → "For now, the stable 2020–2025 edition is the reference here." (HEAD's "For now").
- Check yourself 1 re-set as a transfer question: "at the same family dinner, a construction worker eats
  far more than his office-based wife. Why can both plates be on target?"; answer's last clause → "so a
  large plate and a small one are both on target when each keeps those proportions." The suggested
  78-year-old-with-a-small-appetite scenario was not used: the *Healthy Ageing* chapter's cited advice
  for a small appetite is to fortify familiar food and put protein at every meal, so an answer saying
  the same plate "suits a small appetite as well as a large one" would contradict it.
- Patterns: "The single-nutrient question is the wrong question" → "Asking about one food in isolation
  is the wrong question" (the examples are foods; the trap's name is kept).
- Mediterranean: the "Weighing a 30% reduction…" sentence (48 words, two glosses) moved to its own
  paragraph and split into "…means asking two questions. Is it relative or absolute (…)? And does it
  count a composite or a hard endpoint (…)?". The hard-endpoint gloss was not changed (see below).
- DASH: content fix 14 above.
- 🔬 callout: "No single swap on that plate carries the benefit" → "No single swap on that plate does
  all the work".
- 🍜 callout: @hpbHealthyPlate moved to the lead-in "Hit the plate with hawker choices
  [@hpbHealthyPlate]:".
- Check yourself (keto): "and watch for signs of disordered eating." → "and watch for signs of
  disordered eating, referring if a red flag shows."
- Singapore picture: "The emphasis on wholegrains and drinks" → "The emphasis on wholegrains and salt"
  (topic sentence now matches the cited NNS data, the learning objective and quiz q7; the "two biggest
  levers" sentence stays as deferred C3).
- Practise intro: appositive in parentheses: "three families (a Chinese, a Malay and an Indian
  household)".

### Quiz (`dietary-guidelines-patterns.quiz.yml`)

- q4 option c: "Nothing: the diet is guaranteed to prevent heart attacks" → "Nothing: whoever follows
  the diet is guaranteed no heart attack" (restores the individual-guarantee mirror of the correct
  answer; HEAD's "his heart attack" had no antecedent in the quiz stem, which says only "A relative").
- q4 option a feedback: content fix 16 ("cardiac death" → "cardiovascular death").
- q6 option b: "A Mediterranean diet would supply the protein" (a true statement) → "Switch them to a
  Mediterranean diet for protein" (a wrong recommendation again, as at HEAD).

### Case (`three-households-one-plate.case.yml`)

- q-indian option a: content fix 15.
- q-predimed option a feedback: content fix 16.
- remedial body: "**adapt the plate to the food**" unbolded.

### Island (`healthy-plate.yml`)

Eight notes recast from the "Fragment: fragment" shape to plain sentences (plain text, no markdown):

| Option | Before | After |
|---|---|---|
| Brown or mixed rice | "Intact wholegrain with its fibre: a gentler glucose rise, and the quarter the plate asks for." | "Intact wholegrain keeps its fibre, so the glucose rise is gentler; this is the quarter the plate asks for." |
| Steamed chicken, skin off | "Lean once the skin is off: a reasonable protein quarter." | "Lean once the skin is off, so it makes a reasonable protein quarter." |
| Steamed fish | "Lean protein with minimal added oil: the model protein quarter." | "Lean protein with minimal added oil makes the model protein quarter." |
| Plain water / kopi-o kosong | "Water (or unsweetened kopi) over any sweetened drink: the simplest high-yield swap." | "Choosing water (or unsweetened kopi) over any sweetened drink is the simplest high-yield swap." |
| Ayam goreng | "Deep-fried and often skin-on: a fatty take on the protein quarter." | "Deep-fried and often skin-on, this is a fatty take on the protein quarter." |
| Beef rendang | "Rich in coconut and fat: fine as a small serving, not as the whole quarter." | "Rich in coconut and fat, so it is fine as a small serving but not as the whole quarter." |
| Ikan bakar | "Grilled, not fried: lean protein with little added oil." | "Grilled, not fried, so the protein stays lean with little added oil." |
| Chapati (wholemeal) | "A wholemeal staple: the wholegrain quarter, with fibre intact." | "A wholemeal staple fills the wholegrain quarter with its fibre intact." |

### Not applied in round 1

- Hard-endpoint gloss "(an event that matters to the patient directly, such as a heart attack or
  death)" kept, not changed to "(a definitive clinical event, such as a heart attack, stroke or death)":
  it is the owner chapter's definition word for word (*Evidence vs Hype* definition list; term-ownership
  meaning), and decision 3 plus §11g (never cycle a technical term) require this chapter's gloss to
  match the owner's. If the definition is to change, it must change in *Evidence vs Hype* and the
  glossary first, then here.

## Fix round 2

Snapshots of the four files as they stood before round 2 are in `retrofit-logs/`:
`dietary-guidelines-patterns.round2-pre.qmd`, `healthy-plate.round2-pre.yml`,
`dietary-guidelines-patterns.quiz.round2-pre.yml`, `three-households-one-plate.case.round2-pre.yml`.

### Gate and checks after round 2

| Check | HEAD | After round 2 |
|---|---|---|
| Citation multiset | 18 keys, 25 uses | identical (diff empty); @hpbHealthyPlate now closes the one sentence that carries both the QQH proportions and the three companion messages, as at HEAD |
| `data-island` | 3 | 3 |
| callouts | 9 | 15 (unchanged from round 1) |
| table separator rows | 1 | 3 (unchanged from round 1) |
| figures | 0 | 0 |
| HEAD `{#sec-…}`/`{#fig-…}` ids | none | none missing; 17 ids; all 12 chapter-map links resolve |
| copy-audit `--you` (4 files) | | 0 flags; 0 em dashes; bold 2.4 per 1,000 words; 0 curly quotes; 5 "you": "the person in front of you" (the clinician), the WHO/AHA Check yourself title (decision 10), two in the keto Check yourself answer (the clinician in practice), "Your choices branch the case" (the case instruction) |
| YAML (js-yaml) | | all three files load |
| validate-cases | | exit 0, three-households-one-plate OK |
| Markdown in case plain-text fields | | none (21 fields checked: objectives, title, persona, node titles, keyPoints) |
| Chapter sentences over 30 words | | three removed (DASH pointer 37, keto answer 41, nasi padang answer 45); two added, both the prescribed fix text and both in-sentence lists: the QQH sentence (43, needed to keep one citation with all of its claim) and the close's definition sentence (37) |

### Chapter (`dietary-guidelines-patterns.qmd`)

| # | Location | Before (round 1) | After (round 2) | Reason |
|---|---|---|---|---|
| R2-1 | Singapore picture, topic sentence | "The emphasis on wholegrains and salt follows from where Singapore's diet falls short." | "The emphasis on wholegrains, sugary drinks and salt follows from where Singapore's diet falls short." | Content fix 17 (major). C3 stays deferred |
| R2-2 | My Healthy Plate, first paragraph | "…a quarter wholegrains and a quarter meat and other protein [@hpbHealthyPlate]. Three companion messages go with it: choose water over sugary drinks, use healthier oils, and stay active." | "…a quarter wholegrains and a quarter meat and other protein, with three companion messages: choose water over sugary drinks, use healthier oils, and stay active [@hpbHealthyPlate]." | At HEAD one cited sentence covered the proportions and the companion messages; the round-0 split left the messages uncited. The key now sits with all of its claim |
| R2-3 | Check yourself (eggs/coffee), title and answer | Title "why does asking whether eggs or coffee are "good or bad" produce contradictory headlines, and what question works better?"; answer "Foods act in combination, so a food judged in isolation yields a decade of contradictory headlines. Asking what pattern the food is part of settles the noise, because a whole dietary pattern can predict health better than any nutrient studied alone (food synergy). …" | Title "a patient asks whether eggs or coffee are "good or bad" now. What question works better, and why?"; answer "Asking what pattern the food is part of. Judged in isolation, each food generates a decade of contradictory headlines. At the level of the pattern the noise settles, because foods act in combination and a whole dietary pattern can predict health better than any nutrient studied alone (food synergy). …" (framework sentence kept) | The round-1 answer gave a cause for the contradictory headlines that the chapter never states; the chapter only sets the isolated and pattern-level readings side by side. Deviation: the prescribed 41-word middle sentence is split at its semicolon (issue 20: retrieval answers should be the easiest text to read) |
| R2-4 | Check yourself (keto), answer | "In practice, you keep whatever part of low-carb has helped (dropping sugary drinks and refined rice, for example), steer toward a sustainable pattern anchored to My Healthy Plate, and watch for signs of disordered eating, referring if a red flag shows." | "In practice, you ask what they are hoping for and keep any part of the plan that helps (dropping sugary drinks and refined rice, for example). You then steer toward a sustainable pattern anchored to My Healthy Plate, watch for signs of disordered eating, and refer if a red flag shows." | The stem's patient only wants to try keto, so nothing has helped yet; the chapter's first counselling step ("ask what they are hoping for") was missing. Issue 20's split merged in: 41 words → 26 + 25, and the answer stays at four sentences (§11j, 2–4) |
| R2-5 | Patterns over nutrients, last paragraph | "Each rests on a landmark trial, and each trial's limits belong with its result." | "Each has a landmark trial, and each trial's limits belong with its result." | "Rests on" overstated the trials' share of the evidence; three paragraphs later the Mediterranean evidence base is described as largely observational |
| R2-6 | Close (#sec-close) | "No single diet is best. A healthy diet is any pattern that keeps the shared core: mostly plants and whole foods, …" | "No single diet is best. A healthy diet is a pattern that keeps the shared core on which nearly every national guideline converges: mostly plants and whole foods, …" | Round 1 hardened HEAD's "a short list of shared principles that nearly every national guideline converges on" into "any pattern"; HEAD's grounding restored. "No single diet is best." is kept: the problem concerned only the second sentence, and the first is HEAD's "There is no single best diet", the answer to the heading question |
| R2-7 | DASH design list, endpoint bullet | "(a measured marker that stands in for clinical events)" | "(a measured marker that stands in for a hard endpoint)" | Content fix 21 |
| R2-8 | Mediterranean, appraisal paragraph | "(an event that matters to the patient directly, such as a heart attack or death)" | "(an outcome that matters to the patient directly, such as a heart attack or death)" | Content fix 22 (further fix, not in the round-2 list): makes the round-1 "word for word" statement true, so the two endpoint glosses are now handled the same way |
| R2-9 | Practise intro | "A community health nurse asks you to help three families (a Chinese, a Malay and an Indian household) eat "more healthily" using My Healthy Plate. Each has its own habitual dinner and its own worries." | "Three families bring their habitual dinners to a neighbourhood screening booth." (the task and the "Your choices branch the case" sentences unchanged) | The two sentences repeated, almost word for word, the case persona.presentation that CasePlayer prints at the top of the island (decision 9, §11j). The case persona still names the nurse, so content fix 1 stays consistent; its after-text is no longer in the chapter |
| R2-10 | Singapore picture, second paragraph | "Culturally, this adaptability is a strength." | "The plate's adaptability to each cuisine is also a cultural strength." | "This adaptability" had no antecedent after the NNS paragraph (§11j cohesion: repeat the key noun) |
| R2-11 | Check yourself (nasi padang), answer | "My Healthy Plate fixes the proportions of a meal, not its dishes, so the family's own food can reach the target: more vegetables and *ulam*, a modest rice scoop with less gravy, grilled *ikan bakar* in place of fried chicken, and water or *teh-o kosong*. … A pattern the family will sustain also does more than a "better" one they abandon." | "My Healthy Plate fixes the proportions of a meal, not its dishes, so the family's own food can reach the target. The swaps are more vegetables and *ulam*, a modest rice scoop with less gravy, grilled *ikan bakar* in place of fried chicken, and water or *teh-o kosong*. …" (last sentence deleted) | The deleted sentence repeated the Singapore picture's closing sentence directly below ("A diet a patient will keep beats a "better" one they abandon by Friday"); the idea is also in the keto answer. Issue 20's split: 45 words → 21 + 27 |
| R2-12 | Mediterranean, observational paragraph | "That is a strong evidence base, built substantially on observational studies." | "That is a strong evidence base, although much of it is observational." | HEAD's "and one built…" read as a caveat; the connective makes the link explicit again (§11j) |
| R2-13 | DASH, closing paragraph | "Cutting sodium on top of DASH lowers blood pressure further, and the therapeutic use of DASH belongs to the *Cardiovascular Disease & Hypertension* chapter (the sodium–blood pressure link itself is in the *Micronutrients, Hydration & Electrolytes* chapter)." | "Cutting sodium on top of DASH lowers blood pressure further. The therapeutic use of DASH, sodium reduction included, belongs to the *Cardiovascular Disease & Hypertension* chapter; the sodium–blood pressure link itself is in the *Micronutrients, Hydration & Electrolytes* chapter." | A 37-word sentence joined a fact and a pointer with "and" and nested a second pointer. "Sodium reduction included" checked against the target: *Cardiovascular Disease & Hypertension* covers DASH-Sodium in #sec-cvd-dash and has an objective on how DASH adds to sodium reduction |
| R2-14 | Popular diets, table lead-in | "That finding reframes each popular diet:" | "That finding gives each popular diet a verdict, set out below with the evidence behind it:" | The lead-in now says what the table shows (§11j). Deviation: "That finding" kept in place of the fix's "The same finding", which would echo "that same mechanism" in the sentence before |
| R2-15 | At a glance, last paragraph | Separate one-sentence paragraph: "Writing therapeutic meal plans or prescribing gram targets is a dietitian's work, and knowing where that boundary sits is part of the clinical skill [@crowley2019]." | Joined to the paragraph before, after a new clinician-side sentence: "…far more than they differ. Reading that shared pattern and adapting it to a patient's cuisine is the clinician's task. Writing therapeutic meal plans or prescribing gram targets is a dietitian's work, and knowing where that boundary sits is part of the clinical skill [@crowley2019]." | Restores the clinician side of the boundary from HEAD's aim sentence ("…and adapt it to a patient's cuisine"). Deviation: two sentences in place of the fix's semicolon (one 40-word sentence → 15 + 25), which also keeps @crowley2019 with the dietitian claim only, as at HEAD (see C5) |
| R2-16 | Advising real patients, third heading | "### The food environment shapes the choice {#sec-food-environment}" | "### The food environment: Singapore's national tools {#sec-food-environment}" | The heading stated a claim; topical heading, matching the chapter-map node (§11h). Id kept |

Logged only, no text change: issue "three new cross-references" → content fixes 18–20; issue "Singapore gap/lever contradiction" → C3 expanded with an explicit note to the author.

### Quiz (`dietary-guidelines-patterns.quiz.yml`)

- q5 correct option: "Blood pressure is a surrogate, measured over ~8 weeks" → "Blood pressure is a surrogate, measured over only ~8 weeks" (HEAD's "only" marks the short duration as itself a caveat; 58 characters against distractors of 30 and 47).
- q2 option a feedback: "plenty of fruit & veg" → "plenty of fruit and vegetables" (the chapter's and the island's wording).

### Case (`three-households-one-plate.case.yml`)

- objectives[2]: "…and leave the deeper appraisal to the *Evidence vs Hype* chapter." → "…to the Evidence vs Hype chapter."
- end-good debrief keyPoints[3]: "…leave deep appraisal to the *Evidence vs Hype* chapter." → "…to the Evidence vs Hype chapter."
  `CasePlayer.svelte` prints the "Objectives met" list (`<li>{def.objectives[i - 1]}</li>`) and key points (`<li>{k}</li>`) as plain text, so the asterisks showed literally (a defect added in round 0; content fix 10 brought the italics). Plain-text fields take the plain chapter name, as diagram YAML does (decision 6). The italics in the end-good body, which goes through `md()`, are kept.
- The four "two gaps" strings (intro body, objectives[1], remedial body, end-partial keyPoints[1]) were not aligned; they are logged under C3 (the fix's second option), with the reason in C3 (c).

### Island (`healthy-plate.yml`)

- Malay "Beef rendang, small portion" note: "Rich in coconut and fat, so it is fine as a small serving but not as the whole quarter." → "Rich in coconut and fat, so keep it to a small serving, not the whole quarter." (the round-1 "so" made the fat content the reason the dish is fine, reversing HEAD's logic; the note displays because the option's quality is "ok").

### Residual, not changed in round 2

- The end of #sec-real-plate still runs island → 🔬 → 🍜 → 🍳 → two Check yourself callouts with no prose between them (the problem part of the "five callouts" issue; its fix, splitting the two long answer sentences, is done). The order follows the house rules: the 🔬🍜🍳 blocks close the topic and refer to "that plate" in the island (§11b), and the Check yourself callouts end the movement (§11j). Breaking the run needs new prose or a structural move (decision 4).
- Statements earlier in this log that round 2 supersedes: the surrogate and hard-endpoint glosses quoted under "Glosses added" (now as in content fixes 21 and 22); the "word for word" note under "Not applied in round 1" (true from round 2); content fix 1 (the Practise intro no longer names the nurse); content fix 10 (the case's two plain-text fields now read "the Evidence vs Hype chapter" without italics; the end-good body keeps the italic form).
