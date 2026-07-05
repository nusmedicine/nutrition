import { mount } from 'svelte';
import CasePlayer from './CasePlayer.svelte';
import Quiz from './Quiz.svelte';
import GlucoScale from './GlucoScale.svelte';
import Molecule from './Molecule.svelte';
import Protein from './Protein.svelte';
import GutJourney from './GutJourney.svelte';
import MetabolicMap from './MetabolicMap.svelte';
import MetabolicSwitch from './MetabolicSwitch.svelte';
import ScfaFlow from './ScfaFlow.svelte';
import AppetiteThermostat from './AppetiteThermostat.svelte';
import EnergyBudget from './EnergyBudget.svelte';
import PillarsHub from './PillarsHub.svelte';
import HealthyPlate from './HealthyPlate.svelte';
import DietHistory from './DietHistory.svelte';
import NutriGrade from './NutriGrade.svelte';
import LifeStages from './LifeStages.svelte';
import ClaimAnalyzer from './ClaimAnalyzer.svelte';
import { resolveAsset } from './lib/base.js';

// Island registry: data-island="<key>" -> Svelte component.
const REGISTRY = {
  case: CasePlayer,
  quiz: Quiz,
  gi: GlucoScale,
  molecule: Molecule,
  protein: Protein,
  gut: GutJourney,
  'metabolic-map': MetabolicMap,
  'metabolic-switch': MetabolicSwitch,
  'scfa-flow': ScfaFlow,
  'appetite-thermostat': AppetiteThermostat,
  'energy-budget': EnergyBudget,
  'pillars-hub': PillarsHub,
  'healthy-plate': HealthyPlate,
  'diet-history': DietHistory,
  'nutri-grade': NutriGrade,
  'life-stages': LifeStages,
  'claim-analyzer': ClaimAnalyzer,
  // future: flashcards, diagram, …
};

function init() {
  document.querySelectorAll('[data-island]').forEach((el) => {
    if (el.dataset.mounted) return;
    const Comp = REGISTRY[el.getAttribute('data-island')];
    if (!Comp) return;
    el.dataset.mounted = '1';
    mount(Comp, { target: el, props: { src: resolveAsset(el.getAttribute('data-src')) } });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
