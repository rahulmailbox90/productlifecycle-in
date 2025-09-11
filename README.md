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
