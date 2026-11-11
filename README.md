# etiennelnr.github.io

Personal website, built with Jekyll and served by GitHub Pages. No theme: layouts, CSS and JS live in this repo.

## Updating content

Most content is plain YAML in `_data/`. Edit these files, no HTML needed:

| File | What it holds |
| --- | --- |
| `_data/news.yml` | News items on the home page |
| `_data/publications.yml` | Papers. `selected: true` also shows a paper on the home page |
| `_data/talks.yml` | Talks, posters, PhD defense |
| `_data/supervision.yml` | PhD students |
| `_data/teaching.yml` | Student projects, TA positions, reviewing |
| `_data/navigation.yml` | Top navigation |
| `_config.yml` | Name, role, email, social links |

The home page bio and research interests are in `index.html`.

## Structure

```
_layouts/   default.html (shell), page.html (inner pages)
_includes/  head, header, footer, icons, publication entry, link pills
_pages/     research, talk, supervision, teaching, 404
assets/css/main.css   all styles (color tokens at the top, light + dark)
assets/js/main.js     theme toggle, publication filters, animated time series on the home page
```

## Run locally

```sh
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.
