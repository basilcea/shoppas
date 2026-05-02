import { Injectable } from '@nestjs/common'
import { SupabaseService } from '../auth/supabase.service'

@Injectable()
export class AvailabilityService {
  constructor(private sb: SupabaseService) {}

  async get(shopperId: string) {
    const client = this.sb.getClient()
    const { data, error } = await client.from('availability').select('*').eq('shopper_id', shopperId).single()
    if (error && error.code !== 'PGRST116') throw error
    return data ?? { next_start: null, deadline: null, max_clients: 0 }
  }

  async set(shopperId: string, body: { next_start: string; deadline: string; max_clients: number }) {
    const client = this.sb.getClient()
    const { data, error } = await client
      .from('availability')
      .upsert({ shopper_id: shopperId, ...body })
      .select()
      .single()
    if (error) throw error
    return data
  }
}
