import { Injectable } from '@nestjs/common'
import { SupabaseService } from '../auth/supabase.service'

@Injectable()
export class DeliveryService {
  constructor(private sb: SupabaseService) {}

  async packingPreview(shopperId: string, sessionId: string) {
    const client = this.sb.getClient()
    // All bought items for orders in this session grouped by client
    const { data, error } = await client
      .from('list_items')
      .select('id, name, quantity, order_id, status, orders:orders(client_id, id)')
      .eq('status', 'bought')
      .eq('orders.session_id', sessionId)
    if (error) throw error
    const byClient: Record<string, any[]> = {}
    for (const it of (data as any[]) ?? []) {
      const cid = (it as any)?.orders?.client_id as string | undefined
      if (!cid) continue
      byClient[cid] = byClient[cid] || []
      byClient[cid].push({ id: it.id, name: it.name, quantity: it.quantity, order_id: it.order_id })
    }
    return byClient
  }

  async setStatus(shopperId: string, orderId: string, status: 'packed' | 'out_for_delivery' | 'delivered') {
    const client = this.sb.getClient()
    const { data, error } = await client
      .from('orders')
      .update({ delivery_status: status })
      .eq('id', orderId)
      .eq('shopper_id', shopperId)
      .select()
      .single()
    if (error) throw error
    return data
  }
}
