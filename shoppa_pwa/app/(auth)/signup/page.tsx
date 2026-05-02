"use client"
import { useState } from 'react'
import { api } from '@/lib/supabase'
import Link from 'next/link'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState<'shopper' | 'client'>('shopper')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const data = await api('/auth/signup', { method: 'POST', body: JSON.stringify({ email, password }) })
      const user = data?.user
      if (user?.id) {
        // create profile via users API or directly on backend automatically via trigger
        await api('/users/me', {
          method: 'PATCH',
          body: JSON.stringify({ email, role }),
          headers: { Authorization: `Bearer ${data?.session?.access_token ?? ''}` },
        })
      }
      window.location.href = '/'
    } catch (err: any) {
      setError(err.message || 'Signup failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-8">
        <h1 className="text-2xl font-bold mb-6">Create account</h1>
        <form className="space-y-4" onSubmit={onSubmit}>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input className="mt-1 w-full rounded-md border-slate-300 focus:ring-emerald-600 focus:border-emerald-600" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input className="mt-1 w-full rounded-md border-slate-300 focus:ring-emerald-600 focus:border-emerald-600" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm font-medium">Role</label>
            <select className="mt-1 w-full rounded-md border-slate-300 focus:ring-emerald-600 focus:border-emerald-600" value={role} onChange={(e) => setRole(e.target.value as any)}>
              <option value="shopper">Shopper</option>
              <option value="client">Client</option>
            </select>
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button disabled={loading} className="w-full bg-emerald-700 text-white py-2.5 rounded-md font-semibold disabled:opacity-50">{loading ? 'Creating…' : 'Create account'}</button>
        </form>
        <div className="flex justify-between mt-4 text-sm">
          <Link className="text-emerald-700 underline" href="/login">Sign in</Link>
        </div>
      </div>
    </main>
  )
}
