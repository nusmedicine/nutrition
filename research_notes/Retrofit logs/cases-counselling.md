# Retrofit log: cases-counselling (Everyday & Preventive Counselling), light page

Files changed:

- book/chapters/cases-counselling.qmd
- book/cases/sim-prediabetes-mdm-tan.case.yml
- book/cases/sim-common-questions-mr-lim.case.yml
- book/cases/sim-pillar-mr-tan.case.yml
- book/cases/sim-dementia-prevention-mdm-goh.case.yml

## Gate (qmd, HEAD vs working copy)

| Check | Before | After |
|---|---|---|
| Citations (@keys) | none | none (identical) |
| data-island | 4 | 4 (same four data-src, same order) |
| Callouts | 1 | 1 |
| Tables | 0 | 0 |
| Figures | 0 | 0 |
| {#sec-/#fig-} ids | #sec-cases | #sec-cases kept |

Copy audit: 48 flags before, 0 after (all five files). "you" in the qmd: 8 before, 5 after, all clinician or
island-instruction uses (opener "say it in your own words"; "here you talk with the patient in your own words,
then get feedback on your counselling"; Mr Tan blurb "see if you can agree"). The YAML summary still shows
"dash-heavy" and, for Mr Lim and Mdm Goh, "rather-than": every remaining em dash is inside a `brief:` block
(never touched), and the remaining "rather than" are in `brief:` or in the rubric fields (`objectives`,
patient-chat `objective`) where decision 8 allows only em-dash and "myth" swaps. Verified by script: 0 em
dashes, 0 "myth", 0 bold outside `brief:`/`voice` in all four cases. YAML parses for all four files; every
objective, keyPoint, title, objective/exitWhen/opener and presentation is still a string; validate-cases exit 0.

## Summary of changes

Chapter (qmd):

- Opener: removed the student-addressed "You have spent a year learning" (also pointed at course length);
  kept the clinician instruction "say it in your own words".
- Intro paragraph 1: **simulated patient** now bold-defined once with a one-line gloss (this page owns the
  term); emphasis bold on "talk with the patient in your own words" dropped; "you drilled" converted; the
  ambiguous "They" replaced by "Each encounter".
- Intro paragraph 2: "a myth gently corrected" -> "a common belief gently addressed" (§11g Common beliefs);
  emphasis bold on **one** dropped; "This first set" (narrated the two-chapter split) -> "All four"; stacked
  "who" clauses merged.
- Callout: sentence 3 "If the simulated patient is not enabled in your build, the encounter simply notes this
  and continues." -> "If the simulated patient is unavailable, the encounter notes this and continues."
  (developer language and filler; matches the colophon). Warning bold kept.
- Headings (decision 8, topical subtitles): em dash -> colon, persona name + lower-case topical noun-phrase
  subtitle, no quoted patient words:
  - `## Mdm Tan: newly detected prediabetes` (also house spelling "prediabetes")
  - `## Mr Lim: everyday nutrition questions`
  - `## Mr Tan: a sceptical patient at a health screen`
  - `## Mdm Goh: fear of dementia` (plan had "frightened of dementia"; changed to a noun phrase so the four
    subtitles are parallel)
- Blurbs: "sugar" -> "glucose" in prose (§11g terminology); emphasis bold dropped; "primary-school" /
  "secondary-school" added from the persona YAML to tell the two teachers apart; "sceptical anything" ->
  "sceptical that anything"; Mdm Goh's blood pressure now "slightly raised" (was "borderline"; the case cycled
  borderline / slightly high / raised).
- H1 unchanged (sentence case, like every other H1); the canonical name is used for the glossary column.

Sim cases (`brief:`, `persona.voice`, YAML comments, ids, scenarioId, turnLimit, goto, variables untouched):

- Titles (evaluator SCENARIO): em dash -> colon; "pre-diabetes" -> "prediabetes"; unquoted titles quoted
  because the new value contains ": ".
- `objectives[]` and patient-chat `objective` (rubric; decision 8): only em-dash and "myth" swaps.
  - Mr Lim objectives[2]: "portion — correcting myths rather than" -> "portion, correcting misconceptions
    rather than" (corrected in fix round 1: the first pass had also changed the verb to "addressing", which
    is not an em-dash/myth swap).
  - Mr Lim objective: "bans — gently correcting his myths (…) — and, given" -> "bans, gently correcting his
    misconceptions (…). Given" (corrected in fix round 1: the first pass had also changed "correcting his" to
    "addressing each", which changed the scored criterion).
  - Mr Tan objectives[2]: "diet — sleep" -> "diet: sleep" (quoted so it stays a string).
  - Mr Tan objective: "Mr Tan — a resistant, … patient — WITHOUT" -> "Mr Tan (a resistant, … patient)
    WITHOUT" (caps kept, see deferred).
  - Mdm Goh objectives[1]: "lever — what is good … brain — using" -> "lever (what is good … brain), using".
  - Mdm Goh objective: "sugar — what is good" -> "sugar: what is good"; "worry — or a request for gene
    testing — is" -> "worry, or a request for gene testing, is".
- `exitWhen` (three cases) and openers (Mr Tan, Mdm Goh): em dash -> comma / full stop only.
- `persona.presentation`: Mdm Tan "(pre-diabetes)" -> "(prediabetes)" spelling only; Mr Lim's "fasting sugar"
  kept (patient's plain words, fed to the AI patient).
- Intro / end bodies and keyPoints (full style pass): emphasis bold removed; em dashes replaced; "myth(s)" ->
  "misconception(s)"; "corrected" -> "addressed"; "sugar" -> "glucose" in narration; Mdm Tan intro merged the
  repeated "agree a plan together" into the instruction; Mr Lim keyPoints 1 and 3 split into two sentences,
  "rather than" -> "instead of"; Mr Tan keyPoints: ALL-CAPS "WITHOUT"/"ONE" lowercased, "~5.5h" -> "about 5.5 h",
  trailing "-ing … not just the plate" -> "and treated them as interacting pillars alongside the plate",
  "rather than accepting" -> "without settling for", "key pillars" -> "some pillars", "social" -> "social
  context" (matches objective 2); Mdm Goh: "non-food levers" -> "non-diet levers" (no synonym cycling with the
  objectives), "raised blood pressure" -> "slightly raised blood pressure" (the intro and brief say slightly),
  keyPoint 3 split into two sentences.
- Mr Lim tag `myths` -> `common-beliefs` (pilot precedent; tags are not read by code).
- Checked CasePlayer.svelte: `keyPoints` and `objectives` render as plain text (no markdown), so no italics
  were added there (e.g. APOE stays roman).

## Content fixes (decision 1)

| File | Location | Before | After | Category |
|---|---|---|---|---|
| book/cases/sim-prediabetes-mdm-tan.case.yml | end-good debrief keyPoint 3 | "Check confidence — readiness predicts follow-through." | "Check confidence: her answer shows what she feels able to do, and you build the goal on that." (wording revised in fix round 2; the round-1 version ended "…and the goal builds on that.") | Contradiction with another chapter's cited text: *Behaviour-Change Counselling* states that stages of change (readiness) are "a heuristic, not a proven predictor" [@mastellos2014ttm] and says the scaling-question answer "surfaces what the patient can do… and lets you build the goal on the confidence they already have". Resolved toward that text. |
| book/chapters/cases-counselling.qmd | Mdm Goh blurb | "She has a bag of brain supplements and a borderline blood pressure and sugar she dismisses." | "She has a bag of brain supplements and dismisses her slightly raised blood pressure and borderline glucose." | Contradiction between the chapter and its own case: borderline (high-normal) and slightly raised blood pressure are not the same category, and the case brief, which is never edited, says "a slightly high blood pressure and a borderline sugar". No chapter text cites a value for her, so resolved toward the brief. Matching change in sim-dementia-prevention-mdm-goh.case.yml end-good keyPoint 1: "her raised blood pressure" -> "her slightly raised blood pressure" ("sugar" -> "glucose" there is terminology only). Made in the first pass but logged then only in the style summary; added here in fix round 2. |

## Deferred content concerns

- All four sim cases, `end-partial` node: when the simulated patient is unavailable, `fallbackGoto` routes
  straight to end-partial, which critiques a conversation that never happened (Mdm Tan "Look back at the
  feedback above"; Mr Lim "leaned on bans or left a misconception standing"; Mr Tan "You made progress";
  Mdm Goh "You engaged her"), and "Objectives met" ticks objective 1 for a student who did nothing. Needs a
  neutral fallback ending or an `end-unavailable` node (design change, not a style edit).
- sim-common-questions-mr-lim.case.yml, end-good title "Quality over quantity, and knowing when to refer": the
  case teaches "food quality and portion, not bans", and portion is quantity, so the title slightly cuts
  against the message. Not changed because the *Macronutrients* chapter's Mr Lim blurb uses the same
  "quality-over-quantity" framing; a retitle ("Quality, not bans, and knowing when to refer") should be decided
  for both together.
- sim-dementia-prevention-mdm-goh.case.yml objectives[1] and patient-chat objective still say "borderline
  sugar" and "raised blood pressure", while the rest of the case and the chapter now say "borderline glucose"
  and "slightly raised blood pressure". Left because decision 8 limits rubric fields to em-dash/"myth" swaps.
- sim-pillar-mr-tan.case.yml patient-chat `objective` keeps ALL-CAPS "WITHOUT" and "ONE"; it is shown to the
  student as the "Your goal:" line. Left per decision 8 (it is also the evaluator's goal, where the caps may be
  doing work); `exitWhen` caps also left.
- sim-common-questions-mr-lim.case.yml patient-chat `objective` is about 60 words in two sentences; the
  planner's tighter rewrite was not applied (decision 8).
- Two teachers on one page: Mdm Tan (52, primary-school) and Mdm Goh (55, secondary-school). The blurbs now
  name the school level; giving one a different job is an author choice. (Mdm Tan / Mr Tan surname reuse is
  book convention.)
- Stale YAML comments (not rendered, left): sim-prediabetes-mdm-tan line 3 "for the Integrated cases chapter";
  sim-dementia-prevention-mdm-goh line 2 "*Brain Health and Dementia*" (canonical: Brain Health & Dementia),
  line 1 "Integrated cases chapter".

## Deferred backlog / coordination

- cases-referral.qmd (not my file): to keep the two capstone pages identical, its callout sentence 3 should get
  the same change ("If the simulated patient is unavailable, the encounter notes this and continues."), and
  its four case headings should follow the same decision-8 pattern used here (persona name, colon, lower-case
  topical noun-phrase subtitle, no quoted patient words; e.g. Mr Chua: unintentional weight loss). Its opening
  "More **simulated-patient encounters**" should be unbolded, since this page owns and defines the term.
- Glossary owner: add the row below to book/glossary.qmd (alphabetical, among the S entries).
- No house blocks, figures, learning objectives, chapter map or Check yourself for this light page (out of
  scope by design: the cases carry their own objectives and debriefs).
- Render check of the TOC (four `##` sections with the new headings) not run here (no render allowed).

## Glossary rows owned

| Term | Meaning | Introduced in |
|---|---|---|
| Simulated patient | Someone (in this book, an AI model) who plays the patient in a practice consultation; not a real patient, and not a source of medical advice | Everyday & Preventive Counselling |

(Row revised in fix round 1; the earlier wording "An AI model that plays the patient…" presented the book's
use as the general meaning. term-ownership.md line 157 still carries the old wording; the glossary owner
should use the row above.)

## Owner terms from term-ownership.md that do not occur in this chapter

None. The only term assigned to cases-counselling (Simulated patient) occurs and is bold-defined here.

## Fix round 1

Applied verifier round-1 fixes. No content fixes (decision 1) beyond those already logged; all changes below
are rubric-scope corrections, wording or decision-9 trims.

Rubric fields (decision 8), sim-common-questions-mr-lim.case.yml (the two major issues, one fix):

- objectives[1]: "…portion, addressing misconceptions rather than banning foods." -> "…portion, correcting
  misconceptions rather than banning foods." (HEAD verb restored; only the em-dash and "myths" swaps remain).
- talk.objective: "…gently addressing each misconception (keto/rice, …, protein powder). Given…" -> "…gently
  correcting his misconceptions (keto/rice, …, protein powder). Given…" (HEAD verb and determiner restored;
  the em-dash sentence split at ". Given" kept). Non-rubric end-good body/keyPoints ("addressed each
  misconception") left as they are. The two entries in "Summary of changes" above are corrected in place.

Chapter (cases-counselling.qmd):

- Simulated-patient gloss: "a **simulated patient**, an AI model that plays the patient in a practice
  consultation." -> "a **simulated patient**, someone who plays the patient in a practice consultation. Here
  the simulated patient is an AI model." (general meaning first, then the book's use; two sentences so the
  key noun repeats instead of a semicolon chain). Glossary row in "Glossary rows owned" revised to match.
- Paragraph 2: "All four are the bread and butter of prevention: people who feel well, or nearly well, and
  need a brief history, a common belief gently addressed, and a single realistic change…" -> "All four
  patients are the bread and butter of prevention. They feel well, or nearly well, and need a brief history,
  a misconception gently addressed, and a single realistic change…" (subject is now patients, not cases;
  split under the ~25-word threshold; "misconception" keeps the sense that the belief is mistaken and
  matches the case YAML, without the §11g words "myth"/"corrected").
- Heading: "## Mr Tan: a sceptical patient at a health screen" -> "## Mr Tan: lifestyle beyond diet at a
  health screen" (topical noun phrase like the other seven capstone headings; the case's subject is the
  pillars beyond diet).
- Mdm Goh blurb: "She has a bag of brain supplements, and dismisses…" -> "…supplements and dismisses…"
  (no comma in a compound predicate).
- Line rewrap only in paragraph 1 (no wording change).

Sim cases, intro nodes (decision 9 / §11j: cut island text that repeats the prose beside it; the task is
already in the chapter blurb above the island and again in the patient-chat "Your goal:" line,
CasePlayer.svelte line 255). Scene-setting kept; objectives, objective and brief untouched:

- sim-pillar-mr-tan: removed "Engage him without lecturing, look beyond his diet, and see if you can agree
  one realistic change he will actually try." (body now ends "…not sure why any of this matters.").
- sim-common-questions-mr-lim: removed "Answer them on quality, not bans, and notice when a plan needs a
  dietitian." (body now ends "…from friends and online.").
- sim-prediabetes-mdm-tan: "In this encounter you talk with her directly, as you would with a real patient:
  take a brief history, agree one realistic change, and check her confidence." -> "In this encounter you
  talk with her directly, as you would with a real patient."
- sim-dementia-prevention-mdm-goh (same pattern, not named by the verifier; trimmed so the four intros
  match): removed "Talk with her about what actually lowers the risk." (repeats the blurb's "lead with what
  actually lowers the risk"; body now ends "…which she brushes aside.").

Debrief wording, sim-pillar-mr-tan.case.yml:

- end-partial body: "left some pillars unexplored" -> "left important pillars unexplored".
- end-partial keyPoint 1: "left some pillars (sleep, stress, alcohol, social context) unexplored" -> "left
  important pillars (sleep, stress, alcohol, social context) unexplored".
  ("important" instead of "key": the copy audit does not flag "key pillars", but §11g lists "key" as an
  adjective of importance to avoid; "important" restores the point that the missed pillars matter.)

Not applied:

- Mdm Tan intro "take a brief history and listen, agree one realistic change together, and check her
  confidence" (verifier minor): superseded by the decision-9 trim above, which removes that task sentence.
  "ask, listen, and agree a realistic plan" is in the chapter callout directly above the island, and
  "patient-centred" is in objectives[2]; re-adding it to the intro would repeat the callout.

Coordination (not my files):

- cases-referral.qmd sim cases (sim-iron-deficiency-aisha, sim-frailty-undernutrition-mr-chua,
  sim-bone-fracture-mdm-devi, sim-ckd-protein-encik-rahman): their intro nodes still end with the task
  sentence ("Talk with him directly: take a brief history, work out…", "Talk with her directly: reframe…",
  "Talk with him: undo the harmful ideas…", "Talk with her: gently draw out…"), which repeats each chapter
  blurb. To keep the two capstones matching under decision 9, the owner should trim them the same way
  (keep scene-setting; Aisha's "She will not volunteer much, so you will have to ask." could stay as
  scene-setting). Not edited here.
- Glossary owner / term-ownership.md: use the revised Simulated patient row ("Someone (in this book, an AI
  model) who plays the patient in a practice consultation; not a real patient, and not a source of medical
  advice").

Re-run results:

- Gate (HEAD vs working copy): citations none / none (identical); islands 4 / 4 (same four data-src, same
  order); callouts 1 / 1; tables 0 / 0; figures 0 / 0; {#sec-cases} kept.
- Copy audit (all five files): 0 flags. "you" in the qmd: 5, unchanged (opener, island instruction, Mr Tan
  blurb). Remaining em dashes and "rather than" in the YAML summary are all inside `brief:` or the rubric
  fields. Script check outside `brief:`/`voice`: 0 em dashes, 0 "myth", 0 bold in all four cases.
- YAML: all four parse with js-yaml; every objective, title, body, objective/exitWhen/opener and keyPoint is
  a string. validate-cases.mjs: all OK, exit 0.

## Fix round 2

Applied all eleven verifier round-2 items (four majors, seven minors). No new content changes; one content
fix from the first pass (the Mdm Goh blood-pressure descriptor) is now logged in the Content fixes table, and
that table's Mdm Tan row carries the final round-2 wording. In this log "keyPoint N" and "objectives[N]" count
from 1.

Sim cases, intro nodes (decision 9 / §11j). The round-1 trim cut the task sentence but kept scene-setting that
repeats both the chapter blurb above the island and `persona.presentation`, which CasePlayer.svelte (line 221)
prints on every node, the intro card included; the portrait caption already shows name, age and occupation.
Each intro body is now the one island-instruction sentence, plus Mdm Goh's supplement details (the only part
that was new). `persona.presentation`, `brief:`, `objectives` and the patient-chat `objective` are untouched;
lib/patient.js builds the AI patient and evaluator prompts from the title, persona, brief, objective/exitWhen
and objectives, and never reads an intro body.

- sim-common-questions-mr-lim: "Mr Lim, a 41-year-old taxi driver, comes in after a health screen flagged a
  borderline fasting glucose and mildly raised cholesterol. He feels well, but he has picked up a string of
  nutrition questions from friends and online." -> "In this encounter you talk with him directly, as you would
  with a real patient." This also ends the "fasting sugar" / "fasting glucose" cycling on the card (the
  presentation keeps the patient's plain "fasting sugar").
- sim-pillar-mr-tan: "Mr Tan, 38, is here only because his new job needs a health screen. He feels fine and is
  not sure why any of this matters." -> "In this encounter you talk with him directly, as you would with a real
  patient."
- sim-prediabetes-mdm-tan: deleted "Mdm Tan, 52, comes in after a screening test showed a raised fasting
  glucose (prediabetes). She feels well but is worried."; the body is now "In this encounter you talk with her
  directly, as you would with a real patient."
- sim-dementia-prevention-mdm-goh: "Mdm Goh, 55, a secondary-school teacher, comes in worried. Her mother has
  dementia, and she is frightened she will follow. She has started ginkgo and fish-oil pills, … and wants to
  know what else to take. She also has a slightly raised blood pressure and borderline glucose, which she
  brushes aside." -> "Mdm Goh has started ginkgo and fish-oil pills, has read that coconut oil and the "MIND
  diet" protect the brain, and wants to know what else to take. In this encounter you talk with her directly,
  as you would with a real patient." Her blood pressure and glucose stay in the chapter blurb directly above
  the island and in end-good keyPoint 1.

Debrief keyPoints (not rubric fields):

- sim-prediabetes-mdm-tan end-good keyPoint 3: "…and the goal builds on that." -> "…and you build the goal on
  that." (the clinician is the agent, as in the *Behaviour-Change Counselling* text "lets you build the goal on
  the confidence they already have").
- sim-dementia-prevention-mdm-goh end-good keyPoint 1 (37 words) split into two sentences (22 + 14 words):
  "…is the best-supported lever. Her slightly raised blood pressure and borderline glucose are exactly where the
  work is."
- sim-dementia-prevention-mdm-goh end-good keyPoint 2: "and coconut oil is mostly saturated fat, which works
  against the vascular lever" -> "and coconut oil is mostly saturated fat, so it works against the vascular
  lever" (coconut oil is the subject again, as at HEAD and in the *Brain Health & Dementia* table: "coconut oil
  is about 90% saturated fat, so it works against the vascular lever"). "mostly" kept; no number added.

Chapter (cases-counselling.qmd), paragraph 1:

- "…someone who plays the patient in a practice consultation. Here the simulated patient is an AI model." ->
  "…someone who plays the patient in a practice consultation (here, an AI model)." The bold definition, and so
  the glossary row in "Glossary rows owned", is unchanged.
- "The cases in earlier chapters drill one idea at a time through set choices; here you talk with the patient
  in your own words, then get feedback on your counselling." (30 words) -> "The cases in earlier chapters drill
  one idea at a time through set choices. Here you talk with the patient in your own words, then get feedback
  on your counselling." (14 + 16 words).
- Paragraph rewrapped at 100 characters (round 1 had left one source line at 134). No line in the file now
  exceeds 100 characters; no other wording changed.

Log:

- Content fixes table: added the Mdm Goh blood-pressure row (chapter blurb plus end-good keyPoint 1), which
  round 1 had recorded only in the style summary; the Mdm Tan keyPoint 3 row now shows the round-2 wording.

Not applied: none.

Left as is (not raised by the verifier; the §11j thresholds are lint, not law): some debrief sentences built as
colon or three-part lists still run past ~25 words, mostly 26–29; the longest are Mr Lim end-good keyPoint 2
(49 words), Mr Tan end-good keyPoint 3 (44), Mdm Goh end-good keyPoint 2 (43) and Mdm Goh end-good body (38).
The new Mdm Goh intro sentence is 28 words (three short parallel predicates, as the verifier wrote it). The
chapter has no sentence over 25 words.

Re-run results:

- Gate (HEAD vs working copy): citations none / none (identical); islands 4 / 4 (same four data-src, same
  order); callouts 1 / 1; tables 0 / 0; figures 0 / 0; {#sec-cases} kept.
- Copy audit --you (all five files): 0 flags. "you" in the qmd: 5 (opener "your own words"; paragraph 1 "you
  talk … your own words … your counselling"; Mr Tan blurb "see if you can agree"), all clinician or
  island-instruction uses. On the parsed YAML outside `brief:`: 0 em dashes, 0 "myth", 0 bold. The em dashes
  the summary still counts are in `brief:` blocks plus one YAML comment (sim-prediabetes-mdm-tan line 39, not
  rendered). "rather than" outside `brief:` is in the Mr Lim and Mdm Goh rubric fields (decision 8) and in Mr
  Tan end-partial keyPoint 1 ("the prevention window rather than the all-clear", a named contrast, unchanged
  since HEAD).
- YAML: all four parse with js-yaml; title, objectives, every node title/body/objective/exitWhen/opener/brief,
  keyPoints and presentation are strings.
- validate-cases.mjs: all OK, exit 0.
