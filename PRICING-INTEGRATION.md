# Pricing integration

This project uses React + Vite and TypeScript, not Next.js. Tailwind CSS v4 is configured with `@tailwindcss/vite`; TypeScript was already installed.

- UI components: `src/components/ui` (import as `@/components/ui`). Keeping reusable shadcn primitives here makes aliases and future CLI-generated components consistent.
- Styles and theme tokens: `src/index.css`.
- Utilities: `src/lib/utils.ts`.
- Media-query hook: `src/hooks/use-media-query.ts`.
- shadcn configuration: `components.json`.

Setup is already complete. On a fresh checkout run `npm install`, then `npm run dev`. To add a new shadcn component, use `npx shadcn@latest add <component>`. For a new Vite project without this configuration, first install Tailwind (`npm install tailwindcss @tailwindcss/vite`), configure its Vite plugin and the `@/*` TypeScript/Vite aliases, then run `npx shadcn@latest init`.

`Pricing` accepts plans, an optional title and description. It owns its monthly/annual state and needs no context provider. Annual prices are monthly equivalents; the annual total is shown below. `demo.tsx` contains the supplied sample plans. All demo CTAs target the existing contact section because this app has no signup route.

`App.tsx` mounts the demo in the landing page's `pricingContent` slot. Cards stack on mobile and use three columns on desktop. Reduced-motion preferences disable entrance/number animations and confetti. No image assets are needed; icons use Lucide.

Compatibility fixes include native anchors instead of `next/link`, a correctly associated switch label, valid multiline strings, removal of unsupported NumberFlow props, and removal of the demo's nested scroll container. Tailwind Preflight is omitted to preserve the surrounding page; its legacy resets exclude pricing controls and text.

Validation: `npm run build`; browser checks for desktop/mobile columns and monthly/annual switching.
