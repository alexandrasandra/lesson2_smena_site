# Smena Landing Page Design

## Overview
Landing page for the Smena app — a job aggregation platform for part-time work in Russia. Built inside the existing `smena-ds` Next.js project as the root route `/`.

## Decisions
- **Location:** Inside `smena-ds`, route `/` (replaces current redirect to `/design-system`)
- **Fidelity:** Close to reference (`smena.app_.png`), using design system tokens
- **Components:** Use existing DS components + install new shadcn components as needed
- **Architecture:** Each section is a separate component in `src/app/sections/`

## Sections

### 1. Header (sticky navbar)
- Logo left, nav links center, CTA button right
- Components: `SmenaButton`

### 2. Hero — App promotion with screenshots
- Blue gradient background, headline, app screenshots, download buttons
- Components: `SmenaButton`, `SmenaBadge`

### 3. Available vacancies
- `VacancyCard` grid (2-3 per row), profession filter tags
- Components: `VacancyCard`, `SmenaBadge`, `SmenaButton`

### 4. Advantages
- 3-4 feature cards with lucide icons
- Components: `SmenaCard`

### 5. Partners
- Partner logos in a row
- Components: `PartnerLogo`

### 6. Target audience
- Cards for each audience segment (students, retirees, etc.)
- Components: `SmenaCard`, `SmenaBadge`

### 7. Reviews
- Carousel of review cards with avatar, name, text, rating
- New: `shadcn carousel`
- Existing: `SmenaCard`, `Avatar`

### 8. Comparison table
- Smena vs competitors table with checkmarks
- Components: `SmenaCard`

### 9. Installation steps + QR code
- 3 numbered steps, QR code (`Smena_QR.svg`), download buttons
- Components: `SmenaButton`, `SmenaCard`

### 10. FAQ
- Accordion with questions and answers
- Components: `Accordion` (shadcn, already installed)

### 11. Footer
- Logo, links, copyright, contacts

## Assets Available
- **Logos:** `documentation/Smena design system/logo/`
- **App screenshots:** `documentation/Smena design system/app screenshots/`
- **Partner logos:** `documentation/Smena design system/partners/`
- **QR code:** `documentation/Smena design system/QR/Smena_QR.svg`
- **Professions:** `documentation/Smena design system/professions/`
- **Icons:** lucide-react (already installed)

## Tech Stack
- Next.js 16 + React 19 + TypeScript
- Tailwind CSS v4 with Smena design tokens
- shadcn/ui components + custom Smena components
- All data is hardcoded (UI-only, no API calls)
