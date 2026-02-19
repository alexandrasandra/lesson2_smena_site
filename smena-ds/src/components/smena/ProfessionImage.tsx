import Image from 'next/image'
import { PROFESSIONS, PROFESSION_LABELS, type ProfessionKey } from '@/lib/assets'
import { cn } from '@/lib/utils'

export interface ProfessionImageProps {
  profession: ProfessionKey
  variant?: 1 | 2 | 3
  width?: number
  height?: number
  className?: string
  showLabel?: boolean
}

export function ProfessionImage({
  profession,
  variant = 1,
  width = 200,
  height = 200,
  className,
  showLabel = false,
}: ProfessionImageProps) {
  const images = PROFESSIONS[profession]
  const index = Math.min(variant - 1, images.length - 1)
  const src = images[index]

  return (
    <figure className="flex flex-col items-center gap-smena-xs m-0">
      <Image
        src={src}
        alt={`${PROFESSION_LABELS[profession]} — вариант ${variant}`}
        width={width}
        height={height}
        className={cn('object-cover rounded-smena-lg', className)}
      />
      {showLabel && (
        <figcaption className="text-smena-sm text-smena-text-secondary text-center">
          {PROFESSION_LABELS[profession]}
        </figcaption>
      )}
    </figure>
  )
}
