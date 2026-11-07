---
name: russian-versification
description: Write, translate, and revise idiomatic Russian poetry, song lyrics and rap. Follow a compact 30B-friendly prompt, consult Russian versification reference on demand, and run optional human-reviewed scansion diagnostics only when relevant.
---

# Russian versification — local 30B skill

This skill is a **prompt-and-reference package**, not a deployed tool, a fine-tuned model or a self-running agent. Intended for local Qwen-class 30B models on Asgard/Thor, and other Russian-capable LLMs. It can be used standalone for composing Russian verse or alongside the existing translation → editing → QA pipeline for poetic translation.

## Routing

Use for new Russian poems, song lyrics, rap, poetic translations, rhythm/meter/rhyme editing and reviews. Do **not** use for ordinary prose, technical documentation or business correspondence.

Read `config/prompts/russian_poet_30b.md` first. For formal verse, also read `references/versification_ru.md`; for editing or evaluating a draft, read `references/revision_cases_ru.md`. Consult `docs/poetry_translation_workflow.md` when translating existing poems, not when composing new original lyrics. Load only references needed for the task to conserve context.

## Small-model operating pattern

Keep the active context short; split creation and criticism instead of issuing an enormous all-in-one request.

1. **BRIEF:** Identify genre, text type, addressee, subject, emotion, voice, stanza/chorus structure, rhyme scheme, meter if any, length, and intended performance. If parameters are missing, choose suitable defaults; avoid unnecessary clarification.
2. **PLAN:** Write a 1–3 line internal outline per stanza (narrative function, key images, emotional progression). For a translation, distinguish meaning-bearing details from formal features.
3. **DRAFT:** Produce full Russian verses. Optimize for meaning, clarity, natural stresses and voice *before* cosmetic rhymes. Use song sections such as `[Verse]`, `[Chorus]`, `[Bridge]` only when requested or useful.
4. **REVIEW:** In a **separate pass**, first check case, gender, number, person, verb agreement, tense continuity and pronoun antecedents across lines; then review meaning, stress, meter, rhyme and filler. Russian word order is flexible: inversion may legitimately change emphasis or poetic rhythm and is not automatically a defect. Review each stanza as a unit, not merely isolated lines.
5. **REVISE:** Correct actual grammatical or referential mismatches first. Reordering Russian words is permissible when grammatical relations and intended focus remain clear. Rewrite whole weak lines or adjacent line pairs when local changes fail; avoid repeatedly repairing one end-word and introducing another error.
6. **OPTIONAL DIAGNOSTICS:** If verified offline RussianPoetryScansionTool is installed, use it for stress/meter/rhyme observations on the Russian candidates; consult `docs/poetry_tool_assessment.md`. If not, mark prosody `not measured` and do not fabricate metrics. RIFMA supplies sample cases for review, **not** generated rhymes.
7. **DELIVER:** Default to the final Russian text alone when the user asks for a poem or lyrics. Add succinct notes only if requested or if material trade-offs must be disclosed.

## Output modes

- **WRITE:** Only the finished work in the requested format; no unnecessary self-congratulation.
- **EDIT:** Revised text and, if asked, a short table with *original → revised → why*. Preserve original lyrics in a separate draft when working with user-owned files.
- **REVIEW:** Issues grouped into `Grammar/referents` (cases, agreement, pronouns, tense), `Meaning/focus`, `Russian idiom`, `Stress/rhythm`, `Rhyme/sound`, `Song performance`; each issue references an exact line. No invented grades.
- **TRANSLATE:** Meaning-first Russian version; optional form-aware alternative with clearly stated trade-offs. Never force rhyme if that changes the author's intent.

## Local orchestration / handoff

- Role 1 `POET`: draft to brief.
- Role 2 `VERSE_EDITOR`: independently examine prosody, style and intelligibility; no numeric scoring unless measured.
- Role 3 `QA`: verify invariants (source meaning for translations, requested sections/line counts, words and names, deliberate effects).
- Role 4 `HUMAN`: final accept/revise. Two sequential calls to the same 30B model can implement the first two roles without multi-agent deployment.
- Do not silently commit, overwrite accepted lyrics, export manuscripts, publish, fetch remote models, or send unpublished texts to cloud models.
- Store approved human line edits as **contextual examples**, not automatic universal bans.

## Acceptance gates

1. Are cases, gender, number, person and verb forms consistent; are pronoun references and any shifts of tense/perspective clear?
2. Does it sound like naturally spoken/sung Russian, with intentional inversions permitted?
3. Does each line contribute meaning or sound, rather than exist solely for rhyme?
4. Are the declared genre and form actually plausible? If formal compliance is uncertain, do not claim it.
5. Does a translation preserve the original's central imagery, facts and tone?
6. Does a song have a memorable refrain and pronounceable phrases? Performance still needs a real listening check.

## References and limitations

- `references/versification_ru.md`: Russian meter, stress, rhyme, stanza structure, free verse, lyrics and rap.
- `references/revision_cases_ru.md`: original instructional mistakes and editorial correction strategies.
- `docs/poetry_tool_assessment.md`: inspected RPST and RIFMA capabilities, limitations and model licensing caveats.
- `examples/poetry_30b_review_cases.md`: non-executable manual quality scenarios.

This change ships **instructions only**. It has not been deployed on Thor or evaluated with a live 30B model.

## Literary semantics / false-positive gate

Before rejecting an image for “inconsistency”, check ordinary Russian figurative senses, understatement, loose quantifiers, hyperbole and context. “Пустая электричка” may mean *almost empty*; a few passengers are compatible. “Свистит по рельсам” may express fast motion rather than a literally whistling train. Report an actual contradiction only if plausible context-sensitive readings are incompatible. Distinguish certain errors from editorial questions; do not flatten expressive language into literal prose.
