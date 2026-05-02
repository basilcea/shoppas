Shoppa Marketing (Next.js)
==========================

Structure
- app/: App Router with a single global layout that wraps all routes
- pages/: Legacy Pages Router (API routes, document/app shell only)
- components/: Reusable UI (NavBar, Footer, Layout, Hero, FAQItem, Section, landing/*)
- styles: Tailwind globals in `app/globals.css`

Pages Implemented (from samples)
- /         → shoppa_landing_page
- /features → platform_features
- /faq      → faq_support
- /privacy  → privacy_policy
- /terms    → terms_of_service

Notes
- A single custom layout is enforced via `app/layout.tsx` which wraps content with `components/Layout` (NavBar + Footer). All app pages share this.

Run
- npm i
- npm run dev
