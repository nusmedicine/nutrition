# HANDOVER — continue in a new session

> Snapshot for picking this project up fresh. **Last updated: 2026-07-01.**
> Branch: **`curriculum-restructure`** (base: `master`). All work is committed (see §10).
> Read order: this file → [`AUTHOR.md`](AUTHOR.md) **§11 (chapter template)** →
> [`book/chapters/macronutrients.qmd`](book/chapters/macronutrients.qmd) (the worked example) →
> [`research/00-overview/curriculum-map.md`](research/00-overview/curriculum-map.md) (the spine).

## 1. What this is
**"Health in Medicine"** — an interactive web **e-textbook** (Quarto + Svelte 5 islands) on
**nutrition** for **first-year medical students (NUS)**. Didactic chapters + live diagrams +
self-test quizzes + branching **clinical cases**. Backed by an evidence repo (`research/`).
Branding note: it is **"Health in Medicine"**, *not* framed as "lifestyle medicine" (the term
was deliberately dropped from student-facing text; the six-pillar science stays, cited).

## 2. Where we are (much further than the last handover)
**Part I is a working, richly-built pilot.** Authored & verified in-browser:
- **Preface** ([`index.qmd`](book/index.qmd)) — "Health in Medicine", anchored to Healthier SG.
- **Ch.1 Why nutrition matters** — six pillars, nutrition-as-hub; quiz + pillar-mapping case.
- **Ch.2 Energy balance** — the *original pilot* (pre-template); quiz + BMR case.
- **Ch.3 Macronutrients** — **THE template reference**: per-nutrient 5-beat anatomy + the
  🔬🍜🍳 "science→plate" triad, structural-chemistry depth, **GI island**, **molecule island**,
  figures/photos, and a multi-macro **"common questions" case**.
- **Ch.4 Micronutrients & hydration** — deficiencies, fluid/electrolytes, SG sodium + SSaSS;
  quiz + iron-deficiency case. *(Authored pre-template — a candidate to refactor to the shape.)*

**Interactive islands now built** (Svelte 5, `components/src/`, registered in `main.js`):
`quiz`, `case` (CasePlayer), **`gi`** (GlucoScale — glycaemic index/load), **`molecule`**
(2D formula + 3D 3Dmol.js, lazy-loaded). Islands hydrate from `data-src` YAML.

**The chapter template is codified** in **[`AUTHOR.md`](AUTHOR.md) §11** — five-beat anatomy
(*What it is · What it does · From plate to cell · Quality · From science to plate*), the
🔬 Food science / 🍜 Eating out / 🍳 Healthy kitchen callouts, the chapter skeleton, and house
rules. **Macronutrients is the worked example; copy it.**

## 3. Immediate next steps (the TODO)
1. **Fold in colleague feedback** on Macronutrients (depth pitch, the Mr Lim case) → update the
   chapter *and* the AUTHOR.md §11 template so the settled shape propagates.
2. **Retro-fit the template** to the pre-template chapters: **Ch.4 Micronutrients** (per-nutrient
   5-beat + triad), and give **Ch.1 / Ch.2** the 🍜🍳 house blocks where they fit.
3. **Author the ✨ net-new chapters** — need **research dossiers first** (see the curriculum map;
   dossier template `research/chapters/_template.md`): Ch.5 Digestion & Absorption, Ch.6 Gut
   Microbiome, Ch.7 Integrative Metabolism, Ch.8 Appetite, Ch.17 Osteoporosis, Ch.18 Menopause.
   The `molecule`/`gi` islands and the figure/photo pipeline are reusable.
4. **Register new chapters** in `book/_quarto.yml` (Part I currently lists Ch.1→4; add Parts II–IV).
5. **Deployment** (later): subpath/base-path handling for island `data-src` (ARCHITECTURE.md §13);
   the LLM patient-chat endpoint (capstone Ch.21) is designed but not built.

## 4. How to build & preview (IMPORTANT — read §6 first)
Use the helper — it sets its own PATH and dodges the file-lock:
```powershell
.\scripts\preview.ps1            # build islands, render out-of-tree (lock-proof), serve, open browser
.\scripts\preview.ps1 -Live      # Quarto live-reload IN PLACE (needs a Defender exclusion, §6)
.\scripts\preview.ps1 -SkipBuild -Port 9000
```
Manual equivalents (from a **Start-menu** terminal, not a Claude-Desktop one — see §6):
```
npm --prefix components run build     # Svelte islands -> book/assets/components.js|css (+ lazy chunks)
quarto render book                    # -> book/_book/ (deployable static site)
```
Islands need **HTTP** (not `file://`). `book/assets/` is fully **gitignored** (generated bundle+chunks).

## 5. Component / island mechanics
- Edit a chapter `.qmd` → re-render. Edit a quiz/case/diagram `.yml` → re-render (data is fetched
  at runtime; hard-refresh). Edit a component (`components/src/**`) → `npm run build` then re-render.
- Add an island type in `components/src/main.js` REGISTRY (developer step). Current: `case, quiz, gi, molecule`.
- **`molecule` island**: 3Dmol.js is **lazy-loaded** via dynamic `import('3dmol')`, so non-molecule
  pages stay ~52 KB gzip and only molecule pages pull the ~226 KB chunk. 2D SVG + 3D SDF are both
  generated from the same SMILES (RDKit) — see the memory note [[chemical-structure-and-image-rendering]].
- Data folders must be in `book/_quarto.yml` `resources:` — currently `assets cases quizzes diagrams structures figures`.

## 6. Environment gotchas (this machine — READ THESE)
- **Render file-lock (`os error 32`)** on in-place `quarto render book`: caused by **Windows
  Defender real-time scan + the Dropbox watcher + Windows Search indexer** touching `book/.quarto/`
  mid-render (NOT a leftover process — verified). Fixes: `scripts/preview.ps1` renders out-of-tree
  (lock-proof, no admin); OR one-time admin `Add-MpPreference -ExclusionPath "<repo>"` + pause
  Dropbox during renders, then in-place works. Memory: [[dropbox-quarto-render-lock]].
- **Claude-Desktop terminals have a stale/redirected env**: `%LOCALAPPDATA%\node\current` is a
  *junction into the Claude packaged-app cache*, and MSIX redirection can hide `quarto`/`npm` from
  PATH. Use a **Start-menu** PowerShell (normal user PATH → tools resolve), or run `preview.ps1`
  (it locates node/quarto by full path).
- **Portable toolchain**: Node 24 + npm 11 at `%LOCALAPPDATA%\node\current`; Quarto 1.9.38 at
  `%LOCALAPPDATA%\quarto\current\bin`. **RDKit 2026.03.3 is already installed** in the local Python
  (used to generate structures); `pip`/`npm install` need `node.exe`/`python.exe` allowed **outbound
  through the firewall** — currently node's outbound works, python's `pip` is blocked (but RDKit is
  already there). Downloading via **PowerShell `Invoke-WebRequest` works** (used for PubChem/Commons).
- **Dropbox folder** → expect harmless Git "LF will be replaced by CRLF" warnings.
- In automation shells, prepend tool paths per command:
  `$env:PATH = "$env:LOCALAPPDATA\node\current;$env:LOCALAPPDATA\quarto\current\bin;$env:PATH"`.

## 7. Key decisions this session (don't re-litigate)
- **Branding: "Health in Medicine"**, not "lifestyle medicine" (dropped from student text; the six
  pillars are taught as "the six pillars of health", still cited to ACLM/Lianov in the bibliography).
- **Chapter template** (AUTHOR.md §11): five-beat anatomy + the 🔬🍜🍳 triad. Substantive science in
  **main prose**; callouts reserved for the practical 🍜/🍳 and the focused 🔬 aside.
- **Structures**: 2D via RDKit SVG (correct cis/trans — SmilesDrawer is *wrong* for it); 3D via
  **3Dmol.js** (lazy) on precomputed SDFs; extended conformers (all-anti backbone) so the cis kink
  shows. **Mol\*** only if real proteins arrive later.
- **Images**: CC0/PD/CC-BY/CC-BY-SA only (**no NC/ND**); attribute in caption; log every file in
  `book/figures/CREDITS.csv`. **Do NOT use HPB/HealthHub images** (all rights reserved).
- **Cases**: formative, single `quality` var, success/partial endings, optional patient-chat that
  degrades gracefully (LLM off → `fallbackGoto`).

## 8. Repository map (updated)
```
HANDOVER.md PLANNING.md REQUIREMENTS.md ARCHITECTURE.md AUTHOR.md(§11=template) CASE-FORMAT.md README.md
scripts/preview.ps1              local preview helper (lock-proof; self-locates node/quarto)
book/
  index.qmd                      Preface
  _quarto.yml                    chapters (Part I ×4), theme, resources, lightbox, bundle includes
  chapters/*.qmd                 01-why-nutrition-matters, energy-balance, macronutrients(=template), 04-micronutrients-hydration
  quizzes/*.quiz.yml             one per chapter
  cases/*.case.yml               pillar-mapping-mr-tan, common-questions, iron-deficiency-aisha, bmr-estimation
                                 (prediabetes-counseling = the CASE-FORMAT.md example, currently unused)
  diagrams/glycemic-index-load.yml     data for the `gi` island
  structures/                    dietary-fats.mol.yml + oleic/elaidic/stearic .sdf (extended) + .svg (RDKit)
  figures/                       food/*.jpg (CC, credited), structures/*.svg (glucose, alanine), CREDITS.csv
  references.bib                 curated cited keys (copied from research/evidence/references.bib)
  assets/                        GENERATED bundle + lazy chunks (gitignored)
components/src/                  main.js(REGISTRY), Quiz, CasePlayer, GlucoScale(gi), Molecule, lib/
research/                        evidence repo: 00-overview/curriculum-map.md (spine), chapters/(dossiers), evidence/(bib)
```

## 9. Memory (auto-loaded each session — see `memory/MEMORY.md`)
- [[dropbox-quarto-render-lock]] — the os-error-32 cause + out-of-tree workaround.
- [[chemical-structure-and-image-rendering]] — verified library picks, RDKit/PubChem pipeline, image licensing.

## 10. Git state
- Branch **`curriculum-restructure`**; base `master` (holds pre-restructure baseline).
- This session's commits: `112c0d3` (Part I prototype + GI island) → `95881c2`/`e7e5ed2` (molecule
  island, food science, figures) → `db9e9d5`/`0e3511d` (preview.ps1 + fix) → `341bc02` (template
  restructure + AUTHOR §11) → **`20b423f`** (structure depth + broadened case) = **HEAD**.
- Identity: `Kenneth Ban Hon Kim <kennethban@gmail.com>`. Nothing pushed to a remote yet.

## 11. Open items / risks
- **Colleague review pending** on Macronutrients depth + the Mr Lim case — feedback drives the next edits.
- **Ch.1/2/4 predate the template** — refactor for consistency when convenient.
- **Net-new ✨ chapters need dossiers first** (research workflow pattern; see curriculum map §"Net-new research").
- **In-place render** still needs the Defender exclusion (or use `preview.ps1`); flag before deploy.
- **Deployment base-path** for island `data-src` (subpath GitHub Pages) unresolved (AUTHOR.md §8).
- **LLM patient-chat** (capstone) designed, not built; cases degrade gracefully without it.
