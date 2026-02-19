import Image from 'next/image'
import { PartnerLogo, ProfessionImage } from '@/components/smena'
import { PARTNERS, PROFESSIONS, PROFESSION_LABELS, APP_SCREENSHOTS, QR_CODE, LOGO_ASSETS } from '@/lib/assets'
import type { PartnerKey, ProfessionKey } from '@/lib/assets'
import { SectionWrapper } from './SectionWrapper'

export function AssetsSection() {
  return (
    <SectionWrapper id="assets" title="10 Partners &amp; Assets">
      {/* Logo */}
      <h3 className="font-semibold mb-4 mt-0" style={{ fontSize: '16px', color: 'var(--smena-text)' }}>Logo</h3>
      <div className="flex items-center gap-8 mb-10 flex-wrap">
        <div className="p-4 rounded-lg border" style={{ backgroundColor: 'var(--smena-bg-container)', borderColor: 'var(--smena-border)' }}>
          <Image src={LOGO_ASSETS.primary} alt="Smena logo" width={120} height={40} className="object-contain" />
        </div>
        <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--smena-primary)' }}>
          <Image src={LOGO_ASSETS.white} alt="Smena logo white" width={120} height={40} className="object-contain" />
        </div>
        <div className="p-3 rounded-lg border" style={{ backgroundColor: 'var(--smena-bg-container)', borderColor: 'var(--smena-border)' }}>
          <Image src={LOGO_ASSETS.icon} alt="Smena icon" width={40} height={40} className="object-contain" />
        </div>
      </div>

      {/* Partners */}
      <h3 className="font-semibold mb-4" style={{ fontSize: '16px', color: 'var(--smena-text)' }}>Partners</h3>
      <div className="flex flex-wrap gap-4 items-stretch mb-10">
        {(Object.keys(PARTNERS) as PartnerKey[]).map(key => (
          <div
            key={key}
            className="flex flex-col items-center gap-2 p-4 rounded-lg border"
            style={{ backgroundColor: 'var(--smena-bg-container)', borderColor: 'var(--smena-border)' }}
          >
            <PartnerLogo partner={key} size="full" width={100} height={36} />
            <p className="text-xs" style={{ color: 'var(--smena-text-secondary)' }}>{PARTNERS[key].name}</p>
          </div>
        ))}
      </div>

      {/* Professions */}
      <h3 className="font-semibold mb-4" style={{ fontSize: '16px', color: 'var(--smena-text)' }}>Professions</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
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
      <h3 className="font-semibold mb-4" style={{ fontSize: '16px', color: 'var(--smena-text)' }}>App Screenshots</h3>
      <div className="flex flex-wrap gap-4 mb-10">
        {(Object.entries(APP_SCREENSHOTS) as [string, string][]).map(([key, src]) => (
          <div
            key={key}
            className="relative w-40 rounded-2xl overflow-hidden border-4"
            style={{ borderColor: '#1c1c1e', backgroundColor: '#000' }}
          >
            <Image src={src} alt={key} width={160} height={320} className="w-full object-cover" />
          </div>
        ))}
      </div>

      {/* QR */}
      <h3 className="font-semibold mb-4" style={{ fontSize: '16px', color: 'var(--smena-text)' }}>QR Code</h3>
      <div className="p-4 rounded-lg border inline-block shadow-smena-card" style={{ backgroundColor: 'white', borderColor: 'var(--smena-border)' }}>
        <Image src={QR_CODE} alt="Smena QR code" width={120} height={120} />
      </div>
    </SectionWrapper>
  )
}
