import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Shoppa - Shopping Operations PWA',
  description: 'Professional shopping operations simplified. Manage orders, track deliveries, and grow your business.',
  manifest: '/manifest.json',
  themeColor: '#005147',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#005147',
} satisfies {
  width?: string | number
  initialScale?: number
  maximumScale?: number
  userScalable?: boolean
  themeColor?: string
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface font-body min-h-screen antialiased">
       <script

  dangerouslySetInnerHTML={{

    __html: `

      if ('serviceWorker' in navigator) {

        navigator.serviceWorker.register('/sw.js')

          .then(reg => console.log('SW registered'))

          .catch(err => console.error('SW registration failed:', err));

      }

    `,

  }}

/>
        {children}
      </body>
    </html>
  )
}
