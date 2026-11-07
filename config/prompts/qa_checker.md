# PROMPT: QA CHECKER

Goal: compare the final text with the original and surface deviations.

Instructions:
- Check numbers, names, terminology, and facts.
- Note potential meaning drift and style violations.
- Flag term inconsistencies with the glossary.
- Produce a report as a list of findings and recommendations.

Poetry-specific scope:
- For poetry, song lyrics or rap, check `docs/poetry_translation_workflow.md` in addition to general fidelity checks.
- Detect awkward inverted word order used only to create rhyme, false stress, flattened metaphors, and lost intentional irregularity.
- Distinguish measurements from manual observations; do not invent prosodic scores.
