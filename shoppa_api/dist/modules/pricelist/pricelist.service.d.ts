import { SupabaseService } from '../auth/supabase.service';
export declare class PriceListService {
    private sb;
    constructor(sb: SupabaseService);
    get(shopperId: string): Promise<any[]>;
    upsert(shopperId: string, body: {
        product: string;
        category: string;
        min_quantity: number;
        quantity_unit: string;
        amount: number;
    }): Promise<any[]>;
    bulkUpsert(shopperId: string, rows: Array<{
        product: string;
        category: string;
        min_quantity: number;
        quantity_unit: string;
        amount: number;
    }>): Promise<any[]>;
}
