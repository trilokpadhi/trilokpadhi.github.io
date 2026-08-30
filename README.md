# trilokpadhi.github.io

Personal academic website of [Trilok Padhi](https://trilokpadhi.github.io) — PhD student in Computer Science at Georgia State University.

Built with [Jekyll](https://jekyllrb.com/) and the [al-folio](https://github.com/alshedivat/al-folio) theme.

## What lives where

| File / directory | What to edit |
| --- | --- |
| `_pages/about.md` | Homepage bio, profile photo settings, subtitle |
| `_bibliography/papers.bib` | Publications. `selected={true}` puts a paper on the homepage |
| `_news/` | News items — one Markdown file per item, named `YYYY-MM-DD-slug.md` |
| `_data/cv.yml` | Structured CV shown at `/cv/` |
| `assets/pdf/Trilok_Padhi_CV.pdf` | CV PDF linked from the `/cv/` page |
| `_data/socials.yml` | Social / profile links in the navbar and footer |
| `_data/coauthors.yml` | Co-author names that should link to their homepages |
| `_data/venues.yml` | Colors for the venue badges on publications |
| `assets/img/prof_pic.jpg` | Profile photo |
| `_config.yml` | Site title, description, theme and feature toggles |

## Running locally

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
pushes the result to the `gh-pages` branch. GitHub Pages for this repository must be
set to serve from the `gh-pages` branch (Settings → Pages → Source: *Deploy from a
branch* → `gh-pages` / `(root)`).

Upstream theme documentation: [`INSTALL.md`](INSTALL.md), [`CUSTOMIZE.md`](CUSTOMIZE.md), [`FAQ.md`](FAQ.md).
