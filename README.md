# Wealth Management Website

This repository contains a fully built React + TypeScript + Vite website for a wealth management and financial advisory service. It includes landing pages, service pages, consultation flows, and a responsive UI built with Tailwind CSS and Lucide icons.

## Overview

- Framework: React (v19)
- Bundler: Vite
- Styling: Tailwind CSS v4
- UI Components: shadcn-style button components and custom layout sections
- Routing: React Router DOM v7
- Charts: Recharts

## Features

- Responsive landing page with hero, stats, and feature sections
- Service-specific pages for insurance, mutual funds, health coverage, and agent recruitment
- Dedicated Financial Doctor page with consultation booking flow
- Reusable CTA sections and global navigation
- Footer with contact, office address, and service links
- Built-in WhatsApp chat launcher and consultation page

## Getting Started

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open the local development URL shown in the terminal.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```text
.
├── public/
│   ├── logo-custom.png         # Primary website logo / favicon asset
│   └── ...                    # Static assets served by Vite
├── src/
│   ├── assets/                # Local image assets and graphics
│   ├── components/
│   │   ├── layout/            # Navbar, Footer, AppLayout
│   │   ├── sections/          # Hero, CTA, Features, Stats, Testimonials
│   │   └── ui/                # Shared UI components and utilities
│   ├── lib/                   # Utility helpers
│   ├── pages/                 # Page-level routes and content
│   ├── routes/                # AppRoutes configuration
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── README.md
└── PROJECT_SUMMARY.md
```

## Pages and Content Areas

### Main Pages

- `src/pages/LandingPage.tsx` — homepage with hero, features, testimonials, and navigation tiles
- `src/pages/ServicesPage.tsx` — services overview and process sections
- `src/pages/LifeHealthPage.tsx` — life, health, and protection product details
- `src/pages/AgentRecruitmentPage.tsx` — agent career and training information
- `src/pages/FinancialDoctorPage.tsx` — advisor profile, financial health check, and WhatsApp booking
- `src/pages/ConsultationPage.tsx` — dedicated consultation booking page

### Shared Components

- `src/components/layout/Navbar.tsx` — responsive navigation and action button
- `src/components/layout/Footer.tsx` — contact details, office address, and legal disclosures
- `src/components/sections/CTA.tsx` — reusable call-to-action block
- `src/components/sections/Hero.tsx` — homepage hero section
- `src/components/ui/button.tsx` — shared button variants
- `src/components/ui/WhatsAppFloat.tsx` — floating WhatsApp action button

## Customization Guide

### Branding

- Update the logo asset in `public/logo-custom.png`.
- Change the site title and metadata in `index.html`.
- Update the brand text in the Navbar, Footer, and Hero section.

### Content and Data

Replace the hard-coded arrays in these files to update services and page content:

- `src/pages/ServicesPage.tsx` — services, benefits, and steps
- `src/pages/LifeHealthPage.tsx` — protection overview and feature copy
- `src/pages/AgentRecruitmentPage.tsx` — recruitment process and training modules
- `src/pages/FinancialDoctorPage.tsx` — advisor credentials, outcomes, and quiz copy
- `src/pages/ConsultationPage.tsx` — booking flow and WhatsApp text

### Routes

- `src/routes/AppRoutes.tsx` defines the page routes
- Add new pages by importing them and adding a new `<Route>` entry

### Styling

- Global Tailwind utilities are in `src/index.css`
- Use `className` strings with Tailwind classes across components
- Responsive design uses `sm:`, `md:`, `lg:` breakpoints

## Development Notes

- `npm run dev` starts the Vite development server
- `npm run build` compiles TypeScript and bundles production assets
- `npm run preview` runs the production build locally
- The app is currently set to private with `type: module`

## Data Reuse Tips

To reuse this website for another financial advisor or service brand:

1. Replace branding content in `index.html`, `Navbar.tsx`, `Footer.tsx`, and `Hero.tsx`.
2. Load real copy into pages under `src/pages/`.
3. Swap `public/logo-custom.png` with a new logo and update favicon references.
4. Adjust the contact details in `Footer.tsx` and `ConsultationPage.tsx`.
5. Modify the WhatsApp message text in `src/components/ui/WhatsAppFloat.tsx`.
6. Replace demo graphics in `src/assets/` with client-specific visuals.

## Recommended Enhancements

- Add a CMS or JSON data layer for content-driven pages
- Convert static page sections into reusable React content cards
- Add analytics and SEO metadata for production deployment
- Improve accessibility with `aria-*` attributes and focus states

## Troubleshooting

- If build fails, check for unused imports or invalid Tailwind classes
- Confirm `public/logo-custom.png` exists before launching the app
- Use `npm install` after opening the repo on a new machine

---

This README is designed to help teams reuse the codebase as a complete website foundation for wealth management or financial advisory services.
