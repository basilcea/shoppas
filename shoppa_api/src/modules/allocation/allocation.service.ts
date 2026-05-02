import { Injectable } from '@nestjs/common'
import { SupabaseService } from '../auth/supabase.service'

@Injectable()
export class AllocationService {
  constructor(private sb: SupabaseService) {}

  preview(body: {
    item_id: string
    requested_total: number
    available_total: number
    client_breakdown: Array<{ client_id: string; requested: number }>
  }) {
    const ratio = Math.min(1, body.available_total / Math.max(1, body.requested_total))
    const auto = body.client_breakdown.map((c) => ({ client_id: c.client_id, allocated: Math.floor(c.requested * ratio) }))
    return { auto, remaining: body.available_total - auto.reduce((a, b) => a + b.allocated, 0) }
  }

  async confirm(
    shopperId: string,
    body: { item_id: string; allocations: Array<{ client_id: string; quantity: number }> },
  ) {
    const client = this.sb.getClient()
    const rows = body.allocations.map((a) => ({ item_id: body.item_id, client_id: a.client_id, quantity: a.quantity }))
    const { data, error } = await client.from('allocations').insert(rows).select()
    if (error) throw error
    return { ok: true, allocations: data }
  }
}
