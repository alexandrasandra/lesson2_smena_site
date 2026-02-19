import * as React from 'react'
import { cn } from '@/lib/utils'

export type BadgeStatus = 'success' | 'error' | 'processing' | 'warning' | 'default'
export type BadgeVariant = 'dot' | 'count' | 'ribbon' | 'tag'

export interface SmenaBadgeProps {
  status?: BadgeStatus
  variant?: BadgeVariant
  count?: number
  text?: string
  color?: string
  className?: string
  children?: React.ReactNode
}

const dotColorClasses: Record<BadgeStatus, string> = {
  success:    'bg-smena-success',
  error:      'bg-smena-error',
  processing: 'bg-smena-info',
  warning:    'bg-smena-warning',
  default:    'bg-smena-border',
}

const tagClasses: Record<BadgeStatus, string> = {
  success:    'bg-smena-success-bg text-smena-success border-[var(--smena-success-border)]',
  error:      'bg-smena-error-bg text-smena-error border-[var(--smena-error-border)]',
  processing: 'bg-smena-info-bg text-smena-info border-[var(--smena-primary-border)]',
  warning:    'bg-smena-warning-bg text-smena-warning border-[var(--smena-warning-border)]',
  default:    'bg-smena-fill text-smena-text-secondary border-smena-border',
}

const ribbonBgClasses: Record<BadgeStatus, string> = {
  success:    'bg-smena-success',
  error:      'bg-smena-error',
  processing: 'bg-smena-info',
  warning:    'bg-smena-warning',
  default:    'bg-smena-text-secondary',
}

export function SmenaBadge({
  status = 'default',
  variant = 'dot',
  count,
  text,
  color,
  className,
  children,
}: SmenaBadgeProps) {
  const label = text ?? children

  if (variant === 'tag') {
    return (
      <span
        className={cn(
          'inline-flex items-center gap-1 px-2 py-0.5 rounded-smena-xs border text-smena-sm font-medium',
          tagClasses[status],
          className,
        )}
      >
        <span className={cn('w-1.5 h-1.5 rounded-full shrink-0', dotColorClasses[status])} />
        {label}
      </span>
    )
  }

  if (variant === 'ribbon') {
    return (
      <span
        className={cn(
          'inline-flex items-center px-2 py-0.5 rounded-smena-xs text-smena-sm font-medium text-white',
          !color && ribbonBgClasses[status],
          className,
        )}
        style={color ? { backgroundColor: color } : undefined}
      >
        {label}
      </span>
    )
  }

  if (variant === 'count') {
    return (
      <span
        className={cn(
          'inline-flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full bg-smena-error text-white text-smena-sm font-medium leading-none',
          className,
        )}
      >
        {count !== undefined && count > 99 ? '99+' : count}
      </span>
    )
  }

  return (
    <span className={cn('inline-flex items-center gap-1.5 text-smena-base text-smena-text', className)}>
      <span
        className={cn(
          'w-2 h-2 rounded-full shrink-0',
          dotColorClasses[status],
          status === 'processing' && 'animate-pulse',
        )}
      />
      {label}
    </span>
  )
}
