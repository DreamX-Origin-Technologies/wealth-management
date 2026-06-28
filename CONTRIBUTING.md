# Contributing to Wealth Management Website

Thank you for helping improve this React + TypeScript + Vite project.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the app in your browser and verify changes.

## Branching and Pull Requests

- Create a descriptive branch name, for example:
  - `feature/consultation-route`
  - `fix/mobile-layout`
- Keep changes focused and small.
- Open a pull request with a clear summary of what changed and why.

## Code Style and Quality

- Use TypeScript for new code.
- Keep JSX clean and use semantic HTML where possible.
- Prefer Tailwind CSS utility classes for styling.
- Use existing component patterns in `src/components` and `src/pages`.
- Run linting before committing:
  ```bash
  npm run lint
  ```

## Testing Your Changes

- Validate the app builds successfully:
  ```bash
  npm run build
  ```
- Preview the build if needed:
  ```bash
  npm run preview
  ```

## Where to Update Content

- `src/pages/` — page-specific content and layout
- `src/components/sections/` — reusable landing page sections
- `src/components/layout/` — navigation, footer, and layout wrappers
- `src/components/ui/` — shared UI building blocks
- `src/routes/AppRoutes.tsx` — routing configuration

## Reporting Issues

- Open an issue with steps to reproduce any bug.
- Include screenshots or terminal output when helpful.

## Helpful Notes

- The project uses:
  - React 19
  - TypeScript 6
  - Vite 8
  - Tailwind CSS v4
  - React Router DOM v7
  - Lucide icons and Recharts

Thanks for contributing!