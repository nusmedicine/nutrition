<script>
  // SamePlate — the Healthy Ageing teaching island. Teaches the chapter's anchor idea, "energy DOWN,
  // density UP", through a "fortify the familiar" builder: start from a thin plain-rice-porridge base
  // (low energy, low protein) and add culturally-authentic components (egg, ikan bilis, tofu, fish,
  // milk/soy powder, greens, a little oil). A live readout shows total energy, total protein, and a
  // per-meal protein bar against an ILLUSTRATIVE ~a-palm target — so a couple of familiar add-ins turn an
  // inadequate meal into a nutrient-dense one WITHOUT much extra volume. A "make it low-fat & low-salt"
  // restriction toggle fires the do-no-harm guardrail (it strips the energy-dense/flavour items and drops
  // the totals): in a losing-weight elder the rule is density up, restriction off. Values are schematic —
  // it teaches the shape and direction, not exact nutrition. Shares the card/chip/colour language.
  import { onMount } from 'svelte';
  import { load, save } from './lib/store.js';
  import { loadManifest } from './lib/manifest.js';

  let { src } = $props();

  const FALLBACK = {
    id: 'same-plate',
    title: 'Fortify the familiar: energy down, density up',
    intro:
      'Start with a frail senior’s thin bowl of porridge, then add familiar foods. Watch a small, inadequate meal become nutrient-dense — without much more volume.',
    proteinTargetMeal: 25,
    base: { label: 'Plain rice porridge (1 bowl)', kcal: 120, protein: 2 },
    components: [
      { key: 'egg', label: 'Egg', kcal: 70, protein: 6 },
      { key: 'fish', label: 'Fish slices (a palm)', kcal: 110, protein: 20 },
      { key: 'tofu', label: 'Silken/firm tofu', kcal: 80, protein: 8, calcium: true },
      { key: 'meat', label: 'Minced meat', kcal: 90, protein: 14 },
      { key: 'ikanbilis', label: 'Ikan bilis', kcal: 40, protein: 5, calcium: true, restrictedOut: true },
      { key: 'milkpowder', label: 'Milk / soy powder', kcal: 60, protein: 5, calcium: true },
      { key: 'greens', label: 'Kai-lan / greens', kcal: 20, protein: 2, micronutrient: true },
      { key: 'oil', label: 'A little oil', kcal: 45, protein: 0, restrictedOut: true },
    ],
    restrict: {
      label: 'Make it "low-fat & low-salt"',
      why: 'She is losing weight — stripping fat, salt and flavour cuts intake and can tip a frail elder into malnutrition. The rule here is density UP, restriction OFF.',
    },
    credit: 'Schematic — teaches the shape (energy down, density up), not exact nutrition. Grounded in HPB Dietary Guidelines for Older Adults; PROT-AGE; ESPEN geriatrics.',
  };

  let data = $state(null);
  let error = $state(null);
  let on = $state({});
  let restrict = $state(false);

  onMount(async () => {
    try {
      if (!src) throw new Error('no src');
      const parsed = await loadManifest(src);
      if (!parsed || !parsed.base || !Array.isArray(parsed.components) || !parsed.components.length) throw new Error('empty');
      data = parsed;
    } catch (e) {
      error = String((e && e.message) || e);
      data = FALLBACK;
    }
    const saved = load('same-plate:' + data.id);
    if (saved) {
      if (saved.on && typeof saved.on === 'object') on = { ...saved.on };
      if (typeof saved.restrict === 'boolean') restrict = saved.restrict;
    }
  });

  $effect(() => {
    if (!data) return;
    save('same-plate:' + data.id, { on, restrict });
  });

  let components = $derived(data ? data.components || [] : []);
  let target = $derived(data ? data.proteinTargetMeal || 25 : 25);
  const isBlocked = (c) => restrict && c.restrictedOut;
  let active = $derived(components.filter((c) => on[c.key] && !isBlocked(c)));
  let totalKcal = $derived((data?.base?.kcal ?? 0) + active.reduce((s, c) => s + (c.kcal || 0), 0));
  let totalProtein = $derived((data?.base?.protein ?? 0) + active.reduce((s, c) => s + (c.protein || 0), 0));
  let hasCalcium = $derived(active.some((c) => c.calcium));
  let hasVeg = $derived(active.some((c) => c.micronutrient));
  let proteinPct = $derived(Math.min(Math.round((totalProtein / target) * 100), 100));
  let proteinMet = $derived(totalProtein >= target);

  function toggle(key) { on = { ...on, [key]: !on[key] }; }
</script>

{#if !data}
  <div class="sp card"><p>Loading…</p></div>
{:else}
  <figure class="sp card">
    <figcaption class="head">
      <strong>{data.title}</strong>
      <span class="hint">Add familiar foods · watch density rise</span>
    </figcaption>
    {#if data.intro}<p class="intro">{data.intro}</p>{/if}

    <div class="builder">
      <div class="plate" aria-hidden="true">🥣</div>
      <div class="chips" role="group" aria-label="Foods to add to the porridge">
        {#each components as c}
          <button type="button" class="chip" class:on={on[c.key] && !isBlocked(c)} class:blocked={isBlocked(c)}
            onclick={() => !isBlocked(c) && toggle(c.key)} disabled={isBlocked(c)} aria-pressed={!!(on[c.key] && !isBlocked(c))}>
            <span class="mark">{on[c.key] && !isBlocked(c) ? '✓' : '+'}</span> {c.label}
          </button>
        {/each}
      </div>
    </div>

    <div class="readout" aria-live="polite">
      <div class="stat"><span class="num">{totalKcal}</span><span class="unit">kcal</span></div>
      <div class="stat"><span class="num">{totalProtein}</span><span class="unit">g protein</span></div>
      <div class="ticks">
        <span class="tick" class:hit={hasCalcium}>{hasCalcium ? '✓' : '·'} calcium</span>
        <span class="tick" class:hit={hasVeg}>{hasVeg ? '✓' : '·'} vegetables</span>
      </div>
    </div>

    <div class="pbar" role="group" aria-label="Per-meal protein against an illustrative target">
      <div class="pbar-track" role="progressbar" aria-valuenow={proteinPct} aria-valuemin="0" aria-valuemax="100" aria-label="Per-meal protein"><div class="pbar-fill" class:met={proteinMet} style="width:{proteinPct}%"></div></div>
      <span class="pbar-label">{proteinMet ? 'Meets a good per-meal protein target' : 'Below a good per-meal target'} <em>(illustrative ~a palm of protein)</em></span>
    </div>

    <button type="button" class="restrict-toggle" class:on={restrict} onclick={() => (restrict = !restrict)} aria-pressed={restrict}>
      ⚠ {data.restrict.label}
    </button>
    {#if restrict}
      <p class="warn" role="alert">{data.restrict.why}</p>
    {/if}

    {#if data.credit}<p class="credit">{data.credit}</p>{/if}
  </figure>
{/if}

<style>
  .sp {
    --surface:#fff; --ink:#1a2027; --muted:#5b6670; --line:#d8dee5;
    --brand-ink:#08503f; --brand-bg:#eef5f2; --focus:#1664c0; --warn:#b0471d;
    color:var(--ink); font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; margin:1.2rem 0;
  }
  .sp.card { background:var(--surface); border:1px solid var(--line); border-radius:10px; padding:16px 20px; max-width:760px; }
  .sp .head { display:flex; flex-wrap:wrap; gap:6px 12px; align-items:baseline; justify-content:space-between; border-bottom:1px solid var(--line); padding-bottom:10px; margin-bottom:12px; }
  .sp .hint { font-size:.78rem; color:var(--muted); }
  .sp .intro { font-size:.92rem; margin:0 0 14px; }
  .sp button { font:inherit; cursor:pointer; }

  .sp .builder { display:flex; gap:14px; align-items:flex-start; }
  .sp .plate { font-size:2.4rem; line-height:1; flex:none; }
  .sp .chips { display:flex; flex-wrap:wrap; gap:6px; }
  .sp .chip { padding:5px 11px; border:1px solid var(--line); border-radius:8px; background:#fff; color:var(--ink); font-size:.82rem; display:inline-flex; align-items:center; gap:6px; }
  .sp .chip .mark { font-weight:800; }
  .sp .chip:hover:not(:disabled) { border-color:var(--brand-ink); }
  .sp .chip.on { border-color:var(--brand-ink); border-width:2px; padding:4px 10px; background:var(--brand-bg); color:var(--brand-ink); font-weight:600; }
  .sp .chip.blocked { opacity:.4; text-decoration:line-through; cursor:not-allowed; }

  .sp .readout { display:flex; align-items:center; gap:22px; margin:14px 0 6px; flex-wrap:wrap; }
  .sp .stat { display:flex; align-items:baseline; gap:5px; }
  .sp .stat .num { font-size:1.6rem; font-weight:800; color:var(--brand-ink); font-variant-numeric:tabular-nums; }
  .sp .stat .unit { font-size:.78rem; color:var(--muted); }
  .sp .ticks { display:flex; gap:12px; margin-left:auto; }
  .sp .tick { font-size:.76rem; color:var(--muted); }
  .sp .tick.hit { color:var(--brand-ink); font-weight:600; }

  .sp .pbar { margin:6px 0 2px; }
  .sp .pbar-track { height:10px; background:#e8edf0; border-radius:99px; overflow:hidden; }
  .sp .pbar-fill { height:100%; background:#c7a44a; border-radius:99px; transition:width .18s ease; }
  .sp .pbar-fill.met { background:var(--brand-ink); }
  .sp .pbar-label { font-size:.78rem; color:var(--muted); }
  .sp .pbar-label em { font-style:italic; }

  .sp .restrict-toggle { margin:14px 0 0; padding:6px 12px; border:1px solid var(--line); border-radius:8px; background:#fff; color:var(--warn); font-size:.82rem; }
  .sp .restrict-toggle:hover { border-color:var(--warn); }
  .sp .restrict-toggle.on { border-color:var(--warn); border-width:2px; padding:5px 11px; background:#fbeae4; font-weight:600; }
  .sp .warn { font-size:.86rem; margin:10px 0 0; padding:8px 12px; background:#fbeae4; border-left:3px solid var(--warn); border-radius:0 6px 6px 0; color:#7a3115; }

  .sp .credit { color:var(--muted); font-size:.72rem; margin:10px 0 0; }
  .sp :focus-visible { outline:3px solid var(--focus); outline-offset:2px; border-radius:6px; }
  @media (prefers-reduced-motion: reduce) { .sp * { transition:none !important; } }
  @media (max-width:520px) { .sp .readout { gap:14px; } .sp .ticks { margin-left:0; } }
</style>
