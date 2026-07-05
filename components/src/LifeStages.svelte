<script>
  // LifeStages — the Chapter 10 (Nutrition Across the Life Cycle) teaching island. A "life-stage
  // needs explorer": a horizontal life-arc of stages (pregnancy -> infancy -> childhood ->
  // adolescence -> adulthood -> older age); pick one to see its defining principle, the nutrients
  // that matter most and why, what to watch for, and the Singapore guideline that anchors it.
  // Reinforces the chapter's core idea: the healthy plate is a baseline that life stage modulates.
  // Data-driven from a YAML manifest; shares the card/colour language of the other islands.
  import { onMount } from 'svelte';
  import { load, save } from './lib/store.js';
  import { loadManifest } from './lib/manifest.js';

  let { src } = $props();

  const FALLBACK = {
    id: 'life-stages',
    title: 'Life-stage needs explorer',
    stages: [
      { id: 'pregnancy', label: 'Pregnancy', emoji: '🤰', principle: 'Quality over quantity.', needs: [{ nutrient: 'Folate', why: 'prevents neural tube defects.' }], guideline: 'WHO; HPB' },
    ],
  };

  let data = $state(null);
  let error = $state(null);
  let idx = $state(0);

  let stages = $derived(data ? data.stages || [] : []);
  let stage = $derived(stages[idx] || null);

  onMount(async () => {
    try {
      if (!src) throw new Error('no src');
      const parsed = await loadManifest(src);
      if (!parsed || !Array.isArray(parsed.stages) || !parsed.stages.length) throw new Error('empty');
      data = parsed;
    } catch (e) {
      error = String((e && e.message) || e);
      data = FALLBACK;
    }
    const saved = load('life-stages:' + data.id);
    if (saved && Number.isInteger(saved.idx) && saved.idx >= 0 && saved.idx < data.stages.length) idx = saved.idx;
  });

  $effect(() => {
    if (!data) return;
    save('life-stages:' + data.id, { idx });
  });

  function select(i) { idx = Math.min(Math.max(0, i), stages.length - 1); }
</script>

{#if !data}
  <div class="ls card"><p>Loading…</p></div>
{:else}
  <figure class="ls card">
    <figcaption class="head">
      <strong>{data.title || 'Life-stage needs explorer'}</strong>
      <span class="hint">Pick a life stage</span>
    </figcaption>
    {#if data.intro}<p class="intro">{data.intro}</p>{/if}

    <div class="arc" role="group" aria-label="Life stages">
      {#each stages as s, i}
        <button type="button" class="stage" class:on={i === idx} onclick={() => select(i)} aria-pressed={i === idx}>
          <span class="emoji" aria-hidden="true">{s.emoji}</span>
          <span class="slabel">{s.label}</span>
        </button>
      {/each}
    </div>

    <div class="controls">
      <button type="button" onclick={() => select(idx - 1)} disabled={idx <= 0} aria-label="Previous stage">‹</button>
      <span class="pos">{idx + 1} / {stages.length}</span>
      <button type="button" onclick={() => select(idx + 1)} disabled={idx >= stages.length - 1} aria-label="Next stage">›</button>
    </div>

    {#if stage}
      <div class="detail" aria-live="polite">
        <h3 class="dtitle"><span class="demoji" aria-hidden="true">{stage.emoji}</span>{stage.label}</h3>
        {#if stage.principle}<p class="principle">{stage.principle}</p>{/if}
        {#if stage.needs && stage.needs.length}
          <ul class="needs">
            {#each stage.needs as n}
              <li><b>{n.nutrient}</b> — {n.why}</li>
            {/each}
          </ul>
        {/if}
        {#if stage.watch}<p class="watch"><b>Watch for:</b> {stage.watch}</p>{/if}
        {#if stage.guideline}<p class="guideline">Anchored to: <span class="gtag">{stage.guideline}</span></p>{/if}
      </div>
    {/if}
    {#if data.credit}<p class="credit">{data.credit}</p>{/if}
  </figure>
{/if}

<style>
  .ls {
    --surface:#fff; --ink:#1a2027; --muted:#5b6670; --line:#d8dee5;
    --brand-ink:#08503f; --brand-bg:#eef5f2; --focus:#1664c0; --watch:#b06a1d;
    color:var(--ink); font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; margin:1.2rem 0;
  }
  .ls.card { background:var(--surface); border:1px solid var(--line); border-radius:10px; padding:16px 20px; max-width:760px; }
  .ls .head { display:flex; flex-wrap:wrap; gap:6px 12px; align-items:baseline; justify-content:space-between; border-bottom:1px solid var(--line); padding-bottom:10px; margin-bottom:12px; }
  .ls .hint { font-size:.78rem; color:var(--muted); }
  .ls .intro { font-size:.92rem; margin:0 0 14px; }
  .ls button { font:inherit; cursor:pointer; }

  .ls .arc { display:flex; gap:0; align-items:stretch; overflow-x:auto; padding-bottom:4px; }
  .ls .stage { position:relative; flex:1 1 0; min-width:88px; display:flex; flex-direction:column; align-items:center; gap:4px; padding:10px 6px 8px; border:none; background:none; color:var(--muted); border-top:3px solid var(--line); }
  .ls .stage::before { content:""; position:absolute; top:-6px; width:11px; height:11px; border-radius:50%; background:#fff; border:2px solid var(--line); }
  .ls .stage:hover { color:var(--brand-ink); }
  .ls .stage.on { color:var(--brand-ink); border-top-color:var(--brand-ink); font-weight:700; }
  .ls .stage.on::before { background:var(--brand-ink); border-color:var(--brand-ink); }
  .ls .emoji { font-size:1.5rem; line-height:1.1; margin-top:4px; }
  .ls .slabel { font-size:.76rem; text-align:center; line-height:1.2; }

  .ls .controls { display:flex; align-items:center; justify-content:flex-end; gap:10px; margin:8px 0 12px; }
  .ls .controls button { width:32px; height:32px; border:1px solid var(--line); border-radius:8px; background:#fff; font-size:1.2rem; line-height:1; color:var(--brand-ink); }
  .ls .controls button:hover:not(:disabled) { background:var(--brand-bg); border-color:var(--brand-ink); }
  .ls .controls button:disabled { opacity:.4; cursor:default; }
  .ls .pos { font-size:.8rem; color:var(--muted); font-variant-numeric:tabular-nums; }

  .ls .detail { border:1px solid var(--line); border-radius:8px; padding:12px 16px; background:#fbfdfc; }
  .ls .dtitle { margin:0 0 8px; font-size:1.1rem; color:var(--brand-ink); display:flex; align-items:center; gap:8px; }
  .ls .demoji { font-size:1.3rem; }
  .ls .principle { margin:0 0 10px; font-size:.95rem; padding:8px 12px; background:var(--brand-bg); border-left:3px solid var(--brand-ink); border-radius:0 6px 6px 0; }
  .ls .needs { margin:0 0 10px; padding-left:1.1rem; display:flex; flex-direction:column; gap:5px; }
  .ls .needs li { font-size:.9rem; }
  .ls .needs b { color:var(--ink); }
  .ls .watch { margin:0 0 8px; font-size:.88rem; color:var(--ink); padding:8px 12px; background:color-mix(in srgb, var(--watch) 8%, #fff); border-left:3px solid var(--watch); border-radius:0 6px 6px 0; }
  .ls .guideline { margin:0; font-size:.8rem; color:var(--muted); }
  .ls .gtag { display:inline-block; padding:1px 8px; border:1px solid var(--line); border-radius:99px; color:var(--brand-ink); background:#fff; font-weight:600; }

  .ls .credit { color:var(--muted); font-size:.72rem; margin:12px 0 0; }
  .ls :focus-visible { outline:3px solid var(--focus); outline-offset:2px; border-radius:6px; }
  @media (prefers-reduced-motion: reduce) { .ls * { transition:none !important; } }
  @media (max-width:520px) { .ls .stage { min-width:76px; } .ls .slabel { font-size:.7rem; } }
</style>
