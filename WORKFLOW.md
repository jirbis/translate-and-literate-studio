# Workflow

This document describes the end-to-end agentic workflow.

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

---

## Russian editorial acceptance gate

Before translation, load `config/style_guide_ru.md`, `docs/russian_translation_quality.md`, and the glossary. The translator should not produce English syntax written in Russian words, even when a later literary pass is expected.

During literary editing, perform a standalone native-Russian reading pass, then compare with the source to catch meaning or modality drift.

The QA pass must review the cases in `examples/russian_quality_regressions.md` for contextual regression checks. A passage fails when its meaning is altered **or** its Russian reads like a mechanical translation. Keep the final text clean; put findings and unresolved choices in the QA report.

User edits become proposed contextual examples for the STYLE LEARNER, not automatic global blacklist entries. The human editor retains final authority.
