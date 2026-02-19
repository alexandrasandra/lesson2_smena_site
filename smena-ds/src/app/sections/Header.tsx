'use client'

import Image from 'next/image'
import { SmenaButton } from '@/components/smena'
import { LOGO_ASSETS } from '@/lib/assets'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Вакансии', href: '#vacancies' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Партнёры', href: '#partners' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-smena-bg-container/95 backdrop-blur-sm border-b border-smena-border-secondary">
      <div className="max-w-[1120px] mx-auto px-smena-base flex items-center justify-between h-16">
        <a href="#" className="shrink-0">
          <Image src={LOGO_ASSETS.primary} alt="Smena" width={110} height={32} priority />
        </a>

        <nav className="hidden md:flex items-center gap-smena-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-smena-base text-smena-text-secondary hover:text-smena-primary transition-colors font-medium"
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
          aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-smena-border-secondary bg-smena-bg-container px-smena-base pb-smena-base">
          <nav className="flex flex-col gap-smena-xs pt-smena-sm">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-smena-base text-smena-text-secondary hover:text-smena-primary py-smena-xxs font-medium"
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
