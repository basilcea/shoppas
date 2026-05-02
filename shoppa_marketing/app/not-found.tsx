import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="px-6 max-w-3xl mx-auto py-24 text-center">
      <h1 className="text-4xl font-headline font-bold mb-4">Page not found</h1>
      <p className="text-on-surface-variant mb-8">Go back to the marketing index.</p>
      <Link className="text-primary underline" href="/marketing">Marketing Home</Link>
    </div>
  )
}
