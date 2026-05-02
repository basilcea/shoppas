"use client"
import { useState } from 'react'
import { api } from '@/lib/supabase'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      // Call our API which proxies to Supabase in the backend
      const data = await api('/auth/signin', { method: 'POST', body: JSON.stringify({ email, password }) })
      // Persist the access_token in memory/localStorage if returned
      const access_token = data?.session?.access_token
      if (access_token) localStorage.setItem('access_token', access_token)
      window.location.href = '/'
    } catch (err: any) {
      setError(err.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-8">
        <h1 className="text-2xl font-bold mb-6">Sign in</h1>
        <form className="space-y-4" onSubmit={onSubmit}>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input className="mt-1 w-full rounded-md border-slate-300 focus:ring-emerald-600 focus:border-emerald-600" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input className="mt-1 w-full rounded-md border-slate-300 focus:ring-emerald-600 focus:border-emerald-600" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button disabled={loading} className="w-full bg-emerald-700 text-white py-2.5 rounded-md font-semibold disabled:opacity-50">{loading ? 'Signing in…' : 'Sign in'}</button>
        </form>
        <div className="flex justify-between mt-4 text-sm">
          <Link className="text-emerald-700 underline" href="/signup">Create account</Link>
          <Link className="text-emerald-700 underline" href="/forgot-password">Forgot password</Link>
        </div>
      </div>
    </main>
  )
}
