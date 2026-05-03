import { ReactNode } from 'react'

export interface ListItemProps {
  icon?: string
  title: string
  subtitle?: string
  trailing?: ReactNode
  onClick?: () => void
  href?: string
  divider?: boolean
}

export function ListItem({ icon, title, subtitle, trailing, onClick, href, divider = false }: ListItemProps) {
  const content = (
    <div className={`flex items-center py-4 ${divider ? 'border-b border-outline-variant/30' : ''}`}>
      {icon && (
        <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center mr-3">
          <span className="material-symbols-outlined text-primary">{icon}</span>
        </div>
      )}
      <div className="flex-1 min-w-0">
        <p className="font-medium text-on-surface truncate">{title}</p>
        {subtitle && <p className="text-sm text-on-surface-variant truncate">{subtitle}</p>}
      </div>
      {trailing && <div className="ml-2">{trailing}</div>}
      {onClick || href ? (
        <span className="material-symbols-outlined text-outline ml-2">chevron_right</span>
      ) : null}
    </div>
  )

  if (href) {
    return <a href={href}>{content}</a>
  }

  if (onClick) {
    return <button onClick={onClick} className="w-full text-left">{content}</button>
  }

  return content
}
