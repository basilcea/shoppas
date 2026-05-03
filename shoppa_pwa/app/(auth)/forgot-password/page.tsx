"use client"
import { useEffect, useState } from 'react'
import { api } from '@/lib/supabase'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSession } from '@/components/features/SessionProvider'

export default function ForgotPasswordPage() {
  const { isAuthenticated, loading } = useSession()
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
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
      await api('/auth/forgot-password', {
        method: 'POST',
        body: JSON.stringify({ email, redirectTo: `${window.location.origin}/reset-password` }),
      })
      setSent(true)
    } catch (err: any) {
      setError(err.message || 'Failed to send reset email')
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
    <main className="min-h-screen flex items-center justify-center px-6 bg-surface">
      <div className="w-full max-w-md bg-surface-container-lowest rounded-2xl shadow-ambient p-8">
        <h1 className="text-2xl font-headline font-bold mb-6 text-on-surface">Forgot password</h1>
        {sent ? (
          <p className="text-sm text-on-surface-variant">If there&apos;s an account for {email}, a reset link has been sent.</p>
        ) : (
          <form className="space-y-4" onSubmit={onSubmit}>
            <div>
              <label className="block text-xs font-bold text-primary mb-1 ml-1 uppercase tracking-widest font-label">Email</label>
              <input className="w-full h-14 pl-4 pr-4 bg-surface-container-highest border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-md font-medium text-on-surface transition-all" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            {error && <p className="text-sm text-error mt-1 ml-1">{error}</p>}
            <button disabled={isLoading} className="btn-primary">{isLoading ? 'Sending…' : 'Send reset link'}</button>
          </form>
        )}
        <div className="flex justify-between mt-4 text-sm">
          <Link className="text-primary font-semibold" href="/login">Back to sign in</Link>
        </div>
      </div>
    </main>
  )
}
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-surface">
      <div className="w-full max-w-md bg-surface-container-lowest rounded-2xl shadow-ambient p-8">
        <h1 className="text-2xl font-headline font-bold mb-6 text-on-surface">Forgot password</h1>
        {sent ? (
          <p className="text-sm text-on-surface-variant">If there&apos;s an account for {email}, a reset link has been sent.</p>
        ) : (
          <form className="space-y-4" onSubmit={onSubmit}>
            <div>
              <label className="block text-xs font-bold text-primary mb-1 ml-1 uppercase tracking-widest font-label">Email</label>
              <input className="w-full h-14 pl-4 pr-4 bg-surface-container-highest border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-md font-medium text-on-surface transition-all" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            {error && <p className="text-sm text-error mt-1 ml-1">{error}</p>}
            <button disabled={loading} className="btn-primary">{loading ? 'Sending…' : 'Send reset link'}</button>
          </form>
        )}
        <div className="flex justify-between mt-4 text-sm">
          <Link className="text-primary font-semibold" href="/login">Back to sign in</Link>
        </div>
      </div>
    </main>
  )
}
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-8">
        <h1 className="text-2xl font-bold mb-6">Forgot password</h1>
        {sent ? (
          <p className="text-sm">If there’s an account for {email}, a reset link has been sent.</p>
        ) : (
          <form className="space-y-4" onSubmit={onSubmit}>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input className="mt-1 w-full rounded-md border-slate-300 focus:ring-emerald-600 focus:border-emerald-600" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button disabled={loading} className="w-full bg-emerald-700 text-white py-2.5 rounded-md font-semibold disabled:opacity-50">{loading ? 'Sending…' : 'Send reset link'}</button>
          </form>
        )}
        <div className="flex justify-between mt-4 text-sm">
          <Link className="text-emerald-700 underline" href="/login">Back to sign in</Link>
        </div>
      </div>
    </main>
  )
}
