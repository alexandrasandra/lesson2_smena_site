'use client'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
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
    <div className="min-h-screen" style={{ backgroundColor: 'var(--smena-bg-layout)' }}>
      {/* Top header */}
      <header className="sticky top-0 z-50 border-b px-4 py-2 flex items-center justify-between shadow-smena-card" style={{ backgroundColor: 'var(--smena-bg-container)', borderColor: 'var(--smena-border)' }}>
        <span className="font-bold tracking-tight" style={{ fontSize: '16px', color: 'var(--smena-text)' }}>Smena Design System</span>
        <button
          onClick={() => setDark(d => !d)}
          className="px-3 py-1 rounded border text-xs transition-colors hover:border-smena-primary hover:text-smena-primary"
          style={{ borderColor: 'var(--smena-border)', color: 'var(--smena-text-secondary)' }}
        >
          {dark ? '☀ Light' : '☾ Dark'}
        </button>
      </header>

      <div className="flex">
        {/* Sidebar — desktop */}
        <aside className="hidden lg:flex flex-col w-52 shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto border-r" style={{ backgroundColor: 'var(--smena-bg-container)', borderColor: 'var(--smena-border)' }}>
          <div className="py-4">
            {NAV_ITEMS.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActive(item.id)}
                className={cn(
                  'block px-4 py-2 text-sm transition-colors',
                  active === item.id
                    ? 'font-semibold border-r-2 border-smena-primary'
                    : 'hover:text-smena-primary',
                )}
                style={{
                  color: active === item.id ? 'var(--smena-primary)' : 'var(--smena-text-secondary)',
                  backgroundColor: active === item.id ? 'var(--smena-primary-bg)' : undefined,
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </aside>

        {/* Mobile pill nav */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 border-t px-2 py-2 overflow-x-auto flex gap-2" style={{ backgroundColor: 'var(--smena-bg-container)', borderColor: 'var(--smena-border)' }}>
          {NAV_ITEMS.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="shrink-0 px-3 py-1 rounded-full text-xs border transition-colors hover:border-smena-primary hover:text-smena-primary"
              style={{ borderColor: 'var(--smena-border)', color: 'var(--smena-text-secondary)', whiteSpace: 'nowrap' }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Main content */}
        <main className="flex-1 px-4 lg:px-12 py-8 pb-24 lg:pb-8 max-w-5xl">
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
