import './globals.css'
import type { ReactNode } from 'react'

export const metadata = { title: 'Shoppa PWA', description: 'Shopper operations PWA' }

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">{children}</body>
    </html>
  )
}
