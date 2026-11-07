# PROMPT: STYLE LEARNER

Goal: analyze the diff between the AI draft and the editor’s changes.

Instructions:
- Highlight recurring edits and decisions.
- Update the style guide, glossary, and forbidden word list.
- Add before/after examples for future learning.
- Record new rules in `runs/<run_id>/style_updates.md`.

Natural Russian style learning:
- Use `docs/russian_translation_quality.md` as the classification framework.
- For accepted human edits, record source/context, original Russian, approved Russian, reason and scope (general vs context-specific) before proposing new rules.
- Tag changes involving English calques, needless uncertainty, false certainty, bureaucracy, verbosity, invented motives, register and authorial rhythm.
- Prefer adding a before/after regression example over a word blacklist entry.
- Do **not** globally forbid «похоже», «интервью», or other legitimate forms because they were wrong in a single passage.
- Keep changes as proposals for human approval; do not silently broaden rules across genres.
