"use client"

import { InputHTMLAttributes, forwardRef } from 'react'

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  icon?: string
  error?: string
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, icon, error, className = '', ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-xs font-bold text-primary mb-1 ml-1 uppercase tracking-widest font-label">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {icon && (
            <span className="material-symbols-outlined absolute left-4 text-outline">
              {icon}
            </span>
          )}
          <input
            ref={ref}
            className={`w-full h-14 ${icon ? 'pl-12' : 'pl-4'} pr-4 bg-surface-container-highest border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-md font-medium text-on-surface transition-all placeholder:text-outline ${error ? 'border-b-error' : ''} ${className}`}
            {...props}
          />
        </div>
        {error && <p className="text-sm text-error mt-1 ml-1">{error}</p>}
      </div>
    )
  }
)

InputField.displayName = 'InputField'
