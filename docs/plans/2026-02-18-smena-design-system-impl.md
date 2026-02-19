# Smena Design System Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Scaffold a Next.js 14 design system ("Smena DS") with a dual-layer CSS token system, shadcn/ui-based Smena components, and a `/design-system` kitchen-sink showcase page.

**Architecture:** Three-layer CSS variables (primitive → semantic → shadcn slots) defined in `globals.css`; Tailwind config extended with Smena tokens; shadcn components used as base with typed Smena wrappers on top; kitchen-sink page is a single scrollable Next.js App Router page.

**Tech Stack:** Next.js 14 (App Router) · TypeScript 5 · Tailwind CSS 3 · shadcn/ui · Inter (Google Fonts) · next/image

---

## Task 1: Scaffold the Next.js project

**Files:**
- Create: `smena-ds/` (via create-next-app)

**Step 1: Run create-next-app**

```bash
cd "/Users/alexandrasandra/Smena priject 1" && npx create-next-app@latest smena-ds \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --no-git
```

Expected: `smena-ds/` directory created with `src/app/`, `tailwind.config.ts`, `tsconfig.json`.

**Step 2: Verify it starts**

```bash
cd "/Users/alexandrasandra/Smena priject 1/smena-ds" && npm run build
```

Expected: Build succeeds with no errors.

**Step 3: Commit**

```bash
cd "/Users/alexandrasandra/Smena priject 1/smena-ds" && git init && git add . && git commit -m "chore: scaffold Next.js 14 project"
```

---

## Task 2: Install shadcn/ui

**Files:**
- Create: `smena-ds/components.json`
- Create: `smena-ds/src/lib/utils.ts`
- Create: `smena-ds/src/components/ui/` (auto-generated)

**Step 1: Init shadcn**

```bash
cd "/Users/alexandrasandra/Smena priject 1/smena-ds" && npx shadcn@latest init
```

When prompted:
- Style: **Default**
- Base color: **Slate** (we'll override all values immediately)
- CSS variables: **Yes**

**Step 2: Install all required components in one command**

```bash
npx shadcn@latest add button input card badge select checkbox tabs accordion avatar separator skeleton
```

Expected: `src/components/ui/` contains `button.tsx`, `input.tsx`, `card.tsx`, `badge.tsx`, etc.

**Step 3: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: No errors.

**Step 4: Commit**

```bash
git add . && git commit -m "chore: install shadcn/ui with base components"
```

---

## Task 3: Copy assets to public/

**Files:**
- Create: `smena-ds/public/assets/partners/`
- Create: `smena-ds/public/assets/professions/`
- Create: `smena-ds/public/assets/logo/`
- Create: `smena-ds/public/assets/app-screenshots/`
- Create: `smena-ds/public/assets/qr/`

**Step 1: Create directories and copy assets**

```bash
BASE="/Users/alexandrasandra/Smena priject 1"
DS="$BASE/smena-ds/public/assets"

mkdir -p "$DS/partners" "$DS/professions" "$DS/logo" "$DS/app-screenshots" "$DS/qr"

cp "$BASE/documentation/Smena design system/partners/"* "$DS/partners/"
cp "$BASE/documentation/Smena design system/professions/"* "$DS/professions/"
cp "$BASE/documentation/Smena design system/logo/"* "$DS/logo/"
cp "$BASE/documentation/Smena design system/app screenshots/"* "$DS/app-screenshots/"
cp "$BASE/documentation/Smena design system/QR/"* "$DS/qr/"
```

**Step 2: Verify files copied**

```bash
ls "/Users/alexandrasandra/Smena priject 1/smena-ds/public/assets/partners/"
```

Expected: auchan_logo_full.jpg, magnit_logo_full.png, lenta_logo_full.png, spar_logo_full.png, azbuka_vkusa_logo_full.png (and small variants).

**Step 3: Commit**

```bash
git add public/assets/ && git commit -m "chore: add brand assets to public/"
```

---

## Task 4: Configure CSS token layers (globals.css)

**Files:**
- Modify: `smena-ds/src/app/globals.css` (replace entirely)

**Step 1: Replace globals.css with the full three-layer token system**

```css
/* smena-ds/src/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ═══════════════════════════════════════════════
   LAYER 1 — Primitive palette (Ant Design scales)
   ═══════════════════════════════════════════════ */
:root {
  /* Blue */
  --smena-blue-1: #e6f4ff;
  --smena-blue-2: #bae0ff;
  --smena-blue-3: #91caff;
  --smena-blue-4: #69b1ff;
  --smena-blue-5: #4096ff;
  --smena-blue-6: #1677ff;
  --smena-blue-7: #0958d9;
  --smena-blue-8: #003eb3;
  --smena-blue-9: #00258a;
  --smena-blue-10: #000e61;

  /* Gold (Warning / Accent) */
  --smena-gold-1: #fffbe6;
  --smena-gold-2: #fff1b8;
  --smena-gold-3: #ffe58f;
  --smena-gold-4: #ffd666;
  --smena-gold-5: #ffc53d;
  --smena-gold-6: #faad14;
  --smena-gold-7: #d48806;
  --smena-gold-8: #ad6800;
  --smena-gold-9: #874d00;
  --smena-gold-10: #613400;

  /* Red (Error / Danger) */
  --smena-red-1: #fff1f0;
  --smena-red-2: #ffccc7;
  --smena-red-3: #ffa39e;
  --smena-red-4: #ff7875;
  --smena-red-5: #ff4d4f;
  --smena-red-6: #f5222d;
  --smena-red-7: #cf1322;
  --smena-red-8: #a8071a;
  --smena-red-9: #820014;
  --smena-red-10: #5c0011;

  /* Green (Success) */
  --smena-green-1: #f6ffed;
  --smena-green-2: #d9f7be;
  --smena-green-3: #b7eb8f;
  --smena-green-4: #95de64;
  --smena-green-5: #73d13d;
  --smena-green-6: #52c41a;
  --smena-green-7: #389e0d;
  --smena-green-8: #237804;
  --smena-green-9: #135200;
  --smena-green-10: #092b00;

  /* Text base colour */
  --smena-text-base: 40, 42, 60;   /* RGB — used with alpha */

  /* ═══════════════════════════════════════════════
     LAYER 2 — Semantic tokens (mirrors brandbook)
     ═══════════════════════════════════════════════ */

  /* Primary */
  --color-primary:         var(--smena-blue-6);
  --color-primary-hover:   var(--smena-blue-5);
  --color-primary-active:  var(--smena-blue-7);
  --color-primary-bg:      var(--smena-blue-1);
  --color-primary-bg-hover:var(--smena-blue-2);
  --color-primary-border:  var(--smena-blue-3);

  /* Text */
  --color-text:            rgba(var(--smena-text-base), 0.88);
  --color-text-secondary:  rgba(var(--smena-text-base), 0.65);
  --color-text-tertiary:   rgba(var(--smena-text-base), 0.45);
  --color-text-quaternary: rgba(var(--smena-text-base), 0.25);
  --color-text-heading:    var(--color-text);
  --color-text-disabled:   var(--color-text-quaternary);
  --color-text-placeholder:var(--color-text-quaternary);
  --color-text-light-solid:#ffffff;

  /* Background */
  --color-bg-layout:       #f5f5f5;
  --color-bg-container:    #ffffff;
  --color-bg-elevated:     #ffffff;
  --color-bg-spotlight:    rgba(var(--smena-text-base), 0.85);
  --color-bg-mask:         rgba(0, 0, 0, 0.45);

  /* Border */
  --color-border:          #d9d9d9;
  --color-border-secondary:#f0f0f0;

  /* Fill */
  --color-fill:            rgba(var(--smena-text-base), 0.15);
  --color-fill-secondary:  rgba(var(--smena-text-base), 0.06);
  --color-fill-tertiary:   rgba(var(--smena-text-base), 0.04);
  --color-fill-quaternary: rgba(var(--smena-text-base), 0.02);

  /* Status */
  --color-success:         var(--smena-green-6);
  --color-success-bg:      var(--smena-green-1);
  --color-success-border:  var(--smena-green-3);
  --color-success-hover:   var(--smena-green-5);
  --color-success-active:  var(--smena-green-7);

  --color-warning:         var(--smena-gold-6);
  --color-warning-bg:      var(--smena-gold-1);
  --color-warning-border:  var(--smena-gold-3);
  --color-warning-hover:   var(--smena-gold-5);
  --color-warning-active:  var(--smena-gold-7);

  --color-error:           var(--smena-red-5);
  --color-error-bg:        var(--smena-red-1);
  --color-error-border:    var(--smena-red-2);
  --color-error-hover:     var(--smena-red-4);
  --color-error-active:    var(--smena-red-6);

  --color-info:            var(--smena-blue-6);
  --color-info-bg:         var(--smena-blue-1);
  --color-info-border:     var(--smena-blue-3);

  /* Link */
  --color-link:            var(--color-primary);
  --color-link-hover:      var(--color-primary-hover);
  --color-link-active:     var(--color-primary-active);

  /* ═══════════════════════════════════════════════
     LAYER 3 — shadcn slot mapping
     ═══════════════════════════════════════════════ */
  --background:            0 0% 100%;
  --foreground:            231 19% 20%;
  --card:                  0 0% 100%;
  --card-foreground:       231 19% 20%;
  --popover:               0 0% 100%;
  --popover-foreground:    231 19% 20%;
  --primary:               214 100% 55%;
  --primary-foreground:    0 0% 100%;
  --secondary:             0 0% 96%;
  --secondary-foreground:  231 19% 20%;
  --muted:                 0 0% 96%;
  --muted-foreground:      231 19% 45%;
  --accent:                214 100% 95%;
  --accent-foreground:     214 100% 30%;
  --destructive:           358 89% 65%;
  --destructive-foreground:0 0% 100%;
  --border:                0 0% 85%;
  --input:                 0 0% 85%;
  --ring:                  214 100% 55%;
  --radius:                0.375rem;
}

/* ═══════════════════════════════════════════════
   DARK MODE — only Layer 2 values change
   ═══════════════════════════════════════════════ */
.dark {
  --smena-text-base: 255, 255, 255;

  --color-bg-layout:       #161616;
  --color-bg-container:    #141414;
  --color-bg-elevated:     #1f1f1f;

  --color-border:          #424242;
  --color-border-secondary:#303030;

  --background:            0 0% 8%;
  --foreground:            0 0% 85%;
  --card:                  0 0% 10%;
  --card-foreground:       0 0% 85%;
  --popover:               0 0% 12%;
  --popover-foreground:    0 0% 85%;
  --muted:                 0 0% 12%;
  --muted-foreground:      0 0% 55%;
  --border:                0 0% 26%;
  --input:                 0 0% 26%;
}

/* ═══════════════════════════════════════════════
   Base styles
   ═══════════════════════════════════════════════ */
@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-family: var(--font-inter), 'Inter', sans-serif;
  }
}
```

**Step 2: Verify TypeScript compiles**

```bash
cd "/Users/alexandrasandra/Smena priject 1/smena-ds" && npx tsc --noEmit
```

**Step 3: Commit**

```bash
git add src/app/globals.css && git commit -m "feat: add three-layer CSS token system"
```

---

## Task 5: Configure tailwind.config.ts

**Files:**
- Modify: `smena-ds/tailwind.config.ts` (replace content)

**Step 1: Replace tailwind.config.ts**

```ts
// smena-ds/tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* shadcn slots */
        background:   'hsl(var(--background))',
        foreground:   'hsl(var(--foreground))',
        card: {
          DEFAULT:    'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT:    'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT:    'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT:    'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT:    'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT:    'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT:    'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border:   'hsl(var(--border))',
        input:    'hsl(var(--input))',
        ring:     'hsl(var(--ring))',
        /* Smena semantic tokens */
        'smena-primary':         'var(--color-primary)',
        'smena-primary-hover':   'var(--color-primary-hover)',
        'smena-primary-active':  'var(--color-primary-active)',
        'smena-primary-bg':      'var(--color-primary-bg)',
        'smena-text':            'var(--color-text)',
        'smena-text-secondary':  'var(--color-text-secondary)',
        'smena-text-tertiary':   'var(--color-text-tertiary)',
        'smena-text-disabled':   'var(--color-text-disabled)',
        'smena-bg-layout':       'var(--color-bg-layout)',
        'smena-bg-container':    'var(--color-bg-container)',
        'smena-bg-elevated':     'var(--color-bg-elevated)',
        'smena-border':          'var(--color-border)',
        'smena-border-secondary':'var(--color-border-secondary)',
        'smena-fill':            'var(--color-fill)',
        'smena-fill-secondary':  'var(--color-fill-secondary)',
        'smena-success':         'var(--color-success)',
        'smena-success-bg':      'var(--color-success-bg)',
        'smena-warning':         'var(--color-warning)',
        'smena-warning-bg':      'var(--color-warning-bg)',
        'smena-error':           'var(--color-error)',
        'smena-error-bg':        'var(--color-error-bg)',
        'smena-info':            'var(--color-info)',
        'smena-info-bg':         'var(--color-info-bg)',
      },
      borderRadius: {
        xs:      '2px',
        sm:      '4px',
        DEFAULT: '6px',
        md:      '6px',
        lg:      '8px',
        xl:      '12px',
        full:    '9999px',
      },
      fontSize: {
        'smena-sm':   ['12px', { lineHeight: '20px' }],
        'smena-base': ['14px', { lineHeight: '22px' }],
        'smena-lg':   ['16px', { lineHeight: '24px' }],
        'smena-h5':   ['16px', { lineHeight: '24px', fontWeight: '600' }],
        'smena-h4':   ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'smena-h3':   ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'smena-h2':   ['30px', { lineHeight: '38px', fontWeight: '600' }],
        'smena-h1':   ['38px', { lineHeight: '46px', fontWeight: '600' }],
      },
      boxShadow: {
        'smena-card':     '0 1px 2px 0 rgba(0,0,0,0.03), 0 1px 6px -1px rgba(0,0,0,0.02), 0 2px 4px 0 rgba(0,0,0,0.02)',
        'smena-dropdown': '0 6px 16px 0 rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), 0 9px 28px 8px rgba(0,0,0,0.05)',
        'smena-modal':    '0 6px 16px 0 rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), 0 9px 28px 8px rgba(0,0,0,0.05)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      spacing: {
        'smena-xxs':  '4px',
        'smena-xs':   '8px',
        'smena-sm':   '12px',
        'smena-base': '16px',
        'smena-md':   '20px',
        'smena-lg':   '24px',
        'smena-xl':   '32px',
        'smena-xxl':  '48px',
      },
      height: {
        'control-xs': '16px',
        'control-sm': '24px',
        'control':    '32px',
        'control-lg': '40px',
      },
      minHeight: {
        'control-lg': '40px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
```

**Step 2: Verify build**

```bash
cd "/Users/alexandrasandra/Smena priject 1/smena-ds" && npm run build
```

Expected: Build succeeds.

**Step 3: Commit**

```bash
git add tailwind.config.ts && git commit -m "feat: extend Tailwind with Smena design tokens"
```

---

## Task 6: Set up Inter font in layout.tsx

**Files:**
- Modify: `smena-ds/src/app/layout.tsx`

**Step 1: Update layout.tsx to load Inter from Google Fonts**

```tsx
// smena-ds/src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Smena Design System',
  description: 'Component library for the Smena job aggregator',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-smena-bg-layout`}>
        {children}
      </body>
    </html>
  )
}
```

**Step 2: Verify build**

```bash
npm run build
```

**Step 3: Commit**

```bash
git add src/app/layout.tsx && git commit -m "feat: add Inter font with cyrillic subset"
```

---

## Task 7: Create asset registry (lib/assets.ts)

**Files:**
- Create: `smena-ds/src/lib/assets.ts`

**Step 1: Create the typed asset registry**

Note: Some profession filenames have a double `.png.png` extension (kassir_2, komplectovshik_2, komplectovshik_3). Use exact filenames.

```ts
// smena-ds/src/lib/assets.ts

export interface PartnerAsset {
  full: string
  small: string
  name: string
}

export type PartnerKey = 'auchan' | 'magnit' | 'lenta' | 'spar' | 'azbuka_vkusa'

export const PARTNERS = {
  auchan: {
    full:  '/assets/partners/auchan_logo_full.jpg',
    small: '/assets/partners/auchan_logo_small.jpeg',
    name:  'Auchan',
  },
  magnit: {
    full:  '/assets/partners/magnit_logo_full.png',
    small: '/assets/partners/magnit_logo_small.jpg',
    name:  'Магнит',
  },
  lenta: {
    full:  '/assets/partners/lenta_logo_full.png',
    small: '/assets/partners/lenta_logo_small.jpg',
    name:  'Лента',
  },
  spar: {
    full:  '/assets/partners/spar_logo_full.png',
    small: '/assets/partners/spar_logo_small.svg',
    name:  'SPAR',
  },
  azbuka_vkusa: {
    full:  '/assets/partners/azbuka_vkusa_logo_full.png',
    small: '/assets/partners/azbuka_vkusa_logo_small.png',
    name:  'Азбука Вкуса',
  },
} as const satisfies Record<PartnerKey, PartnerAsset>

export type ProfessionKey =
  | 'kassir'
  | 'komplectovshik'
  | 'komplektovshik_sklad'
  | 'pecar'
  | 'povar'
  | 'rtz'
  | 'uborshik'
  | 'upakivshik'

export const PROFESSIONS: Record<ProfessionKey, string[]> = {
  kassir: [
    '/assets/professions/kassir_1.png',
    '/assets/professions/kassir_2.png.png',
    '/assets/professions/kassir_3.png',
  ],
  komplectovshik: [
    '/assets/professions/komplectovshik_1.png',
    '/assets/professions/komplectovshik_2.png.png',
    '/assets/professions/komplectovshik_3.png.png',
  ],
  komplektovshik_sklad: [
    '/assets/professions/komplektovshik_sklad_1.png',
    '/assets/professions/komplektovshik_sklad_2.png',
    '/assets/professions/komplektovshik_sklad_3.png',
  ],
  pecar: [
    '/assets/professions/pecar_1.png',
    '/assets/professions/pecar_2.png',
    '/assets/professions/pecar_3.png',
  ],
  povar: [
    '/assets/professions/povar_1.png',
    '/assets/professions/povar_2.png',
    '/assets/professions/povar_3.png',
  ],
  rtz: [
    '/assets/professions/rtz_1.png',
    '/assets/professions/rtz_2.png',
    '/assets/professions/rtz_3.png',
  ],
  uborshik: [
    '/assets/professions/uborshik.jpg',
  ],
  upakivshik: [
    '/assets/professions/upakivshik_1.png',
    '/assets/professions/upakivshik_2.png',
  ],
}

export const PROFESSION_LABELS: Record<ProfessionKey, string> = {
  kassir:               'Кассир',
  komplectovshik:       'Комплектовщик',
  komplektovshik_sklad: 'Комплектовщик склада',
  pecar:                'Пекарь',
  povar:                'Повар',
  rtz:                  'РТЗ',
  uborshik:             'Уборщик',
  upakivshik:           'Упаковщик',
}

export const LOGO_ASSETS = {
  primary:   '/assets/logo/Frame 22.png',
  white:     '/assets/logo/Frame 24 (1).png',
  icon:      '/assets/logo/Frame 100 (1).png',
} as const

export const APP_SCREENSHOTS = {
  searchList: '/assets/app-screenshots/Search (list).png',
  searchMap1: '/assets/app-screenshots/Search (map).png',
  searchMap2: '/assets/app-screenshots/Search (map) (1).png',
  vacancy:    '/assets/app-screenshots/Vacancy.png',
} as const

export const QR_CODE = '/assets/qr/Smena_QR.svg'
```

**Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: No errors.

**Step 3: Commit**

```bash
git add src/lib/assets.ts && git commit -m "feat: add typed asset registry for partners and professions"
```

---

## Task 8: SmenaButton component

**Files:**
- Create: `smena-ds/src/components/smena/Button.tsx`

**Step 1: Create SmenaButton**

```tsx
// smena-ds/src/components/smena/Button.tsx
import * as React from 'react'
import { Button, type ButtonProps } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type SmenaVariant = 'primary' | 'default' | 'dashed' | 'text' | 'link' | 'danger'
type SmenaSize   = 'sm' | 'md' | 'lg'

export interface SmenaButtonProps extends Omit<ButtonProps, 'variant' | 'size'> {
  smenaVariant?: SmenaVariant
  smenaSize?: SmenaSize
  block?: boolean
  icon?: React.ReactNode
  loading?: boolean
}

const variantMap: Record<SmenaVariant, ButtonProps['variant']> = {
  primary: 'default',
  default: 'outline',
  dashed:  'outline',
  text:    'ghost',
  link:    'link',
  danger:  'destructive',
}

const sizeClasses: Record<SmenaSize, string> = {
  sm: 'h-control-sm text-smena-sm px-smena-xs',
  md: 'h-control text-smena-base px-smena-sm',
  lg: 'h-control-lg text-smena-lg px-smena-base min-w-[88px]',
}

export function SmenaButton({
  smenaVariant = 'default',
  smenaSize = 'lg',
  block = false,
  icon,
  loading = false,
  children,
  className,
  disabled,
  ...props
}: SmenaButtonProps) {
  return (
    <Button
      variant={variantMap[smenaVariant]}
      className={cn(
        sizeClasses[smenaSize],
        'rounded font-medium transition-colors',
        smenaVariant === 'dashed' && 'border-dashed',
        smenaVariant === 'primary' && 'bg-smena-primary hover:bg-smena-primary-hover active:bg-smena-primary-active text-white border-0',
        block && 'w-full',
        className,
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
      )}
      {icon && !loading && <span className="mr-1.5">{icon}</span>}
      {children}
    </Button>
  )
}
```

**Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

**Step 3: Commit**

```bash
git add src/components/smena/Button.tsx && git commit -m "feat: add SmenaButton component"
```

---

## Task 9: SmenaInput component

**Files:**
- Create: `smena-ds/src/components/smena/Input.tsx`

**Step 1: Create SmenaInput**

```tsx
// smena-ds/src/components/smena/Input.tsx
import * as React from 'react'
import { cn } from '@/lib/utils'

export type InputStatus = 'default' | 'error' | 'warning' | 'success'

export interface SmenaInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  status?: InputStatus
  label?: string
  helperText?: string
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  addonBefore?: React.ReactNode
  addonAfter?: React.ReactNode
}

const statusBorderMap: Record<InputStatus, string> = {
  default: 'border-smena-border focus:border-smena-primary focus:ring-smena-primary/20',
  error:   'border-[var(--color-error)] focus:border-[var(--color-error)] focus:ring-[var(--color-error)]/20',
  warning: 'border-[var(--color-warning)] focus:border-[var(--color-warning)] focus:ring-[var(--color-warning)]/20',
  success: 'border-[var(--color-success)] focus:border-[var(--color-success)] focus:ring-[var(--color-success)]/20',
}

const statusHelperMap: Record<InputStatus, string> = {
  default: 'text-smena-text-secondary',
  error:   'text-[var(--color-error)]',
  warning: 'text-[var(--color-warning)]',
  success: 'text-[var(--color-success)]',
}

export const SmenaInput = React.forwardRef<HTMLInputElement, SmenaInputProps>(
  ({ status = 'default', label, helperText, prefix, suffix, addonBefore, addonAfter, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="text-smena-sm font-medium text-smena-text">
            {label}
          </label>
        )}
        <div className="flex items-stretch">
          {addonBefore && (
            <span className="flex items-center px-smena-xs bg-smena-fill border border-r-0 border-smena-border rounded-l text-smena-base text-smena-text-secondary">
              {addonBefore}
            </span>
          )}
          <div className={cn(
            'flex flex-1 items-center h-control-lg border bg-smena-bg-container px-smena-xs gap-smena-xs',
            'rounded text-smena-base text-smena-text transition-all',
            'focus-within:ring-2 focus-within:outline-none',
            statusBorderMap[status],
            addonBefore && '!rounded-l-none',
            addonAfter  && '!rounded-r-none',
            className,
          )}>
            {prefix && <span className="text-smena-text-tertiary shrink-0">{prefix}</span>}
            <input
              ref={ref}
              className="flex-1 bg-transparent outline-none text-smena-base placeholder:text-smena-text-placeholder disabled:cursor-not-allowed disabled:opacity-50"
              {...props}
            />
            {suffix && <span className="text-smena-text-tertiary shrink-0">{suffix}</span>}
          </div>
          {addonAfter && (
            <span className="flex items-center px-smena-xs bg-smena-fill border border-l-0 border-smena-border rounded-r text-smena-base text-smena-text-secondary">
              {addonAfter}
            </span>
          )}
        </div>
        {helperText && (
          <p className={cn('text-smena-sm', statusHelperMap[status])}>
            {helperText}
          </p>
        )}
      </div>
    )
  }
)
SmenaInput.displayName = 'SmenaInput'
```

**Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

**Step 3: Commit**

```bash
git add src/components/smena/Input.tsx && git commit -m "feat: add SmenaInput with status variants"
```

---

## Task 10: SmenaBadge component

**Files:**
- Create: `smena-ds/src/components/smena/Badge.tsx`

**Step 1: Create SmenaBadge**

```tsx
// smena-ds/src/components/smena/Badge.tsx
import * as React from 'react'
import { cn } from '@/lib/utils'

export type BadgeStatus = 'success' | 'error' | 'processing' | 'warning' | 'default'
export type BadgeVariant = 'dot' | 'count' | 'ribbon' | 'tag'

export interface SmenaBadgeProps {
  status?: BadgeStatus
  variant?: BadgeVariant
  count?: number
  text?: string
  color?: string
  className?: string
  children?: React.ReactNode
}

const statusColorMap: Record<BadgeStatus, string> = {
  success:    'bg-[var(--color-success)]',
  error:      'bg-[var(--color-error)]',
  processing: 'bg-[var(--color-info)]',
  warning:    'bg-[var(--color-warning)]',
  default:    'bg-smena-border',
}

const tagColorMap: Record<BadgeStatus, string> = {
  success:    'bg-smena-success-bg text-[var(--color-success)] border-[var(--color-success-border)]',
  error:      'bg-smena-error-bg text-[var(--color-error)] border-[var(--color-error-border)]',
  processing: 'bg-smena-info-bg text-[var(--color-info)] border-[var(--color-info-border)]',
  warning:    'bg-smena-warning-bg text-[var(--color-warning)] border-[var(--color-warning-border)]',
  default:    'bg-smena-fill text-smena-text-secondary border-smena-border',
}

export function SmenaBadge({
  status = 'default',
  variant = 'dot',
  count,
  text,
  color,
  className,
  children,
}: SmenaBadgeProps) {
  if (variant === 'tag') {
    return (
      <span className={cn(
        'inline-flex items-center gap-1 px-2 py-0.5 rounded-xs border text-smena-sm font-medium',
        tagColorMap[status],
        className,
      )}>
        <span className={cn('w-1.5 h-1.5 rounded-full', statusColorMap[status])} />
        {text || children}
      </span>
    )
  }

  if (variant === 'ribbon') {
    const ribbonColors: Record<BadgeStatus, string> = {
      success:    'bg-[var(--color-success)]',
      error:      'bg-[var(--color-error)]',
      processing: 'bg-[var(--color-info)]',
      warning:    'bg-[var(--color-warning)]',
      default:    'bg-smena-text-secondary',
    }
    return (
      <span className={cn(
        'inline-flex items-center px-2 py-0.5 rounded-xs text-smena-sm font-medium text-white',
        color ? '' : ribbonColors[status],
        className,
      )} style={color ? { backgroundColor: color } : undefined}>
        {text || children}
      </span>
    )
  }

  if (variant === 'count') {
    return (
      <span className={cn(
        'inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-[var(--color-error)] text-white text-smena-sm font-medium',
        className,
      )}>
        {count !== undefined && count > 99 ? '99+' : count}
      </span>
    )
  }

  /* dot variant (default) */
  return (
    <span className={cn('inline-flex items-center gap-1.5 text-smena-base text-smena-text', className)}>
      <span className={cn(
        'w-2 h-2 rounded-full shrink-0',
        statusColorMap[status],
        status === 'processing' && 'animate-pulse',
      )} />
      {text || children}
    </span>
  )
}
```

**Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

**Step 3: Commit**

```bash
git add src/components/smena/Badge.tsx && git commit -m "feat: add SmenaBadge with dot/tag/ribbon/count variants"
```

---

## Task 11: SmenaCard component

**Files:**
- Create: `smena-ds/src/components/smena/Card.tsx`

**Step 1: Create SmenaCard**

```tsx
// smena-ds/src/components/smena/Card.tsx
import * as React from 'react'
import { cn } from '@/lib/utils'

export interface SmenaCardProps {
  title?: React.ReactNode
  extra?: React.ReactNode
  footer?: React.ReactNode
  bordered?: boolean
  hoverable?: boolean
  className?: string
  bodyClassName?: string
  children?: React.ReactNode
}

export function SmenaCard({
  title,
  extra,
  footer,
  bordered = true,
  hoverable = false,
  className,
  bodyClassName,
  children,
}: SmenaCardProps) {
  return (
    <div className={cn(
      'bg-smena-bg-container rounded-lg shadow-smena-card',
      bordered && 'border border-smena-border',
      hoverable && 'transition-shadow hover:shadow-smena-dropdown cursor-pointer',
      className,
    )}>
      {(title || extra) && (
        <div className="flex items-center justify-between px-smena-base py-smena-sm border-b border-smena-border-secondary">
          {title && (
            <span className="text-smena-base font-semibold text-smena-text">{title}</span>
          )}
          {extra && (
            <span className="text-smena-sm text-[var(--color-link)] ml-auto">{extra}</span>
          )}
        </div>
      )}
      <div className={cn('px-smena-base py-smena-base', bodyClassName)}>
        {children}
      </div>
      {footer && (
        <div className="px-smena-base py-smena-sm border-t border-smena-border-secondary text-smena-sm text-smena-text-secondary">
          {footer}
        </div>
      )}
    </div>
  )
}
```

**Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

**Step 3: Commit**

```bash
git add src/components/smena/Card.tsx && git commit -m "feat: add SmenaCard component"
```

---

## Task 12: PartnerLogo and ProfessionImage components

**Files:**
- Create: `smena-ds/src/components/smena/PartnerLogo.tsx`
- Create: `smena-ds/src/components/smena/ProfessionImage.tsx`

**Step 1: Create PartnerLogo.tsx**

```tsx
// smena-ds/src/components/smena/PartnerLogo.tsx
import Image from 'next/image'
import { PARTNERS, type PartnerKey } from '@/lib/assets'
import { cn } from '@/lib/utils'

export interface PartnerLogoProps {
  partner: PartnerKey
  size?: 'full' | 'small'
  width?: number
  height?: number
  className?: string
}

export function PartnerLogo({
  partner,
  size = 'small',
  width = size === 'full' ? 120 : 40,
  height = size === 'full' ? 40 : 40,
  className,
}: PartnerLogoProps) {
  const asset = PARTNERS[partner]
  const src = size === 'full' ? asset.full : asset.small

  return (
    <Image
      src={src}
      alt={asset.name}
      width={width}
      height={height}
      className={cn('object-contain', className)}
    />
  )
}
```

**Step 2: Create ProfessionImage.tsx**

```tsx
// smena-ds/src/components/smena/ProfessionImage.tsx
import Image from 'next/image'
import { PROFESSIONS, PROFESSION_LABELS, type ProfessionKey } from '@/lib/assets'
import { cn } from '@/lib/utils'

export interface ProfessionImageProps {
  profession: ProfessionKey
  variant?: 1 | 2 | 3
  width?: number
  height?: number
  className?: string
  showLabel?: boolean
}

export function ProfessionImage({
  profession,
  variant = 1,
  width = 200,
  height = 200,
  className,
  showLabel = false,
}: ProfessionImageProps) {
  const images = PROFESSIONS[profession]
  const index = Math.min(variant - 1, images.length - 1)
  const src = images[index]

  return (
    <figure className="flex flex-col items-center gap-smena-xs">
      <Image
        src={src}
        alt={`${PROFESSION_LABELS[profession]} — вариант ${variant}`}
        width={width}
        height={height}
        className={cn('object-cover rounded-lg', className)}
      />
      {showLabel && (
        <figcaption className="text-smena-sm text-smena-text-secondary text-center">
          {PROFESSION_LABELS[profession]}
        </figcaption>
      )}
    </figure>
  )
}
```

**Step 3: Verify TypeScript**

```bash
npx tsc --noEmit
```

**Step 4: Commit**

```bash
git add src/components/smena/PartnerLogo.tsx src/components/smena/ProfessionImage.tsx && git commit -m "feat: add PartnerLogo and ProfessionImage components"
```

---

## Task 13: VacancyCard composite component

**Files:**
- Create: `smena-ds/src/components/smena/VacancyCard.tsx`

**Step 1: Create VacancyCard**

```tsx
// smena-ds/src/components/smena/VacancyCard.tsx
import * as React from 'react'
import { SmenaCard } from './Card'
import { SmenaButton } from './Button'
import { SmenaBadge, type BadgeStatus } from './Badge'
import { PartnerLogo } from './PartnerLogo'
import { ProfessionImage } from './ProfessionImage'
import type { PartnerKey } from '@/lib/assets'
import type { ProfessionKey } from '@/lib/assets'
import { cn } from '@/lib/utils'

export interface VacancyCardProps {
  title: string
  partner: PartnerKey
  profession: ProfessionKey
  professionVariant?: 1 | 2 | 3
  salary: string
  salaryPeriod?: string
  location?: string
  status?: BadgeStatus
  statusText?: string
  schedule?: string
  onApply?: () => void
  className?: string
}

export function VacancyCard({
  title,
  partner,
  profession,
  professionVariant = 1,
  salary,
  salaryPeriod = 'в месяц',
  location,
  status = 'success',
  statusText = 'Активна',
  schedule,
  onApply,
  className,
}: VacancyCardProps) {
  return (
    <SmenaCard hoverable className={cn('overflow-hidden max-w-sm', className)} bodyClassName="!p-0">
      <div className="relative h-36 overflow-hidden">
        <ProfessionImage
          profession={profession}
          variant={professionVariant}
          width={400}
          height={144}
          className="w-full h-36 object-cover rounded-none"
        />
        <div className="absolute top-2 right-2">
          <SmenaBadge status={status} variant="ribbon" text={statusText} />
        </div>
      </div>
      <div className="p-smena-base flex flex-col gap-smena-xs">
        <div className="flex items-center justify-between">
          <PartnerLogo partner={partner} size="small" width={32} height={32} className="rounded" />
          <SmenaBadge status="default" variant="tag" text={schedule ?? 'Сменный'} />
        </div>
        <h3 className="text-smena-base font-semibold text-smena-text leading-tight">{title}</h3>
        {location && (
          <p className="text-smena-sm text-smena-text-secondary">{location}</p>
        )}
        <div className="flex items-end justify-between mt-smena-xs">
          <div>
            <span className="text-smena-h4 font-bold text-smena-text">{salary}</span>
            <span className="text-smena-sm text-smena-text-secondary ml-1">{salaryPeriod}</span>
          </div>
          <SmenaButton smenaVariant="primary" smenaSize="sm" onClick={onApply}>
            Откликнуться
          </SmenaButton>
        </div>
      </div>
    </SmenaCard>
  )
}
```

**Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

**Step 3: Commit**

```bash
git add src/components/smena/VacancyCard.tsx && git commit -m "feat: add VacancyCard composite component"
```

---

## Task 14: Create components/smena/index.ts barrel export

**Files:**
- Create: `smena-ds/src/components/smena/index.ts`

**Step 1: Create barrel export**

```ts
// smena-ds/src/components/smena/index.ts
export { SmenaButton } from './Button'
export type { SmenaButtonProps } from './Button'
export { SmenaInput } from './Input'
export type { SmenaInputProps, InputStatus } from './Input'
export { SmenaBadge } from './Badge'
export type { SmenaBadgeProps, BadgeStatus, BadgeVariant } from './Badge'
export { SmenaCard } from './Card'
export type { SmenaCardProps } from './Card'
export { PartnerLogo } from './PartnerLogo'
export type { PartnerLogoProps } from './PartnerLogo'
export { ProfessionImage } from './ProfessionImage'
export type { ProfessionImageProps } from './ProfessionImage'
export { VacancyCard } from './VacancyCard'
export type { VacancyCardProps } from './VacancyCard'
```

**Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

**Step 3: Commit**

```bash
git add src/components/smena/index.ts && git commit -m "feat: add smena components barrel export"
```

---

## Task 15: Kitchen-sink page — layout shell + nav

**Files:**
- Create: `smena-ds/src/app/design-system/page.tsx`

**Step 1: Create the page with sidebar nav and section anchors**

The page is a `'use client'` component (for dark mode toggle and active nav state).
Each section is a `<section id="...">` that maps to a sidebar link.

```tsx
// smena-ds/src/app/design-system/page.tsx
'use client'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

// Section components — imported from local files (created in Tasks 16–19)
import { ColorsSection }     from './sections/ColorsSection'
import { TypographySection } from './sections/TypographySection'
import { SpacingSection }    from './sections/SpacingSection'
import { ShadowsSection }    from './sections/ShadowsSection'
import { ButtonsSection }    from './sections/ButtonsSection'
import { InputsSection }     from './sections/InputsSection'
import { BadgesSection }     from './sections/BadgesSection'
import { CardsSection }      from './sections/CardsSection'
import { VacancySection }    from './sections/VacancySection'
import { AssetsSection }     from './sections/AssetsSection'

const NAV_ITEMS = [
  { id: 'colors',     label: '01 Colors' },
  { id: 'typography', label: '02 Typography' },
  { id: 'spacing',    label: '03 Spacing' },
  { id: 'shadows',    label: '04 Shadows' },
  { id: 'buttons',    label: '05 Buttons' },
  { id: 'inputs',     label: '06 Inputs' },
  { id: 'badges',     label: '07 Badges' },
  { id: 'cards',      label: '08 Cards' },
  { id: 'vacancy',    label: '09 Vacancy Cards' },
  { id: 'assets',     label: '10 Assets' },
] as const

export default function DesignSystemPage() {
  const [dark, setDark] = useState(false)
  const [active, setActive] = useState('colors')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div className="min-h-screen bg-smena-bg-layout font-sans">
      {/* Top header */}
      <header className="sticky top-0 z-50 bg-smena-bg-container border-b border-smena-border px-smena-base py-smena-xs flex items-center justify-between shadow-smena-card">
        <span className="text-smena-h5 font-bold text-smena-text tracking-tight">Smena Design System</span>
        <button
          onClick={() => setDark(d => !d)}
          className="px-smena-sm py-smena-xs rounded border border-smena-border text-smena-sm text-smena-text-secondary hover:border-smena-primary hover:text-smena-primary transition-colors"
        >
          {dark ? '☀ Light' : '☾ Dark'}
        </button>
      </header>

      <div className="flex">
        {/* Sidebar — desktop */}
        <aside className="hidden lg:flex flex-col w-52 shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto border-r border-smena-border bg-smena-bg-container py-smena-base">
          {NAV_ITEMS.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActive(item.id)}
              className={cn(
                'px-smena-base py-smena-xs text-smena-sm transition-colors',
                active === item.id
                  ? 'text-smena-primary font-semibold border-r-2 border-smena-primary bg-smena-primary-bg'
                  : 'text-smena-text-secondary hover:text-smena-text',
              )}
            >
              {item.label}
            </a>
          ))}
        </aside>

        {/* Mobile pill nav */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-smena-bg-container border-t border-smena-border px-smena-xs py-smena-xs overflow-x-auto flex gap-smena-xs whitespace-nowrap">
          {NAV_ITEMS.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="px-smena-sm py-1 rounded-full text-smena-sm border border-smena-border text-smena-text-secondary hover:border-smena-primary hover:text-smena-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Main content */}
        <main className="flex-1 px-smena-base lg:px-smena-xxl py-smena-lg pb-20 lg:pb-smena-lg max-w-5xl">
          <ColorsSection />
          <TypographySection />
          <SpacingSection />
          <ShadowsSection />
          <ButtonsSection />
          <InputsSection />
          <BadgesSection />
          <CardsSection />
          <VacancySection />
          <AssetsSection />
        </main>
      </div>
    </div>
  )
}
```

**Step 2: Create sections directory**

```bash
mkdir -p "/Users/alexandrasandra/Smena priject 1/smena-ds/src/app/design-system/sections"
```

**Step 3: Commit skeleton**

```bash
git add src/app/design-system/ && git commit -m "feat: add design-system page shell with nav"
```

---

## Task 16: Kitchen-sink — Colors, Typography, Spacing, Shadows sections

**Files:**
- Create: `smena-ds/src/app/design-system/sections/ColorsSection.tsx`
- Create: `smena-ds/src/app/design-system/sections/TypographySection.tsx`
- Create: `smena-ds/src/app/design-system/sections/SpacingSection.tsx`
- Create: `smena-ds/src/app/design-system/sections/ShadowsSection.tsx`
- Create: `smena-ds/src/app/design-system/sections/SectionWrapper.tsx`

**Step 1: Create SectionWrapper helper**

```tsx
// smena-ds/src/app/design-system/sections/SectionWrapper.tsx
import { cn } from '@/lib/utils'

export function SectionWrapper({ id, title, children, className }: {
  id: string; title: string; children: React.ReactNode; className?: string
}) {
  return (
    <section id={id} className={cn('py-smena-xl scroll-mt-16', className)}>
      <h2 className="text-smena-h3 font-bold text-smena-text mb-smena-base border-b border-smena-border pb-smena-xs">
        {title}
      </h2>
      {children}
    </section>
  )
}
```

**Step 2: Create ColorsSection.tsx**

```tsx
// smena-ds/src/app/design-system/sections/ColorsSection.tsx
import { SectionWrapper } from './SectionWrapper'

const PRIMITIVES = [
  { label: 'Blue',  prefix: '--smena-blue',  shades: [1,2,3,4,5,6,7,8,9,10] },
  { label: 'Gold',  prefix: '--smena-gold',  shades: [1,2,3,4,5,6,7,8,9,10] },
  { label: 'Red',   prefix: '--smena-red',   shades: [1,2,3,4,5,6,7,8,9,10] },
  { label: 'Green', prefix: '--smena-green', shades: [1,2,3,4,5,6,7,8,9,10] },
]

const SEMANTIC = [
  { label: 'Primary',           var: '--color-primary' },
  { label: 'Primary Hover',     var: '--color-primary-hover' },
  { label: 'Primary BG',        var: '--color-primary-bg' },
  { label: 'Text',              var: '--color-text' },
  { label: 'Text Secondary',    var: '--color-text-secondary' },
  { label: 'Text Tertiary',     var: '--color-text-tertiary' },
  { label: 'BG Layout',         var: '--color-bg-layout' },
  { label: 'BG Container',      var: '--color-bg-container' },
  { label: 'Border',            var: '--color-border' },
  { label: 'Success',           var: '--color-success' },
  { label: 'Warning',           var: '--color-warning' },
  { label: 'Error',             var: '--color-error' },
]

export function ColorsSection() {
  return (
    <SectionWrapper id="colors" title="01 Colors">
      <h3 className="text-smena-lg font-semibold text-smena-text mb-smena-sm">Primitive Palette</h3>
      <div className="flex flex-col gap-smena-sm mb-smena-xl">
        {PRIMITIVES.map(scale => (
          <div key={scale.label}>
            <p className="text-smena-sm font-medium text-smena-text-secondary mb-1">{scale.label}</p>
            <div className="flex gap-1">
              {scale.shades.map(n => (
                <div key={n} className="flex flex-col items-center gap-0.5 flex-1">
                  <div
                    className="w-full h-10 rounded"
                    style={{ background: `var(${scale.prefix}-${n})` }}
                  />
                  <span className="text-[10px] text-smena-text-tertiary">{n}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-smena-lg font-semibold text-smena-text mb-smena-sm">Semantic Tokens</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-smena-sm">
        {SEMANTIC.map(token => (
          <div key={token.var} className="flex items-center gap-smena-xs p-smena-xs rounded border border-smena-border bg-smena-bg-container">
            <div className="w-8 h-8 rounded shrink-0 border border-smena-border" style={{ background: `var(${token.var})` }} />
            <div>
              <p className="text-smena-sm font-medium text-smena-text leading-tight">{token.label}</p>
              <p className="text-[10px] text-smena-text-tertiary font-mono">{token.var}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
```

**Step 3: Create TypographySection.tsx**

```tsx
// smena-ds/src/app/design-system/sections/TypographySection.tsx
import { SectionWrapper } from './SectionWrapper'

const HEADINGS = [
  { label: 'Heading 1', className: 'text-smena-h1', size: '38px / 46px' },
  { label: 'Heading 2', className: 'text-smena-h2', size: '30px / 38px' },
  { label: 'Heading 3', className: 'text-smena-h3', size: '24px / 32px' },
  { label: 'Heading 4', className: 'text-smena-h4', size: '20px / 28px' },
  { label: 'Heading 5', className: 'text-smena-h5', size: '16px / 24px' },
]
const BODY = [
  { label: 'LG',   className: 'text-smena-lg',   size: '16px / 24px' },
  { label: 'Base', className: 'text-smena-base',  size: '14px / 22px' },
  { label: 'SM',   className: 'text-smena-sm',    size: '12px / 20px' },
]

export function TypographySection() {
  return (
    <SectionWrapper id="typography" title="02 Typography">
      <p className="text-smena-sm text-smena-text-secondary mb-smena-base font-mono">Font family: Inter · Cyrillic subset</p>
      <div className="flex flex-col gap-smena-base divide-y divide-smena-border">
        {HEADINGS.map(h => (
          <div key={h.label} className="pt-smena-sm flex items-baseline justify-between gap-smena-base">
            <span className={`${h.className} font-sans text-smena-text`}>{h.label}</span>
            <span className="text-smena-sm text-smena-text-tertiary shrink-0">{h.size}</span>
          </div>
        ))}
        {BODY.map(b => (
          <div key={b.label} className="pt-smena-sm flex items-baseline justify-between gap-smena-base">
            <div className="flex gap-smena-base">
              <span className={`${b.className} text-smena-text`}>{b.label} Normal</span>
              <span className={`${b.className} font-bold text-smena-text`}>{b.label} Strong</span>
              <span className={`${b.className} underline text-smena-text`}>{b.label} Underline</span>
              <span className={`${b.className} text-smena-text-secondary`}>{b.label} Secondary</span>
            </div>
            <span className="text-smena-sm text-smena-text-tertiary shrink-0">{b.size}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
```

**Step 4: Create SpacingSection.tsx**

```tsx
// smena-ds/src/app/design-system/sections/SpacingSection.tsx
import { SectionWrapper } from './SectionWrapper'

const SPACING = [
  { label: 'XXS', value: 4,  var: 'smena-xxs' },
  { label: 'XS',  value: 8,  var: 'smena-xs' },
  { label: 'SM',  value: 12, var: 'smena-sm' },
  { label: 'Base',value: 16, var: 'smena-base' },
  { label: 'MD',  value: 20, var: 'smena-md' },
  { label: 'LG',  value: 24, var: 'smena-lg' },
  { label: 'XL',  value: 32, var: 'smena-xl' },
  { label: 'XXL', value: 48, var: 'smena-xxl' },
]
const RADIUS = [
  { label: 'XS',      className: 'rounded-xs',  value: '2px' },
  { label: 'SM',      className: 'rounded-sm',  value: '4px' },
  { label: 'Default', className: 'rounded',      value: '6px' },
  { label: 'LG',      className: 'rounded-lg',  value: '8px' },
  { label: 'Full',    className: 'rounded-full', value: '9999px' },
]

export function SpacingSection() {
  return (
    <SectionWrapper id="spacing" title="03 Spacing &amp; Radius">
      <div className="flex flex-col gap-smena-sm mb-smena-xl">
        {SPACING.map(s => (
          <div key={s.label} className="flex items-center gap-smena-base">
            <span className="w-10 text-smena-sm font-medium text-smena-text-secondary text-right">{s.label}</span>
            <div className="bg-smena-primary h-4 rounded" style={{ width: s.value * 2 }} />
            <span className="text-smena-sm text-smena-text-tertiary">{s.value}px</span>
          </div>
        ))}
      </div>
      <h3 className="text-smena-lg font-semibold text-smena-text mb-smena-sm">Border Radius</h3>
      <div className="flex flex-wrap gap-smena-base">
        {RADIUS.map(r => (
          <div key={r.label} className="flex flex-col items-center gap-smena-xs">
            <div className={`w-16 h-16 bg-smena-primary-bg border-2 border-smena-primary ${r.className}`} />
            <span className="text-smena-sm font-medium text-smena-text">{r.label}</span>
            <span className="text-[10px] text-smena-text-tertiary">{r.value}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
```

**Step 5: Create ShadowsSection.tsx**

```tsx
// smena-ds/src/app/design-system/sections/ShadowsSection.tsx
import { SectionWrapper } from './SectionWrapper'

const SHADOWS = [
  { label: 'Card (Tertiary)',   className: 'shadow-smena-card',     desc: 'Forms, action panels, login' },
  { label: 'Dropdown (Primary)',className: 'shadow-smena-dropdown', desc: 'Popovers, menus, tooltips' },
  { label: 'Modal (Secondary)', className: 'shadow-smena-modal',    desc: 'Modals, drawers, overlays' },
]

export function ShadowsSection() {
  return (
    <SectionWrapper id="shadows" title="04 Shadows">
      <div className="flex flex-wrap gap-smena-xl">
        {SHADOWS.map(s => (
          <div key={s.label} className="flex flex-col gap-smena-sm items-start">
            <div className={`w-48 h-28 bg-smena-bg-container rounded-lg ${s.className}`} />
            <p className="text-smena-base font-semibold text-smena-text">{s.label}</p>
            <p className="text-smena-sm text-smena-text-secondary">{s.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
```

**Step 6: Verify build**

```bash
cd "/Users/alexandrasandra/Smena priject 1/smena-ds" && npm run build
```

**Step 7: Commit**

```bash
git add src/app/design-system/sections/ && git commit -m "feat: add Colors, Typography, Spacing, Shadows kitchen-sink sections"
```

---

## Task 17: Kitchen-sink — Buttons, Inputs, Badges sections

**Files:**
- Create: `smena-ds/src/app/design-system/sections/ButtonsSection.tsx`
- Create: `smena-ds/src/app/design-system/sections/InputsSection.tsx`
- Create: `smena-ds/src/app/design-system/sections/BadgesSection.tsx`

**Step 1: Create ButtonsSection.tsx**

```tsx
// smena-ds/src/app/design-system/sections/ButtonsSection.tsx
import { SmenaButton } from '@/components/smena'
import { SectionWrapper } from './SectionWrapper'

export function ButtonsSection() {
  return (
    <SectionWrapper id="buttons" title="05 Buttons">
      {(['lg','md','sm'] as const).map(size => (
        <div key={size} className="mb-smena-base">
          <p className="text-smena-sm text-smena-text-secondary mb-smena-xs font-mono uppercase tracking-wide">size={size}</p>
          <div className="flex flex-wrap gap-smena-sm items-center">
            <SmenaButton smenaVariant="primary"  smenaSize={size}>Primary</SmenaButton>
            <SmenaButton smenaVariant="default"  smenaSize={size}>Default</SmenaButton>
            <SmenaButton smenaVariant="dashed"   smenaSize={size}>Dashed</SmenaButton>
            <SmenaButton smenaVariant="text"     smenaSize={size}>Text</SmenaButton>
            <SmenaButton smenaVariant="link"     smenaSize={size}>Link</SmenaButton>
            <SmenaButton smenaVariant="danger"   smenaSize={size}>Danger</SmenaButton>
            <SmenaButton smenaVariant="primary"  smenaSize={size} disabled>Disabled</SmenaButton>
            <SmenaButton smenaVariant="primary"  smenaSize={size} loading>Loading</SmenaButton>
          </div>
        </div>
      ))}
      <div className="mt-smena-base">
        <p className="text-smena-sm text-smena-text-secondary mb-smena-xs font-mono">block=true</p>
        <SmenaButton smenaVariant="primary" block>Block Button</SmenaButton>
      </div>
    </SectionWrapper>
  )
}
```

**Step 2: Create InputsSection.tsx**

```tsx
// smena-ds/src/app/design-system/sections/InputsSection.tsx
import { SmenaInput } from '@/components/smena'
import { SectionWrapper } from './SectionWrapper'

export function InputsSection() {
  return (
    <SectionWrapper id="inputs" title="06 Inputs &amp; Forms">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-smena-base max-w-2xl">
        <SmenaInput label="Default" placeholder="Введите текст" />
        <SmenaInput label="With helper" placeholder="Поиск вакансий" helperText="Введите название профессии" />
        <SmenaInput label="Error state" placeholder="Ошибка" status="error" helperText="Это поле обязательно" defaultValue="неверный ввод" />
        <SmenaInput label="Warning state" placeholder="Предупреждение" status="warning" helperText="Проверьте введённые данные" />
        <SmenaInput label="Success state" placeholder="Успех" status="success" helperText="Данные верны" defaultValue="kassir@smena.app" />
        <SmenaInput label="Disabled" placeholder="Недоступно" disabled />
        <SmenaInput label="With prefix" placeholder="Поиск" prefix={<span>🔍</span>} />
        <SmenaInput label="With addon" placeholder="Сумма" addonBefore="₽" addonAfter="в час" />
      </div>
    </SectionWrapper>
  )
}
```

**Step 3: Create BadgesSection.tsx**

```tsx
// smena-ds/src/app/design-system/sections/BadgesSection.tsx
import { SmenaBadge } from '@/components/smena'
import { SectionWrapper } from './SectionWrapper'
import type { BadgeStatus } from '@/components/smena'

const STATUSES: BadgeStatus[] = ['success', 'processing', 'warning', 'error', 'default']

export function BadgesSection() {
  return (
    <SectionWrapper id="badges" title="07 Badges">
      <div className="flex flex-col gap-smena-lg">
        <div>
          <p className="text-smena-sm text-smena-text-secondary mb-smena-sm font-mono">variant=dot</p>
          <div className="flex flex-wrap gap-smena-base">
            {STATUSES.map(s => <SmenaBadge key={s} status={s} text={s.charAt(0).toUpperCase() + s.slice(1)} />)}
          </div>
        </div>
        <div>
          <p className="text-smena-sm text-smena-text-secondary mb-smena-sm font-mono">variant=tag</p>
          <div className="flex flex-wrap gap-smena-sm">
            {STATUSES.map(s => <SmenaBadge key={s} status={s} variant="tag" text={s.charAt(0).toUpperCase() + s.slice(1)} />)}
          </div>
        </div>
        <div>
          <p className="text-smena-sm text-smena-text-secondary mb-smena-sm font-mono">variant=ribbon</p>
          <div className="flex flex-wrap gap-smena-sm">
            {STATUSES.map(s => <SmenaBadge key={s} status={s} variant="ribbon" text={s.charAt(0).toUpperCase() + s.slice(1)} />)}
          </div>
        </div>
        <div>
          <p className="text-smena-sm text-smena-text-secondary mb-smena-sm font-mono">variant=count</p>
          <div className="flex gap-smena-base items-center">
            {[1, 12, 99, 128].map(n => <SmenaBadge key={n} variant="count" count={n} />)}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
```

**Step 4: Verify build**

```bash
npm run build
```

**Step 5: Commit**

```bash
git add src/app/design-system/sections/ && git commit -m "feat: add Buttons, Inputs, Badges kitchen-sink sections"
```

---

## Task 18: Kitchen-sink — Cards, Vacancy, Assets sections

**Files:**
- Create: `smena-ds/src/app/design-system/sections/CardsSection.tsx`
- Create: `smena-ds/src/app/design-system/sections/VacancySection.tsx`
- Create: `smena-ds/src/app/design-system/sections/AssetsSection.tsx`

**Step 1: Create CardsSection.tsx**

```tsx
// smena-ds/src/app/design-system/sections/CardsSection.tsx
import { SmenaCard, SmenaButton } from '@/components/smena'
import { SectionWrapper } from './SectionWrapper'

export function CardsSection() {
  return (
    <SectionWrapper id="cards" title="08 Cards">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-smena-base">
        <SmenaCard title="Simple Card">
          <p className="text-smena-base text-smena-text-secondary">Базовая карточка с заголовком и контентом.</p>
        </SmenaCard>
        <SmenaCard title="With Extra" extra={<SmenaButton smenaVariant="link" smenaSize="sm">Ещё</SmenaButton>}>
          <p className="text-smena-base text-smena-text-secondary">Карточка с дополнительным действием.</p>
        </SmenaCard>
        <SmenaCard title="Hoverable" hoverable footer="Последнее обновление: сегодня">
          <p className="text-smena-base text-smena-text-secondary">Карточка с эффектом при наведении и подвалом.</p>
        </SmenaCard>
        <SmenaCard bordered={false} className="bg-smena-primary-bg">
          <p className="text-smena-base text-smena-primary font-medium">Без рамки, фон primary-bg</p>
        </SmenaCard>
      </div>
    </SectionWrapper>
  )
}
```

**Step 2: Create VacancySection.tsx**

```tsx
// smena-ds/src/app/design-system/sections/VacancySection.tsx
import { VacancyCard } from '@/components/smena'
import { SectionWrapper } from './SectionWrapper'

export function VacancySection() {
  return (
    <SectionWrapper id="vacancy" title="09 Vacancy Cards">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-smena-base">
        <VacancyCard
          title="Кассир в гипермаркет"
          partner="auchan"
          profession="kassir"
          professionVariant={1}
          salary="55 000 ₽"
          location="Санкт-Петербург, Невский р-н"
          status="success"
          statusText="Активна"
          schedule="Сменный"
        />
        <VacancyCard
          title="Повар горячего цеха"
          partner="azbuka_vkusa"
          profession="povar"
          professionVariant={2}
          salary="65 000 ₽"
          location="Санкт-Петербург, Центр"
          status="processing"
          statusText="Новая"
          schedule="5/2"
        />
        <VacancyCard
          title="Комплектовщик склада"
          partner="magnit"
          profession="komplektovshik_sklad"
          professionVariant={1}
          salary="48 000 ₽"
          location="Санкт-Петербург, Мурино"
          status="warning"
          statusText="Скоро закроется"
          schedule="2/2"
        />
        <VacancyCard
          title="Пекарь в супермаркет"
          partner="lenta"
          profession="pecar"
          professionVariant={3}
          salary="52 000 ₽"
          location="Санкт-Петербург, Купчино"
          status="success"
          statusText="Активна"
          schedule="Сменный"
        />
        <VacancyCard
          title="Упаковщик"
          partner="spar"
          profession="upakivshik"
          professionVariant={1}
          salary="44 000 ₽"
          location="Санкт-Петербург, Пушкин"
          status="success"
          statusText="Активна"
          schedule="4/3"
        />
        <VacancyCard
          title="Комплектовщик"
          partner="magnit"
          profession="komplectovshik"
          professionVariant={2}
          salary="50 000 ₽"
          location="Санкт-Петербург, Шушары"
          status="error"
          statusText="Приостановлена"
          schedule="2/2"
        />
      </div>
    </SectionWrapper>
  )
}
```

**Step 3: Create AssetsSection.tsx**

```tsx
// smena-ds/src/app/design-system/sections/AssetsSection.tsx
import Image from 'next/image'
import { PartnerLogo, ProfessionImage } from '@/components/smena'
import { PARTNERS, PROFESSIONS, PROFESSION_LABELS, APP_SCREENSHOTS, QR_CODE, LOGO_ASSETS } from '@/lib/assets'
import type { PartnerKey, ProfessionKey } from '@/lib/assets'
import { SectionWrapper } from './SectionWrapper'
import { SmenaCard } from '@/components/smena'

export function AssetsSection() {
  return (
    <SectionWrapper id="assets" title="10 Partners &amp; Assets">
      {/* Logo */}
      <h3 className="text-smena-lg font-semibold text-smena-text mb-smena-sm">Logo</h3>
      <div className="flex items-center gap-smena-xl mb-smena-xl flex-wrap">
        <div className="bg-smena-bg-container p-smena-base rounded-lg border border-smena-border">
          <Image src={LOGO_ASSETS.primary} alt="Smena logo" width={120} height={40} className="object-contain" />
        </div>
        <div className="bg-smena-primary p-smena-base rounded-lg">
          <Image src={LOGO_ASSETS.white} alt="Smena logo white" width={120} height={40} className="object-contain" />
        </div>
        <div className="bg-smena-bg-container p-smena-sm rounded-lg border border-smena-border">
          <Image src={LOGO_ASSETS.icon} alt="Smena icon" width={40} height={40} className="object-contain" />
        </div>
      </div>

      {/* Partners */}
      <h3 className="text-smena-lg font-semibold text-smena-text mb-smena-sm">Partners</h3>
      <div className="flex flex-wrap gap-smena-base items-center mb-smena-xl">
        {(Object.keys(PARTNERS) as PartnerKey[]).map(key => (
          <SmenaCard key={key} className="flex flex-col items-center gap-smena-xs p-smena-base" bodyClassName="!p-smena-base">
            <PartnerLogo partner={key} size="full" width={100} height={36} />
            <p className="text-smena-sm text-smena-text-secondary">{PARTNERS[key].name}</p>
          </SmenaCard>
        ))}
      </div>

      {/* Professions */}
      <h3 className="text-smena-lg font-semibold text-smena-text mb-smena-sm">Professions</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-smena-sm mb-smena-xl">
        {(Object.keys(PROFESSIONS) as ProfessionKey[]).map(key => (
          <ProfessionImage
            key={key}
            profession={key}
            variant={1}
            width={200}
            height={150}
            className="w-full h-36 object-cover"
            showLabel
          />
        ))}
      </div>

      {/* App Screenshots */}
      <h3 className="text-smena-lg font-semibold text-smena-text mb-smena-sm">App Screenshots</h3>
      <div className="flex flex-wrap gap-smena-base mb-smena-xl">
        {Object.entries(APP_SCREENSHOTS).map(([key, src]) => (
          <div key={key} className="relative w-48 rounded-2xl overflow-hidden border-4 border-smena-text shadow-smena-dropdown bg-black">
            <Image src={src} alt={key} width={200} height={400} className="w-full object-cover" />
          </div>
        ))}
      </div>

      {/* QR */}
      <h3 className="text-smena-lg font-semibold text-smena-text mb-smena-sm">QR Code</h3>
      <div className="bg-white p-smena-base rounded-lg inline-block border border-smena-border shadow-smena-card">
        <Image src={QR_CODE} alt="Smena QR code" width={120} height={120} />
      </div>
    </SectionWrapper>
  )
}
```

**Step 4: Verify build**

```bash
cd "/Users/alexandrasandra/Smena priject 1/smena-ds" && npm run build
```

Expected: Build succeeds. Check for any missing image domains in `next.config.ts` — if you see image errors, add the domains to `images.localPatterns`.

**Step 5: Commit**

```bash
git add src/app/design-system/sections/ && git commit -m "feat: add Cards, Vacancy, Assets kitchen-sink sections"
```

---

## Task 19: Configure next.config.ts for local images

**Files:**
- Modify: `smena-ds/next.config.ts`

**Step 1: Update next.config.ts**

```ts
// smena-ds/next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // all assets are local static files in public/
  },
}
export default nextConfig
```

**Step 2: Final build verification**

```bash
cd "/Users/alexandrasandra/Smena priject 1/smena-ds" && npm run build
```

Expected: Build succeeds with zero errors.

**Step 3: Start dev server and verify page loads**

```bash
npm run dev
```

Open http://localhost:3000/design-system — verify all 10 sections render.

**Step 4: Final commit**

```bash
git add next.config.ts && git commit -m "chore: configure next/image for local static assets"
```

---

## Task 20: Update root page to redirect to /design-system

**Files:**
- Modify: `smena-ds/src/app/page.tsx`

**Step 1: Replace default Next.js page**

```tsx
// smena-ds/src/app/page.tsx
import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/design-system')
}
```

**Step 2: Final build + commit**

```bash
cd "/Users/alexandrasandra/Smena priject 1/smena-ds" && npm run build && git add src/app/page.tsx && git commit -m "chore: redirect root to /design-system"
```

---

## Summary

| Task | Deliverable |
|---|---|
| 1 | Next.js 14 project scaffolded |
| 2 | shadcn/ui installed with 11 base components |
| 3 | Assets copied to public/ |
| 4 | globals.css — 3-layer token system |
| 5 | tailwind.config.ts — Smena extensions |
| 6 | layout.tsx — Inter font with Cyrillic |
| 7 | lib/assets.ts — typed asset registry |
| 8 | SmenaButton |
| 9 | SmenaInput |
| 10 | SmenaBadge |
| 11 | SmenaCard |
| 12 | PartnerLogo + ProfessionImage |
| 13 | VacancyCard |
| 14 | components/smena/index.ts barrel |
| 15 | /design-system page shell + nav |
| 16 | Colors, Typography, Spacing, Shadows sections |
| 17 | Buttons, Inputs, Badges sections |
| 18 | Cards, Vacancy, Assets sections |
| 19 | next.config.ts image setup |
| 20 | Root redirect |
