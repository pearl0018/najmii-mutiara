# Najmii & Mutiara — Wedding Invitation

Static site (one `index.html`) + Google Apps Script backend. No build step.

## 1. Add your assets
Photos are already optimised (WebP, 960 px wide) in `assets/photos/`: `cover`, `duo`, and `g1`–`g5`. To swap one, save a new WebP with the same name.
Music: add `assets/music.mp3` (128 kbps, under 3 MB). Use a track you have the rights to.

## 2. Google Sheets + Apps Script
1. Create a new Google Sheet, e.g. "Wedding RSVP".
2. Extensions > Apps Script. Paste all of `Code.gs`, save.
3. Select `setup` in the toolbar and click Run. Approve permissions. A tab named `RSVP` appears with the columns Timestamp, Name, Attendance, Guests, Message.
4. Deploy > New deployment > type Web app. Execute as: Me. Who has access: Anyone. Deploy, then copy the Web App URL (ends in `/exec`).
5. Open `index.html`, find `scriptUrl` in `CONFIG`, and paste the URL.
6. If you edit `Code.gs` later: Deploy > Manage deployments > edit > New version.

## 3. GitHub Pages
1. Create a repo and upload everything in this folder (keep `index.html` at the root).
2. Settings > Pages > Source: Deploy from a branch > `main` / root > Save.
3. Your site is live at `https://<username>.github.io/<repo>/` in about a minute.

## 4. Personalised links
Add `?to=Guest%20Name` to the URL, e.g. `.../?to=Ade%20Fitriyani`. The cover greets that guest and pre-fills the RSVP name.

## 5. Editing later
All names, parents, venue, dates, bank account and gift address are in the `CONFIG` block at the top of the `<script>` in `index.html`. Dates use local Jakarta time (`YYYY-MM-DDTHH:MM`). Change the countdown target by editing `akadStart`.
To hide or delete a wish, delete or clear its message cell in the Sheet. The site refreshes wishes every 30 seconds.
Export RSVPs: File > Download > CSV.
