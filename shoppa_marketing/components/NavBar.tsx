import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto w-full">
        <div className="text-xl font-bold tracking-tight text-emerald-900 font-headline"> <Link href="/">Shoppas</Link></div>
        <div className="md:flex items-center gap-8 font-headline font-semibold">          
          <Link className="text-slate-600 hover:text-emerald-900 transition-colors" href="/features">Features</Link>
          <Link className="text-slate-600 hover:text-emerald-900 transition-colors" href="/faq">FAQ</Link>
          <Link className="btn-gradient text-on-primary px-6 py-2.5 rounded-full font-headline font-bold transition-all duration-300 ease-in-out active:scale-95 shadow-ambient" href="#">Download App</Link>
        </div>
      </div>
    </nav>
  )
}
