# Magic Tools Contracting — Portfolio Site


Static site (plain HTML/CSS/JS, no build step) for Magic Tools Contracting,
a masonry contractor, replacing their Facebook page. Deployed via GitHub
Pages with a custom domain (magictoolscontracting.com).

## Structure
- index.html — homepage
- about.html
- services.html
- gallery.html — 15-40 photo portfolio
- contact.html (or section) — hours, service area, contact info
- /assets/css, /assets/js, /assets/images

## Conventions
- No frameworks/build tools — keep it plain HTML/CSS/JS so it's easy to
  host directly on GitHub Pages with zero config.
- Mobile-first, since most visitors will be on phones.
- Optimize images before committing (Claude Code can resize/compress).
- Business name "Magic Tools Contracting" appears in: <title> tags, nav
  logo/header, footer, page metadata, and any structured data (schema.org
  LocalBusiness markup).
