# SMELLS: notes for Claude

SMELLS is a static web page (index.html, style.css, app.js) that shows a perfume collection from a Google Sheet, with a bottle photo for each perfume. GitHub Pages serves it from the repo's default branch. There is no build step and nothing to install.

The owner is usually not a programmer. Explain things in plain words, give GitHub steps click by click, and don't assume they know what a branch, pull request or commit is.

## If this is a new owner's copy

The repo started as Jason's (github.com/kreher124/Perfume). If `config.js` still has `OWNER_NAME = "Jason"` and the owner isn't Jason, they have copied it for themselves. Set it up for them before anything else.

1. **Get their Google Sheet link.** The sheet needs:
   - A **Tried** tab with the headings House, Name, Rating, and Notes or Facts in row 1. Ratings run 0 to 100. A blank rating puts the perfume in the queue.
   - Optionally, a **To Try** tab with House, Name, Where to buy, Link, and Notes.
   - A green fill on the House or Name cell for every full bottle they own.
   - Sharing set to "Anyone with the link" as Viewer.

   `sheetToItems` and `workbookToItems` in app.js list the other heading and tab names they accept. If their sheet is laid out differently, ask whether they'd rather rename a heading or have the app accept theirs.
2. **Point the app at it.** Put the sheet's ID and the owner's first name in `config.js`. The ID is the part of the link between `/d/` and `/edit`.
3. **Clear out Jason's data.**
   - Set `matches.json` to `{}`.
   - Delete `CORRECTIONS.md`.
   - Replace `data/FRAGRANCES.xlsx` with their sheet, downloaded from `https://docs.google.com/spreadsheets/d/<ID>/export?format=xlsx`. If the download fails, the sheet isn't shared yet.
   - Update the live-page link at the top of `README.md`. It's `https://<their GitHub username>.github.io/<repo name>/`.
   - Keep `HOUSE_FIXES` in app.js. It only fixes common misspellings of house names, so it helps anyone.
4. **Publish it.** Commit, push, and open a pull request, then walk them through merging it. If GitHub Pages isn't on yet, walk them through that too: Settings → Pages → Build and deployment → Source "Deploy from a branch", choose the default branch and `/ (root)`, then Save. The page is live a minute or two after each merge.
5. **Match their perfumes to Fragrantica.** Follow the steps below.

## Matching perfumes to Fragrantica

Each perfume's photo and cleaned-up name come from `matches.json`.

**Keys.** Each key is `norm(house) + "|" + norm(name)`, using the house and name as typed in the sheet. `norm` lowercases the text, strips accents, and turns every run of other characters into one space. It is the same function in app.js and `scripts/sheet_tools.py`.

**Values** can hold these fields:

| Field | What it holds |
|---|---|
| `p` | The Fragrantica path, the part of the page's address after `/perfume/` without `.html`. For example `Le-Labo/Santal-33-12201`. The number at the end also gives the photo. |
| `n` | The correct perfume name. Only include it when the sheet's spelling differs. |
| `h` | The correct house name. Same rule as `n`. |
| `i` | A photo address, for perfumes that aren't on Fragrantica. The Find bottle photos action fills this in. |
| `src` | A product or review page, or a list of them. The action copies the page's share image into `i`. |
| `shop` | A Shopify store's address. The action searches its catalog for the perfume's name. |

An entry of `{}` means you looked and found nothing. The app shows a colored letter tile for it.

**How to match:**

1. Run `python3 scripts/sheet_tools.py unmatched` to list every perfume that has no entry yet.
2. Work through the list in batches of about 30, and commit and push after each batch so nothing is lost.
   - In Claude Code on the web, fragrantica.com and most shop sites refuse direct downloads. Use WebSearch, for example `fragrantica <house> <name>`, and read the path from the result's address.
   - When the sheet's spelling is clearly wrong, set `n` or `h` to the correct name.
   - When you aren't sure you found the right perfume, collect it in a list and ask the owner in chat. Don't leave the question in a file they'd have to find.
3. Skip rows that aren't a single perfume, like "The whole line", "(discovery set)", or a house with no perfume name. They show a letter tile.
4. **Perfumes that aren't on Fragrantica.**
   - Find the maker's product page and put it in `src`. If the maker's store runs on Shopify (its address answers `/products.json`), put the store in `shop` instead.
   - Parfumo pages work as a backup `src`.
   - Pushing `matches.json` runs the Find bottle photos action (`.github/workflows/find-photos.yml`), which fills in `i`. Some shops block it; dshperfumes.com is one.
5. To check progress, run `unmatched` again.

Perfumes the owner adds later get a letter tile until they're matched. An owner who doesn't want to wait can add a **Fragrantica** column to the sheet and paste the perfume's Fragrantica link into it. The app reads that column directly.

## Weekly photo check

A scheduled Routine runs this with no one watching. Do only this:

1. Run `python3 scripts/sheet_tools.py unmatched`. If it lists only rows that aren't a single perfume, stop and report that there was nothing new.
2. Match the rest as described above. When you aren't sure about one, don't guess. Leave it out of `matches.json`, so next week's run tries it again, and name it in your final message.
3. Commit, push, open a pull request, and merge it. Don't wait for approval, because the owner asked for these to publish on their own. Change only `matches.json`.
4. If you added `src` or `shop` entries, wait for the Find bottle photos action to finish, and check whether it found each photo.
5. End with a short plain summary: what got a photo, what you skipped, and why.

To set up this Routine for a new owner, create it so each run starts a fresh session in the owner's environment, on a weekly schedule in their time zone. Give it a prompt that says to follow this section.

## Giving the owner a corrected spreadsheet

The app shows corrected names, but the sheet keeps the owner's spelling until they choose to fix it. To give them a fixed copy:

1. Run `python3 scripts/sheet_tools.py corrected` on a fresh copy of their sheet. It changes only the House and Name cells, and leaves scores, notes and colors alone. It needs `pip install openpyxl`.
2. Send them `FRAGRANCES (corrected).xlsx`. Don't commit it.
3. Tell them to import it from a computer. In Google Sheets, that's File → Import → Upload, then choose **Replace spreadsheet**. That option keeps the sheet's address and sharing, so the app keeps reading it. Opening the file from Google Drive, or choosing "Create new spreadsheet", makes a new sheet the app doesn't know about.
4. Make the file right before they import it. If they edit the sheet in between, those edits are lost.

## Design rules

The look follows jasonkreher.com, a Google Sheets page.

- **Grid.** Everything sits on one grid of fixed-height rows (`--H`) and repeating column sets. Every new element lines up to whole cells. The top of style.css explains the grid.
- **Colors.** Black and white, with three accents: yellow `#ffff57`, magenta `#ea3bf7`, and cyan `#75f9fb`. Borders are 2px black. There are no rounded corners and no drop shadows on the page. The pop-up panels are the exception.
- **Menu (☰).** The blocks run magenta for Ranked, cyan for Owned, yellow for Queue, and white for Smell Friends.
- **Card tags** match the menu. Full bottle is cyan and Queue is yellow.
- **Scores** of 90 and up are yellow with a bold border. The rest are black. Lists start sorted by house, A to Z.

## Checking changes

Serve the folder with `python3 -m http.server` and load it in Playwright. Chromium is pre-installed on Claude Code on the web. If the jszip script can't be fetched from the CDN, `npm install jszip` into a scratch folder and route the request to `node_modules/jszip/dist/jszip.min.js`. Take screenshots at phone width, 390px, and show them to the owner before merging a design change.

After a merge, Safari on a phone can keep showing the old version for a while. Press and hold reload, or clear the site's data under Settings → Apps → Safari → Advanced → Website Data.
