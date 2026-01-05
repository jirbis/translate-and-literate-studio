## **CLI-интерфейс для code agent (Codex / Claude Code)**

Идея: **CLI не “делает перевод сам”**, а:

* готовит папку `runs/<run_id>/`

* собирает контекст (config \+ prompts)

* вызывает код-агента/LLM адаптер

* пишет артефакты на диск

* поддерживает “human-in-the-loop” шаг и diff-обучение

Ниже — **спека команд** (минимум \+ удобно).

---

### **`tl init`**

Создать базовые конфиги и папки.

`tl init`

Создаёт:

* `config/*.yml`, `config/style_guide_ru.md`, `config/prompts/*.md`

* `runs/`, `docs/`, `examples/`

---

### **`tl run`**

Запуск полного пайплайна: translate → literate → qa.

`tl run --in input/source_en.md --run-id mytext1`

**Что происходит:**

* кладёт исходник в `runs/mytext1/01_source_en.md`

* генерит `03_translation_raw_ru.md`, `04_literary_ru.md`, `05_qa_report.md`

Опции:

`tl run --in input.md --run-id mytext1 \`  
  `--engine claude-code \`  
  `--chunk 1200 \`  
  `--glossary config/glossary.yml \`  
  `--style config/style_guide_ru.md`

---

### **`tl human`**

Открывает/подготавливает файл для правок и фиксирует финал.

`tl human --run-id mytext1 --editor code`

Ожидаемый процесс:

* ты редактируешь `runs/mytext1/04_literary_ru.md`

* сохраняешь как `runs/mytext1/06_human_final_ru.md`

  * либо CLI сам копирует “до” в “финал” и открывает финал для редактирования

---

### **`tl diff`**

Собрать diff правок (AI draft vs human final).

`tl diff --run-id mytext1`

Результат:

* `runs/mytext1/diff_human_edits.patch`

---

### **`tl learn`**

Извлечь правила из diff и обновить стиль/словарь/запреты.

`tl learn --run-id mytext1`

Результат:

* обновляет `config/style_guide_ru.md`

* обновляет `config/glossary.yml` (если были стабильные термин-замены)

* обновляет `config/forbidden_words_ru.yml`

* пишет `runs/mytext1/style_updates.md`

---

### **`tl full`**

Полный цикл одной командой (остановится на human шаге).

`tl full --in input/source_en.md --run-id mytext1 --engine codex`

Пайплайн:

1. `run`

2. `human` (ждёт пока ты отредактируешь финал)

3. `diff`

4. `learn`

---

### **`tl batch`**

Пакетная обработка папки.

`tl batch --dir input/ --engine claude-code`

Создаёт отдельный `runs/<file_basename>_<date>/` на файл.

---

## **Как “подключается” Codex / Claude Code (важная концепция)**

CLI формирует **единый “task bundle”** для code agent:

* source text

* style guide

* glossary / forbidden words / do-not-translate

* prompts для каждого агента

* требуемые выходные файлы (пути \+ формат)

И говорит движку:

“Сгенерируй эти артефакты и запиши по этим путям”.

Так код-агент становится **исполнителем пайплайна**, а репозиторий — **истиной** (single source of truth).

