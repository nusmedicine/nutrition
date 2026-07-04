<script>
  // PillarsHub — the Chapter 1 (Why nutrition matters) island. A radial hub-and-spoke diagram:
  // Nutrition sits at the centre, the five other pillars of health orbit it, and each is joined
  // by a two-way link. Click a pillar (or its link) to see how it and nutrition act on each other
  // in BOTH directions — making concrete the chapter's point that nutrition is the hub that moves
  // the whole web. Bespoke inline-SVG, data-driven; shares the card/colour language of the other
  // islands (brand green = the hub).
  import { onMount } from 'svelte';
  import { load, save } from './lib/store.js';
  import { loadManifest } from './lib/manifest.js';

  let { src } = $props();

  const COL = { hub: '#08503f', pillar: '#3a6ea5', line: '#b9c4cc', sel: '#c0392b', muted: '#7a8791' };

  const FALLBACK = {
    id: 'pillars-hub', title: 'The six pillars — nutrition as the hub',
    hub: { label: 'Nutrition' },
    pillars: [
      { id: 'activity', label: 'Activity', full: 'Physical activity', link: 'Diet and movement act together on weight and glucose.' },
      { id: 'sleep', label: 'Sleep', full: 'Restorative sleep', link: 'Short sleep raises appetite; late meals worsen sleep.' },
      { id: 'stress', label: 'Stress', full: 'Stress management', link: 'Stress (cortisol) drives comfort-eating.' },
      { id: 'social', label: 'Social', full: 'Social connection', link: 'Eating is social — meals, hawker culture, festivals.' },
      { id: 'substances', label: 'Substances', full: 'Avoiding risky substances', link: 'Alcohol is empty energy and disinhibits food choice.' },
    ],
  };

  let data = $state(null);
  let error = $state(null);
  let selected = $state(null);

  onMount(async () => {
    try {
      if (!src) throw new Error('no src');
      const parsed = await loadManifest(src);
      if (!parsed || !Array.isArray(parsed.pillars) || !parsed.pillars.length) throw new Error('empty');
      data = parsed;
    } catch (e) {
      error = String((e && e.message) || e);
      data = FALLBACK;
    }
    const saved = load('pillars-hub:' + data.id);
    if (saved && saved.selected && data.pillars.some((p) => p.id === saved.selected)) selected = saved.selected;
  });

  let pillars = $derived(data ? data.pillars : []);
  const CX = 320, CY = 232, R = 150, HUB_R = 60, NODE_R = 46;

  // radial positions: first pillar at top, then clockwise
  let placed = $derived(pillars.map((p, i) => {
    const a = (-90 + i * (360 / pillars.length)) * Math.PI / 180;
    return { ...p, x: CX + R * Math.cos(a), y: CY + R * Math.sin(a) };
  }));

  let sel = $derived(selected ? placed.find((p) => p.id === selected) : null);

  function pick(id) {
    selected = selected === id ? null : id;
    if (data) save('pillars-hub:' + data.id, { selected });
  }
  const keyPick = (e, id) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(id); } };
</script>

{#if !data}
  <div class="ph card"><p>Loading…</p></div>
{:else}
  <figure class="ph card">
    <figcaption class="head">
      <strong>{data.title || 'The six pillars — nutrition as the hub'}</strong>
      <span class="hint">Click a pillar to see how it and nutrition pull on each other</span>
    </figcaption>
    {#if data.intro}<p class="intro">{data.intro}</p>{/if}

    <div class="stage">
      <svg viewBox="0 0 640 470" preserveAspectRatio="xMidYMid meet" role="img"
           aria-label="Six pillars of health with nutrition at the hub, linked to physical activity, sleep, stress, social connection and risky substances">
        <defs>
          <marker id="ph-a" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto"><path d="M0,0 L5.5,3 L0,6 Z" fill="#8a98a3"/></marker>
          <marker id="ph-s" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto"><path d="M0,0 L5.5,3 L0,6 Z" fill={COL.sel}/></marker>
        </defs>

        <!-- two-way links -->
        {#each placed as p}
          {@const on = selected === p.id}
          <line x1={CX} y1={CY} x2={p.x} y2={p.y}
                stroke={on ? COL.sel : COL.line} stroke-width={on ? 3 : 2}
                marker-start={on ? 'url(#ph-s)' : 'url(#ph-a)'} marker-end={on ? 'url(#ph-s)' : 'url(#ph-a)'} />
        {/each}

        <!-- pillar nodes -->
        {#each placed as p}
          {@const on = selected === p.id}
          <g class="node" class:sel={on} role="button" tabindex="0" aria-pressed={on}
             aria-label={p.full || p.label}
             onclick={() => pick(p.id)} onkeydown={(e) => keyPick(e, p.id)}>
            <circle cx={p.x} cy={p.y} r={NODE_R} />
            <text class="plab" x={p.x} y={p.y + 4} text-anchor="middle">{p.label}</text>
          </g>
        {/each}

        <!-- hub -->
        <g class="hub">
          <circle cx={CX} cy={CY} r={HUB_R} />
          <text class="hlab" x={CX} y={CY - 2} text-anchor="middle">{(data.hub && data.hub.label) || 'Nutrition'}</text>
          <text class="hsub" x={CX} y={CY + 15} text-anchor="middle">the hub</text>
        </g>
      </svg>
    </div>

    {#if sel}
      <div class="panel" aria-live="polite">
        <h4>Nutrition ↔ {sel.full || sel.label}</h4>
        <p>{sel.link}</p>
      </div>
    {:else}
      <p class="prompt">{(data.hub && data.hub.note) || 'Nutrition connects to every other pillar, in both directions — pull on it and the whole web tends to move. Click a pillar to see the link.'}</p>
    {/if}

    {#if data.footer}<p class="footer">{data.footer}</p>{/if}
    {#if data.credit}<p class="credit">{data.credit}</p>{/if}
  </figure>
{/if}

<style>
  .ph {
    --surface:#fff; --ink:#1a2027; --muted:#5b6670; --line:#d8dee5;
    --brand-ink:#08503f; --brand-bg:#eef5f2; --focus:#1664c0;
    color:var(--ink); font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; margin:1.2rem 0;
  }
  .ph.card { background:var(--surface); border:1px solid var(--line); border-radius:10px; padding:16px 20px; max-width:720px; }
  .ph .head { display:flex; flex-wrap:wrap; gap:6px 12px; align-items:baseline; justify-content:space-between; border-bottom:1px solid var(--line); padding-bottom:10px; margin-bottom:10px; }
  .ph .hint { font-size:.78rem; color:var(--muted); }
  .ph .intro { font-size:.92rem; margin:0 0 8px; }

  .ph .stage { width:100%; }
  .ph svg { display:block; width:100%; height:auto; background:linear-gradient(#fcfdfd,#f6f9f8); border:1px solid #eef1f4; border-radius:8px; }
  .ph .node { cursor:pointer; }
  .ph .node circle { fill:#eaf1f7; stroke:#3a6ea5; stroke-width:2; transition:fill .2s, stroke-width .2s; }
  .ph .node:hover circle { fill:#dce8f3; }
  .ph .node.sel circle { fill:#fbe9e7; stroke:#c0392b; stroke-width:3; }
  .ph .plab { font-size:12.5px; font-weight:700; fill:#274b6d; }
  .ph .node.sel .plab { fill:#a3311f; }
  .ph .hub circle { fill:var(--brand-bg); stroke:var(--brand-ink); stroke-width:2.5; }
  .ph .hlab { font-size:15px; font-weight:800; fill:var(--brand-ink); }
  .ph .hsub { font-size:9.5px; font-weight:600; fill:var(--muted); letter-spacing:.03em; text-transform:uppercase; }

  .ph .panel { margin-top:10px; border:1px solid var(--line); border-radius:8px; padding:10px 14px; background:#fbfdfc; }
  .ph .panel h4 { margin:0 0 6px; font-size:1rem; color:var(--brand-ink); }
  .ph .panel p { margin:0; font-size:.92rem; }
  .ph .prompt { margin:10px 2px 0; font-size:.9rem; color:var(--muted); }
  .ph .footer { margin:10px 2px 0; font-size:.86rem; font-weight:600; color:var(--brand-ink); padding:8px 12px; background:var(--brand-bg); border-left:3px solid var(--brand-ink); border-radius:0 6px 6px 0; }
  .ph .credit { color:var(--muted); font-size:.72rem; margin:8px 0 0; }
  .ph :focus-visible { outline:3px solid var(--focus); outline-offset:2px; border-radius:6px; }
  @media (prefers-reduced-motion: reduce) { .ph * { transition:none !important; } }
  @media (max-width:520px) { .ph.card { padding:14px; } }
</style>
