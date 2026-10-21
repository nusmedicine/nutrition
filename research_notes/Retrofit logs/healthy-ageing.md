# Retrofit log: Healthy Ageing (`healthy-ageing`)

Files changed: `book/chapters/healthy-ageing.qmd`, `book/diagrams/same-plate.yml`,
`book/quizzes/healthy-ageing.quiz.yml`, `book/cases/mdm-lim-widowed.case.yml`.

## Gate (HEAD → working copy)

- Citation multiset: IDENTICAL (47 keys, 53 uses; `diff` of `uniq -c` output empty).
- Islands 3 → 3. Figures 0 → 0.
- Callouts 2 → 10: + Learning objectives (1), + Check yourself (6: two after *What changes inside*, two after
  *Why older adults eat less*, one after *Who they eat with*, one after *Recognising trouble*), + the
  "Progress is saved locally" tip before the case (1; the same furniture 14 other chapters carry, and in
  the plan). The 🍜 callout and the do-no-harm warning stay, in order.
- Tables 1 → 2: + the decision-5 Part II driver table.
- New non-counted diagrams: chapter map (`.concept-tree`) and one `.spectrum` (ageing in health → clinical
  problem) at the top of *Recognising trouble*.
- HEAD had no `{#sec-…}`/`{#fig-…}` ids, so none could be lost. Added: `sec-overview`, `sec-ageing-inside`,
  `sec-ageing-protein`, `sec-ageing-watchlist`, `sec-ageing-eat-less`, `sec-ageing-social`,
  `sec-ageing-refer`, `sec-singapore`, `sec-close`, `sec-quiz`, `sec-case`.
- copy-audit `--you`: 0 flags across all four files; 0 em dashes; 0 "rather than" (was 9); bold 5.7/1,000
  words (was 36.2). Remaining "you": the clinician diet-history sentence, the quoted "Who do you eat
  with?" (prose and a Check yourself title), and the case-intro instruction.
- YAML: all three files load with js-yaml. `validate-cases.mjs`: `OK mdm-lim-widowed.case.yml`.
- Feedback openers checked programmatically: no two consecutive feedbacks share an opening word in the quiz
  or the case; no "Correct"/"Right" openers; options unbolded, 8–16 words.

## Summary of changes

- Opener: four unitalicised sentences (with "keep your muscle", bold "up", meta) → one italic blockquote,
  two sentences.
- Learning objectives (6) and a four-branch chapter map added.
- At a glance: meta paragraph ("This chapter covers…") rewritten; the bold inline-header two-driver list →
  the decision-5 table (cells from the original text; "per calorie" → "per kcal"); **nutrient density**
  bold-defined; the island sentence now says what the island shows.
- What changes inside: "anorexia of ageing" bold-defined (was an undefined quoted term); meta ("Those four
  words carry the whole message", "gets it exactly backwards") removed; "fewer calories" → "less energy".
- Protein: inline-header bullets (a causal chain each) → two paragraphs; **sarcopenia** bold-defined at its
  teaching point; scaffold "Why it matters now:" removed; the falls sentence split with its citations kept
  on the falls claim.
- Watch-list: lead paragraph meta removed; three bold-labelled bullets → four topic-sentence paragraphs (B12,
  vitamin D, calcium, fluids); **atrophic gastritis** and **PPIs** bold-defined with one-line glosses;
  "the sunny-country paradox" label and "robust" removed; "in the old" → "in older people".
- Why older adults eat less: bold labels dropped from the three parallel items (kept as a list introduced
  by a full sentence); medical terms used and defined (**dysphagia**, **texture-modified food**,
  **polypharmacy**); "classic … useful" padding removed. 🍜 callout: cross-sentence negative parallelism
  fixed, six bolds removed, "elder" → "older adult".
- Social plate: one 220-word paragraph with ~10 bolds and a "So" opener → paragraph + three-item list +
  one clinician sentence; **social isolation** and **food insecurity** defined; patient-directed question
  made indirect so the list stays parallel.
- Recognising trouble: spectrum added; topic sentence + split sentences; **frailty** defined; do-no-harm
  heading de-imperatived ("Do no harm: restrictive diets in a frail older adult"), one bold kept; "*obese*
  older adult" → "older adult with obesity"; meta lead-in to the table trimmed; table unbolded, reordered
  (cardinal sign first, then chapter order), medical terms used.
- Singapore picture: four parallel paragraphs, each with one bold run-in topic sentence; in-prose emoji
  removed; meta ("The local anchors map cleanly…", "a striking finding is that") removed; "seniors" →
  "older adults"; "rather than" → "not"/"instead of".
- Close: summary-with-meta → content answer (one-line answer, four-item list, one closing line).
- Case section: spoiler-laden intro → neutral set-up; progress tip added.
- Cross-references to canonical names (chapter-names.json): *Adulthood & Working Life* (was "*Adulthood:
  working life & activity*" and "*Adulthood*"), *Macronutrients* (was "*Macronutrients: Carbohydrate,
  Protein, Fat & Fibre*"), *Bone & Joint Health* (was "the bone chapter"), *Undernutrition & Malnutrition*
  (quiz/case: was "the undernutrition chapter"). *Menopause & Midlife Health* follows chapter-names.json
  (the plan's "*Menopause & Midlife*" is overridden).
- same-plate.yml: em dashes removed (intro, why, comment); "a frail senior" → "a frail older adult";
  "density UP, restriction OFF" → plain; credit reworded (no em dash). Labels and numbers unchanged.
- Quiz: 24 em dashes and all "Correct."/"Correct —" openers removed; options trimmed to parallel statements
  with periods, rationale moved to feedback; q5 stem meta ("key teaching point") replaced; "elder(ly)" →
  "older"; "sunny-country paradox" label dropped.
- Case: 34 em dashes and the "Right."/"Correct —"/"Unsafe." openers removed; bold removed from stems and the
  remedial body; "elder" → "older woman/adult"; "+"/"=" shorthand → words; objectives reworded (no em
  dashes); intro spoiler removed ("the tempting 'eat healthier' advice is the wrong one here").

## Content fixes (decision 1 categories)

| File | Location | Before | After | Category |
|---|---|---|---|---|
| healthy-ageing.qmd | At a glance, island sentence | "The interactive makes it concrete: watch the needs diverge with age, then rebuild a real local meal to meet them." | "The porridge builder below shows the principle on a familiar dish." | Label misnames what the content shows (SamePlate is a porridge builder; it has no needs-by-age view) |
| healthy-ageing.qmd | Watch-list, B12 | "With age the stomach makes less acid (atrophic gastritis)" | "With age the stomach often makes less acid because of atrophic gastritis" | Internal contradiction: the chapter's own at-risk list treats atrophic gastritis as a subgroup, and the Singapore picture says B12 deficiency is uncommon in well older adults |
| healthy-ageing.qmd | Practise intro | "lives in an HDB flat" | "lives alone in an HDB flat" | Chapter vs its own case (persona: "lives alone in an HDB flat") |
| healthy-ageing.qmd | Refer table | "~5%+, or looser clothes"; "atrophic gastritis, long-term metformin/PPI" | "About 5% or more over 6–12 months, or looser clothes"; "Atrophic gastritis, long-term metformin or a PPI, unexplained anaemia, or nerve or memory changes" | Table aligned with the chapter's own cited text (weight-loss window; full at-risk B12 list) |
| healthy-ageing.quiz.yml | q2 option b feedback | "Under-eating protein accelerates muscle loss." | "…and enough protein, with exercise, helps defend against sarcopenia." (fix round 1 added "with exercise") | Wording alignment with the chapter's cited claim (not a contradiction fix: HEAD restated the converse) |
| quiz + case | q7 a; q-refer a/b; end-good | "the undernutrition chapter" | "the *Undernutrition & Malnutrition* chapter" | Cross-reference to canonical chapter name (decision 6) |
| healthy-ageing.qmd | Protein; watch-list | "*Macronutrients: Carbohydrate, Protein, Fat & Fibre* chapter"; "*Adulthood* chapter"; "*Adulthood: working life & activity*"; "the bone chapter" | "*Macronutrients* chapter"; "*Adulthood & Working Life* chapter" (×2); "*Bone & Joint Health* chapter" | Cross-reference to canonical chapter name (decision 6) |

Glosses added under decision 2 (no new claims): atrophic gastritis ("a long-standing inflammation that thins
the stomach lining"), frailty ("a state of reduced physiological reserve in older age"), PPI expansion
("drugs that suppress stomach acid"), texture-modified food ("for example minced or puréed"), social
isolation ("…with other people").

## Deferred content concerns (need source-checking; not changed)

- Singapore picture, "B12 deficiency … is uncommon in well older adults locally, so testing is reserved for
  the at-risk": no citation. Quiz q3 option b feedback repeats the claim.
- Recognising trouble: frailty is given as weight loss, weakness, slow walking and exhaustion
  [@fried2001frailty]; Fried's phenotype has five criteria (also low physical activity). The list is
  incomplete (kept, "alongside" wording does not claim completeness).
- `@ye2023daha` (DaHA cohort) carries three different claims: the calcium mechanism ("needs rise as
  absorption becomes less efficient"), the calcium shortfall, and "many older adults eat alone even though
  they live with family". Verify the paper reports the eating-alone finding and supports the absorption
  mechanism.
- Protein: "protein works only when paired with the stimulus of exercise" [@deutz2014espen]: "only" is a
  strong claim; check against the ESPEN statement (new).
- B12: the "often" softening above was made for internal consistency; confirm against
  [@andres2005foodCobalamin] if the author prefers the source's wording (new).
- Cross-chapter: the *Undernutrition & Malnutrition* chapter also bold-defines **sarcopenia** (line 45) and
  carries a dysphagia/texture-modified section; under term-ownership.md these terms (and frailty) are owned
  here, so that chapter should use them unbolded with a reminder (not my file).

## Deferred backlog

- §11f: no substantive teaching figure beyond the island and the persona (needs a sourced, licensed image).
- House blocks: only the 🍜 block exists; 🔬/🍳 blocks not added (decision 4).
- `components/src/SamePlate.svelte` FALLBACK copy still has the old intro/why/credit strings (em dashes,
  "elder", "density UP"); harmless unless the YAML fails to load. Out of scope (components).
- Glossary: the 12 rows below go into `book/glossary.qmd` (not my file).
- Render check not run (forbidden here): confirm out-of-tree that the TOC reads at a glance → 4 movements
  (one with two `###`) → Singapore → close → quiz → case, that the chapter-map and in-text
  `#sec-ageing-eat-less` links resolve, and that the spectrum and two tables render.
- Plan uncertainty 2 resolved as default: *undernutrition*/*malnutrition* left unbolded with the forward
  reference (owner: *Undernutrition & Malnutrition*).

## Glossary rows owned here

| Term | Meaning | Introduced in |
|---|---|---|
| Anabolic resistance | The weaker muscle-building response of ageing muscle to a given amount of protein, so that more protein is needed for the same effect | Healthy Ageing |
| Anorexia of ageing | The fall in appetite and food intake that comes with age | Healthy Ageing |
| Atrophic gastritis | A long-standing inflammation that thins the stomach lining, common in older age; the stomach makes less acid, so vitamin B12 cannot be split from food protein for absorption | Healthy Ageing |
| Dysphagia | Difficulty swallowing | Healthy Ageing |
| Food insecurity | Not having reliable access to enough food; in older age it depends on physical access (shopping, carrying, cooking) as much as on money | Healthy Ageing |
| Frailty | A clinical picture in older age whose features include unintentional weight loss, weakness, slow walking and exhaustion | Healthy Ageing |
| Nutrient density | The amount of nutrients a food supplies for its energy | Healthy Ageing |
| Polypharmacy | Taking five or more medicines | Healthy Ageing |
| Proton-pump inhibitor (PPI) | A drug that suppresses stomach acid; long-term use adds to the risk of vitamin B12 deficiency | Healthy Ageing |
| Sarcopenia | The age-related loss of muscle strength and mass | Healthy Ageing |
| Social isolation | The objective lack of contact with other people | Healthy Ageing |
| Texture-modified food | Food whose texture is altered (for example minced or puréed) to make swallowing safer | Healthy Ageing |

## Owner terms from term-ownership.md not in this chapter

None: all 12 `healthy-ageing` rows (including the reassigned sarcopenia, frailty, dysphagia and
texture-modified food) occur and are bold-defined once. Other owners' terms that occur here stay unbolded:
anaemia, dehydration, food-first, micronutrients (Micronutrients, Hydration & Electrolytes); diet history
(Assessing Diet & Talking to Patients); recognise and refer, internal drivers/external levers (Reading the
Life Stages); undernutrition, malnutrition (Undernutrition & Malnutrition).

## Fix round 1

Files touched: `book/chapters/healthy-ageing.qmd`, `book/quizzes/healthy-ageing.quiz.yml`,
`book/cases/mdm-lim-widowed.case.yml` (`same-plate.yml` unchanged).

### Citations re-attached to their claims (split sentences rejoined; keys unmoved)

- Weight-loss red flag: the 5% / 6–12-month sentence and "must not be dismissed… warrants evaluation and
  referral" rejoined with a semicolon, so `@gaddey2021weightLoss` again covers the threshold.
- Sarcopenia: screening + Asian cut-offs and the referral clause rejoined with a semicolon, so the
  `@cruzjentoft2019ewgsop2; @chen2020awgs2019; @limSarcopeniaCpg2022` cluster again covers both (the
  verifier's semicolon alternative; keys not redistributed, which would be a source judgement).
- B12: the atrophic-gastritis/acid claim and the split-from-food-protein mechanism rejoined
  (`@andres2005foodCobalamin`).
- Calcium: absorption mechanism and local gap rejoined (`@ye2023daha`; the deferred concern about whether
  this key supports the mechanism stands, now visible again).
- Fluids: blunted thirst and unreliable signs rejoined with a semicolon (`@li2023hydrationOlder;
  @hooper2016drieDehydration`).
- Dysphagia bullet: prevalence, the texture-modified-food-lowers-intake claim and the red flags rejoined
  into one cited sentence (`@wu2020tmd; @espenGeriatricsPractical2022`).
- Vitamin D paragraph reordered claim-first (§11j cohesion); each key moved with its own claim:
  "Vitamin D deficiency is common in older adults even in sunny Singapore, and the better-established reason
  is behavioural: older adults spend less time outdoors and cover up [@cheong2020shield]. The classic
  teaching is that ageing skin also makes the vitamin less efficiently [@maclaughlin1985skinVitD], though
  newer work questions how large that effect is [@borecka2024skin7dhc]." (Kept the existing
  "better-established" hedge instead of the verifier's "mainly", which would strengthen the claim.)

### Meaning and strength restored to HEAD

| File | Location | Before (round 0) | After | Reason |
|---|---|---|---|---|
| healthy-ageing.qmd | Social plate | "**Social isolation**, the objective lack of contact with other people, predicts inadequate micronutrient intake in particular" | "**Social isolation** in particular, the objective lack of contact with other people, predicts inadequate micronutrient intake" | "in particular" had moved and changed what the study is said to single out |
| healthy-ageing.qmd | Opener | "and does better eating it in company" | "and above all needs to eat it in company" | Restores HEAD's ranking of company ("above all, don't eat alone") |
| healthy-ageing.qmd | Close | "No. Eating less…"; "Company at meals where possible, because…"; closing line without the role | "No, and that misreading does real harm. Eating less…"; "Company at meals, often the biggest lever of all, because…"; "The clinician's job is to anticipate these shifts and make the small food-first moves; when eating less turns into unintentional weight loss, the task is to recognise it and refer (…)" | Restores dropped HEAD teaching points (does real harm; biggest lever; anticipate / food-first moves). "often" matches the body's "company is often a stronger nutrition lever" |
| healthy-ageing.qmd | Frailty sentence | "the first feature of **frailty** (a state of reduced physiological reserve in older age), alongside weakness, slow walking and exhaustion" | "the first listed feature of **frailty**, a clinical picture in older age whose other features include weakness, slow walking and exhaustion" | "first listed" = first in the list (HEAD "first item of the frailty picture"), not earliest; definition now matches term-ownership.md, and the Frailty glossary row above was updated to the same wording |
| healthy-ageing.qmd | Driver table | "B12 absorption, vitamin D and thirst all decline" | "B12 absorption, vitamin D and thirst all quietly decline" | "quietly" restored from HEAD; "B12 absorption" (round 0 addition) kept and now logged: wording alignment with the chapter's own "a problem of absorption, not intake" |
| healthy-ageing.quiz.yml | q1 option b | "Only energy needs fall. Protein and micronutrient needs per kcal rise, so…" | "Protein and most micronutrient needs do not fall with energy needs, so per kcal they rise, and…" | "Only" overstated against the chapter's "most"; opener kept different from q1 option a ("Energy…"), so the verifier's exact text (opening "Energy") was not used |
| healthy-ageing.quiz.yml | q2 option a | "Protein works best spread as about a palm-sized portion per meal and paired with activity, especially resistance work." | "Protein works best spread as about a palm-sized portion per meal, and it is effective only alongside activity, especially resistance work." | Restores HEAD "only effective alongside activity", consistent with the chapter ("works only when paired"); "only" stays a deferred source-check item |
| healthy-ageing.quiz.yml | q2 option b | "…and enough protein helps defend against sarcopenia." | "…and enough protein, with exercise, helps defend against sarcopenia." | Restores the chapter's "with exercise" condition (row in the content-fix table re-labelled as a wording alignment) |
| healthy-ageing.quiz.yml | q3 option a | "and long-term metformin and PPIs add to the risk" | "and long-term metformin and PPIs, both widely used in Singapore's older population, add to the risk" | Restores HEAD's local-relevance point in the chapter's own wording |
| healthy-ageing.quiz.yml | q3 option c | "much broader than vegans" | "broader than vegans" | Unlogged strengthening reverted to HEAD |
| healthy-ageing.quiz.yml | q6 option a | "is a high-yield question and reconnecting…" | "is one of the highest-yield questions, and reconnecting…" | Restores HEAD and chapter wording |
| healthy-ageing.quiz.yml | q7 option a | "This is the point where ageing in health has tipped into undernutrition. …" | "Unintentional weight loss of about 5% or more over 6–12 months is the red flag, and this is the point where ageing in health has tipped into undernutrition. …" | The 5% threshold (dropped when the option was trimmed) moved into the feedback |
| healthy-ageing.quiz.yml | q7 option b | "is not \"just ageing\": it can signal malignancy…" | "is never \"just ageing\": it flags malignancy…" | HEAD strength restored (decision 1). Opener kept as "Weight loss of this degree" (the stem says "without trying") so it does not repeat q7 option a's new "Unintentional" |
| mdm-lim-widowed.case.yml | q-recognise a | "is not \"just ageing\"" | "is never \"just ageing\"" | HEAD strength restored |
| mdm-lim-widowed.case.yml | q-recognise b | "Weight loss she is not trying for can signal malignancy…" | "Weight loss without trying flags malignancy…" | HEAD strength ("flags") restored and the awkward phrase fixed; opener still differs from option a |
| mdm-lim-widowed.case.yml | q-b12 a | "Check her vitamin B12, or refer for it, given her risk profile." | "Consider checking her B12 or referring for it, given her risk profile." | HEAD hedge "Consider" restored; trimmed so the correct option is not the longest by far (68 vs 69 / 48 chars) |
| mdm-lim-widowed.case.yml | q-refer stem | "at this stage?" | "at this stage of training?" | HEAD "at your level" meant scope of practice, which option b's feedback relies on |

### Style fixes (no content change)

- At a glance: the 35-word nutrient-density sentence split in two (§11j), definition unchanged.
- Watch-list B12: the imperative "check or refer the at-risk" → "Testing therefore targets the at-risk (…),
  who are checked or referred, instead of screening everyone" (§11g, expository voice).
- Spectrum third node: "Undernutrition: formal screening and the multidisciplinary team" → "Managing
  undernutrition: formal screening and the multidisciplinary team (the *Undernutrition & Malnutrition*
  chapter)", so the figure no longer places undernutrition beyond the point where the prose says it begins.
- Check yourself (texture-modified meals): the recall list of red flags replaced with the consequence: "Safety
  and intake pull in opposite directions here, so the plate has to be made denser instead of larger: egg,
  fish, tofu or milk powder stirred into the minced or puréed food, as in fortifying the familiar." (content
  from the chapter's own dysphagia bullet and 🍜 callout; the red flags stay in the prose and the table).
- Case q-advice a: "make her food richer, not stricter, and get her eating with others" → "make her food
  richer and get her eating with others" (option length; the contrast stays in the feedback).
- Case q-refer a feedback: "an Active Ageing Centre offers communal meals, an intervention you can start now"
  → "linking her to an Active Ageing Centre for communal meals is an intervention you can start now".

### Not changed

- Atrophic gastritis definition: the chapter keeps the gloss "a long-standing inflammation that thins the
  stomach lining", followed in the same sentence by the less-acid / B12 mechanism. The glossary should use the
  merged row in this log ("Glossary rows owned here"), not the shorter glossary-proposals.json wording, so the
  two agree.
- "Progress is saved locally" tip: kept as pilot furniture (gut-microbiome and 14 other chapters carry it);
  the orchestrator should count it as an intended addition in the callout gate.

### Gate after fix round 1 (HEAD → working copy)

- Citation multiset IDENTICAL (47 keys; `diff` of `uniq -c` output empty). Islands 3 → 3; figures 0 → 0;
  callouts 2 → 10 and tables 1 → 2, unchanged from round 0 (intended additions only). HEAD had no
  `{#sec-…}`/`{#fig-…}` ids.
- copy-audit `--you`: 0 flags, 0 em dashes, 0 "rather than", bold 5.6/1,000; the four "you" lines are the same
  as round 0 (clinician diet-history sentence, quoted question, case-intro instruction).
- YAML: all three files load with js-yaml. `validate-cases.mjs`: `OK mdm-lim-widowed.case.yml`.
- Feedback openers rechecked programmatically: no two consecutive feedbacks share an opening word in the quiz
  or the case.

## Fix round 2

Files touched: `book/chapters/healthy-ageing.qmd`, `book/quizzes/healthy-ageing.quiz.yml`,
`book/cases/mdm-lim-widowed.case.yml`, `book/diagrams/same-plate.yml`.

### Strength and meaning restored to HEAD (decision 1: no claim stronger or weaker than HEAD)

| File | Location | Before (round 1) | After | Reason |
|---|---|---|---|---|
| healthy-ageing.qmd | Opener, 2nd sentence | "An older patient therefore needs a denser plate, not a smaller one, and above all needs to eat it in company." | "The advice an older patient needs is almost never "eat less": it is to eat a denser plate and, above all, to eat it in company." | HEAD hedge "almost never" restored (round 1 made it absolute, against the do-no-harm box's obesity exception). Verifier's wording, made grammatically parallel ("to eat… to eat…" instead of "a denser plate, and above all eating it") |
| healthy-ageing.qmd | Close, 2nd sentence | "Eating less is the change that age brings, not the advice an older patient needs." | "Eating less is the change that age brings, and almost never the advice an older patient needs." | HEAD hedge ("Almost everything… runs against the 'eat less' reflex") restored; keeps the obesity exception |
| healthy-ageing.qmd | Sarcopenia sentence | "where a weak hand grip is a common first clue judged against cut-offs set lower for Asian builds" | "where a weak hand grip is a common first clue, using cut-offs set lower for Asian builds" | HEAD's attachment restored ("using cut-offs" belongs to the screening, not to the grip); round 0 had narrowed it to a specific, checkable grip claim. See the new deferred concern below |
| healthy-ageing.qmd | Do-no-harm callout | "is harmful in a frail, underweight older person" | "is actively harmful in a frail, underweight older person" | HEAD "actively" restored (bold stays off) |
| healthy-ageing.qmd | Watch-list, vitamin D | "and the better-established reason is behavioural" | "and what is firmly established is the behavioural reason" | HEAD "What is robust is the behavioural risk" was absolute; round 1's comparative was weaker (and the round-1 log wrongly called it "the existing hedge": it is not in HEAD). The verifier's text used "robust", which is on the §11g avoid list and is flagged by copy-audit, so "firmly established" carries the same strength |
| healthy-ageing.qmd | At a glance, through-line | "energy needs go down while nutrient needs do not" | "energy needs go down while most nutrient needs do not" | Round-1 sentence dropped the chapter's "most" (opener, body and close all say "most") |
| healthy-ageing.qmd | Protein, 1st sentence | "Protein is the clearest exception to the falling needs." | "Protein is the clearest reversal: while energy needs fall, protein needs rise." | "exception to the falling needs" implied that nutrient needs fall in general, against the paragraph above; HEAD said "The clearest reversal of intuition is protein" |
| healthy-ageing.qmd | Driver table, internal row | "B12 absorption, vitamin D and thirst all quietly decline" | "B12, vitamin D and thirst all quietly decline" | Reverted to HEAD. "B12 absorption" was a round-0 content change outside the decision-1 categories (HEAD did not contradict the prose), and decision 5 fills the table from the existing text only. Supersedes the round-1 row that kept it as a "wording alignment" |
| healthy-ageing.qmd | Check yourself (protein) | "that protein has to come from a smaller, denser plate, spread across meals and paired with exercise" | "that protein has to come from less food, so the plate must be denser, with protein spread across meals and paired with exercise" | "smaller… plate" read against the chapter's own "a denser plate, not a smaller one" |
| healthy-ageing.qmd | Check yourself (B12) | "A B12-rich diet is therefore not enough to protect him" | "A B12-rich diet may therefore not protect him" | The chapter supports this only as a risk ("often", "add to the risk") |
| healthy-ageing.quiz.yml | q2 option b feedback | "Needs rise with age. Ageing muscle mounts a weaker building response…, so it takes more to get the same effect, and enough protein, with exercise, helps defend against sarcopenia." | "Needs rise with age because of anabolic resistance: ageing muscle mounts a weaker building response to a given amount of protein, so it takes more to get the same effect. Under-eating protein accelerates muscle loss." | HEAD claim restored; the round-0 sarcopenia clause was a content swap outside decision 1 and is dropped (supersedes the content-fix row "q2 option b feedback" above). No author approval is recorded for keeping both |
| healthy-ageing.quiz.yml | q2 option c feedback | "spreading protein across meals matters too" | "spreading protein across meals matters more than in youth" | HEAD comparison ("per-meal distribution matters more than in youth") restored |

### Content fix (decision 1, now logged correctly)

| File | Location | HEAD | Now | Category |
|---|---|---|---|---|
| healthy-ageing.quiz.yml | q3 option a feedback | "metformin and PPIs add to the risk (as do atrophic gastritis, poor intake, or a vegetarian diet), all common in this population" | "long-term metformin and PPIs, both widely used in Singapore's older population, add to the risk (as do atrophic gastritis, poor intake or a vegetarian diet)" | Quiz aligned with the chapter's cited text ("both are widely used in Singapore's older population" [@porter2021b12Gastritis; @metforminB12]). This NARROWS an uncited quiz claim (the chapter does not say atrophic gastritis, poor intake or vegetarian diets are common locally). Round 1 logged it as a restoration; it is a narrowing, kept as the verifier's second option |

### Citation re-attached to its claim (key unmoved)

- B12: "Vitamin B12 deficiency in older adults is a problem of absorption, not intake. With age the stomach often
  makes less acid because of **atrophic gastritis**, …, and without that acid B12 cannot be split from food
  protein to be absorbed [@andres2005foodCobalamin]." → "Vitamin B12 deficiency in older adults comes from
  malabsorption, not a lack of B12 in the diet: with age the stomach often makes less acid because of
  **atrophic gastritis**, a long-standing inflammation that thins the stomach lining, and without that acid B12
  cannot be split from food protein to be absorbed [@andres2005foodCobalamin]." The conclusion is back in the
  cited sentence, in HEAD's words ("malabsorption… a lack of B12 in the diet"), and the uncited opener no longer
  stands as a separate sentence. Instead of the verifier's suggested lead-in ("Vitamin B12 is the clearest
  example", a new comparative judgement) or simply dropping the opener (which would leave the paragraph without
  a topic sentence, unlike its three neighbours), the conclusion is fronted and the mechanism follows the colon
  (§11j topic-first). No new claim: same strength as HEAD's label "a problem of absorption, not intake".

### Safety and support (Check yourself, texture-modified meals)

- Title: "…moved to texture-modified meals so that he swallows safely." → "…so that he swallows more safely."
  (the prose says "make swallowing safer").
- Last sentence: "Safety and intake pull in opposite directions here, so the plate has to be made denser instead of
  larger: egg, fish, tofu or milk powder stirred into the minced or puréed food, as in fortifying the
  familiar." → "Safety and intake pull in opposite directions here, so the plate has to be made denser instead of
  larger, within the texture he has been prescribed. Coughing on food or drink, a wet voice or recurrent chest
  infections are red flags to refer." The round-1 answer carried the porridge add-ins over to a patient on a
  prescribed texture with no caveat (aspiration and choking risk) and had dropped the red flags; the red flags
  are the chapter's own (dysphagia bullet). Verifier's text, with its semicolon made a full stop (two ideas; the
  joined sentence was 42 words, §11j).

### Gloss (decision 2)

- Singapore picture: "Locally it is loneliness, more than living arrangement, that tracks with frailty" → "Locally it is
  loneliness (the felt lack of company), more than living arrangement, that tracks with frailty". It contrasts
  with the chapter's defined **social isolation** (the objective lack of contact). Unbolded (not a defined term
  here, not in term-ownership.md), so no glossary row.

### Style fixes (no content change)

- LO3: "Describe how needs for vitamin B12, vitamin D, calcium and fluids shift with age, and identify…" →
  "Describe why vitamin B12, vitamin D, calcium and fluids need specific attention in later life, and identify
  the older adults to check or refer." Watch-list lead: "Four needs shift with age in ways that call for specific
  attention (…)" → "Four nutrients need specific attention in later life (…)". "needs shift" misframed B12 (an
  absorption problem) and vitamin D and fluids (risk, thirst) as changed requirements; HEAD said "A few
  nutrients need specific attention in later life". LO3 says "why… need specific attention" (not the verifier's
  "how… call for attention") so that it matches the body sentence.
- B12 testing sentence (§11j cohesion; a 22-word parenthesis split the subject from "instead of screening
  everyone"): "Testing therefore targets the at-risk (older adults with atrophic gastritis, those on these drugs,
  or those with unexplained anaemia or nerve or memory changes), who are checked or referred, instead of
  screening everyone" → "Testing therefore targets the at-risk instead of screening everyone: older adults with
  atrophic gastritis, those on these drugs, and those with unexplained anaemia or nerve or memory changes are
  checked or referred". Same claim, same key.
- Fluids: "For fluids, the problem is that thirst is blunted in older adults" → "Thirst is blunted in older
  adults" (filler before the topic sentence; the rest of the sentence and its citations unchanged).
- Weight-loss threshold: "over six to twelve months" → "over 6–12 months" in the Recognising-trouble prose and
  its Check yourself answer (matches the spectrum, the refer table and quiz q7; §11g digits for statistics).
- Close: "The older adult needs:" → "The older adult needs four things instead:" (a list is introduced by a full
  sentence, §11g/§11j).
- British spelling: "toward" → "towards" (dentition bullet; Singapore picture). No other "toward" in the four
  files.
- Re-wrapped to the file's ~105-character width, no text change: the protein paragraph (after its new first
  sentence), the sarcopenia paragraph (the ~130-character line), the Recognising-trouble paragraph (the two-word
  "At this" line), the vitamin D paragraph, the at-a-glance through-line, the Singapore "ageing fast" line, the
  do-no-harm callout's first lines, the weight-loss Check yourself and the loneliness paragraph.
- Case remedial body: "The through-line: unintentional weight loss…" → "Unintentional weight loss (loose clothes) after
  widowhood is the red flag, not "normal ageing"." (§11g metacommentary label removed; body re-wrapped).
- Case intro: `cooks less "for just one person." Her cheongsam` → `cooks less "for just one person". Her
  cheongsam` (British placement, as elsewhere in the case).
- Quiz stems q1, q4 and q6 (not in the verifier's list; the same rule as the case intro, applied so the quiz
  matches the chapter and case): `need less.\"` → `need less\".`; `so sunny here.\"` → `so sunny here\".`;
  `most of the time.\"` → `most of the time\".` (YAML source shown). Punctuation only.
- same-plate.yml `restrict.why`: "She is losing weight. Stripping fat, salt and flavour cuts her intake…" → "This
  older adult is losing weight. Stripping fat, salt and flavour cuts intake…" ("she" had no referent; the intro
  speaks of "a frail older adult's thin bowl"). Plain text, as diagram YAML requires; "cuts intake" is HEAD's
  wording.

### Not changed

- "Progress is saved locally; replay to explore the other paths." tip: kept as accepted case-section furniture
  (14 chapters at HEAD and the gut-microbiome pilot carry it). Callout gate: 2 (HEAD) + 1 Learning objectives +
  6 Check yourself + 1 tip = 10. For the orchestrator to record in the gate.

### Deferred content concerns (new; need source-checking, not changed)

- Sarcopenia, "using cut-offs set lower for Asian builds" [@cruzjentoft2019ewgsop2; @chen2020awgs2019;
  @limSarcopeniaCpg2022]: the AWGS 2019 hand-grip cut-offs (<28 kg men, <18 kg women) are not lower than
  EWGSOP2's (<27 kg, <16 kg). The claim may hold for other AWGS cut-offs or for AWGS 2014 against EWGSOP1, but
  as written it should be checked against @chen2020awgs2019. HEAD wording kept.
- Quiz q2 option b, "Under-eating protein accelerates muscle loss" (HEAD claim restored, uncited in the quiz):
  the chapter states the converse ("Enough protein, with exercise, also defends against sarcopenia"); check
  that the protein sources support "accelerates" if the author keeps it.

### Gate after fix round 2 (HEAD → working copy)

- Citation multiset IDENTICAL (47 keys, 53 uses; `diff` of the `uniq -c` lists empty). Islands 3 → 3; figures
  0 → 0; callouts 2 → 10 and tables 1 → 2 (intended additions only, unchanged from rounds 0–1). HEAD has no
  `{#sec-…}`/`{#fig-…}` ids; all six chapter-map and in-text `#sec-…` anchors resolve to ids in the file.
- copy-audit `--you` on all four files: 0 flags, 0 em dashes, bold 5.6/1,000 words, 0 "rather than", 0 curly
  quotes; the four "you" hits are unchanged (the clinician diet-history sentence, which counts twice; the quoted
  question in a Check yourself title; the case-intro instruction).
- YAML: same-plate.yml, healthy-ageing.quiz.yml and mdm-lim-widowed.case.yml load with js-yaml.
  `validate-cases.mjs`: exit 0, `OK mdm-lim-widowed.case.yml`.
- Feedback openers rechecked programmatically (21 quiz, 12 case feedbacks): no two consecutive feedbacks share an
  opening word; no "Correct"/"Right"/"Wrong"/"Unsafe" openers.
