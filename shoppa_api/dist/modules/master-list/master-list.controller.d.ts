import { MasterListService } from './master-list.service';
export declare class MasterListController {
    private svc;
    constructor(svc: MasterListService);
    get(req: any, groupBy?: 'category' | 'store'): Promise<any>;
    updateItemStatus(req: any, body: {
        item_id: string;
        action: 'bought' | 'unavailable' | 'substitute';
        substitute_item_id?: string;
    }): Promise<import("@supabase/postgrest-js").PostgrestSingleResponse<any>>;
}
