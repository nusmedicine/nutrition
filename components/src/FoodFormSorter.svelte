<script>
  // FoodFormSorter — the Infancy & Early Childhood teaching island. A "is it safe yet?" sorter: tap a
  // common weaning food to reveal its verdict (safe now / change the form / wait until 12 months) and a
  // one-line why. The payoff is the food-FORM insight — the same peanut is a choking hazard whole but
  // protective as smooth butter — plus the honey/cow's-milk timing rules and the iron-leads message.
  // Verdicts are schematic teaching categories, sourced to the chapter. Data-driven from a YAML manifest;
  // shares the card/chip/colour language of the other islands.
  import { onMount } from 'svelte';
  import { load, save } from './lib/store.js';
  import { loadManifest } from './lib/manifest.js';

  let { src } = $props();

  const VERDICTS = {
    safe: { label: 'Safe now (~6 mo+)', color: '#08503f' },
    modify: { label: 'Yes — but change the form', color: '#b06a1d' },
    wait12: { label: 'Wait until ~12 months', color: '#b0471d' },
  };

  const FALLBACK = {
    id: 'food-form-sorter',
    title: 'Is it safe yet? A weaning-food sorter',
    foods: [
      { name: 'Smooth peanut butter', verdict: 'safe', why: 'Introduce early once solids start — it protects against peanut allergy.' },
      { name: 'Whole peanuts', verdict: 'modify', why: 'A choking hazard whole — the SAME food is safe as smooth butter. Hazard is about form.' },
      { name: 'Honey', verdict: 'wait12', why: 'Infant botulism: the immature gut lets spores colonise. No honey before 12 months.' },
    ],
  };

  let data = $state(null);
  let error = $state(null);
  let revealed = $state({});
  let selIdx = $state(-1);

  let foods = $derived(data ? data.foods || [] : []);
  let sel = $derived(selIdx >= 0 ? foods[selIdx] : null);
  let selInfo = $derived(sel ? (VERDICTS[sel.verdict] || VERDICTS.safe) : null);
  let revealedCount = $derived(Object.values(revealed).filter(Boolean).length);

  onMount(async () => {
    try {
      if (!src) throw new Error('no src');
      const parsed = await loadManifest(src);
      if (!parsed || !Array.isArray(parsed.foods) || !parsed.foods.length) throw new Error('empty');
      data = parsed;
    } catch (e) {
      error = String((e && e.message) || e);
      data = FALLBACK;
    }
    const saved = load('food-form-sorter:' + data.id);
    if (saved && saved.revealed && typeof saved.revealed === 'object') {
      const clean = {};
      for (const k of Object.keys(saved.revealed)) {
        const i = Number(k);
        if (Number.isInteger(i) && i >= 0 && i < data.foods.length && saved.revealed[k]) clean[i] = true;
      }
      revealed = clean;
    }
    if (saved && Number.isInteger(saved.selIdx) && saved.selIdx >= -1 && saved.selIdx < data.foods.length) selIdx = saved.selIdx;
  });

  $effect(() => {
    if (!data) return;
    save('food-form-sorter:' + data.id, { revealed, selIdx });
  });

  function pick(i) {
    revealed = { ...revealed, [i]: true };
    selIdx = i;
  }
  function revealAll() {
    const all = {};
    foods.forEach((_, i) => { all[i] = true; });
    revealed = all;
  }
  function reset() { revealed = {}; selIdx = -1; }
</script>

{#if !data}
  <div class="ffs card"><p>Loading…</p></div>
{:else}
  <figure class="ffs card">
    <figcaption class="head">
      <strong>{data.title || 'Is it safe yet? A weaning-food sorter'}</strong>
      <span class="hint">Tap a food to check it</span>
    </figcaption>
    {#if data.intro}<p class="intro">{data.intro}</p>{/if}

    <div class="legend" aria-hidden="true">
      {#each Object.entries(VERDICTS) as [k, v]}
        <span class="lchip"><span class="dot" style="background:{v.color}"></span>{v.label}</span>
      {/each}
    </div>

    <div class="grid" role="group" aria-label="Weaning foods — tap to reveal the verdict">
      {#each foods as f, i}
        {@const shown = !!revealed[i]}
        {@const vinfo = VERDICTS[f.verdict] || VERDICTS.safe}
        <button type="button" class="food" class:on={i === selIdx} class:shown
          style={shown ? `--vc:${vinfo.color}` : ''}
          onclick={() => pick(i)} aria-pressed={i === selIdx}>
          <span class="fname">{f.name}</span>
          {#if shown}<span class="fverdict">{vinfo.label}</span>{:else}<span class="ftap">tap to check</span>{/if}
        </button>
      {/each}
    </div>

    <div class="controls">
      <button type="button" class="txt" onclick={revealAll} disabled={revealedCount === foods.length}>Reveal all</button>
      <button type="button" class="txt" onclick={reset} disabled={revealedCount === 0 && selIdx === -1}>Reset</button>
      <span class="pos">{revealedCount} / {foods.length} checked</span>
    </div>

    {#if sel && selInfo}
      <div class="detail" style="--vc:{selInfo.color}" aria-live="polite">
        <span class="badge" style="background:{selInfo.color}">{selInfo.label}</span>
        <p class="why"><b>{sel.name}.</b> {sel.why}</p>
      </div>
    {:else}
      <p class="prompt">Tap a food above — the same food can be a hazard in one form and a healthy first food in another.</p>
    {/if}
    {#if data.credit}<p class="credit">{data.credit}</p>{/if}
  </figure>
{/if}

<style>
  .ffs {
    --surface:#fff; --ink:#1a2027; --muted:#5b6670; --line:#d8dee5;
    --brand-ink:#08503f; --brand-bg:#eef5f2; --focus:#1664c0;
    color:var(--ink); font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; margin:1.2rem 0;
  }
  .ffs.card { background:var(--surface); border:1px solid var(--line); border-radius:10px; padding:16px 20px; max-width:760px; }
  .ffs .head { display:flex; flex-wrap:wrap; gap:6px 12px; align-items:baseline; justify-content:space-between; border-bottom:1px solid var(--line); padding-bottom:10px; margin-bottom:12px; }
  .ffs .hint { font-size:.78rem; color:var(--muted); }
  .ffs .intro { font-size:.92rem; margin:0 0 12px; }
  .ffs button { font:inherit; cursor:pointer; }

  .ffs .legend { display:flex; flex-wrap:wrap; gap:6px 14px; margin-bottom:12px; }
  .ffs .lchip { font-size:.74rem; color:var(--muted); display:inline-flex; align-items:center; gap:5px; }
  .ffs .dot { width:10px; height:10px; border-radius:50%; flex:none; }

  .ffs .grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(150px, 1fr)); gap:8px; }
  .ffs .food { display:flex; flex-direction:column; align-items:flex-start; gap:3px; text-align:left; padding:9px 12px; border:1px solid var(--line); border-radius:8px; background:#fff; color:var(--ink); min-height:52px; }
  .ffs .food:hover { border-color:var(--brand-ink); }
  .ffs .food.shown { border-left:4px solid var(--vc); background:color-mix(in srgb, var(--vc) 6%, #fff); }
  .ffs .food.on { box-shadow:0 0 0 2px var(--focus) inset; }
  .ffs .fname { font-size:.9rem; font-weight:600; }
  .ffs .ftap { font-size:.72rem; color:var(--muted); }
  .ffs .fverdict { font-size:.72rem; color:var(--vc); font-weight:700; }

  .ffs .controls { display:flex; align-items:center; gap:12px; margin:12px 0 0; }
  .ffs .txt { border:none; background:none; color:var(--brand-ink); font-size:.82rem; text-decoration:underline; padding:2px; }
  .ffs .txt:disabled { color:var(--muted); text-decoration:none; cursor:default; }
  .ffs .pos { margin-left:auto; font-size:.78rem; color:var(--muted); font-variant-numeric:tabular-nums; }

  .ffs .detail { margin-top:12px; border:1px solid var(--vc); border-left-width:5px; border-radius:8px; padding:10px 14px; background:color-mix(in srgb, var(--vc) 7%, #fff); }
  .ffs .badge { display:inline-block; padding:2px 12px; border-radius:99px; color:#fff; font-weight:700; font-size:.8rem; margin-bottom:6px; }
  .ffs .why { margin:0; font-size:.92rem; }
  .ffs .why b { color:var(--ink); }
  .ffs .prompt { margin:12px 2px 0; font-size:.84rem; color:var(--muted); }

  .ffs .credit { color:var(--muted); font-size:.72rem; margin:10px 0 0; }
  .ffs :focus-visible { outline:3px solid var(--focus); outline-offset:2px; border-radius:6px; }
  @media (prefers-reduced-motion: reduce) { .ffs * { transition:none !important; } }
</style>
