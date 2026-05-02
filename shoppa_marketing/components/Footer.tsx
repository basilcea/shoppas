import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-slate-100 border-t border-slate-200">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 max-w-7xl mx-auto w-full gap-4">
        <div className="text-lg font-bold text-emerald-900 font-headline">Shoppas</div>
        <p className="font-body text-sm text-slate-500">© 2026 Shoppas. All rights reserved.</p>
        <div className="flex gap-6 font-body text-sm">
          <Link className="text-slate-500 hover:text-emerald-600 transition-opacity underline" href="/privacy">Privacy Policy</Link>
          <Link className="text-slate-500 hover:text-emerald-600 transition-opacity" href="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
