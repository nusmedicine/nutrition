# Architecture — "Health in Medicine"

> Status: **Shipped** — the core system, including the guardrailed LLM simulated patient, is built
> and deployed. A few low-stakes options below remain marked **(confirm)**. See [PLANNING.md](PLANNING.md)
> for vision/scope and [CASE-FORMAT.md](CASE-FORMAT.md) for the case-authoring DSL.
> Last updated: 2026-07-02

---

## 1. Guiding principles
1. **Author in data, render with components.** No bespoke JavaScript per quiz/case/diagram.
2. **Static-first.** The book is a static site — cheap, fast, offline-capable, no per-user cost.
3. **One stateful exception, isolated.** Only the LLM patient needs a server; it bolts on (via a
   server-side proxy) without touching the book.
4. **Local-only state, abstracted.** Progress lives in the browser behind a storage interface, so
   optional cloud sync can be added later without rewriting components.
5. **Solo-author ergonomics win ties.** Prefer the option that keeps content authorable in
   Markdown/YAML over the one that is marginally more powerful but needs code.

---

## 2. System tiers

```
┌─────────────────────────────────────────────────────────────┐
│  TIER 1 — STATIC BOOK  (the deliverable; ships on its own)    │
│                                                              │
│   Quarto (.qmd)  ──build──▶  static HTML/CSS/JS site         │
│     • didactic text, math (KaTeX), citations (BibTeX)        │
│     • OJS cells ............... reactive d3 diagrams         │
│     • component shortcodes .... quiz / flashcard / case      │
│                                    │                         │
│                                    ▼                         │
│         Interactive islands (compiled web components)        │
│                                    │                         │
│                                    ▼                         │
│              IndexedDB  (progress, SRS, case state)          │
│                                                              │
│   Hosting: GitHub Pages / Netlify / Quarto Pub (static CDN)  │
└───────────────────────────────┬─────────────────────────────┘
                                │ fetch() (CORS, SSE stream)
                                ▼
┌─────────────────────────────────────────────────────────────┐
│  TIER 2 — LLM PATIENT PROXY  (shipped; separate deploy)      │
│                                                              │
│   patient-proxy/ — zero-dep Node app (Docker sidecar next   │
│   to llama.cpp; exposed via FRP at patient-api.phm.nusmed…) │
│     • holds the API key (never in the browser)              │
│     • forwards client-composed system prompt + messages     │
│     • calls Qwen3.6-35B-A3B via llama.cpp /v1, streams SSE  │
│     • post-encounter evaluator returns a JSON rubric        │
└─────────────────────────────────────────────────────────────┘
```

The two tiers are independent deployments. The book never imports the proxy; it only (optionally)
`fetch()`es the patient endpoint from within a case's chat node.

---

## 3. Repository layout (monorepo)

```
book-health/
├── PLANNING.md  REQUIREMENTS.md  ARCHITECTURE.md  CASE-FORMAT.md
├── book/                     # Quarto project (the textbook)
│   ├── _quarto.yml           # book config, nav, theme
│   ├── index.qmd
│   ├── chapters/             # didactic content (.qmd)
│   ├── cases/                # *.case.yml  (branching cases — see CASE-FORMAT.md)
│   ├── quizzes/              # *.quiz.yml  (question banks)
│   ├── cards/                # *.cards.yml (flashcard decks)
│   ├── references.bib        # citations
│   └── _extensions/          # Quarto shortcodes (quiz, case, flashcard, diagram)
├── components/               # source for interactive islands
│   ├── src/                  # Svelte components (quiz, case-player, flashcards, srs)
│   ├── lib/                  # storage (IndexedDB), srs algorithm, schema validation
│   └── vite.config.*         # bundles to book/_extensions/.../assets/*.js|css
├── patient-proxy/            # zero-dep Node proxy (holds API key; Docker sidecar to llama.cpp, FRP-exposed)
├── spikes/
│   └── llm-patient/          # adversarial guardrail eval battery + prototype UI
└── .github/workflows/        # publish.yml: build islands + render Quarto + deploy book/_book to Pages
```

Rationale: content (`book/`) and behaviour (`components/`) are separate so you edit YAML/Markdown
day-to-day and only touch JS when changing a component. The spike is quarantined under `spikes/`.

---

## 4. Build & bundling
- **Book:** `quarto render` produces the static site. **(confirm)** Quarto *Book* project (chaptered,
  with built-in prev/next + search) vs *Website* — recommend **Book**.
- **Components:** authored in **Svelte 5** *(decided)* and bundled by **Vite**. Each component is
  **mounted onto a placeholder `<div>`** by a small site-wide loader, rather than using Svelte's
  custom-element mode — this keeps embedding robust and sidesteps custom-element edge cases. Svelte
  compiles to tiny vanilla JS with no framework runtime shipped to the page — ideal for "islands"
  in a static doc.
  - *Considered and not chosen for the pilot:* Lit/Web Components (excellent longevity, but more
    boilerplate for the stateful case player); React/Preact (heavier runtime, not justified here).
- **Output:** Vite emits one shared `components.js` + `components.css` into the Quarto extension's
  assets; Quarto includes them site-wide via the extension. Tree-shaken; lazy-mount per island.
- **Math:** KaTeX (fast) via Quarto. **Citations:** BibTeX via Quarto's native `@key` + CSL.

---

## 5. Interactive component model

### 5.1 How an island gets onto a page
Author writes a **shortcode**; the extension emits a mount point + JSON data; the component hydrates it.

```markdown
<!-- in a .qmd chapter -->
{{< quiz quizzes/energy-balance.quiz.yml >}}
{{< flashcards cards/glycolysis.cards.yml >}}
{{< case cases/prediabetes-counseling.case.yml >}}
```

Each shortcode resolves the file, validates it against a schema at build time, and renders:

```html
<div data-island="quiz" data-src="quizzes/energy-balance.quiz.yml"></div>
```

A small site-wide loader scans for `[data-island]` placeholders and mounts the matching Svelte
component into each, reading its data. Authors never write HTML/JS.

### 5.2 Reactive diagrams
- **Simple / one-off** (slider → recompute → redraw): **Observable JS (OJS)** cells written inline in
  the `.qmd`. Native to Quarto, reactive, pairs naturally with d3. No build step.
- **Reusable / complex** (a parameterised "metabolic flow" used in several chapters): a
  `{{< diagram metabolic-flow ... >}}` shortcode backed by a d3 module in `components/`.
- **(confirm)** Diagram data source: inline OJS vs JSON files in `book/data/`. Recommend JSON files
  for anything non-trivial so diagrams are data-driven and reusable.

### 5.3 Component inventory (pilot)
| Component | Input | Behaviour | Persists |
|---|---|---|---|
| `quiz-block` | `*.quiz.yml` | MCQ, instant feedback, explanation reveal, scoring | attempts, scores |
| `flashcards` | `*.cards.yml` | flip cards, grade recall, SM-2 scheduling, due queue | SRS state per card |
| `case-player` | `*.case.yml` | branching encounter, incl. `patient-chat` LLM node (see CASE-FORMAT.md) | run state, choices, ending |
| `metabolic-diagram` | JSON / OJS | parameterised d3 visualisation | none |

---

## 6. Client-side state & persistence

- **Store:** IndexedDB via a thin wrapper (**Dexie** recommended for ergonomic schema/queries;
  `idb` if we want minimal deps). **(confirm)**
- **Abstraction:** all components talk to a `ProgressStore` interface, **not** IndexedDB directly.
  This is the seam where a future sync/account backend slots in.
- **Object stores (v1 schema):**

| Store | Key | Fields (sketch) |
|---|---|---|
| `quizAttempts` | `quizId:questionId` | choice, correct, attempts, lastAttemptAt |
| `srs` | `cardId` | ease, intervalDays, dueAt, reps, lapses, lastGrade |
| `caseRuns` | `caseId` | currentNode, path[], variables{}, completedEndings[], updatedAt |
| `settings` | `key` | theme, reducedMotion, fontScale, … |

- **Schema versioning:** stores carry a `schemaVersion`; Dexie migrations handle upgrades. No silent
  data loss on schema change.
- **Controls:** a "reset my progress" action (per-deck and global); export/import JSON
  **(confirm — nice-to-have)** so a student can move progress between browsers without accounts.
- **No PII, no network.** Tier-1 state never leaves the device.

---

## 7. Spaced-repetition algorithm
- **SM-2** (the Anki-classic) for v1 — well understood, simple, good enough. Card state: ease factor,
  interval, due date, repetitions, lapses. Grades on a 4-button scale (Again/Hard/Good/Easy).
- Encapsulated in `components/lib/srs.ts` so the scheduler can be swapped (e.g., FSRS) later without
  touching the UI.

---

## 8. LLM patient (Tier 2)

> Built, guardrail-validated, and deployed. Students talk to a live simulated patient inside the
> CasePlayer. Guardrails held **32/32** on the adversarial probe battery (`spikes/llm-patient/eval/`).

- **Endpoint:** the `patient-proxy/` zero-dep Node app, deployed as a Docker sidecar next to
  llama.cpp and exposed via FRP at `patient-api.phm.nusmed.space`.
- **Request:** `{ messages[] }` with a **client-composed** system prompt (no server-side scenario
  config). **Response:** streamed assistant tokens (SSE).
- **Server responsibilities:**
  - Hold the API key (env secret; never shipped to browser).
  - Forward the **client-composed** system prompt (patient persona + private `brief` + objective +
    guardrails) and message history to the model.
  - Call **Qwen3.6-35B-A3B** via the llama.cpp OpenAI route (`/v1`, `enable_thinking:false`), streaming SSE.
  - **Evaluator:** a post-encounter call returns a JSON rubric (feedback) for the student.
- **Model:** **Qwen3.6-35B-A3B**, served by a llama.cpp router on the OpenAI route (`/v1`), called
  with `enable_thinking:false`.
- **Portrait/emotion:** the patient emits a per-turn `(emotion)` tag that drives the portrait sprite.
- **Integration point:** a case includes a `patient-chat` node (see CASE-FORMAT.md §"LLM nodes") that
  hands off to this endpoint. It runs embedded in the CasePlayer, with graceful degradation (no
  endpoint → placeholder + `fallbackGoto`).

---

## 9. Hosting & deployment
- **Book:** GitHub Actions builds Quarto + components on push and deploys static output to **GitHub
  Pages** (default) or **Netlify**. **(confirm)** No server, no secrets in this pipeline.
- **Patient proxy:** the `patient-proxy/` Node app is deployed separately as a Docker sidecar to
  llama.cpp (FRP-exposed at `patient-api.phm.nusmed.space`) with the API key as an environment
  secret. **CORS** allow-lists the book's origin so a case chat node can call it. Local dev uses
  `scripts/patient-proxy.ps1` plus a localhost-only `?patient-llm=…` override in config.js.
- **Versioning:** the book is content; tag releases per teaching term so a cohort sees a stable build.

---

## 10. Security & privacy
- Tier 1 collects **no personal data**; all state is local IndexedDB.
- API key exists **only** server-side in Tier 2 (the `patient-proxy/`); it never reaches the browser.
- LLM endpoint: rate-limited, conversation-capped, guardrailed, and logged **without** student
  identifiers. Make the "this is a simulated patient" framing explicit in-UI.
- Static site served over HTTPS; standard security headers via host config.

---

## 11. Performance & accessibility (baseline)
- Islands are **lazy-mounted** (only hydrate components actually on screen) to keep reading fast.
- KaTeX over MathJax for render speed.
- Respect `prefers-reduced-motion` in diagrams/animations.
- **Accessibility target: WCAG 2.2 AA** *(decided)*. Practically: semantic HTML, keyboard-operable
  quizzes/cards/case-player, visible focus, adequate target sizes, and **text/table alternatives +
  keyboard controls** for diagrams (rather than making the SVG canvas itself a full screen-reader
  experience). Designing to 2.2 AA also satisfies any policy that cites 2.1 AA.

---

## 12. Forward compatibility (deliberately left open)
- `ProgressStore` interface ⇒ optional accounts + cloud sync later.
- Component shortcodes + schemas ⇒ reusable across future books (platform path).
- Case DSL `patient-chat` node ⇒ the shipped LLM patient; a NEW "Integrated cases" chapter
  (`book/chapters/cases.qmd`) holds the chat-forward encounters, while choice-based (MCQ) cases stay
  in their chapters (two-versions model).

---

## 13. Technical decisions
**Decided:** component framework = **Svelte 5** (div-mounted islands, Vite-bundled);
accessibility target = **WCAG 2.2 AA**.

Still open (low-stakes; working default in parentheses):
1. Quarto **Book** vs **Website** project (default: Book).
2. IndexedDB wrapper: **Dexie** vs `idb` (default: Dexie).
3. Diagram data: inline **OJS** vs JSON data files (default: JSON for reusable ones).
4. Progress **export/import** in v1? (nice-to-have without accounts)

Resolved: static host = **GitHub Pages** (CI via `.github/workflows/publish.yml`); patient host =
the `patient-proxy/` Node sidecar to llama.cpp (FRP-exposed). The deployment **base-path** is also
resolved: `components/src/lib/base.js` exports `resolveAsset()`, which derives the site root at
runtime from the bundle's own URL, so islands work at a domain root or a GitHub project subpath
(verified live).
