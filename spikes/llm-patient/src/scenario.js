// Scenario data mirrors the authored book case so the bake-off tests the REAL content.
// Source: book/cases/prediabetes-counseling.case.yml (persona + patient-chat node).
// Kept as a plain object here (spike is decoupled from the Quarto build / YAML loader).

export const SCENARIOS = {
  'prediabetes-mdm-tan': {
    id: 'prediabetes-mdm-tan',
    title: 'Counselling Mdm Tan — newly detected pre-diabetes',
    patient: {
      name: 'Mdm Tan',
      age: 52,
      sex: 'female',
      occupation: 'primary-school teacher',
      // What the patient herself knows/feels (lay framing, not the clinician's note).
      presentation:
        'A routine screening blood test came back with a raised fasting sugar (6.4 mmol/L). ' +
        'You feel completely well and have no symptoms, but you are worried.',
      voice: 'Polite, mildly anxious, time-pressed; enjoys kopi and char kway teow.',
      // Revealed gradually, only when the student asks — never dumped up front.
      habits:
        'Kopi with condensed milk about three times a day; char kway teow bought ' +
        'from the hawker (you do not cook it yourself) for lunch; rice with dinner; ' +
        'sweet drinks with meals; very little physical activity.',
    },
    // The patient speaks first (matches the case intro line).
    opener: 'Doctor, is it very serious?',
    objective:
      'Agree one realistic dietary swap with the patient and check her confidence to do it.',
    turnLimit: 8,
    rubric: {
      objective:
        "Agreed one specific, safe dietary change with the patient and checked her confidence to carry it out.",
      dimensions: [
        {
          key: 'diet_history',
          label: 'Took a focused diet history before advising',
        },
        {
          key: 'realistic_change',
          label:
            'Co-created ONE realistic, patient-centred change (not a forbidden-foods list)',
        },
        {
          key: 'communication',
          label:
            'Motivational, non-judgemental language; checked confidence / understanding',
        },
      ],
    },
  },
}

export const DEFAULT_SCENARIO_ID = 'prediabetes-mdm-tan'
