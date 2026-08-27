# Decision: how to run aleph-one.co

**Status:** agreed. Site is being built in this repo. DNS is unchanged until GitHub Pages is live.

Keep the domain and DNS at GoDaddy. Do not buy GoDaddy hosting. Replace Ghost with a static site generated from Markdown in this repo, published to GitHub Pages when you push. Email and Azure demo subdomains stay as they are.

## Facts we confirmed

| Item | Finding |
| --- | --- |
| Domain | [aleph-one.co](https://www.aleph-one.co/) |
| GoDaddy | Domain + DNS only (`ns23` / `ns24.domaincontrol.com`) |
| Live site today | Ghost(Pro) at `www` → `aleph-one.ghost.io`. Apex `A` record `178.128.137.126`. Tagline *From idea to algorithm*; one post (Apr 2023); About is mostly Ghost subscribe copy. |
| Email | `steven.davey@aleph-one.co` via Google (`smtp.google.com`, SPF includes `_spf.google.com`) |
| Other hostnames | `esg.aleph-one.co` → Azure (`4.221.109.167`). Pattern: add a GoDaddy record when a demo VM is needed. |
| GitHub | Already used for public and private repos |
| Ghost cost | About $11/month; blogging has stopped |
| Preferred edit loop | Write Markdown in this project; publish when ready |

## Why not GoDaddy hosting

GoDaddy can serve static HTML on a cPanel plan, but that means a new paid product, FTP/File Manager uploads, and a control panel you do not need. It does not give “edit Markdown here → publish”. Website Builder and WordPress are a worse fit.

The domain already does its job at GoDaddy: registration, DNS for Google mail, and one-off subdomain records for Azure. That should stay.

## Recommendation

| Choice | Decision |
| --- | --- |
| **Host** | GitHub Pages (free on a public repo) |
| **Generate** | [Eleventy](https://www.11ty.dev/) — Markdown pages, HTML layouts, a `files/` folder for PDFs |
| **Publish** | Edit here → preview locally if you want → commit and push when ready. GitHub Actions builds and publishes. Nothing goes live until you push. |
| **DNS** | Leave nameservers at GoDaddy. Change only the apex `A` records and the `www` CNAME. Do not touch MX, SPF/TXT, or records such as `esg`. No wildcard `*`. |
| **Email** | Unchanged |
| **Ghost** | Export anything worth keeping, switch DNS to the new site, then cancel in Ghost Admin → Billing. The site stays up until the billing period ends; cancel after cutover so you are not paying for both. |
| **Cost after cutover** | Domain at GoDaddy only. Ghost $11/month stops. GitHub Pages $0. |

Cloudflare Pages and Netlify would also work, and Cloudflare can build from a **private** GitHub repo on the free plan. GitHub Pages is the better default because you already live in GitHub and the site content will be public anyway. If you later want the *source* private without paying for GitHub Pro, move the same Eleventy project to Cloudflare Pages; DNS stays at GoDaddy.

Do not move nameservers to Cloudflare. That would change how you create `esg`-style Azure records and is extra complexity for no gain.

## What you would change in GoDaddy DNS (step 2, not now)

Only after the new site is built and GitHub Pages is serving it on the default `*.github.io` URL.

**Leave unchanged:** MX (Google), TXT/SPF, and any hostname other than `@` and `www` (including `esg`).

**Replace:**

| Record | Today | After |
| --- | --- | --- |
| `A` `@` | `178.128.137.126` (Ghost) | GitHub Pages: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| `CNAME` `www` | `aleph-one.ghost.io` | `sjondavey.github.io` |

Optional: matching `AAAA` records for IPv6. Canonical URL: `https://www.aleph-one.co/` (matches the current Ghost URL); apex redirects to `www`.

## Day-to-day after launch

1. Open this project, edit a Markdown file (or drop a PDF into `files/`).
2. Optionally preview with Eleventy locally.
3. When it looks right, commit and push.
4. Wait a minute. The live site updates. Stop thinking about it.

A few times a year is the expected cadence. Adding `something.aleph-one.co` for an Azure demo remains a separate GoDaddy DNS record, unrelated to this site.

## Out of scope (still)

Blog index, Ghost members, subscribe, comments, newsletters, user accounts. Contact can be the existing address on a page.

## Before building (step 2)

Agree this stack, then we need:

- GitHub username or org for the public repo
- Whether to keep the existing tagline, Deutsch quote, and the 2023 LLM article (as a static page, not a blog)
- Any CV, photo, or documents to include from the start

No DNS changes and no Ghost cancellation until the new site is ready to go live.
