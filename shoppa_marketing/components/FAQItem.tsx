import { ReactNode } from 'react'

export default function FAQItem({
  icon,
  title,
  children,
  variant = 'primary',
}: {
  icon: ReactNode
  title: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary'
}) {
  const variantMap = {
    primary: 'bg-primary-fixed text-on-primary-fixed-variant',
    secondary: 'bg-secondary-container text-on-secondary-container',
    tertiary: 'bg-tertiary-fixed text-on-tertiary-fixed-variant',
  } as const

  return (
    <div className="bg-surface-container-low rounded-xxl overflow-hidden transition-all duration-300">
      <div className="w-full flex items-center justify-between p-6 text-left">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${variantMap[variant]}`}>{icon}</div>
          <h3 className="text-xl font-bold text-emerald-900">{title}</h3>
        </div>
      </div>
      <div className="px-6 pb-8 pt-2">
        <div className="pl-16 pr-6 text-on-surface-variant leading-relaxed">{children}</div>
      </div>
    </div>
  )
}
