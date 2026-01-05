# Agents

This document expands on the roles defined in `AGENTS.md` and describes how they interact in the pipeline.

## ORCHESTRATOR
Coordinates the entire run: splits source text into chunks, calls each agent in order, merges outputs, and records artifacts in `runs/<run_id>/`.

## PREPROCESSOR
Normalizes input markdown, trims noise, and detects protected entities (glossary terms, do-not-translate tokens, numerals) so downstream agents can preserve them.

## TERMINOLOGY MANAGER
Applies glossary mappings, flags ambiguous terms, and ensures protected tokens stay untouched. Produces annotations consumed by the translator.

## TRANSLATOR
Generates a meaning-accurate Russian draft. Targets correctness over style; follows glossary and do-not-translate rules. Output: `03_translation_raw_ru.md`.

## LITERARY EDITOR
Transforms the raw translation into readable, natural Russian aligned with the style guide. Output: `04_literary_ru.md`.

## QA / CONSISTENCY CHECKER
Verifies fidelity to the source: facts, numbers, names, and terminology. Produces `05_qa_report.md` with flagged issues and suggestions.

## STYLE LEARNER
Analyzes diffs between AI drafts and human-edited finals. Updates style guide, glossary, and forbidden word lists; writes `style_updates.md` inside the run directory.

## Code agent runtime
A code agent (Codex or Claude Code) executes each step, reading prompts from `config/prompts/` and writing artifacts under `runs/`. Human edits are first-class inputs into the style learner.
