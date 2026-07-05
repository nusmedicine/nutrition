<script>
  // MetsCluster — the Obesity & Metabolic Syndrome chapter island. A radial "clustering wheel":
  // insulin resistance + central adiposity sit at the hub, and the five harmonised metabolic-
  // syndrome components orbit it, each showing its threshold. Click (or key) a spoke to toggle it
  // PRESENT/ABSENT; when ≥3 of 5 are present, the criteria-met indicator lights up — making concrete
  // the chapter's point that metabolic syndrome is a CLUSTER with a shared root, with no single
  // obligatory component. Two modifiable levers (sleep loss, stress/cortisol) feed the hub. Bespoke
  // inline-SVG, data-driven; shares the card/colour language of the other islands (brand green = the hub).
  import { onMount } from 'svelte';
  import { load, save } from './lib/store.js';
  import { loadManifest } from './lib/manifest.js';

  let { src } = $props();

  const FALLBACK = {
    id: 'mets-cluster',
    title: 'Metabolic syndrome — a cluster, not a single disease',
    intro:
      'Metabolic syndrome is a CLUSTER of risk markers that tend to travel together because they share a common root. Toggle each component on or off — any three of the five meet the harmonised criteria. There is no single obligatory component.',
    hub: {
      label: 'Insulin resistance',
      sub: '+ central adiposity',
      note: 'Insulin resistance together with central (visceral) adiposity is the shared root that pulls the whole cluster together — which is why the components tend to appear as a group rather than one at a time.',
    },
    components: [
      { id: 'waist', label: 'Central obesity', threshold: 'Waist ≥90 cm (men) / ≥80 cm (women)', note: 'Asian cut-points — visceral fat, not overall weight, is the driver.' },
      { id: 'triglycerides', label: 'Raised triglycerides', threshold: '≥1.7 mmol/L', note: 'A marker of the fat the liver is over-producing under insulin resistance (or on treatment).' },
      { id: 'hdl', label: 'Low HDL cholesterol', threshold: '<1.0 mmol/L (men) / <1.3 mmol/L (women)', note: "The 'protective' cholesterol falls as the cluster forms (or on treatment)." },
      { id: 'bp', label: 'Raised blood pressure', threshold: '≥130/85 mmHg', note: 'Below the threshold for hypertension on its own, but it still counts here (or on treatment).' },
      { id: 'glucose', label: 'Raised fasting glucose', threshold: '≥5.6 mmol/L', note: "Impaired fasting glucose — an early signal, well before the Type 2 Diabetes chapter's diagnostic cut-off." },
    ],
    threshold_count: 3,
    verdicts: { meets: 'Metabolic syndrome — meets criteria (≥3 of 5)', notyet: '{n} of 5 — not yet' },
    levers: {
      caption: 'Modifiable levers that feed the hub',
      items: [
        { id: 'sleep', label: 'Sleep loss', note: 'Short or poor sleep worsens insulin resistance and appetite.' },
        { id: 'stress', label: 'Stress / cortisol', note: 'Chronic stress raises cortisol, which promotes central fat and insulin resistance.' },
      ],
    },
    caption:
      'Metabolic syndrome is a RISK MARKER, not a disease — it flags a shared root (insulin resistance and central adiposity) that raises the risk of type 2 diabetes and cardiovascular disease.',
    credit: 'Harmonised criteria after IDF / AHA / NHLBI (Alberti 2009); Asian waist cut-points per IDF.',
  };

  let data = $state(null);
  let error = $state(null);
  let present = $state({}); // id -> true when toggled on

  onMount(async () => {
    try {
      if (!src) throw new Error('no src');
      const parsed = await loadManifest(src);
      if (!parsed || !Array.isArray(parsed.components) || !parsed.components.length) throw new Error('empty');
      data = parsed;
    } catch (e) {
      error = String((e && e.message) || e);
      data = FALLBACK;
    }
    const saved = load('mets-cluster:' + data.id);
    if (saved && saved.present && typeof saved.present === 'object') {
      const next = {};
      for (const c of data.components) if (saved.present[c.id]) next[c.id] = true;
      present = next;
    }
  });

  let components = $derived(data ? data.components : []);
  let need = $derived(data && Number.isInteger(data.threshold_count) ? data.threshold_count : 3);
  let count = $derived(components.reduce((n, c) => n + (present[c.id] ? 1 : 0), 0));
  let meets = $derived(count >= need);

  // Geometry — mirrors PillarsHub's radial layout, sized for five spokes with room for labels.
  const CX = 300, CY = 250, R = 158, HUB_R = 66, NODE_R = 50;

  // radial positions: first component at top, then clockwise
  let placed = $derived(components.map((c, i) => {
    const a = (-90 + i * (360 / components.length)) * Math.PI / 180;
    return { ...c, x: CX + R * Math.cos(a), y: CY + R * Math.sin(a), on: !!present[c.id] };
  }));

  let selectedId = $state(null);
  let selected = $derived(selectedId ? placed.find((p) => p.id === selectedId) || null : null);

  function toggle(id) {
    const next = { ...present };
    if (next[id]) delete next[id]; else next[id] = true;
    present = next;
    selectedId = id;
    if (data) save('mets-cluster:' + data.id, { present });
  }
  const keyToggle = (e, id) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(id); } };
  function reset() {
    present = {};
    selectedId = null;
    if (data) save('mets-cluster:' + data.id, { present });
  }

  let verdictText = $derived.by(() => {
    const v = (data && data.verdicts) || FALLBACK.verdicts;
    if (meets) return v.meets;
    return (v.notyet || '{n} of 5 — not yet').replace('{n}', String(count));
  });

  // Lever badge geometry: two badges above the hub, arrows pointing down into it.
  let levers = $derived(data && data.levers && Array.isArray(data.levers.items) ? data.levers.items : []);
</script>

{#if !data}
  <div class="mc card"><p>Loading…</p></div>
{:else}
  <figure class="mc card">
    <figcaption class="head">
      <strong>{data.title || 'Metabolic syndrome — a cluster, not a single disease'}</strong>
      <span class="hint">Toggle each component · any 3 of 5 meets the criteria</span>
    </figcaption>
    {#if data.intro}<p class="intro">{data.intro}</p>{/if}

    <div class="stage">
      <svg viewBox="0 0 600 520" preserveAspectRatio="xMidYMid meet" role="img"
           aria-label="Metabolic syndrome clustering wheel: insulin resistance and central adiposity at the hub, with five components — central obesity, raised triglycerides, low HDL, raised blood pressure and raised fasting glucose — orbiting it. Sleep loss and stress feed the hub.">
        <defs>
          <marker id="mc-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#8a98a3"/></marker>
          <marker id="mc-arr-on" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#08503f"/></marker>
          <marker id="mc-lev" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#b0471d"/></marker>
        </defs>

        <!-- spokes: hub -> component -->
        {#each placed as p}
          <line x1={CX} y1={CY} x2={p.x} y2={p.y}
                stroke={p.on ? 'var(--brand-ink)' : 'var(--line)'} stroke-width={p.on ? 3 : 2}
                marker-end={p.on ? 'url(#mc-arr-on)' : 'url(#mc-arr)'} />
        {/each}

        <!-- lever badges feeding the hub from above -->
        {#each levers as lv, i}
          {@const lx = CX + (i === 0 ? -104 : 104)}
          {@const ly = 44}
          <line x1={lx} y1={ly + 20} x2={CX + (i === 0 ? -20 : 20)} y2={CY - HUB_R - 4}
                stroke="var(--warn)" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#mc-lev)" />
          <g class="lever">
            <rect x={lx - 66} y={ly - 15} width="132" height="34" rx="8" />
            <text class="lev-lab" x={lx} y={ly + 6} text-anchor="middle">{lv.label}</text>
          </g>
        {/each}

        <!-- component nodes (toggleable) -->
        {#each placed as p}
          <g class="node" class:on={p.on} role="button" tabindex="0" aria-pressed={p.on}
             aria-label={`${p.label}: ${p.threshold}. ${p.on ? 'Present' : 'Absent'}. Activate to toggle.`}
             onclick={() => toggle(p.id)} onkeydown={(e) => keyToggle(e, p.id)}>
            <circle cx={p.x} cy={p.y} r={NODE_R} />
            {#if p.on}<text class="tick" x={p.x + NODE_R - 12} y={p.y - NODE_R + 16} text-anchor="middle">✓</text>{/if}
            <text class="plab" x={p.x} y={p.y - 4} text-anchor="middle">{p.label}</text>
            <text class="pthr" x={p.x} y={p.y + 13} text-anchor="middle">{p.threshold}</text>
          </g>
        {/each}

        <!-- hub -->
        <g class="hub" class:meets>
          <circle cx={CX} cy={CY} r={HUB_R} />
          <text class="hlab" x={CX} y={CY - 8} text-anchor="middle">{(data.hub && data.hub.label) || 'Insulin resistance'}</text>
          <text class="hsub" x={CX} y={CY + 11} text-anchor="middle">{(data.hub && data.hub.sub) || '+ central adiposity'}</text>
          <text class="hroot" x={CX} y={CY + 30} text-anchor="middle">shared root</text>
        </g>
      </svg>
    </div>

    <!-- criteria indicator -->
    <div class="verdict" class:meets aria-live="polite">
      <div class="meter" role="img" aria-label={`${count} of ${components.length} components present`}>
        {#each components as _c, i}
          <span class="pip" class:filled={i < count}></span>
        {/each}
      </div>
      <strong class="vtext">{verdictText}</strong>
      {#if count > 0}<button type="button" class="reset" onclick={reset}>Reset</button>{/if}
    </div>
    <p class="nosingle">No single component is obligatory — <b>any</b> three of the five meet the criteria.</p>

    <!-- selected component detail -->
    {#if selected}
      <div class="panel" aria-live="polite">
        <h4>{selected.label} <span class="state" class:on={selected.on}>{selected.on ? 'present' : 'absent'}</span></h4>
        <p class="thr">{selected.threshold}</p>
        {#if selected.note}<p class="pn">{selected.note}</p>{/if}
      </div>
    {:else}
      <p class="prompt">{(data.hub && data.hub.note) || 'Click a component to toggle it and read what its threshold means.'}</p>
    {/if}

    <!-- modifiable levers -->
    <div class="levers">
      <span class="lev-cap">🡇 {(data.levers && data.levers.caption) || 'Modifiable levers that feed the hub'}</span>
      <ul>
        {#each levers as lv}
          <li><b>{lv.label}</b>{lv.note ? ' — ' + lv.note : ''}</li>
        {/each}
      </ul>
    </div>

    {#if data.caption}<p class="caption">{data.caption}</p>{/if}
    {#if data.credit}<p class="credit">{data.credit}</p>{/if}
  </figure>
{/if}

<style>
  .mc {
    --surface:#fff; --ink:#1a2027; --muted:#5b6670; --line:#d8dee5;
    --brand-ink:#08503f; --brand-bg:#eef5f2; --focus:#1664c0; --warn:#b0471d; --warn-bg:#fdf2ec;
    color:var(--ink); font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; margin:1.2rem 0;
  }
  .mc.card { background:var(--surface); border:1px solid var(--line); border-radius:10px; padding:16px 20px; max-width:720px; }
  .mc .head { display:flex; flex-wrap:wrap; gap:6px 12px; align-items:baseline; justify-content:space-between; border-bottom:1px solid var(--line); padding-bottom:10px; margin-bottom:10px; }
  .mc .hint { font-size:.78rem; color:var(--muted); }
  .mc .intro { font-size:.92rem; margin:0 0 10px; }
  .mc button { font:inherit; cursor:pointer; }

  .mc .stage { width:100%; }
  .mc svg { display:block; width:100%; height:auto; background:linear-gradient(#fcfdfd,#f6f9f8); border:1px solid #eef1f4; border-radius:8px; }

  .mc .node { cursor:pointer; }
  .mc .node circle { fill:#f3f5f7; stroke:#aab4bd; stroke-width:2; transition:fill .2s, stroke .2s, stroke-width .2s; }
  .mc .node:hover circle { fill:#e9edf1; }
  .mc .node.on circle { fill:var(--brand-bg); stroke:var(--brand-ink); stroke-width:3; }
  .mc .plab { font-size:12px; font-weight:700; fill:#48555f; }
  .mc .node.on .plab { fill:var(--brand-ink); }
  .mc .pthr { font-size:9.5px; font-weight:600; fill:var(--muted); }
  .mc .node.on .pthr { fill:#2c6a58; }
  .mc .tick { font-size:20px; font-weight:800; fill:var(--brand-ink); }

  .mc .hub circle { fill:#eef2f6; stroke:#7a8791; stroke-width:2.5; transition:fill .25s, stroke .25s; }
  .mc .hub.meets circle { fill:var(--brand-bg); stroke:var(--brand-ink); stroke-width:3.5; }
  .mc .hlab { font-size:14px; font-weight:800; fill:#3a464f; }
  .mc .hub.meets .hlab { fill:var(--brand-ink); }
  .mc .hsub { font-size:11px; font-weight:700; fill:var(--muted); }
  .mc .hub.meets .hsub { fill:#2c6a58; }
  .mc .hroot { font-size:8.5px; font-weight:600; fill:var(--muted); letter-spacing:.05em; text-transform:uppercase; }

  .mc .lever rect { fill:var(--warn-bg); stroke:var(--warn); stroke-width:1.5; }
  .mc .lev-lab { font-size:11px; font-weight:700; fill:var(--warn); }

  .mc .verdict { display:flex; align-items:center; gap:12px; flex-wrap:wrap; margin-top:12px; border:1px solid var(--line); border-left-width:4px; border-left-color:var(--muted); border-radius:8px; padding:10px 14px; background:#fbfbfc; transition:border-color .2s, background .2s; }
  .mc .verdict.meets { border-left-color:var(--brand-ink); background:var(--brand-bg); }
  .mc .meter { display:flex; gap:5px; }
  .mc .pip { width:16px; height:16px; border-radius:50%; border:2px solid var(--line); background:#fff; transition:background .2s, border-color .2s; }
  .mc .pip.filled { background:var(--brand-ink); border-color:var(--brand-ink); }
  .mc .vtext { font-size:.98rem; color:var(--muted); }
  .mc .verdict.meets .vtext { color:var(--brand-ink); }
  .mc .reset { margin-left:auto; background:none; border:1px solid var(--line); border-radius:6px; padding:3px 10px; font-size:.78rem; color:var(--muted); }
  .mc .reset:hover { border-color:var(--brand-ink); color:var(--brand-ink); }
  .mc .nosingle { font-size:.82rem; color:var(--muted); margin:8px 2px 0; }

  .mc .panel { margin-top:10px; border:1px solid var(--line); border-radius:8px; padding:10px 14px; background:#fbfdfc; }
  .mc .panel h4 { margin:0 0 4px; font-size:1rem; color:var(--brand-ink); display:flex; align-items:baseline; gap:8px; flex-wrap:wrap; }
  .mc .state { font-size:.72rem; font-weight:700; text-transform:uppercase; letter-spacing:.03em; color:var(--muted); border:1px solid var(--line); border-radius:5px; padding:1px 6px; }
  .mc .state.on { color:var(--brand-ink); border-color:var(--brand-ink); background:var(--brand-bg); }
  .mc .panel .thr { margin:0 0 4px; font-size:.9rem; font-weight:700; font-variant-numeric:tabular-nums; }
  .mc .panel .pn { margin:0; font-size:.9rem; }
  .mc .prompt { margin:10px 2px 0; font-size:.9rem; color:var(--muted); }

  .mc .levers { margin-top:12px; border:1px dashed var(--warn); border-radius:8px; padding:8px 14px 10px; background:var(--warn-bg); }
  .mc .lev-cap { font-size:.8rem; font-weight:700; color:var(--warn); text-transform:uppercase; letter-spacing:.02em; }
  .mc .levers ul { margin:6px 0 0; padding-left:18px; }
  .mc .levers li { font-size:.86rem; margin:2px 0; }

  .mc .caption { margin:12px 2px 0; font-size:.88rem; padding:8px 12px; background:var(--brand-bg); border-left:3px solid var(--brand-ink); border-radius:0 6px 6px 0; }
  .mc .credit { color:var(--muted); font-size:.72rem; margin:8px 0 0; }

  .mc :focus-visible { outline:3px solid var(--focus); outline-offset:2px; border-radius:6px; }
  @media (prefers-reduced-motion: reduce) { .mc * { transition:none !important; } }
  @media (max-width:520px) { .mc.card { padding:14px; } }
</style>
