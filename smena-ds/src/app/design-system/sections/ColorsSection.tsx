import { SectionWrapper } from './SectionWrapper'

const PRIMITIVES = [
  { label: 'Blue',  cssPrefix: '--smena-blue',  shades: [1,2,3,4,5,6,7,8,9,10] },
  { label: 'Gold',  cssPrefix: '--smena-gold',  shades: [1,2,3,4,5,6,7,8,9,10] },
  { label: 'Red',   cssPrefix: '--smena-red',   shades: [1,2,3,4,5,6,7,8,9,10] },
  { label: 'Green', cssPrefix: '--smena-green', shades: [1,2,3,4,5,6,7,8,9,10] },
]

const SEMANTIC = [
  { label: 'Primary',             cssVar: '--smena-primary' },
  { label: 'Primary Hover',       cssVar: '--smena-primary-hover' },
  { label: 'Primary BG',          cssVar: '--smena-primary-bg' },
  { label: 'Text',                cssVar: '--smena-text' },
  { label: 'Text Secondary',      cssVar: '--smena-text-secondary' },
  { label: 'Text Tertiary',       cssVar: '--smena-text-tertiary' },
  { label: 'BG Layout',           cssVar: '--smena-bg-layout' },
  { label: 'BG Container',        cssVar: '--smena-bg-container' },
  { label: 'Border',              cssVar: '--smena-border' },
  { label: 'Border Secondary',    cssVar: '--smena-border-secondary' },
  { label: 'Fill',                cssVar: '--smena-fill' },
  { label: 'Success',             cssVar: '--smena-success' },
  { label: 'Success BG',          cssVar: '--smena-success-bg' },
  { label: 'Warning',             cssVar: '--smena-warning' },
  { label: 'Warning BG',          cssVar: '--smena-warning-bg' },
  { label: 'Error',               cssVar: '--smena-error' },
  { label: 'Error BG',            cssVar: '--smena-error-bg' },
]

export function ColorsSection() {
  return (
    <SectionWrapper id="colors" title="01 Colors">
      <h3 className="font-semibold mb-3" style={{ fontSize: '16px', color: 'var(--smena-text)' }}>Primitive Palette</h3>
      <div className="flex flex-col gap-4 mb-10">
        {PRIMITIVES.map(scale => (
          <div key={scale.label}>
            <p className="text-xs font-medium mb-1" style={{ color: 'var(--smena-text-secondary)' }}>{scale.label}</p>
            <div className="flex gap-1">
              {scale.shades.map(n => (
                <div key={n} className="flex flex-col items-center gap-0.5 flex-1">
                  <div
                    className="w-full h-10 rounded"
                    style={{ background: `var(${scale.cssPrefix}-${n})` }}
                  />
                  <span className="text-[10px]" style={{ color: 'var(--smena-text-tertiary)' }}>{n}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h3 className="font-semibold mb-3" style={{ fontSize: '16px', color: 'var(--smena-text)' }}>Semantic Tokens</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {SEMANTIC.map(token => (
          <div
            key={token.cssVar}
            className="flex items-center gap-2 p-2 rounded border"
            style={{ backgroundColor: 'var(--smena-bg-container)', borderColor: 'var(--smena-border)' }}
          >
            <div
              className="w-8 h-8 rounded shrink-0 border"
              style={{ background: `var(${token.cssVar})`, borderColor: 'var(--smena-border)' }}
            />
            <div className="min-w-0">
              <p className="text-xs font-medium leading-tight truncate" style={{ color: 'var(--smena-text)' }}>{token.label}</p>
              <p className="text-[10px] font-mono truncate" style={{ color: 'var(--smena-text-tertiary)' }}>{token.cssVar}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
