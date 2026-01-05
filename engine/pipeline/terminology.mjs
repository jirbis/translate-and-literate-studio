// Terminology manager stub: apply glossary and flag ambiguities.
export function applyGlossary(text, glossary = {}) {
  let processed = text;
  for (const [en, ru] of Object.entries(glossary)) {
    const regex = new RegExp(`\\b${en}\\b`, 'gi');
    processed = processed.replace(regex, ru);
  }
  return { text: processed, notes: [] };
}
