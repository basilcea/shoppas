import { Injectable, NotFoundException } from '@nestjs/common'
import { SupabaseService } from '../auth/supabase.service'
import { UserEntity } from './users.entity'

@Injectable()
export class UsersService {
  constructor(private supabase: SupabaseService) {}

  async getProfile(userId: string): Promise<UserEntity> {
    const sb = this.supabase.getClient()
    const { data, error } = await sb.from('users').select('*').eq('id', userId).single()
    if (error || !data) throw new NotFoundException('User not found')
    return data as UserEntity
  }

  async upsertProfile(user: Partial<UserEntity> & { id: string }): Promise<UserEntity> {
    const sb = this.supabase.getClient()
    const { data, error } = await sb.from('users').upsert(user).select().single()
    if (error || !data) throw error
    return data as UserEntity
  }
}
