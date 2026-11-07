# Assessment: RussianPoetryScansionTool and RIFMA for poetic translation

Status: repository inspection only (2026-11-07). No downloaded language models, dataset benchmark, executable installation, or run has been verified.

## Problem

Our general EN→RU translation pipeline accounts for semantic fidelity and idiomatic Russian but has no specialized handling for **poetry, song lyrics, and rap**. Meter, stress, rhyme, rhythm and phrasing can be essential to a text's meaning and artistic effect. A fluent prose-style translation can erase the form; a forced formal translation can distort meaning and Russian usage.

## Repositories inspected

### [jirbis/RussianPoetryScansionTool](https://github.com/jirbis/RussianPoetryScansionTool)

- This is an **experimental fork** of [RussianNLP/RussianPoetryScansionTool](https://github.com/RussianNLP/RussianPoetryScansionTool), not an independently validated new analysis engine. The repository README also references the Koziev implementation.
- Python package `russian_scansion`, with `create_rpst_instance(models_dir)`, `align(lines)` and `align_rap(text)` documented.
- Produces proposed stress placement, meter identification (including *dolnik*), rhyme information, and a technicality score for verse. Has a separate rap analysis path.
- Requires pretrained models/pronunciation resources **outside this fork**. README points to an external archive. The Git tree has placeholder model directories, not the model files. Reproducible offline execution requires a separately verified and licensed local model bundle.
- `requirements.txt` includes PyTorch, UDPipe and a Git dependency on `rusyllab`; installation/version compatibility not yet tested. The README's installation example clones a different repository and must not be treated as a tested command for this fork.
- The README explicitly warns about stanza-wise analysis, cross-stanza rhymes, long stanza segmentation, stress and meter mistakes on single lines, and limited end-rhyme lookahead (next two lines).
- The technicality score measures conformity to its heuristics. It is **not** a measure of poetic merit, semantic fidelity, musical phrasing or natural Russian.
- License: MIT in repository; validate model asset licenses separately.

**Verdict:** High value as an **optional analysis aid and diagnostic gate** for Russian verse, not as final literary judge and not as a mandatory dependency.

### [jirbis/Rifma](https://github.com/jirbis/Rifma)

- A **dataset**, not a software rhyme generator or dictionary of ready-made rhymes.
- README describes 5,002 samples with `poem_text`, `accentuation_markup`, and `rhyme_scheme`; `rifma_dataset.json` is approximately 2.85 MB in the inspected Git tree.
- Includes multiple forms, deliberate irregularities, non-professional poetry, and errors: suitable for **challenging regression examples**, not only idealized verse.
- Markdown report `poetry_aligner_tests.md` includes data distributions but does not establish our own run or integration accuracy.
- Stress markup uses combining accents; Unicode normalization and stress notation need special care before comparison. `-` denotes an unrhymed line; rhyme labels are local to each marked stanza.
- Repository contains an MIT LICENSE. **Do not assume its license establishes copyright ownership over every embedded poem.** Avoid reproducing substantial third-party verses, using the dataset as generative training data, or redistributing it without separate rights review.

**Verdict:** Valuable as **test and comparison material**, not as a creative writing model or authoritative pronunciation oracle.

## How to use them together

| Task | RPST | RIFMA | Human editor |
| --- | --- | --- | --- |
| Identify candidate Russian stress/meter | Diagnostic analyzer | Stress-marked examples | Verify ambiguous or expressive stresses |
| Check rhyme pattern | Heuristic detection | Examples of varied patterns | Judge genuine audible rhyme, slant rhyme, assonance |
| Compare two Russian poem drafts | Per-draft diagnostics, **no automatic ranking by single score** | Regression coverage | Choose based on meaning, voice, sound |
| Evaluate free verse | Do not impose meter | Irregular examples | Approve intended non-metrical form |
| Song or rap phrasing | `align_rap` when applicable | Some nontraditional patterns | Check singing/speaking, pauses, performance constraints |

## Integration decision

1. Keep the general translation and literary workflow intact.
2. Route only texts *identified as poetry/song/rap* to the optional procedure in [poetry_translation_workflow.md](poetry_translation_workflow.md).
3. Use RPST **only for generated Russian candidates**, and only if installed with verified local models; don't claim it analyses an English source's meter.
4. Use RIFMA for optional local, rights-reviewed benchmarking or hand-picked short test fixtures; don't import the full collection into the core package.
5. The editor has final authority. Meaning and idiomatic Russian have priority over a metrical technicality score unless the user explicitly chooses form fidelity as a goal.
6. Log tool version/commit, model provenance, input stanza boundaries, diagnostics, uncertainty and editorial decisions. Do not send unpublished poems to external services without authorization.
7. If unavailable, continue with manual scansion and clearly say **not measured**. Never manufacture a meter/score.

## Open verification tasks (not completed by this PR)

- Install the fork in an isolated Python environment, confirm supported interpreter versions and transitive dependencies.
- Obtain and inspect model archive provenance, hash, size and licensing; confirm offline execution on available hardware.
- Compare results against a rights-cleared subset of RIFMA (regular verse, free verse, rap, one-line, unusual stress, cross-stanza rhyme).
- Determine acceptable false-positive/false-negative rates, and surface the tool's uncertainty instead of hiding it.
- Decide whether an optional CLI bridge and structured JSON output belong in this or a separate project.
