<script>
  // HealthyPlate — the Chapter 9 (What a Healthy Diet Looks Like) teaching island. A skills-style
  // "build a healthy plate": pick a cuisine (Chinese / Malay / Indian), then fill My Healthy Plate's
  // four slots — ½ fruit & vegetables, ¼ wholegrains, ¼ protein, and a drink — from that cuisine's own
  // dishes. Each household starts on its habitual (sub-optimal) plate; the reader swaps slots until all
  // four are on target. The QQH wedges fade with food quality, so a healthy plate reads as vividly
  // coloured and a poor one as washed out. Same target, three cuisines — you adapt the plate to the
  // food, not the family to a foreign diet. Data-driven from a YAML manifest; no external images.
  import { onMount } from 'svelte';
  import { load, save } from './lib/store.js';
  import { loadManifest } from './lib/manifest.js';

  let { src } = $props();

  const QUAL_OPACITY = { good: 0.9, ok: 0.5, poor: 0.16 };
  const QUAL_BADGE = { good: '✓', ok: '~', poor: '✗' };
  const QUAL_WORD = { good: 'on target', ok: 'could be better', poor: 'off target' };

  const FALLBACK = {
    id: 'healthy-plate',
    title: 'Build a healthy plate',
    slots: [
      { id: 'veg', label: '½ Fruit & vegetables', short: 'Vegetables', frac: 0.5, color: '#2f8f5b' },
      { id: 'grain', label: '¼ Wholegrains', short: 'Grain', frac: 0.25, color: '#c98a2b' },
      { id: 'protein', label: '¼ Protein', short: 'Protein', frac: 0.25, color: '#b1566a' },
      { id: 'drink', label: 'Drink', short: 'Drink', side: true, color: '#3a6ea5' },
    ],
    cuisines: [
      { id: 'chinese', label: 'Chinese', options: {
        veg: [{ label: 'Greens', quality: 'good', start: true }],
        grain: [{ label: 'Brown rice', quality: 'good', start: true }],
        protein: [{ label: 'Steamed fish', quality: 'good', start: true }],
        drink: [{ label: 'Water', quality: 'good', start: true }],
      } },
    ],
  };

  let data = $state(null);
  let error = $state(null);
  let cuisineId = $state(null);
  let sel = $state({}); // { [cuisineId]: { [slotId]: optionIndex } }

  let slots = $derived(data ? data.slots || [] : []);
  let cuisines = $derived(data ? data.cuisines || [] : []);
  let cuisine = $derived(cuisines.find((c) => c.id === cuisineId) || cuisines[0] || null);

  function optionsFor(cid, sid) {
    const c = cuisines.find((x) => x.id === cid);
    return (c && c.options && c.options[sid]) || [];
  }
  function defaultIndex(opts) {
    const i = opts.findIndex((o) => o.start);
    return i >= 0 ? i : 0;
  }
  function chosen(cid, sid) {
    const opts = optionsFor(cid, sid);
    const idx = (sel[cid] && sel[cid][sid] != null) ? sel[cid][sid] : defaultIndex(opts);
    return opts[Math.min(idx, opts.length - 1)] || null;
  }

  onMount(async () => {
    try {
      if (!src) throw new Error('no src');
      const parsed = await loadManifest(src);
      if (!parsed || !Array.isArray(parsed.cuisines) || !parsed.cuisines.length) throw new Error('empty');
      data = parsed;
    } catch (e) {
      error = String((e && e.message) || e);
      data = FALLBACK;
    }
    // seed every cuisine's default (start) picks
    const seed = {};
    for (const c of data.cuisines) {
      seed[c.id] = {};
      for (const s of data.slots) seed[c.id][s.id] = defaultIndex(optionsFor(c.id, s.id));
    }
    const saved = load('healthy-plate:' + data.id);
    if (saved && saved.sel && typeof saved.sel === 'object') {
      for (const cid of Object.keys(saved.sel)) if (seed[cid]) Object.assign(seed[cid], saved.sel[cid]);
    }
    sel = seed;
    cuisineId = (saved && saved.cuisineId && data.cuisines.some((c) => c.id === saved.cuisineId))
      ? saved.cuisineId : data.cuisines[0].id;
  });

  $effect(() => {
    if (!data || !cuisineId) return;
    save('healthy-plate:' + data.id, { cuisineId, sel });
  });

  function pick(sid, idx) {
    if (!cuisineId) return;
    sel = { ...sel, [cuisineId]: { ...(sel[cuisineId] || {}), [sid]: idx } };
  }
  function resetCuisine() {
    if (!cuisine) return;
    const next = {};
    for (const s of slots) next[s.id] = defaultIndex(optionsFor(cuisineId, s.id));
    sel = { ...sel, [cuisineId]: next };
  }

  // ---- verdict ----
  let plate = $derived(cuisine ? slots.map((s) => ({ slot: s, opt: chosen(cuisineId, s.id) })) : []);
  let goodCount = $derived(plate.filter((p) => p.opt && p.opt.quality === 'good').length);
  let allGood = $derived(plate.length > 0 && goodCount === plate.length);

  // ---- plate geometry (QQH wedges + a drink cup) ----
  const CX = 175, CY = 170, R = 120;
  const P = {
    veg: `M ${CX},${CY - R} A ${R},${R} 0 0 0 ${CX},${CY + R} Z`,
    grain: `M ${CX},${CY - R} A ${R},${R} 0 0 1 ${CX + R},${CY} L ${CX},${CY} Z`,
    protein: `M ${CX + R},${CY} A ${R},${R} 0 0 1 ${CX},${CY + R} L ${CX},${CY} Z`,
  };
  const WEDGE_C = { veg: [CX - 52, CY], grain: [CX + 50, CY - 50], protein: [CX + 50, CY + 50] };
  const qualOf = (sid) => { const o = chosen(cuisineId, sid); return o ? o.quality : 'poor'; };
  const colorOf = (sid) => { const s = slots.find((x) => x.id === sid); return (s && s.color) || '#888'; };
  const fillOpacity = (sid) => QUAL_OPACITY[qualOf(sid)] ?? 0.16;
</script>

{#if !data || !cuisineId}
  <div class="hp card"><p>Loading…</p></div>
{:else}
  <figure class="hp card">
    <figcaption class="head">
      <strong>{data.title || 'Build a healthy plate'}</strong>
      <span class="hint">Pick a cuisine, then fill each slot</span>
    </figcaption>
    {#if data.intro}<p class="intro">{data.intro}</p>{/if}

    <div class="cuisines" role="group" aria-label="Cuisine">
      {#each cuisines as c}
        <button type="button" class:on={c.id === cuisineId} onclick={() => (cuisineId = c.id)}>{c.label}</button>
      {/each}
    </div>

    <div class="grid">
      <div class="stage">
        <svg viewBox="0 0 470 340" preserveAspectRatio="xMidYMid meet" role="img"
             aria-label="A My Healthy Plate: {goodCount} of {plate.length} slots on target for {cuisine.label} cuisine">
          <!-- plate rim -->
          <circle cx={CX} cy={CY} r={R + 6} fill="#fff" stroke="#d8dee5" stroke-width="2" />
          {#each ['veg', 'grain', 'protein'] as sid}
            <path d={P[sid]} fill={colorOf(sid)} fill-opacity={fillOpacity(sid)} stroke="#fff" stroke-width="3" />
          {/each}
          <!-- divider emphasis -->
          <line x1={CX} y1={CY - R} x2={CX} y2={CY + R} stroke="#fff" stroke-width="3" />
          <line x1={CX} y1={CY} x2={CX + R} y2={CY} stroke="#fff" stroke-width="3" />

          {#each ['veg', 'grain', 'protein'] as sid}
            {@const s = slots.find((x) => x.id === sid)}
            {@const c = WEDGE_C[sid]}
            <text class="wlab" x={c[0]} y={c[1] - 4} text-anchor="middle">{s.short}</text>
            <text class="wbadge" x={c[0]} y={c[1] + 16} text-anchor="middle" style="fill:{colorOf(sid)}">{QUAL_BADGE[qualOf(sid)]}</text>
          {/each}

          <!-- drink cup -->
          <g class="cup">
            <path d="M 352,116 L 432,116 L 419,232 A 8,8 0 0 1 411,239 L 373,239 A 8,8 0 0 1 365,232 Z"
                  fill={colorOf('drink')} fill-opacity={QUAL_OPACITY[qualOf('drink')] ?? 0.16} stroke="#d8dee5" stroke-width="1.5" />
            <path d="M 432,132 q 22,4 20,40 q -2,30 -24,30" fill="none" stroke="#c7cfd6" stroke-width="4" />
            <text class="wlab" x={392} y={172} text-anchor="middle">Drink</text>
            <text class="wbadge" x={392} y={196} text-anchor="middle" style="fill:{colorOf('drink')}">{QUAL_BADGE[qualOf('drink')]}</text>
          </g>
        </svg>
        <p class="target">Target: <b>½</b> fruit &amp; vegetables · <b>¼</b> wholegrains · <b>¼</b> protein · water to drink</p>
      </div>

      <div class="builder">
        {#each slots as s}
          {@const opts = optionsFor(cuisineId, s.id)}
          {@const cur = chosen(cuisineId, s.id)}
          <div class="slot">
            <div class="slabel"><span class="swatch" style="background:{s.color}"></span>{s.label}</div>
            <div class="opts" role="group" aria-label={s.label}>
              {#each opts as o, i}
                <button type="button" class="chip q-{o.quality}" class:on={cur === o}
                        style="--c:{s.color}" onclick={() => pick(s.id, i)} aria-pressed={cur === o}>
                  {o.label}
                </button>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>

    <div class="verdict" aria-live="polite">
      <div class="score q-{allGood ? 'good' : goodCount >= 2 ? 'ok' : 'poor'}">
        {goodCount} of {plate.length} slots on target
      </div>
      {#if allGood}
        <p class="win"><b>A My Healthy Plate meal — built entirely from {cuisine.label} food.</b>
          The target never changed; you reached it with this household's own dishes. That is the whole
          idea: adapt the plate to the cuisine, not the family to a foreign diet.</p>
      {:else}
        <ul class="notes">
          {#each plate as p}
            {#if p.opt}
              <li class="q-{p.opt.quality}">
                <span class="badge" style="color:{p.slot.color}">{QUAL_BADGE[p.opt.quality]}</span>
                <span class="what"><b>{p.slot.short}:</b> {p.opt.label} — <i>{QUAL_WORD[p.opt.quality]}</i>{#if p.opt.note && p.opt.quality !== 'good'}. {p.opt.note}{/if}</span>
              </li>
            {/if}
          {/each}
        </ul>
      {/if}
      <button type="button" class="resetbtn" onclick={resetCuisine}>Reset to habitual plate</button>
    </div>
    {#if data.credit}<p class="credit">{data.credit}</p>{/if}
  </figure>
{/if}

<style>
  .hp {
    --surface:#fff; --ink:#1a2027; --muted:#5b6670; --line:#d8dee5;
    --brand-ink:#08503f; --brand-bg:#eef5f2; --focus:#1664c0;
    --good:#2f8f5b; --ok:#c98a2b; --poor:#b0555f;
    color:var(--ink); font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; margin:1.2rem 0;
  }
  .hp.card { background:var(--surface); border:1px solid var(--line); border-radius:10px; padding:16px 20px; max-width:760px; }
  .hp .head { display:flex; flex-wrap:wrap; gap:6px 12px; align-items:baseline; justify-content:space-between; border-bottom:1px solid var(--line); padding-bottom:10px; margin-bottom:12px; }
  .hp .hint { font-size:.78rem; color:var(--muted); }
  .hp .intro { font-size:.92rem; margin:0 0 12px; }
  .hp button { font:inherit; cursor:pointer; }

  .hp .cuisines { display:flex; gap:8px; margin-bottom:12px; }
  .hp .cuisines button { padding:6px 16px; border:1px solid var(--line); border-radius:999px; background:#fff; color:var(--muted); font-size:.9rem; }
  .hp .cuisines button:hover { border-color:var(--brand-ink); }
  .hp .cuisines button.on { border-color:var(--brand-ink); background:var(--brand-bg); color:var(--brand-ink); font-weight:700; }

  .hp .grid { display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1fr); gap:14px 22px; align-items:start; }
  .hp .stage svg { display:block; width:100%; height:auto; }
  .hp .wlab { font-size:13px; font-weight:700; fill:#fff; paint-order:stroke; stroke:rgba(26,32,39,.35); stroke-width:2.5px; stroke-linejoin:round; }
  .hp .wbadge { font-size:20px; font-weight:800; paint-order:stroke; stroke:#fff; stroke-width:3px; stroke-linejoin:round; }
  .hp .target { font-size:.8rem; color:var(--muted); margin:6px 2px 0; text-align:center; }
  .hp path, .hp .cup path:first-child { transition:fill-opacity .3s ease; }

  .hp .builder { display:flex; flex-direction:column; gap:12px; min-width:0; }
  .hp .slot .slabel { font-size:.84rem; font-weight:700; color:var(--ink); display:flex; align-items:center; gap:7px; margin-bottom:5px; }
  .hp .slot .swatch { width:11px; height:11px; border-radius:3px; display:inline-block; }
  .hp .opts { display:flex; flex-wrap:wrap; gap:6px; }
  .hp .chip { text-align:left; padding:5px 10px; border:1px solid var(--line); border-radius:8px; background:#fff; color:var(--ink); font-size:.8rem; line-height:1.3; }
  .hp .chip:hover { border-color:var(--c); }
  .hp .chip.on { border-color:var(--c); border-width:2px; padding:4px 9px; background:color-mix(in srgb, var(--c) 12%, #fff); font-weight:600; }

  .hp .verdict { margin-top:16px; border-top:1px solid var(--line); padding-top:12px; }
  .hp .score { font-weight:800; font-size:1rem; }
  .hp .score.q-good { color:var(--good); }
  .hp .score.q-ok { color:var(--ok); }
  .hp .score.q-poor { color:var(--poor); }
  .hp .win { font-size:.92rem; margin:8px 0 10px; padding:10px 14px; background:var(--brand-bg); border-left:3px solid var(--brand-ink); border-radius:0 6px 6px 0; }
  .hp .notes { list-style:none; margin:8px 0 10px; padding:0; display:flex; flex-direction:column; gap:6px; }
  .hp .notes li { display:flex; gap:8px; font-size:.86rem; align-items:baseline; }
  .hp .notes .badge { font-weight:800; min-width:14px; }
  .hp .notes li.q-good .what i { color:var(--good); }
  .hp .notes li.q-ok .what i { color:var(--ok); }
  .hp .notes li.q-poor .what i { color:var(--poor); }
  .hp .resetbtn { padding:5px 12px; border:1px solid var(--line); border-radius:7px; background:#fff; color:var(--brand-ink); font-size:.8rem; }
  .hp .resetbtn:hover { background:var(--brand-bg); border-color:var(--brand-ink); }

  .hp .credit { color:var(--muted); font-size:.72rem; margin:10px 0 0; }
  .hp :focus-visible { outline:3px solid var(--focus); outline-offset:2px; border-radius:6px; }
  @media (prefers-reduced-motion: reduce) { .hp * { transition:none !important; } }
  @media (max-width:560px) {
    .hp .grid { grid-template-columns:1fr; }
    .hp .stage { max-width:360px; margin:0 auto; }
  }
</style>
