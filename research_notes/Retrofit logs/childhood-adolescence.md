# Retrofit log: Childhood & Adolescence

Files changed (repo root `D:/Documents/NUS Dropbox/Kenneth Ban Hon Kim/Development/book-health`):

- `book/chapters/childhood-adolescence.qmd`
- `book/diagrams/bone-window.yml`
- `book/quizzes/childhood-adolescence.quiz.yml`
- `book/cases/rachel-athlete.case.yml`

## Gate (HEAD → working copy)

| Check | Before | After | Note |
|---|---|---|---|
| Citations | 64 / 58 keys | 64 / 58 keys | multiset identical (`diff` of `uniq -c` empty) |
| Islands | 3 | 3 | bone-window island moved from the at-a-glance into the bone `###` (plan Uncertainty 1, option A) |
| Callouts | 2 | 10 | + Learning objectives, + 6 collapsed Check yourself, + 1 do-no-harm callout (§11h life-stage recipe; built only from moved sentences and their two citations) |
| Tables | 0 | 1 | Part II two-drivers table (decision 5) |
| Figures | 0 | 0 | |
| `{#sec-…}`/`{#fig-…}` ids in HEAD | none | – | 13 new `{#sec-…}` ids; every chapter-map and in-text anchor resolves |

Copy audit (`--you`, 4 files): 79 flags → 1 flag. The one remaining flag is `vocab "Holistic"` in "Holistic Health
Framework", the proper name of MOH's school programme (kept). Chapter: 0 em dashes, bold 32.1 → 4.9 per 1,000
words, "rather than" 4 → 1, "you" 7 → 2 (the clinician sentence "When you see a tired…" and the case
instruction "your choices branch the case"). Island data: 0 em dashes, no "Correct."/"Right." openers, no bold in
options. YAML valid (js-yaml) for all three data files; `validate-cases.mjs` OK for rachel-athlete. Render not run
(forbidden in this pass).

## Summary of changes

Chapter (`.qmd`):

- Opener → one italic two-sentence blockquote; new Learning objectives (6) and a three-branch chapter map.
- At a glance: book-acts / roadmap sentences removed; the bold-label drivers list became the decision-5 table
  (terms unbolded, owned by *Reading the Life Stages*); "uniquely in this stage" dropped; island moved out.
  Two further uniqueness claims also dropped: the opener's "in the one stage where a careless word about
  weight can start real damage" (with the cut sentence "The clinician's job shifts from filling gaps to
  anticipating a spurt, guarding a closing window, and, above all, doing no harm") and the close's "And
  running under all of it is a rule unique to this stage". Reason (decision 1, contradiction with another
  chapter): the *Assessing Diet & Talking to Patients* chapter applies the do-no-harm reflex "at first
  contact" for every patient (its `#sec-do-no-harm`), so "unique to this stage" contradicts it.
- Movement intros deleted ("The internal drivers arrive in sequence…", "Two external forces now shape eating…").
- Headings renamed: "…at a glance: two drivers"; "The growth spurt: timing, energy and protein" (was a punchline);
  "The peak-bone-mass window: a bank filled once" (was "you"); "Sport and energy availability" (was imperative);
  callout "When the window is under threat: energy, not calcium"; new callout "Do no harm: healthy habits, never a
  diet".
- §11j passes: topic sentences instead of bold run-ins on argument paragraphs (energy/protein, catch-up growth,
  the three sport run-ins, "The clinician's move"); bold run-ins kept only on genuinely parallel entries (2 in the
  drinks `###`, 2 in the refer movement, 4 in the Singapore picture); long paragraphs split (growth, bone
  builders/supplements, marketing/family meals, TAF); sport terms pre-taught as a definition list before the
  mechanism paragraph, with a 4-step `.flow` beside it; refer red flags as a 5-item bulleted list; the
  do-no-harm sentences gathered into one warning callout.
- Terminology: one term "growth spurt" (dropped "pubertal spurt"/"adolescent spurt"); "per kilogram" (no "per-kilo");
  "type 2 diabetes"; "vitamin D" (no hyphen); "bulimia nervosa"; "amenorrhoea" for the clinical sign after its
  definition; digits for durations ("18 months", "2 years", "3 days a week", "under-18s").
- Bold-defined at first use: peak height velocity, menarche, catch-up growth, peak bone mass, osteogenic,
  amenorrhoea, ferritin, avoidant/restrictive food intake disorder (ARFID), orthorexia. Definition-list terms
  (unbolded): energy availability, female-athlete triad, relative energy deficiency in sport, anorexia nervosa,
  bulimia nervosa, binge-eating disorder.
- Unbolded per term-ownership: insulin resistance (owner *Obesity & Metabolic Syndrome*; plain gloss kept), haem /
  non-haem iron, open-label trial, food-first (owner *Micronutrients, Hydration & Electrolytes*), free sugars
  (*Macronutrients*), Nutri-Grade (*Why Nutrition Matters*), lean mass (*Energy Balance*), internal drivers /
  external levers / recognise and refer (*Reading the Life Stages*).
- Glosses added (decision 2): "dental caries (tooth decay)"; one-line definitions of anorexia nervosa, bulimia
  nervosa (with binge eating) and binge-eating disorder in a definition list after the sentence naming them (the
  book names these diagnoses nowhere else, so this chapter is their first and only teaching point).
- Emphasis bold and stress italics removed throughout; italics kept for chapter titles and *teh*/*kopi*.
- Cross-references: canonical names, first mention linked, never the subject of a verb; "*Menopause & Midlife
  Health*" kept (chapter-names.json overrides the plan's "Menopause & Midlife").
- 6 collapsed Check yourself callouts: 2 at the end of each `##` movement (none in the Singapore picture or close).
- Singapore picture: meta opener deleted; TAF paragraph split; "but a sobering one" and the trailing
  "internal-meets-external" clause removed; Nutri-Grade tense ("since December 2023 it has also covered");
  vitamin D sentence split; quotes straight with British punctuation.
- Close: tidied, "loading" → "weight-bearing activity".
- Case setup paragraph: shortened to a two-sentence setup that no longer gives away the answer.

`bone-window.yml`: `intro` deleted (repeated the chapter usage sentence, used "you", had an em dash and said "most"
against the chapter's cited "two-fifths"); lever/threat `why`, `note`, `credit` rewritten without em dashes or
"you"; a comment em dash replaced. Numbers, labels, title unchanged.

Quiz: bold removed from all stems; option em dashes replaced, options trimmed to parallel lengths; every
"Correct —"/"Overstated."/"Actually"/"Not so —" opener removed so feedback starts with the explanation; opener
sequence checked (no consecutive repeats, including across questions); "vitamin-D" → "vitamin D"; "anorexia" →
"anorexia nervosa".

Case: 29 em dashes removed; "Right."/"Correct —"/"Unsafe."/"Not here."/"No —" openers removed; "+"/"=" used as
words replaced; options trimmed to parallel length; bold removed from in-stem facts and from the trailing question
prompts (only 7 of 114 case stems book-wide bold the prompt, and the retrofitted pilot case does not, so the plan's
"book-wide convention" did not hold); remedial body cut to one bold warning; digits for "5–6 times a week" and
"6 months"; British punctuation outside closing quotes. Node ids, routing, effects and `objectivesMet` unchanged.

## Content fixes (decision 1)

| File | Location | Before | After | Category |
|---|---|---|---|---|
| chapter | Iron `###`, para 2 | "anaemia itself sits in the *Undernutrition & Malnutrition* chapter" | "iron deficiency and anaemia are covered in the *Micronutrients, Hydration & Electrolytes* chapter" | cross-reference retarget (the undernutrition chapter has no anaemia content; anaemia is owned by *Micronutrients*) |
| chapter | Growth `###`, catch-up para; sport `###` | "*Macronutrients: Carbohydrate, Protein, Fat & Fibre*"; "*Adulthood: working life & activity*" | "*Macronutrients*"; "*Adulthood & Working Life*" | cross-reference (canonical chapter names) |
| bone-window.yml | `intro` | "Most of the bone you carry as an adult is banked in the few years around the pubertal growth spurt. …" | field deleted | island contradicts the chapter's cited "roughly two-fifths" [@baxterjones_2011_pbm_estimation] |
| quiz | q8 option 1 feedback | "Correct — most bone is banked in the ~4 years around the spurt, and supplements help mainly…" | "Weight-bearing activity and adequate calcium build the most bone; supplements help mainly the child who is genuinely deficient…" | quiz contradicts the chapter's cited "roughly two-fifths" |
| case | `end-good` body | "(Assessment and management of the female-athlete triad, and of eating disorders, belong to the specialist and the Assessing Diet & Talking to Patients chapter.)" | "(Assessment and management of the female-athlete triad and of eating disorders belong to the specialist team; the do-no-harm conversation about weight is in the *Assessing Diet & Talking to Patients* chapter.)" | cross-reference retarget (that chapter covers the do-no-harm conversation and a SCOFF screen, not management) |

## Deferred content concerns (need a source check; not changed)

- (Narrowed in Fix round 2; the chapter close is now fixed under decision 1.) `components/src/BoneWindow.svelte`
  line 136 (outside this file set) still hard-codes "What you banked by the early twenties is what you carry",
  against the book's cited "about 90% … by about age 18–20, and the account closes around age 30"
  (*Micronutrients, Hydration & Electrolytes*) and "essentially set by the late twenties" (*Bone & Joint
  Health*). Soften it in a component pass.
- Growth `###`, energy paragraph: "per kilogram, energy needs fall … because the body grows faster than its
  per-kilogram demand" is a muddled explanation (the usual reasons are a slowing growth rate and a falling
  per-kilogram metabolic rate as body size increases). Meaning kept; rewrite against @faowhounu_2004_energy_children.
- Singapore picture: "Only about a quarter of older teens meet the daily activity target [@tay2023sgreportcard],
  prompting the whole-of-government Grow Well SG strategy" asserts a causal link; check @moh_growwellsg.
- Nutri-Grade: only the tense changed ("since December 2023 it has also covered freshly prepared beverages");
  confirm the extension date against @mohNutriGradeFresh2023.
- Quiz q2 option 3 (energy cost of new tissue as the reason teenagers are hungry) does not answer the
  protein-powder stem; a protein distractor would test the point better.
- Relative energy deficiency in sport: the cited IOC 2023 consensus (@mountjoy2023reds) abbreviates it "REDs"; no
  abbreviation added.
- The three eating-disorder definitions added under decision 2 (anorexia nervosa, bulimia nervosa, binge-eating
  disorder) are standard DSM-5-style one-liners not drawn from the chapter's cited sources; check the wording if a
  source is wanted.
- Opener says the body "lays down most of its adult bone" between the high chair and adulthood; this is the whole
  of childhood and adolescence (consistent with the island's accrual curve), not the "few years around the spurt"
  (two-fifths). Not a contradiction, but a reviewer may read it as one.
- `components/src/BoneWindow.svelte` (not in this file set) hard-codes the age-based `why` lines with "you" and em
  dashes ("You are inside the window…", "What you banked…", "The steep climb — and the biggest opportunity —") and
  keeps a FALLBACK copy of the old YAML, including the deleted "Most of the bone" intro.

## Deferred backlog

- No teaching figure (§11f): e.g. a growth-velocity curve by sex. Needs an asset and a source.
- House blocks: only the 🍜 iron callout exists; no 🔬 or 🍳 block (decision 4 defers adding them).
- Refer list kept as a bulleted list; §11h's recipe and *Healthy Ageing* use a two-column trigger table. Convert if
  Part II consistency is wanted (three rows currently have no second attribute).
- Island placement: moved into the bone `###` beside the paragraph that interprets it (§11j [E]); §11h's
  life-stage recipe puts the island in the at-a-glance. Move back if the author prefers the recipe.
- Cross-chapter: *Bone & Joint Health* bold-defines **peak bone mass** (line 45); ownership is now this chapter, so
  that chapter should unbold it and point here.
- Add the glossary rows below to `book/glossary.qmd`.
- Render out of tree and check the TOC (three movements, five `###`, no single child), the definition lists, the
  flow, the table and the collapsed callouts.

## Glossary rows owned by this chapter

| Term | Meaning | Introduced in |
|---|---|---|
| Amenorrhoea | The absence of menstrual periods; in a young athlete, it can signal low energy availability | *Childhood & Adolescence* |
| Anorexia nervosa | Restriction of energy intake that leads to a low body weight, with an intense fear of gaining weight | *Childhood & Adolescence* |
| Avoidant/restrictive food intake disorder (ARFID) | Restrictive eating driven by sensory aversion or fear, without concern about weight or shape | *Childhood & Adolescence* |
| Binge-eating disorder | Recurrent binge eating (an unusually large amount of food in a short time, with a sense of loss of control) without regular compensation such as vomiting or fasting | *Childhood & Adolescence* |
| Bulimia nervosa | Recurrent binge eating (an unusually large amount of food in a short time, with a sense of loss of control), followed by compensation such as vomiting, fasting or excessive exercise | *Childhood & Adolescence* |
| Catch-up growth | Recovering growth lost after a nutritional setback; the capacity narrows with age | *Childhood & Adolescence* |
| Energy availability | The energy left for the body's own housekeeping after training has taken its share: intake minus the energy burned in exercise | *Childhood & Adolescence* |
| Female-athlete triad | The linked trio of low energy availability, menstrual disturbance and impaired bone health | *Childhood & Adolescence* |
| Ferritin | A marker of iron status that falls before haemoglobin does, so it detects iron deficiency before anaemia | *Childhood & Adolescence* |
| Menarche | The first menstrual period | *Childhood & Adolescence* |
| Orthorexia | An obsessive fixation on "clean eating"; a recognised pattern, not yet a formal diagnosis | *Childhood & Adolescence* |
| Osteogenic | Bone-building; exercise is most osteogenic in early puberty | *Childhood & Adolescence* |
| Peak bone mass | The most bone a person ever has | *Childhood & Adolescence* |
| Peak height velocity | The fastest growth of the pubertal growth spurt, the fastest since the first year of life | *Childhood & Adolescence* |
| Relative energy deficiency in sport | The broader form of the female-athlete triad, arising from low energy availability | *Childhood & Adolescence* |

Not owned here (left unbolded): insulin resistance (*Obesity & Metabolic Syndrome*), anaemia, haem / non-haem
iron, open-label trial, food-first (*Micronutrients, Hydration & Electrolytes*), free sugars (*Macronutrients*),
Nutri-Grade (*Why Nutrition Matters*), lean mass, BMI, body composition (*Energy Balance*), internal drivers,
external levers, recognise and refer (*Reading the Life Stages*).

## Owner terms from term-ownership.md that do not occur in this chapter

None: all 12 terms assigned to `childhood-adolescence` occur and are defined (the three sport terms in the
definition list).

## Fix round 1

Verifier issues applied to the four owned files. Gate re-run (HEAD → working copy): citations 64 / 58 keys,
multiset identical (`diff` of `uniq -c` empty); islands 3 → 3; callouts 2 → 10 (unchanged from the first
pass); tables 0 → 1; figures 0 → 0; HEAD had no `{#sec-…}`/`{#fig-…}` ids, and every in-chapter anchor
(chapter map and the new Singapore-picture link to `#sec-child-iron`) resolves. Copy audit (`--you`, 4 files):
1 flag, the proper name "Holistic Health Framework" (kept). js-yaml loads all three data files;
`validate-cases.mjs` OK for rachel-athlete.

### Content fixes (decision 1), before → after

| File | Location | Before (first pass) | After | Category |
|---|---|---|---|---|
| chapter | Bone `###`, para 1 | "The balance in this "bone bank" at the end of adolescence is the **peak bone mass**. It is the single biggest determinant…"; "lifestyle sets about a fifth to two-fifths of peak bone mass" | "The balance in this "bone bank" at the end of adolescence is the single biggest determinant…"; "lifestyle sets about a fifth to two-fifths of **peak bone mass** (the most bone a person ever has)" | contradiction with another chapter's cited definition (*Micronutrients, Hydration & Electrolytes*: "the most bone a person ever has" [@nofPeakBoneMass2016]; *Bone & Joint Health*: reached by the late twenties). Glossary row changed to "The most bone a person ever has" |
| chapter | Check yourself (bone) | "so accrual missed then cannot be banked later. Peak bone mass, the balance at the end of adolescence, is…"; "a fifth to two-fifths of it" | "so a shortfall in those years can leave a lasting deficit. The balance banked by the end of adolescence is…"; "a fifth to two-fifths of peak bone mass" | internal consistency (chapter's cited "sometimes with a lasting deficit" [@ackerman_2011_athlete_bone_triad]; the island curve keeps rising after 16) and the peak-bone-mass definition above |
| chapter | Sport definition list | "Female-athlete triad: Low energy availability, menstrual disturbance and impaired bone health, occurring together." | "Female-athlete triad: The linked trio of low energy availability, menstrual disturbance and impaired bone health." | internal consistency ("one part of the triad should prompt a look for the others"; in the case the first sign is amenorrhoea). Glossary row changed to match |
| quiz | q6 correct option | "Low energy availability (the female-athlete triad); recognise and refer" | "Low energy availability driving the female-athlete triad; refer" | quiz vs chapter definition (low energy availability is one component of the triad, not the triad) |
| case | objectives[1] | "Recognise low energy availability (the female-athlete triad: amenorrhoea, a stress fracture, restriction and a heavy training load) as a bone-health red flag." | "Recognise the pattern of low energy availability and the female-athlete triad (amenorrhoea, a stress fracture, restriction and a heavy training load) as a bone-health red flag." | case vs chapter definition (the parenthesis is the presenting pattern, not a four-item triad) |
| bone-window.yml | `threat.why` | "…stalls accrual, which lowers the ceiling for life whatever the other levers do." | "…stalls accrual, and the loss can be permanent whatever the other levers do." | island vs the chapter's cited "sometimes with a lasting deficit" |
| chapter | Island usage sentence | "toggle the levers to see the band that lifestyle can move, and switch on the under-fuelling threat to see the ceiling fall" | "toggle the levers to see how far lifestyle moves the balance within the shaded band, and switch on the under-fuelling threat to see the attainable peak fall" | label misnames what the island shows (the band is static; the threat lowers the attained-peak line, not the genetic-potential line; checked in `BoneWindow.svelte`) |
| chapter + quiz | ARFID paragraph; quiz q7 option 3 and its feedback | ""picky eating" becomes clinical (picky eating is covered in the *Infancy & Early Childhood* chapter)"; "'Picky eating'…"; "Most picky eating…" | ""fussy eating" becomes clinical (see the *Infancy & Early Childhood* chapter)"; "'Fussy eating'…"; "Most fussy eating…" | cross-reference term matches the target chapter ("Responsive feeding and fussy eating"); one term, no synonym cycling |

### Reversions to HEAD wording (unlogged hedge or scope changes from the first pass)

- Bone `###`: "Supplements help mainly the child who starts deficient." → "Supplements are easily misread."; "the
  gains appear in children who were deficient" → "the gains show up only in children who were deficient".
- Refer movement opener: "the same messages help prevent both" → "the same messages prevent both".
- Sport `###`: "an adolescent who trains hard needs to be fuelled" → "an active adolescent needs to be fuelled".
- Close: "can start an eating disorder" → "can start real disease". The first-pass row for this change in the
  decision-1 table above is deleted ("real disease" covers both tails).
- Threat callout heading: "energy, not calcium" → "often energy, not calcium".
- Opener: "how adults talk about weight" → "how weight is talked about" (includes peer teasing,
  @haines_2006_weight_teasing_eat).
- Growth `###`: "A diet that meets energy needs" → "An ordinary diet that meets energy needs"; quiz q2 option 1
  "a diet that meets his energy needs…" → "an ordinary diet meeting his energy needs…", and its feedback "A diet
  that meets…" → "An ordinary diet that meets…".
- Check yourself (tails): "Dieting therefore feeds both" → "Dieting therefore predicts both" (matches the
  do-no-harm callout).
- Singapore picture: "the local evidence that eating disorders span the weight spectrum" → "the local face of
  eating disorders across the weight spectrum".
- Quiz q8 option 1: "treating any deficiency" → "finding and treating deficiency".
- Case q-first-move option b feedback: "This is the do-harm move." → "This is the do-harm move: never prescribe a
  diet here."; quiz q6 option 1 feedback: "to fuel, not restrict, and" → "to fuel, not restrict (never a stricter
  diet), and".
- Uniqueness claims: not restored. Their removal is now logged in the Summary (at-a-glance bullet) with the
  decision-1 reason: the *Assessing Diet & Talking to Patients* chapter applies the do-no-harm reflex at first
  contact for every patient.

### Style fixes (no content change)

- Learning objectives: LO2 "…change bone accrual, and how strong the evidence is for each"; LO4 "…shape
  adolescent eating and weight".
- Chapter map: "[The growth spurt: timing, energy and protein]" (matches the heading); sport node "fuelling the
  young athlete" (no imperative).
- At a glance: the closing sentence "At this stage the largest risks come from the environment…" deleted (it
  repeated the opener); the section ends on the drivers table.
- Negative parallelism: dropped "not a fixed number" (growth paragraph), ", not too little calcium" (threat
  callout's first sentence; the heading carries the contrast), ", not a poison to fear" (sugary drinks) and ",
  not a transformed diet" (Nutri-Grade, now "Its effect is modest: a small cut in sugar per serving").
- Long sentences split: Check yourself (appetite), Check yourself (pubertal fat), and the do-no-harm callout's
  first sentence (split at "both tails. Paediatric guidance echoes it: …").
- Refer list lead-in "Any of the following, drawn from the sections above," → "Across this stage, any of the
  following"; item 4 → "Any eating-disorder red flag above, at any weight, …".
- Eating-disorder definitions: anorexia nervosa → "Restriction of energy intake that leads to a low body
  weight…"; binge-eating disorder now stands alone ("Recurrent binge eating (an unusually large amount of food in
  a short time, with a sense of loss of control) without compensation such as vomiting or fasting."). The
  glossary rows for anorexia nervosa, bulimia nervosa and binge-eating disorder now match the chapter word for
  word.
- Singapore picture: the teaser "The sharper lesson is older." deleted; vitamin D paragraph "iron roughly triples
  for adolescent girls" → "iron rises steeply for adolescent girls (see [Iron and the menstruating
  adolescent](#sec-child-iron))" (the number and its citation stay in the iron `###`).
- Quiz q3 stem: "what's the recognise-level point?" → "how is it caught early?".
- Case: q-message option a → "\"No, the opposite. Rachel needs to eat enough to match her training.\""; the intro
  body now ends at "…her weight is in the normal range." (the give-away sentence is deleted).
- Glossary row: Amenorrhoea → "…in a young athlete, it can signal low energy availability".
- Edited lines reflowed (no wording change).

### Applied with a variation

- Female-athlete triad definition: the clause "; any one should prompt a look for the others" was not added. The
  chapter states that rule with its citation [@thomas2016nutritionathletic] about 15 lines later and again in the
  Check yourself answer; "linked trio" alone removes the "all three together" reading.
- Growth paragraph negative parallelism: "not birthday" kept (a real, named misconception, tested by quiz q1 and
  stated in LO1); only "not a fixed number" dropped.
- Check yourself (bone): "once the window closes" omitted, because the same sentence already says "the window
  closes as the growth plates fuse".
- Case objectives[1]: the major issue's wording was applied; the minor issue's alternative wording is superseded.

### Orchestrator decision needed

- The do-no-harm warning callout is kept, with its first sentence split. It follows §11h's life-stage recipe
  ("red flags + the do-no-harm callout"), is built only from moved sentences, and leaves the citation multiset
  identical. If it is not accepted, return its sentences to prose after the obesity paragraph (callouts → 9).
- term-ownership.md (an orchestrator file, not edited) still carries the old meanings for Peak bone mass,
  Female-athlete triad and Amenorrhoea; use the rows in "Glossary rows owned by this chapter" above.

### Deferred content concerns (added this round)

- Supplements: the chapter now says replete children get "a small, fading benefit" from calcium supplements, yet
  "the gains show up only in children who were deficient". Quiz q8 option 1 feedback says supplements "help
  mainly the child who is genuinely deficient", and option 2 feedback says "The benefit is confined to children
  who were deficient". Reconcile "only" / "mainly" / "small, fading benefit" against
  @winzenberg_2006_calcium_meta and @winzenberg_2011_vitd_meta.
- `components/src/BoneWindow.svelte` (outside this file set) hard-codes the "lost for life" label on the deficit
  band; the chapter's cited wording is "sometimes with a lasting deficit". Soften the label in a component pass.

## Fix round 2

Verifier issues (round 2) applied to the four owned files. Gate re-run (HEAD → working copy): citations
64 / 58 keys, multiset identical (`diff` of `uniq -c` empty); islands 3 → 3; callouts 2 → 10 (unchanged
from round 1); tables 0 → 1; figures 0 → 0; HEAD had no `{#sec-…}`/`{#fig-…}` ids, and every in-chapter
anchor resolves. Copy audit (`--you`, 4 files): 2 flags, the proper name "Holistic Health Framework"
(kept) and "not just" in quiz q7 option 2 feedback (kept: it is HEAD's hedge, restored at the verifier's
request; the number on the scale still counts). Chapter: 0 em dashes, bold 4.9 per 1,000 words, "you" 2
(the clinician sentence and the case instruction). js-yaml loads all three data files;
`validate-cases.mjs` OK for rachel-athlete (all cases OK). Render not run (forbidden in this pass).

### Content fixes (decision 1), before → after

| File | Location | Before | After | Category |
|---|---|---|---|---|
| chapter | Close | "the bone bank needs enough weight-bearing activity and calcium before it closes for good by the early twenties" (HEAD: "a bone bank that **closes for good** by the early twenties") | "…calcium before its window largely closes by the early twenties" | contradiction with other chapters' cited figures (*Micronutrients, Hydration & Electrolytes*: about 90% of peak bone mass by about age 18–20, account closes around age 30 [@nofPeakBoneMass2016]; *Bone & Joint Health*: essentially set by the late twenties [@nofPeakBoneMass2016]) and with this chapter's own island `note` and quiz q8 ("largely closes by the early twenties"). The first-pass deferred concern is narrowed to the `BoneWindow.svelte` line (edited in place above) |
| quiz | q4 option 2 | HEAD: "It's anchored on obesity, and trials prove sugary drinks are the single main cause of childhood obesity"; round 1: "It's anchored on obesity; trials show sugary drinks are the sole cause" | "It's anchored on obesity; trials prove sugary drinks are its sole cause" | quiz option vs its own feedback ("not the sole cause"). Moved here from the round-1 "Reversions" list (deleted there), where it was mislabelled: "single main" → "sole" is a change from HEAD. "prove" is restored from HEAD, and "its" names what is caused (obesity) |

### Gloss fixes and additions (decision 2)

- Binge-eating disorder: "…control) without compensation such as vomiting or fasting." → "…control) without
  regular compensation such as vomiting or fasting." DSM-5 excludes recurrent compensatory behaviour, not
  any compensation. The glossary row above is updated to match (supersedes the round-1 style-fix wording).
- Growth `###`: "crossing down through the growth centiles warrants referral" → "crossing down through the growth
  centiles (the reference curves on a growth chart) warrants referral". No earlier chapter teaches centiles
  (book-wide grep); later uses ("crossing down the centiles", "crossing-down growth") stay plain.
- Iron `###`: "check iron studies or refer" → "check iron studies (blood tests of iron status, including
  ferritin) or refer". Plain glosses, no bold, no glossary rows (same pattern as "dental caries (tooth
  decay)").

### Reversions to HEAD wording, hedge or scope (unlogged round-1 changes)

- Opener: "the body lays down most of its adult bone, passes through the growth spurt of puberty and settles
  its eating habits. The larger risks at this stage come less from a missing nutrient than from the food
  environment and from how weight is talked about, where a careless word can start real damage." → "the
  body lays down most of its adult bone, grows for a decade and settles habits that are just as lasting. The
  biggest risks at this stage come not from a missing nutrient but from the environment and from how weight
  is talked about, where a careless word can start real damage." Restores HEAD's "a decade of growth",
  "just as lasting, its habits" (habits, not only eating habits) and "the biggest risks … not from a missing
  nutrient but from the environment" (sport, marketing and the peer handover, not only food). "not … but"
  was kept rather than logged as a decision-1 softening: a ranking of the biggest risks does not contradict
  the iron section's "classic at-risk group". Variation: "habits that are just as lasting" in place of the
  suggested "habits that last just as long", because "just as long" straight after "grows for a decade"
  reads as "for a decade"; "lasting" keeps HEAD's comparison with the bone.
- Quiz q2 option 3: "Yes; building new tissue is the main reason teenagers are so hungry" → "Yes; the energy
  cost of new tissue is the main reason teenagers are so hungry". HEAD's qualifier is back, so the option
  again makes the precise false claim its feedback rebuts (1–2% of the day's energy); HEAD's "the main
  reason" is kept instead of the suggested "is why". 77 characters vs the correct option's 78.
- Iron demand at menarche: "rises again" → "jumps again" in the drivers-table cell ("…in girls, jumps again once
  menstruation begins") and the iron `###` ("In girls it jumps again at menarche…"); HEAD's wording, matching
  quiz q3.
- Growth `###`: "so a teenager who eats normally does not need protein powder" → "…rarely needs protein powder" (the
  premise is "almost always"; quiz q2 says "Usually not").
- Check yourself (tails): "…develop a new eating disorder, and they also gain more weight over the following
  years" → "…and are also more likely to gain more weight over the following years" (prospective finding,
  as in the chapter paragraph).
- Close: "No. The internal drivers…" → "No, and getting that wrong is where the harm lives. The internal
  drivers…" (HEAD).
- Refer movement: "Recognition rests on two points." → "Two points sharpen recognition." (HEAD: "Two things
  sharpen recognition").
- Sugary drinks: "Sugary drinks are therefore a red flag to recognise at this life stage." → "Sugary drinks are a
  red flag to recognise at this life stage, not a poison to fear." HEAD's proportionate-stance clause (also
  in quiz q4 option 1 feedback); the round-1 negative-parallelism cut of this clause is withdrawn.
- Sport `###`: "At the other end, an active adolescent needs to be fuelled, not slimmed." → "The danger at the other
  end is under-fuelling: an active adolescent needs to be fuelled, not slimmed." (HEAD's referent sentence).
- Refer movement opener: "Two clinical tails emerge in adolescence, disordered eating at one end and obesity at
  the other, and the same messages prevent both." → "Two clinical tails emerge in adolescence (disordered
  eating and obesity), and the same messages prevent both." The round-1 "at one end … at the other" placed
  eating disorders at the low-weight end, against the chapter's "eating disorders occur across the whole
  weight spectrum" and the Singapore paragraph on non-underweight presentations. Variation: parentheses
  instead of the suggested commas, so the appositive does not read as a list of three.
- Quiz q7 option 2 feedback: "A large share of presentations are at normal or high weight, so a normal weight
  does not exclude an eating disorder. The behaviours and red flags matter more than the number on the
  scale." → "This is a dangerous misconception: a large share of presentations are at normal or high weight.
  Recognise the behaviours and red flags, not just the number on the scale." (HEAD, em dash → colon;
  restores the safety framing and the "not just" hedge).
- Quiz q2 option 1 feedback: inserted after the first sentence "Energy needs per kilogram fall too, even as
  total daily amounts rise." (HEAD's teaching point, "Both energy and protein needs fall per kg across
  childhood even as total daily amounts rise").
- `bone-window.yml` calcium `why`: "Grade A for accrual, from food first." → "Grade A for accrual; food first."
  (HEAD's grade-then-advice order; the grade is not limited to food calcium).
- Case q-first-move option c: "Reassure them both that stopped periods are a sign of fitness, and send them
  home." → "Reassure them both that periods often stop in athletes as a sign of fitness, and send them home."
  (HEAD's true premise restored, so the distractor is a realistic trap).
- Case q-message option a: "\"No, the opposite. Rachel needs to eat enough to match her training.\"" →
  "\"Actually, the opposite. Right now Rachel needs to eat enough to match her training.\"" (HEAD, em dash →
  full stop; restores the time framing and the softer opener; supersedes the round-1 style fix).

### Style fixes (no content change)

- Singapore picture (vitamin D): the round-1 split is undone, so one key again covers all three claims:
  "Singapore's recommendations track the drivers well: iron rises steeply for adolescent girls (see [Iron and
  the menstruating adolescent](#sec-child-iron)) and calcium stays high through the bone-building years, but
  vitamin D is set unusually low, on the assumption of abundant tropical sun [@hpb_healthhub_rda]." Citation
  multiset unchanged (resolves both the major and the minor issue on this sentence).
- At a glance: "Childhood and adolescence run from about age 4 or 5, once a child eats family foods (see the
  [*Infancy & Early Childhood*](infancy-early-childhood.qmd) chapter), to the end of adolescence." → "This
  stage runs from about age 4 or 5, once a child eats family foods, to the end of adolescence (for the
  earlier years, see the [*Infancy & Early Childhood*](infancy-early-childhood.qmd) chapter)."
- Sport `###`: "The starting point for an active adolescent is enough activity." → "The starting point for every
  adolescent is enough activity." (with the referent sentence above, "an active adolescent" now names only
  the hard-training athlete).
- Bone `###`: "Supplements are easily misread." → "The evidence on supplements is easily misread."
- Close: deleted "The external levers (sugary drinks, marketing, screens and the peer plate) matter more than
  at any earlier stage, and the family meal is the counterweight." (§11c: it restated the outside movement
  and did not answer the question; that movement keeps "the family meal weakens as an influence just as
  sugary drinks and marketing gain strength" [@story2002adolescent] and "Family meals are the
  counterweight").
- "periods stop" → "amenorrhoea develops" in the sport mechanism sentence and the runner Check yourself
  answer (term bold-defined in the threat callout); the flow label "Periods stop; bone and performance
  suffer" is unchanged.
- Check yourself (family meals): "they act as the counterweight" → "they are the counterweight".
- Free sugars: "works mostly through displaced calories" → "works mostly through the drinks' energy content"
  (chapter) and "works mainly through *displaced calories*" → "works mainly through the drinks' energy
  content" (quiz q4 option 1 feedback). §11g one term: dietary energy is "energy" everywhere else in the
  chapter and in the same paragraph ("under 10% of energy"). Meaning kept: the weight effect works through
  energy intake, not a toxicity of sugar (@temorenga2012sugars unmoved).
- `bone-window.yml` `note`: deleted "The levers show the payoff of reaching adequacy: a child already getting
  enough gains little from more." (decision 9 / §11i item 8: it repeats the chapter's supplement paragraph
  and the calcium and vitamin D `why` lines). The note is now "Genetics sets most of the bank's height (the
  ceiling); lifestyle moves the balance within the shaded band. The window largely closes by the early
  twenties."
- MCQ option length (§11g, correct option no longer the longest):
  - q3: "…; check iron studies before anaemia" → "…; test iron before anaemia" (66 vs 59 / 63 characters).
  - q5: "Because dieting in adolescence predicts both eating disorders and more weight gain" → "Because
    teenage dieting predicts both eating disorders and more weight gain" (75 vs 76 / 65). Variation:
    "teenage" keeps the adolescent scope that the suggested "Because dieting predicts…" would drop.
  - q8: "Food-first calcium, weight-bearing activity, and finding and treating deficiency" → "Food-first
    calcium, weight-bearing activity, and treating deficiency" (68 vs 65 / 61). Supersedes the round-1
    reversion of this option; option 2's feedback already says "the approach is food first and treating
    deficiency", and the chapter keeps "finding and treating deficiency".
  - q2 and q4 are now near-equal (78 / 73 / 77; 74 / 71 / 58) through the restorations above.
- Edited lines reflowed (no wording change).

### Not applied

- Case q-first-move option a trim ("Take a history of her training, eating and periods before discussing
  weight."): with option c's premise restored, c is 96 characters and a is 88, so the correct option is no
  longer the longest. The trim would widen the spread (67 / 76 / 96) and drop "focused" and "the stopped
  periods".
- Case q-message option a trim ("\"No. Rachel needs to eat enough to match her training.\""): it conflicts with
  the issue that restores HEAD's "Actually, the opposite. Right now…" (blame-free opener and time framing),
  which was applied. The only distractor endorses restriction, so length is not the cue in this two-option
  item.

### Deferred concerns (status after round 2)

- First-pass peak-bone-mass-age item: narrowed in place to the `BoneWindow.svelte` hard-coded line (the
  chapter close, island `note` and quiz q8 now all say "largely closes by the early twenties").
- Unchanged and still open: the energy-per-kilogram explanation, the Grow Well SG causal link, the
  Nutri-Grade date, quiz q2 option 3 not testing protein, the REDs abbreviation, the eating-disorder
  definitions' source, the opener's "most of its adult bone", the supplements "only / mainly / small, fading
  benefit" wording, and the `BoneWindow.svelte` "lost for life" label and FALLBACK copy (whose `note` still
  carries the sentence deleted from the YAML this round).
