<script>
  import { onMount, tick } from 'svelte';
  import yaml from 'js-yaml';
  import * as E from './lib/engine.js';
  import { md, mdInline } from './lib/md.js';
  import { load, save, clear } from './lib/store.js';

  let { src } = $props();

  let def = $state(null);
  let state = $state(null);
  let error = $state(null);
  let byId = {};
  let titleEl = $state(null);
  let lastId;

  let n = $derived(state && def ? byId[state.currentId] : null);
  let total = $derived(def ? E.countEndings(def) : 0);

  onMount(async () => {
    try {
      const res = await fetch(src);
      if (!res.ok) throw new Error('Could not load case (' + res.status + ')');
      def = yaml.load(await res.text());
      byId = E.buildIndex(def);
      const saved = load(def.id);
      state = saved || E.createInitialState(def, []);
      if (!state.currentId) E.enter(state, def, byId, def.start);
      persist();
    } catch (e) {
      error = String((e && e.message) || e);
    }
  });

  // Move focus to the new node's heading for screen-reader context.
  $effect(() => {
    const id = state && state.currentId;
    if (id && id !== lastId) {
      lastId = id;
      tick().then(() => titleEl && titleEl.focus());
    }
  });

  function persist() { if (def && state) save(def.id, state); }
  function choose(id) { E.choose(state, byId, id); persist(); }
  function contMcq() { E.continueMcq(state, def, byId); persist(); }
  function contInfo() { E.continueInfo(state, def, byId); persist(); }
  function contChat() { E.continuePatientChat(state, def, byId); persist(); }
  function restart() { E.restart(state, def, byId); persist(); }
  function reset() { E.reset(state, def, byId); persist(); }
</script>

{#if error}
  <div class="cp card"><p class="err">⚠ {error}</p></div>
{:else if !state || !n}
  <div class="cp card"><p>Loading case…</p></div>
{:else}
  <div class="cp">
    <div class="topbar">
      <strong class="brand">Clinical case</strong>
      <span class="endings">
        Endings discovered: <span class="tick">{state.completedEndings.length}</span> of {total}{#if state.completedEndings.length} — {state.completedEndings.map((e) => e.title).join(', ')}{:else} (explore different choices){/if}
      </span>
    </div>

    <div class="card">
      <p class="persona"><b>{def.persona.name}</b>, {def.persona.age}, {def.persona.occupation} — {def.persona.presentation}</p>

      {#if n.type === 'info'}
        <h3 class="nt" tabindex="-1" bind:this={titleEl}>{n.title || 'Information'}</h3>
        <div class="prose">{@html md(n.body)}</div>
        <div class="actions"><button type="button" class="btn" onclick={contInfo}>Continue →</button></div>

      {:else if n.type === 'mcq'}
        <h3 class="nt stem" tabindex="-1" bind:this={titleEl}>{@html mdInline(n.stem)}</h3>
        <div class="opts" role="group" aria-label="Answer options">
          {#each n.options as o}
            {#if !state.pending}
              <button type="button" class="opt" onclick={() => choose(o.id)}>{o.text}</button>
            {:else}
              <button type="button" disabled
                class="opt {o.id === state.pending ? 'chosen ' + (o.correct ? 'correct' : 'incorrect') : (o.correct ? 'correct' : '')}">
                {o.text}{#if o.id === state.pending || o.correct}<span class="tag">{o.correct ? 'Correct' : 'Reconsider'}</span>{/if}
              </button>
            {/if}
          {/each}
        </div>
        {#if state.pending}
          {@const opt = n.options.find((o) => o.id === state.pending)}
          <div class="feedback" role="status"><h4>Feedback</h4><div class="prose">{@html md(opt.feedback || '')}</div></div>
          <div class="actions"><button type="button" class="btn" onclick={contMcq}>Continue →</button></div>
        {/if}

      {:else if n.type === 'patient-chat'}
        <h3 class="nt" tabindex="-1" bind:this={titleEl}>Optional: talk to the patient</h3>
        <div class="note">
          <strong>AI patient roleplay</strong> — here the student would converse with a guardrailed AI
          playing {def.persona.name}. Objective: <em>{n.objective}</em>.
          <br>Disabled in this build, so the case continues seamlessly (graceful <code>fallbackGoto</code>).
        </div>
        <div class="actions"><button type="button" class="btn" onclick={contChat}>Continue →</button></div>

      {:else if n.type === 'end'}
        <span class="outcome {n.outcome}">Outcome: {n.outcome}</span>
        <h3 class="nt" tabindex="-1" bind:this={titleEl}>{n.title}</h3>
        <div class="prose">{@html md(n.body)}</div>
        {#if n.debrief}
          <div class="debrief">
            {#if n.debrief.objectivesMet && n.debrief.objectivesMet.length}
              <h4>Objectives met</h4>
              <ul class="keypoints">{#each n.debrief.objectivesMet as i}{#if def.objectives[i - 1]}<li>{def.objectives[i - 1]}</li>{/if}{/each}</ul>
            {/if}
            {#if n.debrief.keyPoints && n.debrief.keyPoints.length}
              <h4>Key points</h4>
              <ul class="keypoints">{#each n.debrief.keyPoints as k}<li>{k}</li>{/each}</ul>
            {/if}
          </div>
        {/if}
        <div class="actions"><button type="button" class="btn" onclick={restart}>↻ Play again</button></div>
      {/if}
    </div>

    <div class="actions">
      <button type="button" class="btn secondary" onclick={restart}>↻ Restart case</button>
      <button type="button" class="btn secondary" onclick={reset}>Reset progress</button>
    </div>

    <details class="debug">
      <summary>Author view (debug) — variables &amp; path</summary>
      <div class="dbg">Variables: <code>{JSON.stringify(state.vars)}</code><br><span class="path">Path: {state.path.join(' → ')}</span></div>
    </details>
  </div>
{/if}

<style>
  .cp {
    --bg:#f6f7f9; --surface:#fff; --ink:#1a2027; --muted:#5b6670; --line:#d8dee5;
    --brand:#0b6b5b; --brand-ink:#08503f;
    --good-bg:#e7f5ee; --good-line:#1f9d6b; --good-ink:#0d5e3f;
    --warn-bg:#fdf1e3; --warn-line:#d08a2c; --warn-ink:#8a5410; --focus:#1664c0;
    color:var(--ink);
    font:16px/1.6 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    margin:1.2rem 0;
  }
  .cp .card { background:var(--surface); border:1px solid var(--line); border-radius:10px; padding:18px 20px; }
  .cp .topbar { display:flex; flex-wrap:wrap; gap:8px; align-items:center; justify-content:space-between; margin-bottom:10px; }
  .cp .brand { color:var(--brand-ink); }
  .cp .endings { font-size:.82rem; color:var(--muted); }
  .cp .tick { color:var(--good-ink); font-weight:600; }
  .cp h3.nt { font-size:1.08rem; margin:0 0 .5em; }
  .cp .stem { font-weight:600; }
  .cp .persona { color:var(--muted); font-size:.9rem; margin:0 0 14px; }
  .cp .persona b { color:var(--ink); }
  .cp .prose :global(p) { margin:.5em 0; }
  .cp button { font:inherit; cursor:pointer; }
  .cp .btn { background:var(--brand); color:#fff; border:1px solid var(--brand-ink); border-radius:8px; padding:11px 16px; min-height:44px; font-weight:600; }
  .cp .btn:hover { background:var(--brand-ink); }
  .cp .btn.secondary { background:transparent; color:var(--brand-ink); border-color:var(--line); }
  .cp .btn.secondary:hover { background:#eef2f1; }
  .cp .opts { display:flex; flex-direction:column; gap:10px; margin:14px 0 4px; }
  .cp .opt { display:block; width:100%; text-align:left; background:#fff; color:var(--ink); border:1px solid var(--line); border-radius:10px; padding:13px 15px; min-height:44px; }
  .cp .opt:hover:not(:disabled) { border-color:var(--brand); background:#f3f8f7; }
  .cp .opt.chosen { border-width:2px; padding:12px 14px; }
  .cp .opt.chosen.correct, .cp .opt.correct { border-color:var(--good-line); background:var(--good-bg); }
  .cp .opt.chosen.incorrect { border-color:var(--warn-line); background:var(--warn-bg); }
  .cp .opt .tag { display:inline-block; font-size:.72rem; font-weight:700; letter-spacing:.03em; text-transform:uppercase; margin-left:8px; padding:1px 7px; border-radius:99px; color:#fff; background:var(--good-line); }
  .cp .opt.incorrect .tag { background:var(--warn-line); }
  .cp .feedback { margin:14px 0; padding:12px 15px; border-radius:10px; border:1px solid var(--line); background:#f7f9fb; }
  .cp .feedback h4 { margin:0 0 4px; font-size:.78rem; text-transform:uppercase; letter-spacing:.04em; color:var(--muted); }
  .cp .note { font-size:.9rem; color:var(--muted); background:#f1f4f7; border:1px dashed var(--line); border-radius:10px; padding:12px 14px; margin:12px 0; }
  .cp .actions { margin-top:16px; display:flex; gap:10px; flex-wrap:wrap; }
  .cp .outcome { display:inline-block; font-size:.78rem; font-weight:700; text-transform:uppercase; letter-spacing:.04em; padding:3px 10px; border-radius:99px; margin-bottom:8px; }
  .cp .outcome.success { background:var(--good-bg); color:var(--good-ink); border:1px solid var(--good-line); }
  .cp .outcome.partial { background:var(--warn-bg); color:var(--warn-ink); border:1px solid var(--warn-line); }
  .cp .outcome.poor { background:#fde8e8; color:#9b1c1c; border:1px solid #e06666; }
  .cp .debrief h4 { font-size:.92rem; margin:14px 0 4px; }
  .cp ul.keypoints { margin:.3em 0 0; padding-left:1.2em; }
  .cp ul.keypoints li { margin:.22em 0; }
  .cp .debug { margin-top:18px; font-size:.84rem; color:var(--muted); }
  .cp .debug summary { cursor:pointer; }
  .cp .debug code, .cp .note code, .cp .feedback :global(code) { background:#eef2f5; padding:1px 5px; border-radius:5px; }
  .cp .path { font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace; font-size:.8rem; word-break:break-word; }
  .cp :focus-visible { outline:3px solid var(--focus); outline-offset:2px; border-radius:6px; }
  .cp .err { color:#9b1c1c; }
  @media (prefers-reduced-motion: reduce) { .cp * { transition:none !important; } }
</style>
