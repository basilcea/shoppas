"use client"

import { HTMLAttributes, forwardRef } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'elevated' | 'filled' | 'outlined'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'elevated', padding = 'md', className = '', children, ...props }, ref) => {
    const baseStyles = 'rounded-xl'

    const variants = {
      elevated: 'bg-surface-container-lowest shadow-ambient',
      filled: 'bg-surface-container-low',
      outlined: 'bg-surface-container-lowest border-2 border-outline-variant',
    }

    const paddings = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    }

    return (
      <div ref={ref} className={`${baseStyles} ${variants[variant]} ${paddings[padding]} ${className}`} {...props}>
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'
