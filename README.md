# Aleph-One

Static site for [aleph-one.co](https://www.aleph-one.co/) — Steven Davey’s professional profile and consulting practice.

Content is Markdown in `src/`. [Eleventy](https://www.11ty.dev/) builds HTML. GitHub Pages hosts the result. The domain stays at GoDaddy.

## Preview locally

In a terminal, from this folder:

```
npm start
```

Then open http://localhost:8080/ in a browser. Leave that terminal open while you look at the site. Saving a file in `src/` refreshes the preview.

**Stop:** click in the terminal that is running `npm start` and press `Ctrl+C`. If it asks whether to terminate, confirm. The site at localhost will stop; that does not affect the live domain.

**Start again:** `npm start` in this folder, same as above.

If http://localhost:8080/ does not load, nothing is running — start it. If the port is already in use, stop the other preview first, then start again.

When a change looks right, commit and push to `main`. GitHub Actions publishes. Nothing on aleph-one.co changes until GoDaddy DNS is updated.

## Publish a preview (before DNS)

1. Create a **public** repository named `sjondavey.github.io` at https://github.com/new (owner: your personal account).
2. Do not add a README, `.gitignore`, or licence — this folder already has them.
3. In this folder:

```
git remote add origin https://github.com/sjondavey/sjondavey.github.io.git
git branch -M main
git push -u origin main
```

4. On the repo: **Settings → Pages → Source: GitHub Actions**. Wait for the Deploy workflow to finish.
5. Open https://sjondavey.github.io/

Do not add a custom domain in Pages settings, and do not change GoDaddy, until you are happy with that preview. `src/CNAME` is kept for the later cutover but is not copied into the built site yet.

## Pages

| URL | File |
| --- | --- |
| `/` | `src/index.md` |
| `/about/` | `src/about.md` |
| `/consulting/` | `src/consulting.md` |
| `/work/` | `src/work.md` |
| `/cv/` | `src/cv.md` |
| `/documents/` | `src/documents.md` |
| `/contact/` | `src/contact.md` |

Logo and tab icon: `src/assets/img/logo.jpg` and `src/assets/img/icon.png`.

## Ghost backup

The old Ghost export is in [`docs/archive/ghost/`](docs/archive/ghost/). It is not part of the published site. Use it if you later want to restore or republish original articles.

## Decision record

Hosting and DNS notes: [`docs/decision.md`](docs/decision.md). Do not change GoDaddy DNS until GitHub Pages is serving the site on `sjondavey.github.io`.
