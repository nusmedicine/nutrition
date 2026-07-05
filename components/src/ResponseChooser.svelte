<script>
  // ResponseChooser — the Chapter 14 (Behaviour-Change Counselling) teaching island. A deterministic
  // way to teach a motivational-interviewing conversation: at each turn the patient (Mr Tan) says a
  // line, and the reader picks what to say back. Each response reveals its MI type (reflective / open /
  // affirmation / closed / righting reflex), a quality tier, the patient's reaction, and coaching.
  // The pattern to feel: the righting reflex shuts him down; listening and asking open him up. Data-
  // driven from a YAML manifest; shares the card/stepper/colour language of the other islands.
  import { onMount } from 'svelte';
  import { load, save } from './lib/store.js';
  import { loadManifest } from './lib/manifest.js';

  let { src } = $props();

  const TIER = {
    good: { color: '#2f8f5b', word: 'builds change talk' },
    ok: { color: '#c98a2b', word: 'neutral' },
    poor: { color: '#cf5b4e', word: 'provokes resistance' },
  };

  const FALLBACK = {
    id: 'response-chooser',
    title: 'Choose your response',
    types: { reflect: { label: 'Reflective listening', color: '#2f8f5b' } },
    turns: [{ id: 't1', patient: '…', options: [{ type: 'reflect', tier: 'good', text: '…', reaction: '…', feedback: '…' }] }],
  };

  let data = $state(null);
  let error = $state(null);
  let turnIdx = $state(0);
  let picks = $state({}); // turnIdx -> option index

  let turns = $derived(data ? data.turns || [] : []);
  let types = $derived(data ? data.types || {} : {});
  let turn = $derived(turns[turnIdx] || null);
  let selIdx = $derived(picks[turnIdx] != null ? picks[turnIdx] : null);
  let selected = $derived(turn && selIdx != null ? turn.options[selIdx] : null);

  onMount(async () => {
    try {
      if (!src) throw new Error('no src');
      const parsed = await loadManifest(src);
      if (!parsed || !Array.isArray(parsed.turns) || !parsed.turns.length) throw new Error('empty');
      data = parsed;
    } catch (e) {
      error = String((e && e.message) || e);
      data = FALLBACK;
    }
    const saved = load('response-chooser:' + data.id);
    if (saved) {
      if (Number.isInteger(saved.turnIdx) && saved.turnIdx >= 0 && saved.turnIdx < data.turns.length) turnIdx = saved.turnIdx;
      if (saved.picks && typeof saved.picks === 'object') picks = saved.picks;
    }
  });

  $effect(() => {
    if (!data) return;
    save('response-chooser:' + data.id, { turnIdx, picks });
  });

  function pick(i) { picks = { ...picks, [turnIdx]: i }; }
  function go(n) { turnIdx = Math.min(Math.max(0, n), turns.length - 1); }
  const typeOf = (t) => types[t] || { label: t, color: '#7a8791' };
</script>

{#if !data}
  <div class="rc card"><p>Loading…</p></div>
{:else}
  <figure class="rc card">
    <figcaption class="head">
      <strong>{data.title || 'Choose your response'}</strong>
      <span class="hint">Pick what you'd say — try more than one</span>
    </figcaption>
    {#if data.intro}<p class="intro">{data.intro}</p>{/if}
    {#if data.patient}<p class="who">{data.patient}</p>{/if}

    <div class="controls">
      <button type="button" onclick={() => go(turnIdx - 1)} disabled={turnIdx <= 0} aria-label="Previous turn">‹</button>
      <span class="pos">Turn {turnIdx + 1} / {turns.length}</span>
      <button type="button" onclick={() => go(turnIdx + 1)} disabled={turnIdx >= turns.length - 1} aria-label="Next turn">›</button>
    </div>

    {#if turn}
      <p class="say patient"><span class="tag">Mr Tan</span>{turn.patient}</p>

      <div class="options" role="group" aria-label="Your responses">
        {#each turn.options as o, i}
          <button type="button" class="opt" class:on={selIdx === i} style="--c:{typeOf(o.type).color}" onclick={() => pick(i)} aria-pressed={selIdx === i}>{o.text}</button>
        {/each}
      </div>

      {#if selected}
        {@const tier = TIER[selected.tier] || TIER.ok}
        <div class="reveal" style="--c:{tier.color}" aria-live="polite">
          <div class="badges">
            <span class="badge" style="background:{typeOf(selected.type).color}">{typeOf(selected.type).label}</span>
            <span class="tier" style="color:{tier.color}">{tier.word}</span>
          </div>
          <p class="say back"><span class="tag">Mr Tan</span>{selected.reaction}</p>
          <p class="coach">{selected.feedback}</p>
        </div>
      {:else}
        <p class="prompt">Choose a response to see how Mr Tan reacts.</p>
      {/if}
    {/if}
    {#if data.credit}<p class="credit">{data.credit}</p>{/if}
  </figure>
{/if}

<style>
  .rc {
    --surface:#fff; --ink:#1a2027; --muted:#5b6670; --line:#d8dee5;
    --brand-ink:#08503f; --brand-bg:#eef5f2; --focus:#1664c0;
    color:var(--ink); font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; margin:1.2rem 0;
  }
  .rc.card { background:var(--surface); border:1px solid var(--line); border-radius:10px; padding:16px 20px; max-width:760px; }
  .rc .head { display:flex; flex-wrap:wrap; gap:6px 12px; align-items:baseline; justify-content:space-between; border-bottom:1px solid var(--line); padding-bottom:10px; margin-bottom:12px; }
  .rc .hint { font-size:.78rem; color:var(--muted); }
  .rc .intro { font-size:.92rem; margin:0 0 10px; }
  .rc .who { font-size:.82rem; color:var(--muted); font-style:italic; margin:0 0 12px; }
  .rc button { font:inherit; cursor:pointer; }

  .rc .controls { display:flex; align-items:center; gap:10px; margin-bottom:10px; }
  .rc .controls button { width:32px; height:32px; border:1px solid var(--line); border-radius:8px; background:#fff; font-size:1.2rem; line-height:1; color:var(--brand-ink); }
  .rc .controls button:hover:not(:disabled) { background:var(--brand-bg); border-color:var(--brand-ink); }
  .rc .controls button:disabled { opacity:.4; cursor:default; }
  .rc .pos { font-size:.85rem; font-weight:600; color:var(--brand-ink); font-variant-numeric:tabular-nums; }

  .rc .say { font-size:.92rem; margin:0 0 12px; padding:9px 13px; border-radius:8px; }
  .rc .say .tag { display:inline-block; font-size:.66rem; font-weight:700; text-transform:uppercase; letter-spacing:.04em; color:var(--muted); margin-right:8px; }
  .rc .say.patient { background:#f2f4f6; border-left:3px solid #b4b2a9; }
  .rc .say.back { background:#f7f9fa; border-left:3px solid var(--c); margin:0 0 8px; }

  .rc .options { display:flex; flex-direction:column; gap:7px; margin-bottom:12px; }
  .rc .opt { text-align:left; padding:9px 13px; border:1px solid var(--line); border-radius:8px; background:#fff; color:var(--ink); font-size:.9rem; line-height:1.4; }
  .rc .opt:hover { border-color:var(--c); }
  .rc .opt.on { border-color:var(--c); border-width:2px; padding:8px 12px; background:color-mix(in srgb, var(--c) 8%, #fff); }

  .rc .reveal { border:1px solid var(--line); border-left:4px solid var(--c); border-radius:8px; padding:11px 15px; background:#fbfdfc; }
  .rc .badges { display:flex; flex-wrap:wrap; align-items:center; gap:10px; margin-bottom:8px; }
  .rc .badge { display:inline-block; padding:2px 11px; border-radius:99px; color:#fff; font-weight:700; font-size:.78rem; }
  .rc .tier { font-size:.78rem; font-weight:700; }
  .rc .coach { margin:0; font-size:.9rem; color:var(--ink); }
  .rc .prompt { margin:2px 2px 0; font-size:.84rem; color:var(--muted); }

  .rc .credit { color:var(--muted); font-size:.72rem; margin:12px 0 0; }
  .rc :focus-visible { outline:3px solid var(--focus); outline-offset:2px; border-radius:6px; }
  @media (prefers-reduced-motion: reduce) { .rc * { transition:none !important; } }
  @media (max-width:520px) { .rc.card { padding:14px; } }
</style>
