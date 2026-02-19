import Image from 'next/image'
import { SmenaButton } from '@/components/smena'
import { LOGO_ASSETS } from '@/lib/assets'

export function Footer() {
  return (
    <footer className="bg-[var(--smena-blue-9)] text-white">
      {/* CTA banner */}
      <div className="py-12 text-center border-b border-white/10">
        <div className="max-w-[1120px] mx-auto px-smena-base">
          <h2 className="text-smena-h2 font-bold mb-smena-xxs">
            Тысячи смен в Санкт-Петербурге{' '}
            <span className="text-[var(--smena-gold-4)]">ждут исполнителей</span>
          </h2>
          <p className="text-smena-lg text-white/70 mb-smena-lg max-w-md mx-auto">
            Скачайте приложение и начните зарабатывать уже сегодня
          </p>
          <div className="flex justify-center gap-smena-sm">
            <SmenaButton
              smenaVariant="default"
              smenaSize="lg"
              className="bg-white text-smena-text border-0 hover:bg-white/90"
            >
              App Store
            </SmenaButton>
            <SmenaButton
              smenaVariant="default"
              smenaSize="lg"
              className="bg-white/15 text-white border border-white/30 hover:bg-white/25"
            >
              Google Play
            </SmenaButton>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-smena-lg">
        <div className="max-w-[1120px] mx-auto px-smena-base">
          <div className="flex flex-col md:flex-row items-center justify-between gap-smena-base">
            <Image src={LOGO_ASSETS.white} alt="Smena" width={100} height={28} />
            <nav className="flex flex-wrap justify-center gap-smena-lg">
              <a href="#vacancies" className="text-smena-sm text-white/60 hover:text-white transition-colors">
                Вакансии
              </a>
              <a href="#advantages" className="text-smena-sm text-white/60 hover:text-white transition-colors">
                Преимущества
              </a>
              <a href="#reviews" className="text-smena-sm text-white/60 hover:text-white transition-colors">
                Отзывы
              </a>
              <a href="#faq" className="text-smena-sm text-white/60 hover:text-white transition-colors">
                FAQ
              </a>
            </nav>
            <p className="text-smena-sm text-white/40">
              &copy; 2026 Smena
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
