# Adapter: Claude Code

Guidance for invoking Claude Code as the code agent.

- Provide the same task bundle as for Codex: prompts, assets, and output targets.
- Ensure streaming outputs are saved to disk under `runs/<run_id>/`.
- Normalize line endings and markdown to keep diffs clean for style learning.
