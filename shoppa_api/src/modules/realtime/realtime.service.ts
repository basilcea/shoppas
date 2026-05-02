import { Injectable } from '@nestjs/common'
import { SupabaseService } from '../auth/supabase.service'

@Injectable()
export class RealtimeService {
  constructor(private sb: SupabaseService) {}

  async subscribeChannel(_userId: string, _channel: string) {
    // Placeholder for websocket/Supabase Realtime channel coordination
    return { ok: true }
  }
}
