'use client'

import { ReactNode } from 'react'
import { Header } from '@/components/ui/Header'

export default function UnauthenticatedLayout({ children }: { children: ReactNode }) {
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
    </div>
  )
}