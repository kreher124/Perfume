# Make your own SMELLS

These steps give you your own copy of the SMELLS perfume app. It gets its own web address and shows perfumes from your own Google Sheet, with a bottle photo for each one. Claude does the technical work. Your part is the clicking, and it takes about half an hour. Do it on a computer. GitHub's settings pages are hard to use on a phone.

## What you need

- A **Google account**, for your perfume sheet.
- A free **GitHub account**. Sign up at https://github.com/signup. GitHub is where your copy of the app lives, and it hosts the website for free.
- A **Claude plan that includes Claude Code**. Pro or higher does. Claude matches your perfumes to their photos and sets everything up.

## 1. Make your Google Sheet

1. Make a new Google Sheet. Rename its first tab **Tried**.
2. Type these headings in row 1: **House**, **Name**, **Rating**, **Notes**.
3. Add one perfume per row. Ratings go from 0 to 100. Leave the rating blank for perfumes you haven't tried; those go in your queue.
4. For every full bottle you own, color its House or Name cell **green**.
5. Optional: add a second tab called **To Try** for your wishlist, with the headings **House**, **Name**, **Where to buy**, **Link** and **Notes**.
6. Click **Share**. Under General access, choose **Anyone with the link**, as **Viewer**. Click **Copy link** and keep the link handy.

## 2. Copy the app

1. Sign in to GitHub. Go to https://github.com/kreher124/Perfume.
2. Click the green **Use this template** button near the top right, then **Create a new repository**.
3. Type a name, for example `Perfume`. Leave it set to **Public**. Click **Create repository**.

You now have your own copy. From here on, you work only in your copy.

## 3. Turn on your website

1. In your copy, click **Settings** in the row of tabs near the top.
2. In the left sidebar, click **Pages**.
3. Under "Build and deployment", set Source to **Deploy from a branch**. Choose the branch in the first dropdown (there's only one), leave the folder as **/ (root)**, and click **Save**.

Your site will be at `https://YOUR-GITHUB-USERNAME.github.io/Perfume/`, using whatever name you picked in step 2. Until Claude finishes the next step, it shows Jason's perfumes.

## 4. Have Claude set it up

1. Go to https://claude.ai/code and sign in.
2. If it asks you to connect GitHub, follow its steps and allow access to your new repository.
3. Start a new session and pick your repository.
4. Paste this message, with your own sheet link and name filled in:

> This is my copy of the SMELLS perfume app. Read CLAUDE.md and set it up for me. My Google Sheet is: PASTE-YOUR-LINK-HERE. My first name is YOUR-NAME.

Claude connects the app to your sheet, clears out Jason's perfumes, and finds a Fragrantica photo for each of yours. A big collection takes a while, and Claude may ask you about perfumes it isn't sure of.

## 5. Accept Claude's changes

Claude hands you its work as a **pull request**, a set of changes waiting for your OK. Your website updates only after you accept them.

1. Claude gives you a link to the pull request. Open it.
2. Scroll down and click **Merge pull request**, then **Confirm merge**.
3. Wait a minute or two, then reload your site.

You can also just tell Claude "merge it" in the chat.

## 6. Put it on your phone

1. Open your site in Safari on your iPhone.
2. Tap the **Share** button, then **Add to Home Screen**.

It opens like an app from then on.

## Afterward

- **Editing:** edit your Google Sheet as usual. The app shows your changes the next time you open it.
- **New perfumes:** a perfume you add later shows a colored letter until it has a photo. Either start a new Claude session and ask it to match your new perfumes, or add a column headed **Fragrantica** to your sheet and paste the perfume's Fragrantica link into it.
- **Design:** to change the look, describe what you want in a Claude session. Ask for screenshots before you merge anything.
