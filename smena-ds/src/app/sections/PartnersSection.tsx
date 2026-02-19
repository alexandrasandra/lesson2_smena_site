import { PartnerLogo } from '@/components/smena'
import type { PartnerKey } from '@/lib/assets'

const PARTNER_KEYS: PartnerKey[] = ['auchan', 'magnit', 'lenta', 'spar', 'azbuka_vkusa']

export function PartnersSection() {
  return (
    <section id="partners" className="py-smena-xl bg-smena-bg-container border-y border-smena-border-secondary">
      <div className="max-w-[1120px] mx-auto px-smena-base">
        <p className="text-smena-lg text-smena-text-secondary text-center mb-smena-lg">
          Нам доверяют{' '}
          <span className="text-smena-primary font-semibold">лидеры рынка</span>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-smena-xl md:gap-16">
          {PARTNER_KEYS.map((partner) => (
            <PartnerLogo
              key={partner}
              partner={partner}
              size="full"
              width={100}
              height={40}
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
