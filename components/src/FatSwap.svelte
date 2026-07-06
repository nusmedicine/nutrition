<script>
  // FatSwap — the Cardiovascular Disease & Hypertension chapter's "replaced with what?" decision
  // widget for the "Fat quality, not quantity" section. It teaches that what protects the heart is
  // the REPLACEMENT for saturated fat, not merely cutting fat. The learner is cutting saturated fat
  // (butter, palm oil, fatty meat, coconut milk) and picks ONE replacement; the verdict follows the
  // option's effect — down (unsaturated oils / nuts, seeds, oily fish) = LDL down, events down, a
  // brand/success verdict; neutral (refined carbohydrate & sugar, or "just eat less fat") = little
  // benefit, a warn/neutral verdict. Single-select radio group, keyboard-operable, aria-live verdict.
  // Shares the card/chip/colour language of the other islands (brand green = benefit, warn = no benefit).
  import { onMount } from 'svelte';
  import { load, save } from './lib/store.js';
  import { loadManifest } from './lib/manifest.js';

  let { src } = $props();

  const FALLBACK = {
    id: 'fat-swap',
    title: 'Replaced with what?',
    intro:
      "You're cutting back on saturated fat (butter, palm oil, fatty meat, coconut milk). What you replace it with decides whether the heart benefits. Pick a replacement and see what happens.",
    options: [
      { id: 'unsaturated-oils', label: 'Unsaturated plant oils', example: 'olive, canola, sunflower oil', effect: 'down', best: true, note: 'Swapping saturated for polyunsaturated fat lowers LDL cholesterol and cuts cardiovascular events — a change roughly the size of a statin. This is the swap the trials reward.' },
      { id: 'nuts-seeds-fish', label: 'Nuts, seeds and oily fish', example: 'walnuts, flaxseed, salmon, mackerel', effect: 'down', note: 'Whole-food sources of unsaturated fat lower LDL and events too — and they are the backbone of the Mediterranean pattern. Recommend the oily fish itself, not a fish-oil capsule.' },
      { id: 'refined-carb', label: 'Refined carbohydrate & sugar', example: 'white bread, sugary drinks, biscuits', effect: 'neutral', note: 'Trade saturated fat for refined starch and sugar and the benefit disappears — LDL is roughly unchanged and it can worsen triglycerides. This is why "saturated fat has been exonerated" headlines mislead: they never said what the fat was replaced with.' },
      { id: 'nothing', label: 'Nothing — just "eat less fat"', example: 'smaller portions, same foods', effect: 'neutral', note: 'Cutting fat without a better replacement does little on its own. It is the quality of the swap, not the size of the cut, that moves LDL and events.' },
    ],
    verdicts: {
      down: { label: 'LDL down, events down', text: 'Good swap. Replacing saturated fat with unsaturated fat lowers LDL cholesterol and cuts cardiovascular events — the swap, not the cut, is what protects the heart.' },
      neutral: { label: 'No real benefit', text: 'Little or no benefit. Because the replacement is not unsaturated fat, LDL and events barely move — the swap, not the cut, is what protects the heart.' },
      up: { label: 'Can worsen risk', text: 'This replacement can push risk the wrong way — the swap, not the cut, is what protects the heart.' },
    },
    prompt: 'Choose a replacement to see whether the heart benefits.',
    caption:
      'Ask "replaced with what?" of every swap. Butter or palm oil for olive or canola oil, yes; butter for white bread, no. The swap, not the cut, is what protects the heart.',
    credit: 'Replacement effects after Mensink 2003, Hooper 2020 and Sacks 2017 (AHA).',
  };

  let data = $state(null);
  let error = $state(null);
  let chosenId = $state(null); // id of the single selected replacement

  onMount(async () => {
    try {
      if (!src) throw new Error('no src');
      const parsed = await loadManifest(src);
      if (!parsed || !Array.isArray(parsed.options) || !parsed.options.length) throw new Error('empty');
      data = parsed;
    } catch (e) {
      error = String((e && e.message) || e);
      data = FALLBACK;
    }
    const saved = load('fat-swap:' + data.id);
    if (saved && saved.chosenId && data.options.some((o) => o.id === saved.chosenId)) {
      chosenId = saved.chosenId;
    }
  });

  let options = $derived(data ? data.options : []);
  let verdicts = $derived((data && data.verdicts) || FALLBACK.verdicts);
  let chosen = $derived(chosenId ? options.find((o) => o.id === chosenId) || null : null);

  // effect -> theme kind. `down` = benefit (brand/success); everything else = no-benefit (warn/neutral).
  const effectKind = (effect) => (effect === 'down' ? 'good' : effect === 'up' ? 'warn' : 'neutral');

  let verdict = $derived.by(() => {
    if (!chosen) return null;
    const v = verdicts[chosen.effect] || FALLBACK.verdicts[chosen.effect] || FALLBACK.verdicts.neutral;
    return { effect: chosen.effect, kind: effectKind(chosen.effect), ...v };
  });

  const dirArrow = (effect) => (effect === 'down' ? '▼' : effect === 'up' ? '▲' : '—');

  function select(id) {
    chosenId = id;
    if (data) save('fat-swap:' + data.id, { chosenId });
  }
  function reset() {
    chosenId = null;
    if (data) save('fat-swap:' + data.id, { chosenId });
  }
</script>

{#if !data}
  <div class="fs card"><p>Loading…</p></div>
{:else}
  <figure class="fs card">
    <figcaption class="head">
      <strong>{data.title || 'Replaced with what?'}</strong>
      <span class="hint">Cutting saturated fat · pick the replacement</span>
    </figcaption>
    {#if data.intro}<p class="intro">{data.intro}</p>{/if}

    <div class="opts" role="group" aria-label="Replacement for the saturated fat you're cutting">
      {#each options as o (o.id)}
        <button type="button" class="opt effect-{effectKind(o.effect)}" class:on={chosenId === o.id}
                aria-pressed={chosenId === o.id}
                aria-label={`Replace with ${o.label}${o.best ? ' (best swap)' : ''}${o.example ? ' (' + o.example + ')' : ''}. ${chosenId === o.id ? 'Selected' : 'Not selected'}. Activate to choose.`}
                onclick={() => select(o.id)}>
          <span class="dot" aria-hidden="true"></span>
          <span class="body">
            <span class="lbl">{o.label}{#if o.best}<span class="tag best">best</span>{/if}</span>
            {#if o.example}<span class="ex">{o.example}</span>{/if}
          </span>
          <span class="dir dir-{effectKind(o.effect)}" aria-hidden="true">{dirArrow(o.effect)}</span>
        </button>
      {/each}
    </div>

    <!-- live verdict -->
    <div class="verdict verdict-{verdict ? verdict.kind : 'empty'}" aria-live="polite">
      {#if verdict}
        <div class="vhead">
          <span class="vicon" aria-hidden="true">{verdict.kind === 'good' ? '✓' : '!'}</span>
          <span class="vlabel">{dirArrow(verdict.effect)} {verdict.label}</span>
          <button type="button" class="reset" onclick={reset}>Reset</button>
        </div>
        <p class="vtext">{verdict.text}</p>
        {#if chosen && chosen.note}<p class="why">{chosen.note}</p>{/if}
      {:else}
        <p class="prompt">{data.prompt || 'Choose a replacement to see whether the heart benefits.'}</p>
      {/if}
    </div>

    {#if data.caption}<p class="caption">{data.caption}</p>{/if}
    {#if data.credit}<p class="credit">{data.credit}</p>{/if}
  </figure>
{/if}

<style>
  .fs {
    --surface:#fff; --ink:#1a2027; --muted:#5b6670; --line:#d8dee5;
    --brand-ink:#08503f; --brand-bg:#eef5f2; --focus:#1664c0; --warn:#b0471d; --warn-bg:#fdf2ec;
    color:var(--ink); font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; margin:1.2rem 0;
  }
  .fs.card { background:var(--surface); border:1px solid var(--line); border-radius:10px; padding:16px 20px; max-width:720px; }
  .fs .head { display:flex; flex-wrap:wrap; gap:6px 12px; align-items:baseline; justify-content:space-between; border-bottom:1px solid var(--line); padding-bottom:10px; margin-bottom:10px; }
  .fs .hint { font-size:.78rem; color:var(--muted); }
  .fs .intro { font-size:.92rem; margin:0 0 12px; }
  .fs button { font:inherit; cursor:pointer; }

  .fs .opts { display:grid; gap:8px; }
  .fs .opt { display:flex; align-items:center; gap:12px; padding:10px 14px; border:1px solid var(--line); border-radius:8px; background:#fff; color:var(--ink); text-align:left; width:100%; }
  .fs .opt:hover { border-color:var(--muted); }
  .fs .opt .dot { width:16px; height:16px; flex:none; border:2px solid var(--muted); border-radius:50%; display:inline-flex; align-items:center; justify-content:center; }
  .fs .opt.on .dot { border-color:currentColor; }
  .fs .opt.on .dot::after { content:""; width:8px; height:8px; border-radius:50%; background:currentColor; }
  .fs .opt .body { display:flex; flex-direction:column; gap:1px; min-inline-size:0; flex:1; }
  .fs .opt .lbl { font-size:.9rem; font-weight:600; display:flex; align-items:center; gap:6px; flex-wrap:wrap; }
  .fs .opt .ex { font-size:.74rem; color:var(--muted); }
  .fs .opt .dir { font-size:1rem; font-weight:800; line-height:1; flex:none; }

  .fs .tag.best { font-size:.62rem; font-weight:800; text-transform:uppercase; letter-spacing:.04em; color:var(--brand-ink); background:var(--brand-bg); border:1px solid #c9ddd6; border-radius:5px; padding:1px 6px; }

  /* per-effect accents: `good` = benefit (brand), `neutral`/`warn` = no-benefit (warn) */
  .fs .opt.effect-good { color:var(--ink); }
  .fs .opt.effect-good:hover { border-color:var(--brand-ink); }
  .fs .opt.effect-good.on { border-color:var(--brand-ink); border-width:2px; padding:9px 13px; background:var(--brand-bg); color:var(--brand-ink); }
  .fs .opt.effect-good .dir-good { color:var(--brand-ink); }

  .fs .opt.effect-neutral:hover, .fs .opt.effect-warn:hover { border-color:var(--warn); }
  .fs .opt.effect-neutral.on, .fs .opt.effect-warn.on { border-color:var(--warn); border-width:2px; padding:9px 13px; background:var(--warn-bg); color:var(--warn); }
  .fs .opt .dir-neutral { color:var(--muted); }
  .fs .opt .dir-warn { color:var(--warn); }
  .fs .opt.on .dir-neutral, .fs .opt.on .dir-warn { color:var(--warn); }

  .fs .verdict { margin-top:14px; border:1px solid var(--line); border-left-width:4px; border-radius:8px; padding:12px 14px; transition:border-color .2s, background .2s; }
  .fs .verdict-empty { border-left-color:var(--line); background:#fafbfc; }
  .fs .verdict-good { border-left-color:var(--brand-ink); background:var(--brand-bg); }
  .fs .verdict-neutral, .fs .verdict-warn { border-left-color:var(--warn); background:var(--warn-bg); }
  .fs .vhead { display:flex; align-items:center; gap:10px; }
  .fs .vicon { font-size:1.1rem; font-weight:800; line-height:1; width:1.2rem; text-align:center; }
  .fs .verdict-good .vicon, .fs .verdict-good .vlabel { color:var(--brand-ink); }
  .fs .verdict-neutral .vicon, .fs .verdict-neutral .vlabel, .fs .verdict-warn .vicon, .fs .verdict-warn .vlabel { color:var(--warn); }
  .fs .vlabel { font-weight:800; font-size:.98rem; }
  .fs .vtext { margin:6px 0 0; font-size:.9rem; }
  .fs .why { margin:6px 0 0; font-size:.82rem; color:var(--muted); }
  .fs .reset { margin-left:auto; background:none; border:1px solid var(--line); border-radius:6px; padding:3px 10px; font-size:.78rem; color:var(--muted); }
  .fs .reset:hover { border-color:var(--ink); color:var(--ink); }
  .fs .prompt { margin:0; font-size:.9rem; color:var(--muted); }

  .fs .caption { margin:12px 2px 0; font-size:.88rem; padding:8px 12px; background:var(--brand-bg); border-left:3px solid var(--brand-ink); border-radius:0 6px 6px 0; }
  .fs .credit { color:var(--muted); font-size:.72rem; margin:8px 0 0; }

  .fs :focus-visible { outline:3px solid var(--focus); outline-offset:2px; border-radius:6px; }
  @media (prefers-reduced-motion: reduce) { .fs * { transition:none !important; } }
  @media (max-width:520px) { .fs.card { padding:14px; } }
</style>
