# Smena Landing Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a landing page for the Smena app at route `/`, with 9 content sections + header + footer, using the existing Smena design system components and tokens.

**Architecture:** Each section is a separate React component in `src/app/sections/`. The main `page.tsx` composes all sections. All data is hardcoded (UI-only). The existing `/design-system` route remains unchanged.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4 with Smena design tokens, shadcn/ui + custom Smena components, lucide-react icons.

---

## Prerequisites

### Task 0: Install additional shadcn components

**Step 1: Install carousel for Reviews section**

Run: `cd "/Users/alexandrasandra/Smena project 2 lesson/smena-ds" && npx shadcn@latest add carousel`

**Step 2: Verify installation**

Check that `src/components/ui/carousel.tsx` exists.

**Step 3: Commit**

```bash
git add src/components/ui/carousel.tsx
git commit -m "chore: add shadcn carousel component for reviews section"
```

---

## Task 1: Create Header component

**Files:**
- Create: `src/app/sections/Header.tsx`

**Step 1: Create the Header component**

```tsx
'use client'

import Image from 'next/image'
import { SmenaButton } from '@/components/smena'
import { LOGO_ASSETS } from '@/lib/assets'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Вакансии', href: '#vacancies' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-smena-bg-container/95 backdrop-blur shadow-smena-card">
      <div className="max-w-6xl mx-auto px-smena-base flex items-center justify-between h-16">
        <a href="#" className="shrink-0">
          <Image src={LOGO_ASSETS.primary} alt="Smena" width={110} height={32} />
        </a>

        <nav className="hidden md:flex items-center gap-smena-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-smena-base text-smena-text-secondary hover:text-smena-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <SmenaButton smenaVariant="primary" smenaSize="md">
            Скачать приложение
          </SmenaButton>
        </div>

        <button
          className="md:hidden p-2 text-smena-text"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-smena-border-secondary px-smena-base pb-smena-base">
          <nav className="flex flex-col gap-smena-sm pt-smena-sm">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-smena-base text-smena-text-secondary hover:text-smena-primary py-smena-xxs"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <SmenaButton smenaVariant="primary" smenaSize="md" block className="mt-smena-xs">
              Скачать приложение
            </SmenaButton>
          </nav>
        </div>
      )}
    </header>
  )
}
```

**Step 2: Commit**

```bash
git add src/app/sections/Header.tsx
git commit -m "feat: add Header component with nav links and mobile menu"
```

---

## Task 2: Create Hero section

**Files:**
- Create: `src/app/sections/HeroSection.tsx`

**Step 1: Create the HeroSection component**

Per the reference: blue gradient background, big headline "Подработка рядом, ваш доход начинается здесь", highlighted text in gold/yellow, two phone screenshots, download buttons.

```tsx
import Image from 'next/image'
import { SmenaButton } from '@/components/smena'
import { APP_SCREENSHOTS } from '@/lib/assets'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-smena-primary to-[var(--smena-blue-7)] py-smena-xxl md:py-20">
      <div className="max-w-6xl mx-auto px-smena-base">
        <div className="grid md:grid-cols-2 gap-smena-xl items-center">
          <div className="text-white">
            <h1 className="text-smena-h1 md:text-[44px] font-bold leading-tight mb-smena-base">
              Подработка рядом,{' '}
              <br />
              ваш доход{' '}
              <span className="text-[var(--smena-gold-4)]">начинается здесь</span>
            </h1>
            <p className="text-smena-lg text-white/80 mb-smena-lg max-w-md">
              Находите подработку рядом с домом. Гибкий график, быстрые выплаты, проверенные работодатели.
            </p>
            <div className="flex flex-wrap gap-smena-sm">
              <SmenaButton smenaVariant="default" smenaSize="lg" className="bg-white text-smena-text border-0 hover:bg-white/90">
                App Store
              </SmenaButton>
              <SmenaButton smenaVariant="default" smenaSize="lg" className="bg-white text-smena-text border-0 hover:bg-white/90">
                Google Play
              </SmenaButton>
            </div>
          </div>

          <div className="relative flex justify-center items-end gap-smena-sm">
            <div className="relative w-44 h-[360px] md:w-52 md:h-[420px] rounded-2xl overflow-hidden shadow-smena-modal">
              <Image
                src={APP_SCREENSHOTS.searchList}
                alt="Smena — поиск смен"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-44 h-[360px] md:w-52 md:h-[420px] rounded-2xl overflow-hidden shadow-smena-modal -mb-8">
              <Image
                src={APP_SCREENSHOTS.vacancy}
                alt="Smena — карточка вакансии"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5" />
      <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-white/5" />
    </section>
  )
}
```

**Step 2: Commit**

```bash
git add src/app/sections/HeroSection.tsx
git commit -m "feat: add Hero section with app screenshots and download CTAs"
```

---

## Task 3: Create Vacancies section

**Files:**
- Create: `src/app/sections/VacanciesSection.tsx`

**Step 1: Create the VacanciesSection component**

Uses `VacancyCard` and `SmenaBadge` with hardcoded vacancy data.

```tsx
import { VacancyCard } from '@/components/smena'
import { SmenaBadge } from '@/components/smena'

const VACANCY_DATA = [
  { title: 'Кассир', partner: 'auchan' as const, profession: 'kassir' as const, salary: '35 000 ₽', location: 'м. Купчино', schedule: '2/2' },
  { title: 'Комплектовщик', partner: 'magnit' as const, profession: 'komplectovshik' as const, salary: '42 000 ₽', location: 'м. Ладожская', schedule: 'Сменный' },
  { title: 'Пекарь', partner: 'lenta' as const, profession: 'pecar' as const, salary: '38 000 ₽', location: 'м. Проспект Просвещения', schedule: '5/2' },
  { title: 'Повар', partner: 'spar' as const, profession: 'povar' as const, salary: '45 000 ₽', location: 'м. Невский проспект', schedule: 'Сменный' },
  { title: 'Упаковщик', partner: 'azbuka_vkusa' as const, profession: 'upakivshik' as const, salary: '32 000 ₽', location: 'м. Московская', schedule: '2/2' },
  { title: 'Комплектовщик склада', partner: 'auchan' as const, profession: 'komplektovshik_sklad' as const, salary: '40 000 ₽', location: 'м. Дыбенко', schedule: '5/2' },
]

const FILTERS = ['Все', 'Кассир', 'Комплектовщик', 'Повар', 'Пекарь', 'Упаковщик']

export function VacanciesSection() {
  return (
    <section id="vacancies" className="py-smena-xxl bg-smena-bg-layout">
      <div className="max-w-6xl mx-auto px-smena-base">
        <h2 className="text-smena-h2 font-bold text-smena-text mb-smena-xs">
          Доступные смены в <span className="text-smena-primary">Санкт-Петербурге</span>
        </h2>
        <p className="text-smena-lg text-smena-text-secondary mb-smena-lg">
          Выберите подходящую вакансию и откликнитесь прямо сейчас
        </p>

        <div className="flex flex-wrap gap-smena-xs mb-smena-lg">
          {FILTERS.map((filter, i) => (
            <SmenaBadge
              key={filter}
              status={i === 0 ? 'processing' : 'default'}
              variant="tag"
              text={filter}
              className="cursor-pointer"
            />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-smena-base">
          {VACANCY_DATA.map((vacancy) => (
            <VacancyCard key={vacancy.title + vacancy.partner} {...vacancy} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Commit**

```bash
git add src/app/sections/VacanciesSection.tsx
git commit -m "feat: add Vacancies section with vacancy cards grid"
```

---

## Task 4: Create Advantages section

**Files:**
- Create: `src/app/sections/AdvantagesSection.tsx`

**Step 1: Create the AdvantagesSection component**

Per reference: "Подработка с комфортом, без лишней бумажки". Feature cards with icons.

```tsx
import { SmenaCard } from '@/components/smena'
import { Clock, Wallet, Shield, MapPin } from 'lucide-react'

const ADVANTAGES = [
  {
    icon: Clock,
    title: 'Гибкий график',
    description: 'Выбирайте смены, которые подходят именно вам. Работайте когда удобно.',
  },
  {
    icon: Wallet,
    title: 'Быстрые выплаты',
    description: 'Получайте оплату сразу после смены. Без задержек и бюрократии.',
  },
  {
    icon: Shield,
    title: 'Официальное оформление',
    description: 'Работайте легально. Все партнёры проверены и соблюдают ТК РФ.',
  },
  {
    icon: MapPin,
    title: 'Рядом с домом',
    description: 'Находите смены в пешей доступности. Экономьте время на дорогу.',
  },
]

export function AdvantagesSection() {
  return (
    <section id="advantages" className="py-smena-xxl bg-smena-bg-container">
      <div className="max-w-6xl mx-auto px-smena-base">
        <h2 className="text-smena-h2 font-bold text-smena-text mb-smena-xs text-center">
          Подработка с комфортом, <span className="text-smena-primary">без лишней бумажки</span>
        </h2>
        <p className="text-smena-lg text-smena-text-secondary mb-smena-xl text-center max-w-2xl mx-auto">
          Мы сделали процесс поиска подработки максимально простым и удобным
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-smena-base">
          {ADVANTAGES.map((item) => (
            <SmenaCard key={item.title} hoverable className="text-center">
              <div className="w-12 h-12 rounded-full bg-smena-primary-bg flex items-center justify-center mx-auto mb-smena-sm">
                <item.icon className="w-6 h-6 text-smena-primary" />
              </div>
              <h3 className="text-smena-lg font-semibold text-smena-text mb-smena-xxs">
                {item.title}
              </h3>
              <p className="text-smena-base text-smena-text-secondary">
                {item.description}
              </p>
            </SmenaCard>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Commit**

```bash
git add src/app/sections/AdvantagesSection.tsx
git commit -m "feat: add Advantages section with feature cards"
```

---

## Task 5: Create Partners section

**Files:**
- Create: `src/app/sections/PartnersSection.tsx`

**Step 1: Create the PartnersSection component**

Per reference: "Нам доверяют лидеры рынка". Partner logos in a row.

```tsx
import { PartnerLogo } from '@/components/smena'
import type { PartnerKey } from '@/lib/assets'

const PARTNER_KEYS: PartnerKey[] = ['auchan', 'magnit', 'lenta', 'spar', 'azbuka_vkusa']

export function PartnersSection() {
  return (
    <section className="py-smena-xl bg-smena-bg-layout border-y border-smena-border-secondary">
      <div className="max-w-6xl mx-auto px-smena-base">
        <p className="text-smena-lg text-smena-text-secondary text-center mb-smena-lg">
          Нам доверяют <span className="text-smena-primary font-semibold">лидеры рынка</span>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-smena-xl md:gap-smena-xxl">
          {PARTNER_KEYS.map((partner) => (
            <PartnerLogo
              key={partner}
              partner={partner}
              size="full"
              width={100}
              height={40}
              className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Commit**

```bash
git add src/app/sections/PartnersSection.tsx
git commit -m "feat: add Partners section with partner logos"
```

---

## Task 6: Create Audience section

**Files:**
- Create: `src/app/sections/AudienceSection.tsx`

**Step 1: Create the AudienceSection component**

Per reference: "Кому подходит Smena?" with target audience cards.

```tsx
import { SmenaCard } from '@/components/smena'
import { GraduationCap, Baby, Clock, Briefcase } from 'lucide-react'

const AUDIENCES = [
  {
    icon: GraduationCap,
    title: 'Студентам',
    description: 'Подработка между парами. Гибкий график, который подстраивается под учёбу.',
  },
  {
    icon: Baby,
    title: 'Мамам в декрете',
    description: 'Дополнительный доход без привязки к офису. Выбирайте удобные часы.',
  },
  {
    icon: Clock,
    title: 'Пенсионерам',
    description: 'Лёгкая подработка рядом с домом. Стабильный дополнительный заработок.',
  },
  {
    icon: Briefcase,
    title: 'Ищущим подработку',
    description: 'Найдите дополнительный источник дохода. Работайте в свободное время.',
  },
]

export function AudienceSection() {
  return (
    <section className="py-smena-xxl bg-smena-bg-container">
      <div className="max-w-6xl mx-auto px-smena-base">
        <h2 className="text-smena-h2 font-bold text-smena-text mb-smena-lg text-center">
          Кому подходит <span className="text-smena-primary">Smena?</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-smena-base">
          {AUDIENCES.map((item) => (
            <SmenaCard key={item.title} bordered hoverable>
              <div className="w-10 h-10 rounded-smena-default bg-smena-primary-bg flex items-center justify-center mb-smena-sm">
                <item.icon className="w-5 h-5 text-smena-primary" />
              </div>
              <h3 className="text-smena-lg font-semibold text-smena-text mb-smena-xxs">
                {item.title}
              </h3>
              <p className="text-smena-base text-smena-text-secondary">
                {item.description}
              </p>
            </SmenaCard>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Commit**

```bash
git add src/app/sections/AudienceSection.tsx
git commit -m "feat: add Audience section with target audience cards"
```

---

## Task 7: Create Reviews section

**Files:**
- Create: `src/app/sections/ReviewsSection.tsx`

**Step 1: Create the ReviewsSection component**

Uses shadcn Carousel + SmenaCard + Avatar. Review cards with stars.

```tsx
'use client'

import { SmenaCard } from '@/components/smena'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Star } from 'lucide-react'

const REVIEWS = [
  {
    name: 'Анна К.',
    initials: 'АК',
    role: 'Кассир, 25 лет',
    rating: 5,
    text: 'Удобное приложение! Нашла подработку рядом с домом за 10 минут. Выплаты приходят быстро, работодатели проверенные.',
  },
  {
    name: 'Дмитрий П.',
    initials: 'ДП',
    role: 'Комплектовщик, 32 года',
    rating: 5,
    text: 'Работаю через Смену уже полгода. Отличный выбор смен, можно планировать график под себя. Рекомендую!',
  },
  {
    name: 'Елена С.',
    initials: 'ЕС',
    role: 'Пекарь, 28 лет',
    rating: 4,
    text: 'Очень удобно выбирать смены на карте. Вижу, что рядом с моим домом, и сразу откликаюсь. Спасибо команде Smena!',
  },
  {
    name: 'Михаил Т.',
    initials: 'МТ',
    role: 'Упаковщик, 19 лет',
    rating: 5,
    text: 'Как студенту — идеально. Подрабатываю между парами, график гибкий, деньги на карту приходят сразу.',
  },
  {
    name: 'Ольга Н.',
    initials: 'ОН',
    role: 'Повар, 45 лет',
    rating: 5,
    text: 'Нашла подработку за один день. Всё официально, оформление через приложение. Очень довольна!',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? 'fill-[var(--smena-gold-5)] text-[var(--smena-gold-5)]' : 'text-smena-border'}
        />
      ))}
    </div>
  )
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-smena-xxl bg-smena-bg-layout">
      <div className="max-w-6xl mx-auto px-smena-base">
        <h2 className="text-smena-h2 font-bold text-smena-text mb-smena-xs text-center">
          Что говорят <span className="text-smena-primary">исполнители</span> о работе через Smena
        </h2>
        <p className="text-smena-lg text-smena-text-secondary mb-smena-xl text-center">
          Реальные отзывы наших исполнителей
        </p>

        <Carousel opts={{ align: 'start', loop: true }} className="w-full">
          <CarouselContent className="-ml-smena-base">
            {REVIEWS.map((review) => (
              <CarouselItem key={review.name} className="pl-smena-base md:basis-1/2 lg:basis-1/3">
                <SmenaCard className="h-full">
                  <div className="flex items-center gap-smena-sm mb-smena-sm">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-smena-primary-bg text-smena-primary text-smena-sm font-medium">
                        {review.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-smena-base font-semibold text-smena-text">{review.name}</p>
                      <p className="text-smena-sm text-smena-text-secondary">{review.role}</p>
                    </div>
                  </div>
                  <StarRating rating={review.rating} />
                  <p className="text-smena-base text-smena-text-secondary mt-smena-sm leading-relaxed">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </SmenaCard>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </Carousel>
      </div>
    </section>
  )
}
```

**Step 2: Commit**

```bash
git add src/app/sections/ReviewsSection.tsx
git commit -m "feat: add Reviews section with carousel and star ratings"
```

---

## Task 8: Create Comparison section

**Files:**
- Create: `src/app/sections/ComparisonSection.tsx`

**Step 1: Create the ComparisonSection component**

Per reference: comparison table Smena vs Avito etc. with checkmarks.

```tsx
import { Check, X } from 'lucide-react'

const CRITERIA = [
  { label: 'Моментальные выплаты', smena: true, others: false },
  { label: 'Официальное оформление', smena: true, others: true },
  { label: 'Гибкий посменный график', smena: true, others: false },
  { label: 'Карта смен рядом с домом', smena: true, others: false },
  { label: 'Проверенные работодатели', smena: true, others: true },
  { label: 'Без резюме и собеседований', smena: true, others: false },
  { label: 'Поддержка 24/7', smena: true, others: false },
]

function CellIcon({ value }: { value: boolean }) {
  return value ? (
    <div className="w-6 h-6 rounded-full bg-smena-success-bg flex items-center justify-center mx-auto">
      <Check size={14} className="text-smena-success" />
    </div>
  ) : (
    <div className="w-6 h-6 rounded-full bg-smena-error-bg flex items-center justify-center mx-auto">
      <X size={14} className="text-smena-error" />
    </div>
  )
}

export function ComparisonSection() {
  return (
    <section className="py-smena-xxl bg-smena-bg-container">
      <div className="max-w-3xl mx-auto px-smena-base">
        <h2 className="text-smena-h2 font-bold text-smena-text mb-smena-xs text-center">
          Забудьте о сложностях с <span className="text-smena-primary">Навигатор подработки</span>
        </h2>
        <p className="text-smena-lg text-smena-text-secondary mb-smena-xl text-center">
          Сравните возможности Smena App с другими платформами
        </p>

        <div className="rounded-smena-lg border border-smena-border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-smena-primary-bg">
                <th className="text-left text-smena-base font-semibold text-smena-text p-smena-sm" />
                <th className="text-center text-smena-base font-bold text-smena-primary p-smena-sm w-28">
                  Smena App
                </th>
                <th className="text-center text-smena-base font-semibold text-smena-text-secondary p-smena-sm w-28">
                  Другие
                </th>
              </tr>
            </thead>
            <tbody>
              {CRITERIA.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? 'bg-smena-bg-container' : 'bg-smena-fill-secondary'}>
                  <td className="text-smena-base text-smena-text p-smena-sm">{row.label}</td>
                  <td className="p-smena-sm"><CellIcon value={row.smena} /></td>
                  <td className="p-smena-sm"><CellIcon value={row.others} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Commit**

```bash
git add src/app/sections/ComparisonSection.tsx
git commit -m "feat: add Comparison section with feature comparison table"
```

---

## Task 9: Create Install section

**Files:**
- Create: `src/app/sections/InstallSection.tsx`

**Step 1: Create the InstallSection component**

Per reference: "Всего 3 шага до первых денег", numbered steps, QR code, download buttons.

```tsx
import Image from 'next/image'
import { SmenaButton } from '@/components/smena'
import { QR_CODE } from '@/lib/assets'
import { Download, UserPlus, Search } from 'lucide-react'

const STEPS = [
  { number: 1, icon: Download, title: 'Скачайте приложение', description: 'Установите Smena из App Store или Google Play' },
  { number: 2, icon: UserPlus, title: 'Зарегистрируйтесь', description: 'Быстрая регистрация за 2 минуты. Без резюме.' },
  { number: 3, icon: Search, title: 'Выберите смену', description: 'Найдите подработку рядом с домом и откликнитесь' },
]

export function InstallSection() {
  return (
    <section className="py-smena-xxl bg-smena-primary-bg">
      <div className="max-w-6xl mx-auto px-smena-base">
        <h2 className="text-smena-h2 font-bold text-smena-text mb-smena-xs text-center">
          Всего <span className="text-smena-primary">3 шага</span> до первых денег
        </h2>
        <p className="text-smena-lg text-smena-text-secondary mb-smena-xl text-center">
          Начните зарабатывать уже сегодня
        </p>

        <div className="grid md:grid-cols-2 gap-smena-xl items-center">
          <div className="flex flex-col gap-smena-lg">
            {STEPS.map((step) => (
              <div key={step.number} className="flex gap-smena-base items-start">
                <div className="w-12 h-12 rounded-full bg-smena-primary text-white flex items-center justify-center shrink-0 text-smena-h4 font-bold">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-smena-lg font-semibold text-smena-text mb-smena-xxs">{step.title}</h3>
                  <p className="text-smena-base text-smena-text-secondary">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-smena-lg">
            <div className="bg-smena-bg-container p-smena-base rounded-smena-lg shadow-smena-card inline-block">
              <Image src={QR_CODE} alt="QR код для скачивания Smena" width={180} height={180} />
            </div>
            <p className="text-smena-sm text-smena-text-secondary">Наведите камеру на QR-код</p>
            <div className="flex gap-smena-sm">
              <SmenaButton smenaVariant="primary" smenaSize="lg">
                App Store
              </SmenaButton>
              <SmenaButton smenaVariant="primary" smenaSize="lg">
                Google Play
              </SmenaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Commit**

```bash
git add src/app/sections/InstallSection.tsx
git commit -m "feat: add Install section with 3 steps and QR code"
```

---

## Task 10: Create FAQ section

**Files:**
- Create: `src/app/sections/FAQSection.tsx`

**Step 1: Create the FAQSection component**

Uses existing shadcn Accordion component.

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const FAQ_DATA = [
  {
    question: 'Как зарегистрироваться на сайте?',
    answer: 'Скачайте приложение Smena из App Store или Google Play, пройдите быструю регистрацию — укажите имя, телефон и город. Никакого резюме не нужно.',
  },
  {
    question: 'Какие требования к исполнителям?',
    answer: 'Возраст от 18 лет, наличие документов (паспорт). Опыт работы не требуется — обучение проходит на месте.',
  },
  {
    question: 'Как быстро приходят выплаты за смену?',
    answer: 'Выплаты производятся в течение 1-3 рабочих дней после завершения смены. Деньги приходят на банковскую карту.',
  },
  {
    question: 'Можно ли выбирать удобное время для работы?',
    answer: 'Да! Вы сами выбираете смены из доступных. Гибкий график позволяет совмещать подработку с учёбой или основной работой.',
  },
  {
    question: 'Это легально? Будет ли официальное оформление?',
    answer: 'Да, все партнёры Smena работают официально. Оформление происходит через приложение в соответствии с ТК РФ.',
  },
  {
    question: 'Что делать, если возникли проблемы на смене?',
    answer: 'Свяжитесь с поддержкой Smena через приложение — мы работаем 24/7 и поможем решить любой вопрос.',
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-smena-xxl bg-smena-bg-container">
      <div className="max-w-3xl mx-auto px-smena-base">
        <h2 className="text-smena-h2 font-bold text-smena-text mb-smena-xs text-center">
          Отвечаем честно <span className="text-smena-primary">на важные вопросы</span>
        </h2>
        <p className="text-smena-lg text-smena-text-secondary mb-smena-xl text-center">
          Всё, что нужно знать о работе через Smena
        </p>

        <Accordion type="single" collapsible className="w-full">
          {FAQ_DATA.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-smena-lg text-smena-text font-medium text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-smena-base text-smena-text-secondary leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
```

**Step 2: Commit**

```bash
git add src/app/sections/FAQSection.tsx
git commit -m "feat: add FAQ section with accordion"
```

---

## Task 11: Create Footer component

**Files:**
- Create: `src/app/sections/Footer.tsx`

**Step 1: Create the Footer component**

```tsx
import Image from 'next/image'
import { LOGO_ASSETS } from '@/lib/assets'

export function Footer() {
  return (
    <footer className="bg-[var(--smena-blue-9)] text-white py-smena-xl">
      <div className="max-w-6xl mx-auto px-smena-base">
        <div className="flex flex-col md:flex-row items-center justify-between gap-smena-base">
          <Image src={LOGO_ASSETS.white} alt="Smena" width={110} height={32} />
          <nav className="flex flex-wrap gap-smena-lg">
            <a href="#vacancies" className="text-smena-base text-white/70 hover:text-white transition-colors">Вакансии</a>
            <a href="#advantages" className="text-smena-base text-white/70 hover:text-white transition-colors">Преимущества</a>
            <a href="#reviews" className="text-smena-base text-white/70 hover:text-white transition-colors">Отзывы</a>
            <a href="#faq" className="text-smena-base text-white/70 hover:text-white transition-colors">FAQ</a>
          </nav>
        </div>
        <div className="border-t border-white/10 mt-smena-lg pt-smena-lg text-center">
          <p className="text-smena-sm text-white/50">
            &copy; 2026 Smena. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
```

**Step 2: Commit**

```bash
git add src/app/sections/Footer.tsx
git commit -m "feat: add Footer component"
```

---

## Task 12: Assemble landing page

**Files:**
- Modify: `src/app/page.tsx` (replace redirect with landing page composition)

**Step 1: Replace page.tsx with landing page composition**

```tsx
import { Header } from './sections/Header'
import { HeroSection } from './sections/HeroSection'
import { VacanciesSection } from './sections/VacanciesSection'
import { AdvantagesSection } from './sections/AdvantagesSection'
import { PartnersSection } from './sections/PartnersSection'
import { AudienceSection } from './sections/AudienceSection'
import { ReviewsSection } from './sections/ReviewsSection'
import { ComparisonSection } from './sections/ComparisonSection'
import { InstallSection } from './sections/InstallSection'
import { FAQSection } from './sections/FAQSection'
import { Footer } from './sections/Footer'

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <VacanciesSection />
      <AdvantagesSection />
      <PartnersSection />
      <AudienceSection />
      <ReviewsSection />
      <ComparisonSection />
      <InstallSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
```

**Step 2: Update metadata in layout.tsx**

Change the title from "Smena Design System" to "Smena — Подработка рядом" and description accordingly.

**Step 3: Run dev server and verify**

Run: `cd "/Users/alexandrasandra/Smena project 2 lesson/smena-ds" && npm run dev`

Expected: Landing page renders at `http://localhost:3000` with all 11 sections visible.

**Step 4: Commit**

```bash
git add src/app/page.tsx src/app/layout.tsx
git commit -m "feat: assemble landing page with all sections"
```

---

## Task 13: Visual polish and responsive check

**Files:**
- Potentially adjust any section component

**Step 1: Check responsive breakpoints**

Verify the page looks correct at:
- Mobile: 375px
- Tablet: 768px
- Desktop: 1280px

**Step 2: Fix any spacing/alignment issues**

Review each section against the reference screenshot and fix any issues found.

**Step 3: Final commit**

```bash
git add -A
git commit -m "fix: responsive polish and alignment adjustments"
```
