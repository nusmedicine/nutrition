<script>
  // NutriGrade — the Chapter 11 (Assessing Diet & Talking to Patients) label-reading island, the
  // chapter's owned "food-environment skill" (decision A). An A–D sugar ladder: tap a local drink
  // and it lands on its grade band (grade derived from sugar per 100 ml against the statutory
  // thresholds), showing its sugar value, grade and a concrete swap that moves it down the ladder.
  // Grades C/D must display the mark; D cannot be advertised. Sat fat can only downgrade (noted in
  // the intro, not modelled). Data-driven from a YAML manifest; shares the card/colour language.
  import { onMount } from 'svelte';
  import { load, save } from './lib/store.js';
  import { loadManifest } from './lib/manifest.js';

  let { src } = $props();

  const FALLBACK = {
    id: 'nutri-grade',
    title: 'Grade the drink, pick a swap',
    bands: [
      { grade: 'A', min: -1, max: 1, range: '≤ 1 g', color: '#2f8f5b', note: 'Lowest sugar.' },
      { grade: 'B', min: 1, max: 5, range: '> 1–5 g', color: '#8bb84e', note: '' },
      { grade: 'C', min: 5, max: 10, range: '> 5–10 g', color: '#e0a13a', note: '' },
      { grade: 'D', min: 10, max: 999, range: '> 10 g', color: '#cf5b4e', note: 'Swap it.' },
    ],
    drinks: [{ id: 'water', label: 'Plain water', sugar: 0, swap: 'Best choice.' }],
  };

  let data = $state(null);
  let error = $state(null);
  let selectedId = $state(null);

  let bands = $derived(data ? data.bands || [] : []);
  let drinks = $derived(data ? data.drinks || [] : []);

  function gradeOf(sugar) {
    const b = bands.find((x) => sugar > x.min && sugar <= x.max);
    return b ? b.grade : (bands[bands.length - 1] || {}).grade;
  }
  function bandOf(grade) { return bands.find((b) => b.grade === grade) || null; }

  onMount(async () => {
    try {
      if (!src) throw new Error('no src');
      const parsed = await loadManifest(src);
      if (!parsed || !Array.isArray(parsed.drinks) || !parsed.drinks.length) throw new Error('empty');
      data = parsed;
    } catch (e) {
      error = String((e && e.message) || e);
      data = FALLBACK;
    }
    const saved = load('nutri-grade:' + data.id);
    if (saved && saved.selectedId && data.drinks.some((d) => d.id === saved.selectedId)) selectedId = saved.selectedId;
  });

  $effect(() => {
    if (!data) return;
    save('nutri-grade:' + data.id, { selectedId });
  });

  let selected = $derived(selectedId ? drinks.find((d) => d.id === selectedId) : null);
  let selGrade = $derived(selected ? gradeOf(selected.sugar) : null);
  let selBand = $derived(selGrade ? bandOf(selGrade) : null);
  // drinks resting on each band (only the selected one is shown placed)
  function drinkOnBand(grade) { return selected && selGrade === grade ? selected : null; }
</script>

{#if !data}
  <div class="ng card"><p>Loading…</p></div>
{:else}
  <figure class="ng card">
    <figcaption class="head">
      <strong>{data.title || 'Grade the drink, pick a swap'}</strong>
      <span class="hint">Tap a drink to grade it</span>
    </figcaption>
    {#if data.intro}<p class="intro">{data.intro}</p>{/if}

    <div class="grid">
      <div class="ladder" role="img" aria-label="Nutri-Grade A to D sugar ladder">
        {#each bands as b}
          {@const here = drinkOnBand(b.grade)}
          <div class="band" class:active={selGrade === b.grade} style="--c:{b.color}">
            <span class="glet">{b.grade}</span>
            <span class="brange">{b.range}<span class="per">/100 ml sugar</span></span>
            {#if here}
              <span class="placed">● {here.label} <b>({here.sugar} g)</b></span>
            {:else}
              <span class="bnote">{b.note}</span>
            {/if}
          </div>
        {/each}
      </div>

      <div class="side">
        <div class="drinks" role="group" aria-label="Drinks">
          {#each drinks as d}
            {@const g = gradeOf(d.sugar)}
            <button type="button" class="chip" class:on={selectedId === d.id}
                    style="--c:{(bandOf(g) || {}).color}" onclick={() => (selectedId = selectedId === d.id ? null : d.id)}
                    aria-pressed={selectedId === d.id}>
              <span class="cg" style="background:{(bandOf(g) || {}).color}">{g}</span>{d.label}
            </button>
          {/each}
        </div>

        {#if selected}
          <div class="detail" aria-live="polite" style="--c:{(selBand || {}).color}">
            <div class="dhead">
              <span class="badge" style="background:{(selBand || {}).color}">{selGrade}</span>
              <span class="dname">{selected.label}</span>
              <span class="dsugar">{selected.sugar} g sugar / 100 ml</span>
            </div>
            <p class="swap"><b>Swap:</b> {selected.swap}</p>
            {#if selected.satfat}<p class="satnote">Shown on sugar alone — this drink's saturated fat can pull the grade <em>down</em> from the sugar band, never up.</p>{/if}
          </div>
        {:else}
          <p class="prompt">Pick a drink to see its grade and a swap.</p>
        {/if}
      </div>
    </div>
    {#if data.credit}<p class="credit">{data.credit}</p>{/if}
  </figure>
{/if}

<style>
  .ng {
    --surface:#fff; --ink:#1a2027; --muted:#5b6670; --line:#d8dee5;
    --brand-ink:#08503f; --brand-bg:#eef5f2; --focus:#1664c0;
    color:var(--ink); font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; margin:1.2rem 0;
  }
  .ng.card { background:var(--surface); border:1px solid var(--line); border-radius:10px; padding:16px 20px; max-width:760px; }
  .ng .head { display:flex; flex-wrap:wrap; gap:6px 12px; align-items:baseline; justify-content:space-between; border-bottom:1px solid var(--line); padding-bottom:10px; margin-bottom:12px; }
  .ng .hint { font-size:.78rem; color:var(--muted); }
  .ng .intro { font-size:.92rem; margin:0 0 14px; }
  .ng button { font:inherit; cursor:pointer; }

  .ng .grid { display:grid; grid-template-columns:minmax(0,1.1fr) minmax(0,1fr); gap:16px 22px; align-items:start; }

  .ng .ladder { display:flex; flex-direction:column; gap:4px; }
  .ng .band { display:grid; grid-template-columns:auto auto 1fr; align-items:center; gap:10px; padding:9px 12px; border-radius:8px; border:1px solid var(--line); border-left:6px solid var(--c); background:color-mix(in srgb, var(--c) 8%, #fff); transition:box-shadow .2s ease; }
  .ng .band.active { box-shadow:0 0 0 2px var(--c); }
  .ng .glet { font-size:1.3rem; font-weight:800; color:var(--c); width:1.2em; text-align:center; }
  .ng .brange { font-size:.86rem; font-weight:700; color:var(--ink); }
  .ng .brange .per { font-weight:400; color:var(--muted); font-size:.74rem; margin-left:4px; }
  .ng .bnote { font-size:.78rem; color:var(--muted); text-align:right; }
  .ng .placed { font-size:.82rem; color:var(--ink); text-align:right; font-weight:600; }

  .ng .side { display:flex; flex-direction:column; gap:12px; min-width:0; }
  .ng .drinks { display:flex; flex-wrap:wrap; gap:6px; }
  .ng .chip { display:inline-flex; align-items:center; gap:6px; padding:4px 9px 4px 4px; border:1px solid var(--line); border-radius:99px; background:#fff; color:var(--ink); font-size:.8rem; }
  .ng .chip:hover { border-color:var(--c); }
  .ng .chip.on { border-color:var(--c); border-width:2px; padding:3px 8px 3px 3px; font-weight:600; }
  .ng .cg { display:inline-flex; align-items:center; justify-content:center; width:19px; height:19px; border-radius:50%; color:#fff; font-size:.72rem; font-weight:800; }

  .ng .detail { border:1px solid var(--line); border-left:4px solid var(--c); border-radius:8px; padding:10px 14px; background:#fbfdfc; }
  .ng .dhead { display:flex; flex-wrap:wrap; align-items:center; gap:8px; margin-bottom:6px; }
  .ng .badge { display:inline-flex; align-items:center; justify-content:center; width:26px; height:26px; border-radius:6px; color:#fff; font-weight:800; }
  .ng .dname { font-weight:700; }
  .ng .dsugar { font-size:.78rem; color:var(--muted); }
  .ng .swap { margin:0; font-size:.88rem; }
  .ng .satnote { margin:6px 0 0; font-size:.76rem; color:var(--muted); font-style:italic; }
  .ng .prompt { font-size:.86rem; color:var(--muted); margin:0; }

  .ng .credit { color:var(--muted); font-size:.72rem; margin:12px 0 0; }
  .ng :focus-visible { outline:3px solid var(--focus); outline-offset:2px; border-radius:6px; }
  @media (prefers-reduced-motion: reduce) { .ng * { transition:none !important; } }
  @media (max-width:560px) { .ng .grid { grid-template-columns:1fr; } }
</style>
