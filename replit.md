# Anuranjan Website

An editorial personal portfolio site for Anuranjan with a dark default theme, playful alternate themes, project links, social links, and subtle scroll motion.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/nova-website/src/App.tsx` — single-page portfolio content and interactions
- `artifacts/nova-website/src/index.css` — theme tokens, responsive layout, motion, and visual styling
- `artifacts/nova-website/clone-data/` — captured reference HTML, section inventory, and theme tokens
- `artifacts/nova-website/public/images/` — local favicon, Discord avatar, and badge assets

## Architecture decisions

- The portfolio is a frontend-only React + Vite artifact; it does not need API or database state.
- The design preserves the source page's eight theme modes and stores the selected theme in local storage.
- The page is intentionally a single scroll surface with hash navigation and a fixed bottom navigation pill.

## Product

Anuranjan is a personal creative portfolio: visitors can learn about the creator, browse hobbies and the NOVA project, switch visual themes, reroll the hero quote, and open social profiles.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
