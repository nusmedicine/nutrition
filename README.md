# Health in Medicine

An interactive web e-textbook (**Quarto + Svelte 5**) on **nutrition & metabolism** for
first-year medical students. Concise didactic material plus live diagrams, self-assessment,
and branching **clinical cases** for rehearsing patient counselling.

**Docs:** [AUTHOR.md](AUTHOR.md) (how to write content & add interactive elements) ·
[PLANNING.md](PLANNING.md) · [REQUIREMENTS.md](REQUIREMENTS.md) ·
[ARCHITECTURE.md](ARCHITECTURE.md) · [CASE-FORMAT.md](CASE-FORMAT.md) ·
[CASE-AUTHORING.md](CASE-AUTHORING.md) (non-technical guide to writing simulated-patient cases)

## Status — pilot
Working today:
- A Quarto **book** with content chapters plus an **Integrated cases** chapter
  (`book/chapters/cases.qmd`) of chat-forward simulated-patient encounters, KaTeX math, callouts.
- An interactive **case-player** island (Svelte 5) embedded in the chapter — branching MCQ
  encounter, qualitative debrief, **local progress** (no login), and a **live guardrailed LLM
  simulated patient** you can chat with (streaming replies + per-turn portrait moods and a
  post-encounter feedback rubric), with graceful degradation to a placeholder when no endpoint
  is configured.
- A zero-install throwaway prototype of the case-player at [`prototype/case-player.html`](prototype/case-player.html).

## Toolchain (portable, installed without admin)
Installed into your user profile and added to your **user PATH**:
- **Node.js LTS** → `%LOCALAPPDATA%\node\current`
- **Quarto** → `%LOCALAPPDATA%\quarto\current\bin`

A newly opened terminal should find `node`, `npm`, and `quarto`.
> Note: `npm install` requires `node.exe` to be allowed **outbound through the firewall**
> (this machine blocks it by default; it was unblocked to install dependencies).

## Develop
From the repo root:

```sh
# 1) Build the interactive components (Svelte → book/assets/components.js|css)
npm --prefix components install        # once
npm --prefix components run build      # rebuild after editing components/src
#   npm --prefix components run watch  # auto-rebuild on change

# 2) Render / preview the book (→ book/_book/)
quarto render book
#   quarto preview book                # live-reloading preview
```

Editing **content** (`.qmd`, `cases/*.case.yml`) only needs a `quarto render`.
Editing **components** (`components/src/**`) needs a rebuild, then render.

## Structure
```
book/            Quarto book — content (.qmd), cases/ (*.case.yml), assets/ (built bundle)
components/      Svelte islands + framework-agnostic engine (src/lib/: engine, expr, md, store)
prototype/       Zero-install throwaway case-player (open in a browser, no build)
*.md             Planning & specification docs
```
