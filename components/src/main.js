import { mount } from 'svelte';
import CasePlayer from './CasePlayer.svelte';
import Quiz from './Quiz.svelte';
import GlucoScale from './GlucoScale.svelte';

// Island registry: data-island="<key>" -> Svelte component.
const REGISTRY = {
  case: CasePlayer,
  quiz: Quiz,
  gi: GlucoScale,
  // future: flashcards, diagram, …
};

function init() {
  document.querySelectorAll('[data-island]').forEach((el) => {
    if (el.dataset.mounted) return;
    const Comp = REGISTRY[el.getAttribute('data-island')];
    if (!Comp) return;
    el.dataset.mounted = '1';
    mount(Comp, { target: el, props: { src: el.getAttribute('data-src') } });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
