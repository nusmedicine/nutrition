# Retrofit log: Digestion & Absorption

Files changed: `book/chapters/digestion-absorption.qmd`, `book/diagrams/gut-journey.yml`,
`book/structures/bile.mol.yml`, `book/quizzes/digestion-absorption.quiz.yml`,
`book/cases/ort-drip-free-rescue.case.yml`.

## Summary of changes

- **Front matter.** New in-world opener (ORS and the gut wall); Learning objectives (6); chapter map
  (`.concept-tree`, 3 branches = the 3 movements, 11 linked sub-topics).
- **Headings and ids.** All `##`/`###` given `{#sec-…}` ids (19 total); topical headings replace
  "The journey in practice", "Myths worth busting", "Four ways in, and one star", "The control panel",
  "The payoff: a spoonful of sugar…". `#fig-villi`, `#fig-fat` and mermaid `fig-enterohepatic`
  unchanged. Movement intros deleted (§11g). Nesting: 3 movements with 4, 4 and 3 `###` children.
- **Pass 2 (pre-teach) / form by relation.** Definition lists for digestion/absorption, the three
  motility terms, the three lactose conditions, and the four fat-absorption terms. The inline-header
  enzyme list was folded into the existing enzyme table (header "Enzyme or secretion"; lingual lipase
  added from the list) plus two prose paragraphs, so nothing was lost. Four transport routes as a
  bulleted list with the SGLT1 mechanism in prose; Singapore picture as a 3-item list; close rewritten
  as a 5-step walk through one *cai png* plate (every step stated earlier). One `.flow` (4 steps) beside
  the ORS causal chain, which stays in prose.
- **Pass 3 (cohesion).** Long sentences split (gastric emptying, Shukla result, Hall trial, fibre,
  ORS); "you" removed from exposition (11 → 0); arrows in prose removed; "this chapter/section"
  meta, "worth knowing/recognising", "One idea to plant now", "A neat piece of…", "A tidy reminder…",
  "the star of the show", "coat-tails" deleted; negative parallelism ("not only… but") removed.
- **Signals.** Bold 42.6 → 5.7 per 1,000 words: bold now only at defining uses, plus the four parallel
  five-beat-style run-ins in "Same food, different speed". Hormone and enzyme tables unbolded.
  Figure `#fig-villi` moved up beside the paragraph that interprets it; the long-chain aside moved to
  directly after `#fig-fat` as a plain paragraph.
- **Common beliefs.** Two callouts retitled as neutral questions ("Is the gut's surface the size of a
  tennis court?", "Does plain water rehydrate as well as ORS?"); "Myths worth busting" →
  "Common beliefs about digestion"; quoted beliefs unbolded; "crucially", "myth", "busting" removed.
- **Check yourself.** Six collapsed questions, two at the end of each movement.
- **Terminology.** One term per concept: "lactase deficiency" (replaces "Lactose non-persistence"),
  "migrating motor complex" (replaces "housekeeper sweep" in table and quiz), "gastric emptying",
  "intravenously" in exposition, "viscous fibre" (replaces "soluble fibres" in the LDL paragraph).
  Abbreviations spelled out: CCK, GIP, GLP-1, SGLT1, GLUT5, NSAIDs. Cross-references by canonical
  name, parenthetical, linked once per section ("the *Gut Microbiome* chapter", no "The").
- **Term ownership.** This chapter owns and bold-defines SGLT1, brush border, enterocyte, portal vein,
  etc.; bile salts, micelles, chylomicron, lipase, pepsin defined in definition list/table (unbolded
  there, per §11g). **Coeliac disease** (reassigned owner = this chapter) now bold-defined with a
  standard one-line gloss. "Recognise and refer" (owned by *Reading the Life Stages*) unbolded.
  Ultra-processed foods (owned by *Appetite & Weight Regulation*) left unbolded and unglossed (the
  sentence explains processing). *(Corrected in fix round 2: the site-keyed enzyme table is not a
  definition table, so pepsin and lipase had no defining use; they, and amylase, disaccharidases and
  peptidases, are now bold-defined in prose. Ultra-processed foods now carries a plain, unbolded gloss.)*
- **Island YAML.** gut-journey: title drops "journey", `intro` deleted (repeated the chapter
  paragraph; component already prints the click hint), 10 em dashes removed, "you" removed, footnote
  retargeted (see fixes). bile.mol: `intro` cut to the instruction plus the –OH cue (it restated the
  chapter paragraph), em dashes removed, "ring back" → "steroid back". Chapter sentence beside the
  molecule changed so the rotate instruction is not given twice.
- **Quiz.** All 36 feedback strings open with the explanation (no Correct/Reversed/No/A common
  misconception); 0 em dashes; no bold in stems/options; options trimmed to parallel length (q2, q3,
  q7, q8, q11); no adjacent feedback with the same opening word (file order checked).
- **Case.** Feedback openers fixed (Correct/Not so/Exactly/No/Right removed), 16 em dashes removed,
  stems unbolded, remedial "Not quite. The key idea:" removed; the two clinical cues in the intro keep
  their bold. Altitude unchanged (referral is a safety-net inside the advice).

Verification: preservation gate passed (citation multiset identical, 29 keys / 32 citations; islands
4 → 4; callouts 8 → 15 = +1 Learning objectives +6 Check yourself; tables 3 → 3; figures 2 → 2; all
HEAD `#fig-` ids present; every chapter-map link resolves; new `#sec-` ids unique across chapters).
copy-audit `--you` on the 5 files: 0 flags, 0 "you", 0 em dashes, "rather than" 2 in the qmd.
YAML valid (js-yaml) for all 4 files; `validate-cases.mjs`: OK. Not rendered (forbidden in this pass).
Note: the mermaid figure is not referenced as `@fig-enterohepatic` in prose, because the gate's
`@[A-Za-z0-9_]+` count would read it as a citation key; the figure sits directly beside the paragraph.

## Content fixes (decision 1)

| File | Location | Before | After | Category |
|---|---|---|---|---|
| digestion-absorption.qmd | Transit callout | "(How fibre speeds transit belongs to the Gut Microbiome chapter.)" | "(Fibre's effect on bowel regularity is in the [*Macronutrients*](macronutrients.qmd) chapter.)" | Cross-reference retargeted: *Gut Microbiome* does not cover fibre and transit; *Macronutrients* states fibre "adds bulk and aids regularity" |
| digestion-absorption.qmd | Singapore picture, item 1 | "Lactose non-persistence is the local norm" | "Lactase deficiency is the local norm" | Label misnames the content (it is lactase that does not persist) and contradicts the chapter's own defined term |
| gut-journey.yml | footnote | "Absorption sites for specific nutrients (iron, B12, calcium) are detailed in the Micronutrients chapter; …" | "The nutrients themselves (iron, B12, calcium) are covered in the Micronutrients, Hydration & Electrolytes chapter, …" | Island contradicted its chapter (the chapter maps absorption sites itself and sends the nutrients to *Micronutrients*); cross-reference |
| gut-journey.yml | stomach.note | "much further along, in the ileum" | "much further along, at the terminal ileum" | Consistency with chapter text and the island's own small-intestine panel |
| gut-journey.yml | liver.secretes | "(What the liver does with absorbed nutrients is the Integrative Metabolism chapter.)" | removed (pointer kept once, in the footnote) | Duplicate cross-reference |
| digestion-absorption.qmd | Hormone table, Motilin row | "drives the housekeeper sweep" | "drives the migrating motor complex" | Terminology consistency (one term per concept) |
| digestion-absorption.quiz.yml | q5 option c feedback | "'housekeeper' sweep" | "migrating motor complex" | Terminology consistency with chapter |
| ort-drip-free-rescue.case.yml | q-why-oral a feedback; end-good keyPoints[0] | "secretory diarrhoea dumps fluid"; "Secretory diarrhoea loses fluid" | "In secretory diarrhoea, where the gut pours out fluid"; "In secretory diarrhoea the gut pours out fluid" | Gloss (decision 2): term kept, glossed in plain words. *(Fix round 1: the first-pass change to plain "diarrhoea" widened the claim and was outside decision 1; reverted to the term with a gloss.)* |
| digestion-absorption.qmd | Incretin paragraph | "whose full story comes in later chapters" | "(see the [*Appetite & Weight Regulation*](appetite-weight-regulation.qmd#sec-obesity) and [*Type 2 Diabetes*](type-2-diabetes.qmd) chapters)" | Cross-reference by name to the chapters that cover GLP-1 medicines |
| digestion-absorption.qmd | Trial callout | "Its weight consequences are taken up in later chapters" | "(its weight consequences are in the *Appetite & Weight Regulation* and *Obesity & Metabolic Syndrome* chapters)" | Cross-reference by name (both cover the Hall trial / UPF and weight) |
| digestion-absorption.qmd | Beliefs list, item 1 | "Not without coeliac disease or wheat allergy" | "It is healthier only for people with **coeliac disease** (an immune reaction to gluten that damages the lining of the small intestine) or wheat allergy" | Owner definition (term-ownership: coeliac disease → this chapter); standard gloss (decision 2) |
| digestion-absorption.qmd | Order and company | "incremental area under the curve" | "+ (the post-meal rise above the fasting level, summed over time)" | Gloss (decision 2; wording tightened in fix round 1 so it cannot be read as peak height) |
| digestion-absorption.qmd | Fat-soluble vitamins paragraph | "the carotenoids" | "the carotenoids (plant pigments such as β-carotene)" | Gloss (decision 2) |
| digestion-absorption.qmd | Beliefs list, item 4 | "anti-inflammatory painkillers (NSAIDs)" | "non-steroidal anti-inflammatory painkillers (NSAIDs)" | Abbreviation expansion (decision 2) |

## Deferred content concerns (need source-checking; not changed)

1. `book/structures/bile.mol.yml` `name: "Cholic acid (a bile salt)"`: cholic acid is a bile *acid*;
   bile salts are its conjugated, ionised forms (the note itself says "the main bile acid"). Wording
   needs a source-checked decision.
2. `book/diagrams/gut-journey.yml` small-intestine.what "~3 m": uncited; published lengths vary widely
   by method (in vivo vs post mortem). Check against a source.
3. Chapter, Singapore picture item 1: "yet most tolerate the lactose in about a cup of milk [@yap1989]".
   The "cup of milk" tolerance figure is the NIH consensus claim (`@nihConsensus2010`, used in the
   lactose definition list); Yap 1989 reports prevalence and a symptom rate. Possible citation
   mismatch; key not moved (multiset rule).
4. Chapter, "Order and company": the 45% peak / ~40% iAUC reduction and the caveat "small, short-term
   studies in prediabetes or type 2 diabetes" both rest on `@shukla2019order` (a prediabetes study);
   check whether the T2D part of the caveat is supported by that citation. Same figure repeated in
   Check yourself 5.
5. Chapter, medicines callout: CYP3A4 "breaks many drugs down before they are absorbed": more
   precisely during absorption (first-pass metabolism in the gut wall, before the drug reaches the
   circulation). Check wording against `@bailey2013grapefruit`.
6. Chapter and gut-journey: 30 m² described as "about half a badminton court" (a doubles court is
   about 82 m²); check against `@helander2014`'s own comparison.
7. `@ourworldindataORT` is a secondary source for the 1978 *Lancet* editorial quotation; consider the
   primary citation. The quotation is also a historical aside (§11j objective test) kept only because
   its key must stay.
8. Case end-good body: "This simple physiology has saved millions of children's lives." is uncited and
   not stated in the chapter.
9. `@yap1989` is a local study cited for lactase-deficiency prevalence; author to confirm it meets the
   §11d local-citation rule (population nutrition status) rather than local basic physiology.
10. gut-journey uncited numbers: saliva 1–1.5 L/day, pancreatic juice ~1.5 L/day, gastric pH
    ~1.5–3.5 (low priority).
11. Ultra-processed foods are used before their owner chapter (*Appetite & Weight Regulation*) defines
    them; left unglossed. Add a plain gloss here once the owner's definition is fixed, if wanted.
    *(Resolved in fix round 2: plain gloss added, worded from the owner chapter's current definition.)*

## Deferred backlog

- No 🔬🍜🍳 house blocks in this chapter (decision 4: deferred). Candidates: 🔬 cooked-and-cooled rice
  and resistant starch; 🍜 meal order at the *cai png* stall; 🍳 dressing vegetables with a little oil.
- §11f teaching figure: an SGLT1/sodium-pump enterocyte schematic would show the cotransport the
  `.flow` only lists (new figure: deferred).
- Long callouts: "Food is not inert around medicines" (4 paragraphs) and "What a controlled trial
  showed" exceed the 2–4-sentence block guide; consider promoting the medicines content to a short
  sub-section (restructure: deferred).
- Example boxes (`.example`) not used; the apple-juice study and the *cai png* plate are candidates.
- Glossary rows below to be added to `book/glossary.qmd` (not edited in this pass).
- Render check still needed: definition lists, `.flow`, `.concept-tree`, TOC hierarchy, links to
  `appetite-weight-regulation.qmd#sec-gut-peptides`, `#sec-obesity`, `gut-microbiome.qmd#sec-scfa`.

## Glossary rows owned by this chapter

| Term | Meaning | Introduced in |
|---|---|---|
| Absorption | Moving the products of digestion across the gut wall into the blood or lymph | Digestion & Absorption |
| Accessory organs | The salivary glands, liver, gallbladder and pancreas, which pour their juices into the gut along the way | Digestion & Absorption |
| Amylase | The enzyme that digests starch into smaller sugars, made by the salivary glands and the pancreas | Digestion & Absorption |
| Bile salts | Detergents made by the liver from cholesterol that emulsify fat into tiny droplets that lipase can reach; about 95% are recycled | Digestion & Absorption |
| Bolus | The soft mass of chewed food and saliva that is swallowed | Digestion & Absorption |
| Brush border | The surface of the cells lining the small intestine, formed by microvilli, where the last digestive enzymes sit | Digestion & Absorption |
| Chelation | Binding of a drug by a mineral such as calcium or iron into a complex that cannot be absorbed | Digestion & Absorption |
| Chief cells | Stomach cells that make pepsin | Digestion & Absorption |
| Cholecystokinin (CCK) | A duodenal hormone released by fat and protein that increases pancreatic enzymes, contracts the gallbladder and slows gastric emptying | Digestion & Absorption |
| Chylomicron | A particle of reassembled fat packaged with cholesterol and protein in the enterocyte, too big for a blood capillary, so it reaches the blood through the lymph | Digestion & Absorption |
| Coeliac disease | An immune reaction to gluten that damages the lining of the small intestine | Digestion & Absorption |
| CYP3A4 | The intestinal enzyme that normally breaks many drugs down before they are absorbed; grapefruit inhibits it | Digestion & Absorption |
| Digestion | Breaking food into pieces small enough to absorb | Digestion & Absorption |
| Disaccharidases | Brush-border enzymes (lactase, sucrase, maltase) that split disaccharides into single sugars | Digestion & Absorption |
| Duodenum | The first segment of the small intestine, which receives the pancreatic juice and the bile | Digestion & Absorption |
| Enterocyte | An absorptive cell of the small intestine, with the brush border facing the gut contents and the far side facing blood and lymph | Digestion & Absorption |
| Enterohepatic circulation | The recycling of bile salts, about 95% of which are reabsorbed at the terminal ileum and returned to the liver | Digestion & Absorption |
| Gastric emptying | The regulated passage of food from the stomach into the duodenum, slower after a fatty or large meal | Digestion & Absorption |
| Gastrin | A stomach hormone, released when protein arrives, that increases stomach acid | Digestion & Absorption |
| Glucose-dependent insulinotropic polypeptide (GIP) | A duodenal hormone, released by glucose and fat, that signals the pancreas that glucose is coming; an incretin | Digestion & Absorption |
| Incretin effect | The larger insulin response to glucose eaten than to the same glucose given intravenously, carried by the gut hormones GIP and GLP-1 | Digestion & Absorption |
| Intrinsic factor | A secretion of the stomach's parietal cells needed to absorb vitamin B12 at the terminal ileum | Digestion & Absorption |
| Lactase deficiency | Making little lactase after childhood; the norm in most of the world's adults, and not a disease | Digestion & Absorption |
| Lacteal | A lymph vessel that takes up chylomicrons from the gut | Digestion & Absorption |
| Lactose intolerance | Symptoms (bloating, wind) from a given amount of lactose; most people tolerate the lactose in about a cup of milk | Digestion & Absorption |
| Lipase | The pancreatic enzyme, working with colipase, that digests fat | Digestion & Absorption |
| Microvilli | The fuzz of tiny projections on each lining cell of the small intestine; together they form the brush border | Digestion & Absorption |
| Migrating motor complex | A cyclical wave between meals, triggered by motilin, that sweeps leftovers and bacteria onward roughly every 1–2 hours | Digestion & Absorption |
| Milk allergy | An immune reaction to milk protein, unrelated to lactase | Digestion & Absorption |
| Mixed micelles | Clusters of bile salts and the products of fat digestion that ferry those products to the brush border | Digestion & Absorption |
| Motilin | A small-intestinal hormone, released during fasting, that drives the migrating motor complex | Digestion & Absorption |
| Oral rehydration salts (ORS) | A low-strength mix of glucose and sodium (75 mmol/L each in the WHO formula) that rehydrates by mouth because SGLT1 keeps working in diarrhoea | Digestion & Absorption |
| Parietal cells | Stomach cells that make hydrochloric acid and intrinsic factor | Digestion & Absorption |
| Pepsin | The stomach enzyme, made by chief cells, that cuts protein into peptides | Digestion & Absorption |
| Peptidases | Brush-border enzymes that finish the digestion of protein | Digestion & Absorption |
| Peristalsis | Travelling waves of muscle contraction that push the bolus forward | Digestion & Absorption |
| Portal vein | The vein that carries absorbed sugars and amino acids from the gut to the liver | Digestion & Absorption |
| Secondary active transport | Transport that spends a gradient built by a pump, as SGLT1 spends the sodium gradient to carry glucose into the enterocyte | Digestion & Absorption |
| Secretin | A duodenal hormone, released when acid arrives, that increases pancreatic bicarbonate and reduces stomach acid | Digestion & Absorption |
| Segmentation | Back-and-forth squeezing that mixes the gut contents with digestive juices, mainly in the small intestine | Digestion & Absorption |
| SGLT1 (sodium–glucose cotransporter 1) | The transporter on the enterocyte that carries glucose into the cell alongside sodium | Digestion & Absorption |
| Sphincter | A muscular one-way gate in the gut (lower oesophageal, pyloric, ileocaecal, anal) that stops contents moving backwards | Digestion & Absorption |
| Terminal ileum | The last stretch of the small intestine, where bile salts are reclaimed and vitamin B12 is absorbed | Digestion & Absorption |
| Villi | Finger-like projections of the small-intestinal lining that enlarge its absorptive surface | Digestion & Absorption |

## Owner terms (term-ownership.md) that do not occur in this chapter

None. Every term assigned to `digestion-absorption`, including the reassigned SGLT1, brush border,
bile salts, micelles, chylomicrons, lipase, pepsin and coeliac disease, occurs and is defined here.

## Fix round 1

Verifier fixes applied (blockers, the major, and the minors), before → after.

### Restorations of HEAD meaning (dropped or altered without logging in the first pass)

| File | Location | Before (first pass) | After (fix round 1) | Reason |
|---|---|---|---|---|
| digestion-absorption.qmd | Form and the food matrix | "…compared with the whole fruit [@haber1977apple]." | + "A whole orange versus a glass of its juice makes the same point." | HEAD example restored (dropped without logging) |
| digestion-absorption.qmd | Hall trial callout, last sentence | "Cooking, fermentation and freezing are also processing; what distinguishes minimally processed foods is that they keep the structure that slows digestion." | "Cooking, fermentation and freezing are also processing, so not all processing is harmful; minimally processed foods keep the structure that slows digestion." | HEAD caveat restored; categorical claim removed |
| ort-drip-free-rescue.case.yml | q-why-oral a feedback | "In diarrhoea the gut pours out fluid, but SGLT1 keeps working, …" | "In secretory diarrhoea, where the gut pours out fluid, SGLT1 keeps working, …" | First-pass change widened the claim; term restored with a gloss (decision 2). Content-fix table row updated |
| ort-drip-free-rescue.case.yml | end-good keyPoints[0] | "In diarrhoea the gut loses fluid, but SGLT1 keeps absorbing sodium when glucose is present." | "In secretory diarrhoea the gut pours out fluid, but SGLT1 keeps absorbing sodium when glucose is present." | As above |
| digestion-absorption.quiz.yml | q7 correct option + feedback | text "Low lactase, but most tolerate about a cup of milk"; feedback ended "Only about a third report symptoms on ordinary amounts." | text "Low lactase, which is neither intolerance nor allergy"; feedback ends "Most still tolerate about a cup of milk." | Keyed concept restored to HEAD's three-way distinction (first pass had swapped the option and feedback ideas) |
| digestion-absorption.qmd | Singapore picture, item 1 | "matter more here than" | "matter far more here than" | HEAD strength restored |
| digestion-absorption.qmd | Enzyme safety-lock callout | (altitude note deleted) | + "The concept matters here, not the named activation cascade." | HEAD altitude note restored as a plain sentence |
| gut-journey.yml | footnote | "The nutrients themselves (iron, B12, calcium) …" | "Recognition-level overview. The nutrients themselves (iron, B12, calcium) …" | HEAD altitude note restored |
| digestion-absorption.quiz.yml | q10 a feedback | "are the exception, entering blood directly." | "are the small exception, entering blood directly." | HEAD quantity cue restored (matches "Most dietary fat is long-chain") |
| digestion-absorption.quiz.yml | q11 option c | "Made by the pancreas; excreted in stool" | "Made by the pancreas; all lost in stool" | Distractor made wholly false again (about 5% of bile salts are lost in stool); feedback now rebuts the option as written |
| ort-drip-free-rescue.case.yml | q-advice c feedback | "…is outdated advice: …" | "…is outdated and harmful advice: …" | HEAD safety label restored |
| ort-drip-free-rescue.case.yml | q-both stem | "Why must the drink contain both glucose and salt?" | "Why must the drink contain both glucose and salt, not plain water alone?" | HEAD plain-water contrast restored. Worded "not plain water alone" (not HEAD's "not just water") because copy-audit flags "not just" as negative parallelism; same meaning, and matches the feedback's "plain water alone" |

### Accuracy and hedging

| File | Location | Before | After | Reason |
|---|---|---|---|---|
| digestion-absorption.qmd | Opener | "…by crossing that same wall, once digestion has broken it into pieces small enough to cross." | "…by crossing that same wall, most only after digestion has broken them into pieces small enough to cross." | Overgeneralisation (water, minerals and free sugars need no digestion) |
| digestion-absorption.qmd | LO 2 | "Explain how motility, pancreatic bicarbonate and the gut hormones time each stage of digestion." | "Explain how motility moves food along, how the gut hormones time each stage of digestion, and why pancreatic bicarbonate is needed." | Bicarbonate has a pH role, not a timing role |
| digestion-absorption.qmd | LO 5 | "…terminal ileum causes both…" | "…terminal ileum can cause both…" | Hedge restored to match the body and Check yourself |
| digestion-absorption.qmd | Beliefs lead-in | "…can be tested against the physiology above:" | "…can be tested against the evidence:" | Several rebuttals rest on cited evidence, not the chapter's physiology |
| digestion-absorption.qmd | Order and company | "incremental area under the curve (the total post-meal rise above the fasting level)" | "(the post-meal rise above the fasting level, summed over time)" | Gloss could be read as peak height |
| digestion-absorption.qmd | Order and company | "In people with prediabetes, a vegetable-and-protein-first order…" | "In people with prediabetes (blood glucose that has started to rise but is not yet in the diabetes range), a …" | Gloss (decision 2); term owned by *Type 2 Diabetes* (later in reading order), unbolded; wording from the owner's meaning |
| digestion-absorption.qmd | Close, step 5 | "…and what is left passes to the colon." | "…and the undigested remainder of the meal passes to the colon." | Ambiguous referent |
| digestion-absorption.qmd | Close, final sentence | "The clinical patterns follow from the same map: lactose intolerance, B12 deficiency and fat malabsorption when the terminal ileum is damaged, and a dehydrated child rehydrated by mouth." | "The same map explains the clinical patterns: lactose intolerance when more lactose arrives than the brush border's lactase can split; B12 deficiency and fat malabsorption when the terminal ileum is damaged; and rehydration by mouth because SGLT1 keeps working in diarrhoea." | The grouping implied that lactose intolerance comes from ileal damage; each pattern is now tied to its mechanism (all stated earlier in the chapter) |
| digestion-absorption.qmd | `#sec-food-form` heading + chapter-map line | "### Same food, different speed: form, cooking and meal order"; map "[Same food, different speed](#sec-food-form): form, cooking, meal order" | "### Same food, different effect: preparation, meal order and what is eaten with it"; map "[Same food, different effect](#sec-food-form): form, cooking, meal order, medicines" | Heading misnamed a third of the content (bile effects, food–drug callout); id unchanged (decision 1, label category) |

### Style and structure

| File | Location | Before | After | Reason |
|---|---|---|---|---|
| digestion-absorption.qmd | Before the viscous-fibre paragraph | "Two further effects follow from the way bile handles fat." (one-sentence paragraph) + "Viscous fibre acts twice." | sentence deleted; paragraph opens "Viscous fibre acts twice, once on speed and once on bile." | One-sentence signpost whose claim was half wrong. The other verifier item on the same sentence ("Two further effects follow from the physiology above") is superseded by this deletion |
| digestion-absorption.qmd | Motility, after the definition list | "*Peristalsis pushes; segmentation shuffles.*" | deleted | Stranded decorative fragment repeating the definitions; quiz q3 tests the distinction (style cut) |
| digestion-absorption.qmd | Enzyme table | (no lead-in) | + "Four sites do the chemical work, each with its own enzymes and targets:" | §11j pass 4: one sentence stating what the table shows |
| digestion-absorption.qmd | Transport list, item 3 | "a pump that spends energy directly;" | "primary active transport, by a pump that spends energy directly;" | Parallel with the other three routes; standard term (decision 2), unbolded |
| ort-drip-free-rescue.case.yml | q-advice a | "Give ORS in small, frequent sips, keep feeding her, and seek care if she worsens." (81 chars) | "Small, frequent sips of ORS, keep feeding, seek care if worse." (62) | MCQ length parity (§11g); the rationale is already in the feedback |
| ort-drip-free-rescue.case.yml | q-both a | "Glucose is the handle that sodium rides in on through SGLT1; water then follows." (80) | "Glucose carries sodium in through SGLT1, and water follows." (59) | MCQ length parity; "transport handle" stays in the feedback |
| gut-journey.yml | small-intestine.what | "The main event (~3 m: …)." | "The main site of digestion and absorption (~3 m: …)." | Register (chatty) |
| gut-journey.yml | pancreas.what | "The digestive workhorse: it pours about 1.5 litres a day …" | "The main source of digestive enzymes: it pours about 1.5 L a day …" | Register; SI units |
| gut-journey.yml | salivary-glands.what | "about 1–1.5 litres of saliva a day" | "about 1–1.5 L of saliva a day" | SI units, for consistency with the pancreas entry (not in the verifier list; same rule) |

### Logged style cuts (not restored)

- "Put SGLT1 to work and you get one of the great public-health stories of the last century." (HEAD,
  ORS paragraph) and "Digestion attracts more folklore than almost any topic in nutrition, a good place
  to practise evidence literacy" (HEAD, beliefs lead-in): evaluative framing cut in the first pass under
  §11g (no telling the reader that something is important; no metacommentary). The cited 1978 *Lancet*
  quotation keeps the significance point, and "tested against the evidence" keeps the evidence-literacy
  framing.
- "A tidy reminder that even 'textbook facts' get corrected." (HEAD, tennis-court callout): not restored,
  even in the optional short form "Even textbook figures get corrected." It is a moral tag on a
  common-belief callout, and §11g's common-beliefs rule avoids "corrected"; the callout already states
  the old figure and the measured one.

### Verification after fix round 1

Preservation gate (HEAD vs working copy): citation multiset identical (29 keys / 32 citations);
islands 4 → 4; callouts 8 → 15 (+1 Learning objectives, +6 Check yourself, unchanged from the first
pass); tables 3 → 3; figures 2 → 2; every HEAD `{#sec-}`/`{#fig-}`/mermaid `fig-` id present; every
in-page `(#sec-…)` link resolves. copy-audit `--you` on the 5 files: 0 flags, 0 "you", 0 em dashes.
YAML valid (js-yaml) for all 4 YAML files; `validate-cases.mjs`: OK (ort-drip-free-rescue OK).
Not rendered (forbidden in this pass).

## Fix round 2

Verifier fixes (round 2) applied: the major and all 15 minors, before → after. One extension beyond
the list (amylase, disaccharidases, peptidases) closes the same gap as the major issue and is marked.

### Term ownership: defining uses (major issue, plus the same gap for three more owned terms)

| File | Location | Before | After | Reason |
|---|---|---|---|---|
| digestion-absorption.qmd | Chemical digestion, stomach paragraph | "**Chief cells** make pepsin, which cuts protein into peptides" | "**Chief cells** make **pepsin**, the enzyme that cuts protein into peptides" | Owner defining use (term-ownership: pepsin → this chapter). The first-pass log's "pepsin defined in the table" was wrong: the enzyme table is keyed by site, so it is not a definition table |
| digestion-absorption.qmd | Chemical digestion, new paragraph after the pH paragraph | (none) | "The pancreatic enzymes then take over: amylase continues on starch, proteases cut protein, and **lipase**, working with colipase, digests fat." | Owner defining use (lipase). Verifier's sentence word for word, but it opens a new paragraph instead of being appended to the pH paragraph, so that no paragraph carries more than three bold terms once the brush-border sentence below is added (§11j pass 2). Every fact is in the enzyme table's duodenum row and HEAD's duodenum bullet |
| digestion-absorption.qmd | Same paragraph, second sentence | (none) | "At the brush border, **disaccharidases** (lactase, sucrase, maltase) split disaccharides into single sugars, and **peptidases** finish the digestion of protein." | *Extension, not in the verifier list.* Same gap as the major issue: this chapter claims glossary rows for both, but they appeared only in the site-keyed table and, unbolded, in passing. This restores HEAD's bold-defined brush-border bullet ("**disaccharidases** (lactase, sucrase, maltase) split sugars, and **peptidases** finish the proteins"), worded to match the term-ownership meanings. "Disaccharide" is taught earlier in reading order (*Macronutrients*) |
| digestion-absorption.qmd | pH paragraph, first sentence | "Salivary amylase stops working once it meets the stomach's acid." | "Salivary **amylase**, which starts the digestion of starch, stops working once it meets the stomach's acid." | *Extension, not in the verifier list.* Same gap (the amylase glossary row had no defining use); restores HEAD's "Salivary **amylase** starts on starch". The pancreatic half of the glossary meaning comes from "amylase continues on starch" in the next paragraph |

Bold terms per paragraph after the change: stomach paragraph 4 (parietal cells, intrinsic factor, chief
cells, pepsin; this is the verifier's prescribed fix, all four are owned glossary terms, and the
paragraph is not split because `@statpearlsStomach` at its end supports all of it), pH paragraph 1,
enzymes paragraph 3. Owned glossary rows with no defining use: none. Each is bold in prose, in a
definition list, or a row of the hormone table, which is keyed by term.

### Accuracy, hedging and labels

| File | Location | Before | After | Reason |
|---|---|---|---|---|
| digestion-absorption.qmd | Lactose Check yourself, title | "…lactase-deficient, yet most drink ordinary amounts of milk without symptoms. How can both be true?" | "…lactase-deficient, yet only about a third report symptoms on ordinary amounts of milk. How can both be true?" | The title claimed something about drinking behaviour that the chapter does not say; it now uses the chapter's own figure (the `@yap1989` paragraph) |
| digestion-absorption.qmd | Terminal-ileum Check yourself, last sentence | "One damaged site therefore causes both problems." | "One damaged site can therefore cause both problems." | Hedge restored to match the body ("can therefore cause both") and LO 5 |
| digestion-absorption.qmd | Hall trial callout | "For digestion, the trial shows that processing changes the rate of eating and digestion" | "For digestion, the trial illustrates how processing changes the rate of eating and digestion" | Restores HEAD's illustrative strength ("here it shows how"). The trial measured eating rate and intake, not digestion, so "shows that" overstated what `@hall2019upf` showed |
| gut-journey.yml | small-intestine.note | "…about half a badminton court; older textbooks claimed a tennis court." | "…about half a badminton court; textbooks long claimed a tennis court." | The first pass narrowed the scope without logging it (HEAD: "not the 'tennis court' many textbooks claim"). Now matches the chapter callout's "Textbooks long claimed" |
| digestion-absorption.qmd | Opener, second sentence | "Every nutrient in a meal enters the body by crossing that same wall, most only after digestion has broken them into pieces small enough to cross." | "The nutrients in a meal enter the body by crossing that same wall, most of them only after digestion has broken them into pieces small enough to cross." | Number agreement (singular "Every nutrient" against plural "most"/"them"); meaning unchanged |

### Glosses and cross-references

| File | Location | Before | After | Reason |
|---|---|---|---|---|
| digestion-absorption.qmd | "Processing pre-digests food" | "…before food is eaten, so ultra-processed foods are digested faster and more completely." | "…before food is eaten. Ultra-processed foods (industrial formulations made largely from refined ingredients and additives) are therefore digested faster and more completely." | Gloss (decision 2), unbolded: *Appetite & Weight Regulation*, later in reading order, owns the term. Wording taken from the owner's current working-copy definition ("industrial formulations made largely from refined ingredients and additives, with little intact whole food"); if the owner rewords it, change this gloss to match. Split into two sentences so the gloss does not push the sentence past ~25 words (§11j); "so" became "therefore", with the same logic. Resolves deferred concern 11 |
| digestion-absorption.qmd | Medicines callout, alcohol paragraph | "…thiamine deficiency [@subramanya2010alcohol]. The deficiency itself is described in the *Micronutrients, Hydration & Electrolytes* chapter." | "…thiamine deficiency [@subramanya2010alcohol] (see the *Micronutrients, Hydration & Electrolytes* chapter)." | §11g: the cross-reference goes in parentheses after the fact it supports. The "[@key] (see the …)" form is already used in three other chapters |
| gut-journey.yml | large-intestine.note | "Resident bacteria ferment leftover fibre and any undigested lactose, producing gas (see the Gut Microbiome chapter)." | "Resident bacteria ferment leftover fibre and any undigested lactose, producing gas." | Duplicate pointer: the footnote already names the Gut Microbiome chapter. Consistent with the earlier removal from liver.secretes |

Back-pointers added in the first pass but not logged there (no text change; all four checked against
the current *Macronutrients* chapter):

| File | Location | HEAD | Working copy | Category / support |
|---|---|---|---|---|
| digestion-absorption.qmd | Lactose section, first sentence | "The brush-border enzyme **lactase** splits **lactose** (milk sugar)." | "The brush-border enzyme lactase splits lactose (milk sugar; see the [*Macronutrients*](macronutrients.qmd) chapter)." | Cross-reference to the owner of the term (decision 3; term ownership: disaccharides incl. lactose → *Macronutrients*, which defines lactose as a disaccharide, l.89–90). The first pass also unbolded both words: lactose is taught in *Macronutrients*, and lactase is explained in the same sentence and is listed among the disaccharidases, which are now bold-defined |
| digestion-absorption.qmd | Fat absorption paragraph | "Inside the cell the fat is **re-esterified** and packaged…" | "Inside the cell the fat is re-esterified (reassembled into triglyceride; see the [*Macronutrients*](macronutrients.qmd) chapter) and packaged…" | Gloss (decision 2) plus a cross-reference to the owner of triglyceride (*Macronutrients* l.301: three fatty acids esterified onto glycerol) |
| digestion-absorption.qmd | "Form and the food matrix" | "…that enzymes cannot reach until the structure is broken." | "…that enzymes cannot reach until the structure is broken (the food matrix; see the *Macronutrients* chapter)." | Cross-reference to the owner of "food matrix" (decision 3; *Macronutrients* l.239–240 bold-defines it) |
| digestion-absorption.qmd | Bile-salt shape paragraph | "(it is *amphipathic*)" | "(it is amphipathic, like the membrane phospholipids in the *Macronutrients* chapter)" | Anchor analogy plus a cross-reference (decision 2 gloss; *Macronutrients* l.303–304 describes phospholipids as amphipathic, with a water-loving head and water-hating tails). No new claim about bile |

### Style and structure

| File | Location | Before | After | Reason |
|---|---|---|---|---|
| digestion-absorption.qmd | Close, final paragraph | "The same map explains the clinical patterns: lactose intolerance when more lactose arrives than the brush border's lactase can split; B12 deficiency and fat malabsorption when the terminal ileum is damaged; and rehydration by mouth because SGLT1 keeps working in diarrhoea." | deleted; the close ends on step 5 of the numbered list | Section summary (§11c chapter ending; §11g "Section summaries: delete"). Each pattern is taught earlier: the lactose section (Check yourself 2), the terminal-ileum paragraph (Check yourself 4) and the ORS section (quiz q12 and the case). The five-step walk already answers "What happens to a meal?". This is a logged style cut of HEAD content: HEAD's close ended "the clinical patterns fall out of it: lactose intolerance, B12 loss when the terminal ileum is damaged, and a dehydrated child rescued by mouth". The deletion also settles the separate verifier item on this paragraph's lactose clause (it described malabsorption, not intolerance), so no replacement wording was needed |
| digestion-absorption.qmd | "Order and company" | "…reduced the glucose peak by roughly 45% and the incremental area under the curve (the post-meal rise above the fasting level, summed over time) by nearly 40% relative to carbohydrate first." (about 53 words, two nested glosses) | "…reduced the glucose peak by roughly 45% relative to carbohydrate first. The same order also reduced the incremental area under the curve, the post-meal rise above the fasting level summed over time, by nearly 40%." | §11j sentence threshold. Verifier's split, except "The same order also reduced" in place of "It also reduced" (§11j pass 3: repeat the key noun instead of "it"). Numbers, gloss and citation unchanged |
| digestion-absorption.qmd | ORS paragraph | "…but SGLT1 keeps working. A drink containing both glucose and sodium therefore still gets fluid in. SGLT1 pulls the sodium in, with the glucose as its handle, and water follows the sodium by osmosis." | "…but SGLT1 keeps working. SGLT1 pulls the sodium in, with the glucose as its handle, and water follows the sodium by osmosis, so a drink containing both glucose and sodium still gets fluid in." | §11j cohesion: the conclusion came before the mechanism it rests on, so "therefore" pointed at nothing |
| bile.mol.yml | cholic-acid.note | "…while the steroid back is fat-loving, so it coats fat droplets, breaks them up and forms the mixed micelles that ferry fat to the gut wall." | "…while the steroid back is fat-loving." | Decision 9: the cut half repeated the chapter prose just above the island ("sit at the oil–water boundary and break fat apart"; "mixed micelles that carry them to the brush border") |
| ort-drip-free-rescue.case.yml | q-advice option a | "Small, frequent sips of ORS, keep feeding, seek care if worse." (62 chars) | "Give ORS in small, frequent sips, keep feeding, and seek care if worse." (71) | §11g MCQ parity: the trimmed correct option had become a fragment that stood out from the two imperative distractors (b, 67 chars) |

Not changed: the lactose Check yourself answer still says "only about a third report symptoms on
ordinary amounts", which now echoes the new title. It was left as it is to keep the answer's reasoning
complete; trimming it would be a style choice only.

### Verification after fix round 2

Preservation gate (HEAD vs working copy): citation multiset identical (29 keys / 32 citations; no key
moved); islands 4 → 4; callouts 8 → 15 (unchanged from fix round 1: +1 Learning objectives, +6 Check
yourself); tables 3 → 3; figures 2 → 2; HEAD ids `#fig-villi`, `#fig-fat` and mermaid
`fig-enterohepatic` present (HEAD had no `#sec-` ids); every in-page `(#sec-…)` link resolves.
copy-audit `--you` on the 5 files: 0 flags; 0 em dashes; 0 curly quotes; the only "you"/"your" in the
qmd is the standard "Check your understanding" heading. Bold density 6.5 per 1,000 words (5.7 after
round 1; +5 defining uses). YAML valid (js-yaml) for all 4 YAML files; `validate-cases.mjs`: OK
(ort-drip-free-rescue OK, exit 0). Quiz file not changed in this round. Not rendered (forbidden in this
pass).
