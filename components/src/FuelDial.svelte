<script>
  // FuelDial — the Adulthood chapter's teaching island. The learner dials in a realistic adult training
  // week (body mass, sessions/week, minutes/session, intensity) and the island returns SCALED, mostly
  // reassuring guidance: for the vast majority of settings it lands on "ordinary healthy plate + water —
  // no sports drink, no protein powder," and only genuine endurance-athlete volume flips it to "now the
  // athlete guidance applies." The pedagogical payoff is INOCULATION against over-fuelling: you have to
  // crank the dial hard before special sports nutrition is earned. Protein is shown as an illustrative
  // g/day RANGE from body mass (1.2-1.6 g/kg), framed as food-achievable, never a macro to titrate. An
  // "athlete guidance" toggle reveals the high-end advice explicitly greyed as "probably not you".
  // Deliberately schematic/qualitative — teaches direction, not a prescription. Shares the card/chip/
  // colour language of the other islands.
  import { onMount } from 'svelte';
  import { load, save } from './lib/store.js';
  import { loadManifest } from './lib/manifest.js';

  let { src } = $props();

  const FALLBACK = {
    id: 'fuel-dial',
    title: 'Fuel to fit your training — usually less than you think',
    intro:
      'Set a realistic training week. Watch how rarely the answer is anything more than ordinary food and water.',
    proteinPerKg: { active: [1.2, 1.6] },
    intensities: [
      { key: 'easy', label: 'Easy', w: 0.5 },
      { key: 'moderate', label: 'Moderate', w: 1.0 },
      { key: 'hard', label: 'Hard', w: 1.5 },
    ],
    // load = sessions * minutes * intensity weight; thresholds separate the tiers
    tiers: [
      { key: 'minimal', max: 100, label: 'Barely active',
        fuel: 'Ordinary healthy plate. No sports nutrition needed — this is most adults.',
        drink: 'Water.', protein: 'No extra protein beyond normal meals — a usual plate meets your needs.' },
      { key: 'active', max: 600, label: 'Regularly active (the everyday exerciser)',
        fuel: 'Eat enough carbohydrate around training — normal meals cover it. Still no sports drink or powder.',
        drink: 'Water — even for a sweaty gym or park session.', protein: 'range' },
      { key: 'endurance', max: 1e9, label: 'Endurance-athlete volume (the minority)',
        fuel: 'Now the athlete guidance starts to apply: more carbohydrate, and fuelling during long sessions.',
        drink: 'Water for most sessions; on your longest sessions, carbohydrate + a planned fluid strategy begin to matter.', protein: 'range' },
    ],
    athleteNote: 'Athlete guidance (probably not you): high day-to-day carbohydrate scaled to hours of training, carbohydrate during long sessions, and a planned hydration/electrolyte strategy. It is calibrated for serious endurance training — applying it to a few weekly sessions is the classic over-fuelling mistake.',
    tropicalNote: "In Singapore's heat you sweat more — drink to thirst and aim to lose under ~2% of body weight over a long session. Salt only matters for long or very sweaty efforts.",
    credit: 'Schematic — teaches direction, not a prescription. Protein range 1.2–1.6 g/kg from Morton 2018; fuelling framing from Thomas 2016; hydration from Sawka 2007.',
  };

  let data = $state(null);
  let error = $state(null);
  let mass = $state(65);
  let sessions = $state(3);
  let minutes = $state(45);
  let intIdx = $state(1);
  let showAthlete = $state(false);

  onMount(async () => {
    try {
      if (!src) throw new Error('no src');
      const parsed = await loadManifest(src);
      if (!parsed || !Array.isArray(parsed.tiers) || !parsed.tiers.length) throw new Error('empty');
      data = parsed;
    } catch (e) {
      error = String((e && e.message) || e);
      data = FALLBACK;
    }
    const saved = load('fuel-dial:' + data.id);
    if (saved) {
      if (Number.isFinite(saved.mass)) mass = saved.mass;
      if (Number.isFinite(saved.sessions)) sessions = saved.sessions;
      if (Number.isFinite(saved.minutes)) minutes = saved.minutes;
      const nInt = (data.intensities || FALLBACK.intensities).length;
      if (Number.isInteger(saved.intIdx) && saved.intIdx >= 0 && saved.intIdx < nInt) intIdx = saved.intIdx;
    }
  });

  $effect(() => {
    if (!data) return;
    save('fuel-dial:' + data.id, { mass, sessions, minutes, intIdx });
  });

  let intensities = $derived(data ? data.intensities || FALLBACK.intensities : FALLBACK.intensities);
  let intensity = $derived(intensities[intIdx] || intensities[1]);
  let load_ = $derived(sessions * minutes * (intensity ? intensity.w : 1));
  let tier = $derived.by(() => {
    if (!data) return null;
    return (data.tiers || []).find((t) => load_ <= t.max) || data.tiers[data.tiers.length - 1];
  });
  let pk = $derived(data && data.proteinPerKg ? data.proteinPerKg.active || [1.2, 1.6] : [1.2, 1.6]);
  let proteinRange = $derived([Math.round(mass * pk[0]), Math.round(mass * pk[1])]);
  let proteinText = $derived.by(() => {
    if (!tier) return '';
    if (tier.protein === 'range') return `~${proteinRange[0]}–${proteinRange[1]} g/day, easily reached from food (a normal plate has protein at each meal).`;
    return tier.protein;
  });
  // Weekly hours, for the readout
  let weeklyHours = $derived(Math.round((sessions * minutes) / 60 * 10) / 10);
</script>

{#if !data}
  <div class="fd card"><p>Loading…</p></div>
{:else}
  <figure class="fd card">
    <figcaption class="head">
      <strong>{data.title}</strong>
      <span class="hint">Dial your week · read what you actually need</span>
    </figcaption>
    {#if data.intro}<p class="intro">{data.intro}</p>{/if}

    <div class="controls">
      <label class="row">
        <span class="lab">Body weight <b>{mass} kg</b></span>
        <input type="range" min="40" max="120" step="1" bind:value={mass} aria-label="Body weight in kilograms" />
      </label>
      <label class="row">
        <span class="lab">Sessions / week <b>{sessions}</b></span>
        <input type="range" min="0" max="14" step="1" bind:value={sessions} aria-label="Training sessions per week" />
      </label>
      <label class="row">
        <span class="lab">Minutes / session <b>{minutes}</b></span>
        <input type="range" min="0" max="180" step="5" bind:value={minutes} aria-label="Minutes per session" />
      </label>
      <div class="row">
        <span class="lab">Intensity</span>
        <div class="chips" role="group" aria-label="Intensity">
          {#each intensities as it, i}
            <button type="button" class="chip" class:on={i === intIdx} onclick={() => (intIdx = i)} aria-pressed={i === intIdx}>{it.label}</button>
          {/each}
        </div>
      </div>
    </div>

    {#if tier}
      <div class="verdict verdict-{tier.key}" aria-live="polite">
        <div class="vhead">
          <span class="badge">{tier.label}</span>
          <span class="wk">{weeklyHours} h/week</span>
        </div>
        <ul class="out">
          <li><span class="k">Fuelling</span> {tier.fuel}</li>
          <li><span class="k">Drink</span> {tier.drink}</li>
          <li><span class="k">Protein</span> {proteinText}</li>
        </ul>
      </div>

      {#if tier.key !== 'endurance'}
        <p class="payoff">↑ Notice: at this (very common) level, the answer is <b>ordinary food and water</b>. The athlete advice below is for the small minority who train much harder.</p>
      {/if}
    {/if}

    <button type="button" class="toggle" class:on={showAthlete} onclick={() => (showAthlete = !showAthlete)} aria-expanded={showAthlete}>
      {showAthlete ? '▾' : '▸'} Show the athlete guidance (probably not you)
    </button>
    {#if showAthlete}
      <p class="athlete">{data.athleteNote}</p>
    {/if}

    {#if data.tropicalNote}<p class="note">🌴 {data.tropicalNote}</p>{/if}
    {#if data.credit}<p class="credit">{data.credit}</p>{/if}
  </figure>
{/if}

<style>
  .fd {
    --surface:#fff; --ink:#1a2027; --muted:#5b6670; --line:#d8dee5;
    --brand-ink:#08503f; --brand-bg:#eef5f2; --focus:#1664c0; --warn:#b0471d;
    color:var(--ink); font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; margin:1.2rem 0;
  }
  .fd.card { background:var(--surface); border:1px solid var(--line); border-radius:10px; padding:16px 20px; max-width:760px; }
  .fd .head { display:flex; flex-wrap:wrap; gap:6px 12px; align-items:baseline; justify-content:space-between; border-bottom:1px solid var(--line); padding-bottom:10px; margin-bottom:12px; }
  .fd .hint { font-size:.78rem; color:var(--muted); }
  .fd .intro { font-size:.92rem; margin:0 0 14px; }
  .fd button { font:inherit; cursor:pointer; }

  .fd .controls { display:grid; gap:10px; margin-bottom:14px; }
  .fd .row { display:flex; align-items:center; gap:12px; flex-wrap:wrap; }
  .fd .lab { font-size:.85rem; min-width:170px; }
  .fd .row input[type=range] { flex:1; min-width:160px; accent-color:var(--brand-ink); }

  .fd .chips { display:flex; gap:6px; }
  .fd .chip { padding:5px 12px; border:1px solid var(--line); border-radius:8px; background:#fff; color:var(--ink); font-size:.82rem; }
  .fd .chip:hover { border-color:var(--brand-ink); }
  .fd .chip.on { border-color:var(--brand-ink); border-width:2px; padding:4px 11px; background:var(--brand-bg); color:var(--brand-ink); font-weight:600; }

  .fd .verdict { border:1px solid var(--line); border-left-width:4px; border-radius:8px; padding:12px 14px; background:#fbfdfc; }
  .fd .verdict-minimal, .fd .verdict-active { border-left-color:var(--brand-ink); }
  .fd .verdict-endurance { border-left-color:var(--warn); background:#fdf7f4; }
  .fd .vhead { display:flex; align-items:baseline; justify-content:space-between; gap:8px; margin-bottom:8px; }
  .fd .badge { font-weight:700; color:var(--brand-ink); font-size:.95rem; }
  .fd .verdict-endurance .badge { color:var(--warn); }
  .fd .wk { font-size:.78rem; color:var(--muted); font-variant-numeric:tabular-nums; }
  .fd .out { list-style:none; margin:0; padding:0; display:grid; gap:6px; }
  .fd .out li { font-size:.9rem; }
  .fd .out .k { display:inline-block; min-width:74px; font-weight:600; color:var(--muted); font-size:.78rem; text-transform:uppercase; letter-spacing:.02em; vertical-align:top; }

  .fd .payoff { font-size:.86rem; margin:10px 0 0; padding:8px 12px; background:var(--brand-bg); border-radius:6px; }
  .fd .toggle { margin:12px 0 0; background:none; border:none; color:var(--focus); font-size:.84rem; padding:0; }
  .fd .toggle:hover { text-decoration:underline; }
  .fd .athlete { font-size:.84rem; color:var(--muted); margin:8px 0 0; padding:8px 12px; border:1px dashed var(--line); border-radius:6px; background:#fafbfc; }
  .fd .note { font-size:.82rem; color:var(--ink); margin:10px 0 0; }
  .fd .credit { color:var(--muted); font-size:.72rem; margin:8px 0 0; }

  .fd :focus-visible { outline:3px solid var(--focus); outline-offset:2px; border-radius:6px; }
  @media (max-width:520px) { .fd .lab { min-width:140px; } }
</style>
