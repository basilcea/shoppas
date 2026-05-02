import { Injectable } from '@nestjs/common'
import { SupabaseService } from '../auth/supabase.service'

@Injectable()
export class ChatService {
  constructor(private sb: SupabaseService) {}

  async getMessages(userId: string, thread: string) {
    const client = this.sb.getClient()
    const { data, error } = await client
      .from('messages')
      .select('*')
      .eq('thread_id', thread)
      .order('created_at', { ascending: true })
    if (error) throw error
    return data
  }

  async sendMessage(userId: string, body: { thread: string; message: string; quick_reply?: boolean }) {
    const client = this.sb.getClient()
    const { data, error } = await client
      .from('messages')
      .insert({ thread_id: body.thread, author_id: userId, content: body.message, quick_reply: !!body.quick_reply })
      .select()
      .single()
    if (error) throw error
    return data
  }
}
