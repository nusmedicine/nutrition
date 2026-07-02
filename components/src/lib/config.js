// Book-wide simulated-patient config, read once. Set via either:
//   <meta name="patient-llm" content='{"endpoint":"https://…","enabled":true}'>
//   window.__PATIENT_LLM__ = { endpoint, enabled, accessToken? }
// Absent / disabled / no endpoint => null, so the CasePlayer degrades to the
// placeholder + fallbackGoto (works offline, no backend required).

let cached // undefined = not yet read

export function patientConfig() {
  if (cached !== undefined) return cached
  cached = read()
  return cached
}

function read() {
  try {
    if (typeof window !== 'undefined' && window.__PATIENT_LLM__) {
      return normalize(window.__PATIENT_LLM__)
    }
    if (typeof document !== 'undefined') {
      const meta = document.querySelector('meta[name="patient-llm"]')
      if (meta) return normalize(JSON.parse(meta.getAttribute('content') || '{}'))
    }
  } catch {
    /* malformed config => treat as disabled */
  }
  return null
}

function normalize(c) {
  if (!c || !c.enabled || !c.endpoint) return null
  return {
    endpoint: String(c.endpoint).replace(/\/+$/, ''),
    accessToken: c.accessToken || '',
  }
}
