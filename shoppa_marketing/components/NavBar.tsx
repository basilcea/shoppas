"use client"

import { useState } from "react"
import Link from "next/link"

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto w-full">

        {/* Logo */}
        <div className="text-xl font-bold tracking-tight text-emerald-900 font-headline">
          <Link href="/">Shoppas</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-headline font-semibold">
          <Link className="text-slate-600 hover:text-emerald-900 transition-colors" href="/features">Features</Link>
          <Link className="text-slate-600 hover:text-emerald-900 transition-colors" href="/faqs">Faqs</Link>
          <Link className="btn-gradient text-on-primary px-6 py-2.5 rounded-full font-bold transition-all duration-300 active:scale-95 shadow-ambient" href="#">
            Download App
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-emerald-900"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 font-headline font-semibold bg-white/90 backdrop-blur">
          <Link href="/features" onClick={() => setOpen(false)}>Features</Link>
          <Link href="/faq" onClick={() => setOpen(false)}>FAQ</Link>
          <Link href="#" className="btn-gradient text-on-primary px-4 py-2 rounded-full text-center">
            Download App
          </Link>
        </div>
      )}
    </nav>
  )
}