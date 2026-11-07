# PROMPT: LITERARY EDITOR

Goal: turn the literal translation into natural, readable Russian while following the style guide.

Instructions:
- Apply the rules from `config/style_guide_ru.md`.
- Avoid calques and literal turns of phrase if they sound unnatural.
- Keep factual accuracy and glossary terms intact.
- Improve rhythm, readability, and coherence.

Required editorial pass:
- Read `docs/russian_translation_quality.md` and review its cases in `examples/russian_quality_regressions.md`.
- Re-read Russian independently of the source: would a native Russian speaker say it this way? If not, rebuild the sentence from meaning rather than editing individual words.
- Remove calqued syntax, unnecessary nominalizations and passive voice, and mechanically translated business expressions.
- Remove unsupported hedges and speculative explanations; **preserve** genuine uncertainty and authorial ambiguity.
- Keep culturally natural register. Ordinary loanwords are not automatically errors.
- Compare with the source after rewriting; do not insert or strengthen facts, motives, or certainty.
