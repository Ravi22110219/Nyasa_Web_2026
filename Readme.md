# Nyasa 2026 Website

Static site for Nyasa (IITGN). This repository contains standalone HTML pages, shared components, and assets (CSS/JS/data/media).

## Pages

- `index.html` — Home page with overall overview and featured sections.
- `about.html` — About Us page focused on the team.
- `activities.html` — Activities overview page.
- `distribution.html` — Distribution Drive activity detail page.
- `pathway.html` — Pathway Program activity detail page.
- `sanjeevani.html` — Sanjeevani Medical Camp activity detail page.
- `summercamp.html` — Summer Camp activity detail page (2025).
- `blog.html` — Blog listing page (Nyasa Stories).
- `blog-post.html` — Individual blog article page (sample post).
- `news.html` — Articles and News page.
- `report.html` — Impact Reports page (annual reports).
- `gallery.html` — Photo gallery page.
- `contribute.html` — Contribute / volunteer / donate page.

## Structure

```
Nyasa2026/
├── about.html
├── activities.html
├── blog-post.html
├── blog.html
├── contribute.html
├── distribution.html
├── gallery.html
├── index.html
├── news.html
├── pathway.html
├── report.html
├── sanjeevani.html
├── summercamp.html
├── activitiesPages/                (currently empty)
├── components/                     (reusable HTML fragments)
└── assets/
    ├── css/                        (page + component styles)
    ├── js/                         (page + component scripts)
    ├── data/                       (JSON data)
    ├── images/                     (site images)
    ├── gifs/                       (GIFs)
    └── reports/                    (PDF annual reports)
```

## Development Notes

- This is a static site. Open `index.html` in a browser to view locally.
- Shared fragments live in `components/` and are included via JS where used.