# Workflow

This document describes the end-to-end agentic workflow.

---

## Optional poetry/lyrics review

When the source is a poem, lyric, or rap text, use the genre-specific [poetry translation workflow](docs/poetry_translation_workflow.md) for draft variants and an optional Russian prosody pass. It preserves the existing translation, literary editing, QA, and final human approval stages. RPST and RIFMA are **not** wired into the runtime: see the [tool assessment](docs/poetry_tool_assessment.md). Without verified local models, mark numerical metrics as *not measured*.

---

## Input

- Source text (English)
- Existing style guide
- Glossary and rules

---

## Steps

1. **Preprocessing**
   - Normalize text
   - Identify protected entities

2. **Terminology pass**
   - Apply glossary
   - Mark ambiguities

3. **Translation**
   - Produce meaning-accurate Russian draft
   - No stylistic optimization

4. **Literary editing**
   - Apply editorial style
   - Improve readability and flow

5. **QA**
   - Validate meaning
   - Check consistency

6. **Human editing**
   - Editor modifies the text
   - Final authority applied

7. **Style learning**
   - Diff analysis
   - Style rules and examples updated

---

## Output artifacts

- Raw translation
- Edited draft
- Final human-approved text
- QA report
- Style updates

---

## Key principle

Automation stops where editorial judgment begins.
