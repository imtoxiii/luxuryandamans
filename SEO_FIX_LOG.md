# SEO fix log — Luxury Andamans

Tracker from Google Search Console Coverage exports dated **18 Sep 2026**.
Canonical host: `https://luxuryandamans.com` (no www, no trailing slash).

Status values: `todo` | `in_progress` | `done` | `wontfix-expected-301` | `blocked-need-export`

Do **not** delete http/www/slash 301s to make GSC “Page with redirect” hit zero. Those 301s are correct.

**Honest status (18 Sep 2026):** Wave 1 + Wave 2 **code** is done. Coverage is **not** “all fixed.” GSC still needs recrawl after deploy. 24 crawled-not-indexed, remaining Google-canonical conflicts, remaining 404s, and 20 alternates still need URL exports to tick row-by-row. Rankings also need recrawl plus E-E-A-T/backlinks (not a code pass).

### New ranking pages added this pass

| Query | New URL |
|---|---|
| Andaman honeymoon packages | `/blog/andaman-honeymoon-packages-2026` |
| Andaman family packages | `/blog/andaman-family-tour-packages-2026` |
| Andaman packages from Delhi | `/blog/andaman-packages-from-delhi-2026` |
| Andaman packages from Mumbai | `/blog/andaman-packages-from-mumbai-2026` |
| 4 nights 5 days Andaman package | `/blog/4-nights-5-days-andaman-package-2026` |

---

## Snapshot (GSC, 14–18 Sep 2026)

| Metric | Value |
|---|---|
| Indexed | ~148 |
| Not indexed | ~234 |
| Daily impressions (chart, last week avg) | ~238 |
| Sitemap | `https://luxuryandamans.com/sitemap.xml` |

| GSC reason | Pages | Validation | Status | Notes |
|---|---|---|---|---|
| Page with redirect | 137 | Failed | `wontfix-expected-301` | 79 HTTP, 17 www, 79 trailing slash, 62 unique paths. Keep 301s. Re-check in 4–8 weeks after recrawl. |
| Crawled – currently not indexed | 24 | Failed | `blocked-need-export` | Quality pass done on money/location pages (unique H1s + internal links). Still need URL list to tick remaining rows. |
| Alternate page with proper canonical | 20 | Not started | `blocked-need-export` | Mostly old blog slugs already 301’d or rel-canonical. Need URL list. |
| Duplicate, Google chose different canonical | 10 | Not started | `in_progress` | Fixed `/index.html` duplicate + SPA homepage canonical leak. Need URL list for the rest. |
| Not found (404) | 7 | Not started | `in_progress` | 301’d live 404 aliases we probed (see 2c). Confirm remaining GSC 7 after export. |
| Discovered – currently not indexed | 36 | Passed | `wontfix-expected-301` | Crawl queue, not a code bug. |
| Blocked 403 / duplicate without canonical | 0 | — | `done` | None. |

The validation spreadsheet only contains the **137 redirect URLs**. Export the other Coverage reports and paste them into the tables below.

---

## Wave 1 (code — this pass)

| ID | Issue | Status | Fix |
|---|---|---|---|
| W1-1 | This log | `done` | `SEO_FIX_LOG.md` |
| W1-2 | `/destinations/port-blair` was a ghost URL (JS navigate to `/destinations`) | `done` | HTTP 301 → `/locations/port-blair`. Same pattern for `/destinations/havelock-island` and `/destinations/neil-island`. Synced in `.htaccess`, `public/.htaccess`, `public/_redirects`, `src/lib/legacyRedirects.ts`. Footer already used `/locations/port-blair` and `/destinations/port-blair-destinations` (hub) — leave both; they are different pages. |
| W1-3 | Redirect chains (www → https, then slash strip, then legacy) | `done` | Legacy path rules run **first** and target absolute `https://luxuryandamans.com/...`. Host/http rules strip trailing slash in the same hop. Apex leftover slash still 301s once. |
| W1-4 | Unknown blog/package/destination/location slugs client-navigated to listing pages (“Redirecting…”) | `done` | SPA now renders `NotFound` (noindex). Direct hits on Apache/Netlify still HTTP 404 via `404.html`. Known aliases stay HTTP 301. |
| W1-5 | Confirm live 200 on canonical paths | `done` | See [Live host check](#live-host-check) below. Re-check after this deploy. |

---

## Wave 2 (code — this pass)

GSC Coverage-Validation only listed the **137 redirects**. Remaining URL lists were not in the workbook. Code below is shipped; paste exports to tick leftover rows.

### 2a. Crawled – currently not indexed (24)

How to fix: unique H1, more unique copy, fewer near-duplicate itinerary/city posts, internal links from `/destinations` and `/blog`.

Blanket quality pass (no GSC URL list): unique H1s on `/packages`, `/locations/{port-blair,havelock-island,neil-island}`; internal links from `/packages` and `/destinations` into the 2026 money blogs; location pages now FAQ + “Also see” hub/blog/package links.

| URL | Likely cause | Action | Status |
|---|---|---|---|
| _paste from GSC_ | | | `blocked-need-export` |
| `/packages` | Thin/generic listing H1 | H1 “Andaman Tour Packages 2026” + price/plan subtitle + blog links | `done` |
| `/destinations` | Weak internal links | Hero links to island location pages + 4N5D/honeymoon blogs | `done` |
| `/locations/*` | Duplicate-feeling island pages | H1 “{name} Travel Guide 2026”, FAQ schema, extras links | `done` |

### 2b. Google chose different canonical (10)

How to fix: view-source the live HTML — one `rel=canonical`, not the homepage canonical from `index.html`. Confirm no www/slash on the indexed URL.

| URL | Google’s canonical | Our canonical | Action | Status |
|---|---|---|---|---|
| `https://luxuryandamans.com/index.html` | `/` | `/` | HTTP 301 `/index.html` → `/` (Apache `THE_REQUEST` so DirectoryIndex/prerender is not looped; Netlify `/index.html` + `/*/index.html`) | `done` |
| Inner SPA URLs (shell HTML) | `/` | page URL | Immediate `<head>` script rewrites `rel=canonical` + `og:url`; both tags have `data-rh="true"` so Helmet replaces them (no duplicate canonicals after SPA nav) | `done` |
| _remaining GSC rows_ | | | Export still needed | `blocked-need-export` |

### 2c. Not found 404 (7)

How to fix: 301 old slugs; leave junk as 404. Live-probed 404s (pre-deploy) mapped and synced in `.htaccess`, `public/.htaccess`, `public/_redirects`, `src/lib/legacyRedirects.ts`.

| URL | Old page? | 301 target or keep 404 | Status |
|---|---|---|---|
| `/about-us` | yes (old about) | `/guide` | `done` |
| `/contact-us` | yes | `/contact` | `done` |
| `/home` | yes | `/` | `done` |
| `/tours`, `/tour-packages`, `/andaman-tour-packages` | yes | `/packages` | `done` |
| `/honeymoon` | yes | `/blog/andaman-honeymoon-packages-2026` | `done` |
| `/family` | yes | `/blog/andaman-family-tour-packages-2026` | `done` |
| `/offers` | yes | `/offer` | `done` |
| `/booking` | yes | `/enquiry` | `done` |
| `/packages/wellness-sanctuary`, `/packages/corporate-retreat`, `/packages/adventure-seeker` | old slugs | `/packages` | `done` |
| `/destinations/DestinationDetailEnhanced` | ghost | `/destinations` | `done` |
| _remaining GSC 404s if not in this list_ | | | `blocked-need-export` |

### 2d. Alternate page with proper canonical (20)

How to fix: usually nothing. Confirm they 301 or `noindex` + canonical. Do not put them in `sitemap.xml`.

| URL | Canonical target | Status |
|---|---|---|
| _paste from GSC_ | | `blocked-need-export` |

### 2e. `/guide` vs `/travel-guide`

| Item | Detail | Status |
|---|---|---|
| Overlap | Footer: Logistics Guide → `/guide`, Itinerary Guide → `/travel-guide`. Two live indexable pages. | `done` |
| Decision | **Keep both.** Distinct jobs: `/guide` = flights/ferries/permits; `/travel-guide` = days/islands/combos. Differentiated titles/H1s + cross-links. Do not 301 one onto the other. | `done` |

### 2f. Content / ranking (not Coverage)

Coverage only decides **which URLs can rank**. Position for “Andaman tour packages” needs unique package/destination copy, reviews/E-E-A-T, and links.

| Item | Status |
|---|---|
| Query-level title/H1 review for money pages (`/`, `/packages`, hubs) | `done` (`/packages` 2026+prices; location H1s; `/guide` logistics H1; `/travel-guide` itinerary H1) |
| Cut or merge thin near-duplicate blogs | `todo` (needs GSC crawled-not-indexed URL list) |
| Internal links: blogs → packages, destinations → experiences | `done` (packages/destinations heroes + location extras; Wave 1 blogs already cross-link) |
| After deploy: GSC Validate **only** 404, duplicate-canonical, crawled-not-indexed. Do not expect “Page with redirect” to pass. | `todo` |

---

## HTTPS apex, no-slash URLs Google still listed as redirects (20)

Intentional 301s (keep):

- `/blog/bali-vs-andaman-comparison` → `/blog/andaman-vs-bali`
- `/blog/andaman-vegetarian-food-guide-2026` → `/blog/vegetarian-food-in-andaman`
- `/blog/andaman-scuba-prices-2025` → `/blog/andaman-scuba-prices-2026`
- `/blog/andaman-top-things-to-do` → `/blog/andaman-top-things-to-do-2025`
- `/blog/sustainable-packing-list-2026` → `/blog/what-to-pack-for-andaman-trip`
- `/blog/family-friendly-andaman-kids` → `/blog/andaman-family-itinerary`

Live pages that should **200** after deploy (if they still 301, check DirectorySlash / host pretty-URL):

- `/blog/radhanagar-beach-guide-2026`
- `/blog/andaman-vs-maldives-budget`
- `/packages/romantic-island-hideaway`
- `/blog/andaman-tour-packages-guide-2026`
- `/blog/first-timers-guide-andaman-2026`
- `/blog/island-hopping-andaman-guide`
- `/blog/havelock-vs-neil-island-guide-2026`
- `/blog/andaman-trip-cost-complete-breakdown-2026`
- `/blog/andaman-snorkeling-guide-2026`
- `/blog/elephant-beach-havelock-guide-2026`
- `/experiences/trekking`
- `/packages/standard-andaman-package-5n6d`
- `/destinations/elephant-beach`

Ghost now 301’d:

- `/destinations/port-blair` → `/locations/port-blair`

`/locations/port-blair`, `/locations/havelock-island`, `/locations/neil-island` are real pages. GSC rows were http/slash variants.

---

## Live host check

Production **before this deploy** (18 Sep 2026):

| Request | Observed now | Expected after this deploy |
|---|---|---|
| `https://luxuryandamans.com/experiences/trekking` | 200 | 200 |
| `https://luxuryandamans.com/packages/romantic-island-hideaway` | 200 | 200 |
| `https://luxuryandamans.com/locations/port-blair` | 200 | 200 |
| `https://luxuryandamans.com/experiences/trekking/` | 301 → **http://**…/trekking (bug) | 301 → **https://**…/trekking, one hop |
| `https://www.luxuryandamans.com/experiences/trekking` | 301 → https apex, no slash | same, one hop |
| `https://luxuryandamans.com/destinations/port-blair` | 404 | 301 → `/locations/port-blair` |
| `https://luxuryandamans.com/destinations/not-a-real-slug` | 404 | 404 |

Slash-strip used a relative `RewriteRule ^ %1`, so Apache emitted `Location: http://…`. Both `.htaccess` copies now 301 to `https://luxuryandamans.com%1`. Re-run the table after ship.

---

## GSC after deploy

1. Wait for recrawl (days–weeks).
2. Validate: 404, crawled-not-indexed, duplicate canonical.
3. Leave “Page with redirect” alone.
4. Paste new exports into Wave 2 tables and tick rows as you fix them.
