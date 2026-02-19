import { SectionWrapper } from './SectionWrapper'

const SHADOWS = [
  {
    label: 'Card (Tertiary)',
    shadow: '0 1px 2px 0 rgba(0,0,0,0.03), 0 1px 6px -1px rgba(0,0,0,0.02), 0 2px 4px 0 rgba(0,0,0,0.02)',
    desc: 'Forms, action panels, login',
  },
  {
    label: 'Dropdown (Primary)',
    shadow: '0 6px 16px 0 rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), 0 9px 28px 8px rgba(0,0,0,0.05)',
    desc: 'Popovers, menus, dropdowns',
  },
  {
    label: 'Modal (Secondary)',
    shadow: '0 6px 16px 0 rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), 0 9px 28px 8px rgba(0,0,0,0.05)',
    desc: 'Modals, drawers, overlays',
  },
]

export function ShadowsSection() {
  return (
    <SectionWrapper id="shadows" title="04 Shadows">
      <div className="flex flex-wrap gap-10">
        {SHADOWS.map(s => (
          <div key={s.label} className="flex flex-col gap-3">
            <div
              className="w-48 h-28 rounded-lg"
              style={{ backgroundColor: 'var(--smena-bg-container)', boxShadow: s.shadow }}
            />
            <p className="text-sm font-semibold" style={{ color: 'var(--smena-text)' }}>{s.label}</p>
            <p className="text-xs" style={{ color: 'var(--smena-text-secondary)' }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
