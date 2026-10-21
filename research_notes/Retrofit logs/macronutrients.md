# Retrofit log: Macronutrients (`book/chapters/macronutrients.qmd`)

Files changed: `book/chapters/macronutrients.qmd`, `book/diagrams/glycemic-index-load.yml`,
`book/structures/dietary-fats.mol.yml`, `book/structures/proteins.protein.yml`,
`book/quizzes/macronutrients.quiz.yml`, `book/cases/common-questions.case.yml`.

## Gate and checks

| Check | Before (HEAD) | After |
|---|---|---|
| Citation multiset | 20 keys, 30 uses | identical (diffed) |
| data-island | 5 | 5 |
| Callouts | 17 | 25 (+1 Learning objectives, +7 Check yourself) |
| Tables | 1 | 1 |
| Figures | 7 | 7 (fig-alanine moved up beside the amino-acid paragraph; none added/removed) |
| HEAD `{#fig-…}` ids | 7 | all 7 present (HEAD had no `{#sec-…}` ids) |

- Copy audit (`--you`, all six files): 1 flag left, `us-spelling "hemoglobin"` on
  `pdb: /structures/hemoglobin-2hhb.pdb` in proteins.protein.yml. It is an asset path (the `id: hemoglobin` is
  also internal); renaming needs the asset file renamed, which is outside my files. One "you" left in the
  chapter: "Your choices branch the case" (island instruction). Em dashes: 0 in every file. Bold density
  55.9 → 9.9 per 1,000 words.
- YAML: all five files load with js-yaml. `validate-cases.mjs`: common-questions.case.yml OK.
- Not done (forbidden here): render / TOC check / chapter-map link check / visual check of the `.spectrum`,
  `.example` and definition-list blocks.

## Summary of changes

Chapter
- Opener: "the same kilocalories" → "the same energy content" (one term for energy).
- Added Learning objectives (6) and a chapter map (4 branches: Carbohydrate, Fat, Protein, From nutrients
  to patterns). Added `{#sec-…}` ids: overview, carbohydrate, gi-gl, fibre, dietary-fat, cis-trans, protein,
  nutrient-patterns, singapore, close, quiz, case. Note: the plan's `#sec-patterns` was changed to
  `#sec-nutrient-patterns` because What a Healthy Diet Looks Like and Why Nutrition Matters now both use
  `#sec-patterns` in their working copies.
- At a glance: Macronutrients and dietary fibre bold-defined in third person; roadmap clause, "But energy
  density is only part of the story…" and "Hold this thought…" cut; callout retitled "What decides a
  macronutrient's health effect"; box legend reduced to one plain sentence with no emoji or bold (plan
  uncertainty 1, option b).
- Carbohydrate: arrow blockquote → `.spectrum`; Wholegrains gets its definition (bran and germ, from the
  brown-rice caption); "The molecules underneath" run-in dropped; the 14-bold paragraph → definition list
  (monosaccharides, disaccharides, polysaccharides, amylose and amylopectin) + an `.example` box
  (glutinous rice vs basmati); arrow cross-refs → linked "see the *X* chapter" parentheticals; owner terms
  (brush border, SGLT1, insulin) unbolded; GI bands inline-header list → `.spectrum`; "available
  carbohydrate" pre-taught before the GI definition; "The watermelon trick" → common-belief callout
  "Should high-GI foods be avoided?"; GI caveats → bulleted list + practical-message paragraph; 🔬
  imperative made expository; 🍜 four tips → intro + list (citations split with their claims); hyphen
  fixes (finely milled, freshly pressed, more thoroughly cooked); fibre evidence callout rewritten, with a
  plain gloss of "prospective cohort studies" (owner: Evidence vs Hype).
- Fibre: soluble/insoluble fibre bold-defined; SCFA left unbolded with link to the *Gut Microbiome*
  chapter (#sec-scfa); food-matrix antithesis opener rewritten. Two Check yourself callouts end the
  movement.
- Fat: ranking spectrum + bullets + nuts figure moved from *What it is* into the *Quality* beat so that
  saturated, *trans*, mono/poly and LDL are defined first (plan uncertainty 3, option a); the 12-bold
  "molecules underneath" paragraph → definition list (fatty acid, saturated, unsaturated, *cis*/*trans*,
  essential fatty acids); lipid-class paragraph split, "you get" removed, amphipathic glossed, lipoprotein
  abbreviations expanded (VLDL, LDL, HDL), "MCT" expanded; lipid-classes caption unbolded and tagline cut;
  "Low fat can backfire" → common-belief callout "Is a low-fat diet healthier?" stating the belief and
  its origin; island paragraph keeps one interpreting sentence; 🔬 "you just rotated" removed; 🍜 → intro
  + list. Two Check yourself callouts.
- Protein: amino-acid paragraph de-bolded; alanine figure moved up beside it; four levels → definition
  list (no arrows, 3D); island paragraph shortened (colour instruction moved into the island intro);
  PDCAAS/DIAAS expanded and the protein-quality paragraph moved into the *Quality* beat; thermic effect
  unbolded with link to *Energy Balance* (#sec-expenditure); lone `### From science to plate` heading
  deleted (single-child fix, plan uncertainty 4, option a); "Maillard" → **Maillard reaction**. Two Check
  yourself callouts.
- From nutrients to patterns: unbolded; link to *What a Healthy Diet Looks Like* added; one Check
  yourself callout.
- Singapore picture: "You have met…" and significance padding removed; tools now credited to *Why
  Nutrition Matters*; no Check yourself (per §11j).
- Close: "Put it together.", "once you ask" and "Resist prescribing grams; that comes later" (curriculum
  meta) replaced; "A bowl of sugary drink" fixed. Case intro: topics reordered to node order, "correct the
  myths" → "respond to what he has heard with the evidence"; the only em dash removed.
- Long sentences split where they stacked new terms (GI definition, fibre evidence, protein digestion,
  complete/complementary, Maillard).

Island / quiz / case
- glycemic-index-load.yml: `ref_serving_note` em dash and clause fixed. Food values untouched.
- dietary-fats.mol.yml: intro cut to the instruction (it repeated the chapter paragraph, decision 9); em
  dashes removed from notes; stearic note "Notice how…" → expository. Kept "most healthy unsaturated
  fats" in the oleic note (the plan's "most unsaturated fats in food" broadens the claim; decision 1).
- proteins.protein.yml: intro cut to the instruction; em dashes removed from names and notes; "is what
  causes" → "causes".
- macronutrients.quiz.yml: every "Correct —" opener removed; feedback starts with the explanation; no two
  consecutive feedbacks share an opening word (Fat/This/Fat/The/Free/Starch/*Trans*/This/Saturated/The/
  Most/The/Guidelines/A/This/Half/Wholegrains/Protein); bold in stem → none/italics; q4 correct option
  trimmed to the distractors' length (cohort detail moved into feedback); "trap"/"Overstated" judging
  openers removed.
- common-questions.case.yml: objectives "myths" → "popular beliefs … with the evidence"; "(a skill later
  chapters teach)" → "(taught in later chapters)"; tag `myths` → `common-beliefs`; all 31 em dashes
  removed; feedback openers "Right —", "Exactly —", "Almost —", "Too far.", "A myth worth correcting…",
  "A common mix-up worth correcting." removed; bold removed from feedback; "You need some fat" → "The body
  needs some fat"; "extra calories" → "extra energy"; taglines "Protein is permissive, not magic" and
  "lands the quality theme once more" (metacommentary) cut; end-good chapter references made italic
  canonical names in a parenthesis (the chapters are no longer the subject). Opening-word sequence: This /
  Swapping / A / The / Saturated / Dietary / Coconut / The / Type / Extra / Adequate / Protein.

## Content fixes (decision 1 categories)

| File | Location | Before | After | Category |
|---|---|---|---|---|
| macronutrients.qmd | Carbohydrate, From plate to cell | "travel to the liver in the portal blood, where insulin drives their uptake and storage" | "They travel to the liver in the portal blood, where insulin drives their storage." | Contradiction with another chapter's explicit, cited text: *Integrative Metabolism* "GLUT4 versus GLUT2" callout says liver uptake via GLUT2 needs no insulin and insulin acts on the liver's enzymes [@chadt2020glucose]. Resolved toward the cited text. (Judgement call: the decision's example is numeric; revert if "figure" was meant literally.) |
| macronutrients.qmd | Protein, From plate to cell | "amino-acid metabolism and nitrogen balance → the Integrative Metabolism chapter" | "amino-acid metabolism: see the *Integrative Metabolism* chapter" (#sec-amino) | Cross-reference to a chapter that does not cover the topic: Integrative Metabolism covers deamination and urea but never nitrogen balance, and no other chapter teaches it, so that part of the pointer was dropped. |
| macronutrients.qmd | At a glance, dietary fibre definition | "a carbohydrate we mostly *don't* digest" | "carbohydrate that the small intestine cannot digest" | Internal consistency: aligns the defining use with the chapter's own Fibre definition and the glossary meaning. |
| macronutrients.qmd | Protein, What it does | "precursors for other essential nitrogen-containing molecules" | "precursors of other nitrogen-containing molecules" | Terminology consistency: "essential" is the defined term (essential amino acids); the non-technical use contradicted it. |
| macronutrients.qmd | Fat, 🍜 Eating out | "which Singapore's Food Agency flags" | "which the Singapore Food Agency flags" | Label misnaming the agency. |
| macronutrients.quiz.yml | q2 option 1 feedback | "Intrinsic sugar in whole fruit is *not* a free sugar…" | "The sugar inside whole fruit is not a free sugar, so it is not the target of the WHO limit." | Quiz/chapter terminology: the chapter never uses "intrinsic sugar". |

## Deferred content concerns (not changed; need source checking or another agent's file)

- Carbohydrate, Disaccharides definition: "Many adults can no longer split the bond in lactose, hence
  lactose intolerance" runs lactase deficiency (the norm) into lactose intolerance (symptoms from a given
  dose), which the *Digestion & Absorption* chapter separates (cited @nihConsensus2010 in its working copy).
- Fat, From plate to cell: "monoglycerides that ferry across the gut lining in micelles" conflicts with
  *Digestion & Absorption* ("the micelle stays behind (it's a shuttle, not cargo)"); that D&A text is
  uncited, so not fixed under decision 1.
- `#fig-lipid-classes` caption: "All are built from fatty acids" includes cholesterol, which is a sterol and
  not built from fatty acids (the caption itself then calls it a four-ring sterol).
- Protein, Quality: the 0.8 g/kg/day reference carries no citation. The 🔬 food-matrix block (juice vs
  whole fruit) and the 🔬 oil-oxidation claim also carry none, though §11b expects a citation in each 🔬.
- Close: @crowley2019 (nutrition in medical education) is a weak fit for "Prescribing grams is not the task
  at this stage".
- Patterns and close: @ada2026standards (diabetes standards) supports "no single ideal macronutrient split"
  for all patients; its statement is made for people with diabetes.
- Protein 🔬: "in charred meat it forms other mutagens" via the Maillard reaction; HCAs are Maillard-type
  products but PAHs come from fat pyrolysis and smoke (simplification).
- Free sugars definition omits honey (WHO includes it), in the chapter, quiz q2 and glossary row.
- GI island: "White rice (jasmine)" GI 73 is the international-table mean for boiled white rice (jasmine
  varieties are usually higher); brown rice 65 and banana 47 differ from the 2008 table means (about 68 and
  51). Check against @atkinson2021gitables.
- Case end-good says the student recognised the need for a dietitian because Mr Lim "wants a strict
  low-carb plan", but no node offers that choice; a student who chose the brown-rice swap never sees him
  persist with keto.
- Case: coconut oil ~90% saturated, butter ~two-thirds saturated and the ~1.6 g/kg/day muscle plateau are
  uncited in the case (consistent with *Brain Health & Dementia* and *Adulthood & Working Life*).
- Another agent's file: *Undernutrition & Malnutrition* credits "the body-composition and nitrogen-balance
  ideas of the … *Macronutrients* chapters", but Macronutrients does not teach nitrogen balance (and now no
  longer names it). It also names "*Energy Balance & Body Composition*", not the canonical *Energy Balance*.

## Deferred backlog

- Glossary: add the 45 rows below to `book/glossary.qmd` (not edited here).
- Anchors: *Digestion & Absorption*, *What a Healthy Diet Looks Like* and *Why Nutrition Matters* had no
  `{#sec-…}` ids at HEAD, so those links are file-only. Their working copies now have ids (e.g. D&A
  `#sec-enzymes`, `#sec-fat-absorption`, `#sec-lactose`; Healthy Diet `#sec-patterns`); add anchors once
  those retrofits are committed.
- Render verification of the TOC (Carbohydrate: GI, From science to plate, Fibre; Fat: Seeing the
  difference, From science to plate; Protein: no children), chapter-map links, and the three `.spectrum`
  blocks, four definition lists and the `.example` box.
- Box legend (uncertainty 1): consider moving the 🔬🍜🍳 legend into the preface "How to read it" book-wide.
- Protein (uncertainty 4, option b): an optional `### Seeing the fold` sub-topic so all three movements
  show "From science to plate" in the TOC; not done.
- Fat (uncertainty 3): the ranking now sits in the *Quality* beat, not *What it is* as §11a says; codify
  or revert.
- Missing 🔬 citations (food matrix; oil oxidation): needs new citations, so deferred.
- Asset rename `structures/hemoglobin-2hhb.pdb` → `haemoglobin-2hhb.pdb` (and the YAML `pdb:` path) would
  clear the last audit flag.
- `components/src/GlucoScale.svelte` hard-codes insight strings with em dashes and capitals ("High-GI food
  — but this serving keeps the glycaemic load LOW. Portion matters.").
- Teaching figure: none added (decision 4).

## Glossary rows owned by this chapter (Introduced in: Macronutrients)

| Term | Meaning | Introduced in |
|---|---|---|
| Acrylamide | A genotoxic carcinogen formed when starchy foods brown at high heat (the Maillard reaction) | Macronutrients |
| Amino acid | The building block of protein: a central carbon carrying an amino group, a carboxyl group, a hydrogen and a variable side chain; about 20 occur in protein | Macronutrients |
| Amylopectin | The branched form of starch; its many chain ends let it digest fast and raise blood glucose sharply | Macronutrients |
| Amylose | The straight-chain form of starch; with few chain ends it digests slowly, giving a gentler glucose rise | Macronutrients |
| Available carbohydrate | The digestible carbohydrate in a food, the quantity that drives the glucose response | Macronutrients |
| Cellulose | A polysaccharide held together by β-links that no human enzyme can cut, so it passes through as dietary fibre | Macronutrients |
| Cholesterol | A ring-shaped sterol that stabilises cell membranes and is the precursor of steroid hormones, bile acids and vitamin D | Macronutrients |
| Cis and trans | The two geometries of a fatty-acid double bond: cis kinks the chain (liquid oils); trans leaves it nearly straight, so trans fat behaves like saturated fat | Macronutrients |
| Complementary proteins | Plant proteins with different amino-acid shortfalls (cereals in lysine, legumes in methionine) that cover each other's gaps across the day, as rice and dhal do | Macronutrients |
| Complete protein | A protein not short of any essential amino acid, as animal proteins typically are | Macronutrients |
| Denaturation | The unfolding of a protein by heat or acid, which usually makes it easier to digest | Macronutrients |
| Dietary fibre | Carbohydrate that the small intestine cannot digest; much of it is fermented by gut bacteria | Macronutrients |
| Disaccharide | Two sugar units joined: sucrose, lactose or maltose | Macronutrients |
| Essential amino acids | The nine or so amino acids the body cannot make, so they must come from the diet | Macronutrients |
| Essential fatty acids | The two fatty acids the body cannot make: linoleic acid (an omega-6) and α-linolenic acid (an omega-3) | Macronutrients |
| Fatty acid | A hydrocarbon chain (a water-hating tail) capped by a carboxyl group (a water-loving head); the building block of dietary fats | Macronutrients |
| Food matrix | The physical structure of a food, including intact plant cell walls that slow the release of its sugars | Macronutrients |
| Free sugars | Added sugars plus the sugars in syrups and fruit juices, but not the sugar inside whole fruit; WHO advises less than 10% of energy | Macronutrients |
| Gelatinisation | The swelling of starch granules during cooking, which makes starch easier to digest | Macronutrients |
| Glycaemic index (GI) | How much a portion of food containing 50 g of available carbohydrate raises blood glucose over about two hours, relative to glucose (100); low 55 or less, high 70 or more | Macronutrients |
| Glycaemic load (GL) | GI scaled to a real serving (GI × available carbohydrate in grams ÷ 100); low 10 or less, high 20 or more | Macronutrients |
| Glycogen | The animal store of carbohydrate, held in liver and muscle; structurally amylopectin taken further | Macronutrients |
| Insoluble fibre | Bulking fibre, as in wholegrain bran and vegetable skins, that adds bulk and aids regularity | Macronutrients |
| LDL (low-density lipoprotein) | The lipoprotein that delivers cholesterol; it drives atherosclerosis when it builds up, and saturated fat raises it | Macronutrients |
| Lipoprotein | A particle that carries fats through the blood, in which they cannot dissolve; the classes are chylomicrons, VLDL, LDL and HDL | Macronutrients |
| Macronutrients | The nutrients needed in gram quantities that supply energy: carbohydrate, fat and protein | Macronutrients |
| Maillard reaction | The high-heat browning of food that adds flavour; in starchy foods it forms acrylamide | Macronutrients |
| Monosaccharide | A single sugar unit: glucose, fructose or galactose | Macronutrients |
| Peptide bond | The bond, formed in a condensation reaction, that links amino acids into protein chains | Macronutrients |
| Phospholipid | A lipid with two fatty acids and a phosphate head on glycerol; amphipathic, it self-assembles into the lipid bilayer of cell membranes | Macronutrients |
| Polysaccharide | A long chain of sugar units, such as starch, glycogen or cellulose | Macronutrients |
| Primary structure | The sequence of amino acids in a protein chain | Macronutrients |
| Protein quality | How well a protein's amino acids match human needs and how digestible it is, scored by PDCAAS or its FAO-preferred successor DIAAS | Macronutrients |
| Quaternary structure | The assembly of several protein chains (subunits) into one molecule, as in haemoglobin's four | Macronutrients |
| Refined starch | Starch that is digested fast and stripped of fibre, as in white rice and white bread | Macronutrients |
| Resistant starch | Starch that escapes digestion in the small intestine and behaves partly like fibre; it forms when cooked starch is chilled | Macronutrients |
| Retrogradation | The change in cooked starch on chilling by which some of it becomes resistant starch | Macronutrients |
| Saturated fatty acid | A fatty acid with no double bonds: a straight chain that packs tightly, so the fat stays solid | Macronutrients |
| Secondary structure | Local folding patterns in a protein chain: the α-helix and the β-sheet | Macronutrients |
| Soluble fibre | Viscous fibre, as in oats, legumes and some fruit, that slows digestion and the glucose rise | Macronutrients |
| Starch | The main polysaccharide of rice, bread and potato: a mix of amylose and amylopectin | Macronutrients |
| Tertiary structure | The overall 3D fold of a protein chain | Macronutrients |
| Triglyceride | Three fatty acids esterified onto a glycerol backbone; the main form of dietary and stored fat | Macronutrients |
| Unsaturated fatty acid | A fatty acid with one (monounsaturated) or more (polyunsaturated) double bonds | Macronutrients |
| Wholegrain | A grain that keeps its bran and germ, as brown rice does | Macronutrients |

## Owner terms from term-ownership.md not in the chapter

None. All 45 terms owned by `macronutrients` occur in the chapter at a defining use (bold, or as a
definition-list term). Terms owned elsewhere are named unbolded: SGLT1, brush border, bile salts,
micelles, chylomicrons, lipase, pepsin, portal vein, lactose intolerance, amylase, peptidases
(*Digestion & Absorption*); amino-acid pool (*Integrative Metabolism*); thermic effect of food (*Energy
Balance*); fat-soluble vitamins (*Micronutrients, Hydration & Electrolytes*); My Healthy Plate, Nutri-Grade
(*Why Nutrition Matters*); atherosclerosis (*Cardiovascular Disease & Hypertension*); prospective cohort
study (*Evidence vs Hype*, with a plain gloss); ultra-processed foods (*Appetite & Weight Regulation*);
short-chain fatty acids (*Gut Microbiome*).

## Fix round 1 (verifier fixes)

Files changed this round: `book/chapters/macronutrients.qmd`, `book/cases/common-questions.case.yml`.
Diagram, structure and quiz YAML were not touched.

### Chapter (`macronutrients.qmd`)

- At a glance: "There are three, carbohydrate, fat and protein, plus **dietary fibre**, carbohydrate
  that…" → "There are three (carbohydrate, fat and protein), plus **dietary fibre**, the carbohydrate
  that…" (comma run).
- At a glance: box-legend roadmap sentence ("Three recurring boxes turn the science into practice…")
  deleted (§11c/§11g narrated roadmap). The at-a-glance now ends with the callout.
- Carbohydrate: lead-in "Each region of the spectrum has its own place in the diet:" added before the
  free-sugars list; Fat: "The three groups carry different advice:" added before the *trans*/saturated/
  unsaturated list (§11g lists need a full-sentence lead-in).
- `#fig-carb-chains` caption shortened to "The same sugar unit, linked differently: one, two or many
  units, in straight (amylose), branched (amylopectin) or β-linked (cellulose) chains." (it
  re-narrated the definition list; §11j). fig-alt and id unchanged.
- Carbohydrate, From plate to cell: split into two sentences; glosses added (decision 2): brush-border
  enzymes "which sit on the surface of the intestinal lining cells"; "the SGLT1 co-transporter (fructose
  on GLUT5)" → "SGLT1 (sodium–glucose cotransporter 1), and fructose on its own transporter, GLUT5"
  (the verifier's "SGLT1 (sodium–glucose cotransporter 1) transporter" would read "cotransporter 1
  transporter", so worded without the doubled noun). All unbolded (owner: *Digestion & Absorption*).
- Fibre evidence: "The benefit strengthened up to about 25–29 g" → "The association strengthened…"
  (keeps the hedge once the sentence was split).
- Fibre evidence callout: "(see [below](#sec-gi-gl))" → "(see [Glycaemic index and glycaemic
  load](#sec-gi-gl))", line rewrapped.
- GI common-belief callout: "because GI ranks how fast glucose rises" → "because a high GI means a
  bigger, faster glucose rise" (matches the chapter's GI definition, which ranks how much glucose rises).
- GI island instruction: "**Compare**" → "*Compare*" (UI label, not a defining use).
- 🍜 Eating out (carbohydrate): intro "Four choices work in a hawker centre or food court:" → "Four
  choices help when eating out [@hpbHealthyPlate; @hpbNutriGrade]:"; the two keys removed from the
  cai-png and Nutri-Grade bullets. Citation-use change: at HEAD one citation group closed a single
  sentence covering all four tips; round 0 split them so the brown-rice and less-rice tips lost their
  support. The group now sits on the list's lead-in, covering all four tips again, as at HEAD. The
  verifier's first option (add @hpbHealthyPlate to two more bullets) would have changed the citation
  multiset, which the gate forbids, so the lead-in form was used instead.
- Check yourself (rice): title "both white rice" → "both rice"; answer "The shape of the starch, as
  well as the amount, sets the response" → "The shape of the starch chain, as well as its size, sets
  the response" ("amount" read as portion, i.e. glycaemic load).
- Fat, lipid paragraph: "The cholesterol in food is a weaker lever… [@carson2020cholesterol]." moved
  from the head of the lipoprotein paragraph to the end of the cholesterol paragraph (as at HEAD, where
  it was a parenthesis after the cholesterol definition); `#fig-lipid-classes` moved up to follow that
  paragraph; the lipoprotein paragraph now opens "Because fats do not dissolve in blood…". Citation
  multiset unchanged.
- LDL: "drives atherosclerosis when it builds up" → "drives atherosclerosis (plaque formation in the
  artery wall) when it builds up" (gloss, decision 2; owner *Cardiovascular Disease & Hypertension*,
  unbolded). Worded "plaque formation" rather than the verifier's "plaque build-up" to avoid
  "build-up … builds up".
- *Cis*/*trans* island paragraph: "the *trans* chain is almost as straight as the saturated one, so it
  packs as tightly." → "…so, like stearic acid, it packs tightly and behaves like a solid fat."
  (restores the HEAD claim; the round-0 wording was an unlogged equality claim).
- 🔬 geometry and oxidation: ", and why *trans* fat behaves like saturated fat in the body" cut (fifth
  repetition of the point in the section).
- Check yourself (haemoglobin): "folds into its secondary, tertiary and quaternary structure" → "folds
  (secondary and tertiary structure) and how chains assemble (quaternary structure)" (matches the
  chapter's definition of quaternary structure).
- Check yourself (rice and dhal): title "…still meet protein needs?" → "…still supply every essential
  amino acid?" (the chapter's claim is about completeness, not total amount).

### Content fixes this round (decision 1)

| File | Location | Before | After | Category |
|---|---|---|---|---|
| macronutrients.qmd | `#fig-lipid-classes` caption | "All are built from fatty acids: … and cholesterol is a rigid four-ring sterol." | "Three are fatty acids or built from them: … Cholesterol, by contrast, is a rigid four-ring sterol." | Internal consistency: the caption counted cholesterol as built from fatty acids; the chapter prose calls it "a different, ring-shaped sterol". The verifier's "Three are built from fatty acids" was adjusted to "Three are fatty acids or built from them" because one of the three drawn is the free fatty acid itself. Resolves the round-0 deferred concern. |
| macronutrients.qmd | Fat, From plate to cell | "pancreatic lipase frees fatty acids and monoglycerides that ferry across the gut lining in micelles. Inside the intestinal cells they are re-assembled…" | "pancreatic lipase frees fatty acids and monoglycerides, which micelles ferry to the gut lining for absorption. Inside the intestinal cells these products are re-assembled…" | Consistency with another chapter's explicit text: *Digestion & Absorption* says micelles "carry them to the brush border… the micelle stays behind: it is a shuttle, not cargo". The claim is narrowed toward that text, with no new fact; "they" → "these products" so the pronoun does not pick up "micelles". Resolves the round-0 deferred concern (which had held off because the D&A text is uncited). Round-2 note: the D&A text is uncited at HEAD and in the working copy, so this fix rests on standard textbook physiology, not on another chapter's explicit, cited text, and sits outside a strict reading of decision 1. It needs the author's sign-off; if decision 1 is read strictly, revert to the HEAD wording ("…monoglycerides that ferry across the gut lining in micelles. Inside the intestinal cells they are re-assembled…", without HEAD's bold, since micelles is a *Digestion & Absorption* term) and restore the deferred concern. |

### Case (`common-questions.case.yml`)

- Objective 2: "Answer popular beliefs about … with the evidence." → "Respond with the evidence to
  popular beliefs about coconut oil, dietary cholesterol and 'more protein = more muscle'." (non-sim
  case, so free editing is allowed).
- Bold removed from four emphasis phrases: "quality, not bans" (intro), "type and food source"
  (remedial), "dietitian" (end-good), "quality" (end-partial).
- q-carb option b: "It's about the type: swap…" → "It's the type: swap…" (option-length parity).
- q-eggs option b: "For most people eggs are fine in moderation; we'll keep an eye on your borderline
  results." (HEAD) → round 0 "…your results." → now "Eggs are fine in moderation; we'll keep an eye on
  your results." Option-length trim: "borderline" moved from option text to feedback in round 0 ("with
  his borderline results in view"), and "for most people" now moves into the same feedback ("…so for
  most people eggs need no ban."), so the qualifier is kept.
- q-fat option a feedback: "…Neither is a heart-healthy default." → "…Neither is a heart-healthy
  default, and the point is best made kindly." (restores the counselling cue lost with the "A myth
  worth correcting kindly." opener).
- Feedback openers still differ between consecutive options (q-eggs: The / Saturated / Dietary).

### Checks after round 1

- Gate (HEAD vs working copy): citation multiset identical (diffed; 20 keys); islands 5 → 5; callouts
  17 → 25 (+1 Learning objectives, +7 Check yourself, unchanged from round 0); tables 1 → 1; figures
  7 → 7; every HEAD `{#fig-…}` id present (HEAD had no `{#sec-…}` ids).
- Copy audit (`--you`, all six files): 1 flag (the `hemoglobin-2hhb.pdb` asset path, as before); one
  "you" ("Your choices branch the case", island instruction); em dashes 0; bold 9.7 per 1,000 words.
- YAML: all five data files load with js-yaml. `validate-cases.mjs`: common-questions.case.yml OK.
- Deferred-concern list above: the micelle and `#fig-lipid-classes` items are now resolved; the rest
  stand.

## Fix round 2 (verifier fixes)

Files changed this round: `book/chapters/macronutrients.qmd`, `book/structures/dietary-fats.mol.yml`,
`book/diagrams/glycemic-index-load.yml`, `book/quizzes/macronutrients.quiz.yml`,
`book/cases/common-questions.case.yml`. `proteins.protein.yml` was not touched.

### Chapter (`macronutrients.qmd`)

- Learning objective 5: "Outline how each macronutrient is digested and absorbed, and where it enters the
  circulation." → "Outline how carbohydrate, fat and protein are digested and absorbed, and where each enters
  the circulation." (fibre counts among the macronutrients here, but the chapter gives it no digestion route).
- Chapter map: lone child "[Seeing the difference: *cis*, *trans* and saturated](#sec-cis-trans)" deleted, so
  Fat is a top-level branch with no children, like Protein (§11h single-child). `#sec-cis-trans` is kept.
- Carbohydrate spectrum: three items → two, grouped as at HEAD ("Free sugars and refined starches" / "Intact
  wholegrains and fibre"; Limit and Protective ends kept). This removes the implied ranking of refined starch
  above free sugar.
- Lead-in to the rice example: "How the polysaccharides are shaped matters most, so the same grain can
  differ:" → "Because the shape of the starch chain sets how fast it is digested, two kinds of the same grain
  can differ:". Example box: "Ordinary white rice also has a high glycaemic index (~70+; see" → "Even
  ordinary white rice raises blood glucose quickly (a high glycaemic index, ~70+; see" (explicit causal
  link; "also" misread; the term is now carried by its effect before it is defined at #sec-gi-gl).
- From plate to cell (carbohydrate): "They travel to the liver…" → "Glucose and galactose then travel to the
  liver…" (see the content-fix table; wording differs from the verifier's).
- 🍜 Eating out (carbohydrate): "Four choices help when eating out [@hpbHealthyPlate; @hpbNutriGrade]:" →
  "Four swaps improve the carbohydrate on a hawker plate [@hpbHealthyPlate; @hpbNutriGrade]:" (citation
  group unmoved, still on the lead-in).
- Check yourself title (GI): *bee hoon* italicised (twice), as in the prose and the answer.
- Fat, the MCT sentence: moved from before the triglyceride paragraph to straight after "…(and what the
  ~9 kcal/g refers to).", reworded "Chain length runs from short through medium to long; medium-chain fats are
  absorbed more directly, which is the point of "MCT" (medium-chain triglyceride) oils." ("triglyceride" had
  been used before its bold definition). Accompanying change: the move would have made a seven-sentence
  paragraph, so it now breaks before "**Cholesterol** is a different, ring-shaped sterol…". The first
  paragraph holds the fatty-acid-based lipids (triglyceride, MCT, phospholipid), the second cholesterol,
  matching the `#fig-lipid-classes` caption ("Three are fatty acids or built from them… Cholesterol, by
  contrast…"). No other wording changed; @carson2020cholesterol stays with its sentence.
- Fat, Quality: "The three groups carry different advice:" → "The advice differs by type:" (it follows a
  four-item spectrum).
- *Cis*/*trans* island paragraph: the 43-word instruction-plus-mechanism sentence split at its colon into
  "…and add stearic acid (a saturated fat) for comparison." and "The *trans* chain is almost as straight as the
  saturated one, so, like stearic acid, it packs tightly and behaves like a solid fat."; the line break after
  "modest;" rejoined.
- 🍜 Eating out (fat): "Four choices help when eating out:" → "Four choices improve the fat in a hawker meal:"
  (the verifier proposed "cut the fat"; see "Applied differently" below).
- Check yourself (oleic/elaidic), last sentence: "…explains why *trans* fat behaves like saturated fat." →
  "…explains why *trans* fat behaves like saturated fat, in the body as well as on the plate." This restores
  the HEAD link between chain geometry and how *trans* fat acts in the body, which left the 🔬 box in round 1.
  The verifier offered this or restoring the 🔬 clause; the Check yourself was chosen so the round-1 cut of the
  repeated 🔬 clause stands.
- Protein, What it does: "several neurotransmitters (serotonin, dopamine)" → "several neurotransmitters
  (such as serotonin and dopamine)" (HEAD's "e.g." restored as an example marker; line rewrapped).
- Check yourself title (protein): *dhal* italicised.
- From nutrients to patterns: "advise individualising and referral to a dietitian" → "advise individualising
  and referring to a dietitian" (parallel gerunds, as at HEAD).

### Island data

- `dietary-fats.mol.yml`, elaidic note: "Elaidic acid is the classic industrial trans fat, the fat with the
  clearest dietary harm signal." → "Elaidic acid is the classic industrial trans fat, and industrial trans fat
  carries the clearest dietary harm signal." (the signal belongs to the class, as at HEAD and in the chapter).
- `dietary-fats.mol.yml`, stearic note: ", which is why trans fats behave like saturated ones" cut (decision 9:
  it repeated the paragraph beside the island, the *Cis* and *trans* definition and the Check yourself). The
  note now ends "Its straight shape is close to that of elaidic acid."
- `glycemic-index-load.yml`, `ref_serving_note`: "GL is computed as GI × carbs ÷ 100." deleted (decision 9). The
  verifier's condition was checked first: `GlucoScale.svelte` shows the note only in the island's "Show all
  foods (the numbers)" panel, below its own live equation (GL = GI × carbs ÷ 100 = …), and the island is
  embedded only in this chapter, straight after the display formula, so the note never appears without it.
- `macronutrients.quiz.yml`, q2 correct option: "Sugar added to a drink, plus the sugar in fruit juice" (53
  characters) → "Added sugar, plus the sugar in fruit juice" (42; distractors 48 and 24). Worded differently from
  the verifier; see "Applied differently" below.

### Case (`common-questions.case.yml`)

- q-eggs b: "Eggs are fine in moderation; we'll keep an eye on your results." → "Eggs in moderation are fine
  for most people; we'll watch your results." (the HEAD hedge returns to the option the student picks; 70
  characters, the same as option c). Feedback unchanged.
- q-fat a feedback: "Neither is a heart-healthy default, and the point is best made kindly." → "Neither is a
  heart-healthy default; correct the belief kindly, without a ban." (the student made no point in this
  branch, so the cue now tells them what to do).
- q-fat c option: "Keep some fat, but use unsaturated oils for everyday cooking." (61) → "Keep some fat, but cook
  with unsaturated oils." (46; distractors 53 and 27). The feedback already carries "everyday" ("make the
  everyday default").
- q-fat c feedback: "…small amounts of coconut for flavour are fine: the default cooking fat is what matters,
  so no ban is needed." → "…small amounts of coconut for flavour are fine. The default cooking fat is what
  matters, so the hype can be corrected without a ban." This restores HEAD's "Correct the hype without banning"
  cue, which round 0 dropped without logging it. The verifier's wording is kept; the colon became a full stop
  because the joined sentence ran to 34 words.
- q-protein b: "Enough protein plus training builds muscle; ordinary food usually covers it." (76) → "Enough
  protein plus training builds muscle; food usually covers it." (67). Worded differently from the verifier;
  see "Applied differently" below.
- q-protein c: "…take a few scoops a day to feel more energetic." → "…take a few scoops a day." (53).
- remedial: "answer popular beliefs plainly" → "correct mistaken beliefs plainly"; end-good: "addressed the
  coconut-oil, egg and 'more-protein' beliefs" → "corrected the coconut-oil, egg and 'more-protein'
  misconceptions" (lines rewrapped); keyPoints: "Answer popular beliefs clearly:" → "Correct mistaken beliefs
  clearly:". This restores the HEAD verb ("correct myths…") without "myth". Here "correct" names the clinician's
  action on the patient's beliefs, and does not judge the reader (the §11g common-beliefs rule covers book
  callouts and sections). §11g's island-data rule itself uses "misconception" as the neutral term, and the
  audit flags neither word.
- Feedback openers unchanged: q-eggs The / Saturated / Dietary; q-fat Coconut / The / Type; q-protein Extra /
  Adequate / Protein.

### Content fixes this round (decision 1)

| File | Location | Before | After | Category |
|---|---|---|---|---|
| macronutrients.qmd | Carbohydrate, From plate to cell | "…and fructose on its own transporter, GLUT5. They travel to the liver in the portal blood, where insulin drives their storage." | "…and fructose on its own transporter, GLUT5. Glucose and galactose then travel to the liver in the portal blood, where insulin drives their storage." | Internal consistency, undoing a widening from round 1: the round-1 split let "They" take in fructose, so the text said insulin drives fructose storage. The scope is back to HEAD's (glucose and galactose only). |

Restorations of HEAD meaning (round-0/1 edits that had shifted a claim; no new claims): q-eggs b hedge;
q-fat c "correct the hype" cue; remedial/end-good/keyPoints "correct" verb; carbohydrate spectrum grouping;
*trans* fat "in the body"; elaidic note (harm belongs to the class); "such as" example marker; the SGLT1
sentence's scope (above).

### Applied differently from the verifier's wording (same problem fixed)

- SGLT1 sentence: the verifier proposed merging back into one sentence with fructose in a parenthesis ("…on
  SGLT1 (sodium–glucose cotransporter 1; fructose uses its own transporter, GLUT5) and travel to the liver…").
  That sentence is 32 words and stacks four terms owned elsewhere, which reverses the round-1 split (§11j: split
  over ~25 words). The second sentence names its subject instead (§11j pass 3: repeat the key noun), so the
  sentences are 19 and 17 words with HEAD's scope.
- 🍜 Eating out (fat) lead-in: "Four choices cut the fat in a hawker meal:" was not used. "Cut the fat" frames the
  list as cutting total fat, against the movement's own message ("eat better fat"; the Check yourself ends "The
  goal is better fat, not less fat."). It also misdescribes the fourth item: choosing fish improves the type of
  fat more than the amount. "Improve the fat" covers both the amount (frying, oil, skin) and the type (fish), and
  still avoids repeating the callout title.
- Quiz q2: "Sugar added to drinks, and fruit juice" was not used. "Fruit juice" alone names a drink, not a sugar.
  The stem asks which sugar counts, and the parallel distractor names a sugar ("The sugar naturally present
  inside a whole apple"). The option keeps HEAD's "plus the sugar in fruit juice" and uses the chapter's term
  "added sugar" ("Free sugars, added sugars plus those in syrups and fruit juices").
- q-protein b: "…; food covers it." was not used. It drops the hedge "usually" (HEAD: "ordinary food usually meets
  needs"), the same defect as the q-eggs major (a hedge is not a detail that moves to feedback, and this
  feedback does not carry it). With the hedge kept, the lengths are 39 / 67 / 53, against 39 / 76 / 77 before;
  the correct option is still the longest, by 14 characters.

### Not changed

- Fat ranking spectrum in the *Quality* beat rather than *What it is* (§11a): no text change, as the verifier
  advised. It stays an open author/orchestrator question: codify it in §11a (AUTHOR.md is outside these files),
  or move the spectrum, its lead-in, the three bullets and `#fig-nuts` back after "**What it is.**".
- Micelle wording (round-1 content fix): no text change. The round-1 content-fix row above now carries the
  note that the *Digestion & Absorption* text is uncited, so the fix needs the author's sign-off.

### Checks after round 2

- Gate (HEAD vs working copy): citation multiset identical (diffed; 20 keys, 29 uses; the "30 uses" in the
  round-0 table was a miscount, and HEAD also has 29); islands 5 → 5; callouts 17 → 25 (+1 Learning
  objectives, +7 Check yourself, unchanged since round 0); tables 1 → 1; figures 7 → 7; all 7 HEAD
  `{#fig-…}` ids present (HEAD had no `{#sec-…}` ids). All 12 working-copy `{#sec-…}` ids are kept, including
  `#sec-cis-trans`, now absent from the map; all 6 chapter-map links resolve.
- Copy audit (`--you`, all six files): 1 flag (the `hemoglobin-2hhb.pdb` asset path, as before); one "you"
  (the island instruction "Your choices branch the case"); em dashes 0; bold 9.7 per 1,000 words.
- YAML: all five data files load with js-yaml. `validate-cases.mjs`: exit 0; common-questions.case.yml OK.
- MCQ option lengths in characters (* = correct): q-carb 42 / *58 / 49; q-eggs 54 / *70 / 70; q-fat 53 / 27 /
  *46; q-protein 39 / *67 / 53; quiz q2 48 / *42 / 24.
