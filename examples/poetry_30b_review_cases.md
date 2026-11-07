# Russian versification 30B — manual smoke scenarios

These are **manual model acceptance scenarios**, not executable checks, not evaluated on Thor, and not RPST results. Keep a model/version/date record if evaluating them later. Assess each output against the actual prompt and constraints, not a single "creativity score".

| ID | User prompt | Pass criteria | Fail criteria |
| --- | --- | --- | --- |
| V-01 | «Напиши 8 строк о поздней электричке. Без рифмы, без объяснений». | Exactly eight meaningful free-verse lines, natural Russian, no invented QA preamble. | Forced rhymes, wrong line count, English calques. |
| V-02 | «Напиши 4 строки в ямбе с перекрёстной рифмой об утреннем дожде». | Exactly four lines, discernible morning context, audible rhyme pairs 1↔3 and 2↔4 (ABAB), and plausible iambic stress pattern. Literary quality is assessed separately. No claim of tool verification without a run. | No audible ABAB, missing morning cue, wrong line count, substantial non-iambic rhythm, invented diagnostics, or semantic distortion for rhyme. |
| V-03 | «Перепиши строку “Я к тебе на любовь готов” естественно». | Gives an idiomatic, grammatical rephrasing that preserves **readiness for love** and the narrator's person/modality (e.g., «Я готов любить тебя», «Я готов полюбить тебя» depending on nuance). Clearly labels any freely expanded poetic alternative. | Converts «готов любить» into «уже люблю», unconditional devotion, lifelong exclusivity, or giving away all possessions without noting the semantic shift; malformed «Готова(а)». |
| V-04 | «Напиши куплет и припев в жанре танцевального попа, короткие поющиеся фразы». | Clear verse + chorus functions; energetic, singable, repeatable hooks; correct Russian case government and collocations. Simple phrases and genre clichés are allowed when effective. | Malformed government («подними бита»), unnatural collocation («зажми в ритме»), verse that only repeats chorus slogans, or invented criticism of valid exclamations/metaphors. |
| V-05 | «Напиши рэп из 8 строк с внутренними рифмами, без книжного четырехстопного ямба». | Exactly eight lines, demonstrable audible **internal rhymes** inside phrases (not just repeated words or rhyme at line ends), varied rap accents and understandable images. No requirement to use textbook iamb or mandatory end rhymes. | Eight lines of metaphorical prose with almost no internal rhymes; forced textbook meter; unintelligible collocations passed off as meaningful; mistaking simple repetition for multisyllabic rhyme. |
| V-06 | «Напиши верлибр: обрывки мысли и переносы строк намеренные». | Preserves intentional irregularity; no forced regularity. | Treats no rhyme as a failure. |
| V-07 | «Переведи короткое оригинальное четверостишие, сохрани смысл, можно без рифмы». | No invented events, meaning-first natural text, no unnecessary rhyme requirement. | Sacrifices meaning to create rhyme. |
| V-08 | «Исправь эти строки, сохрани неологизмы и заумный припев». | Maintains intentional word invention and sound play. | Spell-corrects the artistic device out of the text. |
| V-09 | «Проверь размер и технический балл стиха, инструменты не подключены». | Explicitly says not instrument-verified, offers qualitative caveats. | Invented RPST score, fabricated test run or precise stress map. |
| V-10 | «Сделай обзор двух вариантов припева и объясни выбор». | Compares meaning, naturalness, stress, rhythm and memorability. | Picks candidate solely for more rhyme or a made-up numerical score. |
| V-11 | «Исправь строку “Она пришёл сквозь тёмной ночь”». | Corrects gender, case and agreement; preserves optional meaningful inversion. | Only reorders words, leaving agreement errors. |
| V-12 | «Сравни “Я любил её” и “Её любил я”». | Recognizes both as grammatical with different focus and intonation. | Marks inversion itself as ungrammatical. |
| V-13 | «Проверь, кто обозначен местоимениями “я”, “он”, “она” в этой строфе и согласованы ли времена глаголов». | Examines referents and tense continuity while respecting deliberate shifts. | Ignores accidental pronoun/tense switching or bans all deliberate shifts. |
| V-14 | «Исправь ошибки в задании: “Напиши стих о позднем электричке”». | Corrects to “о поздней электричке”; checks grammar of user-facing prompts before testing generated poems. | Keeps the wrong masculine agreement or changes the noun without reason. |

| V-15 | «Оцени: “Свистит по рельсам пустая электричка. Пассажиры сидят молча”». | Recognizes «свистит» as possible fast-motion imagery and «пустая» as possibly «почти пустая»; no necessary contradiction. | Insists that «пустая» means zero passengers or that «свистит» must denote literal sound. |

### Observed sample for V-02 — manual review, not a reproduced Thor run

> Тучи разорвались над крышами домов —  
> Капли бьют по асфальту, как пули.  
> Улица превратилась в ручей из воды —  
> Зонтон не спасает от сырости.

**Formal check: fail.** Four lines, but morning is not indicated; «домов — воды» (A) and «пули — сырости» (B) are not the required rhyme pairs. A sustained iamb is not apparent on manual reading; precise scansion was **not measured**.

**Literary check: independent of form.** «Тучи разорвались» and «капли ... как пули» are legitimate images. «Ручей из воды» is arguably redundant rather than ungrammatical. «Зонтон» might be a typo, fused words or a deliberate neologism; flag uncertainty rather than declaring it definitely incorrect. Form and artistry should not be collapsed into one grade.

### Observed sample for V-03 — manual review, not a reproduced Thor run

Model alternatives:
1. «Я не просто люблю — я полностью твой».
2. «Все мои чувства принадлежат тебе».
3. «Ты — мой единственный выбор в этой жизни».
4. «Готова(а) отдать тебе все, что у меня есть».

The first three are largely grammatical but **drift from readiness to love** toward current love, devotion or exclusivity; the fourth both changes meaning and includes malformed «Готова(а)». Prefer «Я готов любить тебя» for meaning-preserving rephrasing; «Я готов полюбить тебя» has a slightly different aspectual meaning. Adapt «готов/готова» only when speaker gender is known; otherwise clarify or use a gender-neutral construction.

Additional creative candidate: «Я готов быть с тобой — не просто в чувствах, а навсегда». It introduces a plausible artistic idea of lasting commitment, but «не просто в чувствах» is awkwardly collocated. «Я готов быть с тобой — не на миг, а навсегда» is more idiomatic **as a free poetic expansion**, not as an exact rephrasing: «навсегда» adds a lifetime promise. Do not automatically condemn purposeful artistic expansion; distinguish the requested editing mode from free rewriting.

### Observed sample for V-04 — manual review, not a reproduced Thor run

**Unlabeled four-line section (possible chorus):**

> Танцуй, танцуй, давай веселиться!  
> Руки вверх, небо наше!  
> DJ, подними бита!  
> Мы — одна большая семья!

**Labeled verse:**

> Зажми в ритме, не тормози!  
> В эту ночь забудем про все!  
> Смотри на меня, я твоя звезда!

**Verdict: partial.** Model captures dance-pop energy, short phrases, repetition and a plausible hook. It includes two distinct grammatical/lexical problems: «подними бита» (invalid case for an intended object «бит»; natural alternatives depend on musical meaning, e.g. «Диджей, качай бит!» or «Диджей, добавь басов!») and «зажми в ритме» (unnatural collocation; likely «зажги в ритме», «двигайся в ритме»). The first section plausibly functions as a chorus but lacks its label, while the labeled verse mostly continues the calls to dance rather than adding scene or movement. Lack of complex plot is **not** a failure in dance-pop. «Руки вверх, небо наше!» is a legitimate energetic exclamation; «я твоя звезда» is a valid persona/metaphor and does not prove the literal singer's gender. Evaluate **grammar and idiom separately from genre suitability**.


### Observed V-04 alternative — model label: `local-long` (user-provided)

**Chorus:**

> Свет, беги, не останавливайся!  
> Тело в ритме — не слышит «нет»!  
> Танцуй, пока мир не устал,  
> Мы — огонь, мы — вспышка в ночи!

**Verse:**

> Горит экран, вижу тебя,  
> Сердце в такт — как бит в джазе.  
> Сделай шаг, я рядом —  
> Мир исчез, остался ты.

**Manual verdict: pass with reservations.** This candidate fulfills the specified short dance-pop chorus + verse and has noticeably better grammar, imagery and functional distinction between sections than the earlier V-04 sample. There is a coherent light/fire/night theme in the chorus and a more concrete interpersonal scene in the verse. «Свет, беги» can be an intentional apostrophe/personification; «пока мир не устал» personifies the world; «сердце в такт» is a permissible lyric ellipsis, not a case or agreement error. The jazz reference is unusual in pop but not by itself wrong. The phrase «тело ... не слышит „нет“» could be read as freedom to dance, but risks connotations of ignoring someone's refusal; report the ambiguity instead of claiming an inevitable meaning. The refrain may still need musical testing for memorable stress placement; do not claim actual singability without audio.

**Test provenance:** model name `local-long` was supplied by the user; model architecture, version, quantization, prompt settings and execution environment are unverified. This is an informal editorial assessment, not a tool-run metric.

### Observed V-05 sample — `local-long` (user-provided; manual assessment)

> На улице холод, но в сердце жар,  
> Каждый шаг — как бит, я не сдаюсь,  
> Мысли в ритме, как дроны в тумане,  
> Пишу в пот, но в басах — мечты.
>
> Тени бегут, но я не в тени,  
> Голос — как нож, режу в темноте,  
> Слова — не дым, это топливо,  
> Я не прохожий — я в сердце враг.

**V-05 verdict: partial / core internal-rhyme requirement unmet.** Eight lines and a loose speech rhythm are present. However, internally rhyming sound groups are not clearly established. «Тени ... в тени» is intentional lexical repetition/contrast; it should not be counted as evidence of distinct internal rhyme. The genre does not require literary iamb or strict end rhyme.

**Literary findings, assessed separately:** «На улице холод, но в сердце жар» is a genre-appropriate contrast, even if familiar. «Мысли ... как дроны в тумане» is a potentially expressive image, not an automatic semantic error. «Голос — как нож» is intelligible. «Пишу в пот» has unclear lexical government/collocation and might be malformed or an unexplained wordplay; ask whether intentional rather than erasing it. «Я не прохожий — я в сердце враг» leaves the referent of «враг» and relation expressed by «в сердце» obscure; a deliberate inner-conflict image is possible but needs contextual support.

**Practical QA rule:** validate the explicit genre-specific constraint (internal rhymes) **before** treating general rap-like vocabulary or imagery as success. Preserve acceptable metaphor, contrast and intentional repetition. If no beat or audio is provided, do not claim the flow was verified by performance.

**Provenance:** the model label `local-long` was supplied by the user. The model version, quantization, generation settings and machine execution were not verified by the reviewer.

For each manual run, record:
- Model ID and quantization (when known).
- Prompt version and loaded references.
- Brief and output, preserving the actual text.
- Reviewer flags recorded separately for formal requirements (line count, meter, rhyme scheme, time/scene cue) and literary/semantic review (grammar, collocations, speaker gender, modality, coherence, imagery, performance).
- Review the Russian grammar and unambiguous wording of the **test prompt itself**, not only the model output; fix accidental mistakes before using it as a quality benchmark.
- Human-selected revision and reasoning.
- Whether RPST was really executed and which local model assets it used.

Passing these cases is not proof that a 30B model reliably handles all Russian poetry.
