import { Injectable } from '@nestjs/common'
import { SupabaseService } from '../auth/supabase.service'

@Injectable()
export class DashboardService {
  constructor(private sb: SupabaseService) {}

  async getTodaySummary(userId: string) {
    const client = this.sb.getClient()
    const today = new Date().toISOString().slice(0, 10)

    const [{ data: orders }, { data: sessions }, { data: earnings }] = await Promise.all([
      client.from('orders').select('*').eq('shopper_id', userId).gte('created_at', today),
      client.from('shop_sessions').select('*').eq('shopper_id', userId).eq('date', today),
      client.rpc('earnings_today', { p_shopper: userId }),
    ])

    return {
      todayOrders: orders ?? [],
      activeSessions: (sessions ?? []).filter((s: any) => s.status === 'active'),
      earningsSummary: earnings ?? { total: 0, net: 0, fees: 0 },
    }
  }

  async getQuickActions(userId: string) {
    // Could be dynamically computed, for now return static actions the client can render as buttons
    return [
      { key: 'open_session', label: 'Open Session', href: '/sessions/new' },
      { key: 'create_order', label: 'Create Order', href: '/orders/new' },
      { key: 'availability', label: 'Set Availability', href: '/availability' },
      { key: 'price_list', label: 'Price List', href: '/pricelist' },
    ]
  }
}
