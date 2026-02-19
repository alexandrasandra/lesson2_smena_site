import * as React from 'react'
import { cn } from '@/lib/utils'

export interface SmenaCardProps {
  title?: React.ReactNode
  extra?: React.ReactNode
  footer?: React.ReactNode
  bordered?: boolean
  hoverable?: boolean
  className?: string
  bodyClassName?: string
  children?: React.ReactNode
}

export function SmenaCard({
  title,
  extra,
  footer,
  bordered = true,
  hoverable = false,
  className,
  bodyClassName,
  children,
}: SmenaCardProps) {
  return (
    <div
      className={cn(
        'bg-smena-bg-container rounded-smena-lg shadow-smena-card',
        bordered && 'border border-smena-border',
        hoverable && 'transition-shadow duration-200 hover:shadow-smena-dropdown cursor-pointer',
        className,
      )}
    >
      {(title || extra) && (
        <div className="flex items-center justify-between px-smena-base py-smena-sm border-b border-smena-border-secondary">
          {title && (
            <span className="text-smena-base font-semibold text-smena-text">{title}</span>
          )}
          {extra && (
            <span className="text-smena-sm text-smena-primary ml-auto">{extra}</span>
          )}
        </div>
      )}
      <div className={cn('px-smena-base py-smena-base', bodyClassName)}>
        {children}
      </div>
      {footer && (
        <div className="px-smena-base py-smena-sm border-t border-smena-border-secondary text-smena-sm text-smena-text-secondary">
          {footer}
        </div>
      )}
    </div>
  )
}
