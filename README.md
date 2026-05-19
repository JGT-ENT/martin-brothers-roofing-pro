# Martin Brothers Roofers — Deploying to Vercel

This project is configured for **optimal Vercel deployment** using TanStack Start with Node SSR.

## Architecture

- **Client bundle** → `dist/client/` → served statically from Vercel's edge CDN
- **SSR handler** → `api/[...all].ts` → Node 20.x serverless function (`iad1` region, 1024 MB, 15s max)
- **Routing** → `vercel.json` rewrites all non-asset requests to the SSR function

## Deploy

1. Push this repo to GitHub.
2. On [vercel.com](https://vercel.com), click **Add New → Project** and import the repo.
3. Vercel auto-detects `vercel.json` — no build settings to change.
4. Click **Deploy**.

## Local development

```bash
bun install
bun run dev
```

Open http://localhost:8080.

## Production preview

```bash
bun run build
npx vercel dev   # or: npx vercel build && npx vercel deploy --prebuilt
```

## Env vars

Add any secrets in the Vercel dashboard under **Project → Settings → Environment Variables**.
Server-only secrets are available via `process.env.*` inside `api/[...all].ts` and server functions.
Client-side build vars must be prefixed `VITE_`.
