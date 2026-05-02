import { Injectable } from '@nestjs/common'
import { SupabaseService } from '../auth/supabase.service'

@Injectable()
export class AnalyticsService {
  constructor(private sb: SupabaseService) {}

  async summary(shopperId: string, range: 'day' | 'week') {
    const client = this.sb.getClient()
    if (range === 'day') {
      const { data } = await client.rpc('earnings_today', { p_shopper: shopperId })
      return data ?? { total: 0, net: 0, fees: 0 }
    }
    const { data } = await client.rpc('earnings_week', { p_shopper: shopperId })
    return data ?? { total: 0, net: 0, fees: 0 }
  }
}
