# Planning — "Health in Medicine" Interactive E-Textbook

> Status: **Draft / in active planning**
> Last updated: 2026-06-30
> This is the living planning doc (vision, scope, decisions). Detail lives in companion docs:
> - **[REQUIREMENTS.md](REQUIREMENTS.md)** — pilot functional/non-functional spec + acceptance criteria.
> - **[ARCHITECTURE.md](ARCHITECTURE.md)** — technical design, repo layout, components, persistence, LLM spike.
> - **[CASE-FORMAT.md](CASE-FORMAT.md)** — the branching-case authoring DSL with a worked example.

---

## 1. Vision
An interactive web textbook, **"Health in Medicine,"** for **first-year medical students**,
focused on the department's teaching of **nutrition and metabolism**. It pairs didactic
material with **live, manipulable diagrams** and **clinical role-play cases** in which students
practise advising patients on maintaining and improving health through nutritional review and
advice. The goal is an integrated study system — read, explore, self-test, and rehearse clinical
reasoning — that is meaningfully better than a PDF or static site.

## 2. Subject & Scope
- **Subject:** Nutrition / metabolism (departmental first-year med curriculum).
- **Form:** A single, focused book to start (not yet a multi-book platform), built on
  reusable components so it *could* grow into one.
- **v1 content scope (pilot):** **1–2 chapters + 1 full clinical case** — the smallest
  end-to-end slice that exercises the entire experience (didactic text → dynamic diagram →
  quiz → flashcards → branching case) and can be demoed to colleagues/students.

## 3. Audience
- **Primary:** First-year medical students.
- Implications: reference-grade accuracy, citations, clinically authentic cases, formative
  self-assessment (not graded/summative).

## 4. Core Experience ("the wow")
1. **Dynamic didactic diagrams** — e.g. d3.js metabolic-flow figures with sliders/parameters
   that update in real time, so the biochemistry is explorable rather than static.
2. **Scenario-based clinical cases** — progressive patient encounters with MCQ decision points;
   information is revealed as the case advances; branching storylines for differing choices.

## 5. Clinical Cases — Model
- **Hybrid:** an **authored branching backbone** (deterministic decision tree: MCQ → reveal →
  branch) is the pedagogical core — predictable, assessable, free, offline-capable.
- **Optional LLM "talk to the patient"** free-text mode layered inside a case for realism —
  gated and guardrailed. De-risked via an early throwaway spike (see Roadmap); not required for
  the book to ship.

## 6. Interactive Components & Authoring Principle
**Principle: author in data, render with components.** All interactivity is declarative —
content is written as structured data and rendered by reusable components, so a solo author
rarely writes JavaScript.

| Content type | Authored as | Rendered by |
|---|---|---|
| Didactic text, math, citations | `.qmd` Markdown + LaTeX + BibTeX | Quarto (native) |
| Simple reactive diagrams | Observable JS (OJS) cells inline | Quarto OJS (native) |
| Complex/reusable d3 visualizations | `<div>` + data via shortcode | bundled d3 component |
| MCQs / quizzes | YAML/JSON question blocks | quiz web component |
| Branching clinical cases | **case file** (nodes/choices/reveals/branches) | "case player" component |
| Flashcards / spaced repetition | Markdown/YAML cards | SR component (SM-2 scheduling) |
| Progress state | — | IndexedDB (local-only, no login) |

The **case-file DSL is the highest-leverage design artifact** — getting it right makes rich
branching encounters authorable without code.

## 7. Accounts & Data
- **No accounts, no backend** for the book itself.
- Quiz / flashcard / case progress persists **locally in the browser (IndexedDB)** — preserves
  "no tracking" while making spaced repetition and quiz history functional.
- Architecture leaves a door open for optional accounts / cross-device sync later, without a rewrite.

## 8. Tech Stack & Hosting
- **Authoring & site:** Quarto → static HTML site.
- **Interactivity:** Observable JS (native) + custom JS web components / Quarto shortcodes,
  bundled as static assets (esbuild/Vite).
- **Hosting (book):** public static host — GitHub Pages / Netlify / Quarto Pub.
- **LLM spike (separate):** serverless function (Vercel / Cloudflare / Netlify) holding the API
  key + system prompt + guardrails; default provider **Claude (Anthropic)**. Throwaway, not
  yet integrated into the case format.

## 9. Roadmap
- **Phase 0 — Foundations:** Quarto project + theme, deploy pipeline, repo structure, one
  sample chapter, declarative authoring conventions.
- **Phase 1 — Study primitives:** MCQ + flashcard/SR components, IndexedDB progress layer,
  first OJS/d3 diagram. Prove the read → quiz → review loop on one chapter.
- **Phase 2 — Case player:** design the case DSL, build the branching case player, author 1–2
  full cases.
- **Phase 3 — Content build-out:** author the real chapters and cases (the long pole; solo).
- **LLM spike (parallel, early):** throwaway guardrailed Claude patient chat as a
  **feasibility & feel demo** (you + a few testers). Optimise for realism and safety; cost and
  rate-limits are deliberately deferred. Validates the idea before any production integration.

## 10. Team & Constraints
- **Builder/author:** solo (you) for now; faculty collaborators possible later → favour
  low-friction, Markdown-based authoring.
- **Budget/timeline:** _TBD._

---

## Open Questions
*(Deferred until closer to building — none block starting the pilot.)*
1. Offline / PWA support needed?
2. Target devices — desktop-first or significant mobile use?
3. Visual identity / NUS branding requirements?
4. Specialised content needs — chemical structures, pathway notation, units handling?
5. Flashcard sourcing — authored separately, or auto-extracted from tagged content?
6. Which 1–2 chapters and which case become the pilot subject matter? (content choice)
7. Confirm NUS's official accessibility policy (we design to WCAG 2.2 AA, which satisfies 2.1 AA too).

---

## Decision Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-06-30 | Title "Health in Medicine"; subject = nutrition/metabolism; audience = first-year med | User |
| 2026-06-30 | Single focused book first, on reusable components (platform-capable later) | User |
| 2026-06-30 | Core interactivity: dynamic d3 diagrams + scenario-based clinical cases | User |
| 2026-06-30 | Cases = hybrid (authored branching backbone + optional guardrailed LLM chat) | User |
| 2026-06-30 | LLM = early throwaway spike to de-risk; book ships without it | User |
| 2026-06-30 | Authoring in Quarto; "author in data, render with components" principle | User + design |
| 2026-06-30 | No accounts/backend; local-only IndexedDB progress | Reconciles "no tracking" with stateful SR/quiz/case features |
| 2026-06-30 | Public static hosting for the book; serverless only for LLM spike | User |
| 2026-06-30 | v1 = pilot: 1–2 chapters + 1 case (full vertical slice) | User |
| 2026-06-30 | LLM spike = feasibility & feel demo for a few users; cost/scale deferred | User |
| 2026-06-30 | Component framework = **Svelte 5** (div-mounted islands, Vite-bundled) | High-impact decision |
| 2026-06-30 | Accessibility target = **WCAG 2.2 AA** | High-impact decision |
| 2026-06-30 | Cases = **formative**, qualitative debrief (no numeric score shown) | High-impact decision |
| 2026-06-30 | Cases track a **single overall `quality`** dimension (DSL still supports more) | High-impact decision |
| 2026-06-30 | Zero-install case-player prototype built & verified (branching, both endings, persistence/resume, graceful LLM fallback) | `prototype/case-player.html` |
| 2026-06-30 | Real stack stood up & verified: Quarto book + Svelte 5 case-player island mounted in-page, both endings, KaTeX math | Portable Node/Quarto installs; `npm install` required firewall unblock for `node.exe` |
| 2026-06-30 | Energy-balance chapter built & verified: didactic → **quiz island** → **BMR-synced case** (BMR via MCQ-computed options) | New `quiz` island; `book/quizzes/`, `book/cases/bmr-estimation.case.yml` |
