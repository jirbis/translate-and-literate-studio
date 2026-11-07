# Russian translation quality: editorial regression cases

Use these as manual review and LLM QA examples, not as executable unit tests. Check the *reason* for each correction rather than doing blind search-and-replace.

| Case | Source or context | Rejected Russian | Preferred Russian | What to verify |
| --- | --- | --- | --- | --- |
| Recruitment summary, based on an explicit next-round invitation | The candidate has been invited to the next stage after the first interview. | «Первое интервью прошло достаточно успешно, чтобы команда захотела проверить твои практические навыки». | «Первое собеседование прошло успешно. Теперь предстоят техническое задание и встреча с командой». | Avoid an invented motive and English enough-to construction. This is a **summary**, not a line-by-line translation. |
| Needless uncertainty in a firm summary | The candidate has been invited to the next stage. | «Первое собеседование, похоже, прошло удачно». | «Первое собеседование прошло успешно». | No gratuitous «похоже». |
| Meaningful uncertainty | “It seems the interview went well.” | «Собеседование точно прошло успешно». | «Кажется, собеседование прошло хорошо». | Preserve the source hedge. |
| Process language | “We want to move forward with the next step in the process.” | «Мы хотим двигаться вперёд со следующим шагом процесса». | «Мы хотим пригласить вас на следующий этап отбора». | Prefer contextual idiom over a literal metaphor. |
| Scheduling | “I look forward to learning more about your availability for a one-hour interview.” | «Жду возможности узнать больше о вашей доступности для одночасового интервью». | «Буду рад узнать, когда вам удобно провести часовое собеседование». | Translate communicative intent; retain duration. |
| Direct future | “I will send details on Monday.” | «Вероятно, я вышлю подробности в понедельник». | «Я пришлю подробности в понедельник». | No invented probability. |
| Register | “Please reach out if you have questions.” | «Пожалуйста, осуществите контакт, если у вас будут вопросы». | «Если возникнут вопросы, напишите мне». | Natural polite business Russian. |
| Nominalization | “We need to make a decision.” | «Нам необходимо осуществить принятие решения». | «Нам нужно принять решение». | Prefer verbs; keep urgency. |
| Ambiguity | “We might have to reschedule.” | «Мы перенесём встречу». | «Возможно, нам придётся перенести встречу». | Preserve uncertainty and necessity. |
| Loanword vs calque | Technical discussion about a backend service. | «Бэкенд — англицизм, всегда запрещён». | «Бэкенд» допустим, если это привычный термин аудитории. | No global ban on borrowed words. |

Review protocol: for each new draft, compare proposed translation to both its source and the relevant preferred examples. Record actual regressions in a QA report. Never automatically replace phrases in unrelated contexts.
