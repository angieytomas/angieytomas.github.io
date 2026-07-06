# Tomas & Angie June 2026 Website Summary

## What was built

This folder contains a self-contained Next.js wedding website for Tomas & Angie, based on `wedding-site-content.md`.

The site is English-only for now, but the public page structure keeps the English route prefix in place:

- `/`
- `/en/`
- `/en/the-weekend/`
- `/en/buenos-aires/`
- `/en/travel-in-argentina/`
- `/en/getting-to-argentina/`
- `/en/getting-here/`
- `/en/faq/`
- `/en/rsvp/`

The root page renders the same home page as `/en/` so static export works cleanly.

## Main decisions made

- Built this as a standalone Next.js 16 app inside `june2026`, rather than changing the existing root project.
- Used static export through `output: "export"` in `next.config.ts`.
- Assumed the custom domain `tomasandangie.com`, as requested in the content spec.
- Added `public/CNAME` and `public/.nojekyll` for GitHub Pages custom-domain deployment.
- Kept all guest-facing copy in `content/site-data.ts`.
- Used a calm, centered, mobile-first layout with max width around 720px.
- Used warm bone, paper, charcoal, terracotta, and muted olive colors.
- Used Georgia for display headings and system sans-serif for body text to avoid external font loading.
- Used reusable section/card components for consistency.
- Used TBC badges for unfinished venue, time, RSVP deadline, and weekend details.
- Embedded the RSVP form through `NEXT_PUBLIC_RSVP_URL`, with a placeholder fallback.
- Generated one placeholder Buenos Aires hero image and saved it at `public/images/buenos-aires-hero.png`.

## Content notes

Most future edits should happen in:

`content/site-data.ts`

Important TBC fields currently include:

- Home page location and time.
- Weekend venue and schedule details.
- RSVP deadline.
- RSVP form URL, unless it is provided through the environment variable.
- Contact email, currently `hello@tomasandangie.com`.

The Travel in Argentina destination cards support simple markdown links in the content data, using `[label](https://example.com)`. These render as terracotta external links and open in a new tab.

## RSVP setup

Set this environment variable before building:

```bash
NEXT_PUBLIC_RSVP_URL="https://tally.so/embed/your-real-form-id?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
```

There is also an example in `.env.example`.

## Deployment notes

Build from inside this folder:

```bash
cd june2026
npm run build
```

The static output is generated in:

`june2026/out`

The root GitHub Actions workflow at `.github/workflows/deploy.yml` is configured to build this `june2026` folder and publish `june2026/out` to GitHub Pages.

For a free GitHub Pages project URL, use:

`https://<username>.github.io/<repo-name>/`

The workflow passes GitHub Pages' base path into the build automatically. It also removes the custom-domain `CNAME` file from the deployment artifact when publishing to a `github.io/<repo-name>` URL.

For `https://angieytomas.github.io`, create a GitHub organization or user named `angieytomas`, then create the repository `angieytomas.github.io` under that owner.

For a custom domain, keep `public/CNAME` set to the real domain, set a repository variable named `CUSTOM_DOMAIN`, and configure the domain in the repository Pages settings.

## Generated image

The hero image was generated for this project and copied into:

`public/images/buenos-aires-hero.png`

Prompt summary: editorial Buenos Aires street scene, warm late-afternoon light, no identifiable people, no readable signs, no logos, and generous negative space for website copy.

## Verification

`npm run build` completed successfully from inside `june2026`.
