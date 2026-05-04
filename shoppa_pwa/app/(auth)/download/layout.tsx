
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Install Shoppa',
  description: 'Get the Shoppa PWA app for your device',
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

export default function DownloadLayout({ children }: { children: ReactNode }) {
  return children
}
