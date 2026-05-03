'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { getStoredUser, setStoredUser, clearAuth, getAccessToken, User } from '@/lib/supabase'
import { api } from '@/lib/supabase'

interface SessionContextType {
  user: User | null
  loading: boolean
  isAuthenticated: boolean
}

const SessionContext = createContext<SessionContextType>({
  user: null,
  loading: true,
  isAuthenticated: false,
})

export function useSession() {
  return useContext(SessionContext)
}

export function SessionProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = getAccessToken()
    const storedUser = getStoredUser()
    if (token && storedUser) {
      setUser(storedUser)
    }
    setLoading(false)
  }, [])

  const value = {
    user,
    loading,
    isAuthenticated: !!user,
  }

  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  )
}
