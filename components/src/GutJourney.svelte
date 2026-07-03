<script>
  // GutJourney — "follow the food" interactive digestive tract.
  // A professional anatomical illustration (Servier Medical Art, CC BY-SA) with
  // clickable hotspots: pick an organ (illustration or buttons) to see what happens
  // to a meal there — how it is moved, what juices/enzymes act, which hormone signals,
  // and what is absorbed. Content is data-driven from a YAML manifest.
  import { onMount } from 'svelte';
  import { load, save } from './lib/store.js';
  import { loadManifest } from './lib/manifest.js';

  let { src } = $props();

  const FALLBACK = {
    id: 'gut-journey',
    title: 'Follow the food: a journey through the gut',
    organs: [
      { id: 'mouth', name: 'Mouth', kind: 'tube', what: 'Chewing plus saliva starts breaking food down.' },
      { id: 'stomach', name: 'Stomach', kind: 'tube', what: 'Acid and pepsin start protein digestion.' },
      { id: 'small-intestine', name: 'Small intestine', kind: 'tube', what: 'Most digestion and absorption happen here.' },
      { id: 'large-intestine', name: 'Large intestine', kind: 'tube', what: 'Water is reabsorbed; stool is formed.' },
    ],
  };

  const TUBE = ['mouth', 'oesophagus', 'stomach', 'small-intestine', 'large-intestine'];
  const ACCESSORY = ['salivary-glands', 'liver', 'gallbladder', 'pancreas'];

  let data = $state(null);
  let error = $state(null);
  let selectedId = $state(null);

  onMount(async () => {
    try {
      if (!src) throw new Error('no src');
      const parsed = await loadManifest(src); // asset paths (e.g. data.image) auto-resolved
      if (!parsed || !Array.isArray(parsed.organs) || !parsed.organs.length) throw new Error('empty dataset');
      data = parsed;
    } catch (e) {
      error = String((e && e.message) || e);
      data = FALLBACK;
    }
    selectedId = data.organs[0].id;
    const saved = load('gut:' + data.id);
    if (saved && saved.selectedId && data.organs.some((o) => o.id === saved.selectedId)) selectedId = saved.selectedId;
  });

  let organs = $derived(data ? data.organs : []);
  let byId = $derived(new Map(organs.map((o) => [o.id, o])));
  let organ = $derived(byId.get(selectedId) || organs[0] || null);
  let tubeOrgans = $derived(TUBE.map((id) => byId.get(id)).filter(Boolean));
  let accessoryOrgans = $derived(ACCESSORY.map((id) => byId.get(id)).filter(Boolean));
  let hotspots = $derived(organs.filter((o) => o.hx != null && o.hy != null));
  let imgUrl = $derived(data && data.image ? data.image : ''); // already resolved by loadManifest
  let viewBox = $derived(data && data.imageBox ? data.imageBox : '0 0 665 2499');

  function select(id) {
    if (!byId.has(id)) return;
    selectedId = id;
    if (data) save('gut:' + data.id, { selectedId });
  }
  const has = (id) => selectedId === id;

  const ROWS = [
    { key: 'secretes', label: 'Juices & enzymes' },
    { key: 'hormone', label: 'Hormone signal' },
    { key: 'absorbs', label: 'Absorbs' },
    { key: 'note', label: 'Remember' },
  ];
  let detailRows = $derived(organ ? ROWS.filter((r) => organ[r.key]) : []);
</script>

{#if !data}
  <div class="gj card"><p>Loading…</p></div>
{:else}
  <figure class="gj card">
    <figcaption class="head">
      <strong>{data.title || 'A journey through the gut'}</strong>
      <span class="hint">Click an organ to see what happens there</span>
    </figcaption>

    {#if data.intro}<p class="intro">{data.intro}</p>{/if}

    <div class="layout">
      <!-- Illustration + clickable hotspot overlay (mouse). Keyboard users use the buttons. -->
      <div class="stage">
        {#if imgUrl}<img class="illus" src={imgUrl} alt="Anatomical illustration of the digestive tract." />{/if}
        <svg class="hotspots" viewBox={viewBox} preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          {#each hotspots as o}
            <circle class="hot" class:selected={has(o.id)}
              cx={o.hx} cy={o.hy} r={o.hr || 70}
              onclick={() => select(o.id)} />
          {/each}
        </svg>
      </div>

      <!-- Detail panel -->
      <div class="panel" aria-live="polite">
        {#if organ}
          <h3>{organ.name} {#if organ.kind === 'accessory'}<span class="tag">accessory organ</span>{/if}</h3>
          {#if organ.what}<p class="what">{organ.what}</p>{/if}
          <dl class="rows">
            {#each detailRows as r}
              <div class="rowitem {r.key}">
                <dt>{r.label}</dt>
                <dd>{organ[r.key]}</dd>
              </div>
            {/each}
          </dl>
        {/if}
      </div>
    </div>

    <!-- Accessible selectors -->
    <div class="picker">
      <div class="grp" role="group" aria-label="The tube">
        <span class="glabel">The tube</span>
        {#each tubeOrgans as o}
          <button type="button" class:active={has(o.id)} aria-pressed={has(o.id)} onclick={() => select(o.id)}>{o.name}</button>
        {/each}
      </div>
      <div class="grp" role="group" aria-label="Accessory organs">
        <span class="glabel">Accessory organs</span>
        {#each accessoryOrgans as o}
          <button type="button" class="acc" class:active={has(o.id)} aria-pressed={has(o.id)} onclick={() => select(o.id)}>{o.name}</button>
        {/each}
      </div>
    </div>

    {#if data.footnote}<p class="foot">{data.footnote}</p>{/if}
    {#if data.credit}<p class="credit">{data.credit}</p>{/if}
  </figure>
{/if}

<style>
  .gj {
    --surface:#fff; --ink:#1a2027; --muted:#5b6670; --line:#d8dee5;
    --brand-ink:#08503f; --brand-bg:#eef5f2; --focus:#1664c0; --acc-sel:#8a6fc0;
    color:var(--ink);
    font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    margin:1.2rem 0;
  }
  .gj.card { background:var(--surface); border:1px solid var(--line); border-radius:10px; padding:16px 20px; max-width:700px; }
  .gj .head { display:flex; flex-wrap:wrap; gap:6px 12px; align-items:baseline; justify-content:space-between; border-bottom:1px solid var(--line); padding-bottom:10px; margin-bottom:10px; }
  .gj .hint { font-size:.78rem; color:var(--muted); }
  .gj .intro { font-size:.94rem; margin:0 0 10px; }
  .gj button { font:inherit; }

  .gj .layout { display:flex; flex-wrap:wrap; gap:18px; align-items:flex-start; }
  .gj .stage { position:relative; flex:0 0 184px; width:184px; }
  .gj .illus { display:block; width:100%; height:auto; }
  .gj .hotspots { position:absolute; inset:0; width:100%; height:100%; }
  .gj .panel { flex:1 1 260px; min-width:240px; }

  /* hotspots — invisible until hover/selected so the illustration stays clean */
  .gj .hot { fill:#08503f; fill-opacity:0; stroke:#08503f; stroke-opacity:0; stroke-width:10; cursor:pointer; transition:fill-opacity .15s ease, stroke-opacity .15s ease; }
  .gj .hot:hover { fill-opacity:.14; stroke-opacity:.5; }
  .gj .hot.selected { fill-opacity:.22; stroke-opacity:.95; }

  /* detail panel */
  .gj .panel h3 { margin:2px 0 6px; font-size:1.08rem; color:var(--brand-ink); display:flex; flex-wrap:wrap; gap:8px; align-items:baseline; }
  .gj .panel .tag { font-size:.68rem; font-weight:700; text-transform:uppercase; letter-spacing:.03em; color:var(--acc-sel); background:#f1edf8; border:1px solid #d9cff0; border-radius:99px; padding:2px 8px; }
  .gj .panel .what { margin:0 0 10px; font-size:.96rem; }
  .gj .rows { margin:0; display:flex; flex-direction:column; gap:8px; }
  .gj .rowitem { border-left:3px solid var(--line); padding:2px 0 2px 10px; }
  .gj .rowitem.note { border-left-color:var(--brand-ink); }
  .gj .rowitem.hormone { border-left-color:var(--acc-sel); }
  .gj .rowitem.secretes { border-left-color:#d98a4a; }
  .gj .rowitem.absorbs { border-left-color:#1f9d6b; }
  .gj dt { font-size:.72rem; font-weight:700; text-transform:uppercase; letter-spacing:.03em; color:var(--muted); }
  .gj dd { margin:1px 0 0; font-size:.92rem; }

  /* picker buttons */
  .gj .picker { margin-top:14px; border-top:1px solid #eef1f4; padding-top:10px; display:flex; flex-direction:column; gap:8px; }
  .gj .grp { display:flex; flex-wrap:wrap; gap:6px; align-items:center; }
  .gj .glabel { font-size:.72rem; font-weight:700; text-transform:uppercase; letter-spacing:.03em; color:var(--muted); flex:0 0 100%; }
  .gj .picker button { min-height:38px; padding:7px 12px; border:1px solid var(--line); border-radius:8px; background:#fff; color:var(--ink); cursor:pointer; font-weight:600; font-size:.9rem; }
  .gj .picker button:hover { background:#f2f8f6; border-color:var(--brand-ink); }
  .gj .picker button.active { border-color:var(--brand-ink); background:var(--brand-bg); color:var(--brand-ink); }
  .gj .picker button.acc.active { border-color:var(--acc-sel); background:#f1edf8; color:#5b428f; }

  .gj .foot, .gj .credit { color:var(--muted); font-size:.78rem; margin:10px 0 0; }
  .gj .credit { font-size:.72rem; }
  .gj .err { color:#9b1c1c; }
  .gj :focus-visible { outline:3px solid var(--focus); outline-offset:2px; border-radius:6px; }
  @media (prefers-reduced-motion: reduce) { .gj * { transition:none !important; } }
  @media (max-width:460px) {
    .gj.card { padding:14px; }
    .gj .stage { flex-basis:150px; width:150px; }
  }
</style>
