<script>
  // MustScreen — the Undernutrition & Malnutrition chapter's MUST screening widget for the
  // "Screening: the first-year competency" section. The learner sets the three MUST components —
  // BMI band, unplanned weight-loss band, and the acute-disease effect — and the tool sums them to a
  // risk band (low / medium / high) with the matching action (routine → observe → refer). The teaching
  // point it makes visible: weight loss and acute illness score INDEPENDENTLY of BMI, so a normal or
  // high BMI can still come out high-risk — busting the "she looks fine, her BMI isn't low" miss.
  // Recognition-level only: the output is a risk band + refer, never a feeding plan. Three segmented
  // button groups (aria-pressed), an aria-live result panel. Shares the card/chip/colour language of
  // the other islands (brand green = low, warn amber = medium, danger red = high).
  import { onMount } from 'svelte';
  import { load, save } from './lib/store.js';
  import { loadManifest } from './lib/manifest.js';

  let { src } = $props();

  const FALLBACK = {
    id: 'must-screen',
    title: 'Screen with MUST',
    intro:
      "MUST adds three things: a BMI score, an unplanned weight-loss score, and an acute-illness effect. Set each and watch the risk band — and notice that a normal or even high BMI can still be high risk.",
    components: [
      { id: 'bmi', label: '1. Body mass index (BMI)', options: [ { label: '> 20 (normal or high)', score: 0 }, { label: '18.5 – 20', score: 1 }, { label: '< 18.5', score: 2 } ] },
      { id: 'weightloss', label: '2. Unplanned weight loss (past 3–6 months)', options: [ { label: '< 5%', score: 0 }, { label: '5 – 10%', score: 1 }, { label: '> 10%', score: 2 } ] },
      { id: 'acute', label: '3. Acutely ill AND little/no intake for > 5 days', options: [ { label: 'No', score: 0 }, { label: 'Yes', score: 2 } ] },
    ],
    bands: [
      { max: 0, label: 'Low risk', kind: 'good', action: 'Routine care — repeat screening (weekly in hospital, and periodically in the community).' },
      { max: 1, label: 'Medium risk', kind: 'caution', action: 'Observe — document food intake for 2–3 days, then repeat screening and act if intake stays poor.' },
      { max: 99, label: 'High risk', kind: 'avoid', action: 'Refer to the dietitian / nutrition team and start food-first support now.' },
    ],
    independenceNote:
      'Weight loss and acute illness score independently of BMI — a normal or high BMI can still be high risk.',
    prompt: 'Set the three components to see the risk band and the action.',
    caption:
      'A positive screen flags risk and triggers referral — it is not a diagnosis or a feeding plan. The point MUST makes plain: weight loss and acute illness count even when BMI looks fine.',
    credit: 'Scoring after BAPEN’s Malnutrition Universal Screening Tool (MUST). Teaching aid — not a substitute for the validated tool.',
  };

  let data = $state(null);
  let error = $state(null);
  // selected option index per component id; default all to 0 (healthiest) so a band always shows.
  let picks = $state({});

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
    const init = {};
    for (const c of data.components) init[c.id] = 0;
    const saved = load('must-screen:' + data.id);
    if (saved && saved.picks) {
      for (const c of data.components) if (Number.isInteger(saved.picks[c.id])) init[c.id] = saved.picks[c.id];
    }
    picks = init;
  });

  let components = $derived(data ? data.components : []);
  let bands = $derived(data ? data.bands || FALLBACK.bands : FALLBACK.bands);

  let total = $derived.by(() => {
    if (!data) return 0;
    let t = 0;
    for (const c of components) {
      const i = picks[c.id] ?? 0;
      const opt = c.options[i];
      if (opt) t += opt.score || 0;
    }
    return t;
  });

  let band = $derived.by(() => {
    for (const b of bands) if (total <= b.max) return b;
    return bands[bands.length - 1];
  });

  // is BMI healthy (score 0) yet the overall band still high/medium? -> the independence lesson.
  let showIndependence = $derived.by(() => {
    if (!data) return false;
    const bmiC = components.find((c) => c.id === 'bmi');
    if (!bmiC) return false;
    const bmiScore = bmiC.options[picks.bmi ?? 0]?.score ?? 0;
    return bmiScore === 0 && total >= 1;
  });

  const kindIcon = (kind) => (kind === 'good' ? '✓' : kind === 'avoid' ? '⛔' : '⚠');

  function pick(cid, idx) {
    picks = { ...picks, [cid]: idx };
    if (data) save('must-screen:' + data.id, { picks });
  }
</script>

{#if !data}
  <div class="ms card"><p>Loading…</p></div>
{:else}
  <figure class="ms card">
    <figcaption class="head">
      <strong>{data.title || 'Screen with MUST'}</strong>
      <span class="hint">Set each component · read the risk band</span>
    </figcaption>
    {#if data.intro}<p class="intro">{data.intro}</p>{/if}

    <div class="components">
      {#each components as c (c.id)}
        <div class="comp">
          <p class="clabel">{c.label}</p>
          <div class="seg" role="group" aria-label={c.label}>
            {#each c.options as o, i (i)}
              <button type="button" class="opt" class:on={(picks[c.id] ?? 0) === i}
                      aria-pressed={(picks[c.id] ?? 0) === i}
                      onclick={() => pick(c.id, i)}>
                {o.label}<span class="sc" aria-hidden="true">+{o.score}</span>
              </button>
            {/each}
          </div>
        </div>
      {/each}
    </div>

    <!-- live result -->
    <div class="result result-{band.kind}" aria-live="polite">
      <div class="rhead">
        <span class="ric" aria-hidden="true">{kindIcon(band.kind)}</span>
        <span class="rband">{band.label}</span>
        <span class="rscore">score {total}</span>
      </div>
      <p class="raction">{band.action}</p>
      {#if showIndependence}
        <p class="indep">↳ {data.independenceNote}</p>
      {/if}
    </div>

    {#if data.caption}<p class="caption">{data.caption}</p>{/if}
    {#if data.credit}<p class="credit">{data.credit}</p>{/if}
  </figure>
{/if}

<style>
  .ms {
    --surface:#fff; --ink:#1a2027; --muted:#5b6670; --line:#d8dee5;
    --brand-ink:#08503f; --brand-bg:#eef5f2; --focus:#1664c0;
    --warn:#b0471d; --warn-bg:#fdf2ec; --danger:#a01212; --danger-bg:#fbeaea;
    color:var(--ink); font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; margin:1.2rem 0;
  }
  .ms.card { background:var(--surface); border:1px solid var(--line); border-radius:10px; padding:16px 20px; max-width:720px; }
  .ms .head { display:flex; flex-wrap:wrap; gap:6px 12px; align-items:baseline; justify-content:space-between; border-bottom:1px solid var(--line); padding-bottom:10px; margin-bottom:10px; }
  .ms .hint { font-size:.78rem; color:var(--muted); }
  .ms .intro { font-size:.92rem; margin:0 0 12px; }
  .ms button { font:inherit; cursor:pointer; }

  .ms .components { display:grid; gap:14px; }
  .ms .clabel { font-size:.85rem; font-weight:600; margin:0 0 6px; }
  .ms .seg { display:flex; flex-wrap:wrap; gap:6px; }
  .ms .opt { display:inline-flex; align-items:center; gap:7px; border:1px solid var(--line); background:#fff; color:var(--ink); border-radius:8px; padding:8px 12px; font-size:.85rem; }
  .ms .opt:hover { border-color:var(--muted); }
  .ms .opt.on { border-color:var(--brand-ink); border-width:2px; padding:7px 11px; background:var(--brand-bg); color:var(--brand-ink); font-weight:600; }
  .ms .opt .sc { font-size:.72rem; color:var(--muted); font-weight:700; }
  .ms .opt.on .sc { color:var(--brand-ink); }

  .ms .result { margin-top:16px; border:1px solid var(--line); border-left-width:4px; border-radius:8px; padding:12px 14px; transition:border-color .2s, background .2s; }
  .ms .result-good { border-left-color:var(--brand-ink); background:var(--brand-bg); }
  .ms .result-caution { border-left-color:var(--warn); background:var(--warn-bg); }
  .ms .result-avoid { border-left-color:var(--danger); background:var(--danger-bg); }
  .ms .rhead { display:flex; align-items:center; gap:10px; }
  .ms .ric { font-size:1.15rem; line-height:1; }
  .ms .rband { font-weight:800; font-size:1rem; }
  .ms .result-good .ric, .ms .result-good .rband { color:var(--brand-ink); }
  .ms .result-caution .ric, .ms .result-caution .rband { color:var(--warn); }
  .ms .result-avoid .ric, .ms .result-avoid .rband { color:var(--danger); }
  .ms .rscore { margin-left:auto; font-size:.75rem; color:var(--muted); font-weight:700; text-transform:uppercase; letter-spacing:.03em; }
  .ms .raction { margin:8px 0 0; font-size:.88rem; }
  .ms .indep { margin:8px 0 0; font-size:.82rem; font-weight:600; color:var(--warn); }

  .ms .caption { margin:14px 2px 0; font-size:.88rem; padding:8px 12px; background:var(--brand-bg); border-left:3px solid var(--brand-ink); border-radius:0 6px 6px 0; }
  .ms .credit { color:var(--muted); font-size:.72rem; margin:8px 0 0; }

  .ms :focus-visible { outline:3px solid var(--focus); outline-offset:2px; border-radius:7px; }
  @media (prefers-reduced-motion: reduce) { .ms * { transition:none !important; } }
  @media (max-width:520px) { .ms.card { padding:14px; } }
</style>
