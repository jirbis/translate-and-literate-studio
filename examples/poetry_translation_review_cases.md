# Poetry translation: reviewer acceptance scenarios

These are **manual review cases**, not automated passing tests or measured tool outputs.

| Scenario | Correct behavior | Incorrect behavior |
| --- | --- | --- |
| Prose business email | Skip poetry analysis completely | Scan every Russian output |
| Meaning-first poetic translation | Preserve images and voice; use free rhythm if warranted | Produce meaningless rhyme to maximize a score |
| Requested rhyme scheme | Offer rhyme-aware alternatives and report semantic costs | Claim formal compliance without a real check |
| Intentionally irregular modern poem | Preserve free verse, deliberate breaks and ambiguity | Force every line into an iamb |
| Song lyrics at a stated tempo | Check phrasing and natural word stresses; flag singability for human listening | Treat a meter score as proof of singability |
| Rap text | Prefer `align_rap` if installed and relevant, retain wordplay | Feed rap as ordinary quatrain and overinterpret score |
| Single line with ambiguous stress | Flag uncertainty; ask the editor to verify by ear/context | Present forced stress as definite |
| Rhymes across stanza boundaries | Inspect manually; acknowledge algorithmic segmentation limits | Call missing algorithmic rhymes definite errors |
| Models unavailable | Report `not measured`, give optional manual notes | Invent score, meter, or successful run |
| RIFMA contains intentional errors or unlicensed verses | Use rights-cleared cases and keep artifacts local | Treat every item as a perfect poem or replicate large third-party passages |
