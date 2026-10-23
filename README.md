# gfk.is – vefur Glímufélags Kópavogs (DRÖG)

Astro static site. Local draft only – not pushed or deployed.

- `npm install` · `npm run dev` · `npm run build` · `npm run preview`
- Content: `src/content/frettir/*.md` (news), `src/data/schedule.json` (æfingatafla), `src/data/prices.json` (verðskrá), `src/data/site.json` (contact/links)
- Editors: Pages CMS config in `.pages.yml`
- Deploy: `.github/workflows/deploy.yml` (GitHub Pages), custom domain in `public/CNAME` (gfk.is)
- `public/robots.txt` and `<meta name="robots" content="noindex">` block indexing while in draft – remove both at launch, along with the draft banner in `src/layouts/Base.astro`.
