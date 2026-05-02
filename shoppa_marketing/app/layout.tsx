import './globals.css'
import { Manrope, Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import Layout from '@/components/Layout'

const manrope = Manrope({ subsets: ['latin'], weight: ['400','600','700','800'], variable: '--font-headline' })
const inter = Inter({ subsets: ['latin'], weight: ['400','500','600'], variable: '--font-body' })

export const metadata = {
  title: 'Shoppas',
  description: 'Shoppas is a operating platform built for personal shoppers',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${manrope.variable} ${inter.variable} bg-surface text-on-surface font-body`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
