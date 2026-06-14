# Cultured Machine

*Where biology learns to compute.* — A static site of plain-language explainers and a weekly news digest on Biotech + AI.

## Structure
```
cultured-machine/
├── index.html              Homepage
├── about.html              About + publications
├── css/style.css           Shared styles (whole site)
├── explainers/
│   └── alphafold.html      Interactive explainer (launch piece)
├── news/
│   └── 2026-06-11.html     Sample weekly digest (template)
├── scripts/                Automation (optional)
│   ├── fetch_news.py       Pull RSS headlines -> JSON
│   └── draft_digest.py     Draft a digest via Claude API
├── .github/workflows/
│   └── weekly-digest.yml   Weekly auto-draft -> Pull Request
├── CONTENT_BACKLOG.md      Explainer ideas + news sources
└── SETUP_AND_AUTOMATION.md How to publish + automate
```

## Quick start
1. Push this folder to a public GitHub repo.
2. Settings → Pages → deploy from `main` / root.
3. Live at `https://<username>.github.io/cultured-machine/`.

See **SETUP_AND_AUTOMATION.md** for the full guide, including the optional automated weekly digest.

## Naming note
"Cultured Machine" is a working title — easy to change. Update the `<title>`, the `.brand` text in each HTML file, and the footer.
