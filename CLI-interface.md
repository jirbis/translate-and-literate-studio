## **CLI for the code agent (Codex / Claude Code)**

Idea: **the CLI does not “translate by itself.”** Instead, it:

* prepares the `runs/<run_id>/` folder
* gathers context (config + prompts)
* calls the code-agent / LLM adapter
* writes artifacts to disk
* supports the human-in-the-loop step and diff-based learning

Below is a **minimal, convenient command spec.**

---

### **`tl init`**

Create baseline configs and folders.

`tl init`

Creates:

* `config/*.yml`, `config/style_guide_ru.md`, `config/prompts/*.md`
* `runs/`, `docs/`, `examples/`

---

### **`tl run`**

Run the full pipeline: translate → literate → QA.

`tl run --in input/source_en.md --run-id mytext1`

**What happens:**

* saves the source to `runs/mytext1/01_source_en.md`
* generates `03_translation_raw_ru.md`, `04_literary_ru.md`, `05_qa_report.md`

Options:

`tl run --in input.md --run-id mytext1 \`  
  `--engine claude-code \`  
  `--chunk 1200 \`  
  `--glossary config/glossary.yml \`  
  `--style config/style_guide_ru.md`

---

### **`tl human`**

Open/prepare the file for edits and lock the final.

`tl human --run-id mytext1 --editor code`

Expected flow:

* you edit `runs/mytext1/04_literary_ru.md`
* you save it as `runs/mytext1/06_human_final_ru.md`
  * or the CLI copies the draft to the final file and opens it for editing

---

### **`tl diff`**

Collect a diff of edits (AI draft vs. human final).

`tl diff --run-id mytext1`

Result:

* `runs/mytext1/diff_human_edits.patch`

---

### **`tl learn`**

Extract rules from the diff and update style/glossary/forbidden lists.

`tl learn --run-id mytext1`

Result:

* updates `config/style_guide_ru.md`
* updates `config/glossary.yml` (when stable term replacements are detected)
* updates `config/forbidden_words_ru.yml`
* writes `runs/mytext1/style_updates.md`

---

### **`tl full`**

Run the full cycle with one command (stops for the human step).

`tl full --in input/source_en.md --run-id mytext1 --engine codex`

Pipeline:

1. `run`
2. `human` (waits while you edit the final)
3. `diff`
4. `learn`

---

### **`tl batch`**

Batch process a folder.

`tl batch --dir input/ --engine claude-code`

Creates a separate `runs/<file_basename>_<date>/` per file.

---

## **How Codex / Claude Code are “plugged in” (key concept)**

The CLI forms a **single “task bundle”** for the code agent:

* source text
* style guide
* glossary / forbidden words / do-not-translate
* prompts for each agent
* required output files (paths + format)

Then it tells the engine:

“Generate these artifacts and write them to these paths.”

That makes the code agent the **executor of the pipeline**, while the repository remains the **single source of truth.**
