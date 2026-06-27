# Wealth Management Website Summary

This document explains the current website structure, how the pages are organized, and what content should be updated when reusing this codebase for a complete financial advisory website.

## Project Purpose

This site is built as a modern wealth and financial planning website that can be reused for:

- financial advisors
- insurance agents
- mutual fund distributors
- financial coaches
- agent recruitment portals

The site is designed to be responsive, easy to customize, and fast to build with Vite.

## Technology Stack

- React 19
- TypeScript 6
- Vite 8
- Tailwind CSS 4
- React Router DOM 7
- Lucide React icons
- Recharts for data visuals
- shadcn/ui button system

## Content and Page Breakdown

### Home / Landing Page

File: `src/pages/LandingPage.tsx`

Purpose: main homepage with brand positioning, service cards, testimonials, stats, and navigation to key pages.

Key sections:
- Hero introduction
- Stats and trust signals
- Founder/Financial Doctor summary
- Service feature cards
- Call to action to book consultation

### Services Page

File: `src/pages/ServicesPage.tsx`

Purpose: present the core service offerings and process steps.

Key sections:
- Service cards for investment, protection, retirement, agent training, and financial health checkup
- Why choose us benefits section
- How it works process section
- Action button linking to Financial Doctor review

### Life & Health Page

File: `src/pages/LifeHealthPage.tsx`

Purpose: showcase life insurance, health coverage, and protection planning.

Key sections:
- Coverage overview
- Protection clinic details
- Claims support and family safety
- Benefits of long-term protection policies

### Agent Recruitment Page

File: `src/pages/AgentRecruitmentPage.tsx`

Purpose: present recruitment, training, and agent career opportunities.

Key sections:
- Career pathway and mentorship
- Training modules and onboarding steps
- Team culture and success outcomes

### Financial Doctor Page

File: `src/pages/FinancialDoctorPage.tsx`

Purpose: advisor profile page, advisor story, financial health assessment, and WhatsApp booking guidance.

Key sections:
- Advisor credentials and trust signals
- Financial health quiz
- SIP and savings planning
- Consultation CTA

### Consultation Page

File: `src/pages/ConsultationPage.tsx`

Purpose: dedicated booking page for consultations.

Key features:
- prefilled WhatsApp booking link
- contact details and consultation benefits
- service-focused booking narrative

## Reuse Guidelines

### Replace text content

Update these files with actual content:

- `src/components/sections/Hero.tsx`
- `src/components/sections/CTA.tsx`
- `src/pages/ServicesPage.tsx`
- `src/pages/LifeHealthPage.tsx`
- `src/pages/AgentRecruitmentPage.tsx`
- `src/pages/FinancialDoctorPage.tsx`
- `src/pages/ConsultationPage.tsx`

### Update branding

- `public/logo-custom.png` — site logo and favicon
- `index.html` — title, description, keywords, and OG metadata
- `src/components/layout/Navbar.tsx` — brand text and CTA labels
- `src/components/layout/Footer.tsx` — office details, contact, and disclosures

### Routing and navigation

- `src/routes/AppRoutes.tsx` defines current routes and page order.
- Add new route entries for additional pages.
- Update `<Link>` and `NavLink` targets in the navbar and page sections.

### Data and content sources

Use this file as a template for proper data placement:

- service definitions in `services`, `serviceBenefits`, and `howItWorks`
- page headings and descriptions in each page component
- contact and WhatsApp messaging in `Footer.tsx` and `src/components/ui/WhatsAppFloat.tsx`

## Deployment Checklist

1. Replace placeholder text with client-specific copy.
2. Replace `public/logo-custom.png` and any hero assets.
3. Confirm contact phone number, address, and WhatsApp number.
4. Build the app with `npm run build`.
5. Host the output from `dist/` on any static site host.

## Recommended Improvements

- Add a content data layer (JSON, CMS, or headless API) for service listings
- Add multi-language support if targeting broader markets
- Add an `about` page or team section for stronger trust signals
- Add SEO metadata for each page

## Notes for Reuse

This codebase is intentionally structured for content-driven reuse. The page components combine presentational layout and data arrays, so replacing text and visuals will convert this into a complete website quickly.

For future expansion, create new reusable sections under `src/components/sections/` and import them into page files.

---

Use this document as the reference checklist when adapting the product for a new financial services brand or advisor website.