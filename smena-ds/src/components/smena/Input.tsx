import * as React from 'react'
import { useId } from 'react'
import { cn } from '@/lib/utils'

export type InputStatus = 'default' | 'error' | 'warning' | 'success'

export interface SmenaInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  status?: InputStatus
  label?: string
  helperText?: string
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  addonBefore?: React.ReactNode
  addonAfter?: React.ReactNode
}

const statusBorderClasses: Record<InputStatus, string> = {
  default: 'border-smena-border focus-within:border-smena-primary focus-within:ring-2 focus-within:ring-smena-primary/20',
  error:   'border-[var(--smena-error)] focus-within:border-[var(--smena-error)] focus-within:ring-2 focus-within:ring-[var(--smena-error)]/20',
  warning: 'border-[var(--smena-warning)] focus-within:border-[var(--smena-warning)] focus-within:ring-2 focus-within:ring-[var(--smena-warning)]/20',
  success: 'border-[var(--smena-success)] focus-within:border-[var(--smena-success)] focus-within:ring-2 focus-within:ring-[var(--smena-success)]/20',
}

const statusHelperClasses: Record<InputStatus, string> = {
  default: 'text-smena-text-secondary',
  error:   'text-[var(--smena-error)]',
  warning: 'text-[var(--smena-warning)]',
  success: 'text-[var(--smena-success)]',
}

export const SmenaInput = React.forwardRef<HTMLInputElement, SmenaInputProps>(
  (
    { status = 'default', label, helperText, prefix, suffix, addonBefore, addonAfter, className, id, ...props },
    ref
  ) => {
    const generatedId = useId()
    const effectiveId = id ?? generatedId
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label htmlFor={effectiveId} className="text-smena-sm font-medium text-smena-text">
            {label}
          </label>
        )}
        <div className="flex items-stretch">
          {addonBefore && (
            <span className="flex items-center px-smena-xs bg-smena-fill border border-r-0 border-smena-border rounded-l-smena-default text-smena-base text-smena-text-secondary whitespace-nowrap">
              {addonBefore}
            </span>
          )}
          <div
            className={cn(
              'flex flex-1 items-center h-control-lg border bg-smena-bg-container px-smena-xs gap-smena-xs',
              'text-smena-base text-smena-text transition-all outline-none',
              statusBorderClasses[status],
              addonBefore ? 'rounded-r-smena-default' : 'rounded-smena-default',
              addonAfter  ? 'rounded-l-smena-default' : '',
              !addonBefore && !addonAfter && 'rounded-smena-default',
              className,
            )}
          >
            {prefix && <span className="text-smena-text-tertiary shrink-0">{prefix}</span>}
            <input
              ref={ref}
              id={effectiveId}
              className="flex-1 bg-transparent outline-none text-smena-base placeholder:text-smena-text-tertiary disabled:cursor-not-allowed disabled:opacity-50 min-w-0"
              {...props}
            />
            {suffix && <span className="text-smena-text-tertiary shrink-0">{suffix}</span>}
          </div>
          {addonAfter && (
            <span className="flex items-center px-smena-xs bg-smena-fill border border-l-0 border-smena-border rounded-r-smena-default text-smena-base text-smena-text-secondary whitespace-nowrap">
              {addonAfter}
            </span>
          )}
        </div>
        {helperText && (
          <p className={cn('text-smena-sm', statusHelperClasses[status])}>
            {helperText}
          </p>
        )}
      </div>
    )
  }
)
SmenaInput.displayName = 'SmenaInput'
