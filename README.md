# Wedding Website

Editorial destination wedding website for Angie and Tomas, built with Next.js, React, Tailwind CSS, TypeScript, and Motion.

## Commands

```bash
npm install
npm run dev
npm run build
```

## Project Structure

- `app/`: routes, global styles, robots, sitemap
- `components/`: interactive and presentational UI
- `content/site-data.ts`: English and Dutch site content
- `public/travel-snapshot.txt`: downloadable planning note

## RSVP Configuration

Set `NEXT_PUBLIC_RSVP_URL` in a local `.env` file if you want to replace the default Tally form URL.

## GitHub Pages

This repo includes a GitHub Pages workflow for static export with Next.js.

In your GitHub repository settings:

1. Open `Settings > Pages`
2. Set the source to `GitHub Actions`
3. Push to `main`

The workflow will build the site and publish the `out/` directory automatically.
