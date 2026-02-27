'use client'

import Image from 'next/image'
import { SmenaButton } from '@/components/smena'
import { LOGO_ASSETS } from '@/lib/assets'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Вакансии', href: '#vacancies' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Партнёрам', href: '#partners' },
  { label: 'Соискателям', href: '#reviews' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-[1120px] mx-auto px-smena-base flex items-center justify-between h-14">
        <a href="#" className="shrink-0 flex items-center">
          <Image src={LOGO_ASSETS.white} alt="Smena" width={100} height={28} priority />
        </a>

        <nav className="hidden md:flex items-center gap-smena-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-smena-sm text-white/70 hover:text-white transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <SmenaButton
            smenaVariant="default"
            smenaSize="sm"
            className="bg-white/15 text-white border border-white/25 hover:bg-white/25 backdrop-blur-sm"
          >
            Скачать приложение
          </SmenaButton>
        </div>

        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[var(--smena-blue-7)]/90 backdrop-blur-sm px-smena-base pb-smena-base border-t border-white/10">
          <nav className="flex flex-col gap-smena-xs pt-smena-sm">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-smena-base text-white/80 hover:text-white py-smena-xxs font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <SmenaButton
              smenaVariant="default"
              smenaSize="md"
              block
              className="mt-smena-xs bg-white/15 text-white border border-white/25 hover:bg-white/25"
            >
              Скачать приложение
            </SmenaButton>
          </nav>
        </div>
      )}
    </header>
  )
}
