'use client'

import { useEffect, useState } from 'react'
import { api, setStoredUser } from '@/lib/supabase'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSession } from '@/components/features/SessionProvider'

export default function SignupPage() {
  const { isAuthenticated, loading } = useSession()
  const [role, setRole] = useState<'shopper' | 'client'>('shopper')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    if (!loading && isAuthenticated) {
      router.push('/app')
    }
  }, [isAuthenticated, loading, router])

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    try {
      const data = await api('/auth/signup', {
        method: 'POST',
        body: JSON.stringify({ email, password, full_name: fullName, role }),
      })
      const access_token = data?.session?.access_token
      if (access_token) {
        localStorage.setItem('access_token', access_token)
        const userData = await api('/users/me')
        if (userData) {
          setStoredUser(userData)
        }
      }
      router.push('/app')
    } catch (err: any) {
      setError(err.message || 'Signup failed')
    } finally {
      setIsLoading(false)
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-surface">
        <div className="text-center">
          <span className="material-symbols-outlined text-4xl text-primary animate-spin">refresh</span>
        </div>
      </main>
    )
  }

  if (isAuthenticated) {
    return null
  }

  return (
    <>
      {/* Glass Header */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-4 w-full max-w-md mx-auto">
          <div className="flex items-center gap-4">
            <Link href="/login">
              <button className="active:scale-95 transition-transform duration-200 text-primary">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
            </Link>
          </div>
          <div className="text-2xl font-headline font-extrabold text-primary tracking-tighter">
            Shoppa
          </div>
          <div className="w-6" />
        </div>
      </header>

      <main className="min-h-screen pt-24 pb-12 px-6 flex flex-col items-center justify-center">
        {/* Hero Branding Section */}
        <div className="w-full max-w-md text-center mb-10">
          <h1 className="font-headline font-extrabold text-4xl tracking-tight text-on-surface mb-2">
            Join the experience.
          </h1>
          <p className="text-on-surface-variant font-body">
            Experience seamless retail operations and elite curation.
          </p>
        </div>

        {/* Signup Form Container */}
        <div className="w-full max-w-md bg-surface-container-lowest p-8 rounded-3xl shadow-ambient">
          <form className="space-y-6" onSubmit={onSubmit}>
            {/* Role Selection */}
            <div className="space-y-3">
              <label className="text-[11px] font-semibold uppercase tracking-widest text-on-surface-variant ml-1 font-label">
                Select Your Role
              </label>
              <div className="grid grid-cols-2 gap-3 p-1.5 bg-surface-container-low rounded-2xl">
                {/* Shopper Role */}
                <label className="relative cursor-pointer">
                  <input
                    checked={role === 'shopper'}
                    className="peer sr-only"
                    name="role"
                    type="radio"
                    value="shopper"
                    onChange={() => setRole('shopper')}
                  />
                  <div className="flex flex-col items-center justify-center py-4 px-2 rounded-xl transition-all duration-200 peer-checked:bg-white peer-checked:shadow-sm peer-checked:text-primary text-on-surface-variant">
                    <span className="material-symbols-outlined mb-1">shopping_bag</span>
                    <span className="text-xs font-bold font-headline">Shopper</span>
                  </div>
                </label>
                {/* Client Role */}
                <label className="relative cursor-pointer">
                  <input
                    checked={role === 'client'}
                    className="peer sr-only"
                    name="role"
                    type="radio"
                    value="client"
                    onChange={() => setRole('client')}
                  />
                  <div className="flex flex-col items-center justify-center py-4 px-2 rounded-xl transition-all duration-200 peer-checked:bg-white peer-checked:shadow-sm peer-checked:text-primary text-on-surface-variant">
                    <span className="material-symbols-outlined mb-1">storefront</span>
                    <span className="text-xs font-bold font-headline">Client</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Input Fields */}
            <div className="space-y-4">
              {/* Full Name */}
              <div className="group">
                <label
                  className="block text-[11px] font-semibold uppercase tracking-widest text-on-surface-variant mb-2 ml-1 font-label"
                  htmlFor="full_name"
                >
                  Full Name
                </label>
                <div className="relative">
                  <input
                    className="w-full h-14 px-4 bg-surface-container-high border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-t-xl text-on-surface font-body transition-all placeholder:text-outline"
                    id="full_name"
                    placeholder="Enter your full name"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="group">
                <label
                  className="block text-[11px] font-semibold uppercase tracking-widest text-on-surface-variant mb-2 ml-1 font-label"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <div className="relative">
                  <input
                    className="w-full h-14 px-4 bg-surface-container-high border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-t-xl text-on-surface font-body transition-all placeholder:text-outline"
                    id="email"
                    placeholder="name@company.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="group">
                <label
                  className="block text-[11px] font-semibold uppercase tracking-widest text-on-surface-variant mb-2 ml-1 font-label"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    className="w-full h-14 px-4 bg-surface-container-high border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-t-xl text-on-surface font-body transition-all placeholder:text-outline"
                    id="password"
                    placeholder="••••••••"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined text-xl">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Error Message */}
            {error && <p className="text-sm text-error mt-2 ml-1">{error}</p>}

            {/* Terms */}
            <p className="text-xs text-on-surface-variant font-body px-1 leading-relaxed">
              By creating an account, you agree to our{' '}
              <a className="text-primary font-semibold hover:underline" href="#" target="_blank" rel="noopener noreferrer">
                Terms of Service
              </a>{' '}
              and{' '}
              <a className="text-primary font-semibold hover:underline" href="#" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
              .
            </p>

            {/* CTA */}
            <button
              className="w-full h-14 bg-gradient-to-r from-primary to-primary-container text-white rounded-2xl font-headline font-bold text-lg active:scale-95 transition-transform duration-200 shadow-ambient flex items-center justify-center gap-2"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="material-symbols-outlined animate-spin">refresh</span>
                  Creating...
                </>
              ) : (
                'Create Account'
              )}
            </button>

            {/* Login Link */}
            <div className="text-center pt-4">
              <p className="text-on-surface-variant font-body">
                Already have an account?{' '}
                <Link className="text-primary font-bold hover:underline decoration-2 underline-offset-4 ml-1" href="/login">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Decorative Bento Grid (hidden on mobile) */}
        <div className="hidden lg:grid grid-cols-3 gap-4 w-full max-w-5xl mt-16 px-4">
          <div className="col-span-1 bg-secondary-container rounded-3xl p-6 h-48 flex flex-col justify-end">
            <span className="material-symbols-outlined text-4xl text-on-secondary-container mb-2">local_mall</span>
            <p className="font-headline font-bold text-on-secondary-container">Seamless Deliveries</p>
          </div>
          <div className="col-span-1 bg-surface-container-highest rounded-3xl p-6 h-48 overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary-container/20" />
            </div>
            <div className="relative h-full flex flex-col justify-end">
              <p className="font-headline font-bold text-on-surface">Curated Picks</p>
              <p className="text-xs text-on-surface-variant">Only the best for you.</p>
            </div>
          </div>
          <div className="col-span-1 bg-primary rounded-3xl p-6 h-48 flex flex-col justify-end">
            <span className="material-symbols-outlined text-4xl text-on-primary-container mb-2">security</span>
            <p className="font-headline font-bold text-white">Secure Payments</p>
          </div>
        </div>
      </main>

      {/* Bottom Decorative Status */}
      <div className="fixed bottom-8 w-full flex justify-center pointer-events-none">
        <div className="bg-tertiary-container/10 backdrop-blur-md px-6 py-2 rounded-full border border-tertiary-container/20">
          <p className="text-tertiary text-[10px] font-bold uppercase tracking-[0.2em] font-label">
            Enterprise-grade security active
          </p>
        </div>
      </div>
    </>
  )
}
