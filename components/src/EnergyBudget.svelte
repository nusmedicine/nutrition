<script>
  // EnergyBudget — the Chapter 2 (Energy Balance) teaching island. An interactive estimator:
  // enter sex, weight, height, age and an activity level, and it computes BMR (Mifflin–St Jeor)
  // and total energy expenditure (TEE = BMR × PAL), then splits TEE live into its three
  // components — BMR + TEF + physical activity — as a stacked bar, so the reader can SEE that BMR
  // is the biggest slice and physical activity is the variable one. Ch.8's adaptive-thermogenesis
  // section calls back to this budget. Shares the card/stepper/colour language of the other islands.
  import { onMount } from 'svelte';
  import { load, save } from './lib/store.js';
  import { loadManifest } from './lib/manifest.js';

  let { src } = $props();

  const COL = { bmr: '#3a6ea5', tef: '#d99a2b', pa: '#2f8f5b', brand: '#08503f', muted: '#7a8791' };

  const FALLBACK = {
    id: 'energy-budget',
    title: "Estimate a person's energy needs",
    tefFraction: 0.10,
    activity: [
      { id: 'sedentary', label: 'Sedentary', pal: 1.4, note: 'Desk-bound, little deliberate exercise.' },
      { id: 'light', label: 'Lightly active', pal: 1.6, note: 'On your feet or light exercise a few days a week.' },
      { id: 'moderate', label: 'Moderately active', pal: 1.75, note: 'Regular exercise or an active job.' },
      { id: 'active', label: 'Very active', pal: 2.0, note: 'Hard daily training or heavy physical work.' },
    ],
    presets: [
      { id: 'default', label: 'Worked example', sex: 'female', weight: 68, height: 157, age: 52, activity: 'sedentary' },
    ],
  };

  let data = $state(null);
  let error = $state(null);

  // inputs
  let sex = $state('female');
  let weight = $state(68);   // kg
  let height = $state(157);  // cm
  let age = $state(52);      // years
  let activityId = $state('sedentary');

  onMount(async () => {
    try {
      if (!src) throw new Error('no src');
      const parsed = await loadManifest(src);
      if (!parsed || !Array.isArray(parsed.activity) || !parsed.activity.length) throw new Error('empty');
      data = parsed;
    } catch (e) {
      error = String((e && e.message) || e);
      data = FALLBACK;
    }
    const saved = load('energy-budget:' + data.id);
    if (saved && Number.isFinite(saved.weight)) {
      applyInputs(saved);
    } else {
      const p = (data.presets && data.presets[0]) || null;
      if (p) applyInputs(p);
    }
  });

  function applyInputs(o) {
    if (o.sex === 'male' || o.sex === 'female') sex = o.sex;
    if (Number.isFinite(o.weight)) weight = clamp(o.weight, 30, 200);
    if (Number.isFinite(o.height)) height = clamp(o.height, 120, 210);
    if (Number.isFinite(o.age)) age = clamp(o.age, 18, 90);
    if (o.activity && (data.activity || []).some((a) => a.id === o.activity)) activityId = o.activity;
    else if (o.activityId && (data.activity || []).some((a) => a.id === o.activityId)) activityId = o.activityId;
  }

  const clamp = (n, lo, hi) => Math.min(Math.max(n, lo), hi);

  // persist inputs whenever they change (after data is loaded)
  $effect(() => {
    if (!data) return;
    save('energy-budget:' + data.id, { sex, weight, height, age, activityId });
  });

  let levels = $derived(data ? data.activity : []);
  let level = $derived(levels.find((a) => a.id === activityId) || levels[0] || null);
  let pal = $derived(level ? level.pal : 1.4);
  let tefFraction = $derived(data && Number.isFinite(data.tefFraction) ? data.tefFraction : 0.10);

  // Mifflin–St Jeor
  let bmr = $derived(Math.round(10 * weight + 6.25 * height - 5 * age + (sex === 'male' ? 5 : -161)));
  let tee = $derived(Math.round(bmr * pal));
  let tef = $derived(Math.round(tefFraction * tee));
  let pa = $derived(Math.max(0, tee - bmr - tef));

  const pct = (part, whole) => (whole > 0 ? Math.round((part / whole) * 100) : 0);

  // stacked-bar geometry
  const BW = 640, BX = 30;
  let segs = $derived.by(() => {
    if (!tee) return [];
    const parts = [
      { id: 'bmr', label: 'BMR', kcal: bmr, col: COL.bmr },
      { id: 'tef', label: 'TEF', kcal: tef, col: COL.tef },
      { id: 'pa', label: 'Activity', kcal: pa, col: COL.pa },
    ];
    let x = BX;
    return parts.map((p) => {
      const w = (p.kcal / tee) * BW;
      const seg = { ...p, x, w, mid: x + w / 2, pct: pct(p.kcal, tee) };
      x += w;
      return seg;
    });
  });

  function reset() {
    const p = (data && data.presets && data.presets[0]) || null;
    if (p) applyInputs(p);
  }
</script>

{#if !data}
  <div class="eb card"><p>Loading…</p></div>
{:else}
  <figure class="eb card">
    <figcaption class="head">
      <strong>{data.title || "Estimate a person's energy needs"}</strong>
      <span class="hint">Move the sliders — the budget updates live</span>
    </figcaption>
    {#if data.intro}<p class="intro">{data.intro}</p>{/if}

    <div class="grid">
      <div class="controls">
        <div class="row seg">
          <span class="lab">Sex</span>
          <div class="toggle" role="group" aria-label="Sex">
            <button type="button" class:on={sex === 'female'} onclick={() => (sex = 'female')}>Female</button>
            <button type="button" class:on={sex === 'male'} onclick={() => (sex = 'male')}>Male</button>
          </div>
        </div>

        <div class="row">
          <label for="eb-w">Weight <b>{weight} kg</b></label>
          <input id="eb-w" type="range" min="35" max="150" step="1" bind:value={weight} />
        </div>
        <div class="row">
          <label for="eb-h">Height <b>{height} cm</b></label>
          <input id="eb-h" type="range" min="140" max="200" step="1" bind:value={height} />
        </div>
        <div class="row">
          <label for="eb-a">Age <b>{age} yr</b></label>
          <input id="eb-a" type="range" min="18" max="80" step="1" bind:value={age} />
        </div>

        <div class="row seg">
          <span class="lab">Activity</span>
          <div class="toggle wrap" role="group" aria-label="Activity level">
            {#each levels as a}
              <button type="button" class:on={a.id === activityId} onclick={() => (activityId = a.id)} title={a.note}>
                {a.label}
              </button>
            {/each}
          </div>
        </div>
        {#if level}<p class="note">PAL {pal.toFixed(2)} — {level.note}</p>{/if}
      </div>

      <div class="readout">
        <div class="big">
          <div class="stat"><span class="n">{bmr.toLocaleString()}</span><span class="u">kcal/day</span><span class="k">BMR</span></div>
          <div class="times">×{pal.toFixed(2)}</div>
          <div class="stat total"><span class="n">{tee.toLocaleString()}</span><span class="u">kcal/day</span><span class="k">Total (TEE)</span></div>
        </div>
      </div>
    </div>

    <div class="stage">
      <svg viewBox="0 0 700 116" preserveAspectRatio="xMidYMid meet" role="img"
           aria-label="TEE of {tee} kcal split into BMR {bmr}, TEF {tef} and activity {pa} kcal">
        {#each segs as s}
          {#if s.w > 0}
            <g>
              <rect x={s.x} y="28" width={s.w} height="44" rx="3" style="fill:{s.col}" />
              {#if s.w > 46}
                <text class="segpct" x={s.mid} y="55" text-anchor="middle">{s.pct}%</text>
              {/if}
              <text class="segkcal" x={s.mid} y="90" text-anchor="middle">{s.w > 60 ? s.kcal.toLocaleString() + ' kcal' : s.kcal}</text>
              <text class="seglab" x={s.mid} y="104" text-anchor="middle">{s.w > 44 ? s.label : ''}</text>
            </g>
          {/if}
        {/each}
        <text class="axis" x={BX} y="18">Where a day's energy goes</text>
      </svg>
    </div>

    <p class="legend">
      <span class="key" style="color:{COL.bmr}">■ BMR — just staying alive at rest (the biggest slice)</span>
      <span class="key" style="color:{COL.tef}">■ TEF — digesting the food (~{Math.round(tefFraction * 100)}%)</span>
      <span class="key" style="color:{COL.pa}">■ Activity — the one you can change</span>
    </p>

    <div class="foot">
      <button type="button" class="resetbtn" onclick={reset}>Reset to worked example</button>
      <span class="eqn">BMR = 10·W + 6.25·H − 5·A {sex === 'male' ? '+ 5' : '− 161'} (Mifflin–St Jeor); TEE = BMR × PAL. An estimate, not a measurement.</span>
    </div>
    {#if data.credit}<p class="credit">{data.credit}</p>{/if}
  </figure>
{/if}

<style>
  .eb {
    --surface:#fff; --ink:#1a2027; --muted:#5b6670; --line:#d8dee5;
    --brand-ink:#08503f; --brand-bg:#eef5f2; --focus:#1664c0;
    color:var(--ink); font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; margin:1.2rem 0;
  }
  .eb.card { background:var(--surface); border:1px solid var(--line); border-radius:10px; padding:16px 20px; max-width:720px; }
  .eb .head { display:flex; flex-wrap:wrap; gap:6px 12px; align-items:baseline; justify-content:space-between; border-bottom:1px solid var(--line); padding-bottom:10px; margin-bottom:12px; }
  .eb .hint { font-size:.78rem; color:var(--muted); }
  .eb .intro { font-size:.92rem; margin:0 0 12px; }
  .eb button { font:inherit; cursor:pointer; }

  .eb .grid { display:grid; grid-template-columns:1fr auto; gap:16px 22px; align-items:center; }
  .eb .controls { display:flex; flex-direction:column; gap:10px; min-width:0; }
  .eb .row { display:flex; flex-direction:column; gap:4px; }
  .eb .row label { font-size:.86rem; color:var(--muted); display:flex; justify-content:space-between; gap:8px; }
  .eb .row label b { color:var(--ink); font-variant-numeric:tabular-nums; }
  .eb .row.seg { flex-direction:row; align-items:center; gap:10px; }
  .eb .row.seg .lab { font-size:.86rem; color:var(--muted); min-width:56px; }
  .eb input[type=range] { width:100%; accent-color:var(--brand-ink); }

  .eb .toggle { display:flex; gap:6px; }
  .eb .toggle.wrap { flex-wrap:wrap; }
  .eb .toggle button { padding:5px 10px; border:1px solid var(--line); border-radius:7px; background:#fff; color:var(--muted); font-size:.82rem; }
  .eb .toggle button:hover { border-color:var(--brand-ink); }
  .eb .toggle button.on { border-color:var(--brand-ink); background:var(--brand-bg); color:var(--brand-ink); font-weight:600; }
  .eb .note { font-size:.8rem; color:var(--muted); margin:2px 0 0; }

  .eb .readout { justify-self:end; }
  .eb .big { display:flex; flex-direction:column; align-items:flex-end; gap:2px; text-align:right; }
  .eb .stat { display:flex; flex-direction:column; align-items:flex-end; }
  .eb .stat .n { font-size:1.7rem; font-weight:800; line-height:1; color:var(--bmr, #3a6ea5); font-variant-numeric:tabular-nums; }
  .eb .stat .u { font-size:.72rem; color:var(--muted); }
  .eb .stat .k { font-size:.72rem; font-weight:700; color:var(--muted); letter-spacing:.02em; }
  .eb .stat.total .n { color:var(--brand-ink); font-size:2rem; }
  .eb .times { font-size:.9rem; color:var(--muted); margin:2px 0; }

  .eb .stage { width:100%; margin-top:14px; }
  .eb svg { display:block; width:100%; height:auto; }
  .eb .segpct { font-size:13px; font-weight:800; fill:#fff; }
  .eb .segkcal { font-size:11px; font-weight:700; fill:var(--ink); }
  .eb .seglab { font-size:10px; font-weight:700; fill:var(--muted); }
  .eb .axis { font-size:11px; font-weight:700; fill:var(--brand-ink); }
  .eb rect { transition:width .3s ease, x .3s ease; }

  .eb .legend { display:flex; flex-wrap:wrap; gap:6px 14px; margin:10px 2px 0; font-size:.76rem; }
  .eb .legend .key { font-weight:600; }
  .eb .foot { display:flex; flex-wrap:wrap; align-items:center; gap:8px 12px; margin-top:12px; border-top:1px solid var(--line); padding-top:10px; }
  .eb .resetbtn { padding:5px 12px; border:1px solid var(--line); border-radius:7px; background:#fff; color:var(--brand-ink); font-size:.8rem; }
  .eb .resetbtn:hover { background:var(--brand-bg); border-color:var(--brand-ink); }
  .eb .eqn { font-size:.72rem; color:var(--muted); }
  .eb .credit { color:var(--muted); font-size:.72rem; margin:8px 0 0; }
  .eb :focus-visible { outline:3px solid var(--focus); outline-offset:2px; border-radius:6px; }
  @media (prefers-reduced-motion: reduce) { .eb * { transition:none !important; } }
  @media (max-width:560px) {
    .eb .grid { grid-template-columns:1fr; }
    .eb .readout { justify-self:start; }
    .eb .big { align-items:flex-start; text-align:left; }
  }
</style>
