import { Injectable } from '@nestjs/common'
import { SupabaseService } from '../auth/supabase.service'

@Injectable()
export class PriceListService {
  constructor(private sb: SupabaseService) {}

  async get(shopperId: string) {
    const client = this.sb.getClient()
    const { data, error } = await client.from('price_list').select('*').eq('shopper_id', shopperId)
    if (error) throw error
    return data
  }

  async upsert(
    shopperId: string,
    body: { product: string; category: string; min_quantity: number; quantity_unit: string; amount: number },
  ) {
    const client = this.sb.getClient()
    const { data, error } = await client
      .from('price_list')
      .upsert({ shopper_id: shopperId, ...body }, { onConflict: 'shopper_id,product,category' })
      .select()
    if (error) throw error
    return data
  }

  async bulkUpsert(
    shopperId: string,
    rows: Array<{ product: string; category: string; min_quantity: number; quantity_unit: string; amount: number }>,
  ) {
    const client = this.sb.getClient()
    const payload = rows.map((r) => ({ shopper_id: shopperId, ...r }))
    const { data, error } = await client.from('price_list').upsert(payload, { onConflict: 'shopper_id,product,category' }).select()
    if (error) throw error
    return data
  }
}
