"use client"

import { HTMLAttributes, forwardRef } from 'react'

export interface StatusBarProps extends HTMLAttributes<HTMLDivElement> {
  message: string
  variant?: 'info' | 'success' | 'warning' | 'error'
  onDismiss?: () => void
}

export const StatusBar = forwardRef<HTMLDivElement, StatusBarProps>(
  ({ message, variant = 'info', onDismiss, className = '', ...props }, ref) => {
    const variants = {
      info: 'bg-tertiary-container text-on-tertiary',
      success: 'bg-secondary-container text-on-secondary-container',
      warning: 'bg-error-container text-on-error-container',
      error: 'bg-error text-on-error',
    }

    return (
      <div
        ref={ref}
        className={`${variants[variant]} px-4 py-2 flex items-center justify-between text-sm font-medium ${className}`}
        {...props}
      >
        <span>{message}</span>
        {onDismiss && (
          <button onClick={onDismiss} className="ml-2">
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        )}
      </div>
    )
  }
)

StatusBar.displayName = 'StatusBar'
