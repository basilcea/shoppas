"use client"

import { ReactNode } from 'react'
import Link from 'next/link'

export interface BottomNavItem {
  icon: string
  label: string
  href: string
}

export interface BottomNavigationProps {
  items: BottomNavItem[]
  activePath?: string
}

export function BottomNavigation({ items, activePath }: BottomNavigationProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-surface-container-highest backdrop-blur-lg border-t border-surface-variant/30">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {items.map((item) => {
          // Check if current path starts with the item href for nested routes
          const isActive = activePath?.startsWith(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                isActive ? 'text-primary' : 'text-on-surface-variant'
              }`}
            >
              <span className="material-symbols-outlined text-2xl mb-1">{item.icon}</span>
              <span className="text-xs font-label">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
