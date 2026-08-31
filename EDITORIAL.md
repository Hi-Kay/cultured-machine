# Cultured Machine — Editorial style guide

This file is read by the automated weekly digest task before writing new issues.

## Story selection and the AI connection

This is a **Biotech + AI** site. The AI angle is the reason a story belongs here.

- **Every story must make its AI/computational connection explicit, in plain words, inside the story.** Don't assume the reader sees it. Name where the AI actually does the work — e.g. "an algorithm picks which mutations to target," "a model screens millions of combinations," "trained on 6,500 patients' data." If the AI role is indirect, say so honestly.
- If a story has **no genuine AI or computational angle**, do not include it — even if it is big biotech news. (A pure drug-coverage or policy story, for example, does not belong.) One borderline exception: a landmark result that the AI-design field is explicitly chasing may be included *if* the why-it-matters states plainly that it was not AI-discovered and explains the connection.
- 5 stories is plenty; curation is the value. Better five stories that clearly fit than seven that dilute the focus.

## Voice and language

- Plain English, but medically precise. Define jargon inline on first use; do not avoid technical terms, just explain them.
- **Prefer the name a general reader would recognise over the technical one.** Use the brand a lay reader knows (e.g. "Keytruda") and skip the generic chemical name (e.g. "pembrolizumab") unless it is genuinely needed. Do not stack synonyms or list a drug's every alias — pick one name and move on. Internal code names (e.g. "mRNA-4157", "intismeran autogene") usually add clutter, not clarity; leave them out unless the story is about the name itself.
- Lead with what the thing *is* and why it matters to a person before the trial details. Borrow the clearest framing from the source (analogies, simple contrasts) rather than restating dense clinical language.
- **No slang or idiom.** Phrases like "eat real signals for breakfast", "level up", "game-changer" are not permitted. Avoid over-cute lines (e.g. "the $435 million question") — state the real open question plainly.
- Tone: smart, plain, slightly skeptical. Never hype a result; never dismiss one unfairly. State what was shown and what was not.
- Active voice preferred. Keep sentences short enough to parse on first read.

## Story structure (apply to every story)

Write each story in this order so the reader can stop early and still have the point:

1. **The news in one sentence.** Open the summary with a single plain sentence a non-expert could repeat at dinner — what happened and who did it. Do not open with background or trial mechanics.
2. **Context** — the one or two things the reader needs to understand why this is not trivial.
3. **The AI mechanism** — name explicitly where the computation does the work (see "Story selection" above). This is the reason the story is here; never let it be implied.
4. **The honest caveat** goes in the "Why it matters" block: what was *not* shown, the stage it's really at, and what would have to be true for it to matter.

Keep summaries to 3–5 sentences. If a summary runs past six, it is doing too much — cut, don't cram.

## Weekly TL;DR

Start each issue with a short "The week in three lines" block above the stories: three one-line bullets, each naming the single most important story in a topic, so a skimmer gets value in ten seconds. Keep each bullet under ~15 words and link it to the relevant story anchor on the page.

## Glossary links

- When a technical term appears that has an entry in `/wiki/index.html`, link it using an anchor: `<a href="../wiki/index.html#term-id">term</a>`.
- Link the term on first use in each issue; do not repeat the link in the same article.
- Current glossary entries and their anchor IDs:
  - `admet` — ADMET
  - `ai-agent` — AI agent
  - `binding-affinity` — Binding affinity
  - `cdr` — CDR (complementarity-determining region)
  - `checkpoint-inhibitor` — Checkpoint inhibitor
  - `de-novo-protein-design` — De novo protein design
  - `dna-methylation` — DNA methylation
  - `foundation-model` — Foundation model
  - `genome-language-model` — Genome language model
  - `glp-1` — GLP-1
  - `ind` — IND application
  - `kappa-opioid-receptor` — Kappa opioid receptor
  - `madrs` — MADRS scale
  - `mdd` — Major depressive disorder
  - `mrna` — mRNA
  - `neoantigen` — Neoantigen
  - `phase-trials` — Phase 1 / 2 / 3 trials
  - `placebo-response` — Placebo response
  - `protein-language-model` — Protein language model
  - `receptor-antagonist` — Receptor antagonist
  - `transcription-factor` — Transcription factor
  - `transcriptome` — Transcriptome
  - `world-model` — World model

## Explainer cross-links

The site has standalone explainers in `/explainers/`. When a story leans on a concept an explainer already covers, link the phrase to that explainer (in addition to any glossary link) — it deepens the digest and drives readers to the explainers.

- Protein folding / structure prediction / AlphaFold → `../explainers/alphafold.html`
- Protein language models / ESM / "learns what a natural sequence looks like" / embeddings → `../explainers/protein-language-models.html`

## Terms suggested for future glossary additions

These appear in existing issues and are candidates for the next glossary update. Add them to `/wiki/index.html` when covering a story that uses them:

- **epigenetic / epigenome** (NewLimit / longevity stories)
- **cellular reprogramming** (longevity / NewLimit)
- **RAS mutation / RAS oncogene** (daraxonrasib / pancreatic cancer story)
- **Phase 1b** (Verge Labs ALS trial)

## Archive page (`news/index.html`)

- Add new issues at the top (newest first).
- The "Latest issue" tag uses `class="topic-tag tag-discovery"` (orange).
- Older entries use a neutral gray inline style.
- Do not list future-dated issues above today's date. If a file exists with a future date, place it at the bottom of the list and label it clearly (e.g. "Early June 2026 · Stories from June 4–10").

## Nav links

- All pages must include an "Archive" link pointing to `news/index.html` (or `../news/index.html` from subdirectories).
- The "News" link always points to the most recent issue file.

## Share button

- Every news issue ends with a "Share on X" button, placed right after the "How this digest is made" callout and before `</main>`. Copy the markup from the most recent issue (a centered `<a class="btn">` with the X logo SVG) and update the `twitter.com/intent/tweet` link's `text` and `url` query params for the new issue's title and URL — base URL is `https://hi-kay.github.io/cultured-machine/`.
- Keep the tweet `text` plain ASCII where possible (e.g. `This week in Biotech + AI (Month Day, Year) — Cultured Machine`) and URL-encode both params.

## Fact-checking

- Every statistic must be traceable to a source URL that was fetched or confirmed in the current session.
- Never invent a URL. If a source cannot be verified, leave the fact out.
- Primary sources (company press releases, journal articles, regulatory filings) are preferred over secondary coverage.
