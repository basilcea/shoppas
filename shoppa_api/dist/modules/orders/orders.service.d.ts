import { SupabaseService } from '../auth/supabase.service';
export declare class OrdersService {
    private sb;
    constructor(sb: SupabaseService);
    list(shopperId: string, status?: string): Promise<any[]>;
    get(shopperId: string, id: string): Promise<any>;
    create(shopperId: string, body: any): Promise<any>;
}
