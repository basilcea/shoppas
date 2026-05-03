import { ReactNode } from 'react'

export interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md'
  className?: string
}

export function Badge({ children, variant = 'default', size = 'md', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-surface-container-highest text-on-surface-variant',
    success: 'bg-secondary-container text-on-secondary-container',
    warning: 'bg-error-container text-on-error-container',
    error: 'bg-error text-on-error',
  }

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  }

  return (
    <span className={`inline-flex items-center rounded-full font-medium ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  )
}
