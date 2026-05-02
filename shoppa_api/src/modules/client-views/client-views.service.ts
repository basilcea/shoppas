import { Injectable } from '@nestjs/common'
import { SupabaseService } from '../auth/supabase.service'

@Injectable()
export class ClientViewsService {
  constructor(private sb: SupabaseService) {}

  async getOrderPublic(orderId: string) {
    const client = this.sb.getClient()
    const { data, error } = await client
      .from('orders')
      .select('*, items:list_items(*), shopper:users!orders_shopper_id_fkey(id,display_name), client:users!orders_client_id_fkey(id,display_name)')
      .eq('id', orderId)
      .single()
    if (error) throw error
    const total = (data.items || []).reduce((sum: number, it: any) => sum + (it.actual_price ?? it.expected_price ?? 0) * (it.quantity ?? 1), 0)
    const bought = (data.items || []).filter((i: any) => i.status === 'bought').length
    return { ...data, progress: data.items?.length ? bought / data.items.length : 0, total }
  }

  async clientApprove(orderId: string, body: { item_id?: string; approve: boolean; suggestion?: string }) {
    const client = this.sb.getClient()
    if (body.item_id) {
      const { data, error } = await client
        .from('list_items')
        .update({ client_approved: body.approve, client_suggestion: body.suggestion ?? null })
        .eq('id', body.item_id)
        .select()
        .single()
      if (error) throw error
      return data
    }
    const { data, error } = await client.from('orders').update({ client_approved: body.approve }).eq('id', orderId).select().single()
    if (error) throw error
    return data
  }
}
