export async function api(path: string, init?: RequestInit) {
  const base = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4101'
  const token = typeof window !== 'undefined' ? localStorage.getItem('access_token') : null
  const res = await fetch(`${base}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(init?.headers || {}),
    },
    credentials: 'include',
  })
  if (!res.ok) {
    let msg = 'Request failed'
    try {
      const j = await res.json()
      msg = j?.message || msg
    } catch (_) {}
    throw new Error(msg)
  }
  const text = await res.text()
  return text ? JSON.parse(text) : null
}

export interface User {
  id: string
  email: string
  role: 'shopper' | 'client'
}

export function getStoredUser(): User | null {
  if (typeof window === 'undefined') return null
  const stored = localStorage.getItem('shoppa_user')
  return stored ? JSON.parse(stored) : null
}

export function setStoredUser(user: User | null) {
  if (typeof window === 'undefined') return
  if (user) {
    localStorage.setItem('shoppa_user', JSON.stringify(user))
  } else {
    localStorage.removeItem('shoppa_user')
  }
}

export function getAccessToken(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('access_token')
}

export function clearAuth() {
  if (typeof window === 'undefined') return
  localStorage.removeItem('access_token')
  localStorage.removeItem('shoppa_user')
}
