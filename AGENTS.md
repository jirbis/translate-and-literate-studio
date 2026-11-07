
# Agents

This document defines the agents used in the translate-and-literate workflow.

All agents are executed and coordinated by a code agent (Codex / Claude Code).

---

## OPTIONAL POETRY SCANSION REVIEWER

For Russian-language **poetry, song lyrics and rap**, the orchestrator may invoke the optional review described in [docs/poetry_translation_workflow.md](docs/poetry_translation_workflow.md). The dedicated prompt is [config/prompts/poetry_scansion_reviewer.md](config/prompts/poetry_scansion_reviewer.md). It is a prosody diagnostic pass, **not** a replacement for the literary editor or the human editor. See [docs/poetry_tool_assessment.md](docs/poetry_tool_assessment.md) for unverified dependencies and limitations. Run no network downloads automatically.

---

## OPTIONAL RUSSIAN POET / VERSE EDITOR (LOCAL 30B)

For **new Russian poems, lyrics or rap** (not just English-to-Russian translation), load [skills/russian-versification/SKILL.md](skills/russian-versification/SKILL.md). The small-model instruction is [config/prompts/russian_poet_30b.md](config/prompts/russian_poet_30b.md); load its prosody reference and editing examples on demand. The POET drafts, VERSE_EDITOR reviews and QA verifies; the same local model can run sequential roles in separate turns. Do not claim that the skill has been deployed, that RPST has run, or that meter is verified without measurements.

---

## ORCHESTRATOR

**Role:** Process coordinator

**Responsibilities:**
- Split input text into chunks
- Execute agents in the correct order
- Merge outputs
- Track artifacts per document run

---

## PREPROCESSOR

**Role:** Text normalization

**Responsibilities:**
- Clean formatting noise
- Normalize markdown
- Detect entities (names, terms, numbers, units)
- Prepare text for translation

---

## TERMINOLOGY MANAGER

**Role:** Consistency enforcement

**Responsibilities:**
- Apply glossary mappings
- Protect non-translatable terms
- Flag ambiguous terminology
- Ensure consistent vocabulary

---

## TRANSLATOR

**Role:** Meaning-accurate translation

**Responsibilities:**
- Preserve meaning, structure, and facts
- Avoid stylistic polishing
- Keep close to source semantics
- Produce a raw Russian draft

Output quality target: *correct, not beautiful*

---

## LITERARY EDITOR

**Role:** Style and readability

**Responsibilities:**
- Apply style guide rules
- Improve flow, rhythm, and clarity
- Remove literalism and machine artifacts
- Shape the editorial voice

Output quality target: *readable, natural Russian*

---

## QA / CONSISTENCY CHECKER

**Role:** Verification

**Responsibilities:**
- Detect meaning drift
- Verify terminology and numbers
- Flag stylistic violations
- Produce a QA report

---

## STYLE LEARNER

**Role:** Learning from human edits

**Responsibilities:**
- Analyze diffs between AI output and human-edited text
- Extract reusable style rules
- Update:
  - style guide
  - glossary
  - forbidden word lists
  - example pairs

This agent enables long-term voice adaptation.
