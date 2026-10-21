# Retrofit log: Adulthood & Working Life (`adulthood-working-life`)

Files changed (only these): `book/chapters/adulthood-working-life.qmd`, `book/diagrams/fuel-dial.yml`,
`book/quizzes/adulthood-working-life.quiz.yml`, `book/cases/rahmat-shift-runner.case.yml`.

## Gate and checks

| Check | Before (HEAD) | After |
|---|---|---|
| Citation multiset | 43 keys (naidoo ×2, sawka ×2) | IDENTICAL (diff empty) |
| `data-island` | 3 | 3 |
| Callouts | 2 | 8 (+1 Learning objectives, +5 Check yourself) |
| Tables | 0 | 2 (Part II driver table, decision 5; inline refer table, §11h) |
| Figures | 0 | 0 |
| `{#sec/fig}` ids in HEAD | none | n/a (13 new ids; every chapter-map link resolves) |

- copy-audit (`--you`): 0 flags across the 4 files (baseline 95). qmd: 0 em dashes, bold 7.1/1,000 words
  (was 40.8), 0 "rather than" (was 4), 2 "you" (was 21), both inside quoted beliefs ("you lose 1% a year
  from thirty"; "a daily glass of red wine protects your heart"), which §11g keeps.
- js-yaml load: fuel-dial, quiz and case all OK. `validate-cases.mjs`: `OK rahmat-shift-runner.case.yml`.
- Feedback openers (quiz): Doubly, This, The, At, This, The, About, Benefit, Muscle, Higher, Healthy, The,
  Advice, This, A, Acetaldehyde, The, An, In, Heavy, Fasting. (Case): A, Carb-loading, Gels, Benefit, At,
  Healthy, The, Timing, Fasting, Weight, Crash-and-rebound, Activity, This, Both, The. No consecutive repeats;
  no "Correct"/"Right" openers.
- Not done (forbidden for agents): render / TOC check.

## Summary of changes

- Opener: one italic two-sentence blockquote (no bold, no "myth").
- Added Learning objectives (6) and a 3-branch chapter map; `{#sec-…}` ids on every `##`/`###`
  (`sec-overview`, `sec-adult-inside`, `sec-adult-metabolism`, `sec-adult-muscle`, `sec-adult-outside`,
  `sec-adult-fuelling`, `sec-adult-food-environment`, `sec-adult-alcohol`, `sec-adult-refer`,
  `sec-singapore`, `sec-close`, `sec-quiz`, `sec-case`).
- At a glance: meta paragraph ("This chapter picks up…", "the book returns…") rewritten with linked
  cross-references; bold-label "What's changing inside/outside" list replaced by the decision-5 two-row
  driver table (filled only from existing text; "internal drivers / external levers" unbolded); island
  instruction made one imperative sentence. Fuel-dial `intro` key deleted (repeated that sentence; decision 9).
- Movement intros deleted (two). Headings: "The metabolism doesn't crash at 40" → "Does metabolism slow down
  in midlife?" (common-belief rule); "Muscle: the reserve you defend" → "Defending muscle: resistance exercise
  and protein"; "Fuelling everyday exercise: usually less than you think" → "Fuelling everyday exercise";
  warning callout "The alcohol flush is a red flag, not a party trick" → "Is the alcohol flush harmless?".
- §11g voice: all 19 non-quoted "you/your" lines converted to third person or clinician imperative; tics
  removed ("remarkably", "genuinely", "navigate", "worth stating plainly", "worth saying clearly", "the single
  most useful fact in this chapter", "so here is the calibrated version", "the human backdrop to the whole
  external-driver story", "myth(s)", "wrong" applied to a belief, "quietly", "measurably", "under-rated",
  "locally-led"); 4 em dashes removed; emphasis bold removed (bold kept only for defined terms, the parallel
  run-in topic sentences and one warning per callout).
- Terminology: "total daily energy expenditure" → "total energy expenditure (TEE)" (fix round 2: "(TEE)"
  dropped, since the abbreviation was used only in its own gloss); "doubly-labelled" →
  "doubly labelled"; "high blood pressure" → "hypertension"; "blood fats" → "blood lipids"; "the metabolic
  syndrome" → "metabolic syndrome"; "dilute your blood sodium" → "exercise-associated hyponatraemia, a
  dangerously low blood sodium" (owner: Micronutrients, unbolded); "resistance work/loading" → "resistance
  exercise"; "throat-cancer" → "oesophageal-cancer" (YAML); "pre-existing" → "established" kidney disease.
- Numbers: "half a kilo to a kilo a year" → "0.5–1 kg a year"; "1.2–1.6 g per kilogram per day" →
  "1.2–1.6 g/kg/day"; "nine in ten" → "9 in 10".
- §11j form by relation: training-load cases → bulleted list (lightest to heaviest); 🍜 fluid rules →
  bulleted list; protein worries list kept minus inline-header labels; refer list → topic sentence, two prose
  paragraphs carrying the reasoning (Asian BMI; crash dieting/weight cycling) and an inline refer table;
  Singapore picture split so each bold run-in heads one topic (alcohol gets its own paragraph); shift-work
  paragraph split (risk; timing). Long sentences (>25 words) split. Causal chains stay in prose.
- Check yourself: 2 after "What's changing inside", 2 after "What's changing outside", 1 after "Recognising
  trouble"; none in Singapore picture or close.
- Citation moves (multiset unchanged): `@merz2020muscleinsulin` moved from the pointer sentence onto the
  glucose-uptake claim it supports; `[@mohNNS2022; @naidoo2017eatingout]` split so `@mohNNS2022` sits on the
  sodium statistic and `@naidoo2017eatingout` on the eating-out claim. *(Fix round 2: that split was
  reverted to HEAD's single-sentence grouping, because the inference "built into everyday meals" needs both
  keys; `[@uspstf2018alcohol; @bush1998auditc]` was split so each key sits on its own claim. See below.)*
- New cross-reference pointers (no new claims): Integrative Metabolism `#sec-fed` (muscle as the main glucose
  sink) and `#sec-exercise` (fuel physiology of exercise, §11f); Energy Balance `#sec-expenditure`; Obesity &
  Metabolic Syndrome `#sec-phenotype` (Singapore's lower BMI cut-offs; added in fix round 1, see below).
- Standard glosses added (decision 2): total energy expenditure = BMR + TEF + physical activity (Energy
  Balance terms, unbolded; moved to the first use of the term in fix round 2);
  "poorly compensated" → "drinkers eat little less to make up for it"; Group 1 carcinogen; ALDH2 =
  aldehyde dehydrogenase 2, the enzyme that clears acetaldehyde; AUDIT-C expansion.
- Practise paragraph cut to two sentences (it repeated the case intro node, which keeps all the details).
- Quiz: title → "Quick check: adulthood & working life"; all "Correct." / "Correct —" openers removed;
  options trimmed (correct options shortened to parallel length, distractors not padded); "myth", vague
  "unbiased evidence" → Mendelian randomisation; em dashes removed; "loading" → resistance exercise; units
  g/kg/day.
- Case: objectives, intro, all MCQ texts/feedback, remedial, end-good, end-partial and keyPoints scrubbed
  (no "Right —"/"Correct —", em dashes, "myth", "crucial", "inoculation", "genuine", "studies show"); correct
  options trimmed to parallel length; bold reduced to one ("alcohol" in remedial; removed in fix round 1, so the case has no bold). Ids, goto, effects,
  reaction, emotion, variables and the branch rule untouched; persona untouched.
- Fuel-dial: title, tier strings, athleteNote, tropicalNote and credit de-dashed and de-"you"; "(probably not
  you)" dropped from athleteNote (the component's toggle already says it); `intro` deleted; one em dash in a
  YAML comment changed to a semicolon.

## Content fixes (decision 1)

| File | Location | Before | After | Category |
|---|---|---|---|---|
| adulthood-working-life.qmd | Defending muscle, protein paragraph | "(the reference-intake concept itself — the RDA, the acceptable range, and how the floor is set — belongs to the *Macronutrients…* chapter)" | RDA defined here (owner per term-ownership.md); pointer narrowed to "about 0.8 g/kg/day (see the *Macronutrients* chapter)" | cross-reference (Macronutrients gives only the 0.8 g/kg/day reference; it does not define the RDA, an acceptable range or how the floor is set) |
| adulthood-working-life.qmd | Alcohol flush callout | "deeper management sits with the addiction services and future chapters" | "deeper management sits with addiction services" | cross-reference (no later chapter covers alcohol-use management) |
| adulthood-working-life.qmd | Recognising trouble | "the *Obesity & Metabolic Syndrome* and diabetes chapters' territory to manage" | "(see the *Obesity & Metabolic Syndrome* and *Type 2 Diabetes* chapters)" | cross-reference (generic "diabetes chapters" retargeted to the canonical chapter) |
| rahmat-shift-runner.case.yml | q-alcohol option c feedback; remedial body; end-good keyPoints[3] | "raised throat-cancer risk" / "(throat-cancer risk)" | "raised oesophageal-cancer risk" / "(oesophageal-cancer risk)" | contradiction case vs chapter (chapter, quiz q6 and case q-alcohol a/b cite oesophageal cancer, `@brooks2009aldh2`) |
| adulthood-working-life.quiz.yml | q5 option 2 text | "Correct — a daily glass of red wine meaningfully protects the heart, so he should continue" | "A daily glass of red wine protects the heart, so he should continue" | label misnames content (a false option labelled "Correct") |

## Deferred content concerns (need source checking; not changed)

1. qmd, Defending muscle: "as little as two sessions a week meaningfully preserves muscle" is cited to
   `schoenfeld2017rtvolume`, a meta-analysis of weekly set volume vs hypertrophy, not of session frequency or
   maintenance. Verify the source supports "two sessions a week".
2. case q-fuel option a feedback: "A ~1-hour recreational run" vs persona "runs 10–15 km" (roughly 1–1.5 h);
   Thomas 2016 allows small carbohydrate amounts in sustained exercise of about 1–2.5 h, so "sports drinks
   are for much longer events" may be slightly overstated at the 15 km end.
3. case q-fuel option b: the distractor's "8–10 g/kg" carb-loading figure is not in the chapter; check it
   against `thomas2016nutritionathletic` (which, as I recall, gives 10–12 g/kg/day for loading) so the
   athlete figure quoted is accurate even in a wrong option.
4. qmd, Singapore picture: "150–300 minutes a week" omits "moderate-intensity (aerobic)", which `spag2022`
   and `bull2020whopa` both specify.
5. qmd, Singapore picture: "about 9 in 10 exceed the sodium limit" (`mohNNS2022`) gives no population base or
   limit value; check against the NNS 2022 report.
6. qmd, weight creep: "roughly 0.5–1 kg a year" is cited to `hill2009energygap` (bib note: median gap
   ~30 kcal/day); confirm the kg/year range is stated in that source.
7. Book-level: no chapter teaches the RDA concept (reference intakes, how the floor is set); it is now
   glossed here as the owner. The author may prefer *Macronutrients* to teach it properly.

## Deferred backlog

- 🔬 Food science and 🍳 Healthy kitchen house blocks are absent (only the 🍜 block exists); adding them is
  deferred (decision 4).
- No substantive teaching figure (§11f), e.g. a TEE-by-age schematic from Pontzer 2021 or a hawker-plate
  photo; deferred (decision 4).
- `components/src/FuelDial.svelte` (not owned) still hard-codes the toggle "Show the athlete guidance
  (probably not you)", a payoff line with a bold "ordinary food and water" and an arrow, and a FALLBACK
  title/intro with em dashes and "you"; needs a component pass.
- "Progress is saved locally" tip in the Practise section: the pilot has it, no Part II chapter does; decide
  book-wide.
- Render and TOC check (three movements, `###` only under the first two, chapter-map anchors) still to be
  run by the orchestrator.
- Glossary: add the 12 rows below to `book/glossary.qmd` in the glossary step.

## Glossary rows owned (Introduced in: Adulthood & Working Life)

| Term | Meaning | Introduced in |
|---|---|---|
| Acetaldehyde | The carcinogenic breakdown product of alcohol; its build-up causes the alcohol flush | Adulthood & Working Life |
| Alcohol flush | Reddening after alcohol in people who carry an ALDH2 variant; it marks a build-up of acetaldehyde, and with continued drinking signals a raised risk of oesophageal cancer | Adulthood & Working Life |
| Anabolic window | The period after exercise in which protein is claimed to be best used for muscle; it is far wider than marketed | Adulthood & Working Life |
| AUDIT-C | The consumption questions of the Alcohol Use Disorders Identification Test: a short questionnaire used to screen adults for hazardous or harmful drinking | Adulthood & Working Life |
| Circadian misalignment | Eating, sleeping and working out of step with the body's internal clock, as in night-shift work | Adulthood & Working Life |
| Group 1 carcinogen | An agent classed as an established cause of cancer in humans; alcohol is one | Adulthood & Working Life |
| Mendelian randomisation | A study design that uses genetic variants to remove the biases of observational comparisons, such as the sick "abstainers" in alcohol studies | Adulthood & Working Life |
| Recommended Dietary Allowance (RDA) | A population reference intake adequate for nearly all healthy adults; for protein about 0.8 g/kg/day, a floor rather than an optimum | Adulthood & Working Life |
| Resistance exercise | Muscle-strengthening exercise against a load; the necessary stimulus for keeping muscle | Adulthood & Working Life |
| Standard drink | A reference serving containing about 10 g of alcohol, used in drinking guidance | Adulthood & Working Life |
| Weight creep | The slow adult weight gain, of roughly 0.5–1 kg a year, that comes from a small, chronic energy surplus | Adulthood & Working Life |
| Weight cycling | Repeated weight loss and regain | Adulthood & Working Life |

## Owner terms not occurring in the chapter

None: all 12 terms assigned to `adulthood-working-life` occur and are bold-defined at their teaching point.

## Overrides of the plan

- Decision 5 over plan Uncertainty 1: the driver block became the standard two-row table, not prose.
- term-ownership.md over plan §4: metabolic syndrome (owner *Obesity & Metabolic Syndrome*) is not bolded or
  glossary-listed here; it keeps a plain parenthetical gloss. Hypertension (owner *Cardiovascular Disease &
  Hypertension*) used plain.
- chapter-names.json over plan §4: glossary "Introduced in" is "Adulthood & Working Life"; quiz title follows.
- Plan's integrative-metabolism link: first mention now anchored to `#sec-fed` (muscle as glucose sink),
  second to `#sec-exercise`.
- Quiz q7 option 3 kept short ("Skip eating entirely on night shifts"); the correct option was trimmed
  instead of padding the distractor (§11g).

## Fix round 1 (verifier fixes)

Files touched: `book/chapters/adulthood-working-life.qmd`, `book/quizzes/adulthood-working-life.quiz.yml`,
`book/cases/rahmat-shift-runner.case.yml`. `book/diagrams/fuel-dial.yml` was not changed. Earlier sections of
this log were updated in place: the cross-reference list (new `#sec-phenotype` pointer), the RDA glossary row
("most" → "nearly all") and the case-bold note.

### Checks after the round

| Check | HEAD | After round 1 |
|---|---|---|
| Citation multiset | 43 lines | IDENTICAL (diff empty) |
| `data-island` | 3 | 3 |
| Callouts | 2 | 8 (unchanged from round 0: +1 Learning objectives, +5 Check yourself) |
| Tables | 0 | 2 (unchanged from round 0) |
| Figures | 0 | 0 |
| `{#sec/fig}` ids in HEAD | none | n/a; every chapter-map link still resolves |

- copy-audit `--you` over the 4 files: 0 flags; qmd 0 em dashes, bold 7.1/1,000 words, 0 "rather than",
  2 "you" (both inside quoted beliefs, as before).
- js-yaml: quiz, case and fuel-dial load OK. `validate-cases.mjs`: `OK rahmat-shift-runner.case.yml`.
- Option lengths (correct first). Quiz: q1 87/81/67, q2 67/77/76, q3 56/65/59, q4 74/62/61, q5 74/67/76,
  q6 76/63/68, q7 72/66/36. Case: q-fuel 104/96/86 (was 111), q-protein 74/79/78 (was 95),
  q-shift 73/65/42 (was 86), q-weight 73/74/76 (was 91), q-alcohol 116/90/74 (was 95; see below).

### Citation re-attachment (sentence splitting had detached keys; restored to the HEAD grouping)

| Location | Before (round 0) | After |
|---|---|---|
| Alcohol, opening paragraph | "...for health. Alcohol is a **Group 1 carcinogen** (...) and causes at least seven cancers, including breast and oesophageal cancer. A meaningful share ... [3 keys]" | "...for health: alcohol is a **Group 1 carcinogen** (...) that causes at least seven cancers, including breast and oesophageal cancer, and a meaningful share ... [3 keys]" |
| Alcohol, red-wine paragraph | "...because they were ill. **Mendelian randomisation** studies ... [@piano2025ahaalcohol; @biddinger2022mralcohol]" | "...because they were ill; **Mendelian randomisation** studies ... [same keys]" |
| Alcohol, screening paragraph | "...screen briefly, advise, and refer anyone with hazardous or harmful use. The usual screen is a short questionnaire such as the **AUDIT-C** (...); deeper management ... [@uspstf2018alcohol; @bush1998auditc]" | "...screen briefly (usually with a short questionnaire such as the **AUDIT-C**, the consumption questions of the Alcohol Use Disorders Identification Test), advise, and refer anyone with hazardous or harmful use; deeper management sits with addiction services [same keys]" |
| Singapore picture, alcohol | "...one for women. Health messaging now cites the "no safe level" position, and the ALDH2 flush ... [@mohAlcoholLimits2018; @healthhubAlcoholHazards]" | "...one for women, and health messaging now cites the "no safe level" position; the ALDH2 flush ... [same keys]" |
| Metabolism, weight creep | "...a small, chronic energy surplus. The surplus usually arises from ... [@hill2009energygap]" | "...a small, chronic energy surplus, which usually arises from ... [@hill2009energygap]" |
| Protein worries, bullet 1 | "...is adequate. The **anabolic window** (...) is far wider than the supplement industry implies, so food does the job without a powder or a 30-minute shake [@schoenfeld2013timing]." | "...is adequate; the **anabolic window** (...) is far wider than the supplement industry implies [@schoenfeld2013timing], so food does the job without a powder or a 30-minute shake." |

### Claim, hedge and caveat restorations

| File / location | Before (round 0) | After | Reason |
|---|---|---|---|
| case q-fuel option a (BLOCKER) | "For a run that long, normal meals and water are enough; carb-loading and sports drinks are for longer events." | "Normal meals and water cover that distance; carb-loading and sports drinks are for much longer events." | "much longer events" restored (HEAD claim; the threshold claim is deferred concern 2, which stays as written). The first half uses the length-cue fix's wording, which means the same as HEAD's "for a run of that length" without the "that long" ambiguity. The length-cue fix's "longer events" (dropping "much") was not applied, because it would reintroduce the blocker. |
| qmd, Fuelling everyday exercise, first sentence | "Most adults who are not training hard need no special sports nutrition: ..." | "Most adults are not training hard, and they need no special sports nutrition: ..." | Quantifier restored to HEAD's "default that fits most adults". |
| qmd, Recognising trouble, Asian BMI | "(hence the lower Asian cut-offs; see the *Energy Balance* chapter)" | "(hence Singapore's lower BMI cut-offs; see the [*Obesity & Metabolic Syndrome*](obesity-metabolic-syndrome.qmd#sec-phenotype) chapter)" | Cross-reference (decision 1): Obesity & Metabolic Syndrome `#sec-phenotype` teaches the ≥23 / ≥27.5 cut-offs and the lower-BMI-risk reason; Energy Balance only mentions them. Pointer added to the cross-reference list above. |
| quiz q7 option 3 feedback | "Fasting through every shift is not needed; ..." | "Fasting through every shift is not needed or advisable; ..." | Caveat restored (HEAD "not necessary or advisable"). |
| quiz q7 correct option | "Keep main meals in the daytime and eat lightly in the small hours" | "Keep main meals in the daytime and avoid heavy eating in the small hours" | Mirrors the chapter's cited Chellappa wording. |
| quiz q1 correct option | "Expenditure is steady from about 20 to 60; ..." | "Expenditure is broadly steady from about 20 to 60; ..." | Hedge restored. |
| qmd opener | "...but energy expenditure barely changes in these years;" | "...but size-adjusted energy expenditure barely changes in these years;" | Qualifier the chapter and @pontzer2021energy depend on. |
| qmd, Recognising trouble, topic sentence | "Most adult nutrition care is prevention, but ..." | "Most of the advice above is preventive, but ..." | Scope back to the chapter's content. The verifier's "Most of this chapter is about prevention" was not used: copy-audit flags "this chapter" as metacommentary (§11g); "the advice above" keeps the same scope. |
| qmd, Check yourself (office worker) | "...more protein adds nothing." | "...more protein is not better." | Matches the chapter's "so more is not better". |
| qmd, protein lead-in | "Three common worries about protein are not supported by the evidence:" | "The evidence answers three common worries about protein:" | The third worry is partly supported ("small edge for animal protein"), and the bullets state the evidence, not the worries. Of the two proposed fixes, this one meets both concerns. |
| qmd, RDA definition (+ glossary row in this log) | "adequate for most healthy adults" | "adequate for nearly all healthy adults" | Standard textbook definition of the RDA (decision 2 gloss). |
| qmd, learning objective 1 | "Explain why total energy expenditure stays steady through the working decades, and what drives adult weight creep instead." | "Explain why a slowing metabolism accounts for little of midlife weight gain, and what drives adult weight creep instead." | The chapter reports steady TEE but does not explain it. Two fixes were proposed; this follows the second ("Explain why midlife weight gain is not caused by a slowing metabolism") but uses the chapter's own hedge ("accounts for little of midlife weight gain"), so the objective claims no more than the text. |
| case q-alcohol option a | "The heart claim no longer holds up, and the flushing matters. Can I ask about your drinking?" | "Gently: the 'good for the heart' idea no longer holds up, and the flushing matters. Can I ask about your drinking?" | Plain, gentle patient dialogue restored (§11e). |
| case remedial body | "so ask, advise cutting down, and screen or refer." | "so ask, advise cutting down, screen briefly, and refer if drinking is hazardous." | A sequence, not alternatives; matches the chapter and the q-alcohol a feedback. |
| qmd, Singapore picture, shift work | "**Shift work and long hours are common.** They are widespread in healthcare, transport and food and beverage," | "**Shift work and long hours are common in several sectors.** These include healthcare, transport and food and beverage," | Sector scope restored (HEAD "common across healthcare, transport and food-and-beverage") and the "common ... widespread" repetition removed. The two proposed fixes were combined; "cluster in" was not used because it implies a concentration HEAD did not claim. |

### Structure and readability (§11c, §11g, §11j)

- Close (`#sec-close`): first two sentences kept. "Internally, the task is to defend muscle ... Externally, the task is
  to eat well ... Two messages have changed: most active adults need only ordinary food and water, and no one should
  drink for their heart." → "Midlife weight creep therefore reflects a small, correctable energy surplus, which comes
  from falling activity and muscle plus a little more intake. The surplus is met by staying active, keeping muscle
  and managing the food environment, not by a crash diet aimed at a metabolic decline that is not happening." Every
  claim is the chapter's own (weight-creep paragraph). Two sentences instead of the proposed single ~45-word one, to
  stay near the ~25-word lint. "Managing the food environment" was added so the fixes match the chapter's list and do
  not imply that activity alone corrects the surplus (the chapter calls activity a weak lever once excess has
  accumulated).
- Fuelling: lead-in rewritten so the why sits in prose: "Carbohydrate needs rise with training volume (for the fuel
  physiology of exercise, see the [*Integrative Metabolism*](integrative-metabolism.qmd#sec-exercise) chapter). The
  high-carbohydrate and during-exercise fuelling advice, however, is calibrated for serious endurance athletes
  training for hours at a time, and does not apply to recreational exercisers [@thomas2016nutritionathletic]. Below
  that volume, the advice is simpler:". Bullets are now in load order (30–60-minute session; hard, once-daily
  training; recovery, whose exception is twice-daily training). The athlete bullet and the stray parenthetical
  paragraph were deleted. The pointer sits beside the carbohydrate sentence instead of after the citation, and the
  athlete advice is its own sentence (as in HEAD, where the key sat on that sentence alone). Citation multiset
  unchanged.
- AUDIT-C / screening paragraph moved, unchanged apart from the rejoin above, out of the "Is the alcohol flush
  harmless?" warning callout. It now sits as plain prose after the callout's closing `:::`, before the two Check
  yourself callouts. The callout holds only the flush content and its one bold warning.
- Long sentences split: "...overstates the mid-adult loss, but the direction is real. These decades are therefore
  the window to build a reserve ...". Weight cycling: the proposed split would have left "has been linked to worse
  outcomes" without its key, so the key now closes the sentence carrying both cited claims, and the inference
  follows: "**Weight cycling** (repeated weight loss and regain) has been linked to worse outcomes, but that signal
  is heavily confounded by illness causing unintentional weight loss [@zou2019fluctuation]. The link is therefore
  not proof that dieting itself kills; the practical reading is "aim for steady, not sawtooth"." (Before: one
  44-word sentence ending in the key.)
- Caffeine: "On caffeine, the working adult's staple: a coffee ..." → "Caffeine, the working adult's staple, is a separate
  question: a coffee ...".
- Opener comma: "Through the working decades growth is finished" → "Through the working decades, growth is finished".
- Case length cue (§11g): q-protein a → "About 1.2–1.6 g per kilo a day from food, safe with your normal kidneys.";
  q-shift a → "Shift your main meals to the daytime and keep small-hours eating light."; q-weight a → "A few small
  changes you can keep, like fewer drinks, beat a crash diet."; q-fuel a as in the table above. Feedback unchanged.
- Case remedial: "the **alcohol**:" → "the alcohol:" (emphasis bold removed; the case now has no bold).

### Not applied, or applied differently

- Close "enough, not heroic, protein" (minor): the sentence it would have edited ("Internally, the task is ...") was
  deleted by the major close fix. The "more is not better" point stays in the protein paragraph and its Check
  yourself.
- Case q-alcohol a is still the longest option (116 vs 90/74). The plain-language fix restored the gentle framing,
  and the length-cue fix proposed nothing for this question. Trimming it further would clip the patient-facing
  wording again, and §11g forbids padding distractors.
- Case q-fuel a is still slightly the longest (104 vs 96/86) because "much" was kept (blocker).

### Deferred content concerns

Unchanged. Concern 2 (q-fuel "much longer events") stays as written, and the text it refers to is again HEAD's claim.

## Fix round 2 (verifier fixes)

Files touched: `book/chapters/adulthood-working-life.qmd`, `book/quizzes/adulthood-working-life.quiz.yml`,
`book/cases/rahmat-shift-runner.case.yml`. `book/diagrams/fuel-dial.yml` was not changed. Three earlier
bullets in "Summary of changes" (TEE terminology, citation moves, glosses) now carry round-2 notes. Round-1
snapshots kept beside this log (`adulthood-working-life.round1.qmd`, `adulthood-working-life.quiz.round1.yml`,
`rahmat-shift-runner.case.round1.yml`).

### Checks after the round

| Check | HEAD | After round 2 |
|---|---|---|
| Citation multiset | 43 lines | IDENTICAL (diff empty) |
| `data-island` | 3 | 3 |
| Callouts | 2 | 8 (unchanged since round 0: +1 Learning objectives, +5 Check yourself) |
| Tables | 0 | 2 (unchanged since round 0) |
| Figures | 0 | 0 |
| `{#sec/fig}` ids in HEAD | none | n/a; all 8 chapter-map links still resolve |

- copy-audit `--you` over the 4 files: 0 flags; qmd 0 em dashes, bold 7.0/1,000 words, 0 "rather than",
  2 "you" (both inside quoted beliefs, as before).
- js-yaml: fuel-dial, quiz and case load OK. `validate-cases.mjs`: `OK rahmat-shift-runner.case.yml` (exit 0).
- Option lengths (correct first). Quiz: q1 87/81/67, q2 67/77/76, q3 56/65/59, q4 59/62/61 (was 74),
  q5 74/67/76, q6 72/63/68 (was 76), q7 60/66/36 (was 72). Case: q-fuel 104/96/86, q-protein 82/79/78
  (was 74), q-shift 63/65/42 (was 73), q-weight 76/74/76 (was 73), q-alcohol 103/90/74 (was 116).
  The correct option is now the longest in quiz q1 and q6 only (margins 6 and 4), against 4 of 7 before.
- Feedback openers unchanged; no consecutive repeats; no "Correct"/"Right" openers.

### Chapter (`adulthood-working-life.qmd`)

| Issue | Location | Before | After | Note |
|---|---|---|---|---|
| 1 (major), 2 (major), 14 | Close `#sec-close`, last two sentences | "Midlife weight creep therefore reflects a small, correctable energy surplus, which comes from falling activity and muscle plus a little more intake. The surplus is met by staying active, keeping muscle and managing the food environment, not by a crash diet aimed at a metabolic decline that is not happening." | "Midlife weight creep reflects a small, correctable surplus, not a metabolic decline. The levers are therefore the ones the working decades hand over: resistance exercise with enough protein to keep muscle, daytime-weighted meals on shifts, and less alcohol, which adds empty energy and has no established safe level. Two messages have changed: most active adults need only ordinary food and water, not sports nutrition, and no one should drink for their heart." | The three fixes conflict, so they were combined. The first two sentences are kept and the issue-14 replacement is used. The issue-2 sentence is appended word for word. Issue 14's item "ordinary food and water for most training" is dropped because the issue-2 sentence makes the same point. Issue 1 is resolved by the replacement: the unhedged causal clause is gone, and the hedged "usually arises" stays in the weight-creep paragraph and in Check yourself 1. Issue 14's single 55-word sentence is split in two (§11j lint), with "is" changed to "reflects" (weight creep is weight gain, which reflects a surplus). Every claim is already in the chapter: Defending muscle, the Chellappa paragraph, Alcohol and Fuelling. No key. |
| 3 (major) | Singapore picture, hawker plate | "The National Nutrition Survey flags population-level gaps, notably that about 9 in 10 exceed the sodium limit [@mohNNS2022]. With most adults eating out regularly, these gaps are built into everyday meals more than into home cooking [@naidoo2017eatingout]." | "With most adults eating out regularly, the population-level gaps the National Nutrition Survey flags, notably that about 9 in 10 exceed the sodium limit, are built into everyday meals more than into home cooking [@mohNNS2022; @naidoo2017eatingout]." | HEAD's key grouping restored. The multiset is unchanged. |
| 4 | Chapter map, metabolism node | "expenditure steady from about 20 to 60" | "size-adjusted expenditure steady from about 20 to 60" | As specified. |
| 5 | Check yourself 1, last sentence | "...managing the food environment, and because activity alone is a weak lever once excess has accumulated, acting early on the surplus works best." | "...managing the food environment. Because activity alone is a fairly weak lever once excess has accumulated, preventing the surplus works better than trying to out-exercise it later." | Hedge and comparison restored to match the body. Split at "and because" so the answer is 4 sentences. |
| 6 | Shift work, timing paragraph | "The best-supported practical change for shift workers concerns when to eat." | "The most useful evidence-aligned change for shift workers concerns when to eat." | Same change made in quiz q7 and case q-shift (below). |
| 7, 27 | Opener | "*Through the working decades, growth is finished, ... the levers are activity, muscle and the food environment.*" | "*In the working decades, growth is finished, ... the levers are activity, muscle, the food environment and a few small habits.*" | As specified. |
| 8 | Fuelling, first paragraph | "so the practical risk at this stage is over-fuelling." | "so the practical aim is to guard against over-fuelling." | HEAD's aim wording. |
| 9 | Eating out | "The hawker plate, more than the home recipe, is therefore the real lever" | "The hawker plate, not the home recipe, is therefore the real lever" | HEAD's contrast. |
| 15 | Alcohol, screening paragraph | "For any adult, the practical role at this stage is to screen briefly (usually with a short questionnaire such as the **AUDIT-C**, the consumption questions of the Alcohol Use Disorders Identification Test), advise, and refer anyone with hazardous or harmful use; deeper management sits with addiction services [@uspstf2018alcohol; @bush1998auditc]." | "For any adult, the clinician's role at this stage is to screen briefly, advise, and refer anyone with hazardous or harmful use; deeper management sits with addiction services [@uspstf2018alcohol]. The usual screen is a short questionnaire such as the **AUDIT-C**, the consumption questions of the Alcohol Use Disorders Identification Test [@bush1998auditc]." | The sentence now has an agent and is split in two. Each key sits on its own claim (bib notes: uspstf2018alcohol "Grade B: screen, advise, refer"; bush1998auditc "AUDIT-C is a brief-screen convention"). The multiset is unchanged. This supersedes the round-1 rejoin. |
| 16 | Metabolism, opening paragraph | "Total energy expenditure (TEE), measured with doubly labelled water across the whole lifespan and adjusted for body size, is in fact steady from about 20 to 60. It does not ... [@pontzer2021energy]. (TEE is the sum of basal metabolic rate, the thermic effect of food and physical activity; see the [*Energy Balance*](energy-balance.qmd#sec-expenditure) chapter.) The familiar explanation ..." | "Total energy expenditure (the sum of basal metabolic rate, the thermic effect of food and physical activity; see the [*Energy Balance*](energy-balance.qmd#sec-expenditure) chapter) has been measured with doubly labelled water across the whole lifespan. Adjusted for body size, it is in fact steady from about 20 to 60. It does not ... [@pontzer2021energy]. The familiar explanation ..." | The gloss moves to the first use, "TEE" is dropped (it was never used outside the gloss), and the parenthetical sentence that broke the evidence-to-conclusion chain is deleted. The proposed single 43-word sentence (with a 34-word subject) is split in two. The gloss reuses the existing wording. The key keeps its HEAD position. `#sec-expenditure` exists in energy-balance.qmd in both HEAD and the working copy. |
| 17 | Defending muscle, topic sentence; learning objective 2 | "Two levers defend muscle, and they work only together." / "Explain why resistance exercise and adequate protein defend muscle only together, and state the protein range for an active adult." | "Two levers defend muscle, and the second depends on the first." / "Explain why protein defends muscle only alongside resistance exercise, and state the protein range for an active adult." | As specified. The chapter-map label "two levers that work together" makes no "only" claim and is kept. |
| 20 | Check yourself (park run), first sentence | "Fuelling scales with the actual training load." | "Muscle glycogen, the limited carbohydrate store, runs out only in long efforts such as a marathon (the "wall" in the *Integrative Metabolism* chapter). A 40-minute run therefore ends long before carbohydrate during exercise could help." | Checked against Integrative Metabolism `#sec-exercise` (HEAD and working copy): glycogen is "the limited store", and running it down is "hitting the wall", the fade "a marathoner feels near 30 km". Its 🍳 callout adds that loading and fuelling during "help only for prolonged, hard efforts lasting well beyond an hour". So there is no claim beyond that chapter. The proposed sentence is split in two, giving 4 sentences, and uses the chapter's double quotes. The remaining two sentences are unchanged. |
| 21 | 🍜 Hydration callout / Fuelling prose | Caffeine sentence as the last sentence of the callout | Same sentence, unchanged, as a paragraph after the three load bullets and before the callout | A whole-sentence move. The callout now holds only fluid: intro, three bullets and the Micronutrients pointer. |
| 22 | Food environment, run-in | "**Stress and short sleep shift intake.**" | "**Stress and short sleep change intake.**" | As specified. |
| 23 | Defending muscle | "to about sixty" | "to about 60" | Digits (house rule). |
| 26 | Refer table, row 1 | "Weight creep crossing the lower Asian BMI cut-offs / Address early with small, sustainable changes; established obesity or metabolic syndrome is managed as a condition in its own right" | "Weight creep crossing Singapore's lower BMI cut-offs / Address early with small, sustainable changes" | The management pointer stays in the paragraph above. |
| (tidy) | Muscle-levers and Singapore hawker paragraphs | Long or ragged source lines | Rewrapped | Whitespace only; the text is unchanged. |

### Quiz (`adulthood-working-life.quiz.yml`)

| Issue | Location | Before | After | Note |
|---|---|---|---|---|
| 24 | q1 correct feedback | "...comes from a small chronic surplus plus falling activity and muscle." | "...comes from a small chronic surplus, usually from falling activity and muscle plus a little more intake." | As specified. |
| 24 | q1 option 2 feedback | "...the creep comes from a small surplus and declining activity and muscle." | "...the creep comes from a small surplus, usually driven by declining activity and muscle." | The proposed text "driven by declining activity and muscle" is used with "usually" added. The chapter hedges this cause, and an unhedged version would repeat the overstatement issue 1 flags. |
| 18 | q6 correct option | "The flush signals acetaldehyde build-up and a raised oesophageal-cancer risk" (76) | "The flush marks acetaldehyde build-up and raised oesophageal-cancer risk" (72) | As specified. |
| 18 | q7 correct option | "Keep main meals in the daytime and avoid heavy eating in the small hours" (72) | "Eat main meals by day; avoid heavy eating in the small hours" (60) | As specified. |
| 18 (extension) | q4 correct option | "Higher protein does not harm kidney function in people with normal kidneys" (74) | "Higher protein intakes are safe with normal kidney function" (59) | The problem statement names q4, but no fix was proposed for it. The new text mirrors the chapter ("Higher intakes are safe for people with normal kidney function"), and the distractors are untouched. q1 is left (87 vs 81, a margin like q6's after the proposed fix). |
| 6 | q7 correct feedback | "...is the best-supported practical change." | "...is the most evidence-aligned practical change." | HEAD's wording. |

### Case (`rahmat-shift-runner.case.yml`)

| Issue | Location | Before | After | Note |
|---|---|---|---|---|
| 11 | q-protein option a | "About 1.2–1.6 g per kilo a day from food, safe with your normal kidneys." (74) | "About 1.2–1.6 g per kilo a day from food is plenty, and safe for normal kidneys." (82) | "is plenty" is restored, which answers "Someone said 3 grams per kilo" and fixes the fragment. The proposed "safe with your normal kidneys" would make the option 88 characters against 79/78 distractors, a new length cue (§11g), so "with your normal" became "for normal". The caveat "normal" is kept. |
| 12, 19 | q-alcohol option a | "Gently: the 'good for the heart' idea no longer holds up, and the flushing matters. Can I ask about your drinking?" (116) | "Two things: the heart claim no longer holds, and the flushing matters. Can I ask about your drinking?" (103) | Issue 19's text is used. It removes the stage-direction "Gently:" with HEAD's spoken "Two things" opener (issue 12's problem) and shortens the option. Issue 12's longer text (128) was not used because it would worsen the length cue issue 19 fixes. Feedback unchanged. |
| 19 | q-shift option a | "Shift your main meals to the daytime and keep small-hours eating light." (73) | "Move your main meals to the daytime and eat lightly at night." (63) | As specified. Feedback unchanged apart from issue 6. |
| 6 | q-shift option a feedback | "...is the best-supported practical change." | "...is the most evidence-aligned practical change." | HEAD's wording. |
| 13 | q-weight option a | "A few small changes you can keep, like fewer drinks, beat a crash diet." (73) | "Small changes you can keep, starting with fewer drinks, beat a crash diet." (76) | "starting with" is applied, so the drinks lead, as the distractor feedback assumes. "A few small changes" became "Small changes" to keep the option at parity: the proposed text is 82 against 74/76. |
| (CKD) | end-partial keyPoints[1] | "...safe for healthy kidneys (not CKD)." | "...safe for healthy kidneys (not in kidney disease)." | As specified. CKD is not expanded in a Part II case. |

### Not applied, or applied differently

- Issues 10 and 25 (`#sec-phenotype`): no change. The anchor resolves in the working copy of
  `obesity-metabolic-syndrome.qmd` ("### The phenotype: BMI, waist and why Singapore acts earlier
  {#sec-phenotype}") but not in HEAD. This chapter must be committed together with that one. If that retrofit
  is held back, change `obesity-metabolic-syndrome.qmd#sec-phenotype` to `obesity-metabolic-syndrome.qmd` in
  the Recognising-trouble paragraph. Committing is outside this agent's remit.
- Issue 1: the requested "which usually comes from ..." text was not inserted, because issue 14's
  replacement removed the clause. The overstatement no longer exists.
- Issue 12: its exact text was not used (superseded by issue 19's text, which fixes the same problem).
- Issue 14: the list item "ordinary food and water for most training" was dropped (duplicate of issue 2's
  sentence), and the sentence was split (lint).
- Issue 16: applied as two sentences instead of one 43-word sentence (lint). All three requested effects
  were made: gloss at first use, "TEE" dropped, parenthetical sentence deleted.
- Case q-fuel a is still the longest (104 vs 96/86). No fix was proposed, and "much" must stay (round-1
  blocker). Case q-alcohol a is still the longest (103 vs 90/74) under issue 19's own text. Trimming further
  would cut "Two things" or the permission question.

### Deferred content concerns

Unchanged (1–7 above). No new concern: every claim added this round is already in this chapter or, for the
park-run answer, in the *Integrative Metabolism* chapter at `#sec-exercise`.
