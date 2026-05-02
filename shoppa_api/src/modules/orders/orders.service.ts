import { Injectable } from '@nestjs/common'
import { SupabaseService } from '../auth/supabase.service'

@Injectable()
export class OrdersService {
  constructor(private sb: SupabaseService) {}

  async list(shopperId: string, status?: string) {
    const client = this.sb.getClient()
    let q = client.from('orders').select('*').eq('shopper_id', shopperId)
    if (status) q = q.eq('status', status)
    const { data, error } = await q.order('created_at', { ascending: false })
    if (error) throw error
    return data
  }

  async get(shopperId: string, id: string) {
    const client = this.sb.getClient()
    const { data, error } = await client.from('orders').select('*, items:list_items(*)').eq('id', id).single()
    if (error) throw error
    return data
  }

  async create(shopperId: string, body: any) {
    const client = this.sb.getClient()
    const { data, error } = await client
      .from('orders')
      .insert({ shopper_id: shopperId, client_id: body.client_id, status: 'pending', notes: body.notes || null })
      .select()
      .single()
    if (error) throw error
    return data
  }
}
