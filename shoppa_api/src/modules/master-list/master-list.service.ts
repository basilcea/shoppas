import { Injectable } from '@nestjs/common'
import { SupabaseService } from '../auth/supabase.service'

@Injectable()
export class MasterListService {
  constructor(private sb: SupabaseService) {}

  async getCombinedList(shopperId: string, groupBy: 'category' | 'store') {
    const client = this.sb.getClient()
    const { data, error } = await client.rpc('get_master_list', { p_shopper: shopperId, p_groupby: groupBy })
    if (error) throw error
    return data
  }

  async updateItemStatus(
    shopperId: string,
    body: { item_id: string; action: 'bought' | 'unavailable' | 'substitute'; substitute_item_id?: string },
  ) {
    const client = this.sb.getClient()
    switch (body.action) {
      case 'bought':
        return client.from('list_items').update({ status: 'bought' }).eq('id', body.item_id).select().single()
      case 'unavailable':
        return client.from('list_items').update({ status: 'unavailable' }).eq('id', body.item_id).select().single()
      case 'substitute':
        return client
          .from('list_items')
          .update({ status: 'substituted', substitute_item_id: body.substitute_item_id })
          .eq('id', body.item_id)
          .select()
          .single()
    }
  }
}
