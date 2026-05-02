import { SupabaseService } from '../auth/supabase.service';
export declare class AllocationService {
    private sb;
    constructor(sb: SupabaseService);
    preview(body: {
        item_id: string;
        requested_total: number;
        available_total: number;
        client_breakdown: Array<{
            client_id: string;
            requested: number;
        }>;
    }): {
        auto: {
            client_id: string;
            allocated: number;
        }[];
        remaining: number;
    };
    confirm(shopperId: string, body: {
        item_id: string;
        allocations: Array<{
            client_id: string;
            quantity: number;
        }>;
    }): Promise<{
        ok: boolean;
        allocations: any[];
    }>;
}
