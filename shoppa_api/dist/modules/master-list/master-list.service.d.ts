import { SupabaseService } from '../auth/supabase.service';
export declare class MasterListService {
    private sb;
    constructor(sb: SupabaseService);
    getCombinedList(shopperId: string, groupBy: 'category' | 'store'): Promise<any>;
    updateItemStatus(shopperId: string, body: {
        item_id: string;
        action: 'bought' | 'unavailable' | 'substitute';
        substitute_item_id?: string;
    }): Promise<import("@supabase/postgrest-js").PostgrestSingleResponse<any>>;
}
