import { SmenaButton } from '@/components/smena'
import { SectionWrapper } from './SectionWrapper'

export function ButtonsSection() {
  return (
    <SectionWrapper id="buttons" title="05 Buttons">
      {(['lg', 'md', 'sm'] as const).map(size => (
        <div key={size} className="mb-6">
          <p className="text-xs mb-2 font-mono uppercase tracking-wide" style={{ color: 'var(--smena-text-secondary)' }}>
            size={size}
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            <SmenaButton smenaVariant="primary"  smenaSize={size}>Primary</SmenaButton>
            <SmenaButton smenaVariant="default"  smenaSize={size}>Default</SmenaButton>
            <SmenaButton smenaVariant="dashed"   smenaSize={size}>Dashed</SmenaButton>
            <SmenaButton smenaVariant="text"     smenaSize={size}>Text</SmenaButton>
            <SmenaButton smenaVariant="link"     smenaSize={size}>Link</SmenaButton>
            <SmenaButton smenaVariant="danger"   smenaSize={size}>Danger</SmenaButton>
            <SmenaButton smenaVariant="primary"  smenaSize={size} disabled>Disabled</SmenaButton>
            <SmenaButton smenaVariant="primary"  smenaSize={size} loading>Loading</SmenaButton>
          </div>
        </div>
      ))}
      <div className="mt-4">
        <p className="text-xs mb-2 font-mono" style={{ color: 'var(--smena-text-secondary)' }}>block=true</p>
        <SmenaButton smenaVariant="primary" block>Block Button</SmenaButton>
      </div>
    </SectionWrapper>
  )
}
