import { ReactNode } from 'react'

export default function Hero({
  eyebrow,
  title,
  subtitle,
  ctas,
  image,
}: {
  eyebrow?: ReactNode
  title: ReactNode
  subtitle?: ReactNode
  ctas?: ReactNode
  image?: ReactNode
}) {
  return (
    <section className="px-6 py-16 md:py-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          {eyebrow}
          <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface leading-[1.1] tracking-tight font-headline">{title}</h1>
          {subtitle && <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed font-body">{subtitle}</p>}
          {ctas && <div className="flex flex-wrap gap-4 pt-4">{ctas}</div>}
        </div>
        {image && <div className="relative">{image}</div>}
      </div>
    </section>
  )
}
