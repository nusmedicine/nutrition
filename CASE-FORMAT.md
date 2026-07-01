# Case-File Format (DSL) — branching clinical cases

> Status: **Draft proposal for your reaction.** This is the format you'll author cases in.
> Rendered by the `case-player` component (see [ARCHITECTURE.md](ARCHITECTURE.md) §5).
> Last updated: 2026-06-30

The design goal: a faculty author writes a rich, branching patient encounter in **YAML** — no code —
and the `case-player` turns it into an interactive, progressively-revealed, MCQ-gated experience.

> **Pilot pedagogy (decided):** cases are **formative** — the debrief shows a qualitative `outcome`
> rating and prose feedback, **never a numeric score**. Branching and the debrief are driven by a
> **single overall `quality`** variable. (The DSL still accepts multiple variables, so an individual
> case *can* track more dimensions later — but the pilot convention is one.)

---

## 1. Mental model
A case is a **graph of nodes**. The player starts at `start`, renders one node at a time, and follows
`goto`/`next` edges chosen by the student's answers. The **`quality`** variable accumulates as the
student makes good or poor choices and drives branching and the final debrief.

```
start ─▶ info ─▶ mcq ──(good)──▶ reveal ─▶ mcq ─▶ branch ──(quality≥2)──▶ patient-chat ─▶ good ending
                  └──(poor)──▶ reveal ─▶ mcq ─▶ branch ──(quality<2)───▶ remedial ─▶ partial ending
```

---

## 2. Top-level fields

| Field | Req | Type | Notes |
|---|---|---|---|
| `id` | ✓ | string | Unique, kebab-case. Used as the storage key for run state. |
| `title` | ✓ | string | Display title. |
| `objectives` | ✓ | string[] | Learning objectives, shown on the intro and debrief. |
| `persona` | ✓ | object | The patient (see §3). |
| `estimatedMinutes` |  | number | Rough time-to-complete. |
| `difficulty` |  | enum | `intro` \| `core` \| `stretch`. |
| `tags` |  | string[] | For indexing/search. |
| `variables` |  | object | Initial state. **Pilot convention: one overall dimension**, e.g. `{ quality: 0 }`. |
| `start` | ✓ | string | `id` of the first node. |
| `nodes` | ✓ | node[] | The graph (see §4). |

## 3. `persona`
```yaml
persona:
  name: "Mdm Tan"
  age: 52
  sex: female
  occupation: "primary-school teacher"
  presentation: "Routine health screening; fasting glucose 6.4 mmol/L."
  avatar: figures/personas/mdm-tan.png   # optional single portrait
  sprite: /figures/personas/mdm-tan      # optional visual-novel sprite set (see §4a)
  # 'voice' is used only by the optional LLM patient-chat node (§4.5)
  voice: "Polite, a little anxious, time-pressed, fond of kopi and char kway teow."
```

---

## 4. Node types
Every node has `id` (unique) and `type`. Common optional fields: `title`, `media` (§5),
`emotion` (§4a).

### 4a. Patient portrait (visual-novel mode)
If `persona.sprite` is set (a site-root base path like `/figures/personas/mr-lim`), the player
shows a **patient portrait beside the dialogue whose expression tracks the situation**. Each
sprite is an image at `<sprite>/<emotion>.svg`. The standard emotion set is **`neutral`,
`concerned`, `relieved`, `skeptical`, `surprised`** (unknown values fall back to `neutral`; if
`sprite` is omitted the portrait pane simply doesn't render — cases stay fully playable).

- **`emotion:` on any node** sets the resting mood while that node is shown (e.g. a `concerned`
  look on a question about the patient's own results).
- **`reaction:` on an mcq option** sets the mood shown *while that option's feedback is up* — the
  patient reacts to the student's answer. If omitted, a correct answer defaults to `relieved`
  and an incorrect one to `concerned`.
- **`end` nodes** use `relieved` for a `success` outcome and `concerned` otherwise.

Sprites are standardized (one emotion set, reused per patient). The pilot set is **Avataaars**
(CC BY 4.0, Pablo Stanley) rendered via DiceBear; the engine is asset-agnostic, so the art can
be swapped without touching any case file.

### 4.1 `info` — narrative / reveal
Presents content, then advances. This is the primary "reveal information as the case progresses" tool.
```yaml
- id: intro
  type: info
  title: "The encounter begins"
  body: |
    Mdm Tan sits down. *"Doctor, my sugar is a bit high?"*
    Her BMI is 27.5. She has no symptoms.
  next: q-diet-history        # required for info nodes
```

### 4.2 `mcq` — decision point
A question whose options branch the case. Feedback is revealed **after** answering; the student then
advances via that option's `goto`.
```yaml
- id: q-diet-history
  type: mcq
  stem: |
    What is the **best** first step before giving any dietary advice?
  select: single               # single (default) | multiple
  shuffle: true                # optional
  options:
    - id: a
      text: "Tell her to stop eating rice immediately."
      correct: false
      feedback: "Prescriptive and premature — you haven't assessed her current intake."
      goto: remedial-history
    - id: b
      text: "Take a focused diet history (typical day's meals, drinks, portion sizes)."
      correct: true
      feedback: "Right — assess before you advise. This also builds rapport."
      effects: { quality: +1 }
      goto: reveal-history
```
- `correct` is optional (omit for pure-branch choices with no right answer).
- `effects` adds to `variables` (numbers add; booleans set). Pilot cases adjust the single `quality`.
- `reaction` (optional) sets the patient's portrait mood while this option's feedback shows (§4a).
- `goto` is required and must resolve to a node `id`.

### 4.3 `branch` — conditional routing (no question shown)
Routes silently based on accumulated `variables`. First matching rule wins.
```yaml
- id: route-after-history
  type: branch
  rules:
    - if: "quality >= 2"
      goto: advanced-counselling
  else: standard-counselling
```
Expressions are a **restricted, sandboxed** grammar only — comparisons (`>= > <= < == !=`),
`&&`/`||`, parentheses, over declared `variables` and numeric/boolean literals. **No arbitrary JS.**

### 4.4 `end` — terminal node / debrief
The `outcome` drives styling and the qualitative summary; **no numeric score is shown**.
```yaml
- id: end-good
  type: end
  outcome: success            # success | partial | poor
  title: "Well counselled"
  body: |
    You assessed before advising, agreed one realistic change (swap one sugary
    drink for water/kopi-o kosong), and arranged follow-up.
  debrief:
    objectivesMet: [1, 2, 3]  # indices into top-level `objectives`
    keyPoints:
      - "Assess intake before prescribing."
      - "One specific, achievable change beats a long forbidden-foods list."
    references: ["@whoHealthyDiet2020"]   # BibTeX keys (Quarto)
```

### 4.5 `patient-chat` — optional LLM segment *(Phase-2 / spike)*
Hands off to the guardrailed LLM patient endpoint (ARCHITECTURE.md §8). **Optional** — a case is fully
playable without it; if the endpoint is disabled, the player skips straight to `fallbackGoto`.
```yaml
- id: talk-to-mdm-tan
  type: patient-chat
  scenarioId: prediabetes-mdm-tan      # maps to a server-side persona+scenario
  objective: "Elicit one barrier to change and agree a single realistic dietary swap."
  turnLimit: 8                          # hard cap on exchanges
  exitWhen: "student agrees a specific, safe dietary change with the patient"
  goto: standard-counselling            # after a successful exchange
  fallbackGoto: standard-counselling    # if LLM disabled OR turn limit hit
```

---

## 5. `media` (optional, any node)
```yaml
media:
  - type: figure
    src: figures/glucose-curve.png
    alt: "Fasting vs postprandial glucose over time."
  - type: diagram                # reuse an interactive book diagram
    component: metabolic-diagram
    data: data/insulin-signalling.json
  - type: ojs                    # inline reactive snippet by id
    cell: glycemic-index-explorer
```

---

## 6. Worked example (complete, two endings)
The pilot case: pre-diabetes nutrition counselling. One `quality` variable; choices route to a
**success** or **partial** ending; the optional `patient-chat` degrades gracefully when the LLM is off.

```yaml
id: prediabetes-counseling
title: "Counselling Mdm Tan: newly detected pre-diabetes"
objectives:
  - "Take a focused diet history before advising."
  - "Translate guidelines into one realistic, patient-centred change."
  - "Use motivational, non-judgemental language."
difficulty: intro
estimatedMinutes: 12
tags: [nutrition, metabolism, diabetes, counselling]
start: intro
variables: { quality: 0 }            # single overall dimension (pilot convention)

persona:
  name: "Mdm Tan"
  age: 52
  sex: female
  occupation: "primary-school teacher"
  presentation: "Screening fasting glucose 6.4 mmol/L; BMI 27.5; asymptomatic."
  voice: "Polite, mildly anxious, time-pressed; enjoys kopi and char kway teow."

nodes:
  - id: intro
    type: info
    title: "The encounter begins"
    body: |
      Mdm Tan's fasting glucose is **6.4 mmol/L** (impaired fasting glucose).
      She is asymptomatic and worried. *"Doctor, is it very serious?"*
    next: q-first-step

  - id: q-first-step
    type: mcq
    stem: "What is the best **first** step?"
    options:
      - id: a
        text: "Take a focused diet history."
        correct: true
        feedback: "Assess before you advise — and it builds rapport."
        effects: { quality: +1 }
        goto: reveal-history
      - id: b
        text: "Tell her to cut out all rice and noodles."
        correct: false
        feedback: "Prescriptive, premature, and hard to sustain."
        goto: reveal-history

  - id: reveal-history
    type: info
    body: |
      Her typical day: kopi with condensed milk ×3, char kway teow for lunch,
      rice with dinner, sweet drinks with meals. Little physical activity.
    next: q-change

  - id: q-change
    type: mcq
    stem: "Which single change is the most realistic, high-yield first goal?"
    options:
      - id: a
        text: "Replace 2 of 3 sweetened kopi with kopi-o kosong."
        correct: true
        feedback: "Specific, achievable, meaningful sugar reduction."
        effects: { quality: +1 }
        goto: route
      - id: b
        text: "Switch to a strict low-carb diet this week."
        correct: false
        feedback: "Large, abrupt change — low adherence, risks rapport."
        goto: route

  - id: route
    type: branch
    rules:
      - if: "quality >= 2"
        goto: talk-to-mdm-tan
    else: remedial

  - id: talk-to-mdm-tan
    type: patient-chat
    scenarioId: prediabetes-mdm-tan
    objective: "Agree one realistic dietary swap and check her confidence."
    turnLimit: 8
    exitWhen: "patient agrees to a specific, safe change"
    goto: standard-counselling
    fallbackGoto: standard-counselling    # LLM disabled → continue seamlessly

  - id: standard-counselling
    type: info
    body: |
      You summarise, agree one change, and arrange a 3-month review.
    next: end-good

  - id: remedial
    type: info
    title: "A chance to reflect"
    body: |
      The advice was a little prescriptive. Remember: assess first, then agree
      one realistic, patient-centred change.
    next: end-partial

  - id: end-good
    type: end
    outcome: success
    title: "Patient-centred and realistic"
    body: |
      You assessed before advising and agreed one sustainable change.
    debrief:
      objectivesMet: [1, 2, 3]
      keyPoints:
        - "Assess intake before prescribing."
        - "One specific, achievable change beats a forbidden-foods list."

  - id: end-partial
    type: end
    outcome: partial
    title: "On the right track"
    body: |
      You reached a plan, but a more patient-centred approach would land better.
      Try replaying with different choices.
    debrief:
      objectivesMet: [2]
      keyPoints:
        - "Lead with assessment, not prescription."
        - "Co-create one realistic change rather than a list of bans."
```

---

## 7. Validation rules (enforced at build time)
- `id`s unique; `start` resolves to a node.
- Every `next` / `goto` / `fallbackGoto` resolves to an existing node `id`.
- Every non-`end` reachable node has an outgoing edge; warn on **orphan** (unreachable) nodes.
- At least one `end` node is reachable.
- `effects`/`branch` expressions reference only declared `variables`.
- `references` keys exist in `references.bib`.

Validation runs in the Quarto shortcode (fails the build with a clear message) and in a standalone
`validate-cases` script for CI. A **JSON Schema** for the format will live at
`components/lib/case.schema.json`.

---

## 8. How it maps to runtime
- The `case-player` loads the YAML, validates, and walks the graph.
- Run state (`currentNode`, `path[]`, `variables`, `completedEndings[]`) is saved to the `caseRuns`
  IndexedDB store keyed by case `id` — so a student can resume, and replay to discover other endings.
- `patient-chat` nodes call the LLM endpoint with `scenarioId` + objective; if the endpoint is absent
  or disabled, the player transparently takes `fallbackGoto`, so cases never break offline.

---

## 9. Pedagogy decisions & remaining format questions
**Decided (pilot):**
- **Formative, qualitative** — the debrief shows an `outcome` rating + prose; **no numeric score**.
- **One overall `quality`** variable drives branching and the debrief. The DSL still accepts multiple
  variables, so an individual case can add more dimensions later if needed.

**Still open:**
1. Progressive multi-step reveals *within* one node (click-to-reveal), or is one reveal per `info`
   node simple enough?
2. Multi-select MCQs in the pilot, or single-best-answer only?
