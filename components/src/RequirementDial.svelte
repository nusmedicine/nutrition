<script>
  // RequirementDial — the Pregnancy & Lactation teaching island. A "requirement explorer": pick a
  // nutrient and see how its requirement moves across the life stages (not pregnant -> T1 -> T2 -> T3 ->
  // lactation) as a small bar chart, with a one-line "why" keyed to the internal driver. Deliberately
  // teaches the counter-intuitive cases: ENERGY back-loads then jumps at lactation; CALCIUM stays FLAT
  // (absorption doubles); VITAMIN A shows a red CEILING (excess harms) rather than a rising floor. Values
  // are schematic (they teach the shape, not exact numbers). Data-driven from a YAML manifest; shares the
  // card/chip/colour language of the other islands.
  import { onMount } from 'svelte';
  import { load, save } from './lib/store.js';
  import { loadManifest } from './lib/manifest.js';

  let { src } = $props();

  const FALLBACK = {
    id: 'requirement-dial',
    title: 'The requirement dial',
    stages: ['Not pregnant', '1st trimester', '2nd trimester', '3rd trimester', 'Lactation'],
    nutrients: [
      { name: 'Energy', kind: 'rising', values: [0, 0, 340, 452, 500], unit: 'extra kcal/day', why: 'Back-loaded and modest in pregnancy — then it jumps for milk. "Eating for two" only nearly fits lactation.' },
      { name: 'Iron', kind: 'rising', values: [100, 105, 130, 150, 95], unit: '% of baseline need', why: 'Expanding blood volume and fetal stores push the need up, peaking late; it falls again in lactation.' },
      { name: 'Calcium', kind: 'flat', values: [100, 100, 100, 100, 100], unit: '% of baseline need', why: 'The surprise: the requirement barely rises because the gut roughly doubles calcium absorption.' },
      { name: 'Vitamin A', kind: 'ceiling', values: [100, 100, 100, 100, 100], unit: 'floor flat — with an upper limit', why: 'The floor barely moves — but high-dose preformed retinol is teratogenic. A ceiling to respect, not a target.' },
    ],
  };

  const KIND = {
    rising: { badge: '↑ rises', color: '#08503f' },
    flat: { badge: '→ stays flat', color: '#1664c0' },
    ceiling: { badge: '⚠ ceiling — excess harms', color: '#b0471d' },
  };

  let data = $state(null);
  let error = $state(null);
  let nIdx = $state(0);
  let sIdx = $state(0);

  let nutrients = $derived(data ? data.nutrients || [] : []);
  let stages = $derived(data ? data.stages || [] : []);
  let nutrient = $derived(nutrients[nIdx] || null);
  let kindInfo = $derived(nutrient ? (KIND[nutrient.kind] || KIND.rising) : KIND.rising);
  let bars = $derived(computeBars(nutrient));

  function computeBars(n) {
    if (!n || !Array.isArray(n.values)) return [];
    const max = Math.max(...n.values, 1);
    const min = Math.min(...n.values, 0);
    const span = Math.max(max - Math.min(min, 0), 1);
    return n.values.map((v) => ({ v, pct: Math.round(((v - Math.min(min, 0)) / span) * 100) }));
  }

  onMount(async () => {
    try {
      if (!src) throw new Error('no src');
      const parsed = await loadManifest(src);
      if (!parsed || !Array.isArray(parsed.nutrients) || !parsed.nutrients.length) throw new Error('empty');
      data = parsed;
    } catch (e) {
      error = String((e && e.message) || e);
      data = FALLBACK;
    }
    const saved = load('requirement-dial:' + data.id);
    if (saved && Number.isInteger(saved.nIdx) && saved.nIdx >= 0 && saved.nIdx < data.nutrients.length) nIdx = saved.nIdx;
    if (saved && Number.isInteger(saved.sIdx) && saved.sIdx >= 0 && saved.sIdx < (data.stages || []).length) sIdx = saved.sIdx;
  });

  $effect(() => {
    if (!data) return;
    save('requirement-dial:' + data.id, { nIdx, sIdx });
  });

  function pickNutrient(i) { nIdx = Math.min(Math.max(0, i), nutrients.length - 1); }
  function pickStage(i) { sIdx = Math.min(Math.max(0, i), stages.length - 1); }
</script>

{#if !data}
  <div class="rd card"><p>Loading…</p></div>
{:else}
  <figure class="rd card">
    <figcaption class="head">
      <strong>{data.title || 'The requirement dial'}</strong>
      <span class="hint">Pick a nutrient — watch its need move across the stages</span>
    </figcaption>
    {#if data.intro}<p class="intro">{data.intro}</p>{/if}

    <div class="chips" role="group" aria-label="Nutrients">
      {#each nutrients as n, i}
        <button type="button" class="chip" class:on={i === nIdx} onclick={() => pickNutrient(i)} aria-pressed={i === nIdx}>{n.name}</button>
      {/each}
    </div>

    {#if nutrient}
      <div class="kindrow">
        <span class="kbadge" style="background:{kindInfo.color}">{kindInfo.badge}</span>
        {#if nutrient.unit}<span class="unit">{nutrient.unit}</span>{/if}
      </div>

      <div class="chart" role="group" aria-label={'Requirement of ' + nutrient.name + ' across life stages'}>
        {#each bars as b, i}
          <button type="button" class="col" class:on={i === sIdx} onclick={() => pickStage(i)} aria-pressed={i === sIdx} title={stages[i]}>
            <span class="val">{b.v}</span>
            <span class="bar" style="height:{Math.max(b.pct, 3)}%; background:{i === sIdx ? kindInfo.color : '#c7d0d6'}"></span>
            <span class="slabel">{stages[i]}</span>
          </button>
        {/each}
      </div>

      <p class="why" aria-live="polite"><b>{nutrient.name} — {stages[sIdx]}.</b> {nutrient.why}</p>
    {/if}
    {#if data.credit}<p class="credit">{data.credit}</p>{/if}
  </figure>
{/if}

<style>
  .rd {
    --surface:#fff; --ink:#1a2027; --muted:#5b6670; --line:#d8dee5;
    --brand-ink:#08503f; --brand-bg:#eef5f2; --focus:#1664c0;
    color:var(--ink); font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; margin:1.2rem 0;
  }
  .rd.card { background:var(--surface); border:1px solid var(--line); border-radius:10px; padding:16px 20px; max-width:760px; }
  .rd .head { display:flex; flex-wrap:wrap; gap:6px 12px; align-items:baseline; justify-content:space-between; border-bottom:1px solid var(--line); padding-bottom:10px; margin-bottom:12px; }
  .rd .hint { font-size:.78rem; color:var(--muted); }
  .rd .intro { font-size:.92rem; margin:0 0 14px; }
  .rd button { font:inherit; cursor:pointer; }

  .rd .chips { display:flex; flex-wrap:wrap; gap:6px; margin-bottom:12px; }
  .rd .chip { padding:5px 11px; border:1px solid var(--line); border-radius:8px; background:#fff; color:var(--ink); font-size:.82rem; }
  .rd .chip:hover { border-color:var(--brand-ink); }
  .rd .chip.on { border-color:var(--brand-ink); border-width:2px; padding:4px 10px; background:var(--brand-bg); color:var(--brand-ink); font-weight:600; }

  .rd .kindrow { display:flex; align-items:center; gap:10px; margin-bottom:8px; }
  .rd .kbadge { display:inline-block; padding:2px 10px; border-radius:99px; color:#fff; font-weight:700; font-size:.78rem; }
  .rd .unit { font-size:.78rem; color:var(--muted); }

  .rd .chart { display:flex; align-items:flex-end; gap:8px; height:170px; border:1px solid var(--line); border-radius:8px; background:#fbfdfc; padding:12px 12px 8px; }
  .rd .col { flex:1 1 0; display:flex; flex-direction:column; align-items:center; justify-content:flex-end; height:100%; border:none; background:none; gap:4px; padding:0; border-radius:6px; }
  .rd .col:hover .bar { filter:brightness(0.94); }
  .rd .col.on { background:var(--brand-bg); }
  .rd .val { font-size:.72rem; color:var(--muted); font-variant-numeric:tabular-nums; }
  .rd .col.on .val { color:var(--brand-ink); font-weight:700; }
  .rd .bar { width:66%; max-width:46px; border-radius:4px 4px 0 0; transition:height .18s ease; }
  .rd .slabel { font-size:.66rem; text-align:center; line-height:1.15; color:var(--muted); }
  .rd .col.on .slabel { color:var(--brand-ink); font-weight:600; }

  .rd .why { font-size:.9rem; margin:12px 0 0; padding:8px 12px; background:var(--brand-bg); border-left:3px solid var(--brand-ink); border-radius:0 6px 6px 0; }
  .rd .why b { color:var(--brand-ink); }

  .rd .credit { color:var(--muted); font-size:.72rem; margin:10px 0 0; }
  .rd :focus-visible { outline:3px solid var(--focus); outline-offset:2px; border-radius:6px; }
  @media (prefers-reduced-motion: reduce) { .rd * { transition:none !important; } }
  @media (max-width:520px) { .rd .slabel { font-size:.6rem; } }
</style>
