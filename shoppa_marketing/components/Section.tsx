import { ReactNode } from 'react'

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <section className={`px-6 max-w-7xl mx-auto ${className}`}>{children}</section>
}

export function Bento({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 ${className}`}>{children}</div>
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`bg-surface-container-lowest rounded-xl p-8 shadow-sm ${className}`}>{children}</div>
}
