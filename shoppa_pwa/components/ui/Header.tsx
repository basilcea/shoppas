import { ReactNode } from 'react'

export interface HeaderProps {
  title?: string
  leftAction?: {
    icon: string
    href?: string
    onClick?: () => void
  }
  rightAction?: {
    icon: string
    href?: string
    onClick?: () => void
  }
  children?: ReactNode
}

export function Header({ title, leftAction, rightAction, children }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-surface/80 backdrop-blur-md border-b border-surface-variant/20">
      <div className="flex items-center justify-between h-16 px-4 max-w-lg mx-auto">
        <div className="w-10">
          {leftAction && (
            leftAction.href ? (
              <a href={leftAction.href} className="flex items-center justify-center w-10 h-10">
                <span className="material-symbols-outlined text-on-surface-variant">arrow_back</span>
              </a>
            ) : (
              <button onClick={leftAction.onClick} className="flex items-center justify-center w-10 h-10">
                <span className="material-symbols-outlined text-on-surface-variant">{leftAction.icon}</span>
              </button>
            )
          )}
        </div>

        {title && (
          <h1 className="text-lg font-headline font-bold text-on-surface truncate">{title}</h1>
        )}

        <div className="w-10 flex justify-end">
          {rightAction && (
            rightAction.href ? (
              <a href={rightAction.href} className="flex items-center justify-center w-10 h-10">
                <span className="material-symbols-outlined text-on-surface-variant">{rightAction.icon}</span>
              </a>
            ) : (
              <button onClick={rightAction.onClick} className="flex items-center justify-center w-10 h-10">
                <span className="material-symbols-outlined text-on-surface-variant">{rightAction.icon}</span>
              </button>
            )
          )}
        </div>
      </div>
      {children}
    </header>
  )
}
