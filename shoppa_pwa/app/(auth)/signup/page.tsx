"use client"
import { useEffect } from 'react'
import { useState } from 'react'
import { api, setStoredUser } from '@/lib/supabase'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSession } from '@/components/features/SessionProvider'

export default function SignupPage() {
  const { isAuthenticated, loading } = useSession()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState<'shopper' | 'client'>('shopper')
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
      const data = await api('/auth/signup', { method: 'POST', body: JSON.stringify({ email, password }) })
      const user = data?.user
      if (user?.id) {
        await api('/users/me', {
          method: 'PATCH',
          body: JSON.stringify({ email, role }),
          headers: { Authorization: `Bearer ${data?.session?.access_token ?? ''}` },
        })
      }
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
    <main className="min-h-screen flex items-center justify-center px-6 bg-surface">
      <div className="w-full max-w-md bg-surface-container-lowest rounded-2xl shadow-ambient p-8">
        <h1 className="text-2xl font-headline font-bold mb-6 text-on-surface">Create account</h1>
        <form className="space-y-4" onSubmit={onSubmit}>
          <div>
            <label className="block text-xs font-bold text-primary mb-1 ml-1 uppercase tracking-widest font-label">Email</label>
            <input className="w-full h-14 pl-4 pr-4 bg-surface-container-highest border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-md font-medium text-on-surface transition-all" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className="block text-xs font-bold text-primary mb-1 ml-1 uppercase tracking-widest font-label">Password</label>
            <input className="w-full h-14 pl-4 pr-4 bg-surface-container-highest border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-md font-medium text-on-surface transition-all" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div>
            <label className="block text-xs font-bold text-primary mb-1 ml-1 uppercase tracking-widest font-label">Role</label>
            <select className="w-full h-14 pl-4 pr-4 bg-surface-container-highest border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-md font-medium text-on-surface transition-all" value={role} onChange={(e) => setRole(e.target.value as any)}>
              <option value="shopper">Shopper</option>
              <option value="client">Client</option>
            </select>
          </div>
          {error && <p className="text-sm text-error mt-1 ml-1">{error}</p>}
          <button disabled={isLoading} className="btn-primary">{isLoading ? 'Creating…' : 'Create account'}</button>
        </form>
        <div className="flex justify-between mt-4 text-sm">
          <Link className="text-primary font-semibold" href="/login">Sign in</Link>
        </div>
      </div>
    </main>
  )
}
