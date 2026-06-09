# Cash Clarity Management - Setup & Future Development Guide

This document provides a reference for the current frontend setup, architectural decisions, and an actionable roadmap for future feature enhancements.

---

## What Has Been Built So Far

We have scaffolded and configured a production-ready React landing page with high-end visual design patterns (glassmorphism, vibrant gradients, custom spacing, and responsive structures).

### 1. Technology Stack
*   **Vite + React + TypeScript:** For fast builds, state-of-the-art type safety, and modern compilation.
*   **Tailwind CSS v4:** Standardized using modern CSS-first configuration and `@import "tailwindcss"` syntax inside `src/index.css`.
*   **Shadcn/UI:** Initialized using the `Nova` preset (Radix primitives and Lucide icons support) for custom components.
*   **React Router DOM (v7):** Configured for client-side routing.

### 2. File and Directory Structure
```text
d:\Projects\wealth-management\
├── components.json             # Shadcn/UI settings
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # Root TS configuration
├── tsconfig.app.json           # Application TS rules (paths, compilerOptions)
├── vite.config.ts              # Vite configurations with path alias resolution
└── src/
    ├── main.tsx                # React application entry point
    ├── App.tsx                 # Base wrapper rendering AppRoutes
    ├── index.css               # Global styling, Tailwind imports, CSS themes
    ├── assets/                 # Client assets (logos, images)
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx      # Sticky responsive navigation with mobile drawer
    │   │   └── Footer.tsx      # Multi-column footer with legal and compliance disclosures
    │   ├── sections/
    │   │   ├── Hero.tsx        # Hero section with portfolio statistics card and gradients
    │   │   ├── Stats.tsx       # Core business statistics with subtle animations
    │   │   ├── Features.tsx    # Services grid with customized icons
    │   │   └── CTA.tsx         # Consultation scheduling card with interactive form validation
    │   └── ui/
    │       └── button.tsx      # Customized Shadcn/UI button component
    ├── pages/
    │   └── LandingPage.tsx     # Landing page container
    └── routes/
        └── AppRoutes.tsx       # Navigation routing entry (React Router)
```

### 3. Key Configurations Applied
*   **Path Aliases:** Configured `@/*` to point to `src/*` for clean imports.
*   **Tailwind v4 Integration:** Placed `@tailwindcss/vite` in `vite.config.ts` and loaded the `@import "tailwindcss";` layer base logic in `index.css`.
*   **Social Icons Polyfill:** Implemented custom inline SVG structures for Twitter, LinkedIn, and Facebook to replace deprecated assets from Lucide icons.

---

## Future Feature Roadmap (Ideas to Build on Top)

Here are the logical next phases of development to transform this landing page into a fully-fledged FinTech platform:

### Phase 1: Interactive Client Calculators (Frontend Features)
1.  **Investment & Compound Growth Simulator:**
    *   An interactive slider interface where users can select starting principal, monthly contribution, time horizon, and risk appetite (Conservative, Balanced, Aggressive).
    *   Visual projection chart showing potential growth over time (including comparisons to standard index benchmarks).
2.  **Tax-Loss Harvesting Estimator:**
    *   A simple input form helping users calculate potential annual tax savings based on their current tax bracket and taxable investment capital.

### Phase 2: Client Portal & Secure Authentication
1.  **Authentication Integration:**
    *   Implement user authentication using **Supabase Auth**, **Clerk**, or **Auth0**.
    *   Differentiate between public marketing pages and secure client portals.
2.  **Client Dashboard:**
    *   Dynamic performance page showing real-time valuation of assets.
    *   Document Vault: Secure upload and download center for tax filings, statements, and estate documents.
    *   Secure Messaging: Encryption-backed advisor communication portal.

### Phase 3: PostgreSQL Database & Server Architecture
1.  **Advisor Matchmaking Questionnaire:**
    *   A multi-step onboarding questionnaire storing user inputs in a **PostgreSQL** database (via Prisma or direct PG client).
    *   Backend logic matching users to certified financial planners based on asset range, planning focus (e.g., retirement vs. startup liquidation), and location.
2.  **Lead Capture Dashboard:**
    *   Administrative dashboard for internal advisors to view incoming consultation requests, manage customer lifecycle stages, and schedule calls.

### Phase 4: Rich Animations & Visual Polish
1.  **Framer Motion / Motion Primitives Integration:**
    *   Fade-in effects for scroll transitions.
    *   Counter animation for numbers in the `Stats` section as they scroll into viewport view.
    *   Hover scale effects for dashboard metrics.
