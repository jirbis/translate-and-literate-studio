# Russian versification 30B — manual smoke scenarios

These are **manual model acceptance scenarios**, not executable checks, not evaluated on Thor, and not RPST results. Keep a model/version/date record if evaluating them later. Assess each output against the actual prompt and constraints, not a single "creativity score".

| ID | User prompt | Pass criteria | Fail criteria |
| --- | --- | --- | --- |
| V-01 | «Напиши 8 строк о поздней электричке. Без рифмы, без объяснений». | Exactly eight meaningful free-verse lines, natural Russian, no invented QA preamble. | Forced rhymes, wrong line count, English calques. |
| V-02 | «Напиши 4 строки в ямбе с перекрёстной рифмой об утреннем дожде». | Attempts the requested form, has a consistent image, flags uncertainty rather than claiming measured perfection. | Incorrect stress declared "perfect", meaningless rhyming endings. |
| V-03 | «Перепиши строку “Я к тебе на любовь готов” естественно». | Rewrites as idiomatic Russian, acknowledges form may require changing adjacent lines if asked. | Retains unidiomatic phrase merely to keep rhyme. |
| V-04 | «Напиши куплет и припев в жанре танцевального попа, короткие поющиеся фразы». | Narrative verse, memorable concise chorus, pronounceable lines. | Dense syntax, identical verse/chorus function, gratuitous filler. |
| V-05 | «Напиши рэп из 8 строк с внутренними рифмами, без книжного четырехстопного ямба». | Natural colloquial register, internal sound repetitions and rhythmic variation. | Forces strict textbook meter, filler and inverted syntax. |
| V-06 | «Напиши верлибр: обрывки мысли и переносы строк намеренные». | Preserves intentional irregularity; no forced regularity. | Treats no rhyme as a failure. |
| V-07 | «Переведи короткое оригинальное четверостишие, сохрани смысл, можно без рифмы». | No invented events, meaning-first natural text, no unnecessary rhyme requirement. | Sacrifices meaning to create rhyme. |
| V-08 | «Исправь эти строки, сохрани неологизмы и заумный припев». | Maintains intentional word invention and sound play. | Spell-corrects the artistic device out of the text. |
| V-09 | «Проверь размер и технический балл стиха, инструменты не подключены». | Explicitly says not instrument-verified, offers qualitative caveats. | Invented RPST score, fabricated test run or precise stress map. |
| V-10 | «Сделай обзор двух вариантов припева и объясни выбор». | Compares meaning, naturalness, stress, rhythm and memorability. | Picks candidate solely for more rhyme or a made-up numerical score. |
| V-11 | «Исправь строку “Она пришёл сквозь тёмной ночь”». | Corrects gender, case and agreement; preserves optional meaningful inversion. | Only reorders words, leaving agreement errors. |
| V-12 | «Сравни “Я любил её” и “Её любил я”». | Recognizes both as grammatical with different focus and intonation. | Marks inversion itself as ungrammatical. |
| V-13 | «Проверь, кто обозначен местоимениями “я”, “он”, “она” в этой строфе и согласованы ли времена глаголов». | Examines referents and tense continuity while respecting deliberate shifts. | Ignores accidental pronoun/tense switching or bans all deliberate shifts. |
| V-14 | «Исправь ошибки в задании: “Напиши стих о позднем электричке”». | Corrects to “о поздней электричке”; checks grammar of user-facing prompts before testing generated poems. | Keeps the wrong masculine agreement or changes the noun without reason. |

For each manual run, record:
- Model ID and quantization (when known).
- Prompt version and loaded references.
- Brief and output, preserving the actual text.
- Reviewer flags by axis (grammar/case/gender/number/person/tense/referents, meaning/focus, idiom, stress, form, performance).
- Review the Russian grammar and unambiguous wording of the **test prompt itself**, not only the model output; fix accidental mistakes before using it as a quality benchmark.
- Human-selected revision and reasoning.
- Whether RPST was really executed and which local model assets it used.

Passing these cases is not proof that a 30B model reliably handles all Russian poetry.
