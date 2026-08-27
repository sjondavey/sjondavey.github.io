# Step 1: options and decision

Decide how to generate and host a professional static site with minimum ongoing maintenance, using the existing GoDaddy domain.

## What the site is for

An extended online professional profile, not a publication:

- About / professional profile
- Consulting services and experience
- Selected projects or work history
- CV / résumé-type information
- Occasional documents, reports, or presentations
- Contact information

**Out of scope:** blogging, newsletters, subscribers, comments, user accounts, and other publishing features.

Updates are expected a few times a year. The site should be able to grow later if the consulting practice grows, without having to start over.

## Success criteria

The recommended setup should satisfy all of these:

1. **Edit → publish → forget.** Changing a page or uploading a PDF should not require administering a server, database, or cloud account.
2. **No CMS.** Content is files. No WordPress, Ghost, or similar.
3. **Managed hosting.** No VM, no AWS/Azure to provision, no patches to apply.
4. **Keep the existing domain.** Prefer leaving registration at GoDaddy. Hosting may stay there or sit elsewhere; DNS can point either way.
5. **Low ongoing cost and complexity.** Prefer paying only for the domain unless a paid host clearly reduces hassle.
6. **Room to grow.** A second section, extra documents, or a contact form later should not force a platform change.

## Decision we need to make

Three choices, in this order:

1. **Where the files are hosted** — GoDaddy first, then alternatives if it cannot give the workflow above.
2. **How the site is generated** — which static-site generator (or whether plain HTML is enough).
3. **How a change gets published** — local build and upload, or GitHub (or similar) as the path from edit to live site.

Domain registration can stay at GoDaddy in every serious option. “Keep everything at GoDaddy” is a convenience question, not a technical requirement.

## GoDaddy: what it can and cannot do

GoDaddy sells several different products. Only some of them fit.

| GoDaddy product | Fit for this site |
| --- | --- |
| **Domain registration + DNS** | Yes. Keep this. |
| **Websites + Marketing (Website Builder)** | No. Visual CMS, not Markdown files; lock-in; unused marketing features. |
| **Managed Hosting for WordPress** | No. CMS, updates, plugins, database. |
| **Web Hosting (cPanel)** | Possible for static HTML. You upload built files via File Manager or FTP. No native Markdown → publish pipeline. Recurring hosting cost for a server you do not need. |
| **VPS / dedicated** | No. This is the infrastructure we are trying to avoid. |

**Confirmed against the account (August 2026):** GoDaddy is domain + DNS only. No hosting to reuse. See [`decision.md`](decision.md).

## Hosting options to compare

All of the following can serve a static site on a custom domain with HTTPS. None require a server you administer.

| Option | Publish workflow | Domain stays at GoDaddy? | Typical cost for this site | Notes |
| --- | --- | --- | --- | --- |
| **GoDaddy cPanel** | Build locally, then FTP / File Manager upload | Yes, all in one account | Hosting plan, often ~$10+/month after intro pricing | Works; more moving parts than needed |
| **GitHub Pages** | Push to GitHub; site builds/deploys | Yes (DNS A/CNAME records) | Free for a public repo | Simplest Git-based path; private repo needs GitHub Pro |
| **Cloudflare Pages** | Push to GitHub; Cloudflare builds | Yes (DNS records, or optional nameserver move) | Free for this use | Strong CDN; easy to grow later |
| **Netlify** | Push to GitHub; Netlify builds | Yes (DNS records) | Free tier is enough | Built-in contact forms if wanted later |

Scored in [`decision.md`](decision.md): GitHub Pages over GoDaddy cPanel, Cloudflare Pages, and Netlify.

## Generators to compare (after hosting)

For a file-based professional profile, updated rarely:

| Generator | Why it is a candidate |
| --- | --- |
| **Eleventy (11ty)** | Markdown-first, small, no UI framework required. Easy to understand years later. |
| **Hugo** | Single binary, very fast, no Node.js. Good if we want to avoid a JavaScript toolchain. |
| **Astro** | Still static Markdown, with more design flexibility if the site grows. Slightly more machinery. |
| **Hand-written HTML** | Zero toolchain. Becomes painful once there is a shared layout, several pages, and documents. Unlikely. |

Jekyll is not a leading candidate: it is what GitHub Pages uses by default, but Ruby is extra complexity we do not need. GitHub Pages can host *any* static output via GitHub Actions.

## What is already decided

- Static site, not a CMS.
- Content as Markdown/files.
- Managed hosting, not self-administered infrastructure.
- Existing domain will be used.
- No blog, newsletter, comments, or user accounts.
- Occasional updates only.
- GitHub is acceptable in the publish path.

## Intake (answered)

1. **Domain:** [aleph-one.co](https://www.aleph-one.co/) — Ghost(Pro) live at www.
2. **GoDaddy:** domain only.
3. **Occupying the domain:** Ghost site; `esg.aleph-one.co` DNS still points at an Azure VM (no demo currently live).
4. **Email:** `steven.davey@aleph-one.co` on Google. MX/SPF must not change.
5. **GitHub:** yes, public and private repos. Public site source is acceptable.
6. **Budget:** stop Ghost ($11/month). No appetite for extra hosting if free static hosting works.
7. **Edit loop:** Markdown in this project; publish when ready.
8. **Contact:** existing email on a page (assumed; no form requested).
9. **Documents:** occasional public PDFs/reports/presentations.

Recommendation is in [`decision.md`](decision.md). No hosting account will be created, and no DNS will be changed, until that is agreed.
