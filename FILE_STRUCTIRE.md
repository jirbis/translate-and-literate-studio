```
translate-and-literate/
├─ README.md
├─ AGENTS.md
├─ WORKFLOW.md
├─ CLI-interface.md
├─ FILE_STRUCTIRE.md
├─ translator.yml
├─ LICENSE
├─ .gitignore
│
├─ config/
│  ├─ style_guide_ru.md             # living editorial style guide
│  ├─ glossary.yml                  # EN->RU terminology and preferences
│  ├─ do_not_translate.yml          # brands/names/terms to keep as-is
│  ├─ forbidden_words_ru.yml        # discouraged calques + replacements
│  └─ prompts/
│     ├─ translator.md              # prompt/instructions for TRANSLATOR
│     ├─ literary_editor.md         # prompt/instructions for LITERARY EDITOR
│     ├─ qa_checker.md              # prompt/instructions for QA
│     └─ style_learner.md           # prompt/instructions for STYLE LEARNER
│
├─ docs/
│  ├─ index.md
│  ├─ PITCH.md
│  ├─ use_cased.md
│  ├─ config.md                     # description of config/* files
│  ├─ agents.md                     # extended documentation on agents
│  ├─ workflow.md                   # expanded workflow and artifacts
│  └─ cli.md                        # CLI documentation
│
├─ examples/
│  ├─ sample_essay/
│  │  ├─ source_en.md
│  │  ├─ final_ru.md
│  │  └─ notes.md
│  └─ sample_tech/
│     ├─ source_en.md
│     ├─ final_ru.md
│     └─ notes.md
│
├─ runs/
│  └─ 2026-01-05_sample_essay/
│     ├─ 01_source_en.md
│     ├─ 02_preprocessed_en.md
│     ├─ 03_translation_raw_ru.md
│     ├─ 04_literary_ru.md
│     ├─ 05_qa_report.md
│     ├─ 06_human_final_ru.md
│     ├─ diff_human_edits.patch
│     └─ style_updates.md
│
└─ engine/
   ├─ tl                             # CLI entrypoint (bash wrapper)
   ├─ tl.mjs                         # Node CLI (stub)
   ├─ adapters/
   │  ├─ codex.md                    # how to call Codex (instructions)
   │  └─ claude_code.md              # how to call Claude Code (instructions)
   ├─ pipeline/
   │  ├─ orchestrator.mjs
   │  ├─ preprocess.mjs
   │  ├─ terminology.mjs
   │  ├─ translate.mjs
   │  ├─ literate.mjs
   │  ├─ qa.mjs
   │  └─ learn_style.mjs
   └─ util/
      ├─ io.mjs
      ├─ diff.mjs
      └─ yaml.mjs
```
