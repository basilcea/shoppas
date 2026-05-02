"use client"
import { useState } from 'react'
import { api } from '@/lib/supabase'
import Link from 'next/link'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
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
      setLoading(false)
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
