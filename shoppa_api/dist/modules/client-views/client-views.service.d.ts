import { SupabaseService } from '../auth/supabase.service';
export declare class ClientViewsService {
    private sb;
    constructor(sb: SupabaseService);
    getOrderPublic(orderId: string): Promise<any>;
    clientApprove(orderId: string, body: {
        item_id?: string;
        approve: boolean;
        suggestion?: string;
    }): Promise<any>;
}
