# INNOVAX Website — Claude Code Instructions

## Project
Corporate website for INNOVAX — digital transformation, AI consulting, and software engineering firm targeting Morocco, MENA, and Francophone Africa.

## Tech Stack
- Next.js (App Router, TypeScript strict)
- Tailwind CSS v3
- next-intl for bilingual FR/EN i18n
- Vercel deployment

## Commands
- `npm run dev` — dev server on http://localhost:3000
- `npm run build` — production build
- `npm run lint` — ESLint

## Directory Structure
- `src/app/` — App Router pages and layouts
- `src/app/[locale]/` — locale-scoped pages (fr, en)
- `src/components/` — reusable UI components
- `src/lib/` — i18n config, utils
- `src/messages/` — translation JSON files (fr.json, en.json)

## i18n Rules
- Default locale: `fr` (French)
- Secondary locale: `en` (English)
- All user-facing strings MUST come from translation files — no hardcoded text
- RTL not needed (Arabic is aspirational, not v1)

## Coding Rules
- TypeScript strict — no `any`
- Server Components by default; add `"use client"` only when needed (forms, interactive elements)
- Tailwind only — no CSS-in-JS
- No `console.log` in committed code
- Accessible: semantic HTML, aria-labels on icon-only buttons

## Brand
- Primary color: #185FA5 (blue)
- Dark navy: #042C53
- Teal accent: #0F6E56
- Font: system-safe stack, no external fonts in v1
- Logo: INNO in dark, VAX in brand blue

## Deployment
- Host: Vercel
- Domain target: innovax.ma
- Environment variables: none required for v1 (static site)
