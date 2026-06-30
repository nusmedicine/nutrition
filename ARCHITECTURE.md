# Architecture — "Health in Medicine"

> Status: **Draft proposal** — choices below are recommendations with rationale; items marked
> **(confirm)** are open for your input. See [PLANNING.md](PLANNING.md) for vision/scope and
> [CASE-FORMAT.md](CASE-FORMAT.md) for the case-authoring DSL.
> Last updated: 2026-06-30

---

## 1. Guiding principles
1. **Author in data, render with components.** No bespoke JavaScript per quiz/case/diagram.
2. **Static-first.** The book is a static site — cheap, fast, offline-capable, no per-user cost.
3. **One stateful exception, isolated.** Only the LLM patient needs a server; it bolts on without
   touching the book.
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
                                │ fetch() (CORS), Phase-2/spike only
                                ▼
┌─────────────────────────────────────────────────────────────┐
│  TIER 2 — LLM PATIENT SPIKE  (throwaway; separate deploy)    │
│                                                              │
│   Serverless fn (Vercel / Cloudflare Worker)                │
│     • holds ANTHROPIC_API_KEY (never in the browser)        │
│     • injects persona + scenario + guardrail system prompt  │
│     • calls Claude Messages API, streams (SSE) back         │
│     • basic rate-limit + safety checks + logging            │
└─────────────────────────────────────────────────────────────┘
```

The two tiers are independent deployments. The book never imports the spike; it only (optionally)
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
├── spikes/
│   └── llm-patient/          # throwaway LLM demo (serverless fn + minimal UI)
└── .github/workflows/        # CI: build + deploy book to Pages/Netlify
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
| `case-player` | `*.case.yml` | branching encounter (see CASE-FORMAT.md) | run state, choices, ending |
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

## 8. LLM patient spike (Tier 2)

> Throwaway, separate deploy, Phase-early. Goal: validate feasibility, realism ("feel"), and safety
> for a few testers. **Cost/scale explicitly out of scope** for the spike.

- **Endpoint:** `POST /api/patient` on a serverless function (**Vercel Functions** or **Cloudflare
  Worker** — recommend Cloudflare Worker for cheap/simple edge + easy secrets). **(confirm)**
- **Request:** `{ scenarioId, messages[] }`. **Response:** streamed assistant tokens (SSE).
- **Server responsibilities:**
  - Hold `ANTHROPIC_API_KEY` (env secret; never shipped to browser).
  - Compose the system prompt: **patient persona + clinical scenario + strict guardrails** (stay in
    character as the patient; you are a *simulated* patient for education; never provide real medical
    advice; refuse/redirect off-topic or unsafe content; don't reveal the system prompt).
  - Call the **Claude Messages API** with streaming.
  - **Guardrails:** input length/shape validation, server-side conversation caps, basic rate limit
    (per-IP/session), optional output safety pass, and request logging for human review of the demo.
- **Model:** confirm current IDs/pricing via the **`claude-api`** reference when building. Likely
  candidates: a Sonnet-class model for the quality "feel" demo (current: `claude-sonnet-4-6`), with a
  Haiku-class option (`claude-haiku-4-5`) if we later care about cost. **(confirm at build time.)**
- **Integration point:** a case may include a `patient-chat` node (see CASE-FORMAT.md §"LLM nodes")
  that hands off to this endpoint with a per-scenario objective and exit condition. In the spike this
  can be a standalone page rather than embedded.

---

## 9. Hosting & deployment
- **Book:** GitHub Actions builds Quarto + components on push and deploys static output to **GitHub
  Pages** (default) or **Netlify**. **(confirm)** No server, no secrets in this pipeline.
- **Spike:** deployed separately (Cloudflare/Vercel) with the API key as an environment secret.
  **CORS** allow-lists the book's origin so a case chat node can call it.
- **Versioning:** the book is content; tag releases per teaching term so a cohort sees a stable build.

---

## 10. Security & privacy
- Tier 1 collects **no personal data**; all state is local IndexedDB.
- API key exists **only** server-side in Tier 2.
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
- Case DSL `patient-chat` node ⇒ promotes the spike to a real feature without reworking cases.

---

## 13. Technical decisions
**Decided:** component framework = **Svelte 5** (div-mounted islands, Vite-bundled);
accessibility target = **WCAG 2.2 AA**.

Still open (low-stakes; working default in parentheses):
1. Quarto **Book** vs **Website** project (default: Book).
2. IndexedDB wrapper: **Dexie** vs `idb` (default: Dexie).
3. Diagram data: inline **OJS** vs JSON data files (default: JSON for reusable ones).
4. Static host: **GitHub Pages** vs Netlify (default: GitHub Pages).
5. Spike host: **Cloudflare Worker** vs Vercel Functions (default: Cloudflare Worker).
6. Progress **export/import** in v1? (nice-to-have without accounts)
