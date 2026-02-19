import { SmenaCard, SmenaButton } from '@/components/smena'
import { SectionWrapper } from './SectionWrapper'

export function CardsSection() {
  return (
    <SectionWrapper id="cards" title="08 Cards">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <SmenaCard title="Simple Card">
          <p className="text-sm" style={{ color: 'var(--smena-text-secondary)' }}>Базовая карточка с заголовком и контентом.</p>
        </SmenaCard>
        <SmenaCard
          title="With Extra"
          extra={<SmenaButton smenaVariant="link" smenaSize="sm">Ещё</SmenaButton>}
        >
          <p className="text-sm" style={{ color: 'var(--smena-text-secondary)' }}>Карточка с дополнительным действием.</p>
        </SmenaCard>
        <SmenaCard
          title="Hoverable"
          hoverable
          footer="Последнее обновление: сегодня"
        >
          <p className="text-sm" style={{ color: 'var(--smena-text-secondary)' }}>Карточка с эффектом при наведении и подвалом.</p>
        </SmenaCard>
        <SmenaCard bordered={false} className="bg-smena-primary-bg">
          <p className="text-sm font-medium" style={{ color: 'var(--smena-primary)' }}>Без рамки, фон primary-bg</p>
        </SmenaCard>
      </div>
    </SectionWrapper>
  )
}
