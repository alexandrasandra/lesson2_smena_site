import * as React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type SmenaVariant = 'primary' | 'default' | 'dashed' | 'text' | 'link' | 'danger'
type SmenaSize = 'sm' | 'md' | 'lg'

type ButtonBaseProps = React.ComponentProps<'button'> & { asChild?: boolean }

export interface SmenaButtonProps extends Omit<ButtonBaseProps, 'variant' | 'size'> {
  smenaVariant?: SmenaVariant
  smenaSize?: SmenaSize
  block?: boolean
  icon?: React.ReactNode
  loading?: boolean
}

const variantClasses: Record<SmenaVariant, string> = {
  primary: 'bg-smena-primary hover:bg-smena-primary-hover active:bg-smena-primary-active text-white border-0 shadow-none',
  default: 'bg-smena-bg-container text-smena-text border border-smena-border hover:border-smena-primary hover:text-smena-primary',
  dashed:  'bg-smena-bg-container text-smena-text border border-dashed border-smena-border hover:border-smena-primary hover:text-smena-primary',
  text:    'bg-transparent text-smena-text hover:bg-smena-fill border-0 shadow-none',
  link:    'bg-transparent text-smena-primary hover:text-smena-primary-hover underline-offset-4 hover:underline border-0 shadow-none p-0 h-auto',
  danger:  'bg-[var(--smena-error)] hover:opacity-90 text-white border-0 shadow-none',
}

const sizeClasses: Record<SmenaSize, string> = {
  sm: 'h-control-sm text-smena-sm px-smena-xs rounded-smena-sm',
  md: 'h-control text-smena-base px-smena-sm rounded-smena-default',
  lg: 'h-control-lg text-smena-base px-smena-base rounded-smena-default min-w-[88px]',
}

export const SmenaButton = React.forwardRef<HTMLButtonElement, SmenaButtonProps>(
  (
    {
      smenaVariant = 'default',
      smenaSize = 'lg',
      block = false,
      icon,
      loading = false,
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <Button
        ref={ref}
        variant="ghost"
        className={cn(
          'font-medium transition-colors cursor-pointer inline-flex items-center justify-center',
          variantClasses[smenaVariant],
          sizeClasses[smenaSize],
          block && 'w-full',
          (disabled || loading) && 'opacity-50 cursor-not-allowed pointer-events-none',
          className,
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg className="mr-2 h-4 w-4 animate-spin shrink-0" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
          </svg>
        )}
        {icon && !loading && <span className="mr-1.5 shrink-0">{icon}</span>}
        {children}
      </Button>
    )
  }
)
SmenaButton.displayName = 'SmenaButton'
