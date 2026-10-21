# Retrofit log: Integrative Metabolism

Files changed (repo-relative):

- book/chapters/integrative-metabolism.qmd
- book/diagrams/metabolic-map.yml
- book/diagrams/metabolic-switch.yml
- book/structures/ketone-bodies.mol.yml
- book/quizzes/integrative-metabolism.quiz.yml
- book/cases/alcohol-fasting-hypoglycaemia.case.yml

## Summary of changes

- **Skeleton (§11c).** New 2-sentence opener (no rhetorical questions or imperative); Learning objectives
  callout (6 objectives); chapter map (`.concept-tree`, 3 branches = the 3 movements, each linking its
  `{#sec-…}` id). "The body as one system" → "Integrative metabolism at a glance" (narrated Part A/Part B
  roadmap and chapters-as-actors paragraph removed; scope clause kept). Movements renamed: "Part A — reading
  the metabolic map" → "Reading the metabolic map"; "Part B — the map, alive: fed, fasted, starved" → "The
  hormonal switch: fed, fasted and starved"; "When the switch breaks" kept. Close renamed "Is fasting good or
  bad for health?" and rewritten to answer with content (adds the two clinical exceptions the chapter
  already teaches). All 25 section/figure ids kept; no section moved.
- **Common beliefs (§11g).** "Ketosis is not ketoacidosis" → "Is ketosis the same as ketoacidosis?";
  "The 'fat-burning zone' myth" → "Is there a fat-burning zone?" (belief + source, then evidence);
  "The one fact to carry out of Part A" → "Why fat cannot become glucose"; "The centrepiece: muscle glycogen
  cannot raise your blood sugar" → "Why muscle glycogen cannot raise blood glucose"; "The clean integration
  point: GLUT4 versus GLUT2" → "GLUT4 versus GLUT2"; "For reference: the two switch enzymes" → collapsed
  "Optional: the two enzymes of the fat switch".
- **§11j five passes / form by relation.** Two definition lists pre-teach the five crossroads (G6P, pyruvate,
  acetyl-CoA, TCA cycle, amino-acid pool) and four map-wide terms (catabolism, anabolism, reciprocal
  regulation, ATP). Three new tables: amino-acid types (glucogenic vs ketogenic), counter-regulatory hormones
  (speed/role), ketosis vs DKA. One `.spectrum` for exercise fuel (phosphocreatine → glycogen → fat). Lists
  for the G6P exits, pyruvate's four fates, the fed-state organs (inline-header bold labels removed) and the
  four abundance features. Long sentences split; bold run-ins kept only on genuinely parallel entries;
  section summary ("Step back and see the logic…") deleted.
- **Check yourself.** Six collapsed callouts, two at the end of each `##` movement (fat → glucose; red cell;
  protein sparing in a long fast; refeeding danger; autonomic before neuroglycopenic; glucose and ketones in
  type 1 diabetes). Each answer rests on the chapter text.
- **Voice/terminology.** "you" reduced from 31 to 4 (Unger quotation; 🍳 "water is usually all you need";
  quoted *eat when you drink*; the clinician "When you see a patient… who plans to fast"). One term:
  "blood glucose" (lay "blood sugar" only in flatmate speech/quoted label), "ketogenic diet" (keto only in
  the 🍜 heading), "adrenaline (epinephrine)", "hypoglycaemia" (no "hypo"), "energy" (calorie only in the
  trial term "calorie restriction"). Em dashes 3 → 0; prose arrows 9 → 0; bold density 37 → 8 per 1,000
  words. Three `§@sec-…` cross-refs replaced by named links. Glosses added under decision 2: cytosol,
  mitochondria, anion gap, hyperglycaemia, sulfonylurea, PDH expansion (CPT1 expansion added in fix round 1;
  ACC was already expanded in HEAD).
- **Term ownership.** Owner terms bold-defined once (or marked by definition list/table). Terms owned
  elsewhere left unbolded: glycogen, triglyceride, lipoproteins/VLDL/LDL/HDL (*Macronutrients*); chylomicron,
  portal vein (*Digestion & Absorption*); leptin, respiratory quotient (*Energy Balance*, cross-referenced);
  cortisol, War on Diabetes (*Why Nutrition Matters*; the run-in "Why this chapter matters here" became
  "Diabetes as a national priority" so the owned term is not bolded); recognise and refer (*Reading the Life
  Stages*); pre-Ramadan review (*Type 2 Diabetes*).
- **Cross-references (chapter-names.json).** *Macronutrients*, *Digestion & Absorption* (×2), *Appetite &
  Weight Regulation*, *Energy Balance*, *Undernutrition & Malnutrition*, *Adulthood & Working Life*,
  *Evidence vs Hype*, *Type 2 Diabetes* (×2); all as "(see the *X* chapter)" or non-acting phrasing.
- **Islands.** Island intros cut to the instruction only (decision 9): metabolic-map (toggles), metabolic-
  switch (what the bars/readout show), ketone-bodies (choose and rotate). All em dashes, "Part A", capitals
  for emphasis (STORE/MOBILISE/MAKES/KETONE), "aha", "sugar" synonyms and Leu/Lys abbreviations removed;
  YAML comment dashes changed to colons.
- **Quiz/case.** Every feedback now opens with the explanation (no "Correct."/"No."/"Exactly"/"Right."/
  "Not quite"); no two consecutive feedbacks share an opening word (checked by script); options trimmed to
  parallel length, no bold, no em dashes; meta ("keystone fact of the chapter", "most important misconception
  to unlearn", "neat piece of metabolic division of labour") removed. Case: one bold per info node; end title
  "Not just drunk" → "Looking past 'just drunk'" (neg-parallel flag); closing flourish deleted. Case nodes,
  routing, effects, persona and objectives' scope unchanged.

## Gate

- Bib-key citation multiset: identical (35 keys, same counts; md5 of the multiset without `@sec` matches).
  The grep's `@sec` count 3 → 0 is the intended replacement of `§@sec-furnace`, `§@sec-exercise` and
  `§@sec-fat` (in-chapter cross-references, not citations) by named links.
- Islands 5 → 5; callouts 11 → 18 (+1 Learning objectives, +6 Check yourself; "For reference" became the
  collapsed Optional box, still a callout); tables 1 → 4 (+3 form-by-relation tables); `![` figures 0 → 0;
  mermaid figures `fig-cori` and `fig-lipoproteins` 2 → 2.
- All 25 HEAD ids present; every in-chapter `](#sec-…)` link resolves to an id in the file.
- copy-audit (`--you`, all six files): 113 flags → 0. Remaining "you" lines: 4, all justified above.
- YAML: all five data files load with js-yaml. validate-cases: `OK alcohol-fasting-hypoglycaemia.case.yml`.
- Not run (per instructions): render/quarto; TOC and link resolution in the rendered page still to check.

## Content fixes (decision 1)

| File | Location | Before | After | Category |
|---|---|---|---|---|
| integrative-metabolism.qmd | #sec-map, crossroads list | "Pyruvate, the three-way junction at the end of glucose breakdown" | "The product of glucose breakdown, and a junction where its carbon can go four ways" | Internal contradiction (the chapter's #sec-pyruvate says "four ways") |
| metabolic-map.yml | pyruvate node `control` | "The three-way junction at the end of glucose breakdown" | "Pyruvate dehydrogenase (PDH): the one-way step to acetyl-CoA" | Island vs chapter contradiction (four ways); field renders as "Control step" and named no control step |
| integrative-metabolism.qmd | #sec-pyruvate callout | "(The only exception is the small glycerol backbone of a triglyceride, see §@sec-fat.)" | "Of a triglyceride, only the small glycerol backbone can become glucose (see [The fasted state](#sec-fasted))." | Cross-reference to a section that does not cover the topic (#sec-fat never mentions glycerol) |
| integrative-metabolism.qmd | #sec-partB intro | "The pathways of Part A are always present in every cell." | "The pathways of the map are always in place" | Internal contradiction (only liver and kidney export glucose; red cells lack mitochondria) |
| integrative-metabolism.qmd | #sec-amino | "every amino acid in the body is doing a job" | "every protein in the body is doing a job" | Internal inconsistency with the chapter's amino-acid pool (free amino acids are not working tissue) |
| integrative-metabolism.qmd | #sec-dka callout | "(Recognising DKA is the skill here; managing it belongs to the diabetes chapter.)" | "Recognising DKA is the task at this stage; managing it belongs to clinical training." | Cross-reference to a chapter that does not cover it (*Type 2 Diabetes* has no DKA) |
| integrative-metabolism.qmd | #sec-broken, Diabetes | "The type 1/type 2 distinction and all management come later, in the diabetes chapter" | "The management of diabetes comes later (see the *Type 2 Diabetes* chapter)" | Cross-reference retargeted; *Type 2 Diabetes* does not cover the type 1 contrast |
| integrative-metabolism.qmd | #sec-broken, hypoglycaemia | "where exactly the thresholds sit shifts with context (something the diabetes chapter develops)" | "the glucose thresholds shift with context" | Cross-reference dropped (*Type 2 Diabetes* does not develop thresholds) |
| integrative-metabolism.qmd | #sec-singapore, Ramadan and diabetes | "management comes later, with the diabetes chapter" | "refer for a pre-Ramadan review (see the *Type 2 Diabetes* chapter)" | Generic forward reference retargeted to the chapter that covers it |
| integrative-metabolism.qmd | 🍜 callout | "(A later chapter on evidence literacy develops how to weigh claims like these.)" | "(Weighing claims like these is the subject of the *Evidence vs Hype* chapter.)" | Generic forward reference retargeted to the named chapter |
| metabolic-switch.yml | overnight `summary` | "while everything else starts to burn fat" | "while most other tissues start to burn fat" | Island contradicts itself and the chapter (the red cell in the same state still runs on glucose) |
| metabolic-switch.yml | day, muscle `detail` | "it cannot make blood glucose itself (no glucose-6-phosphatase)" | "it cannot release glucose to the blood itself (no glucose-6-phosphatase)" | Label misnames the mechanism (the chapter: glucose-6-phosphatase frees glucose for export) |
| integrative-metabolism.quiz.yml | q-scot, correct option | "The liver lacks the enzyme (SCOT) needed to use ketones." | "The liver lacks the enzyme needed to use ketones." (SCOT glossed in feedback) | Quiz tests a name the chapter never teaches |
| alcohol-fasting-hypoglycaemia.case.yml | q-first a feedback | "Adrenergic signs (sweating, tremor)" | "Autonomic warning signs (sweating, tremor)" | Case vs chapter terminology (chapter: "Autonomic (adrenergic) warning symptoms") |

## Deferred content concerns (source-checking; not changed)

- #sec-broken "Recognising hypoglycaemia" and case q-first: sweating and hunger are mainly sympathetic
  cholinergic, not adrenaline-driven; the chapter attributes the whole autonomic group to adrenaline.
- "Is there a fat-burning zone?" callout: "Harder exercise burns more total energy, and more total fat, per
  minute" is uncited and overgeneral (fat oxidation peaks at moderate intensity; cf. the chapter's own
  crossover concept, @brooks1994crossover).
- #sec-starvation: "ketones … cross into the brain freely" overstates; uptake is carrier-mediated
  (monocarboxylate transporters) and concentration-dependent.
- 🍜 callout: @liu2022tre compared time-restricted eating plus calorie restriction with calorie restriction
  alone; "not superior to plain daily calorie restriction" slightly misstates the comparison.
- "Roughly one resident in twelve lives with diabetes" [@mohWarOnDiabetes]: check against the 2016 MOH page.
- metabolic-switch kidney detail "up to roughly 40–50% of glucose production in a prolonged fast" is uncited
  and not in the chapter prose.
- metabolic-map amino-acid outputs "Leucine and lysine are the only purely ketogenic amino acids" vs the
  chapter's "a few" and "the per-amino-acid bookkeeping varies between textbooks".
- Four one-way streets: the chapter counts PDH plus three gluconeogenic bypasses (and says gluconeogenesis
  uses "four different enzymes, three more of the map's one-way streets"); the island marks three valve
  edges (PDH, glucose export, gluconeogenesis), and its export valve is itself a bypass enzyme
  (glucose-6-phosphatase). The count does not map cleanly onto what the student sees.
- @yanovski2000holiday is a US Thanksgiving-to-New-Year study, applied to Singapore's festival calendar
  without saying so.
- Uncited numbers to check (§11i step 4): ATP yield 30–32 vs older 36–38 and the ~15-fold gap; ATP
  turnover "close to its own weight each day"; ketosis 0.5–3 mmol/L (now in the ketosis/DKA table);
  "near 30 km" for the wall; Ramadan "~13–14 hours".
- Cross-chapter: *Undernutrition & Malnutrition* calls muscle "the body's mobilisable protein store",
  while this chapter teaches "the body has no storage protein".
- Cross-chapter: the Ramadan-and-diabetes paragraph repeats the *Type 2 Diabetes* chapter's Ramadan section
  with the same three citations (salti2004epidiar, zainudin2017knowledge, lum2020fast).

## Deferred backlog

- Split the oversized middle movement *The hormonal switch* (nine `###` sub-topics, only two Check
  yourself questions) into two movements, e.g. switch → refeeding, and a fourth movement for RQ, exercise
  and lipoproteins (which sit awkwardly under "fed, fasted and starved"); ids stay (decision 4: deferred).
- House blocks: the chapter carries one 🔬 (G6P), one 🍳 (exercise) and one 🍜 (Singapore picture) rather
  than per-topic triads; a fuller 🔬🍜🍳 treatment (e.g. a 🍜 for the fed state) is deferred.
- §11f teaching figure: no static image figure (only the two mermaid diagrams and three islands); a labelled
  Cahill-phases or fuel-reserve figure is a candidate.
- Glossary: add the 43 rows below to `book/glossary.qmd` (not edited here; orchestrator-owned).
- Render out of tree and check the TOC (no single-child headings), the chapter-map links and the in-chapter
  `#sec-…` links (sec-atp, sec-pyruvate, sec-fasted ×2, sec-furnace, sec-exercise, sec-amino, sec-starvation,
  sec-dka, sec-broken) plus the ten chapter-name links.
- Consider trimming the Ramadan-and-diabetes paragraph to a pointer to *Type 2 Diabetes* (cross-chapter
  overlap).

## Glossary rows owned (Introduced in: Integrative Metabolism)

| Term | Meaning | Introduced in |
|---|---|---|
| Acetyl-CoA | The hub molecule where carbohydrate, fat and protein converge; it feeds the TCA cycle, fatty-acid synthesis or, in the fasting liver, ketone production | Integrative Metabolism |
| Amino-acid pool | The crossroads where protein enters and leaves the metabolic map; the body has no storage protein, so drawing on it for fuel dismantles working tissue | Integrative Metabolism |
| Amphibolic | Both breaking down and building: describes the TCA cycle, whose intermediates are also drawn off to build other molecules and topped up from amino acids | Integrative Metabolism |
| Anabolism | The building and storing pathways of metabolism, which diverge from the hub molecules and cost energy | Integrative Metabolism |
| ATP | The cell's energy currency, made and spent continuously; the body holds only seconds' to minutes' worth, and its energy stores are glycogen and fat | Integrative Metabolism |
| β-oxidation | The breakdown of a fatty acid, inside the mitochondrion, into many molecules of acetyl-CoA | Integrative Metabolism |
| Cahill phases | The staged hand-off of fuel supply in fasting: fed, post-absorptive (glycogen), early fasting (gluconeogenesis) and prolonged, protein-sparing ketosis | Integrative Metabolism |
| Catabolism | The breaking-down pathways of metabolism, which converge on acetyl-CoA and release energy | Integrative Metabolism |
| Cori cycle | The return of lactate from muscle and red blood cells to the liver, which rebuilds it into glucose | Integrative Metabolism |
| Counter-regulatory hormones | The hormones that raise a falling blood glucose: glucagon and adrenaline act fast; cortisol and growth hormone act slowly | Integrative Metabolism |
| Crossover concept | The shift of the exercise fuel mix from fat toward carbohydrate as intensity rises | Integrative Metabolism |
| Diabetic ketoacidosis (DKA) | A medical emergency of near-total insulin deficiency, in which unchecked ketone production makes the blood acidic; defined by the acidosis, not the ketone level | Integrative Metabolism |
| Glucagon | The pancreatic hormone that drives the liver to release glucose; the primary, rapid counter-regulatory hormone | Integrative Metabolism |
| Glucogenic | Able to become glucose; describes amino acids whose carbon enters the map as pyruvate or a TCA-cycle intermediate | Integrative Metabolism |
| Gluconeogenesis | The making of new glucose, by the liver and later the kidney, from lactate, glycerol and glucogenic amino acids | Integrative Metabolism |
| Glucose–alanine cycle | The export of alanine from muscle to the liver, carrying carbon for new glucose and nitrogen for disposal as urea | Integrative Metabolism |
| Glucose-6-phosphatase | The enzyme that frees glucose for export to the blood; present in the liver and kidney, absent from muscle | Integrative Metabolism |
| Glucose-6-phosphate (G6P) | Glucose tagged with a phosphate as it enters a cell, which traps it there; the carbohydrate roundabout of the metabolic map | Integrative Metabolism |
| Glucose sparing | The switch of most tissues to burning fat in a fast, leaving glucose for the brain and red blood cells, which depend on it | Integrative Metabolism |
| GLUT2 | The liver's glucose transporter, always present, which admits glucose in proportion to its concentration without insulin | Integrative Metabolism |
| GLUT4 | The glucose transporter of muscle and fat, which comes to the cell surface only when insulin signals | Integrative Metabolism |
| Glycogenesis | The building of glycogen from glucose | Integrative Metabolism |
| Glycogenolysis | The breakdown of glycogen to release glucose; the first source of blood glucose in a fast | Integrative Metabolism |
| Glycolysis | The splitting of glucose into two molecules of pyruvate, in the cytosol and without oxygen, yielding a little ATP | Integrative Metabolism |
| Hypoglycaemia | A dangerously low blood glucose | Integrative Metabolism |
| Hypophosphataemia | A low blood phosphate; the most dangerous feature of refeeding syndrome | Integrative Metabolism |
| Insulin-to-glucagon ratio | The balance of the two pancreatic hormones that sets the body to store fuel (high, after a meal) or mobilise it (low, between meals) | Integrative Metabolism |
| Ketogenic (amino acid) | Entering the map only as acetyl-CoA, so unable to become glucose; a few amino acids are purely ketogenic | Integrative Metabolism |
| Ketone bodies (ketones) | β-hydroxybutyrate, acetoacetate and acetone: water-soluble fuels the fasting liver makes from surplus acetyl-CoA and exports to other organs, including the brain | Integrative Metabolism |
| Ketosis | A raised level of ketones in the blood, as in a prolonged fast or on a ketogenic diet; restrained by residual insulin, with a normal blood pH | Integrative Metabolism |
| Lactate | The product of pyruvate when oxygen is scarce; making it regenerates what glycolysis needs to keep running | Integrative Metabolism |
| Lipolysis | The breakdown of stored fat, releasing fatty acids and glycerol from adipose tissue | Integrative Metabolism |
| Lipoprotein lipase | The enzyme on adipose capillaries that strips triglyceride from circulating lipoproteins | Integrative Metabolism |
| NADPH | A building currency, made by the pentose phosphate pathway and spent on synthesis, such as of fatty acids, and on antioxidant defence | Integrative Metabolism |
| Neuroglycopenic symptoms | Symptoms of the brain running short of glucose: confusion, slurred speech and eventually loss of consciousness | Integrative Metabolism |
| Oxidative phosphorylation | The process on the inner mitochondrial membrane that makes most of the cell's ATP, using oxygen as the final acceptor of electrons | Integrative Metabolism |
| Pentose phosphate pathway | The exit from glucose-6-phosphate that yields NADPH and ribose, not ATP | Integrative Metabolism |
| Pyruvate | The product of glycolysis and a junction: its carbon can become lactate, alanine, oxaloacetate or, irreversibly, acetyl-CoA | Integrative Metabolism |
| Reciprocal regulation | The coordination of opposing pathways so that one runs while its opposite idles, avoiding a futile cycle | Integrative Metabolism |
| Refeeding syndrome | A dangerous fall in blood phosphate, potassium and magnesium when a starved or severely malnourished person is fed again and the insulin surge drives them into cells | Integrative Metabolism |
| Reverse cholesterol transport | The carrying of cholesterol from the tissues back to the liver by HDL | Integrative Metabolism |
| TCA cycle | The mitochondrial cycle (also called the citric acid or Krebs cycle) that fully oxidises acetyl-CoA from all three fuels to CO₂, capturing the energy on electron carriers | Integrative Metabolism |
| Time-restricted eating | Limiting eating to a daily window, as in "16:8"; it produces weight loss mainly by reducing energy intake | Integrative Metabolism |

## Owner terms (term-ownership.md) that do not occur in the chapter

None. All 43 terms assigned to integrative-metabolism occur and are bold-defined once, or marked by the
crossroads/map-wide definition lists (G6P, pyruvate, acetyl-CoA, TCA cycle, amino-acid pool, catabolism,
anabolism, reciprocal regulation, ATP) or the amino-acid table (ketogenic).

## Fix round 1

All verifier issues addressed (2 major, rest minor). Files touched this round: the chapter, the case, the
quiz and ketone-bodies.mol.yml (metabolic-map.yml and metabolic-switch.yml unchanged).

### Case (alcohol-fasting-hypoglycaemia.case.yml): safety signals restored

| Location | Before (round 0) | After | Reason |
|---|---|---|---|
| q-manage c feedback | "His glucose is already low, and insulin would drop it further. He needs glucose." | "His glucose is already low, and insulin would drop it further, which is dangerous. He needs glucose." | Danger flag (HEAD "Dangerous") restored, explanation first |
| q-first b feedback | "...hiding behind 'just drunk', so the glucose is always worth checking. His reads low." | "Waiting is risky: confusion and sweating can be a treatable hypoglycaemia hiding behind 'just drunk', so always check the glucose. His reads low." | HEAD "Risky" + "Always check the glucose" restored |
| end-good keyPoints[0] | "Sweating, tremor and confusion call for a glucose check; ..." | "Sweating, tremor and confusion always call for a glucose check; ..." | HEAD "always" restored |
| intro body | "**confused, sweaty and trembling**"; it's "just the alcohol." | unbolded; it's "just the alcohol". | Bold for emphasis; British quote punctuation |
| remedial body | "**glucose**, not time or insulin" | "glucose, not time or insulin" | Bold for emphasis |
| end-partial body | "**alcohol on an empty stomach causes hypoglycaemia**:" | unbolded | Bold for emphasis (end-good keeps the named diagnosis in bold) |

Consecutive-opening check still clean (q-first: Autonomic / Waiting / Sweating; q-manage: Glucose /
Hypoglycaemia / His).

### Chapter: claim strength restored (HEAD meaning; no new claims)

| Location | Before (round 0) | After | Reason |
|---|---|---|---|
| #sec-fasted | "A widely taught explanation is that fatty acids cannot cross into the brain. The better-supported one is that fatty acids are a poor brain fuel" | "A widely taught explanation is that fatty acids cannot cross into the brain, but that is not the reason: fatty acids are a poor brain fuel" | Restores HEAD's outright correction |
| #sec-starvation | "The brain's switch to ketones is why the common statement that the brain can use only glucose is incomplete." | "The brain's switch to ketones refutes the common statement that the brain can use only glucose." | Restores HEAD's "definitive correction". Verifier proposed "is wrong"; "refutes" used because §11g Common beliefs bars "wrong" |
| #sec-pyruvate | "...but it is the irreversibility, not the name, that matters: this is the first of the map's four one-way streets, and it has a large consequence for fasting." | "It is catalysed by pyruvate dehydrogenase (PDH), and its irreversibility makes it the first and most important of the map's four one-way streets, with a large consequence for fasting." | HEAD "first and most important" restored; also drops one "matters" and the enzyme italics |
| Fat-burning zone callout | ended "...not the zone a session sat in." | + "The zone is therefore misleading: burning a higher proportion of fat is not the same as burning more fat." | HEAD verdict and take-home restored ("proportion", not "percentage", to keep the callout's one term) |
| #sec-fasted | "follows a fixed order" | "follows an order" | "fixed" overstated (the two overlap) |
| #sec-close | "The dangers are clinical: [diabetes on insulin/SU] ..., and a severely malnourished person ..." | "The main dangers are clinical: ...; anyone drinking heavily on an empty stomach; and a severely malnourished person, for whom refeeding is the hazard." | Round-0 list omitted the chapter's alcohol hazard |
| #sec-overview | "its glucose, fatty acids and amino acids enter the blood" | "its glucose, amino acids and fat enter the circulation" | Internal contradiction: #sec-lipoproteins (dietary fat leaves the gut as chylomicrons, by lymph) |
| #sec-dka table, Insulin/DKA | "Absent, so ..." | "Almost absent, so ..." | Internal contradiction with the Setting row ("Almost total absence of insulin") and the glossary row ("near-total insulin deficiency") |
| #sec-singapore | "The festivals bring the largest peaks." | "The festivals show the storing state most clearly." | "largest" was an unsupported comparative; nearer HEAD ("make it vivid"), and repeats the key noun |
| #sec-singapore Ramadan | "Two practical points follow." | "Practical advice follows from this physiology." | Count did not match (three pieces of advice). Verifier's "from the chapter" not used (metacommentary) |
| #sec-fat ketone bodies | "This is how ketones come to fuel the brain in a long fast" | "Exported in this way, ketones come to fuel the brain in a long fast" | Causal link: the export, not the missing enzyme |
| Check yourself (prolonged fast) | "ketones, which, unlike fatty acids, the brain can use" | "ketones, which the brain can burn readily, whereas fatty acids are a poor brain fuel" | Matches #sec-fasted (fatty acids a poor fuel, not unusable) |

### Chapter: cross-references and altitude markers

| Location | Before (round 0) | After | Reason |
|---|---|---|---|
| #sec-refeeding | pointer "(see the *Undernutrition & Malnutrition* chapter)" after "management comes in the clinical years" | pointer moved to the end of the recognition sentence ("...the person who has eaten little for many days (see the ... chapter)"); citations stay at paragraph end | Cross-ref pointed at management; that chapter covers recognising refeeding risk and refers |
| #sec-broken, Diabetes | "The management of diabetes comes later (see the *Type 2 Diabetes* chapter)" | "Here the task is to recognise the broken switch; the dietary management of type 2 diabetes comes later (see the *Type 2 Diabetes* chapter)" | Pointer implied T2D covers type 1 management; also restores HEAD's "here, recognise the broken switch" altitude marker |
| #sec-broken intro | "Knowing how the healthy switch works makes its failures recognisable." | deleted; movement opens on **Diabetes.** | §11g no movement intros / metacommentary. The verifier's alternative (restore "...; this chapter treats them at recognition level only") conflicts with this and with "the book never acts", so the altitude marker is carried by the Diabetes entry instead (above) |
| #sec-glucose-store | (HEAD scope sentence "This chapter names the raw materials; the enzyme steps belong to biochemistry proper." dropped in round 0) | "The raw materials are enough at the depth of the map; the enzyme steps belong to biochemistry proper." | Scope limit restored without the chapter as actor (§11g) |

### Chapter: style and cohesion

- Lead-in to the ketosis/DKA table: "their setting, their control and their blood pH" → "their setting, their
  insulin, their ketone level and their blood pH" (matches the four rows).
- TCA cycle definition: "The central furnace, a cycle built around oxaloacetate." → "The central furnace: a
  cycle in the mitochondrion that fully oxidises acetyl-CoA to CO₂." (claims already made at #sec-furnace).
- Gluconeogenesis: appositive moved so it attaches to the irreversible steps: "three of glycolysis's steps are
  irreversible (three more of the map's one-way streets), so gluconeogenesis bypasses them with four different
  enzymes."
- Lactate: gloss moved before the example: "...or in a cell with no mitochondria (the organelles that burn
  fuel with oxygen), such as a red blood cell."
- Ketone-body label: "The three ketone bodies are small molecules, and "ketone body" is a loose label:
  β-hydroxybutyrate is chemically a hydroxy-acid. Acetone is the volatile one, ..."
- Amino-acid table follow-up: "The per-amino-acid bookkeeping ... is not worth memorising; the rule ... is what
  matters." → "The assignment of individual amino acids varies between textbooks; in every scheme, the entry
  point sets the fate."
- "what matters" tic: three of seven uses removed (amino-acid line; PDH sentence; reserves: "What matters is
  the shape:" → "best read as ranges that show a shape:"). Remaining: the 15-fold ATP gap, the ratio's
  direction, "which matters in a long fast", "topping it up matters".
- Person-first: "**three fasting obese volunteers**" → "**three fasting volunteers with obesity**" (bold kept as
  the callout's one warning).
- Enzyme italics removed: phosphofructokinase-1, pyruvate dehydrogenase.
- Unbolded "water is usually all you need" (🍳 advice, not a definition or warning).
- IDL glossed: "IDL (intermediate-density lipoprotein)".
- CPT1 expanded in the Optional box: "CPT1 (carnitine palmitoyltransferase 1)"; Summary glosses line corrected
  (ACC was already expanded in HEAD).
- 🍜 callout: heading "What we actually know about intermittent fasting and keto" → "How do intermittent
  fasting and the ketogenic diet work?"; first sentence → "Both are popular here, and both work through
  familiar mechanisms."; "The physiology is real; the magic is not." deleted. (Summary note "keto only in the
  🍜 heading" is now stale: "keto" no longer appears in the chapter.)
- Close: final thesis-restating sentence ("With one switch ... we can predict ...") deleted (§11c); "twelve
  hours" → "12 hours".
- "just drunk." → "just drunk". (British punctuation).

### Island data

- ketone-bodies.mol.yml intro: "Choose a molecule and rotate it. All three are small, water-soluble fuels
  exported by the fasting liver." → "Choose a molecule and rotate it." (decision 9: repeats the chapter prose).
- Quiz q-insulin-anabolic (a): "It is the master anabolic hormone across all three macronutrients." → "It is
  anabolic for all three macronutrients." (44 chars vs distractors 39/44). The verifier's "It drives storage
  of all three macronutrients." was not used: the chapter teaches that the body has no storage protein.
- Quiz q-glut (a): "Muscle and fat use insulin-dependent GLUT4; the liver uses GLUT2." → "Muscle and fat use
  GLUT4, which needs insulin." (46 vs 40/47; the GLUT2 detail stays in the feedback).

### Deferred content concerns added this round

- #sec-g6p: round 0 softened HEAD's "This is the single most common misconception about glucose breakdown."
  to "although glycolysis is often assumed to consume it". Left as is and logged (decision 1): the superlative
  is an uncited claim about how often students hold the belief, and restoring "misconception" would add a
  judging word (§11g Common beliefs). Author to choose.
- Valve count (already in the deferred list above, restated by the verifier): metabolic-map.yml marks three
  `valve: true` edges (pdh, g6p-out, gng) and treats glucose export as a valve, while the chapter names four
  one-way streets (PDH + three irreversible glycolytic steps bypassed by gluconeogenesis). Edge data not
  changed.

### Gate (re-run after fix round 1)

- Bib-key citation multiset (excluding `@sec`): identical to HEAD (md5 match; 37 keys). `@sec` 3 → 0 as in
  round 0 (intended named-link replacements).
- Islands 5 → 5; callouts 11 → 18 (unchanged from round 0); tables 1 → 4 (unchanged from round 0); `![`
  figures 0 → 0; mermaid figures 2 → 2. All HEAD `{#sec-…}`/`fig-…` ids present; every in-chapter
  `](#sec-…)` link resolves.
- copy-audit `--you` (all six files): 0 flags; "you" lines 4 (unchanged, all justified above).
- YAML: all five data files load with js-yaml. validate-cases: `OK alcohol-fasting-hypoglycaemia.case.yml`.

## Fix round 2

Verifier round 2 listed 1 blocker, 4 majors and 18 minors. Two minors were duplicates (the 🍜 callout appears
twice), and two minors were fixes to the same sentence (the amino-acid follow-up), which were merged. All were
addressed. Where the wording differs from the verifier's proposal, the reason is given below. Files touched
this round: the chapter, metabolic-map.yml, the quiz and the case. metabolic-switch.yml and
ketone-bodies.mol.yml are unchanged. Pre-round snapshot: retrofit-logs/im-round2-pre/.

### Content fixes (decision 1)

| File | Location | Before (round 1) | After | Category |
|---|---|---|---|---|
| integrative-metabolism.qmd | #sec-map crossroads list, TCA cycle | "The central furnace: a cycle in the mitochondrion that fully oxidises acetyl-CoA to CO₂." | "The central furnace: a cycle in the mitochondrion, built around oxaloacetate, that fully oxidises acetyl-CoA to CO₂." | Dropped fact restored (HEAD: "built around oxaloacetate"). Round 1 logged this rewrite as style, but #sec-furnace never mentions oxaloacetate. The fact is what links pyruvate's route back toward glucose and the table's "TCA-cycle intermediate" entry to the cycle |
| integrative-metabolism.qmd | #sec-g6p | "...and not in glycolysis itself, although glycolysis is often assumed to consume it." | "...and not in glycolysis itself. Even so, the belief that glycolysis consumes oxygen is the single most common one about glucose breakdown." | Claim strength restored to HEAD ("single most common"). Round 0's softening changed a claim, which no decision-1 fix category covers. The neutral word "belief" replaces "misconception" (§11g Common beliefs). This resolves the round-1 deferred item |
| integrative-metabolism.qmd | #sec-pyruvate callout heading | "Why fat cannot become glucose" | "Why fatty acids cannot become glucose" | Heading misnames the content (decision 1, category 4). The callout body, learning objective 2 and q-fat-to-glucose all teach that glycerol from fat is glucogenic. (This supersedes the round-0 Summary entry "The one fact to carry out of Part A" → "Why fat cannot become glucose".) |
| integrative-metabolism.qmd | #sec-starvation | "Unlike fatty acids, ketones are water-soluble and cross into the brain freely." | "Unlike fatty acids, which travel bound to albumin and are a poor brain fuel, ketones are water-soluble and readily burned by the brain." | Internal contradiction. The contrast taught again the explanation that #sec-fasted rejects (that fatty acids cannot cross into the brain). Every clause of the new wording is already stated in #sec-fasted (@schonfeld2013) and in the Check yourself answer, so no new claim is added |
| integrative-metabolism.qmd | #sec-fed GLUT callout | "because each tissue uses a different glucose transporter, its glucose door" | "because muscle and fat use a different glucose transporter, or glucose door, from the liver" | Inaccurate round-0 wording. Muscle and fat share GLUT4, so "each tissue uses a different transporter" is false read literally. The new wording restores HEAD's meaning ("the glucose door each uses") |
| metabolic-map.yml | intro | "Use the toggles to show the one-way streets, or only the breaking-down (catabolic) or building-up (anabolic) traffic." | "Use the toggles to show the one-way streets (the PDH step from pyruvate to acetyl-CoA, and the gluconeogenic routes that bypass glycolysis's three irreversible steps), or only the breaking-down (catabolic) or building-up (anabolic) traffic." | Island contradicted the chapter. The toggle highlights the three `valve: true` edges (pdh, g6p-out, gng), but the chapter counts four one-way streets: PDH plus glycolysis's three irreversible steps. This is a text-only fix; the edge data is unchanged. The step-5 caption ("four one-way streets") now matches. Plain text. Deviation: "from pyruvate to acetyl-CoA" was added after "the PDH step", because the island comes before #sec-pyruvate, where PDH is first expanded. The phrase repeats the paragraph just above the island ("The first of them, from pyruvate to acetyl-CoA"). This resolves the deferred valve-count item |
| metabolic-map.yml | step 3 caption | "fat can be burned but cannot be turned back into glucose" | "fatty acids can be burned but cannot be turned back into glucose" | Island contradicted the chapter and quiz, which say glycerol is glucogenic. Matches the acetyl-CoA node note |
| metabolic-map.yml | aminoacids `outputs` | "Leucine and lysine are the only purely ketogenic amino acids." | "A few amino acids, such as leucine and lysine, are purely ketogenic." | Island contradicted the chapter, which says "a few" and that the assignment varies between textbooks. This resolves the deferred item |
| metabolic-map.yml | step 4 caption (a further fix, not on the verifier list) | "ketogenic ones (leucine, lysine)" | "ketogenic ones (such as leucine and lysine)" | Same tension as the outputs line: the bare parenthesis read as the complete list |

### Style and wording (no claim changed)

| Location | Before (round 1) | After | Reason |
|---|---|---|---|
| Learning objective 6 | "Recognise the clinical failures of the switch: alcohol-induced hypoglycaemia, the symptoms of hypoglycaemia and the patient at risk of refeeding syndrome." | "Recognise the failures of the switch (diabetes and alcohol-induced hypoglycaemia), the symptoms of hypoglycaemia and the patient at risk of refeeding syndrome." | Matches how #sec-broken frames the failures, and adds diabetes, which the old wording left out |
| #sec-overview | ends "...and its one control step." | + "No separate biochemistry course is assumed, and the full enzyme machinery is left to biochemistry proper." | Restores HEAD's prerequisite statement and depth limit (passive voice; the chapter is not the actor) |
| #sec-amino | "familiar from clinical liver tests" | "which appear in clinical liver tests" | HEAD's presupposition ("you will meet"); first-year readers do not yet know ALT and AST |
| #sec-amino, after the table | "The assignment of individual amino acids varies between textbooks; in every scheme, the entry point sets the fate." | "The assignment of individual amino acids varies between textbooks and is not worth memorising; the rule holds in every scheme." | Two verifier fixes merged: HEAD's altitude cue restored, and the clause repeated from the lead-in ("entry point sets its fate") removed. The verifier's ", but the rule holds" became a semicolon because copy-audit flags "is not …, but" as negative parallelism; the semicolon matches the verifier's punctuation in the altitude-cue fix |
| #sec-fasted, brain | "A widely taught explanation is that fatty acids cannot cross into the brain, but that is not the reason:" | "A widely taught explanation for this dependence is that fatty acids cannot cross into the brain, but that is not the reason:" (rest of the sentence unchanged) | Cohesion (§11j): the referent is now explicit. Deviation: "widely taught" was kept instead of the verifier's "often explained by fatty acids being unable to cross", because it states where the belief comes from (§11g Common beliefs) |
| #sec-fasted, lipolysis | "Adipose tissue releases fatty acids, for muscle, heart and liver, and glycerol, the one glucogenic part of fat, which feeds gluconeogenesis" | "Adipose tissue releases two products: fatty acids, which fuel muscle, heart and liver; and glycerol, the one glucogenic part of fat, which feeds gluconeogenesis" | Parse fix, using the verifier's wording. A semicolon separates the two list items, which each contain commas |
| #sec-g6p | one 24-word sentence ending in "although..." | split into two sentences (16 and 17 words) with "Even so" | Deviation from the verifier's single "although" sentence, which would have been 32 words (§11j). HEAD also had two sentences here |
| #sec-starvation, Cahill phases | one 38-word sentence | "...and then to early fasting, which runs on gluconeogenesis. Over days to weeks the body moves into protein-sparing **ketosis**, a raised level of ketones in the blood." | §11j split, using the verifier's wording |
| Starvation-numbers callout | "The classic figures, the brain drawing ... and brain glucose use falling roughly threefold, trace to..." | "The classic figures (the brain drawing well over half its energy from ketones, and brain glucose use falling roughly threefold) trace to..." | The comma-bounded appositive read as a list (verifier's wording) |
| Starvation-numbers callout | "...not modern large-trial constants: the brain's shift to ketones is real..." | "...not modern large-trial constants. The brain's shift to ketones is real..." | The 41-word sentence the verifier flagged, split at the colon (15 and 26 words), as in HEAD |
| #sec-broken, hypoglycaemia | "...palpitations and hunger, driven by adrenaline and appearing at a higher glucose level as an early alarm." | "...palpitations and hunger. They are driven by adrenaline and appear at a higher glucose level, as an early alarm." | The participial phrase attached ambiguously to "hunger" (§11g trailing -ing) |
| 🍜 callout | "Both are popular here, and both work through familiar mechanisms." | "Both are popular here, and both work, but through more ordinary mechanisms than their promoters claim." | §11g Common beliefs: the callout now states the belief it answers (HEAD: "less exotic mechanisms than the hype claims"). Deviation: the verifier's "than their promotion claims" became "than their promoters claim", which avoids reading "their promotion claims" as a noun phrase |

### Quiz and case

- q-glut (a): "Muscle and fat use GLUT4, which needs insulin." → "Their GLUT4 needs insulin; liver GLUT2 does not." The
  option now answers both halves of the stem. Deviation: the verifier's "Muscle and fat use insulin-dependent GLUT4; the
  liver does not." is 63 characters, not the 45 the verifier stated, against distractors of 40 and 47. It would have
  made the correct option the longest by a wide margin (§11g: options about the same length). The 48-character wording
  keeps both halves and keeps the options a similar length. Both clauses are stated in the GLUT callout. Feedback
  unchanged.
- q-scot (a) feedback: "Lacking SCOT, the enzyme needed to use ketones, ..." → "Lacking the enzyme needed to use
  ketones, ...". SCOT is never taught or expanded (§11g curse of knowledge). This supersedes round 1's "SCOT glossed
  in feedback".
- Case end-partial body: "The take-home: alcohol on an empty stomach causes hypoglycaemia: it blocks the liver from
  making glucose..." → "...causes hypoglycaemia, because it blocks the liver from making glucose..." (the sentence had
  two colons).
- Script check of consecutive feedback openings: q-glut Insulin / The / After; q-scot Lacking / During / Ketones. No
  repeats. Option lengths: q-glut 48 / 40 / 47; q-scot unchanged (49 / 46 / 31).

### Deferred content concerns: status after round 2

- Resolved this round: (a) #sec-starvation "cross into the brain freely": the phrase was removed by the
  internal-consistency fix. "Readily burned by the brain" still does not state that brain uptake depends on blood
  ketone concentration; the next sentence ("Over days to weeks...") gives the time course. (b) metabolic-map
  "Leucine and lysine are the only purely ketogenic amino acids": now "a few ... such as". (c) Four one-way streets vs
  three valve edges: the island intro now names what the toggle shows. The edge data is still unchanged (pdh, g6p-out,
  gng). (d) Round-1 item on the softened #sec-g6p superlative: HEAD's strength is restored.
- Still deferred: every other item in the round-0 and round-1 lists. Note that the restored HEAD superlative
  ("the single most common one about glucose breakdown") is an uncited claim about what students believe. It needs a
  source check, and keeping or softening it is the author's call.
- Glossary: the proposed TCA-cycle row (the meaning from term-ownership.md) is unaffected in substance. If the
  orchestrator wants the row to match the crossroads definition list, it can add "built around oxaloacetate".

### Gate (re-run after fix round 2)

- Bib-key citation multiset (excluding `@sec`): identical to HEAD. md5 18e24800bdc97e4a1a4db5d50435014e for both;
  37 keys. `@sec` 3 → 0, as in rounds 0 and 1.
- Islands 5 → 5; callouts 11 → 18; tables 1 → 4; `![` figures 0 → 0; mermaid figures 2 → 2. All are unchanged from
  round 1.
- All 25 HEAD `{#sec-…}`/`{#fig-…}` ids and both mermaid `fig-` labels are present. Every in-chapter `](#sec-…)` link
  resolves.
- copy-audit `--you` (all six files): 0 flags. An interim ", but" wording raised one neg-parallel flag, which was fixed
  as described above. "You" lines: 4, unchanged.
- YAML: all five data files load with js-yaml. validate-cases: `OK alcohol-fasting-hypoglycaemia.case.yml`.
- Not run (per instructions): render or quarto.
