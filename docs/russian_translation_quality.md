# Natural Russian translation: editorial quality standard

Status: normative guidance for English-to-Russian translation and editorial QA. Applies to all text genres unless a specific authorial style or protected terminology requires otherwise.

## Principle

Translate the *meaning and communicative intent*, not the surface structure of the English sentence. The result should read as if an educated native speaker originally wrote it in Russian. Preserve facts, names, chronology, emphasis, register, ambiguity, and the source's degree of certainty. Naturalness must never be used as a pretext to change meaning.

Two separate questions are mandatory:
1. **Fidelity:** Is everything asserted (and not asserted) in the source preserved?
2. **Native Russian:** Would a Russian-speaking author choose this construction without seeing the English original?

A passage is ready only when both answers are yes.

## Typical failure modes

### 1. Syntactic and semantic calques

Do not recreate English word order, noun chains, subject repetition, infinitive-of-purpose constructions, passive voice, or connector-heavy sentences merely because the source uses them. Rebuild the sentence around idiomatic Russian verbs and relationships.

Bad: «Первое интервью прошло достаточно успешно, чтобы команда захотела проверить твои практические навыки».
Better in the actual recruitment context: «Первое собеседование прошло успешно. Теперь предстоят техническое задание и встреча с командой».

The second version describes the established outcome without imagining the team's private motivation. For strict translation, do not add the inference that the interview was successful unless it is stated or justified by the task; a translation and an explanatory summary have different contracts.

### 2. Unwarranted hedging (or unwarranted certainty)

Never insert «похоже», «возможно», «вероятно», «судя по всему», «как представляется», «по-видимому» or similar fillers as a default politeness or safety device. If the source states something directly, translate it directly. If the source explicitly expresses uncertainty, preserve it accurately. If an editorial summary draws an inference, calibrate it to the evidence rather than automatically hedging.

Bad when no doubt is expressed: «Первое собеседование, похоже, прошло удачно».
Good when the next-round invitation is the stated basis for this summary: «Первое собеседование прошло успешно».
If the source says “It seems the interview went well,” a Russian hedge is appropriate: «Кажется, собеседование прошло хорошо».

Do **not** add certainty to an actually uncertain statement; do **not** erase meaningful ambiguity.

### 3. Bureaucratic and abstract wording

Prefer simple, specific verbs where they fit the register.

- «осуществить принятие решения» → «решить» / «принять решение»
- «произвести оценку возможности» → «оценить возможность»
- «осуществлять коммуникацию» → «общаться» / «поддерживать связь»
- «на текущем этапе процесса» → «сейчас» / «на этом этапе»

Do not flatten intentionally formal legal, scientific, or technical language.

### 4. Imported business English

Avoid direct renderings of expressions such as “move forward”, “next steps”, “reach out”, “touch base”, “be aligned”, “have visibility”, “looking forward to learning more about”, or “make sense” when they produce Russian that sounds assembled from English.

- “We want to move forward with the next step in the process.” → «Мы хотим пригласить вас на следующий этап отбора», not «Мы хотим двигаться вперёд со следующим шагом процесса».
- “I look forward to learning more about your availability.” → «Буду рад узнать, когда вам удобно провести собеседование», not «Жду возможности узнать больше о вашей доступности».
- “I'll reach out on Monday.” → «Напишу вам в понедельник», not «Свяжусь с вами посредством обращения»; in a more formal context, «Свяжусь с вами в понедельник» is also natural.
- “Let's touch base next week.” → «Давайте созвонимся на следующей неделе», if a call is intended; otherwise «Давайте обсудим это на следующей неделе».

Exact lexical substitutions are **not** universal. Translate the intent in context.

### 5. Mechanical borrowings are not the same as ordinary loanwords

Do not ban established terms merely because they originate in English. «Интервью», «проект», «команда», «сервер», «бэкенд» can be natural in context. Prefer «собеседование» to «интервью» in ordinary recruitment prose when it reads better, but keep terminology consistent when needed.

A calque is often a *construction*, not a specific word. A blacklist cannot substitute for an editorial judgment.

### 6. Unnecessary explanation, speculation, and emotional padding

Do not add the speaker's hidden motives, praise, reassurance, probabilities, conditions, or extra conclusions absent from the original. Do not turn direct statements into wordy meta-commentary. Retain explicit reasons and qualifications that actually occur in the source.

### 7. Overediting authorial voice

Preserve intentional repetition, irony, fragments, rhetorical questions, uncertainty, unusual imagery, and tempo when they carry meaning. Literary editing may restructure grammar but must not normalize a distinctive voice out of existence.

## Editing method

1. Identify who is speaking, what is known, what is inferred, and the expected register.
2. Translate the content without adding interpretations; use glossary and protected terms.
3. Re-read the Russian *without looking at the English*. Mark anything a native speaker would not say.
4. Rebuild unnatural phrases from the underlying meaning. Splitting or joining sentences is allowed when emphasis and information survive.
5. Compare the revised text to the source for meaning, modality (certainty), subjects, dates, qualifications, and tone.
6. Read the Russian aloud mentally: if it sounds like a literal translation, rewrite again.
7. Give the final clean text only; send unresolved issues to the QA report, not the final prose.

## QA review checklist

For each passage, verify:
- **Meaning:** no omitted, added, or distorted facts or causal claims.
- **Epistemic precision:** no added «похоже/вероятно» when the source is direct; no stronger certainty than the source permits.
- **Idiomatic syntax:** no English sentence skeleton, word order, unnecessary passives, nominalization chains, or artificial links.
- **Lexical choice:** no “business English in Russian words”; no unnecessary bureaucratic phrasing.
- **Voice:** correct register, rhythm, interpersonal stance, and intended stylistic oddities.
- **Terminology & formatting:** glossary, names, numbers, dates, punctuation, protected vocabulary intact.

Report issues as:
- **BLOCKER:** changed facts, invented motives, lost uncertainty, altered conditions.
- **MAJOR:** awkward calque, repetitive stock phrase, inappropriate register, redundant hedge.
- **MINOR:** punctuation or optional rhythm refinement.

QA is contextual. A phrase is never defective merely for containing «похоже» or a borrowed word; it is defective if the use is unsupported or unnatural *in that passage*.

## Learning from the human editor

Treat accepted human corrections as examples, not unconditional substitution rules. For every material correction, store:
- original source/context;
- draft Russian;
- human-approved Russian;
- why it changed (calque, hedge, tone, semantic drift, register, etc.);
- scope (general rule or context-specific exception).

Never turn a context-bound preference into a blanket ban on a legitimate Russian expression.

See examples/russian_quality_regressions.md for review cases. The examples are editorial fixtures for human/LLM evaluation, not automated tests.
