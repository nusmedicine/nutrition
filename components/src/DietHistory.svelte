<script>
  // DietHistory — the Chapter 11 (Assessing Diet & Talking to Patients) teaching island. A
  // "day-in-the-life" diet-history skeleton: the reader clicks the probes they would ask, each
  // reveals what the patient discloses, and a picture of intake builds up with a coverage meter.
  // The drinks probe is the hinge — it uncovers a hidden bubble-tea habit and the single biggest
  // share of the picture, teaching that the highest-yield question is often the one not asked. A
  // separate do-no-harm probe surfaces possible disordered eating before any restriction advice.
  // Data-driven from a YAML manifest; no external images. Shares the card/colour language of the
  // other islands.
  import { onMount } from 'svelte';
  import { load, save } from './lib/store.js';
  import { loadManifest } from './lib/manifest.js';

  let { src } = $props();

  const FALLBACK = {
    id: 'diet-history',
    title: 'Take a diet history',
    patient: { name: 'Wei, 24', line: 'Office worker who wants "a diet".' },
    probes: [
      { id: 'drinks', label: 'What do you drink?', yield: 30, hinge: true, reveal: '"Two bubble teas a day."', picture: ['2 bubble teas/day'], note: 'The highest-yield probe.' },
    ],
  };

  let data = $state(null);
  let error = $state(null);
  let asked = $state([]); // ordered list of probe ids
  let lastId = $state(null);
  let showSummary = $state(false);

  let probes = $derived(data ? data.probes || [] : []);
  let intakeProbes = $derived(probes.filter((p) => !p.safety));
  let totalYield = $derived(intakeProbes.reduce((s, p) => s + (p.yield || 0), 0) || 1);
  let byId = $derived(new Map(probes.map((p) => [p.id, p])));

  onMount(async () => {
    try {
      if (!src) throw new Error('no src');
      const parsed = await loadManifest(src);
      if (!parsed || !Array.isArray(parsed.probes) || !parsed.probes.length) throw new Error('empty');
      data = parsed;
    } catch (e) {
      error = String((e && e.message) || e);
      data = FALLBACK;
    }
    const saved = load('diet-history:' + data.id);
    if (saved && Array.isArray(saved.asked)) {
      asked = saved.asked.filter((id) => data.probes.some((p) => p.id === id));
      lastId = asked.length ? asked[asked.length - 1] : null;
    }
  });

  $effect(() => {
    if (!data) return;
    save('diet-history:' + data.id, { asked });
  });

  function ask(id) {
    if (!asked.includes(id)) asked = [...asked, id];
    lastId = id;
    showSummary = false;
  }
  function reset() {
    asked = [];
    lastId = null;
    showSummary = false;
  }

  let askedSet = $derived(new Set(asked));
  let coverage = $derived(Math.round(
    intakeProbes.filter((p) => askedSet.has(p.id)).reduce((s, p) => s + (p.yield || 0), 0) / totalYield * 100
  ));
  let drinksAsked = $derived(askedSet.has('drinks'));
  let safetyAsked = $derived(probes.some((p) => p.safety && askedSet.has(p.id)));
  let last = $derived(lastId ? byId.get(lastId) : null);
  // accumulate the intake picture in probe order
  let pictureItems = $derived(probes.filter((p) => askedSet.has(p.id)).flatMap((p) => p.picture || []));

  let verdict = $derived.by(() => {
    if (!showSummary) return null;
    if (!drinksAsked) {
      return { tone: 'warn', head: 'You missed the highest-yield question',
        body: "You built a picture — but you never asked about drinks, the single biggest hidden contributor here (about two bubble teas a day). The highest-yield question is often the one not asked." };
    }
    if (coverage >= 70) {
      return { tone: 'good', head: 'A solid diet history',
        body: "You caught the drinks — her largest source — and enough of the high-yield pattern to advise well. " +
          (safetyAsked ? "You also asked the gentle do-no-harm question before advising any change." : "Before you advise cutting anything, ask the gentle 'how do you feel about your eating and weight?' question too — do no harm comes first.") };
    }
    return { tone: 'ok', head: 'A reasonable start — keep probing',
      body: "You've asked the drinks question; now cover the other high-yield strands (eating-out and portions carry a lot). " +
        (safetyAsked ? "Good — you ran the do-no-harm check." : "And ask the do-no-harm question before suggesting any restriction.") };
  });
</script>

{#if !data}
  <div class="dh card"><p>Loading…</p></div>
{:else}
  <figure class="dh card">
    <figcaption class="head">
      <strong>{data.title || 'Take a diet history'}</strong>
      <span class="hint">Click the questions you'd ask</span>
    </figcaption>
    {#if data.intro}<p class="intro">{data.intro}</p>{/if}

    {#if data.patient}
      <div class="patient">
        <span class="pname">{data.patient.name}</span>
        <span class="pline">{data.patient.line}</span>
      </div>
    {/if}

    <div class="meter">
      <div class="mrow">
        <span class="mlab">Intake picture uncovered</span>
        <span class="mval">{coverage}%</span>
      </div>
      <div class="bar"><div class="fill" style="width:{coverage}%"></div></div>
      <div class="pills">
        <span class="pill" class:on={drinksAsked}>{drinksAsked ? '✓' : '○'} Drinks probed</span>
        <span class="pill safety" class:on={safetyAsked}>{safetyAsked ? '✓' : '○'} Do-no-harm check</span>
      </div>
    </div>

    <div class="probes" role="group" aria-label="Diet-history probes">
      {#each probes as p}
        <button type="button" class="probe" class:asked={askedSet.has(p.id)} class:hinge={p.hinge} class:safety={p.safety}
                class:active={lastId === p.id} onclick={() => ask(p.id)} aria-pressed={askedSet.has(p.id)}>
          <span class="ptick">{askedSet.has(p.id) ? '✓' : '+'}</span>{p.label}
        </button>
      {/each}
    </div>

    {#if last}
      <div class="reveal" aria-live="polite">
        <p class="say">{last.reveal}</p>
        {#if last.note}<p class="pnote" class:safety={last.safety}>{last.note}</p>{/if}
      </div>
    {:else}
      <p class="prompt">Pick a question above to begin the history.</p>
    {/if}

    {#if pictureItems.length}
      <div class="picture">
        <span class="plabel">Picture so far:</span>
        {#each pictureItems as item}<span class="chip">{item}</span>{/each}
      </div>
    {/if}

    <div class="foot">
      <button type="button" class="sumbtn" onclick={() => (showSummary = true)} disabled={!asked.length}>Summarise the history</button>
      <button type="button" class="resetbtn" onclick={reset} disabled={!asked.length}>Start over</button>
    </div>

    {#if verdict}
      <div class="verdict q-{verdict.tone}" aria-live="polite">
        <b>{verdict.head}</b>
        <p>{verdict.body}</p>
      </div>
    {/if}
    {#if data.credit}<p class="credit">{data.credit}</p>{/if}
  </figure>
{/if}

<style>
  .dh {
    --surface:#fff; --ink:#1a2027; --muted:#5b6670; --line:#d8dee5;
    --brand-ink:#08503f; --brand-bg:#eef5f2; --focus:#1664c0;
    --good:#2f8f5b; --ok:#c98a2b; --warn:#b0555f; --hinge:#1664c0; --safety:#b06a1d;
    color:var(--ink); font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; margin:1.2rem 0;
  }
  .dh.card { background:var(--surface); border:1px solid var(--line); border-radius:10px; padding:16px 20px; max-width:760px; }
  .dh .head { display:flex; flex-wrap:wrap; gap:6px 12px; align-items:baseline; justify-content:space-between; border-bottom:1px solid var(--line); padding-bottom:10px; margin-bottom:12px; }
  .dh .hint { font-size:.78rem; color:var(--muted); }
  .dh .intro { font-size:.92rem; margin:0 0 12px; }
  .dh button { font:inherit; cursor:pointer; }

  .dh .patient { background:var(--brand-bg); border-radius:8px; padding:10px 14px; margin-bottom:14px; font-size:.9rem; }
  .dh .patient .pname { font-weight:700; color:var(--brand-ink); margin-right:8px; }
  .dh .patient .pline { color:var(--ink); }

  .dh .meter { margin-bottom:14px; }
  .dh .mrow { display:flex; justify-content:space-between; align-items:baseline; font-size:.82rem; margin-bottom:4px; }
  .dh .mlab { color:var(--muted); font-weight:600; }
  .dh .mval { font-weight:800; color:var(--brand-ink); font-variant-numeric:tabular-nums; }
  .dh .bar { height:9px; background:#e7ebee; border-radius:5px; overflow:hidden; }
  .dh .fill { height:100%; background:var(--good); border-radius:5px; transition:width .35s ease; }
  .dh .pills { display:flex; flex-wrap:wrap; gap:8px; margin-top:8px; }
  .dh .pill { font-size:.74rem; font-weight:600; padding:2px 9px; border-radius:99px; border:1px solid var(--line); color:var(--muted); background:#fff; }
  .dh .pill.on { color:var(--good); border-color:var(--good); background:color-mix(in srgb, var(--good) 10%, #fff); }
  .dh .pill.safety.on { color:var(--safety); border-color:var(--safety); background:color-mix(in srgb, var(--safety) 10%, #fff); }

  .dh .probes { display:flex; flex-wrap:wrap; gap:7px; margin-bottom:12px; }
  .dh .probe { text-align:left; padding:6px 11px; border:1px solid var(--line); border-radius:8px; background:#fff; color:var(--ink); font-size:.82rem; display:inline-flex; align-items:center; gap:6px; }
  .dh .probe .ptick { font-weight:800; color:var(--muted); }
  .dh .probe:hover { border-color:var(--brand-ink); }
  .dh .probe.hinge { border-style:dashed; }
  .dh .probe.asked { background:var(--brand-bg); border-color:var(--brand-ink); color:var(--brand-ink); font-weight:600; }
  .dh .probe.asked .ptick { color:var(--good); }
  .dh .probe.safety.asked { background:color-mix(in srgb, var(--safety) 10%, #fff); border-color:var(--safety); color:var(--safety); }
  .dh .probe.active { box-shadow:0 0 0 2px color-mix(in srgb, var(--brand-ink) 30%, #fff); }

  .dh .reveal { border:1px solid var(--line); border-radius:8px; padding:10px 14px; margin-bottom:12px; background:#fbfdfc; }
  .dh .say { margin:0 0 6px; font-style:italic; color:var(--ink); }
  .dh .pnote { margin:0; font-size:.85rem; color:var(--muted); }
  .dh .pnote.safety { color:var(--safety); }
  .dh .prompt { margin:0 0 12px; font-size:.86rem; color:var(--muted); }

  .dh .picture { display:flex; flex-wrap:wrap; align-items:center; gap:6px; margin-bottom:12px; }
  .dh .picture .plabel { font-size:.8rem; font-weight:700; color:var(--muted); margin-right:2px; }
  .dh .picture .chip { font-size:.76rem; padding:2px 9px; border-radius:99px; background:#eef5f2; border:1px solid #d4e4dd; color:var(--brand-ink); }

  .dh .foot { display:flex; flex-wrap:wrap; gap:8px; }
  .dh .sumbtn { padding:6px 14px; border:1px solid var(--brand-ink); border-radius:8px; background:var(--brand-ink); color:#fff; font-size:.84rem; font-weight:600; }
  .dh .sumbtn:disabled { opacity:.4; cursor:default; }
  .dh .resetbtn { padding:6px 12px; border:1px solid var(--line); border-radius:8px; background:#fff; color:var(--brand-ink); font-size:.84rem; }
  .dh .resetbtn:disabled { opacity:.4; cursor:default; }

  .dh .verdict { margin-top:12px; border-radius:8px; padding:10px 14px; font-size:.9rem; border-left:4px solid var(--muted); background:#f7f9fa; }
  .dh .verdict p { margin:4px 0 0; }
  .dh .verdict.q-good { border-left-color:var(--good); background:color-mix(in srgb, var(--good) 7%, #fff); }
  .dh .verdict.q-ok { border-left-color:var(--ok); background:color-mix(in srgb, var(--ok) 8%, #fff); }
  .dh .verdict.q-warn { border-left-color:var(--warn); background:color-mix(in srgb, var(--warn) 8%, #fff); }

  .dh .credit { color:var(--muted); font-size:.72rem; margin:10px 0 0; }
  .dh :focus-visible { outline:3px solid var(--focus); outline-offset:2px; border-radius:6px; }
  @media (prefers-reduced-motion: reduce) { .dh * { transition:none !important; } }
  @media (max-width:520px) { .dh.card { padding:14px; } }
</style>
