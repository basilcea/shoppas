import { Injectable } from '@nestjs/common'
import { SupabaseService } from '../auth/supabase.service'

@Injectable()
export class SessionsService {
  constructor(private sb: SupabaseService) {}

  async active(shopperId: string) {
    const client = this.sb.getClient()
    const { data, error } = await client
      .from('shop_sessions')
      .select('*, orders:orders(*)')
      .eq('shopper_id', shopperId)
      .eq('status', 'active')
      .order('started_at', { ascending: false })
    if (error) throw error
    return data
  }

  async create(shopperId: string, body: any) {
    const client = this.sb.getClient()
    const { data, error } = await client
      .from('shop_sessions')
      .insert({ shopper_id: shopperId, status: 'active', date: body.date ?? new Date().toISOString().slice(0, 10) })
      .select()
      .single()
    if (error) throw error
    return data
  }

  async updateStatus(shopperId: string, id: string, status: string) {
    const client = this.sb.getClient()
    const { data, error } = await client.from('shop_sessions').update({ status }).eq('id', id).eq('shopper_id', shopperId).select().single()
    if (error) throw error
    return data
  }
}
