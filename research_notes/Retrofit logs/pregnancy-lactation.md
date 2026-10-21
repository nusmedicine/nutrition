# Retrofit log: *Pregnancy & Lactation*

Files edited (only these): `book/chapters/pregnancy-lactation.qmd`, `book/diagrams/requirement-dial.yml`,
`book/quizzes/pregnancy-lactation.quiz.yml`, `book/cases/pregnancy-gdm.case.yml`.
Plan followed: `retrofit-plans/pregnancy-lactation.md`, overridden where retrofit-decisions.md /
term-ownership.md say otherwise (noted below).

## Gate (HEAD → working copy)

| Check | Before | After | Note |
|---|---|---|---|
| Citation multiset | 39 keys × 1 | 39 keys × 1 | identical (`diff` of `uniq -c` output empty) |
| `data-island` | 3 | 3 | dial, quiz, case unchanged |
| Callouts | 3 | 10 | + Learning objectives + 6 Check yourself (2 per `##` movement); the 3 existing callouts kept (chain callout now `::::` fence around a nested `.flow`) |
| Tables | 0 | 1 | Part II two-drivers table (decision 5) |
| Figures `![` | 0 | 0 | |
| `{#sec-…}`/`{#fig-…}` ids at HEAD | 0 | 14 added | every chapter-map link resolves to an id in the file |

Audit (`copy-audit.mjs --you`, 4 files): 91 flags → 0. Remaining "you" ×3 are the island-instruction
sentences (dial instruction; the Practise intro's "your role"/"Your choices"), allowed by §11g.
Bold density 43.8 → 4.5 per 1,000 words; em dashes in chapter 5 → 0; "rather than" 4 → 0.
YAML: all three files load with js-yaml. `validate-cases.mjs`: `OK pregnancy-gdm.case.yml`.
Not run (by instruction): render/quarto.

## Summary of changes

Chapter
- Opener → one italic blockquote (two sentences; "genuinely" dropped).
- Added Learning objectives (6) and a chapter map (3 branches = the 3 `##` movements, 7 sub-nodes).
- Section ids on every heading (`sec-overview`, `sec-preg-*` for movements/sub-topics, `sec-singapore`,
  `sec-close`, `sec-quiz`, `sec-case`).
- At a glance: meta first sentence ("Almost everything in this chapter…") cut; the two-driver prose
  became the decision-5 table (terms unbolded, owned by *Reading the Life Stages*); the three
  counter-intuitive facts became a 3-item parallel list; GDM bold-defined there.
- Movement intros deleted (Demands, Problems) per §11g "No movement intros".
- Before pregnancy: added owner pointer to the *Micronutrients, Hydration & Electrolytes* chapter for
  folate science. (Unlogged in round 0; added to this list in fix round 2.)
- `### Energy: "eating for two" is a myth until lactation` → `### Energy, weight gain and activity`
  (no "myth"; common-belief pattern: state the belief, then the evidence). Bold run-ins (Lactation…,
  Weight gain…, Activity…, Internally/Externally) → plain topic sentences (§11j scarce signals).
- Long sentences split (folate, weight gain, GDM P1/P2); "~" → "about"; imperative "treat them as" →
  expository.
- Iron adherence list → parallel gerund phrases, emphasis stripped.
- Micronutrient inline-header list (bold label + em dash ×5) → four plain-sentence bullets + a separate
  vitamin A paragraph (four parallel items + one contrast, matching the heading); no table (the dial owns
  the requirement shapes).
- 🍜🍳 callout: heading and position kept; emphasis bold stripped; "(listeria)" → "(because of
  *Listeria*)"; "But don't over-correct…" → cohesive clause; imperatives kept (house-block advice).
- Hyperemesis callout: "The safety point to carry:" (meta) cut; Wernicke's unbolded with owner pointer;
  one defining bold + one warning bold.
- GDM chain callout: added a 6-step `.flow` beside the prose (§11j, 4+-step chain; nothing else draws it);
  prose kept; bold limited to defining **macrosomia** + the one warning.
- Lactation: buffered/diet-dependent partition → definition list before the vegan-mother mechanism (§11j
  pass 2; dgac citation moved with the partition claim to its introducing sentence); "Two quick myths to
  retire" paragraph → neutral 3-item list; galactagogue bold-defined.
- Singapore picture split into two paragraphs; confinement month bold-defined; "genuine/real/genuinely"
  dropped; imperatives → expository (the clinician's task).
- Close: metacommentary sentence cut; "saying so does harm" made explicit from the chapter's own
  weight-gain paragraph.
- Practise intro: "the myths" removed; list matches what the case covers.
- Six collapsed Check yourself questions (why / what follows), each answer drawn from the movement's text.

Dial (`requirement-dial.yml`, plain text)
- `intro` that repeated the chapter (energy late, calcium flat, vitamin A a ceiling) → the one caveat the
  chapter does not carry (values are schematic, relative to a non-pregnant baseline) (decision 9);
  `credit` → plain credit line. All em dashes (10) removed; "you" removed from folate; all-caps CEILING
  removed; "beta-carotene" → "β-carotene" (chapter's form); DHA "covers it" → "cover it" (agreement).
  `values` untouched.

Quiz
- Every "Correct."/"Correct —"/"Correct, and…" opener removed; feedback opens with the explanation; no two
  consecutive feedbacks share an opening word (checked across the whole file).
- Bold removed from stems (q3–q6, q8); options unbolded and trimmed to parallel length (q1, q2, q3, q5, q7,
  q8); em dashes 27 → 0; "The myth." opener → belief + mechanism; neg-parallel in q6 stem and q7 fb2 fixed;
  q7 stem "low blood sugar" → "hypoglycaemia" (prose term; quiz is not patient dialogue); q8 stem "key
  nutrition risk" → "What nutrition risk needs action?".

Case
- "Correct —"/"Right."/"Exactly —"/"Not quite."/"Too quick."/"That over-reaches." openers → explanation
  first; em dashes 31 → 0; "the error the case is about" (meta) dropped; q-screen option a no longer says
  "GDM" in the doctor's mouth (§11e plain language) and is trimmed to parallel length; q-chain option a
  trimmed (rationale moved to feedback); remedial body rewritten as short sentences (NOT a Markdown list:
  `components/src/lib/md.js` renders only paragraphs and inline emphasis, so a list would show literal
  hyphens); "obstetric/diabetes" → "obstetric and diabetes"; "~7-fold" → "roughly seven-fold". Node ids,
  gotos, effects, scoring and persona untouched.

Glosses added (decision 2; no new claims): pre-eclampsia (a hypertensive disorder of pregnancy); GDM
(diabetes that first appears in pregnancy); haemodilution; choline (from the dial's own `why`); DHA
expansion (a marine omega-3 fatty acid); universal screening; 75 g glucose tolerance test (glucose
measured fasting and 1 and 2 hours after the load: the three time points the chain callout's thresholds
already give); galactagogue; confinement month; heaty/cooling model; ferritin reminder (plain, owner
*Childhood & Adolescence*). GUSTO and HAPO left unexpanded (study names, each already introduced as
"the local GUSTO cohort" / "the HAPO study").

## Content fixes (decision 1)

| File | Location | Before | After | Category |
|---|---|---|---|---|
| case | q-postpartum option a + feedback a | "a glucose test in 6 to 12 weeks" / "postpartum testing at 6 to 12 weeks" | "at 4 to 12 weeks" (both) | case contradicts chapter's cited text (chain callout: postpartum test at 4–12 weeks) |
| dial | Iron `why` | "Expanding blood volume and the foetus's own stores push the need up" | "The expanding red-cell mass and the foetus's own stores push the need up" | island contradicts chapter (chapter: requirements rise for the expanding red-cell mass; plasma expansion is what dilutes) |
| dial | Energy `why` | "Modest and back-loaded in pregnancy — then it genuinely jumps for milk." | "Modest and back-loaded in pregnancy, and highest in lactation, for milk production." | label misnames what the dial's own values show (452 → 500 kcal is not a jump) |
| chapter | `###` heading + chapter-map node | "The micronutrients that matter, and the one that harms" | "The other nutrients that matter, and the one that harms" | heading misnames content (DHA, glossed in the section as an omega-3 fatty acid, is not a micronutrient) |
| quiz | q1 correct feedback | "~+452 in the 3rd" | "about +450 in the third" | quiz aligned to the chapter's cited figure (+450 kcal/day, @savard2020energy) |
| quiz | q4 feedback 1 and 3 | "the recommended intake is unchanged" / "stays the same" | "barely changes" | quiz aligned to chapter and dial ("barely rise(s)") |
| chapter | Lactation P1 | "What stays here is the mother: her extra energy and fluid, and one elegant piece of physiology." | "The mother's side is her own extra energy and fluid ([set out above](#sec-preg-energy) with the energy cost of pregnancy) and the way her body protects some milk nutrients but not others." | cross-reference: the lactation energy/fluid content lives in the Energy section, not in this movement; now pointed to where it is |

## Deferred content concerns (need a source check; not changed)

1. Postpartum test timing: the chapter's "4–12 weeks" sits in a sentence cited to @bellamy2009 (the
   seven-fold risk meta-analysis); the timing itself should be checked against the ACE GDM guideline
   (@aceGDM2018). The case now matches the chapter.
2. Vitamin D in milk: the definition list puts vitamin D among diet-dependent milk nutrients, yet the
   next paragraph says milk is low in vitamin D "whatever the mother eats". Also *Infancy & Early
   Childhood* (line 56) says "the mother's high-dose alternative lives in the *Pregnancy & Lactation*
   chapter", but this chapter has no such content (dangling pointer in another chapter; that chapter's
   owner should drop or retarget it).
3. Calcium: *Bone & Joint Health* says Singapore's requirements include "a raised need in pregnancy and
   lactation" [@hpbRDACalcium], while this chapter, its dial and quiz say the requirement barely rises
   [@kovacs2016mineral]. Both cited; resolve across chapters against the sources.
4. Energy framing: the net lactation need (450–500 kcal/day) is about the third-trimester increment
   (+450), yet the close says lactation "is the stage that asks for real extra energy". The contrast
   holds only for the gross ~670 kcal cost. (The dial's "jumps" was softened to match its values.)
5. Caffeine/alcohol: the 🍜🍳 callout refers to "the daily cap" for caffeine without stating or citing
   it; the lactation caffeine (200–300 mg/day) and alcohol ("only time clears it") bullets carry no
   citation; alcohol in pregnancy itself is not addressed.
6. Minor source-fit: iron deficiency "by the early third trimester" vs the bib note (73.8% at 26–28
   weeks); WHO 30–60 mg dose cited to the Cochrane review (@penarosas2015iron) rather than the WHO
   guideline (`whoAntenatal2016` is in the bib); "neural tube closes by about 28 days" does not say
   "after conception"; the choline shortfall claim rests on a small trial (@caudill2018choline, bib note
   says teach as emerging).
7. New: the GUSTO "seafood-and-noodle" pattern [@gustoDietGDM] is a prevention association (pattern and
   GDM risk) used to support dietary management of diagnosed GDM ("supports familiar swaps"); check the
   claim/source fit.
8. New: the case's GDM keyPoint and the quiz say GDM is "about 1 in 5"; the chapter says "roughly one in
   five" (consistent), but q-result feedback c's "untreated, it raises the risk of a large baby and
   delivery complications" has no chapter citation for "delivery complications" (chapter: macrosomia and
   neonatal hypoglycaemia only).

## Deferred backlog (structure, house blocks, figures)

- §11h Part II arc: the chapter has no dedicated "Recognising trouble, and when to refer" movement with a
  refer table; red flags live inside the Problems movement (decision 4: deferred).
- House blocks: only a combined 🍜🍳 callout; no 🔬 Food science block (decision 4: deferred).
- §11f teaching figure: none beyond the dial; candidates are a plasma-vs-red-cell expansion schematic
  (haemodilution) and a confinement-food photo (Commons/Pexels).
- Render check (not run here): the `.flow` inside the chain callout at desktop width (move it
  immediately before the callout if cramped), the definition list, the driver table, and that the seven
  chapter-map links resolve.
- Glossary: add the 13 rows below to `book/glossary.qmd` (not edited here).

## Glossary rows owned by this chapter

| Term | Meaning | Introduced in |
|---|---|---|
| Buffered milk nutrient | A nutrient whose level in breast milk stays steady even when the mother runs low, at the cost of her own stores: iron, calcium, folate and zinc | Pregnancy & Lactation |
| Choline | A nutrient that supports foetal brain development; most pregnant women fall short of it | Pregnancy & Lactation |
| Confinement month | The first postpartum month and its prescribed diet, patterned by community (Chinese *zuo yue zi*, Malay *berpantang*, Indian practices) and resting on a heaty/cooling food model | Pregnancy & Lactation |
| Diet-dependent milk nutrient | A nutrient whose level in breast milk falls when the mother is deficient, so the baby bears the cost: vitamin B12, iodine, vitamin D and DHA | Pregnancy & Lactation |
| Docosahexaenoic acid (DHA) | A marine omega-3 fatty acid; in pregnancy it modestly reduces preterm birth | Pregnancy & Lactation |
| Galactagogue | A substance, often a food or herb, taken to raise breast-milk supply; the evidence that any does so is weak | Pregnancy & Lactation |
| Gestational diabetes (GDM) | Diabetes that first appears in pregnancy, when the pancreas cannot compensate for the normal insulin resistance of pregnancy; it forecasts later type 2 diabetes | Pregnancy & Lactation |
| Glucose tolerance test (75 g) | Blood glucose measured fasting and 1 and 2 hours after a 75 g glucose drink; Singapore offers it in every pregnancy at 24–28 weeks | Pregnancy & Lactation |
| Haemodilution | A lower haemoglobin concentration caused by plasma volume expanding faster than red-cell mass; in mid-pregnancy it is usually not anaemia | Pregnancy & Lactation |
| Hyperemesis gravidarum | Severe, persistent vomiting in pregnancy with weight loss, dehydration and ketosis; it needs referral | Pregnancy & Lactation |
| Macrosomia | Foetal overgrowth, driven in gestational diabetes by the foetus's own raised insulin | Pregnancy & Lactation |
| Pre-eclampsia | A hypertensive disorder of pregnancy | Pregnancy & Lactation |
| Universal screening | Testing every pregnancy, not only women with risk factors; Singapore's approach to gestational diabetes | Pregnancy & Lactation |

## Owner terms from term-ownership.md not in the chapter

None: all 13 terms assigned to `pregnancy-lactation` occur and are bold-defined once.

Terms owned elsewhere and left plain here: internal drivers / external levers (*Reading the Life
Stages*), insulin sensitivity (*Why Nutrition Matters*), insulin resistance (*Obesity & Metabolic
Syndrome*; glossed in passing as "the body's cells respond less to insulin"), ferritin (*Childhood &
Adolescence*), teratogenic, preformed vitamin A, β-carotene, Wernicke's encephalopathy, neural-tube
defect, folic acid, anaemia (*Micronutrients, Hydration & Electrolytes*), ketosis, hypoglycaemia
(*Integrative Metabolism*), BMI (*Energy Balance*), wholegrain (*Macronutrients*), Nutri-Grade, War on
Diabetes (*Why Nutrition Matters*).

## Fix round 1 (verifier issues)

All 29 verifier items applied (4 major, 25 minor). Two pairs of items addressed the same location
(lactation lead-in; chapter-map lactation node), and two items addressed q3 feedback; each pair was
resolved with one edit. Seven edits differ from the verifier's suggested wording; the reasons are
below.

### Majors (claim strength / model replies)

| File | Location | Before | After | Reason |
|---|---|---|---|---|
| chapter | iron adherence list, item 2 | "dosing on alternate days, because…" | "considering alternate-day dosing, because…" | hedge restored (HEAD "Consider alternate-day dosing"); now matches case q-haemo fb b ("consider alternate-day dosing") |
| quiz | q4 feedback 3 | "Bone stores are not the main mechanism: …" | "Bone stores are not the mechanism: …" | claim strength restored to HEAD (bone stores ruled out). *Deviation:* verifier's "The mechanism is not bone stores" would open with "The", like feedback 2 ("The foetal skeleton…"), which breaks the no-consecutive-opener rule; same meaning kept |
| case | q-chain option a | "Your sugar raises the baby's insulin, and that insulin lingers after birth." | "Your sugar raises the baby's insulin; after birth your sugar stops, but the insulin lingers and lowers the baby's sugar." | the model reply again answers her question (supply stops at birth, insulin lowers the baby's sugar), as HEAD did and as feedback a describes. *Deviation:* "raised" → "raises" (she is 26 weeks pregnant; present tense matches "stops"/"lingers") |
| case | q-postpartum option a | "…but you'll need a glucose test at 4 to 12 weeks and regular checks after." | "…but it raises your later diabetes risk, so you'll need a glucose test at 4 to 12 weeks and regular checks." | the reason for follow-up (HEAD "as GDM raises your later diabetes risk"), the point of objective 4, restored to the patient-facing line |

Option-length note: after the two case majors, the correct options are longer than their distractors
(q-chain 122 vs 43/41 characters; q-postpartum 143 vs 69/75). The model reply has to carry the
explanation the patient asked for, so the same-length rule gives way here; distractors not padded.

### Minors

Chapter
- Folate: "Most women need about 400 µg/day" → "The usual dose is about 400 µg/day of folic acid" (dose, not total folate requirement; the dial shows the requirement at 150–170%).
- At a glance: "The two drivers together explain three facts" → "The internal drivers explain three facts" (all three are internal-driver facts).
- Haemodilution: circular gloss and 33-word sentence → "…so the haemoglobin concentration falls [@aguree2019plasma]. This fall is **haemodilution**, a lower haemoglobin concentration caused by plasma volume expanding faster than red-cell mass." Glossary row above updated to the same definition (§11g: same in both places).
- Iron: long sentence split after "…chapter)."; "Daily oral iron (WHO: 30–60 mg with folic acid) reduces…" is now its own sentence; @penarosas2015iron stays with the iron-supplementation claim.
- Constipation bullet: "…iron compounds it; more fibre and fluid are first-line" → "…iron compounds it, and treating constipation first with more fibre and fluid" (parallel gerund). *Deviation:* "treating it" → "treating constipation" ("it" was ambiguous between the gut and constipation).
- Choline/DHA: "are an under-taught pair" → "complete the list" (curriculum metacommentary).
- Vitamin A paragraph: "Vitamin A is the nutrient whose excess harms. … The counsel for vitamin A is therefore a ceiling, not a floor: a multivitamin should not be over-dosed in retinol, and liver is best skipped." → "Vitamin A is the one nutrient here whose pregnancy advice is a ceiling, not a floor, because its excess harms. … The clinician therefore checks that a multivitamin is not over-dosed in retinol, and liver is best skipped." *Deviation:* the verifier's "the one nutrient on this list whose excess harms" would misplace vitamin A (it is in the paragraph after the bulleted list, not on it) and still overclaim (iodine, on the list, also harms in excess). Scoping "the one" to the shape of the advice is supported internally (the dial's only `ceiling` kind; quiz q5; the chapter-map node "the one with a ceiling"). The clinician-action wording follows the verifier's.
- Activity sentence (44 words) split: "…and caesarean. It also helps keep weight gain in range, and a previously active woman can generally carry on [@acog2020exercise]."
- Weight-gain sentence split: "…a large baby and a caesarean. Yet only about a third of women gain within range [@goldstein2017gwg]."
- GDM: "a normal fall in insulin sensitivity: … it is 50–60% lower, so the body's cells respond less to insulin" → "the normal insulin resistance of pregnancy: by the third trimester of every pregnancy, insulin sensitivity is 50–60% lower (the body's cells respond less to insulin)". "That resistance" two sentences later now refers to a term the paragraph names.
- Check yourself (blood): "between booking and 28 weeks" → "between her first antenatal visit and 28 weeks".
- Problems movement: the hyperemesis/thiamine Check yourself now comes before the GDM one (section order).
- Chapter map: lactation node ": energy, and which milk nutrients depend on her diet" → ": which milk nutrients depend on her diet, and what reaches the milk" (the energy content lives in #sec-preg-energy; items 11 and 24 resolved with item 11's wording).
- Lactation P1: "…and the way her body protects some milk nutrients but not others." → "…and what her diet does to her milk." (back-to-back repetition with P2's lead-in removed).
- Definition-list terms: "Buffered nutrients" / "Diet-dependent nutrients" → "Buffered milk nutrients" / "Diet-dependent milk nutrients" (match the owner glossary terms, the Check yourself and the learning objective).
- Lactation list lead-in: "Three questions about what reaches the milk, or boosts it, come up often:" → "Three practical points concern what reaches the milk, or what is taken to boost it:" (no frequency claim; the bullets are points, not questions; items 10 and 17 resolved with item 10's wording).
- Check yourself (lactation, second): the pump-and-dump recall item → "a mother worried about her supply asks which soup or herb will boost her milk. What drives supply, and what follows for the advice?" Answer: "Frequent, effective milk removal drives production, and the evidence that any galactagogue raises supply is weak. The advice therefore centres on frequent feeding or expressing. The soup or herb can be supported warmly as part of her practice, without a promise that it raises supply." *Deviation:* "confinement soup" → "soup or herb" (the confinement month is defined only in the next section, the Singapore picture); answer split into three sentences. The pump-and-dump point stays in the bullet list.
- Singapore picture: 40-word confinement sentence split into "…is near-universal in Singapore. It is patterned by community (Chinese *zuo yue zi*, Malay *berpantang* and Indian practices) and rests on a shared model that classes foods as "heaty" or "cooling"." *Deviation:* the next sentence's "It is a structured dietary pattern…" → "The confinement diet is a structured dietary pattern…" (avoids two consecutive "It is" openers; repeats the key noun).
- Close: summary + generic moral → "No. Advising her to eat for two does harm, because excess weight gain carries its own risks. The energy cost of pregnancy is about one extra snack a day, and only from the second trimester, so what matters is the quality of her diet, not its quantity. Lactation is the one stage where the phrase nearly fits." *Deviation:* verifier's "what changes is the quality of her diet, not its quantity" → "what matters…" (quantity does change by one snack, so "what changes … not its quantity" would contradict the clause before it; "what matters" is HEAD's wording). This also resolves deferred concern 4: the close no longer says lactation "asks for real extra energy"; it now uses the Energy section's own sentence.
- Long lines from the joins reflowed (prose unchanged).

Quiz
- q1 stem: `"now that I'm eating for two." Best answer?` → `"now that I'm eating for two". Best answer?` (full stop outside the quote, chapter convention).
- q1 feedback 1: "nothing extra in the first trimester" → "roughly nothing extra in the first trimester" (hedge matches the chapter and the option).
- q2 feedback 1: "with ferritin before treating the number" → "with ferritin instead of treating the number alone" (HEAD's rejection of treating a lab value on its own restored).
- q3 feedback 1: "Her weight loss, dehydration and ketosis mark…" → "Her severe, persistent vomiting, weight loss and ketosis mark…" (the stem's own findings; dehydration is not in the stem; items 6 and 26 resolved together). Feedback 3's generic "Weight loss, dehydration and ketosis mark hyperemesis gravidarum…" left as it is: it describes the condition, not her.

Case
- q-screen feedback a: appended "Every pregnancy is offered the test at 24 to 28 weeks." (the screening window, cut from option a, now reaches learners on every path).
- q-haemo stem: "since booking" → "since her first antenatal visit".
- q-haemo feedback a: "cut-offs before treating the number" → "cut-offs instead of treating the number alone".
- remedial body: "Five points carry the case." → "The safe path has five steps." (metacommentary).
- Node ids, gotos, effects, scoring, objectives and persona untouched.

Dial
- Choline `why`: "With DHA, one of an under-taught pair: most pregnant women fall short of it." → "Most pregnant women fall short of it." `values` untouched.

### Checks after round 1

- Gate (HEAD → working copy): citation multiset identical (39 keys × 1; `diff` empty); islands 3 → 3;
  callouts 3 → 10 (unchanged from round 0: one Check yourself replaced, two reordered); tables 0 → 1;
  figures 0 → 0. HEAD had no `{#sec-…}`/`{#fig-…}` ids; every chapter-map link resolves; no duplicate ids.
- Sentence density (prose outside callouts, map and flow): mean 23.7 (HEAD) → 22.0 words; sentences over
  35 words 16 → 10.
- `copy-audit.mjs --you` (4 files): 0 flags; "you" ×3, the same island-instruction sentences as before.
- YAML: dial, quiz and case load with js-yaml. `validate-cases.mjs`: `OK pregnancy-gdm.case.yml` (all 37 OK).
- No feedback opener repeats in consecutive feedback strings in the quiz or the case (checked by script).
- Not run (by instruction): render/quarto.

## Fix round 2 (verifier issues)

23 verifier items (1 major, 22 minor). 21 applied, five of them with wording or scope that differs
from the verifier's (items 2, 5, 8, 14 and 21; reasons below). Item 10 needed a log line only. Item 9's
suggested wording was not applied because it conflicts with the major; the problem it named is
removed by the major's wording.

### Major: option lengths in the case (item 1)

| Location | Before | After |
|---|---|---|
| q-chain a | "Your sugar raises the baby's insulin; after birth your sugar stops, but the insulin lingers and lowers the baby's sugar." (122) | "Your sugar raises the baby's insulin, which stays high after birth and lowers the baby's sugar." (97) |
| q-chain b | "The baby has inherited diabetes from you." (43) | "The baby has inherited diabetes from you, so it can't control its sugar." (74) |
| q-chain c | "Because the baby is small and underfed." (41) | "Because the baby is small and underfed, it runs out of sugar after birth." (75) |
| q-postpartum a | "It usually settles after delivery, but it raises your later diabetes risk, so you'll need a glucose test at 4 to 12 weeks and regular checks." (143) | "It usually settles, but your diabetes risk stays raised, so you'll need a test at 4 to 12 weeks." (98) |

Verifier wording used verbatim. q-chain feedback a still carries "crosses to the baby" and "after birth
the glucose supply stops"; q-postpartum feedback a still carries "ongoing screening". The round-1
"Option-length note" (the model reply outruns the same-length rule) is withdrawn: no decision overrides
the rule.

Option lengths now (characters, correct option first). Case: q-screen 116 / 116 / 93; q-haemo
72 / 66 / 48; q-result 92 / 68 / 70; q-chain 97 / 74 / 75; q-postpartum 98 / 69 / 75. Quiz: q1
62 / 56 / 52; q2 60 / 58 / 46; q3 44 / 47 / 54; q4 54 / 53 / 68; q5 61 / 51 / 45; q6 75 / 66 / 51; q7
58 / 47 / 59; q8 71 / 53 / 56. The correct option is now strictly the longest in 4 of 5 case MCQs
(q-screen ties) and 5 of 8 quiz items (was 6 of 8); the largest ratio to the nearest distractor falls
from 3.0 to 1.3. q-haemo and q-result were not in the verifier list and are unchanged.

### Minors

Chapter
- Opener (item 22): "counsel them well" → "counsel women on them well".
- Learning objective 3 (item 22): "…barely rises in pregnancy while preformed vitamin A carries a
  ceiling." → "…barely rises in pregnancy, and why preformed vitamin A carries a ceiling."
- Chapter map (item 14): micronutrients node ": and the one with a ceiling" → ": a short list, and
  vitamin A's ceiling". *Deviation:* the verifier's "iodine to DHA, and vitamin A's ceiling" is a false
  range (§11g copy-audit table: no scale runs from iodine to DHA, and the reader meets the list order
  only after the map); "a short list" is the section's own lead-in ("a short list of nutrients carries
  most of the weight"). Lactation node → ": buffered and diet-dependent milk nutrients" (verbatim).
- Haemodilution (item 12, verbatim): "A mid-pregnancy haemoglobin almost always falls, and the fall is
  usually not anaemia. Plasma volume expands by nearly half, outpacing the roughly 25% rise in
  red-cell mass, so the haemoglobin concentration falls [@aguree2019plasma]. This fall is
  **haemodilution**, a lower haemoglobin concentration caused by…" → "A mid-pregnancy haemoglobin
  almost always falls, usually by **haemodilution**: a lower haemoglobin concentration caused by plasma
  volume expanding faster than red-cell mass. Plasma volume expands by nearly half, outpacing the
  roughly 25% rise in red-cell mass [@aguree2019plasma], so the fall is usually not anaemia." The term
  is taught before the mechanism; the key stays with the plasma claim; the definition (and so the
  glossary row) is unchanged.
- Constipation bullet (item 15, verbatim): "treating constipation first with more fibre and fluid" →
  "treating constipation with more fibre and fluid as the first line".
- Choline/DHA bullet (item 16, verbatim): "**Choline**, a nutrient that supports foetal brain
  development, and **docosahexaenoic acid (DHA)**, a marine omega-3 fatty acid, complete the list. Most
  pregnant women fall short of choline, and DHA modestly reduces preterm birth […]" → "**Choline**
  supports foetal brain development, and most pregnant women fall short of it; **docosahexaenoic acid
  (DHA)**, a marine omega-3 fatty acid, modestly reduces preterm birth [@middleton2018omega3;
  @caudill2018choline]." Citation group unchanged.
- Vitamin A (item 17, verbatim): "…not over-dosed in retinol, and liver is best skipped." → "…not
  over-dosed in retinol and advises skipping liver."
- GDM paragraph 1 (item 2): "…the normal insulin resistance of pregnancy: by the third trimester of
  every pregnancy, insulin sensitivity is 50–60% lower (the body's cells respond less to insulin). The
  fall is driven by a mix of placental and maternal hormones, with no single hormone responsible, and
  it diverts glucose to the growing foetus [@kampmann2019ir]." → "…the normal insulin resistance of
  pregnancy. By the third trimester of every pregnancy, insulin sensitivity is 50–60% lower (the
  body's cells respond less to insulin), a fall driven by a mix of placental and maternal hormones,
  with no single hormone responsible, that diverts glucose to the growing foetus [@kampmann2019ir]."
  The number, the hormones and the glucose diversion now sit in one sentence with their key.
  *Deviation:* the colon before "by the third trimester" became a full stop, so the topic sentence
  stands alone and the cited sentence runs to 42 words; with the colon kept, the joined sentence would
  run to 52.
- GDM paragraph 2 (item 3, verbatim): "…uses **universal screening**, testing every pregnancy instead of
  only women with risk factors. The test is a 75 g **glucose tolerance test** at 24–28 weeks, in which
  blood glucose is measured fasting and 1 and 2 hours after a 75 g glucose drink [@aceGDM2018]." →
  "…uses **universal screening**, testing every pregnancy instead of only women with risk factors, with
  a 75 g **glucose tolerance test** at 24–28 weeks (blood glucose measured fasting and 1 and 2 hours
  after a 75 g glucose drink) [@aceGDM2018]." The guideline key now covers the policy as well as the
  test (40 words, kept long for the citation; the parenthesis matches the glossary row).
- Chain `.flow` step 3 (item 4): "Foetal overgrowth" → "Overgrowth before birth", so steps 3–4 read as
  a timeline, not cause and effect.
- Check yourself, thiamine (item 13, verbatim): "Weeks of vomiting can leave her thiamine-depleted, and
  glucose or dextrose given first to a thiamine-depleted woman can precipitate Wernicke's
  encephalopathy, so thiamine goes in first. …" → "Thiamine is needed to turn carbohydrate into
  energy (see the *Micronutrients, Hydration & Electrolytes* chapter), and weeks of vomiting can leave
  her depleted of it. A glucose or dextrose load given first can then precipitate Wernicke's
  encephalopathy, so thiamine goes in before any glucose. Severe, persistent vomiting with weight loss,
  dehydration and ketosis is hyperemesis gravidarum, which needs referral, not reassurance." Book
  source for the mechanism: the Micronutrients B1 table row ("Turning carbohydrates into energy").
  Gloss under decision 2; no new number or citation.
- Galactagogue gloss (item 11): "(foods or herbs taken to raise milk supply)" → "(substances, often
  foods or herbs, taken to raise milk supply)". Glossary row in the table above updated to "A
  substance, often a food or herb, taken to raise breast-milk supply; the evidence that any does so is
  weak" (same definition in both places).
- Singapore picture (item 18): "The clinician's task is respectful negotiation, not correction:
  supporting…" → "The clinician's task is respectful negotiation: supporting…"; "(plan B12 and iron)" →
  "(whose B12 and iron need planning)".
- Close (item 19): "Lactation is the one stage where the phrase nearly fits." (a word-for-word repeat
  of the Energy section) → "Lactation comes nearest: making milk costs about 670 kcal a day, though fat
  laid down in pregnancy covers part of it." Uses only the Energy section's cited figures
  (@faoEnergy2004: about 670 kcal gross, about 170 kcal from pregnancy fat).
- Folate pointer (item 10): no text change; the round-0 addition is now listed under Summary of changes.
- Lines touched by the joins reflowed (prose unchanged).

Quiz
- q1 feedback 1 (item 5): "which needs a net 450–500 kcal/day extra" → "which needs roughly 450–500
  kcal/day net extra" (hedge matches the chapter's "roughly"), and a closing sentence added: "In
  pregnancy, quality matters more than quantity." *Deviation:* the verifier's optional "What matters in
  pregnancy is quality, not quantity." is phrased without "not", because the same feedback already
  carries one antithesis ("a snack, not a second dinner").
- q1 feedback 3 (item 7, verbatim): "The aim is good-quality intake…" → "The aim is adequate,
  good-quality intake…".
- q3 feedback 2 (item 6, verbatim): "…feels urgent, but glucose given first…" → "…feels urgent, but
  this order is dangerous: glucose given first…".
- q4 feedback 1 (item 21, verbatim): "Absorption adapts, not intake: …" → "Intestinal absorption adapts:
  …" (consecutive openers: q3 fb3 "Weight", q4 fb1 "Intestinal", q4 fb2 "The").
- q7 (item 21): correct option "Foetal insulin, raised by maternal glucose, stays high after birth" (66)
  → "Foetal insulin, raised in the womb, stays high after birth" (58) (verbatim). *Extension:*
  distractor c "The baby is too small and underfed" (34) → "The baby is too small and underfed, so it
  runs out of sugar" (59), the parallel causal restatement the major verifier set for case q-chain c.
  With only the correct option trimmed, it would still be 1.7 times the shortest distractor, which is
  the problem the item names. Feedback c still answers it.

Case
- q-screen a (item 8): "Yes. We offer it in every pregnancy, because diabetes in pregnancy is common
  and usually causes no symptoms." (110) → "Yes. We offer it in every pregnancy, because diabetes in
  pregnancy is common and feeling well doesn't rule it out." (116). *Deviation:* the verifier's wording
  (139 characters) keeps both clauses and would make the correct reply the longest option by 23
  characters, which the major (item 1) rules out. The direct answer to her stated reason ("I feel
  perfectly well") is restored. The reason behind it ("usually causes no symptoms") stays in feedback a,
  which opens with it. The reply now equals distractor b in length.
- q-chain a (item 9): not applied as worded. "Your sugar crosses to the baby and raises its insulin;
  after birth your sugar stops reaching the baby, but the insulin lingers and lowers the baby's sugar."
  (about 150 characters) would undo the major length fix. The ambiguity the item flags ("after birth
  your sugar stops" read as her own blood sugar stopping) is gone, because the major's wording has no
  such clause; "crosses to the baby" is carried in feedback a.
- Intro body (item 20): "Work through her care, and notice where your role ends and the team's begins."
  deleted (it repeated the Practise paragraph directly above the island). The body ends at "…would
  rather not fast for it."
- end-good keyPoint 4 (item 23): "(macrosomia → neonatal hypoglycaemia)" → "(macrosomia, then neonatal
  hypoglycaemia)".
- Node ids, gotos, effects, scoring, objectives and persona untouched.

Dial: no change this round.

### Further content fixes (decision 1)

| File | Location | Before | After | Category |
|---|---|---|---|---|
| chapter | close, last sentence | "Lactation is the one stage where the phrase nearly fits." | "Lactation comes nearest: making milk costs about 670 kcal a day, though fat laid down in pregnancy covers part of it." | internal consistency: the net lactation need (450–500 kcal/day) is about the third-trimester increment (+450), so "nearly fits" holds only for the gross cost the Energy section cites |
| chapter | galactagogue gloss | "foods or herbs taken to raise milk supply" | "substances, often foods or herbs, taken to raise milk supply" | gloss narrower than the term and than the cited claim it introduces ("any galactagogue") |

Deferred concern 4 (energy framing) is now resolved inside the chapter. Concerns 1–3 and 5–8 stand.

### Checks after round 2

- Gate (HEAD → working copy): citation multiset identical (39 keys × 1; `diff` of the `uniq -c`
  output empty); islands 3 → 3; callouts 3 → 10 (same as round 1); tables 0 → 1; figures 0 → 0. HEAD
  had no `{#sec-…}`/`{#fig-…}` ids; the 14 working ids are unique and every chapter-map link resolves.
- `copy-audit.mjs --you` (4 files): 0 flags; "you" ×3, the same island-instruction sentences as before.
- YAML: dial, quiz and case load with js-yaml. `validate-cases.mjs`: exit 0, `OK pregnancy-gdm.case.yml`
  (all 37 OK).
- No two consecutive feedback strings share an opening word in the quiz or the case (checked by script).
- Not run (by instruction): render/quarto.
