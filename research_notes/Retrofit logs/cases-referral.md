# Retrofit log: Recognising Risk & Knowing When to Refer (`book/chapters/cases-referral.qmd`)

Light page (Part V capstone). Prose, voice and formatting rules only, plus decision 8. No learning
objectives, chapter map or Check yourself.

Files changed:

- book/chapters/cases-referral.qmd
- book/cases/sim-iron-deficiency-aisha.case.yml
- book/cases/sim-frailty-undernutrition-mr-chua.case.yml
- book/cases/sim-bone-fracture-mdm-devi.case.yml
- book/cases/sim-ckd-protein-encik-rahman.case.yml

## Gate and checks

| Check | Before (HEAD) | After |
|---|---|---|
| Citation multiset | none | none (identical) |
| `data-island` | 4 | 4 (same four `data-src`) |
| Callouts | 1 | 1 |
| Tables | 0 | 0 |
| Figures | 0 | 0 |
| `{#sec-}`/`{#fig-}` ids | none | none |
| copy-audit flags (5 files, `--you`) | 42 | 0 |
| "you" on the page | 2 | 1 ("explain your concern plainly", island instruction to the clinician) |
| YAML parse (js-yaml), 4 cases | ok | ok |
| validate-cases.mjs | exit 0 | exit 0 |

Also checked by script: each sim case's `brief`, `persona`, node ids, `objectivesMet` arrays and number of
objectives are identical to HEAD.

Remaining audit markers (not flags): "rather than" ×4 in Mr Chua. All four are in the `objectives` list and the
patient-chat `objective` (AI evaluator rubric), where decision 8 allows only em-dash and "myth" swaps. The other
"dash-heavy" markers count em dashes inside `brief:` blocks (never touched) and `#` comments (not rendered).

## Where the plan was overridden

- **Decision 8 (rubric fields).** The plan's wider rewrites of `objectives` and patient-chat `objective` were cut
  back to em-dash and "myth" swaps only. Not applied: Aisha's caps (AND, PLUS) and slashes, "heavy periods" →
  "heavy menstrual bleeding"; Mr Chua's "rather than" → "instead of" and the split sentences; Devi's
  "Correct" → "Reframe", "slightly", "rather than" → "not" and the DXA rewording; Rahman's "dangerous high
  potassium" → "hyperkalaemia", "star fruit/belimbing is" → "are", and "rather than" → "instead of".
- **Decision 8 (headings).** The plan kept three quoted-patient headings. They became topical subtitles to match
  the sibling page (*Everyday & Preventive Counselling*, already retrofitted with "Mdm Tan: newly detected
  prediabetes", "Mr Lim: everyday nutrition questions" and so on).
- **Decision 6 (chapter names).** The plan wrote "the *Everyday and Preventive Counselling* chapter". The page now
  uses the canonical "the *Everyday & Preventive Counselling* chapter", linked to `cases-counselling.qmd`.
- **Callout.** Sentence 3 now mirrors the sibling page word for word: "If the simulated patient is unavailable,
  the encounter notes this and continues." This drops the developer-facing "your build" and the filler
  "simply". The two capstone callouts are identical again (checked against the sibling's working copy).
- **Openers.** The plan left the two `opener` lines alone. I replaced only their em dashes with full stops (Aisha:
  "It's probably nothing. I think…"; Devi: "I bought calcium tablets. Should I…"). The patient's words are
  unchanged, and these were the last two audit flags.

## Summary of changes

### Page (`cases-referral.qmd`)

- Intro paragraph rewritten:
  - removed the em dash and the verbless fragment;
  - unbolded "simulated-patient encounters", since *simulated patient* is owned and bold-defined by the
    *Everyday & Preventive Counselling* chapter;
  - unbolded the emphasis on "refer";
  - added a parenthetical, linked chapter-name reference;
  - split the 30-word sentence.
- Callout sentence 3 now mirrors the sibling page (see above).
- Headings changed from em dash to topical subtitles:
  - "Aisha: persistent fatigue"
  - "Mr Chua: unintentional weight loss"
  - "Mdm Devi: calcium tablets after a wrist fracture"
  - "Encik Rahman: diet changes in early chronic kidney disease"
  - None of them names the diagnosis that the student has to recognise.
- Lead-ins:
  - Aisha: "who has been tired for months" → "with months of fatigue".
  - Devi: "Correct the 'more is better' idea" → "Reframe…", since "correct" is on the common-beliefs avoid list.
  - Rahman: "whose kidneys are now affected" → "who now has early chronic kidney disease"; "switched to a
    low-sodium salt" → "has switched to a "low-sodium" salt substitute"; "know where this belongs" → "recognise
    where this belongs".

### Cases (only fields outside `brief`; rubric fields limited to em-dash and myth swaps)

- **Aisha**
  - `title`: em dash → colon (quoted).
  - Objective 1: em dash → comma.
  - Intro body: em dash → ", so".
  - `exitWhen`: em dash → comma.
  - `opener`: em dash → full stop.
  - keyPoint 1: two em dashes removed, the 45-word sentence split, quoted.
  - keyPoint 3: removed the "->" arrows, "+", caps, slashes and em dash; "rather than" → "instead of".
  - End-partial body: em dash removed.
  - Partial keyPoint 1: two em dashes removed.
  - Partial keyPoint 2: "iron-first diet advice" → "food-first iron advice" (the case's own term).
- **Mr Chua**
  - `title`: em dash → colon.
  - Intro: emphasis bold "**Talk with him directly**" removed.
  - Patient-chat `objective`: the paired em dashes → parentheses.
  - `exitWhen`: em dash → comma.
  - End-good title: "…off — and refer" → "…off, and refer".
  - End-good body: em dash → colon, plus a grammar fix ("screening, starting food-first and referring").
  - keyPoint 2: em dash → new sentence.
  - Partial keyPoint 1: em dash → colon.
- **Mdm Devi**
  - `title`: em dash → colon.
  - Objective 1: "megadose myth —" → "belief in megadoses (…)".
  - Objective 3: em dash → semicolon.
  - Intro: emphasis bold removed; "correct" → "reframe".
  - `exitWhen`: em dash → comma.
  - `opener`: em dash → full stop.
  - End-good body: "bone-health assessment" → "osteoporosis assessment".
  - keyPoint 1: grammar fix ("pills is not" → "pills do not make"), the 50-word sentence split, and "spread
    across the day in amounts under about 500 mg", matching the *Bone & Joint Health* wording.
  - keyPoint 2: em dash removed; "rather than harm it" → "; protein does not harm it".
  - keyPoint 3: paired em dashes → parentheses.
  - End-partial body and partial keyPoint 2: "low-trauma fracture" / "bone-health assessment" → "fragility
    fracture" / "osteoporosis assessment", the slash removed, and the em dash removed.
- **Encik Rahman**
  - `title`: em dash → colon.
  - Objective 1: "myth" → "belief"; em dash → full stop.
  - Objective 2: em dash → colon.
  - Patient-chat `objective`: "myth" → "belief"; em dash → colon.
  - Intro:
    - "high blood pressure" → "hypertension" (narrator's prose);
    - emphasis bold removed from "Talk with him" and from the two traps, which it telegraphed (the bold on
      the presenting fact "kidneys are affected" stays);
    - quotes made uniformly double.
  - `exitWhen`: em dash → comma.
  - keyPoint 1: "the wrong instinct" → "a harmful instinct here" (avoids "wrong", which judges the reader);
    em dash → ", so".
  - keyPoint 2: "(they carry a neurotoxin that failing kidneys cannot clear)"; "dangerous high potassium" →
    "dangerous hyperkalaemia".
  - keyPoint 3: "rather than handing out…" → "; do not hand out … yourself".

## Content fixes (before → after, category)

No claim, number or citation was changed. These are the swaps that change clinical wording. Each one renames the
same fact with the owner chapter's term (§11g terminology and no synonym cycling):

| File | Location | Before | After | Category |
|---|---|---|---|---|
| sim-bone-fracture-mdm-devi.case.yml | end-good body; end-partial body; partial keyPoint 2 | "low-trauma fracture" / "bone-health assessment" | "fragility fracture" / "osteoporosis assessment" | terminology consistency (owner: Bone & Joint Health) |
| sim-ckd-protein-encik-rahman.case.yml | keyPoint 2 | "dangerous high potassium" | "dangerous hyperkalaemia" | terminology (owner: Chronic Kidney Disease) |
| sim-ckd-protein-encik-rahman.case.yml | intro body | "diabetes and high blood pressure" | "diabetes and hypertension" | terminology (narrator prose; persona/brief stay lay) |
| cases-referral.qmd | Encik Rahman lead-in | "whose kidneys are now affected" | "who now has early chronic kidney disease" | terminology (case title/brief say early kidney disease) |
| sim-iron-deficiency-aisha.case.yml | partial keyPoint 2 | "iron-first diet advice" | "food-first iron advice" | terminology consistency (the case's own "food-first") |
| sim-ckd-protein-encik-rahman.case.yml | end-good keyPoint 1 | "the wrong instinct" | "a harmful instinct here" | wording consistency (the case's own end-good body and end-partial keyPoint 1 say "harmful"); added in fix round 1 |
| sim-bone-fracture-mdm-devi.case.yml | end-good keyPoint 2 | "adequate protein support bone rather than harm it" | "adequate protein both support bone; protein is a bone nutrient, not a threat" | wording consistency (the case's own objective 2: "protein as a bone nutrient rather than a threat"); fix round 1 |
| sim-bone-fracture-mdm-devi.case.yml | `exitWhen` | "needs a bone-health assessment" | "needs an osteoporosis assessment" | terminology consistency (owner: Bone & Joint Health; matches end-good/end-partial); fix round 1 |
| sim-iron-deficiency-aisha.case.yml | end-good body; end-partial body; partial keyPoint 1 | "the heavy periods" | "the heavy menstrual bleeding" | no synonym cycling (keyPoint 1 says "heavy menstrual bleeding"); fix round 1 |

## Deferred content concerns

- **Rubric fields left as written (decision 8).**
  - Aisha `objectives`[3] and `objective`: shouty caps ("AND", "PLUS"), slashes, and "heavy periods" in a
    student-facing field.
  - Devi `objective`: "Correct the 'more calcium is better' idea" ("correct" is on the common-beliefs list).
    It also says supplements "raise kidney-stone risk", where objective 1, keyPoint 1 and the *Bone & Joint
    Health* chapter say "slightly raise" / "a small increase".
  - Rahman `objectives`[1]: "Correct the 'avoid protein' belief". Rahman `objective`: lay "dangerous high
    potassium", where keyPoint 2 now says hyperkalaemia.
  - Mr Chua: four "rather than" in the rubric fields.
  - Changing any of these alters the AI evaluator's rubric, so the author should decide whether to do it,
    ideally with a test run of each sim case.
- **Fallback ending presumes a conversation (all four sim cases).** When the simulated patient is unavailable,
  the case routes to `end-partial`. That ending critiques a conversation that never happened ("You engaged, but
  missed the heavy periods…", "You engaged him, but leaned on 'just eat more'…", "You engaged her but leaned on
  supplements…", "You engaged him but left a trap standing…"), and its `objectivesMet: [1]` ticks objective 1
  for a student who did nothing. The callout promises the encounter "notes this and continues". A neutral
  `end-unavailable` node would fix it, but that is a design change. The same concern is raised by the sibling
  plan for the counselling cases.
- **Devi `exitWhen`** still says "bone-health assessment". It is not displayed (evaluator fallback only) and
  was left as written: the plan limits it to the em-dash swap.

## Deferred backlog

- `#` header comments in the Mr Chua, Devi and Rahman cases still say "for the Integrated cases chapter". The
  capstone is now two chapters (*Everyday & Preventive Counselling* and *Recognising Risk & Knowing When to
  Refer*, decision N). The comments are not rendered, so they were left; tidy them in a cleanup pass.
- House blocks, figures, Check yourself: not applicable (light capstone page; the sim debriefs and AI evaluator
  do the checking).
- Render check (out of tree) of one sim case, to confirm that the "Your goal:" line and the end debrief read
  cleanly. Not run here, because render and quarto are barred while other agents share the checkout.

## Glossary rows owned

None. The page defines no terms. *Simulated patient* is owned by *Everyday & Preventive Counselling*.
*Fragility fracture* and *osteoporosis* (Bone & Joint Health), *hyperkalaemia*, *chronic kidney disease* and
*protein-energy wasting* (Chronic Kidney Disease), *undernutrition* (Undernutrition & Malnutrition) and *DXA*
(Energy Balance) are used unbolded, as passing mentions.

## Owner terms missing

None: term-ownership.md assigns no term to cases-referral.

## Fix round 1

The verifier found three major issues and nine minor ones. All twelve were dealt with. One was deferred,
which is one of the two fixes the verifier offered. No `brief:`, `persona`, `objectives`, patient-chat
`objective`, node id or `objectivesMet` changed (each checked by script against HEAD).

### Changed

- **Emphasis bold removed from three case intros (major ×3).** The four sims now have 0 `**` outside `brief:`,
  which matches the sibling capstone's cases.
  - Mr Chua: "Over about **eight months he has lost weight without trying**." → no bold.
  - Mdm Devi: "after **breaking her wrist in a fall in her kitchen**." → no bold.
  - Encik Rahman: "his **kidneys are affected**" → no bold. This reverses round 0's choice to keep that bold
    as a "presenting fact".
- **Devi end-good keyPoint 2.** "…and adequate protein support bone; protein does not harm it." → "…and
  adequate protein both support bone; protein is a bone nutrient, not a threat." This is the verifier's
  wording, and it reuses the case's own objective 2. It also covers the minor about the softened hedge:
  "adequate protein" stays in the first clause, and the second clause is a statement about category ("a bone
  nutrient"), not an unqualified "does not harm it".
- **Devi `exitWhen`.** "a bone-health assessment" → "an osteoporosis assessment". `exitWhen` is not frozen
  by decision 8. This resolves the earlier deferred item "Devi `exitWhen` still says 'bone-health
  assessment'".
- **Aisha.**
  - End-good body, end-partial body and partial keyPoint 1: "the heavy periods" → "the heavy menstrual
    bleeding".
  - keyPoint 1 reordered so that the parenthetical list expands "the full picture": "Elicited the full
    picture (fatigue, exertional breathlessness, pallor, heavy menstrual bleeding, and a low-iron diet of
    noodles and bread with little red meat) through gentle, targeted questioning, despite the patient
    minimising."
  - `objectives`, `objective` and `exitWhen` were left as written. Partial keyPoint 2 ("the underlying
    menstrual bleeding") and keyPoint 3 ("the menstrual cause") were left too: neither uses the synonym
    "periods".
- **Rahman end-good keyPoint 1.** "a harmful instinct here" was kept, not changed to "mistaken", because
  "mistaken" judges the reader in the same way as "wrong" (§11g common beliefs). The before → after row is
  now in the content-fix table above.
- **Page intro (`cases-referral.qmd`, two minors).** Applied the verifier's opening noun phrase and its
  explicit antecedent, but kept the split sentence:
  - Before: "These are more simulated-patient encounters in the same format (see the [*Everyday & Preventive
    Counselling*](cases-counselling.qmd) chapter), now with higher stakes. Those patients were well or
    worried-well. With these four, the first job is…"
  - After: "The four cases below are further simulated-patient encounters in the same format (see the
    [*Everyday & Preventive Counselling*](cases-counselling.qmd) chapter), now with higher stakes. The
    patients in that chapter were well or worried-well. With these four, the first job is…"
  - The final sentence is unchanged. The verifier's semicolon version made one 33-word sentence. Keeping two
    sentences meets both fixes and stays under the ~25-word threshold (§11j).

### Deferred (the verifier's second option)

- **Page lead-in vs case intro duplication (both capstone pages).** Each `##` lead-in's task sentence is
  repeated by the case's intro screen and again by its "Your goal:" line. This happens on both this page
  (Rahman identical, Devi near-identical) and *Everyday & Preventive Counselling* (e.g. Mr Lim's "Answer them
  on quality-not-bans terms, and notice when a plan needs a dietitian" against the intro's "Answer them on
  quality, not bans, and notice when a plan needs a dietitian").
  - It is a shared convention, so it should be resolved the same way on both pages in one pass. The
    sibling page and its cases belong to another agent.
  - The verifier's sample Rahman lead-in was not used, for two reasons:
    - "Two of his changes are traps" miscounts the three harmful ideas.
    - "The plan itself belongs with a renal dietitian" gives away the referral the student is meant to
      recognise.
  - Suggested resolution: the page lead-in keeps the presentation (who and what), and the task lives only in
    the case intro.

### Checks after round 1

| Check | HEAD | After round 1 |
|---|---|---|
| Citation multiset | none | none (identical) |
| `data-island` | 4 | 4 (same four `data-src`) |
| Callouts / tables / figures | 1 / 0 / 0 | 1 / 0 / 0 |
| `{#sec-}`/`{#fig-}` ids | none | none |
| copy-audit flags (5 files, `--you`) | 42 | 0 |
| "you" on the page | 2 | 1 (island instruction to the clinician) |
| `**` outside `brief:` in the four sims | – | 0 |
| YAML parse (js-yaml), 4 cases | ok | ok |
| validate-cases.mjs | exit 0 | exit 0 |

The remaining "rather than" markers are Mr Chua ×4, Devi ×2 and Rahman ×2. All of them are in the rubric
fields (`objectives` and the patient-chat `objective`), which decision 8 freezes. This corrects round 0's
note, which listed only Mr Chua's. The "dash-heavy" markers are em dashes inside `brief:` blocks and `#`
comments.
