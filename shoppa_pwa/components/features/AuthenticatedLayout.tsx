'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { Header } from '@/components/ui/Header'
import { BottomNavigation, BottomNavItem } from '@/components/ui/BottomNavigation'

const navItems: BottomNavItem[] = [
  { icon: 'home', label: 'Home', href: '/app' },
  { icon: 'shopping_basket', label: 'Shopping', href: '/app/orders' },
  { icon: 'people', label: 'Clients', href: '/app/clients' },
  { icon: 'bar_chart', label: 'Data', href: '/app/data' },
  { icon: 'person', label: 'Profile', href: '/app/profile' },
]

export default function AuthenticatedLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-surface pb-20">
      <Header
        title="Shoppa"
        leftAction={{ icon: 'menu', onClick: () => {} }}
        rightAction={{ icon: 'notifications', onClick: () => {} }}
      />
      <main className="max-w-lg mx-auto px-4 pt-4">
        {children}
      </main>
      <BottomNavigation items={navItems} activePath={pathname} />
    </div>
  )
}
