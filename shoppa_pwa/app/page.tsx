import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-surface flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="text-center max-w-md">
          <div className="mb-6">
            <span className="material-symbols-outlined text-6xl text-primary mb-4">shopping_cart</span>
            <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-primary tracking-tight mb-4">
              Shoppa
            </h1>
            <p className="text-lg text-on-surface-variant font-medium mb-6">
              Professional shopping operations simplified. Manage orders, track deliveries, and grow your business.
            </p>
          </div>
          <div className="space-y-3">
            <Link href="/login">
              <button className="w-full h-14 bg-gradient-to-r from-primary to-primary-container text-white font-headline font-bold text-lg rounded-xl shadow-ambient active:scale-95 transition-transform flex items-center justify-center gap-2">
                Get Started
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </Link>
            <Link href="/signup">
              <button className="w-full h-14 bg-surface-container-lowest text-primary font-headline font-bold text-lg rounded-xl border-2 border-primary/20 active:scale-95 transition-transform">
                Create Account
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features tease */}
      <section className="bg-surface-container-low py-12 px-6">
        <div className="max-w-md mx-auto grid grid-cols-2 gap-4">
          <div className="text-center">
            <span className="material-symbols-outlined text-3xl text-primary mb-2">dashboard</span>
            <h3 className="font-bold text-on-surface">Dashboard</h3>
            <p className="text-xs text-on-surface-variant">Real-time insights</p>
          </div>
          <div className="text-center">
            <span className="material-symbols-outlined text-3xl text-primary mb-2">shopping_basket</span>
            <h3 className="font-bold text-on-surface">Orders</h3>
            <p className="text-xs text-on-surface-variant">Manage easily</p>
          </div>
          <div className="text-center">
            <span className="material-symbols-outlined text-3xl text-primary mb-2">analytics</span>
            <h3 className="font-bold text-on-surface">Analytics</h3>
            <p className="text-xs text-on-surface-variant">Track earnings</p>
          </div>
          <div className="text-center">
            <span className="material-symbols-outlined text-3xl text-primary mb-2">person</span>
            <h3 className="font-bold text-on-surface">Profile</h3>
            <p className="text-xs text-on-surface-variant">Grow business</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 text-center text-sm text-on-surface-variant">
        <p>© 2026 Shoppa. Built with operational excellence.</p>
      </footer>
    </main>
  )
}
