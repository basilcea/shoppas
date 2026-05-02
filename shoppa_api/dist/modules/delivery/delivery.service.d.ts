import { SupabaseService } from '../auth/supabase.service';
export declare class DeliveryService {
    private sb;
    constructor(sb: SupabaseService);
    packingPreview(shopperId: string, sessionId: string): Promise<Record<string, any[]>>;
    setStatus(shopperId: string, orderId: string, status: 'packed' | 'out_for_delivery' | 'delivered'): Promise<any>;
}
