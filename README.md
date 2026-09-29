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
All names, parents, Instagram handles, venue, dates, dress-code colors, bank account and gift address are in the `CONFIG` block at the top of the `<script>` in `index.html`. Dates use local Jakarta time (`YYYY-MM-DDTHH:MM`). Change the countdown target by editing `akadStart`.
To hide or delete a wish, delete or clear its message cell in the Sheet. The site refreshes wishes every 30 seconds.
Export RSVPs: File > Download > CSV.

## 6. Solo photos
`assets/photos/bride-solo.jpg` and `groom-solo.jpg` are now cropped from the real solo photos you sent. To swap them for different shots later, replace these two files (same file names) and re-upload to GitHub.

## 7. Design brief (for future reference)
The paragraphs below are the exact design instructions used to build the current layout (envelope opening, Kedua Mempelai, Our Story, filmstrip gallery, dress code, closing). Keep this here so any future edits — by Claude or another developer — can match the original intent:

> curtainnya di awal hilangkan saja, langsung aja muncul namanya fade in gitu.
> pada pembuka undangan, buat section awal:
> 'invite you to celebrate our historic day'
> najmii & mutiara
> (animasi amplop terbuka dan muncul foto berdua disertai bunga dgn nuansa strwberry-matcha)
> (buka undangan)
> muncul foto berdua dalam bingkai bulat dengan animasi dari atas ke bawah, kemudian di bawah bingkai ada tanggal pernikahan dan lokasi venuenya, Rumah Prapanca, Jakarta Selatan.
> kemudian di bawahnya langsung countdown tanpa tulisan 'countdown'
> kemudian dngn slide baru, tambahkan tulisan 'DENGAN MEMOHON RAHMAT TUHAN YANG MAHA ESA'
> Kedua Mempelai
> di bawahnya ada foto mempelai perempuan, diikuti nama dan keterangan 'putri pertama dari' nama orang tua. lalu di bawahnya ada nama instagram yg clickable direct ke akun ig nya. di lanjut bawahnya ada simbol '&' kemudian foto mempelai laki2, diikuti nama dan keterangan 'putra ketiga dari' nama orang tua. lalu di bawahnya ada nama instagram yg clickable direct ke akun ig nya. (masukkan semuanya satu persatu dengan animasi fade in dari bawah ke atas)
> slide berikutnya berjudul 'Our Story'. pada bagian ini buat seperti cerita saat pertama bertemu, falling in love, dan next chapter. letakkan di bagian sebelah kiri, lalu sebelah kanannya foto2 kami berdua, tdk perlu terlalu besar.
> pada slide berikutnya, 'Event Details' — detail tanggal dan waktu akad serta resepsinya, juga lokasi beserta mapsnya.
> dilanjut slide berikutnya 'Our Gallery' berisi foto2 yang dijadikan slide dan template seperti strip film foto.
> selanjutnya masukkan bagian rsvp.
> next slide, tambahkan 'Dress Code' — 'We kindly encourage our favorite people to dress in our color palette on our special day.' lalu bawahnya beberapa palet warna (contoh kain hitam/abu dulu).
> dilanjut section 'Wishes' seperti yg sudah ada.
> terakhir section 'Thank You' diikuti kalimat: 'kehadiran Anda sudah lebih dari cukup. Namun bila ingin memberi tanda kasih, kami menerimanya dengan senang hati.' diikuti section gift.
> penutup: 'SEE YOU IN OUR WEDDING' / 'Najmii & Mutiara' diikuti foto berdua.
> foto2 berdua diberi border bingkai pita warna strawberry-matcha.

Overall theme carried through earlier requests: strawberry-matcha scrapbook look with a batik pattern (green sections), watercolor paper texture, Javanese relief carving on the left/right edges, lace seams between the batik and paper sections, Instrument Serif + Pinyon Script headings, and ribbon-style photo frames.
