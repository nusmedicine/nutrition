# HANDOVER — continue in a new session

> Snapshot for picking this project up fresh. Last updated: 2026-06-30.
> Branch: **`curriculum-restructure`** (off `master`). All work is committed (see §Git state).

## 1. What this is
**"Health in Medicine"** — an interactive web **e-textbook** (Quarto + Svelte) on **nutrition &
lifestyle medicine** for **first-year medical students** (NUS). It blends didactic chapters with
live diagrams, self-test quizzes, and branching **clinical cases** (a custom case-player), and a
planned optional **LLM "patient" roleplay**. Backed by an evidence-grounded **research repository**
(`research/`) that maps the curriculum chapter-by-chapter.

## 2. Where we are
- **Book (pilot works):** a Quarto book renders with one fully-built chapter (energy balance) that
  embeds a **quiz island** and a **branching BMR case** — both verified working in-browser. The
  interactive components (Svelte 5 islands + Vite) are built and integrated.
- **Research (mostly done):** 14 web-grounded, adversarially-verified **chapter dossiers**, an
  **evidence library** (guideline register, key studies, 90-entry `references.bib`), and a
  **curriculum map**. All produced via multi-agent research workflows.
- **Curriculum (just restructured):** reorganised into a **4-part, 21-chapter** spine, with Part I
  sequencing settled from a textbook/physiology survey. **This is the current source of truth →
  [`research/00-overview/curriculum-map.md`](research/00-overview/curriculum-map.md).**

## 3. Immediate next steps (the TODO)
1. **Research the net-new chapters** (same workflow pattern: web-grounded draft → adversarial
   verify → write dossier to `research/chapters/NN-slug.md` from
   [`research/chapters/_template.md`](research/chapters/_template.md)):
   - Ch.5 **Digestion & Absorption** ✨, Ch.6 **Gut Microbiome** ✨, Ch.7 **Integrative Metabolism** ✨,
     Ch.8 **Appetite & Weight Regulation** ✨, Ch.17 **Bone Health & Osteoporosis** ✨, Ch.18 **Menopause** ✨.
   - **Expand** Ch.13 (everyday questions — food & acne, fatigue, gut comfort) from the existing
     `07-evidence-literacy` dossier.
   - **Split out** Ch.19 (undernutrition) from `08-life-cycle-undernutrition`.
   - Follow the **Part I authoring principles** and the **overlap-ownership table** in the
     curriculum map (e.g. gut hormones defined in Digestion, reused in Appetite).
2. **Author chapters into the book** from 🟢 dossiers → `book/chapters/*.qmd`, following
   [`AUTHOR.md`](AUTHOR.md); add a quiz + case island per chapter (data in `book/quizzes/`,
   `book/cases/`). Macronutrients (`book/chapters/macronutrients.qmd`) is currently a stub to flesh out.
3. **Citation hygiene at authoring time** — see [`research/ideas/backlog.md`](research/ideas/backlog.md)
   (some dossiers cite sources by raw identifier; align in-text keys to `references.bib`).
4. **LLM patient spike** — planned for the **capstone (Ch.21)**; design the case-format handoff +
   build the guardrailed serverless Claude endpoint when content chapters exist
   (see [`ARCHITECTURE.md`](ARCHITECTURE.md) §8, [`CASE-FORMAT.md`](CASE-FORMAT.md) §4.5).

## 4. Repository map
```
PLANNING.md REQUIREMENTS.md ARCHITECTURE.md AUTHOR.md CASE-FORMAT.md README.md   ← governance/spec docs
book/                 Quarto book — chapters/ (.qmd), quizzes/ (*.quiz.yml), cases/ (*.case.yml)
components/           Svelte 5 islands (CasePlayer, Quiz) + engine (src/lib/) + Vite build
prototype/            zero-install case-player prototype (throwaway)
research/             evidence repo:
  00-overview/        curriculum-map.md (THE SPINE), learning-outcomes.md, frameworks.md
  chapters/           14 dossiers + _template.md  (→ becoming 21 per the new map)
  evidence/           guidelines.md, key-studies.md, references.bib (90), grading.md
  cases/ topics/ ideas/   case bank · cross-cutting topics · backlog
```
Read order for a newcomer: this file → `research/00-overview/curriculum-map.md` → `AUTHOR.md` →
a sample dossier (`research/chapters/11-type-2-diabetes.md`).

## 5. How to build & run (details in [AUTHOR.md](AUTHOR.md) / [README.md](README.md))
```sh
npm --prefix components run build     # Svelte islands -> book/assets/components.js|css
quarto render book                    # -> book/_book/ (the deployable static site)
quarto preview book                   # live-reloading local preview
```
**Test interactivity over HTTP** (not `file://` — islands fetch their YAML and `file://` blocks it):
`quarto preview book`, or `python -m http.server` inside `book/_book/`.

## 6. Environment gotchas (IMPORTANT)
- **Portable toolchain, no admin:** Node 24 LTS at `%LOCALAPPDATA%\node\current`, Quarto 1.9 at
  `%LOCALAPPDATA%\quarto\current\bin`. Added to the **user PATH** (new *interactive* terminals see them).
- **Automation shells inherit a frozen env** → in scripted PowerShell/Bash, **prepend** the tool paths
  per command: `$env:PATH = "C:\Users\Admin\AppData\Local\node\current;C:\Users\Admin\AppData\Local\quarto\current\bin;$env:PATH"`.
- **Firewall blocks `node.exe` outbound by default** (this is an NUS-managed machine). It was unblocked
  to run `npm install`. If a fresh session can't reach the npm registry from node (but PowerShell can),
  that block is back — needs unblocking again. (Builds/renders work offline; only `npm install` needs network.)
- **This is inside a Dropbox folder** → expect Git "LF will be replaced by CRLF" warnings (harmless);
  `node_modules/`, `book/_book/`, `.quarto/`, and built `book/assets/components.*` are **gitignored**.
- **Sandbox:** some network ops needed `dangerouslyDisableSandbox` earlier; the node-firewall issue was
  OS-level, not the sandbox.

## 7. Key decisions (don't re-litigate — see [PLANNING.md](PLANNING.md) decision log)
- Audience: first-year med (NUS). Stack: **Quarto** (static) + **Svelte 5** islands; **no accounts**,
  local-only IndexedDB progress; public static hosting; **WCAG 2.2 AA**.
- Cases: **hybrid** — authored branching backbone + optional guardrailed **LLM** patient (capstone).
- Cases are **formative** (qualitative debrief, no score), tracking a single overall `quality` var.
- Curriculum: **nutrition-led, lifestyle-medicine framed, Singapore-first** (HPB/MOH) + international.
- **4-part / 21-chapter** spine; **Part I sequencing**: Energy → Macros → Micros → Digestion →
  Microbiome → Integrative Metabolism → Appetite (digestion-before-metabolism-before-appetite).
- Part I authoring principles: function-led nutrient chapters (no laundry lists); RDA concept +
  embedded values + appendix; diet history = Part II skill + early taster; appetite bookends energy balance.
- Conditions scope (v1): cardiometabolic core + **osteoporosis + menopause**; arthritis/skin/GI deferred to Phase 2.

## 8. How the research was done (reuse the pattern)
Multi-agent **Workflow** runs (ultracode): parallel web-grounded research streams → schema-validated
synthesis → **adversarial verification** (claims fact-checked, trial caveats enforced, first-year depth).
Dossiers were drafted then verified one agent each, written to files via a small Node parse script.
**Note:** the workflow *scripts/outputs* live under the session's transcript dir (not portable to a new
session) — but all **results are in `research/`** already. A new session just re-authors workflows as needed.

## 9. Open items / risks
- Citation hygiene (raw-identifier keys in some dossiers) — tidy at authoring time (backlog.md).
- The two standalone foundation chapters (Appetite, Microbiome) have **no textbook precedent** — a
  deliberate lifestyle-medicine choice; flag for faculty reviewers.
- Ch.7 Integrative Metabolism assumes a **synchronised biochem course** teaches the individual pathways.
- Deployment base-path: island `data-src` uses site-root-absolute paths; a GitHub Pages *project* site
  (subpath) needs base-path handling (ARCHITECTURE.md §13 / AUTHOR.md §8).
- Parts II & III have **not** had the same sequencing scrutiny as Part I (optional next refinement).

## 10. Git state
- Branch **`curriculum-restructure`**; commits: `1f0229b` baseline → `19cdc5f` restructure → (this handover).
- Local git identity set in-repo: `Kenneth Ban Hon Kim <kennethban@gmail.com>`.
- `master` holds the baseline; the restructure lives only on the branch.
