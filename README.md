# etiennelnr.github.io

Personal website, built with Jekyll and served by GitHub Pages. No theme: layouts, CSS and JS live in this repo.

## Updating content

Most content is plain YAML in `_data/`. Edit these files, no HTML needed:

| File | What it holds |
| --- | --- |
| `_data/news.yml` | News items (the home page shows the 5 most recent) |
| `_data/publications.yml` | Papers. `selected: true` also shows a paper on the home page; optional `image` (thumbnail) and `bibtex` |
| `_data/talks.yml` | Talks, posters, PhD defense |
| `_data/supervision.yml` | PhD students (Supervision page) |
| `_data/teaching.yml` | Student projects (Supervision), TA positions (Teaching), reviewing (Reviewing) |
| `_data/navigation.yml` | Top navigation |
| `_config.yml` | Name, role, email, social links |

The home page bio and research interests are in `index.html`.

Paper thumbnails live in `assets/images/papers/` (PNG, ~800px wide, white background); reference one with `image:` in `_data/publications.yml`. The thesis card image is `assets/images/papers/thesis.png`.

Link previews (LinkedIn, Slack...) use `assets/images/og.png` (1200×630).

## Structure

```
_layouts/   default.html (shell), page.html (inner pages)
_includes/  head, header, footer, icons, publication entry, link pills
_pages/     research, talk, supervision, teaching, reviewing, 404
assets/css/main.css   all styles (color tokens at the top, light + dark)
assets/js/main.js     theme toggle, publication filters, animated time series on the home page
```

## Run locally

```sh
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.
