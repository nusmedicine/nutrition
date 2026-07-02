<script>
  // GutJourney — "follow the food" interactive digestive tract.
  // Click an organ (schematic or the buttons) to see what happens to a meal there:
  // how it is moved, what juices/enzymes act, which hormone signals, and what is
  // absorbed. Content is data-driven from a YAML manifest; the schematic is inline.
  import { onMount } from 'svelte';
  import yaml from 'js-yaml';
  import { load, save } from './lib/store.js';

  let { src } = $props();

  // Minimal fallback so the island always renders (offline / no src).
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

  // display order + grouping for the schematic and the button rows
  const TUBE = ['mouth', 'oesophagus', 'stomach', 'small-intestine', 'large-intestine'];
  const ACCESSORY = ['salivary-glands', 'liver', 'gallbladder', 'pancreas'];

  let data = $state(null);
  let error = $state(null);
  let selectedId = $state(null);

  onMount(async () => {
    try {
      if (!src) throw new Error('no src');
      const res = await fetch(src);
      if (!res.ok) throw new Error('Could not load gut data (' + res.status + ')');
      const parsed = yaml.load(await res.text());
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

  function select(id) {
    if (!byId.has(id)) return;
    selectedId = id;
    if (data) save('gut:' + data.id, { selectedId });
  }
  const has = (id) => selectedId === id;

  // labelled detail rows, in a fixed order, rendered only when present
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
      <!-- Schematic (visual + mouse). Keyboard users use the buttons below. -->
      <svg class="tract" viewBox="0 0 300 470" role="img"
           aria-label="Schematic of the digestive tract. Use the organ buttons below to explore each part.">
        <!-- large intestine (frame around the small intestine) -->
        <g class="organ colon" class:selected={has('large-intestine')} onclick={() => select('large-intestine')} aria-hidden="true">
          <rect x="86" y="196" width="132" height="20" rx="10" />
          <rect x="198" y="206" width="20" height="150" rx="10" />
          <rect x="86" y="206" width="20" height="176" rx="10" />
          <rect x="104" y="366" width="70" height="18" rx="9" />
        </g>
        <!-- small intestine (coiled mass) -->
        <g class="organ si" class:selected={has('small-intestine')} onclick={() => select('small-intestine')} aria-hidden="true">
          <rect x="112" y="226" width="86" height="132" rx="30" />
          <path class="coil" d="M124 250 q16 -12 32 0 t32 0 M124 274 q16 -12 32 0 t32 0 M124 298 q16 -12 32 0 t32 0 M124 322 q16 -12 32 0 t32 0" />
        </g>
        <!-- mouth -->
        <g class="organ" class:selected={has('mouth')} onclick={() => select('mouth')} aria-hidden="true">
          <ellipse cx="150" cy="24" rx="30" ry="13" />
        </g>
        <!-- salivary glands -->
        <g class="organ acc" class:selected={has('salivary-glands')} onclick={() => select('salivary-glands')} aria-hidden="true">
          <ellipse cx="108" cy="34" rx="10" ry="7" />
          <ellipse cx="192" cy="34" rx="10" ry="7" />
        </g>
        <!-- oesophagus -->
        <g class="organ" class:selected={has('oesophagus')} onclick={() => select('oesophagus')} aria-hidden="true">
          <rect x="141" y="36" width="18" height="76" rx="9" />
        </g>
        <!-- stomach -->
        <g class="organ" class:selected={has('stomach')} onclick={() => select('stomach')} aria-hidden="true">
          <path d="M150 116 C126 110 100 126 100 154 C100 182 122 198 148 194 C168 191 176 176 170 164 C166 156 157 158 154 165 C150 174 136 174 130 162 C124 149 133 136 150 136 C159 136 162 128 158 122 C156 118 153 116 150 116 Z" />
        </g>
        <!-- liver -->
        <g class="organ acc" class:selected={has('liver')} onclick={() => select('liver')} aria-hidden="true">
          <path d="M176 116 C198 102 244 104 252 124 C258 140 240 152 212 152 C192 152 176 142 176 116 Z" />
        </g>
        <!-- gallbladder -->
        <g class="organ acc" class:selected={has('gallbladder')} onclick={() => select('gallbladder')} aria-hidden="true">
          <ellipse cx="206" cy="158" rx="10" ry="7" />
        </g>
        <!-- pancreas -->
        <g class="organ acc" class:selected={has('pancreas')} onclick={() => select('pancreas')} aria-hidden="true">
          <ellipse cx="192" cy="182" rx="34" ry="8" transform="rotate(-8 192 182)" />
        </g>
        <!-- rectum -->
        <g class="organ colon" class:selected={has('large-intestine')} onclick={() => select('large-intestine')} aria-hidden="true">
          <rect x="130" y="384" width="18" height="52" rx="9" />
        </g>
      </svg>

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
  </figure>
{/if}

<style>
  .gj {
    --surface:#fff; --ink:#1a2027; --muted:#5b6670; --line:#d8dee5;
    --brand-ink:#08503f; --brand-bg:#eef5f2; --focus:#1664c0;
    --tube:#e8b98f; --tube-sel:#d98a4a; --acc:#b9a7d6; --acc-sel:#8a6fc0;
    color:var(--ink);
    font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    margin:1.2rem 0;
  }
  .gj.card { background:var(--surface); border:1px solid var(--line); border-radius:10px; padding:16px 20px; max-width:680px; }
  .gj .head { display:flex; flex-wrap:wrap; gap:6px 12px; align-items:baseline; justify-content:space-between; border-bottom:1px solid var(--line); padding-bottom:10px; margin-bottom:10px; }
  .gj .hint { font-size:.78rem; color:var(--muted); }
  .gj .intro { font-size:.94rem; margin:0 0 10px; }
  .gj button { font:inherit; }

  .gj .layout { display:flex; flex-wrap:wrap; gap:14px; align-items:flex-start; }
  .gj .tract { flex:0 0 190px; width:190px; height:auto; }
  .gj .panel { flex:1 1 260px; min-width:240px; }

  /* schematic organ styling */
  .gj .organ { cursor:pointer; }
  .gj .organ rect, .gj .organ ellipse, .gj .organ path { fill:var(--tube); stroke:#fff; stroke-width:1.5; transition:fill .15s ease; }
  .gj .organ.acc rect, .gj .organ.acc ellipse, .gj .organ.acc path { fill:var(--acc); }
  .gj .organ .coil { fill:none; stroke:#fff; stroke-width:2; opacity:.7; }
  .gj .organ:hover rect, .gj .organ:hover ellipse, .gj .organ:hover path { fill:var(--tube-sel); }
  .gj .organ.acc:hover rect, .gj .organ.acc:hover ellipse, .gj .organ.acc:hover path { fill:var(--acc-sel); }
  .gj .organ.selected rect, .gj .organ.selected ellipse, .gj .organ.selected path { fill:var(--tube-sel); stroke:var(--brand-ink); stroke-width:2; }
  .gj .organ.acc.selected rect, .gj .organ.acc.selected ellipse, .gj .organ.acc.selected path { fill:var(--acc-sel); stroke:var(--brand-ink); }
  .gj .organ.selected .coil { stroke:#fff; opacity:.9; }

  /* detail panel */
  .gj .panel h3 { margin:2px 0 6px; font-size:1.08rem; color:var(--brand-ink); display:flex; flex-wrap:wrap; gap:8px; align-items:baseline; }
  .gj .panel .tag { font-size:.68rem; font-weight:700; text-transform:uppercase; letter-spacing:.03em; color:var(--acc-sel); background:#f1edf8; border:1px solid #d9cff0; border-radius:99px; padding:2px 8px; }
  .gj .panel .what { margin:0 0 10px; font-size:.96rem; }
  .gj .rows { margin:0; display:flex; flex-direction:column; gap:8px; }
  .gj .rowitem { border-left:3px solid var(--line); padding:2px 0 2px 10px; }
  .gj .rowitem.note { border-left-color:var(--brand-ink); }
  .gj .rowitem.hormone { border-left-color:var(--acc-sel); }
  .gj .rowitem.secretes { border-left-color:var(--tube-sel); }
  .gj .rowitem.absorbs { border-left-color:#1f9d6b; }
  .gj dt { font-size:.72rem; font-weight:700; text-transform:uppercase; letter-spacing:.03em; color:var(--muted); }
  .gj dd { margin:1px 0 0; font-size:.92rem; }

  /* picker buttons */
  .gj .picker { margin-top:12px; border-top:1px solid #eef1f4; padding-top:10px; display:flex; flex-direction:column; gap:8px; }
  .gj .grp { display:flex; flex-wrap:wrap; gap:6px; align-items:center; }
  .gj .glabel { font-size:.72rem; font-weight:700; text-transform:uppercase; letter-spacing:.03em; color:var(--muted); flex:0 0 100%; }
  .gj .picker button { min-height:38px; padding:7px 12px; border:1px solid var(--line); border-radius:8px; background:#fff; color:var(--ink); cursor:pointer; font-weight:600; font-size:.9rem; }
  .gj .picker button:hover { background:#faf6f1; border-color:var(--tube); }
  .gj .picker button.acc:hover { background:#f6f2fb; border-color:var(--acc); }
  .gj .picker button.active { border-color:var(--tube-sel); background:#fbeee1; color:#8a5a12; }
  .gj .picker button.acc.active { border-color:var(--acc-sel); background:#f1edf8; color:#5b428f; }

  .gj .foot { color:var(--muted); font-size:.8rem; margin:10px 0 0; }
  .gj .err { color:#9b1c1c; }
  .gj :focus-visible { outline:3px solid var(--focus); outline-offset:2px; border-radius:6px; }
  @media (prefers-reduced-motion: reduce) { .gj * { transition:none !important; } }
  @media (max-width:430px) {
    .gj.card { padding:14px; }
    .gj .tract { flex-basis:150px; width:150px; }
  }
</style>
