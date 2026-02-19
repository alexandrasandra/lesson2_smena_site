import { SmenaBadge } from '@/components/smena'
import { SectionWrapper } from './SectionWrapper'
import type { BadgeStatus } from '@/components/smena'

const STATUSES: BadgeStatus[] = ['success', 'processing', 'warning', 'error', 'default']

export function BadgesSection() {
  return (
    <SectionWrapper id="badges" title="07 Badges">
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-xs mb-3 font-mono" style={{ color: 'var(--smena-text-secondary)' }}>variant=dot</p>
          <div className="flex flex-wrap gap-6">
            {STATUSES.map(s => (
              <SmenaBadge key={s} status={s} text={s.charAt(0).toUpperCase() + s.slice(1)} />
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs mb-3 font-mono" style={{ color: 'var(--smena-text-secondary)' }}>variant=tag</p>
          <div className="flex flex-wrap gap-3">
            {STATUSES.map(s => (
              <SmenaBadge key={s} status={s} variant="tag" text={s.charAt(0).toUpperCase() + s.slice(1)} />
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs mb-3 font-mono" style={{ color: 'var(--smena-text-secondary)' }}>variant=ribbon</p>
          <div className="flex flex-wrap gap-3">
            {STATUSES.map(s => (
              <SmenaBadge key={s} status={s} variant="ribbon" text={s.charAt(0).toUpperCase() + s.slice(1)} />
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs mb-3 font-mono" style={{ color: 'var(--smena-text-secondary)' }}>variant=count</p>
          <div className="flex gap-6 items-center">
            {[1, 12, 99, 128].map(n => <SmenaBadge key={n} variant="count" count={n} />)}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
