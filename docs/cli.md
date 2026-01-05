# CLI reference

The `tl` CLI orchestrates the pipeline for a given source file.

## `tl init`
Create baseline configs and directory layout (`config/`, `runs/`, `docs/`, `examples/`, `engine/`). Use when bootstrapping a new clone.

## `tl run`
Execute preprocess → terminology → translate → literate → QA. Inputs: `--in <source>` and `--run-id <name>`. Outputs numbered artifacts in `runs/<run_id>/`.

## `tl human`
Prepare `06_human_final_ru.md` for manual editing. Opens or copies the latest AI draft into place for the editor.

## `tl diff`
Generate `diff_human_edits.patch` comparing AI draft to human final.

## `tl learn`
Apply style learner to the diff; update `config/style_guide_ru.md`, `config/glossary.yml`, and `config/forbidden_words_ru.yml`. Write `style_updates.md` to the run folder.

## `tl full`
Runs `run`, waits for `human`, then `diff` and `learn`.

## `tl batch`
Process all files in a directory, creating one run per source file. Ideal for bulk translation jobs.

### Implementation note
This repository ships CLI wrappers under `engine/` as reference stubs. Adapt them to your runtime (bash, Node, or Python) and wire them to the code-agent adapter of choice.
