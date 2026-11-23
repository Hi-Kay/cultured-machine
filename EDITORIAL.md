# Cultured Machine — Editorial style guide

This file is read by the automated weekly digest task before writing new issues.

## Story selection and the AI connection

This is a **Biotech + AI** site. The AI angle is the reason a story belongs here.

- **Every story must make its AI/computational connection explicit, in plain words, inside the story.** Don't assume the reader sees it. Name where the AI actually does the work — e.g. "an algorithm picks which mutations to target," "a model screens millions of combinations," "trained on 6,500 patients' data." If the AI role is indirect, say so honestly.
- If a story has **no genuine AI or computational angle**, do not include it — even if it is big biotech news. (A pure drug-coverage or policy story, for example, does not belong.) One borderline exception: a landmark result that the AI-design field is explicitly chasing may be included *if* the why-it-matters states plainly that it was not AI-discovered and explains the connection.
- 5 stories is plenty; curation is the value. Better five stories that clearly fit than seven that dilute the focus.

## Voice and language

**The test for every sentence: would a smart 15-year-old understand it on the first read, and want to keep reading?** If not, rewrite it. This is the single most important rule on this page.

- **Short sentences.** One idea each. If a sentence has two commas and a semicolon, it is two sentences.
- **Everyday words over formal ones.** "uses" not "utilises", "shows" not "demonstrates", "about" not "approximately", "tiny" not "sub-micron". Never write "leverage", "robust", "novel", "paradigm", "facilitate", "underscores".
- **Concrete over abstract.** Not "improved therapeutic outcomes" but "children needed less radiation". Not "a modality with enhanced tissue specificity" but "a capsule that reaches the liver instead of spreading everywhere".
- **A comparison beats an adjective.** "small enough to slip between cells" tells the reader more than "small". One good comparison per story is plenty; do not stack them.
- Plain English, but medically precise. Define jargon inline on first use; do not avoid technical terms, just explain them.
- **Prefer the name a general reader would recognise over the technical one.** Use the brand a lay reader knows (e.g. "Keytruda") and skip the generic chemical name (e.g. "pembrolizumab") unless it is genuinely needed. Do not stack synonyms or list a drug's every alias — pick one name and move on. Internal code names (e.g. "mRNA-4157", "intismeran autogene") usually add clutter, not clarity; leave them out unless the story is about the name itself.
- Lead with what the thing *is* and why it matters to a person before the trial details. Borrow the clearest framing from the source (analogies, simple contrasts) rather than restating dense clinical language.
- **No slang or idiom.** Phrases like "eat real signals for breakfast", "level up", "game-changer" are not permitted. Avoid over-cute lines (e.g. "the $435 million question") — state the real open question plainly.
- Tone: smart, plain, slightly skeptical, and genuinely interested. Never hype a result; never dismiss one unfairly. State what was shown and what was not. Dry is not the same as plain — the writing should sound like a clever friend explaining something over coffee, not like a regulatory filing.
- Active voice, always. "The model predicts", not "predictions are made by the model".
- Do not open a story with a date, a company's legal name, or a filing type. Open with the thing that happened.

## The page lead

The `<p class="lead">` under the title says what the reader is getting, in one plain sentence — e.g. "Four stories, each in a few plain sentences, with one line on why it matters and one on what the news does not prove." Update the story count each week. Do not reuse the old "The stories worth your attention right now…" line.

## Story structure (apply to every story)

Write each story in this order so the reader can stop early and still have the point:

1. **The news in one sentence.** Open the summary with a single plain sentence a non-expert could repeat at dinner — what happened and who did it. Do not open with background or trial mechanics.
2. **Context** — the one or two things the reader needs to understand why this is not trivial.
3. **The AI mechanism** — name explicitly where the computation does the work (see "Story selection" above). This is the reason the story is here; never let it be implied.
4. **"Why it matters"** — see the next section. One sentence, no caveats.
5. **"The catch"** — the honest caveat, in its own block right after.

Keep summaries to 3–5 sentences. If a summary runs past six, it is doing too much — cut, don't cram.

## "Why it matters" and "The catch" — two separate blocks

These used to be one paragraph and it muddled both jobs. Split them. Every story gets both, in this order:

```html
<div class="why"><strong>Why it matters:</strong> ONE sentence.</div>
<p class="catch"><strong>The catch:</strong> the honest limits.</p>
```

**"Why it matters" is exactly one sentence** — never two, never a list of caveats. It answers: *why should a reader who is not in this field care at all?* Reach for the human stake (a patient, a cost, a thing that was impossible last year), not a restatement of the headline.

- Good: "Radiation to a child's brain costs them later thinking and learning ability, so knowing which children can safely get less of it is worth a great deal."
- Good: "Designing proteins is now the cheap part, and the slow step is checking in a lab whether they actually work."
- Bad (restates the news): "This is a company announcement; the figures are DeepMind's and the post gives no independent replication."
- Bad (hedging, not a reason to care): "A better prediction of which variant matters is a step toward choosing drug targets, not a drug."

If the honest answer is that it matters mainly as a signal about the field — money moving, pharma taking the approach seriously, a method replacing an old one — say that plainly. That is a legitimate reason to care.

**"The catch"** carries everything the old block mixed in: what was not shown, whose figures these are, whether it is peer reviewed, what stage it is really at, what would have to be true for it to matter. Skeptical but fair — if something cuts in the result's favour (sequences released for others to check, an independent replication), say so here too. One to three sentences.

## Weekly TL;DR — "The week in three lines"

Three bullets above the stories, so a skimmer gets real value in ten seconds. This is the most-read block on the page; write it last, when you know what the issue actually says.

Each bullet is **a bold hook plus a short second clause**, wrapped in one link to the story anchor:

```html
<ul class="tldr">
  <li><a href="#story-id"><strong>The surprising bit, in plain words.</strong> The detail that earns it.</a></li>
</ul>
```

- The bold part is the thing that would make someone look up — a surprise, a number, a reversal. Not the headline rewritten.
- The second clause is the concrete detail: the number, the limit, the twist.
- Keep each bullet under about 25 words in total.
- Use `class="tldr"` (styled in `css/style.css`), not inline list styles.

Good: **"AI can draw a thousand proteins a day. Labs can't test them that fast."** A new service is selling speed at that bottleneck.
Good: **"You can now describe a protein in plain English and get a design back."** Of 29 built in a lab, one worked.
Bad: "A new lab service aims to test AI-designed proteins faster; claims are the company's." — that is a headline with a disclaimer stapled on.

Do not put the caveat in the TL;DR. It belongs in "The catch".

## Glossary links

- When a technical term appears that has an entry in `/wiki/index.html`, link it using an anchor: `<a href="../wiki/index.html#term-id">term</a>`.
- Link the term on first use in each issue; do not repeat the link in the same article.
- Current glossary entries and their anchor IDs:
  - `admet` — ADMET
  - `ai-agent` — AI agent
  - `antibody-drug-conjugate` — Antibody-drug conjugate (ADC)
  - `aptamer` — Aptamer
  - `binding-affinity` — Binding affinity
  - `bispecific-antibody` — Bispecific antibody
  - `cdr` — CDR (complementarity-determining region)
  - `checkpoint-inhibitor` — Checkpoint inhibitor
  - `crispr` — CRISPR
  - `cryo-em` — Cryo-EM
  - `de-novo-protein-design` — De novo protein design
  - `dna-methylation` — DNA methylation
  - `foundation-model` — Foundation model
  - `genome-language-model` — Genome language model
  - `glp-1` — GLP-1
  - `gpcr` — GPCR
  - `ind` — IND application
  - `kappa-opioid-receptor` — Kappa opioid receptor
  - `lipid-nanoparticle` — Lipid nanoparticle (LNP)
  - `madrs` — MADRS scale
  - `mdd` — Major depressive disorder
  - `macrocyclic-peptide` — Macrocyclic peptide
  - `miniprotein` — Miniprotein
  - `mrna` — mRNA
  - `neoantigen` — Neoantigen
  - `non-coding-variant` — Non-coding variant
  - `phase-trials` — Phase 1 / 2 / 3 trials
  - `placebo-response` — Placebo response
  - `protac` — PROTAC
  - `protein-language-model` — Protein language model
  - `receptor-antagonist` — Receptor antagonist
  - `ribozyme` — Ribozyme
  - `rna-splicing` — RNA splicing
  - `transcription-factor` — Transcription factor
  - `transcriptome` — Transcriptome
  - `tslp` — TSLP
  - `virtual-cell` — Virtual cell
  - `world-model` — World model

## Per-story share buttons

- Every story card has a small share icon in its `.topbar` (after the date span), powered by `js/share-story.js`: `<button class="story-share" data-share-text="..." aria-label="Share this story" title="Share this story">` + the X-logo SVG (copy the exact `<svg>` markup from an existing button). Clicking it opens an X share intent with that text plus a link back to that story's own anchor on the page — no per-button URL encoding needed, the shared script builds it from the button's nearest ancestor `id`.
- Every `<article class="news-card ...">` needs a unique `id="story-..."` for this to work (also required for the "week in three lines" TL;DR links). Add one when writing a new story.
- Draft the `data-share-text` as a single, punchy, standalone sentence — not just the headline verbatim — that would make sense as a tweet on its own, in the same plain/skeptical voice as the rest of the site, ending with " — Cultured Machine". Keep it well under 250 characters (X shortens the URL automatically). Do not include a URL in the text itself; the script appends the link.
- The whole-digest "Share on X" button at the bottom of the page is separate and unchanged — keep authoring that one as before (see "Share button" below).

## Glossary preview tooltips

- Every glossary link (`../wiki/index.html#term-id`) gets a hover/tap preview via `js/glossary-tooltip.js` — a small popover with the term and a one-sentence definition, so readers don't have to leave the page. Desktop: hover or keyboard focus. Touch: tap opens it with a "Read full entry →" link; tap elsewhere closes it.
- **When adding a new glossary term to `wiki/index.html`, also add a matching one-line entry to the `GLOSSARY` object at the top of `js/glossary-tooltip.js`** — same `id`, a short Term label, and a single plain-English sentence (not the full glossary paragraph). The tooltip silently does nothing for an id it doesn't recognize, so a missed entry won't break the page, but the preview just won't show.
- Every new issue file (`news/YYYY-MM-DD.html`) needs `<script src="../js/glossary-tooltip.js" defer></script>` added right after the page's existing inline `<script>...</script>` block, before `</body>`. Copy this from the most recent issue.
- The tooltip script is shared site-wide (one file, `/js/glossary-tooltip.js`) — do not duplicate its glossary data inline in a page.

## Explainer cross-links

The site has standalone explainers in `/explainers/`. When a story leans on a concept an explainer already covers, link the phrase to that explainer (in addition to any glossary link) — it deepens the digest and drives readers to the explainers.

- Protein folding / structure prediction / AlphaFold → `../explainers/alphafold.html`
- Protein language models / ESM / "learns what a natural sequence looks like" / embeddings → `../explainers/protein-language-models.html`
- De novo protein design / diffusion models for proteins / designed binders / miniproteins / "designed from scratch" → `../explainers/ai-protein-design.html`

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
