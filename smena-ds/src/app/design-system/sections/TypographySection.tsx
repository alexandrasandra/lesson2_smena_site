import { SectionWrapper } from './SectionWrapper'

const HEADINGS = [
  { label: 'Heading 1', style: { fontSize: '38px', lineHeight: '46px', fontWeight: 600 }, meta: '38 / 46' },
  { label: 'Heading 2', style: { fontSize: '30px', lineHeight: '38px', fontWeight: 600 }, meta: '30 / 38' },
  { label: 'Heading 3', style: { fontSize: '24px', lineHeight: '32px', fontWeight: 600 }, meta: '24 / 32' },
  { label: 'Heading 4', style: { fontSize: '20px', lineHeight: '28px', fontWeight: 600 }, meta: '20 / 28' },
  { label: 'Heading 5', style: { fontSize: '16px', lineHeight: '24px', fontWeight: 600 }, meta: '16 / 24' },
]

const BODY = [
  { label: 'LG',   style: { fontSize: '16px', lineHeight: '24px' }, meta: '16 / 24' },
  { label: 'Base', style: { fontSize: '14px', lineHeight: '22px' }, meta: '14 / 22' },
  { label: 'SM',   style: { fontSize: '12px', lineHeight: '20px' }, meta: '12 / 20' },
]

export function TypographySection() {
  return (
    <SectionWrapper id="typography" title="02 Typography">
      <p className="text-xs mb-6 font-mono" style={{ color: 'var(--smena-text-secondary)' }}>Font: Inter · latin + cyrillic · Подработка рядом</p>
      <div className="flex flex-col gap-4 divide-y" style={{ '--tw-divide-color': 'var(--smena-border)' } as React.CSSProperties}>
        {HEADINGS.map(h => (
          <div key={h.label} className="pt-4 first:pt-0 flex items-baseline justify-between gap-4">
            <span style={{ ...h.style, color: 'var(--smena-text)' }}>{h.label}</span>
            <span className="text-xs shrink-0" style={{ color: 'var(--smena-text-tertiary)' }}>{h.meta}</span>
          </div>
        ))}
        {BODY.map(b => (
          <div key={b.label} className="pt-4 flex items-baseline justify-between gap-4 flex-wrap">
            <div className="flex gap-6 flex-wrap">
              <span style={{ ...b.style, color: 'var(--smena-text)' }}>{b.label} Normal</span>
              <span style={{ ...b.style, fontWeight: 700, color: 'var(--smena-text)' }}>{b.label} Strong</span>
              <span style={{ ...b.style, textDecoration: 'underline', color: 'var(--smena-text)' }}>{b.label} Underline</span>
              <span style={{ ...b.style, color: 'var(--smena-text-secondary)' }}>{b.label} Secondary</span>
            </div>
            <span className="text-xs shrink-0" style={{ color: 'var(--smena-text-tertiary)' }}>{b.meta}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
