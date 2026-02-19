# Smena Design System — Design Document
**Date:** 2026-02-18
**Scope:** Design system only (tokens + components + kitchen-sink page)
**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS 3 · shadcn/ui · Inter

---

## 1. Context

Smena is a job-aggregator for blue-collar ("линейный") workers in Russia (currently St. Petersburg).
Primary device is mobile. Key UX requirements: large tap targets, high contrast, readable typography.

The brandbook is based on **Ant Design System for Figma** (antforfigma.com) — a three-layer token model
(Seed → Map/Primitive → Alias/Semantic). We mirror this model in CSS variables.

Partners: Auchan, Azbuka Vkusa, Lenta, Magnit, Spar
Professions: kassir, komplectovshik, komplektovshik_sklad, pecar, povar, rtz, uborshik, upakivshik

---

## 2. Architecture

```
smena-ds/
├── src/
│   ├── app/
│   │   ├── design-system/page.tsx   ← kitchen-sink showcase
│   │   ├── globals.css              ← all CSS token layers
│   │   └── layout.tsx
│   ├── components/
│   │   ├── ui/                      ← shadcn auto-generated
│   │   └── smena/                   ← Smena wrappers + composites
│   │       ├── Button.tsx
│   │       ├── Badge.tsx
│   │       ├── Input.tsx
│   │       ├── Card.tsx
│   │       ├── VacancyCard.tsx
│   │       ├── PartnerLogo.tsx
│   │       ├── ProfessionImage.tsx
│   │       └── index.ts
│   ├── lib/
│   │   ├── assets.ts                ← typed asset registries
│   │   └── utils.ts                 ← cn() helper
│   └── public/assets/
│       ├── partners/
│       ├── professions/
│       ├── logo/
│       ├── app-screenshots/
│       └── qr/
├── tailwind.config.ts
└── components.json
```

---

## 3. Token System (Approach B — Dual-layer)

### Layer 1 — Primitive palette (CSS variables in :root)
Full Ant Design colour scales for blue (1–10), gold (1–10), red (1–10), green (1–10).

Key seeds:
- `--smena-blue-6: #1677ff` — primary CTA
- `--smena-gold-6: #faad14` — warning / accent
- `--smena-red-6:  #ff4d4f` — error / danger
- `--smena-green-6:#52c41a` — success
- `--smena-text-base: #282A3C` — text base colour

### Layer 2 — Semantic tokens
Mirror brandbook variable names exactly:
- `--color-primary`, `--color-primary-hover`, `--color-primary-active`, `--color-primary-bg`
- `--color-text`, `--color-text-secondary`, `--color-text-tertiary`, `--color-text-quaternary`
- `--color-bg-layout`, `--color-bg-container`, `--color-bg-elevated`
- `--color-border`, `--color-border-secondary`
- `--color-fill`, `--color-fill-secondary`, `--color-fill-tertiary`
- `--color-success`, `--color-warning`, `--color-error`, `--color-info`

### Layer 3 — shadcn slot mapping
Map shadcn's built-in CSS variable names to Layer 2:
- `--background` → `--color-bg-container`
- `--foreground` → `--color-text`
- `--primary` → `--color-primary`
- `--primary-foreground` → `#ffffff`
- `--destructive` → `--color-error`
- `--border` → `--color-border`
- `--muted` → `--color-bg-layout`
- `--muted-foreground` → `--color-text-secondary`

### Dark mode
Only Layer 2 values change under `.dark {}`. Layer 1 primitive values stay constant.

### Tailwind config extensions
```ts
colors: {
  primary, 'primary-hover', 'primary-active', 'primary-bg',
  'text-base', 'text-secondary', 'text-tertiary',
  'bg-layout', 'bg-container', 'bg-elevated',
  border, 'border-secondary',
  success, warning, error,
}
borderRadius: { xs:'2px', sm:'4px', DEFAULT:'6px', lg:'8px' }
fontSize: { sm, base, lg } with correct line-heights
boxShadow: { card, dropdown }
fontFamily: { sans: ['Inter', 'sans-serif'] }
```

---

## 4. Components

### shadcn installs (src/components/ui/)
button · input · card · badge · select · checkbox · tabs · accordion · avatar · separator · skeleton

### Smena wrappers (src/components/smena/)

| Component | Key additions |
|---|---|
| `SmenaButton` | `size` → maps to 40px (LG) control height for mobile; `danger` variant |
| `SmenaInput` | `status: 'error' \| 'warning' \| 'success'` with brandbook border colours |
| `SmenaBadge` | `status: 'success' \| 'error' \| 'processing' \| 'warning' \| 'default'` dot variant |
| `SmenaCard` | borderRadiusLG (8px), card shadow token, header/body/footer slots |
| `VacancyCard` | Composite: PartnerLogo + ProfessionImage + salary + SmenaBadge + SmenaButton |
| `PartnerLogo` | `partner: 'auchan' \| 'magnit' \| 'lenta' \| 'spar' \| 'azbuka_vkusa'`; `size: 'full' \| 'small'` |
| `ProfessionImage` | `profession: 'kassir' \| 'povar' \| ...`; `variant: 1 \| 2 \| 3` |

### Asset registry (src/lib/assets.ts)
Typed `PARTNERS` and `PROFESSIONS` maps — keyed by slug, satisfies a typed interface.
All paths resolve to `/assets/...` in public/.

---

## 5. Kitchen-Sink Page (/design-system)

Sticky sidebar nav (desktop) / horizontal scrolling pill nav (mobile).

Sections:
1. **Colors** — primitive palette grid + semantic token swatches
2. **Typography** — H1→H5 + Base/LG/SM specimens, weight matrix
3. **Spacing & Radius** — visual spacing scale + radius pills
4. **Shadows** — 3 shadow demonstration cards
5. **Buttons** — all variants × sizes × states (Primary, Default, Dashed, Text, Danger)
6. **Inputs & Forms** — all states + prefix/suffix/addon examples
7. **Badges** — all status dots + ribbon variants
8. **Cards** — SmenaCard variants
9. **Vacancy Cards** — VacancyCard with real partner logos + profession photos
10. **Partners & Assets** — partner logos grid, profession photos grid, app screenshot mockups, QR code

---

## 6. Key Constraints

- No default Tailwind colours used unless they match the brandbook exactly
- All touch targets ≥ 40px height (mobile-first, blue-collar users)
- High contrast: minimum AA compliance on primary backgrounds
- TypeScript throughout — named exports only
- Asset filenames with `.png.png` double-extension (kassir_2, komplectovshik_2, komplectovshik_3) handled in assets.ts
