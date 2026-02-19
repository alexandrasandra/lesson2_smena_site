import Image from 'next/image'
import { SmenaButton } from '@/components/smena'
import { APP_SCREENSHOTS } from '@/lib/assets'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--smena-blue-5)] via-smena-primary to-[var(--smena-blue-7)] py-16 md:py-20">
      <div className="max-w-[1120px] mx-auto px-smena-base">
        <div className="grid md:grid-cols-2 gap-smena-xl items-center">
          {/* Left: text content */}
          <div className="text-white">
            <h1 className="text-[32px] md:text-[42px] font-bold leading-[1.15] mb-smena-base tracking-tight">
              Подработка рядом,
              <br />
              ваш доход{' '}
              <span className="relative inline-block">
                <span className="relative z-10">начинается здесь</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-[var(--smena-gold-4)]/40 rounded-sm -z-0" />
              </span>
            </h1>
            <p className="text-smena-lg text-white/80 mb-smena-lg max-w-[420px] leading-relaxed">
              Находите подработку рядом с домом. Гибкий график, быстрые выплаты, проверенные работодатели.
            </p>
            <div className="flex flex-wrap gap-smena-sm">
              <SmenaButton
                smenaVariant="default"
                smenaSize="lg"
                className="bg-white text-smena-text border-0 hover:bg-white/90 shadow-smena-card"
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

          {/* Right: phone screenshots */}
          <div className="relative flex justify-center items-end gap-4 mt-8 md:mt-0">
            <div className="relative w-[180px] h-[370px] md:w-[210px] md:h-[430px] rounded-[24px] overflow-hidden shadow-smena-modal border-[3px] border-white/20">
              <Image
                src={APP_SCREENSHOTS.searchList}
                alt="Smena — поиск смен"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative w-[180px] h-[370px] md:w-[210px] md:h-[430px] rounded-[24px] overflow-hidden shadow-smena-modal border-[3px] border-white/20 translate-y-6">
              <Image
                src={APP_SCREENSHOTS.vacancy}
                alt="Smena — карточка вакансии"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/[0.04]" />
      <div className="absolute top-1/2 -left-16 w-72 h-72 rounded-full bg-white/[0.04]" />
      <div className="absolute bottom-10 right-1/4 w-4 h-4 rounded-full bg-white/20" />
      <div className="absolute top-20 left-1/3 w-3 h-3 rounded-full bg-white/15" />
    </section>
  )
}
