import Image from 'next/image'
import { PARTNERS, type PartnerKey } from '@/lib/assets'
import { cn } from '@/lib/utils'

export interface PartnerLogoProps {
  partner: PartnerKey
  size?: 'full' | 'small'
  width?: number
  height?: number
  className?: string
}

export function PartnerLogo({
  partner,
  size = 'small',
  width,
  height,
  className,
}: PartnerLogoProps) {
  const asset = PARTNERS[partner]
  const src = size === 'full' ? asset.full : asset.small
  const w = width ?? (size === 'full' ? 120 : 40)
  const h = height ?? 40

  return (
    <Image
      src={src}
      alt={asset.name}
      width={w}
      height={h}
      className={cn('object-contain', className)}
    />
  )
}
