# Sakthi Financial Doctor - Setup & Reference Guide

This document provides a reference for the localized frontend setup, architectural decisions, and N. Sakthi's service offerings.

---

## What Has Been Built So Far

We have customized the React landing page for **N. Sakthi - Sakthi Financial Doctor**, structuring the branding, stats, and offerings according to his professional credentials.

### 1. Technology Stack
*   **Vite + React + TypeScript:** For fast builds and type safety.
*   **Tailwind CSS v4:** Integrated using `@tailwindcss/vite` and `@import "tailwindcss"` in `src/index.css`.
*   **Shadcn/UI:** Nova preset with Radix primitives.
*   **React Router DOM (v7):** For client-side routing.

### 2. File and Directory Structure
```text
d:\Projects\wealth-management\
├── components.json             # Shadcn/UI configuration
├── package.json                # Project dependencies and run scripts
├── tsconfig.json               # Root TS configuration
├── tsconfig.app.json           # Application TS rules (paths, compilerOptions)
├── vite.config.ts              # Vite configurations with path alias resolution
└── src/
    ├── main.tsx                # React application entry point
    ├── App.tsx                 # Base wrapper rendering AppRoutes
    ├── index.css               # Global styling, Tailwind v4 layers, custom base
    ├── assets/                 # Client assets
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx      # HeartPulse logo, custom links, consultation button
    │   │   └── Footer.tsx      # N. Sakthi credentials, Tiruvannamalai office, LIC disclosures
    │   ├── sections/
    │   │   ├── Hero.tsx        # Hero section with N. Sakthi bio, Chairman's club, and asset card
    │   │   ├── Stats.tsx       # MDTR USA, Chairman's Club, and Years of Experience metrics
    │   │   ├── Features.tsx    # Services offered grid (LIC, Mutual Funds, Agent Recruitment)
    │   │   └── CTA.tsx         # Mobile and select option consultation request form
    │   └── ui/
    │       └── button.tsx      # Custom buttons
    ├── pages/
    │   └── LandingPage.tsx     # Landing page layout orchestrator
    └── routes/
        └── AppRoutes.tsx       # Routing logic
```

### 3. Localization Details Applied
*   **Brand Identity:** Updated all references from "Cash Clarity" to "Sakthi Financial Doctor".
*   **Achievements Panel:** Localized to show N. Sakthi's 37+ Years of Experience, 3,500+ Happy Clients, 31 Years Chairman's Club Member, and 15 Years MDRT USA Member.
*   **LIC and Mutual Fund Alignment:** Custom layout for portfolios (Equities/Mutual Funds - 45%, LIC Policies - 35%, Health & Gen Insurance - 20%).
*   **Contact & Footers:** Added address and phone details (+91 94432 43223, Tiruvannamalai) and Indian insurance/mutual funds compliance disclosures.
