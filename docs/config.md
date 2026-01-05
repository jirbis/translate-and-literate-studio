# Configuration files

This guide explains the configuration assets used by the translate-and-literate workflow.

## `config/style_guide_ru.md`
Living editorial style guide. Capture tone, punctuation rules, and recurring preferences. Updated manually or via the style learner.

## `config/glossary.yml`
English → Russian terminology map. Use when consistency matters. Keys are English terms; values are preferred Russian equivalents.

## `config/do_not_translate.yml`
List of names, brands, and expressions that should remain in the source language. Each entry is a plain string.

## `config/forbidden_words_ru.yml`
Pairs of discouraged Russian words and their recommended replacements. Each entry has fields `от` and `на`.

## Prompts (`config/prompts/*.md`)
Role-specific prompt briefs for each agent: translator, literary editor, QA checker, and style learner. The orchestrator packages these with the source text and style assets for the code-agent runtime.

## Engine selection (`translator.yml`)
Top-level pipeline settings: source/target language, chunking, artifact filenames, style asset paths, and LLM provider preferences. Paths should remain relative to the repository root.
