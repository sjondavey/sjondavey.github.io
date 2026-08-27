# Ghost export

Backup of the old Aleph-One Ghost publication, taken before cancelling Ghost.

**File:** `aleph-one.ghost.2026-08-27-13-44-24.json`  
**Exported:** 27 August 2026, 13:44 UTC  
**Contents:** 24 posts, plus tags, settings, and the Ghost user record. This is a Ghost JSON export, not a finished website.

## Why it is here

The live site is a static professional profile, not a blog. Keep this file so original articles can be turned into Markdown pages later if needed. Eleventy does not publish this folder.

## How to reuse a post

1. Open the JSON and find the post in `db[0].data.posts` (title, slug, `html` or `lexical`/`mobiledoc` body, `published_at`).
2. Copy the piece you want into `src/` as a Markdown page, or into `src/files/` if it should be a download.
3. Link it from Work or Documents.

Do not import this file back into Ghost unless you are restoring the old publication on purpose.
