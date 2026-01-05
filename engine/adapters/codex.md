# Adapter: Codex

Guidance for invoking Codex as the code agent.

- Package prompts from `config/prompts/` with source text and assets.
- Send sequential tasks for each pipeline stage and write artifacts to `runs/<run_id>/`.
- Capture logs and outputs for QA review.
