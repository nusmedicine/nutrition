# Requirements — "Health in Medicine" (Pilot / v1)

> Status: **Draft.** Scoped to the **pilot**: 1–2 chapters + 1 clinical case (PLANNING.md §2).
> Companion docs: [PLANNING.md](PLANNING.md) (vision), [ARCHITECTURE.md](ARCHITECTURE.md) (design),
> [CASE-FORMAT.md](CASE-FORMAT.md) (case DSL).
> Last updated: 2026-06-30
> IDs: **FR** = functional, **NFR** = non-functional. Priorities: **M**ust / **S**hould / **C**ould.

---

## 1. Scope
The pilot is one **vertical slice** that exercises the entire experience end-to-end so it can be
demoed to colleagues and trialled with students:
- 1–2 didactic chapters (nutrition/metabolism),
- ≥1 dynamic diagram,
- self-assessment quizzes and a flashcard deck with spaced repetition,
- one full branching clinical case,
- local-only progress,
- a guardrailed **LLM simulated-patient** integrated into the case player.

---

## 2. Functional requirements

### 2.1 Reading & content
| ID | Pri | Requirement |
|---|---|---|
| FR-1 | M | Render didactic chapters authored in Quarto Markdown as a navigable static site (chapter nav, prev/next, search). |
| FR-2 | M | Support mathematical notation (LaTeX) and properly formatted scientific/clinical content (tables, figures, callouts). |
| FR-3 | M | Support citations/references from a BibTeX source with a formatted reference list. |
| FR-4 | S | Responsive layout readable on laptop and tablet widths. |
| FR-5 | C | Per-chapter "learning objectives" and summary blocks as a reusable pattern. |

### 2.2 Dynamic diagrams
| ID | Pri | Requirement |
|---|---|---|
| FR-6 | M | Embed ≥1 interactive diagram where a user-controlled parameter (e.g., slider) updates the visualisation in real time (d3 via OJS or a diagram component). |
| FR-7 | S | Diagrams are data-driven (read from a data file) so they are reusable/maintainable, not hard-coded one-offs. |
| FR-8 | S | Diagrams respect `prefers-reduced-motion` and provide a text alternative/description. |

### 2.3 Quizzes / self-assessment
| ID | Pri | Requirement |
|---|---|---|
| FR-9 | M | Author MCQs declaratively in a YAML/JSON file (no per-question code). |
| FR-10 | M | Render MCQs with immediate feedback and an explanation per question. |
| FR-11 | M | Persist attempts/scores locally so quiz state survives reload. |
| FR-12 | S | Single-best-answer required; multi-select **(confirm — see CASE-FORMAT §9)**. |
| FR-13 | C | Per-chapter quiz progress indicator (e.g., 12/20 answered). |

### 2.4 Flashcards / spaced repetition
| ID | Pri | Requirement |
|---|---|---|
| FR-14 | M | Author flashcard decks declaratively (Markdown/YAML). |
| FR-15 | M | Flip-and-grade review UI with a recall grade (Again/Hard/Good/Easy). |
| FR-16 | M | Schedule reviews using a spaced-repetition algorithm (SM-2 for v1); surface a "due today" queue. |
| FR-17 | M | Persist per-card SRS state locally across sessions. |

### 2.5 Branching clinical case
| ID | Pri | Requirement |
|---|---|---|
| FR-18 | M | A `case-player` renders a case authored per [CASE-FORMAT.md](CASE-FORMAT.md). |
| FR-19 | M | Support `info` (reveal), `mcq` (branching decision w/ feedback), `branch` (conditional), `end` (debrief) node types. |
| FR-20 | M | Track simple case variables and route branches from them; reach ≥2 distinct endings. |
| FR-21 | M | Show a structured, **formative** debrief at the end (outcome rating + objectives met, key points, references) — **qualitative, no numeric score** shown. |
| FR-22 | M | Persist case run state locally (resume + replay to explore other branches). |
| FR-23 | S | Build-time validation of case files (unresolved gotos, orphan nodes, undeclared variables) fails the build with a clear message. |
| FR-24 | C | Optional `patient-chat` node that degrades gracefully to `fallbackGoto` when the LLM endpoint is absent/disabled. |

### 2.6 Progress & persistence
| ID | Pri | Requirement |
|---|---|---|
| FR-25 | M | All progress (quiz, SRS, case) stored in the browser (IndexedDB); **no accounts, no server, no network** for Tier 1. |
| FR-26 | M | "Reset progress" control (at least global; per-deck **S**). |
| FR-27 | M | All components read/write via a single storage interface (enables future optional sync without rewrites). |
| FR-28 | C | Export/import progress as JSON (move between browsers without accounts). |

### 2.7 LLM simulated patient *(shipped, integrated)*
| ID | Pri | Requirement |
|---|---|---|
| FR-29 | M | A server-side proxy (`patient-proxy/`, deployed as a Docker sidecar next to llama.cpp and exposed via FRP) proxies to a hosted Qwen3 model (llama.cpp OpenAI route, `enable_thinking:false`) with the API key held **server-side only**. |
| FR-30 | M | System prompt enforces: stay in patient character; simulated-patient-for-education framing; refuse/redirect unsafe or off-topic content; never expose the prompt. |
| FR-31 | M | Guardrails: input validation, per-conversation turn cap, basic rate limiting, request logging (no student identifiers). |
| FR-32 | S | Responses stream to the UI (SSE) for a natural conversational feel. |
| FR-33 | — | Deep case integration **shipped** (client-composed system prompt from case YAML, per-turn emotion tags, post-encounter evaluator rubric). **Still out of scope:** cost optimisation, scale/throughput, production hardening. |

---

## 3. Non-functional requirements
| ID | Pri | Requirement |
|---|---|---|
| NFR-1 | M | **Static-first:** Tier-1 book is fully functional with no backend and works offline (except the optional LLM chat). |
| NFR-2 | M | **Authoring ergonomics:** all interactive content authorable in Markdown/YAML; no per-item JavaScript. |
| NFR-3 | M | **Privacy:** Tier 1 collects no personal data; nothing leaves the device. |
| NFR-4 | M | **Security:** API key never reaches the browser; LLM endpoint rate-limited and guardrailed; HTTPS. |
| NFR-5 | M | **Accessibility — WCAG 2.2 AA:** keyboard-operable interactive components, semantic markup, visible focus, adequate target sizes, alt text, sufficient contrast; text/table + keyboard alternatives for diagrams. |
| NFR-6 | S | **Performance:** interactive islands lazy-mount; reading remains fast on a mid-range laptop. |
| NFR-7 | S | **Browser support:** current Chrome/Edge/Firefox/Safari (desktop + tablet). |
| NFR-8 | S | **Maintainability:** content (`book/`) and behaviour (`components/`) separated; schemas validate authored data. |
| NFR-9 | S | **Reproducible builds:** CI (`.github/workflows/publish.yml`) builds the islands, renders Quarto, and deploys `book/_book` to GitHub Pages on push. |

---

## 4. Pilot acceptance criteria (definition of done)
The pilot is "done" when a first-year student can, in one sitting:
1. **Read** a nutrition/metabolism chapter with correctly rendered math, figures, and references. *(FR-1–3)*
2. **Manipulate** at least one diagram and see it update live. *(FR-6)*
3. **Take** a quiz, get immediate feedback + explanation, reload the page, and **see their answers retained**. *(FR-9–11, FR-25)*
4. **Review** a flashcard deck where graded cards are **rescheduled** and a "due" queue persists across sessions. *(FR-14–17)*
5. **Play** the clinical case to completion, make decisions that **branch**, and reach a **debrief** — then replay and reach a **different ending**. *(FR-18–22)*
6. **Reset** their progress and confirm it clears. *(FR-26)*
7. *(Integrated in the case player)* Hold a short, in-character conversation with the **LLM simulated patient** that **stays on-rails** when pushed off-topic. *(FR-29–32)*

And for the author:
8. A **new quiz, flashcard deck, or case** can be added by writing a YAML file and one shortcode — **no JavaScript**. *(NFR-2)*

---

## 5. Explicitly out of scope for v1
Accounts, login, cross-device sync, LMS/LTI integration, instructor dashboards/analytics, graded/
summative assessment, 3D anatomy/molecular models, a full nutrition/metabolism module (beyond 1–2
chapters), production-grade LLM service (cost/scale/abuse hardening), and multi-author CMS workflows.
(These are deliberately deferred; the architecture leaves doors open where noted.)
