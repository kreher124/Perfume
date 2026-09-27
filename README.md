# SMELLS

A phone-friendly page for browsing a perfume collection, built from a Google Sheet. Its look follows jasonkreher.com: black and white spreadsheet cells, with yellow, magenta and cyan as accents.

Live page: https://kreher124.github.io/Perfume/

## How it works

- Each time it opens, the page reads the Google Sheet and shows every perfume as a card with a bottle photo, house, name and score. Tap a card for your full notes and links.
- The menu (☰, next to SMELLS) switches between three lists and holds **Smell Friends**. **Ranked** shows everything with a score. **Owned** shows full bottles, meaning cells shaded green in the sheet. **Queue** shows everything without a score, from either tab.
- Scores of 90 and up are yellow; the rest are black. Lists start sorted by house, A–Z.
- Every block on the page sits on one spreadsheet grid of fixed-height rows. `style.css` explains the layout, and `app.js` places the cards and draws the gridlines.
- Bottle photos come from Fragrantica. The links between your perfumes and their Fragrantica pages are stored in `matches.json`. For perfumes that aren't on Fragrantica, `matches.json` names a product page or shop instead, and a GitHub Action copies the photo's address from there.
- If the live sheet can't be reached, the page falls back to a backup copy in `data/`. A GitHub Action refreshes that copy every hour.

## Keeping it up to date

Edit the Google Sheet as usual. The page shows your changes the next time it's opened.

A perfume added later shows a letter tile instead of a photo. To give it a photo, add a column headed **Fragrantica** to the sheet and paste the perfume's Fragrantica page link into it.

## Weekly photo check

A scheduled Claude task, called a Routine, runs every Sunday at about 6am Pacific. It finds perfumes in the sheet that have no photo yet, matches them to Fragrantica the way `CLAUDE.md` describes, and publishes the result. Nobody has to open Claude. If it isn't sure about a perfume, it skips it and lists it in its notification. Each run counts toward your Claude plan's usage.

To set one up for your own copy, start a Claude Code session on your repository and paste this:

> Set up a weekly Routine for this repo that runs every Sunday around 6am in my time zone (TIME-ZONE). Each run should start a fresh session, follow the "Weekly photo check" section of CLAUDE.md, and publish its changes without waiting for me.

To change the schedule or turn it off, go to claude.ai/code, open Routines, and pick the routine.

## Friends

A friend opens the menu (☰), taps **Smell Friends**, and follows the steps. Their page is this same site pointed at their own sheet, so they don't need to install anything.

## Your own copy

To run a separate copy of this app on your own GitHub account, follow [START-HERE.md](START-HERE.md). `CLAUDE.md` has the full method for Claude: how to point a copy at a new sheet, match its perfumes to Fragrantica, and keep to the design.

## Files

| File | What it is |
|---|---|
| `config.js` | Which Google Sheet the app reads, and the owner's name |
| `index.html`, `style.css`, `app.js` | The page |
| `icon.svg`, `icon.png`, `icon-512.png`, `manifest.json` | Home-screen icon and name |
| `matches.json` | Fragrantica links and name corrections |
| `CORRECTIONS.md` | Every name correction and photo status |
| `data/FRAGRANCES.xlsx` | Backup copy of the sheet |
| `.github/workflows/refresh-snapshot.yml` | Hourly backup job |
| `.github/workflows/find-photos.yml`, `scripts/find_photos.py` | Finds photos for perfumes that aren't on Fragrantica |
| `scripts/sheet_tools.py` | Lists perfumes still to match, and builds a corrected copy of the sheet |
| `CLAUDE.md` | Instructions Claude reads when working on this app |
| `START-HERE.md` | Steps for making your own copy |
