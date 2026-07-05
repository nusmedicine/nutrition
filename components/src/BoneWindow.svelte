<script>
  // BoneWindow — the Childhood & Adolescence teaching island. A "bone bank" that fills over an age
  // slider (8 -> 25): the learner scrubs age and toggles three BUILDERS (weight-bearing activity,
  // adequate calcium, sufficient vitamin D) that raise the attainable peak within a MODIFIABLE band,
  // plus one THREAT (low energy availability / amenorrhoea) that lowers the ceiling (a multiplicative
  // penalty) and shades a permanent deficit. It teaches three things a paragraph can't: (a) accrual is
  // steepest in the ~4-year
  // circumpubertal window and then PLATEAUS by the early 20s — the window closes; (b) only a fraction of
  // peak bone mass is lifestyle-modifiable (the shaded band) within a genetically-set ceiling; and (c)
  // under-fuelling lowers the ceiling for good. Deliberately SCHEMATIC — it teaches the shape and
  // direction, not a quantitative predictor. Data-driven from a YAML manifest; shares the card/chip/
  // colour language of the other islands.
  import { onMount } from 'svelte';
  import { load, save } from './lib/store.js';
  import { loadManifest } from './lib/manifest.js';

  let { src } = $props();

  const FALLBACK = {
    id: 'bone-window',
    title: 'The bone bank: a window that closes',
    intro:
      'Most of the bone you carry as an adult is banked in the few years around the pubertal growth spurt. Scrub the age, then toggle the levers — watch the bank fill, then plateau for life.',
    ageMin: 8,
    ageMax: 25,
    windowFrom: 11,
    windowTo: 16,
    modifiableFloor: 70,
    accrual: [
      { age: 8, f: 0.35 }, { age: 10, f: 0.45 }, { age: 12, f: 0.56 }, { age: 13, f: 0.64 },
      { age: 14, f: 0.73 }, { age: 15, f: 0.81 }, { age: 16, f: 0.88 }, { age: 17, f: 0.93 },
      { age: 18, f: 0.96 }, { age: 19, f: 0.98 }, { age: 20, f: 0.99 }, { age: 25, f: 1.0 },
    ],
    levers: [
      { key: 'activity', label: 'Weight-bearing activity', weight: 0.4, grade: 'A',
        why: 'The strongest lever, and most powerful in early puberty — high-impact loading builds bone directly.' },
      { key: 'calcium', label: 'Adequate calcium', weight: 0.35, grade: 'A',
        why: 'Grade-A for accrual — but food-first. A supplement helps a teen who is short of calcium, little if they already have enough.' },
      { key: 'vitd', label: 'Vitamin D sufficient', weight: 0.25, grade: 'B',
        why: 'Supports accrual, but supplements build bone only in the deficient — not in the already-replete.' },
    ],
    threat: { key: 'lowEA', label: 'Low energy availability / periods stopped', cap: 0.82,
      why: 'Under-fuelling (dieting or over-training) drops oestrogen and stalls accrual — it shaves the ceiling for life, whatever else you do. Recognise and refer.' },
    note: "Genetics sets most of the bank's height (the ceiling); lifestyle moves the balance within the shaded band, and the levers show the payoff of reaching adequacy — a child already getting enough gains little from more. The window largely closes by the early twenties.",
    credit: 'Schematic — teaches the shape of accrual, not exact values. Grounded in Baxter-Jones 2011; Weaver/NOF 2016; Winzenberg 2006/2011; Ackerman & Misra 2011.',
  };

  let data = $state(null);
  let error = $state(null);
  let age = $state(13);
  let on = $state({}); // builder key -> bool
  let threatOn = $state(false);

  onMount(async () => {
    try {
      if (!src) throw new Error('no src');
      const parsed = await loadManifest(src);
      if (!parsed || !Array.isArray(parsed.accrual) || !parsed.accrual.length) throw new Error('empty');
      data = parsed;
    } catch (e) {
      error = String((e && e.message) || e);
      data = FALLBACK;
    }
    if (typeof data.ageMin === 'number') age = Math.round((data.ageMin + data.ageMax) / 2) - 1;
    const saved = load('bone-window:' + data.id);
    if (saved) {
      if (Number.isFinite(saved.age)) age = saved.age;
      if (saved.on && typeof saved.on === 'object') on = { ...saved.on };
      if (typeof saved.threatOn === 'boolean') threatOn = saved.threatOn;
    }
  });

  $effect(() => {
    if (!data) return;
    save('bone-window:' + data.id, { age, on, threatOn });
  });

  const G = { W: 540, H: 300, padL: 44, padR: 16, padT: 20, padB: 42 }; // svg geometry
  let levers = $derived(data ? data.levers || [] : []);
  let floorFrac = $derived(data ? (data.modifiableFloor ?? 70) / 100 : 0.7);

  // Attainable peak (as a fraction of the genetic ceiling=1.0), driven by the active builders.
  let uncappedPeak = $derived.by(() => {
    const active = levers.filter((l) => on[l.key]).reduce((s, l) => s + (l.weight || 0), 0);
    return floorFrac + (1 - floorFrac) * Math.min(active, 1);
  });
  // `cap` is a retained-fraction penalty: low energy availability shaves (1 - cap) off the attainable
  // peak, so the permanent deficit is visible whatever the lever state — even with no builders active.
  let cap = $derived(data && data.threat ? data.threat.cap ?? 0.82 : 0.82);
  let attainedPeak = $derived(threatOn ? uncappedPeak * cap : uncappedPeak);

  const mapX = (a) => G.padL + ((a - data.ageMin) / (data.ageMax - data.ageMin)) * (G.W - G.padL - G.padR);
  const mapY = (pct) => G.padT + (1 - pct / 100) * (G.H - G.padT - G.padB);

  // Cumulative fraction of the attained peak reached by a given age (interpolated from the knots).
  function accruedFrac(a) {
    const k = data.accrual;
    if (a <= k[0].age) return k[0].f;
    if (a >= k[k.length - 1].age) return k[k.length - 1].f;
    for (let i = 0; i < k.length - 1; i++) {
      if (a >= k[i].age && a <= k[i + 1].age) {
        const t = (a - k[i].age) / (k[i + 1].age - k[i].age);
        return k[i].f + t * (k[i + 1].f - k[i].f);
      }
    }
    return 1;
  }

  const bonePct = (a) => attainedPeak * accruedFrac(a) * 100; // % of genetic ceiling banked by age a
  let currentPct = $derived(data ? bonePct(age) : 0);

  // Curve sampled across the whole age range, at the current attained peak.
  let curve = $derived.by(() => {
    if (!data) return [];
    const pts = [];
    for (let a = data.ageMin; a <= data.ageMax; a += 0.5) pts.push({ a, y: bonePct(a) });
    return pts;
  });
  const solidPath = $derived(curve.filter((p) => p.a <= age).map((p, i) => `${i ? 'L' : 'M'}${mapX(p.a).toFixed(1)},${mapY(p.y).toFixed(1)}`).join(' '));
  const dashPath = $derived(curve.filter((p) => p.a >= age).map((p, i) => `${i ? 'L' : 'M'}${mapX(p.a).toFixed(1)},${mapY(p.y).toFixed(1)}`).join(' '));
  const fillPath = $derived.by(() => {
    const seg = curve.filter((p) => p.a <= age);
    if (!seg.length) return '';
    const top = seg.map((p) => `L${mapX(p.a).toFixed(1)},${mapY(p.y).toFixed(1)}`).join(' ');
    return `M${mapX(data.ageMin).toFixed(1)},${mapY(0).toFixed(1)} ${top} L${mapX(age).toFixed(1)},${mapY(0).toFixed(1)} Z`;
  });

  function toggle(key) { on = { ...on, [key]: !on[key] }; }
  const xTicks = [8, 11, 14, 17, 20, 23];

  // The live "why" line reacts to the last-relevant state.
  let why = $derived.by(() => {
    if (!data) return '';
    if (threatOn) return data.threat.why;
    const activeLever = levers.find((l) => on[l.key]);
    if (age >= 20) return 'The window has essentially closed — the bank is now defended, not filled. What you banked by the early twenties is what you carry.';
    if (age >= (data.windowFrom || 11) && age <= (data.windowTo || 16)) return 'You are inside the window: accrual is at its steepest. This is where activity and calcium buy the most bone.';
    if (activeLever) return activeLever.why;
    return 'Before puberty the bank fills slowly. The steep climb — and the biggest opportunity — is still ahead.';
  });
</script>

{#if !data}
  <div class="bw card"><p>Loading…</p></div>
{:else}
  <figure class="bw card">
    <figcaption class="head">
      <strong>{data.title}</strong>
      <span class="hint">Scrub age · toggle the levers</span>
    </figcaption>
    {#if data.intro}<p class="intro">{data.intro}</p>{/if}

    <svg class="chart" viewBox={`0 0 ${G.W} ${G.H}`} role="img"
      aria-label={`Bone accrual curve. At age ${age}, the bone bank is at about ${Math.round(currentPct)} percent of genetic potential${threatOn ? ', with the ceiling lowered by low energy availability' : ''}.`}>
      <defs>
        <pattern id="bw-deficit" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="6" height="6" fill="#fbeae4" />
          <line x1="0" y1="0" x2="0" y2="6" stroke="#b0471d" stroke-width="1.4" />
        </pattern>
      </defs>

      <!-- modifiable band (floor -> ceiling) -->
      <rect x={mapX(data.ageMin)} y={mapY(100)} width={mapX(data.ageMax) - mapX(data.ageMin)}
        height={mapY(data.modifiableFloor) - mapY(100)} fill="#eef5f2" />
      <!-- circumpubertal window shading -->
      <rect x={mapX(data.windowFrom)} y={G.padT} width={mapX(data.windowTo) - mapX(data.windowFrom)}
        height={G.H - G.padT - G.padB} fill="#08503f" opacity="0.07" />
      <text x={(mapX(data.windowFrom) + mapX(data.windowTo)) / 2} y={G.H - G.padB - 6}
        text-anchor="middle" class="wlabel">the window</text>

      <!-- permanent deficit from low energy availability -->
      {#if threatOn && uncappedPeak > attainedPeak}
        <rect x={mapX(data.ageMin)} y={mapY(uncappedPeak * 100)} width={mapX(data.ageMax) - mapX(data.ageMin)}
          height={mapY(attainedPeak * 100) - mapY(uncappedPeak * 100)} fill="url(#bw-deficit)" />
        <text x={mapX(data.ageMax) - 4} y={mapY(uncappedPeak * 100) - 4} text-anchor="end" class="deficit">lost for life</text>
      {/if}

      <!-- genetic ceiling -->
      <line x1={mapX(data.ageMin)} y1={mapY(100)} x2={mapX(data.ageMax)} y2={mapY(100)} class="ceiling" />
      <text x={mapX(data.ageMin) + 4} y={mapY(100) - 5} class="clabel">genetic potential</text>
      <!-- attained peak -->
      <line x1={mapX(data.ageMin)} y1={mapY(attainedPeak * 100)} x2={mapX(data.ageMax)} y2={mapY(attainedPeak * 100)} class="peak" />

      <!-- accrual curve -->
      <path d={fillPath} class="fill" />
      <path d={solidPath} class="line" />
      <path d={dashPath} class="line dash" />

      <!-- current-age marker -->
      <line x1={mapX(age)} y1={G.padT} x2={mapX(age)} y2={G.H - G.padB} class="agev" />
      <circle cx={mapX(age)} cy={mapY(currentPct)} r="5" class="dot" />

      <!-- axes -->
      <line x1={G.padL} y1={G.H - G.padB} x2={G.W - G.padR} y2={G.H - G.padB} class="axis" />
      {#each xTicks as t}
        <text x={mapX(t)} y={G.H - G.padB + 16} text-anchor="middle" class="tick">{t}</text>
      {/each}
      <text x={(G.padL + G.W - G.padR) / 2} y={G.H - 6} text-anchor="middle" class="axtitle">age (years)</text>
      <text x="12" y={(G.padT + G.H - G.padB) / 2} class="axtitle" transform={`rotate(-90 12 ${(G.padT + G.H - G.padB) / 2})`} text-anchor="middle">bone mass (% of potential)</text>
    </svg>

    <div class="readout" aria-live="polite">
      <span class="big">≈{Math.round(currentPct)}%</span>
      <span class="rlabel">of potential banked by age <b>{age}</b></span>
    </div>

    <label class="slider">
      <span>Age: <b>{age}</b></span>
      <input type="range" min={data.ageMin} max={data.ageMax} step="1" bind:value={age} aria-label="Age in years" />
    </label>

    <div class="chips" role="group" aria-label="Bone-building levers">
      {#each levers as l}
        <button type="button" class="chip build" class:on={on[l.key]} onclick={() => toggle(l.key)} aria-pressed={!!on[l.key]}>
          <span class="tick-mark">{on[l.key] ? '✓' : '+'}</span> {l.label} <span class="grade">grade&nbsp;{l.grade}</span>
        </button>
      {/each}
      <button type="button" class="chip threat" class:on={threatOn} onclick={() => (threatOn = !threatOn)} aria-pressed={threatOn}>
        <span class="tick-mark">⚠</span> {data.threat.label}
      </button>
    </div>

    <p class="why" aria-live="polite">{why}</p>
    {#if data.note}<p class="note">{data.note}</p>{/if}
    {#if data.credit}<p class="credit">{data.credit}</p>{/if}
  </figure>
{/if}

<style>
  .bw {
    --surface:#fff; --ink:#1a2027; --muted:#5b6670; --line:#d8dee5;
    --brand-ink:#08503f; --brand-bg:#eef5f2; --focus:#1664c0; --warn:#b0471d;
    color:var(--ink); font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; margin:1.2rem 0;
  }
  .bw.card { background:var(--surface); border:1px solid var(--line); border-radius:10px; padding:16px 20px; max-width:760px; }
  .bw .head { display:flex; flex-wrap:wrap; gap:6px 12px; align-items:baseline; justify-content:space-between; border-bottom:1px solid var(--line); padding-bottom:10px; margin-bottom:12px; }
  .bw .hint { font-size:.78rem; color:var(--muted); }
  .bw .intro { font-size:.92rem; margin:0 0 14px; }
  .bw button { font:inherit; cursor:pointer; }

  .bw .chart { width:100%; height:auto; display:block; background:#fbfdfc; border:1px solid var(--line); border-radius:8px; }
  .bw .ceiling { stroke:var(--muted); stroke-width:1.4; stroke-dasharray:5 4; }
  .bw .peak { stroke:var(--brand-ink); stroke-width:1.4; stroke-dasharray:3 3; opacity:.75; }
  .bw .line { fill:none; stroke:var(--brand-ink); stroke-width:2.6; stroke-linejoin:round; stroke-linecap:round; }
  .bw .line.dash { stroke-dasharray:4 5; opacity:.5; }
  .bw .fill { fill:var(--brand-ink); opacity:.14; }
  .bw .agev { stroke:var(--focus); stroke-width:1; stroke-dasharray:2 3; opacity:.6; }
  .bw .dot { fill:var(--focus); stroke:#fff; stroke-width:1.5; }
  .bw .axis { stroke:var(--line); stroke-width:1.2; }
  .bw .tick, .bw .axtitle, .bw .clabel, .bw .wlabel, .bw .deficit { font-size:11px; fill:var(--muted); }
  .bw .axtitle { font-size:11px; }
  .bw .clabel { fill:var(--muted); }
  .bw .deficit { fill:var(--warn); font-weight:700; }
  .bw .wlabel { fill:var(--brand-ink); opacity:.8; font-style:italic; }

  .bw .readout { display:flex; align-items:baseline; gap:8px; margin:12px 0 4px; }
  .bw .readout .big { font-size:1.7rem; font-weight:800; color:var(--brand-ink); font-variant-numeric:tabular-nums; }
  .bw .readout .rlabel { font-size:.85rem; color:var(--muted); }

  .bw .slider { display:flex; align-items:center; gap:12px; margin:8px 0 14px; font-size:.85rem; }
  .bw .slider input { flex:1; accent-color:var(--brand-ink); }

  .bw .chips { display:flex; flex-wrap:wrap; gap:6px; }
  .bw .chip { padding:5px 11px; border:1px solid var(--line); border-radius:8px; background:#fff; color:var(--ink); font-size:.82rem; display:inline-flex; align-items:center; gap:6px; }
  .bw .chip .tick-mark { font-weight:800; }
  .bw .chip .grade { font-size:.68rem; color:var(--muted); }
  .bw .chip.build:hover { border-color:var(--brand-ink); }
  .bw .chip.build.on { border-color:var(--brand-ink); border-width:2px; padding:4px 10px; background:var(--brand-bg); color:var(--brand-ink); font-weight:600; }
  .bw .chip.build.on .grade { color:var(--brand-ink); }
  .bw .chip.threat:hover { border-color:var(--warn); }
  .bw .chip.threat.on { border-color:var(--warn); border-width:2px; padding:4px 10px; background:#fbeae4; color:var(--warn); font-weight:600; }

  .bw .why { font-size:.9rem; margin:12px 0 0; padding:8px 12px; background:var(--brand-bg); border-left:3px solid var(--brand-ink); border-radius:0 6px 6px 0; }
  .bw .note { font-size:.8rem; color:var(--muted); margin:10px 0 0; }
  .bw .credit { color:var(--muted); font-size:.72rem; margin:8px 0 0; }

  .bw :focus-visible { outline:3px solid var(--focus); outline-offset:2px; border-radius:6px; }
  @media (prefers-reduced-motion: reduce) { .bw * { transition:none !important; } }
  @media (max-width:520px) { .bw .chip { font-size:.76rem; } .bw .readout .big { font-size:1.4rem; } }
</style>
