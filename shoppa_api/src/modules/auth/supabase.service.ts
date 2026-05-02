import { Injectable } from '@nestjs/common'
import { createClient, SupabaseClient } from '@supabase/supabase-js'

@Injectable()
export class SupabaseService {
  private client?: SupabaseClient
  constructor() {}

  private ensureClient() {
    if (!this.client) {
      const url = process.env.SUPABASE_URL
      const key = process.env.SUPABASE_ANON_KEY
      if (!url || !key) {
        throw new Error('Supabase is not configured. Set SUPABASE_URL and SUPABASE_ANON_KEY in env.')
      }
      this.client = createClient(url, key)
    }
    return this.client
  }

  async signUp(email: string, password: string) {
    const { data, error } = await this.ensureClient().auth.signUp({ email, password })
    if (error) throw error
    return data
  }

  async signIn(email: string, password: string) {
    const { data, error } = await this.ensureClient().auth.signInWithPassword({ email, password })
    if (error) throw error
    return data
  }

  async resetPasswordForEmail(email: string, redirectTo?: string) {
    const { data, error } = await this.ensureClient().auth.resetPasswordForEmail(email, {
      redirectTo,
    })
    if (error) throw error
    return { ok: true }
  }

  async signOut(accessToken?: string) {
    if (accessToken) {
      await this.ensureClient().auth.setSession({ access_token: accessToken, refresh_token: '' })
    }
    const { error } = await this.ensureClient().auth.signOut()
    if (error) throw error
    return { ok: true }
  }

  async getUser(accessToken: string) {
    const { data, error } = await this.ensureClient().auth.getUser(accessToken)
    if (error) throw error
    return data
  }

  async verify(accessToken: string) {
    const { data, error } = await this.ensureClient().auth.getUser(accessToken)
    if (error || !data?.user) throw error || new Error('Unauthorized')
    return data.user
  }

  getClient() {
    return this.ensureClient()
  }
}
