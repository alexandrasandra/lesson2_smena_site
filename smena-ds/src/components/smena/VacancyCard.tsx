import * as React from 'react'
import Image from 'next/image'
import { SmenaCard } from './Card'
import { SmenaButton } from './Button'
import { SmenaBadge, type BadgeStatus } from './Badge'
import { PartnerLogo } from './PartnerLogo'
import { PROFESSIONS, PROFESSION_LABELS } from '@/lib/assets'
import type { PartnerKey, ProfessionKey } from '@/lib/assets'
import { cn } from '@/lib/utils'

export interface VacancyCardProps {
  title: string
  partner: PartnerKey
  profession: ProfessionKey
  professionVariant?: 1 | 2 | 3
  salary: string
  salaryPeriod?: string
  location?: string
  status?: BadgeStatus
  statusText?: string
  schedule?: string
  onApply?: () => void
  className?: string
}

export function VacancyCard({
  title,
  partner,
  profession,
  professionVariant = 1,
  salary,
  salaryPeriod = 'в месяц',
  location,
  status = 'success',
  statusText = 'Активна',
  schedule,
  onApply,
  className,
}: VacancyCardProps) {
  const images = PROFESSIONS[profession]
  const index = Math.min((professionVariant ?? 1) - 1, images.length - 1)
  const professionSrc = images[index]

  return (
    <SmenaCard hoverable className={cn('overflow-hidden max-w-sm', className)} bodyClassName="!p-0">
      <div className="relative h-36 overflow-hidden">
        <Image
          src={professionSrc}
          alt={PROFESSION_LABELS[profession]}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2">
          <SmenaBadge status={status} variant="ribbon" text={statusText} />
        </div>
      </div>
      <div className="p-smena-base flex flex-col gap-smena-xs">
        <div className="flex items-center justify-between">
          <PartnerLogo partner={partner} size="small" width={32} height={32} className="rounded" />
          <SmenaBadge status="default" variant="tag" text={schedule ?? 'Сменный'} />
        </div>
        <h3 className="text-smena-base font-semibold text-smena-text leading-snug">{title}</h3>
        {location && (
          <p className="text-smena-sm text-smena-text-secondary">{location}</p>
        )}
        <div className="flex items-end justify-between mt-smena-xs">
          <div>
            <span className="text-smena-h4 font-bold text-smena-text">{salary}</span>
            <span className="text-smena-sm text-smena-text-secondary ml-1">{salaryPeriod}</span>
          </div>
          <SmenaButton smenaVariant="primary" smenaSize="sm" onClick={onApply}>
            Откликнуться
          </SmenaButton>
        </div>
      </div>
    </SmenaCard>
  )
}
