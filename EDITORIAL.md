# Cultured Machine — Editorial style guide

This file is read by the automated weekly digest task before writing new issues.

## Voice and language

- Plain English, but medically precise. Define jargon inline on first use; do not avoid technical terms, just explain them.
- **No slang or idiom.** Phrases like "eat real signals for breakfast", "level up", "game-changer" are not permitted. Write in clear, complete sentences.
- Tone: smart, plain, slightly skeptical. Never hype a result; never dismiss one unfairly. State what was shown and what was not.
- Active voice preferred. Keep sentences short enough to parse on first read.

## Glossary links

- When a technical term appears that has an entry in `/wiki/index.html`, link it using an anchor: `<a href="../wiki/index.html#term-id">term</a>`.
- Link the term on first use in each issue; do not repeat the link in the same article.
- Current glossary entries and their anchor IDs:
  - `receptor-antagonist` — Receptor antagonist
  - `kappa-opioid-receptor` — Kappa opioid receptor
  - `madrs` — MADRS scale
  - `mdd` — Major depressive disorder
  - `mrna` — mRNA
  - `phase-trials` — Phase 1 / 2 / 3 trials
  - `placebo-response` — Placebo response

## Terms suggested for future glossary additions

These appear in existing issues and are candidates for the next glossary update. Add them to `/wiki/index.html` when covering a story that uses them:

- **transcription factor** (NewLimit story — cellular reprogramming)
- **epigenetic / epigenome** (NewLimit / longevity stories)
- **cellular reprogramming** (longevity / NewLimit)
- **GLP-1 receptor agonist** (obesity drug / Medicare stories)
- **foundation model** (as used in biology — Verge Labs, Biohub)
- **protein language model** (ESM / Biohub stories)
- **transcriptome** (Verge Labs vBx-1.0)
- **de novo protein design** (Biohub / protein binder stories)
- **RAS mutation / RAS oncogene** (daraxonrasib / pancreatic cancer story)
- **Phase 1b** (Verge Labs ALS trial)
- **neoantigen** (personalised mRNA cancer vaccine)
- **checkpoint inhibitor / PD-1** (pembrolizumab / Keytruda context)

## Archive page (`news/index.html`)

- Add new issues at the top (newest first).
- The "Latest issue" tag uses `class="topic-tag tag-discovery"` (orange).
- Older entries use a neutral gray inline style.
- Do not list future-dated issues above today's date. If a file exists with a future date, place it at the bottom of the list and label it clearly (e.g. "Early June 2026 · Stories from June 4–10").

## Nav links

- All pages must include an "Archive" link pointing to `news/index.html` (or `../news/index.html` from subdirectories).
- The "News" link always points to the most recent issue file.

## Fact-checking

- Every statistic must be traceable to a source URL that was fetched or confirmed in the current session.
- Never invent a URL. If a source cannot be verified, leave the fact out.
- Primary sources (company press releases, journal articles, regulatory filings) are preferred over secondary coverage.
