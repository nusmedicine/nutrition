# Retrofit log: Preface (book/index.qmd)

Light page: prose, voice and formatting only. File edited: book/index.qmd (no YAML, no case).

## Summary of changes

- Bold: all 27 bold spans removed (none was a defining use). `**` count now 0.
- Em dashes: all 13 removed (commas, parentheses, colon, new sentences).
- Arrows: the `> **read → explore → self-test → rehearse**` blockquote replaced by a four-step `::: {.flow}`
  (Read the text / Explore the diagrams / Self-test with the quizzes / Rehearse with the cases); lead-in sentence kept.
- "Not just" antithesis cut from paragraph 2 ("keeping people well now has a national plan").
- The book never acts: "This book teaches…", "Each chapter pairs…", "Part I lays…; later parts apply it",
  "It will build… It will not turn you…", "[How this book was made] describes" all rewritten (topic or passive subject).
- Rhetorical scaffolding / metacommentary deleted: "Because the numbers demand it.", "Here is the paradox this book
  exists to fix.", "bluntly", "Singapore is taking the opposite bet" (now "In Singapore, by contrast, …"),
  "That work starts here.", "not the garnish", "Notice the candour about the evidence".
- Voice (decision 7): "you" kept only on the cases/progress sentences and the scope paragraph (5 occurrences);
  "we/us/our" in the NNS sentence → third person ("people live", "residents", "fat intake"); "your kopi",
  "your nutrition and metabolism teaching", "tools you already live with" → third person; "You are learning this at
  exactly the moment the field is being built around you." deleted.
- "among the single largest" → "among the largest"; serial commas dropped in book prose (quotations and the AI-use
  disclosure sentence untouched).
- "How to read it" list: full-sentence lead-in added; three items made parallel imperatives; part names given by
  their `_quarto.yml` titles (decision 7).
- Heading "What it will, and won't, do" → "What is covered, and what comes later" (book as actor, contraction).
  No inbound links to the old auto-anchor were found (grep of book/ for index.qmd#/index.html#).

Gate: citation multiset identical (crowley2019, gbd2019diet, mohHealthierSG, mohNNS2022, mohWarOnDiabetes,
who2020diet, once each, each on its original claim); islands 0→0; callouts 1→1; tables 0→0; figures 0→0; no
{#sec-}/{#fig-} ids in HEAD; colophon link intact; one new `.flow`. Copy audit: 18 flags → 0; em dashes 13 → 0;
bold 38.1 → 0 per 1,000 words; "you" 12 → 5 (all reader-instruction/scope).

## Content fixes (before → after, category)

1. "branching clinical cases in which you practise advising real patients" → "In the cases you practise advising
   realistic patients" — internal consistency: the book's own case patients are fictional personas.
2. "Part I lays a firm metabolic and physiological foundation; later parts apply it to advising well people, then to
   common conditions, then to integrated practice." → "The metabolic and physiological foundation laid in
   *Foundations of Nutrition Science* is then applied in *Nutrition across Life Stages*, *Assessing and Advising
   Patients*, *Nutrition in Disease* and *Integrative Cases*." — label misnaming the content: the old description
   omitted the life-stage part and referred to parts by number (decision 7: name the five parts by title).

## Deferred content concerns

- Para "Diet is one of the most powerful levers…": "NUS Medicine is expanding graduate training in nutrition and
  preventive health from 2026" has no citation, and 2026 is now the current year; needs a source or a cut.
- Para 2: "launched on 5 July 2023" is cited only to the 2022 White Paper (`mohHealthierSG`), which predates the launch.
- "Why a whole book on nutrition": "three-quarters of all deaths worldwide" is cited to the WHO healthy-diet fact sheet
  (`who2020diet`); the figure is from the WHO NCD fact sheet (same pairing in *Why Nutrition Matters*).
- "A 2019 review across five world regions": confirm the region count against Crowley et al. 2019.
- "All progress is saved locally in your browser": true of progress, but the AI-patient (sim) cases in the capstone
  chapters send typed messages to the NUS-hosted endpoint; a reader may infer nothing leaves the browser.
- "where most of today's gains in length and quality of life are won" and "Diet is one of the most powerful levers a
  doctor has": uncited rhetorical claims (acceptable in a preface; noted only).

## Deferred backlog

- Render check (not run, per working rules): confirm the preface `.flow` draws four boxes with CSS arrows and the
  four headings read: Why a whole book on nutrition · What this book is · How to read it · What is covered, and what
  comes later.
- AI-use disclosure callout: first sentence keeps its serial comma ("drafting, research, and generating"); left as
  written per plan.

## Glossary rows owned

None (the preface defines no terms; Healthier SG, My Healthy Plate, Nutri-Grade, War on Diabetes, non-communicable
disease are owned by *Why Nutrition Matters*; composite endpoint by *Evidence vs Hype*; medical nutrition therapy by
*Interprofessional Practice & Referral*; all used unbolded here).

## Owner terms not present

None: term-ownership.md assigns no term to the slug "index".

## Fix round 1

File edited: book/index.qmd only (no YAML, no case, so validate-cases not run).

Changes (verifier issue → what was done):

1. [major] Singapore-first sentence overstated scope ("each topic … only then generalised"). Restored the book-level
   scope from HEAD ("anchored in the tools … before generalising") and dropped the per-topic universal and the strict
   order. The same sentence was also flagged as too long (42 words) with "Singapore" twice, so it is split.
   The minor's suggested split ("Each topic starts from… Only then is it generalised…") was NOT used, because it
   re-introduces exactly the per-topic universal and strict order that the major fix removes.
   Before: "It is Singapore-first: each topic is anchored in tools that are already part of daily life in Singapore
   (My Healthy Plate's "quarter, quarter, half", Nutri-Grade on *kopi* and bubble tea, the War on Diabetes) and only
   then generalised to the international evidence."
   After: "It is Singapore-first: it is anchored in tools that are already part of daily life here, and generalised
   from them to the international evidence. Those tools include My Healthy Plate's "quarter, quarter, half",
   Nutri-Grade on *kopi* and bubble tea, and the War on Diabetes."
   Category: content fix (internal consistency: the §11c skeleton puts *The Singapore picture* after the science
   movements, and §11d limits local framing to the practical/socio-cultural side; reverts an overstatement added in
   the first pass).
2. [minor ×2] Cases sentence: the list after the colon was not parallel with "patients". Two conflicting fixes were
   proposed; the parallel-gerund version was used (it also resolves the em-dash→colon reading). "realistic" is kept,
   so content fix 1 (the case patients are fictional personas) still holds.
   Before: "In the cases you practise advising realistic patients: a *cai png* lunch, a high screening glucose, a tired
   young woman with heavy periods."
   After: "In the cases you practise advising patients in realistic situations: choosing a *cai png* lunch, facing a
   high screening glucose, or feeling tired with heavy periods."
3. [minor] Landmark-trial bullet: positional promise "beside it" removed; [minor] "composite endpoint" given a plain
   unbolded gloss (owner: *Evidence vs Hype*; gloss wording matches its glossary meaning).
   Before: "Read every landmark trial with its caveats, which appear beside it throughout: a relative risk on a
   composite endpoint is not the same as "prevents heart attacks"."
   After: "Read every landmark trial together with the caveats that accompany it throughout the book: a relative risk
   on a composite endpoint (several outcomes counted together) is not the same as "prevents heart attacks"."
4. [minor ×2] Scope sentence: "its" had no clear antecedent; "the training of a dietitian" was awkward.
   Before: "Prescribing protocols and the training of a dietitian are outside its scope:"
   After: "Prescribing protocols and dietitian training are outside this year's scope:"
5. [minor] Paragraph 2 closing sentence (four commas, two nested asides) simplified (§11j cohesion).
   Before: "The part of that plan at the centre of all the rest, and the subject of this book, is what, and how, people eat."
   After: "What, and how, people eat sits at the centre of that plan and is the subject of this book."
6. [minor] NCD parenthesis aligned with the book's own NCD definition (*Why Nutrition Matters*, line 37, and its
   glossary row) and §11g correct-term rule.
   Before: "(heart disease, diabetes, cancers, chronic lung disease)"
   After: "(cardiovascular disease, diabetes, cancers, chronic respiratory disease)"
   Category: content fix (terminology / internal consistency with the owner chapter's cited list; same citation,
   who2020diet, on the same claim).
7. [minor] Explicit connective between the diabetes-risk sentence and the NNS findings; agentless "staples eaten"
   made specific; second "residents" dropped to avoid repetition.
   Before: "… lifetime risk of diabetes [@mohWarOnDiabetes]. The National Nutrition Survey 2022 found that only about 4%
   of the staples eaten are wholegrain, that nine in ten residents exceed the sodium target, …"
   After: "… lifetime risk of diabetes [@mohWarOnDiabetes]. Diet quality is part of that picture: the National
   Nutrition Survey 2022 found that only about 4% of the staples residents eat are wholegrain, that nine in ten
   exceed the sodium target, …" ([@mohNNS2022] kept at the end of the sentence.)
8. [minor] Paragraph opener pronoun: "It is built for an integrated study loop:" → "The book is built for an
   integrated study loop:" (passive state, not the book acting).
9. [minor] Parts sentence: "is then applied in *Nutrition across Life Stages*, …" → "is applied in the four parts that
   follow: *Nutrition across Life Stages*, *Assessing and Advising Patients*, *Nutrition in Disease* and *Integrative
   Cases*." Part titles re-checked against _quarto.yml (exact match).

Gate after round 1: citation multiset identical (crowley2019, gbd2019diet, mohHealthierSG, mohNNS2022,
mohWarOnDiabetes, who2020diet, once each, each on its original claim); islands 0→0; callouts 1→1; tables 0→0;
figures 0→0; no {#sec-}/{#fig-} ids in HEAD. Copy audit (--you): 0 flags; em dashes 0; bold 0; "you" 5 (cases
sentence, browser-progress sentence, scope paragraph ×3), all reader-instruction/scope per decision 7.
