# Mitturu Samprathishtaana Website

A responsive, bilingual (English and Kannada) information website for Brahmashree Mitturu Purohitha Thimmayya Bhatta Samprathishtaana (R).

## Open locally

Open `index.html` in a browser. The site uses plain HTML, CSS and JavaScript and needs no build step or package installation.

## Included

- Organization overview, founder biographies, grouped objectives, programmes and funds.
- Searchable, category-filtered catalogue containing the 53 publications listed in the supplied Vidyabhirama text.
- Multi-title book enquiry form that drafts an email in the visitor's email application.
- Annual and life membership information, donation information, current office bearers, official contact details, Vidya Kuteera address, Google Maps link and YouTube channel.
- Dated news and event archive, plus a photo gallery page.
- English/Kannada language toggle and responsive navigation.

## Remaining content

- News and event posts, with dates and optional images, can be added to the news archive as dated entries.
- Photo assets are needed to populate the gallery.
- Verified English translations and review of Kannada names and book descriptions.
- Actual book-cover images, current prices, availability, shipping terms and payment method.
- Membership fees and terms, donation instructions, and current payment options.
- A form service or backend if enquiries should be submitted directly on the site instead of through the visitor's email app.

Catalogue covers are generated typographic placeholders, not scans of published book covers. Programme descriptions are based on the supplied commemorative text and should be checked for current availability before publication.

News entries belong inside `#news-archive` in `news-events.html` as `<article class="news-entry" data-news-entry data-date="YYYY-MM-DD">` elements. Include a `<time datetime="YYYY-MM-DD">`, a heading and text; an optional `<figure><img ...><figcaption>...</figcaption></figure>` adds an image. The year and month filters are generated from entry dates. Add gallery photos as `<figure data-gallery-item class="gallery-item">` elements inside `#gallery-grid` in `gallery.html`, with an image `alt` and a caption.