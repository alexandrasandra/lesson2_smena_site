import { SectionWrapper } from './SectionWrapper'

const SPACING = [
  { label: 'XXS', value: 4 },
  { label: 'XS',  value: 8 },
  { label: 'SM',  value: 12 },
  { label: 'Base',value: 16 },
  { label: 'MD',  value: 20 },
  { label: 'LG',  value: 24 },
  { label: 'XL',  value: 32 },
  { label: 'XXL', value: 48 },
]

const RADIUS = [
  { label: 'XS',      borderRadius: '2px',    cssVar: '--radius-smena-xs' },
  { label: 'SM',      borderRadius: '4px',    cssVar: '--radius-smena-sm' },
  { label: 'Default', borderRadius: '6px',    cssVar: '--radius-smena-default' },
  { label: 'LG',      borderRadius: '8px',    cssVar: '--radius-smena-lg' },
  { label: 'Full',    borderRadius: '9999px', cssVar: 'full' },
]

export function SpacingSection() {
  return (
    <SectionWrapper id="spacing" title="03 Spacing &amp; Radius">
      <div className="flex flex-col gap-3 mb-10">
        {SPACING.map(s => (
          <div key={s.label} className="flex items-center gap-4">
            <span className="w-10 text-xs font-medium text-right shrink-0" style={{ color: 'var(--smena-text-secondary)' }}>{s.label}</span>
            <div className="rounded" style={{ width: s.value * 2, height: '16px', backgroundColor: 'var(--smena-primary)' }} />
            <span className="text-xs" style={{ color: 'var(--smena-text-tertiary)' }}>{s.value}px</span>
          </div>
        ))}
      </div>

      <h3 className="font-semibold mb-4" style={{ fontSize: '16px', color: 'var(--smena-text)' }}>Border Radius</h3>
      <div className="flex flex-wrap gap-8">
        {RADIUS.map(r => (
          <div key={r.label} className="flex flex-col items-center gap-2">
            <div
              className="w-16 h-16 border-2"
              style={{
                borderRadius: r.borderRadius,
                backgroundColor: 'var(--smena-primary-bg)',
                borderColor: 'var(--smena-primary)',
              }}
            />
            <span className="text-xs font-medium" style={{ color: 'var(--smena-text)' }}>{r.label}</span>
            <span className="text-[10px]" style={{ color: 'var(--smena-text-tertiary)' }}>{r.borderRadius}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
