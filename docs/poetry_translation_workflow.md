# Optional workflow: English-to-Russian poetry, songs and rap

This is a **genre-specific addition** to the existing translation → literary editing → QA → human approval workflow. It is not a substitute for the general Russian editorial standard. It is not automatically executed by the JavaScript pipeline (currently placeholder code).

## Local Russian versification skill for 30B models

For **original composition** and small-model Russian verse editing, use [../skills/russian-versification/SKILL.md](../skills/russian-versification/SKILL.md), beginning with its compact Russian-language [writer/editor prompt](../config/prompts/russian_poet_30b.md). The skill also supports poetic translation, but this workflow remains the source of truth for meaning-preserving EN→RU translation. It does not automatically install models or change the executable pipeline.

## Trigger

Activate only when the task involves verse, poetic song text, rap, or an explicit request to preserve sound, meter or rhyme. Do not route ordinary prose, letters, business summaries or technical documentation through verse scoring.

Before translating, establish the user's goal:

- **Semantic / literary translation:** meaning, imagery, voice, cultural associations and natural Russian lead; rhyme/meter are optional.
- **Form-preserving translation:** try to reproduce stanza form, rhyme scheme and comparable rhythm *without losing essential meaning*.
- **Singable lyrics / rap:** account for practical phrase length, stresses, repetition, breath, tempo, call-and-response and performance; musical constraints require human listening and may not be visible in text.

If mode is unspecified, choose a **meaning-first literary draft** and optionally propose one form-oriented alternative. Never automatically force rhyme.

## Ordered procedure

1. **Source close reading** (TRANSLATOR + human): mark images, metaphors, tone, semantic ambiguity, pauses, stanza boundaries, rhyme and approximate musical cadence in the *source language*. Do not use the Russian scansion tool on English text.
2. **Meaning-first Russian draft** (TRANSLATOR): produce a faithful, idiomatic version. Protect intentional strangeness, neologisms, fragments and unusual word order when aesthetically important.
3. **Optional form-oriented alternatives** (LITERARY EDITOR): for each significant segment, try two or three versions only where the brief requires metrical/rhyming constraints. In Russian, inversion is legitimate and may alter focus or rhythm; reject it only when it creates grammatical mistakes, unclear reference or unintended sense. Do not force false rhymes.
4. **Russian prosodic diagnostics** (POETRY SCANSION REVIEWER):
   - When locally available with verified models, call RPST on each Russian candidate per stanza; use `align(lines)` for verse or `align_rap(text)` for rap where appropriate.
   - Capture proposed accents, meter, rhyme scheme, technicality score and warnings. Inspect stanza boundary effects.
   - The score is diagnostic **per candidate** and cannot decide the winner alone.
   - Without RPST, mark `tool_status: unavailable` and provide only qualitative observations explicitly labeled manual.
5. **Fidelity, grammar and naturalness gate** (QA CHECKER): compare the chosen Russian with the source. Prioritize agreement in case, gender, number, person, verb tense and pronoun antecedents across lines; distinguish intended shifts from mistakes. Reject invented meaning, changed modality, mechanical calques, false linguistic stresses and rhymes achieved by distorting meaning. Permit meaningful inversions and intentional irregular rhythm.
6. **Human editorial choice**: select the candidate based on a reasoned trade-off of source imagery, Russian idiom, rhythm, sonic qualities, singability and intended style.
7. **Style learning**: store approved changes as contextual examples with genre, goal, meter notes and reason. Do not turn them into universal word replacement rules.

## Decision rubric (qualitative; no invented composite score)

| Axis | Review question |
| --- | --- |
| Meaning | Are images, relationships, allusions, ambiguity and tone intact? |
| Native Russian | Does the line sound like Russian poetry rather than translated English? |
| Rhythm & stress | Do stresses fall naturally and support the intended movement? |
| Rhyme & phonetics | Is the rhyme audible and appropriate, or intentionally absent? |
| Voice | Is the poet's manner preserved, including deliberate distortions? |
| Performance | When needed, can the line be sung or spoken at target tempo? |
| Provenance | Are diagnostic results attributable to a real tool run and version? |

## Output artifacts (suggested per run)

- `poetry_source_analysis.md` — manual source imagery/form notes and mode.
- `poetry_candidates_ru.md` — meaning-first draft and optional form-oriented alternative(s).
- `poetry_prosody_report.md` — RPST raw observations (or `not measured`) and caveats.
- `poetry_editor_decision.md` — selected text and trade-off rationale.
- Existing `05_qa_report.md` — final meaning/style checks.
- Existing human-approved final and style learning records.

## External-tool protocol (not implemented here)

Documented API shape in the inspected fork:

```python
import russian_scansion

tool = russian_scansion.create_rpst_instance("/absolute/path/to/verified-models")
verse_result = tool.align(["Пример строки один", "Пример строки два"])
# verse_result.score, verse_result.meter, verse_result.rhyme_scheme
# verse_result.get_stressed_lines(show_secondary_accentuation=True)

# For rap, input is one string:
rap_result = tool.align_rap("Строка один\nСтрока два")
```

This snippet is an *illustration*, **not tested integration code**. Keep tool invocation opt-in, local where possible, error-tolerant and isolated from the core pipeline. Do not fetch or run unknown model artifacts automatically.

## RIFMA usage

RIFMA is an optional fixture source, not a generator. Select small, appropriately licensed, representative cases (regular meter, rhyme variation, deliberate irregularity, ambiguous stresses). Check dataset provenance and permissions; avoid storing or reproducing protected text. Do not mark machine-produced accentuation as a ground truth for artistic preference.

## Exit conditions

Publish only after the human editor has approved the poem. If source meaning and meter conflict, disclose the trade-off. If scansion failed or models were unavailable, say so; a clean report is not proof of correct prosody.
