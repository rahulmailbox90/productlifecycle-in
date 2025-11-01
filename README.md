# productlifecycle.in — Starter

A small Next.js + Tailwind starter for productlifecycle.in — demo products, docs and simple interactive sandbox.

## Quick start (local)

1. Node 18+
2. Install:
   ```bash
   npm install
   ```
3. Run dev:
   ```bash
   npm run dev
   ```
4. Open http://localhost:3000

## Deploy

Recommended: push to GitHub and connect repository to Vercel (https://vercel.com)

- Vercel will auto-detect Next.js and build with `npm run build`.
- No extra server required; APIs use Next.js API routes.

## Repo structure

- `pages/` — Next.js pages + API routes (`pages/api/*`)
- `components/` — UI components
- `lib/products.js` — sample data (BRD/FSD markdown)
- `styles/` — tailwind styles

## Next steps

- Replace mock data with real docs (store markdown files in a `content/` folder or a separate git repo).
- Add authentication (NextAuth) if you want gated content or user accounts.
- Add SSO for corporate customers.
- Add audit logs & analytics.

## Logo / favicon

To add the supplied logo to the site, place the image file at:

```
public/images/productlifecycle-logo.png
```

Recommended formats/sizes:
- PNG or ICO for broad browser support (favicon).
- 512×512 (or larger) for good quality; Next.js will serve it as a static asset.
- Optionally add an `apple-touch-icon.png` (180×180) for iOS if you want a native icon.

After adding the image, run the dev server or build to verify the logo appears in the header and the favicon is used by the browser.

