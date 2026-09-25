# SMELLS

A phone-friendly page for browsing a perfume collection, built from a Google Sheet. Its look follows jasonkreher.com: black and white spreadsheet cells, with yellow, magenta and cyan as accents.

Live page: https://kreher124.github.io/Perfume/

## How it works

- Each time it opens, the page reads the Google Sheet and shows every perfume as a card with a bottle photo, house, name and score. Tap a card for your full notes and links.
- The menu (☰, next to SMELLS) switches between three lists and holds **Make your own**. **Ranked** shows everything with a score. **Owned** shows full bottles, meaning cells shaded green in the sheet. **Queue** shows everything without a score, from either tab.
- Scores of 90 and up are yellow; the rest are black. Lists start sorted by house, A–Z.
- Every block on the page sits on one spreadsheet grid of fixed-height rows. `style.css` explains the layout, and `app.js` places the cards and draws the gridlines.
- Bottle photos come from Fragrantica. The links between your perfumes and their Fragrantica pages are stored in `matches.json`. For perfumes that aren't on Fragrantica, `matches.json` names a product page or shop instead, and a GitHub Action copies the photo's address from there.
- If the live sheet can't be reached, the page falls back to a backup copy in `data/`. A GitHub Action refreshes that copy every hour.

## Keeping it up to date

Edit the Google Sheet as usual. The page shows your changes the next time it's opened.

A perfume added later shows a letter tile instead of a photo. To give it a photo, add a column headed **Fragrantica** to the sheet and paste the perfume's Fragrantica page link into it.

## Friends

A friend opens the menu (☰), taps **Make your own**, and follows the steps. Their page is this same site pointed at their own sheet, so they don't need to install anything.

## Files

| File | What it is |
|---|---|
| `index.html`, `style.css`, `app.js` | The page |
| `icon.svg`, `icon.png`, `icon-512.png`, `manifest.json` | Home-screen icon and name |
| `matches.json` | Fragrantica links and name corrections |
| `CORRECTIONS.md` | Every name correction and photo status |
| `data/FRAGRANCES.xlsx` | Backup copy of the sheet |
| `.github/workflows/refresh-snapshot.yml` | Hourly backup job |
| `.github/workflows/find-photos.yml`, `scripts/find_photos.py` | Finds photos for perfumes that aren't on Fragrantica |
