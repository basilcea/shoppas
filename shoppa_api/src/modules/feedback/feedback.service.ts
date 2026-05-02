import { Injectable } from '@nestjs/common'
import { SupabaseService } from '../auth/supabase.service'

@Injectable()
export class FeedbackService {
  constructor(private sb: SupabaseService) {}

  async list(userId: string, orderId?: string) {
    const client = this.sb.getClient()
    let q = client.from('feedback').select('*').eq('author_id', userId)
    if (orderId) q = q.eq('order_id', orderId)
    const { data, error } = await q.order('created_at', { ascending: false })
    if (error) throw error
    return data
  }

  async submit(
    userId: string,
    body: { order_id: string; target: 'shopper' | 'client' | 'platform'; rating: number; comment?: string },
  ) {
    const client = this.sb.getClient()
    const { data, error } = await client
      .from('feedback')
      .insert({ author_id: userId, ...body })
      .select()
      .single()
    if (error) throw error
    return data
  }
}
