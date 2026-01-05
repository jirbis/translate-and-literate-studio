translate-and-literate/
├─ README.md
├─ AGENTS.md
├─ WORKFLOW.md
├─ LICENSE
├─ .gitignore
│
├─ config/
│  ├─ translator.yml                # базовые настройки пайплайна
│  ├─ style_guide_ru.md             # "живой" стайл-гайд редактора
│  ├─ glossary.yml                  # EN->RU терминология и предпочтения
│  ├─ do_not_translate.yml          # бренды/имена/термины "как есть"
│  ├─ forbidden_words_ru.yml        # нежелательные слова/кальки + замены
│  └─ prompts/
│     ├─ translator.md              # промпт/инструкции агента TRANSLATOR
│     ├─ literary_editor.md         # промпт/инструкции агента LITERARY EDITOR
│     ├─ qa_checker.md              # промпт/инструкции агента QA
│     └─ style_learner.md           # промпт/инструкции агента STYLE LEARNER
│
├─ docs/
│  ├─ index.md
│  ├─ config.md                     # описание файлов config/*
│  ├─ agents.md                     # расширенная документация по агентам
│  ├─ workflow.md                   # расширенная схема + артефакты
│  └─ cli.md                        # документация CLI
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
   ├─ tl.mjs                         # Node CLI (или tl.py)
   ├─ adapters/
   │  ├─ codex.md                    # как дергать Codex (инструкции)
   │  └─ claude_code.md              # как дергать Claude Code (инструкции)
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
