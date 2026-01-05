# Workflow details

End-to-end sequence for a translation run.

1. **Preprocess** – normalize markdown, detect protected entities.
2. **Terminology** – apply glossary substitutions; flag ambiguities.
3. **Translate** – generate meaning-accurate Russian draft (`03_translation_raw_ru.md`).
4. **Literate** – apply style and readability improvements (`04_literary_ru.md`).
5. **QA** – verify fidelity and consistency; output `05_qa_report.md`.
6. **Human edit** – editor finalizes text as `06_human_final_ru.md`.
7. **Learn style** – analyze diff, update `config/*`, and emit `style_updates.md`.

Artifacts are stored under `runs/<run_id>/` with numbered filenames for traceability.
