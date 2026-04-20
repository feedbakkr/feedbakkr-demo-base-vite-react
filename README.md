# feedbakkr-demo-base-vite-react

A small Vite + React + TypeScript demo app for the **Compression Labs** product. This is a _base_ repo for the Feedbakkr integration walkthroughs — it does **not** yet integrate Feedbakkr. Future branches in the demo series will layer the integration on top of this starter.

## What's here

- A multi-page marketing + docs site with a single, shared design language.
- React Router routes:
  - `/` — Home (hero, features, how it works, mock stats, closing CTA)
  - `/features` — Feature overview
  - `/docs` — Documentation index
  - `/docs/getting-started`
  - `/docs/sdk-setup`
  - `/docs/troubleshooting`
  - `/contact` — Contact form (UI only; no submission)
  - `/about`
  - `*` — 404 page
- A first-run "demo project" modal that stores its acknowledgement under the local-storage key `feedbakkr-demo-ack` (consistent across all `feedbakkr-demo-base-*` repos).
- CSS Modules per component. One shared token file at `src/index.css` covers the palette (slate + teal), typography, and spacing.
- All page copy lives in `src/content/site.json` so future branches can evolve text without hunting through components.

## Getting started

```bash
pnpm install
pnpm dev        # http://localhost:5173
```

## Build

```bash
pnpm build      # typecheck + production build into dist/
pnpm preview    # serve the built dist/
```

## Part of the Feedbakkr demo family

This repo is one of seven base demos, each reimplementing the same small site in a different framework:

- `feedbakkr-demo-base-vite-react` _(this repo)_
- `feedbakkr-demo-base-react-router-7`
- `feedbakkr-demo-base-next`
- `feedbakkr-demo-base-vue-vite`
- `feedbakkr-demo-base-nuxt`
- `feedbakkr-demo-base-astro`
- `feedbakkr-demo-base-sveltekit`

All seven share the same content, navigation, pages, palette, and modal so the Feedbakkr integration guides can demonstrate the same steps against every framework consistently.

## Intentionally simple

This project avoids:

- authentication, backend APIs, databases
- analytics, CMS integration, feature flags
- heavy form frameworks, global state managers
- production deployment configuration

It is optimised for readability and extensibility, not for production use.
