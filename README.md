# translate-and-literate

**translate-and-literate** is a human-in-the-loop AI agent orchestration (agentic workflow) for translating texts from English to Russian, with a strict separation between meaning-accurate translation and literary editing.

The system treats human edits as first-class signals: every correction updates style rules, terminology, and examples, allowing the workflow to gradually adapt to a specific editorial voice while keeping final authority with the editor.

This is not a one-click translator.  
It is an editorial pipeline.

---

## Core idea

Translation is divided into two distinct phases:

1. **Translate** — preserve meaning, structure, facts, and intent.
2. **Literate** — shape the text into natural, readable, literary Russian.

Only a human can decide when a text is truly finished.  
The system is designed around that assumption.

---

## Why human in the loop

- Literary quality cannot be fully automated
- Style is defined by decisions, not parameters
- Human edits are high-quality training data
- Voice consistency matters more than raw fluency

In this workflow, the human editor is part of the architecture — not a post-processing step.

---

## What this repository contains

- Agent definitions and responsibilities
- A documented translation → editing workflow
- Style learning from human diffs
- A code-agent-driven execution model (Codex / Claude Code)

---

## Engine

The workflow is executed by a **code agent** (e.g. Codex, Claude Code) that:
- reads source text
- runs agents sequentially
- applies style rules and glossary
- produces structured outputs
- captures human edits as new knowledge

No UI assumptions are made.  
CLI- and repo-driven by design.

---

## Typical use cases

- Books and long-form non-fiction
- Essays, manifestos, and opinionated texts
- Author blogs and newsletters
- Philosophical, cultural, and technical writing
- Any content where voice matters

---

## One-line summary

> A translation system that learns to write Russian the way you edit it.
