# PROMPT: QA CHECKER

Goal: compare the final text with the original and surface deviations.

Instructions:
- Check numbers, names, terminology, and facts.
- Note potential meaning drift and style violations.
- Flag term inconsistencies with the glossary.
- Produce a report as a list of findings and recommendations.

Russian-language quality gate:
- Apply `docs/russian_translation_quality.md` and `examples/russian_quality_regressions.md` to the edited Russian text.
- Verify both meaning fidelity and idiomatic Russian. Flag calqued constructions, machine-like business language, empty abstractions, and inappropriate register.
- Compare epistemic modality: unwanted «похоже»/«вероятно» is a finding only when the source/context does not warrant uncertainty. Missing source hedges or invented certainty are also errors.
- Flag invented reasons, private motives, claims, and explanatory padding.
- Rate findings BLOCKER (meaning/modality), MAJOR (unnatural construction/tone), or MINOR (optional phrasing/punctuation). Quote a brief source/context snippet, the exact Russian span, and an idiomatic proposed revision.
- Do not use blind keyword bans; borrowed terms and hedging words can be correct in context.
