import { SupabaseService } from '../auth/supabase.service';
export declare class FeedbackService {
    private sb;
    constructor(sb: SupabaseService);
    list(userId: string, orderId?: string): Promise<any[]>;
    submit(userId: string, body: {
        order_id: string;
        target: 'shopper' | 'client' | 'platform';
        rating: number;
        comment?: string;
    }): Promise<any>;
}
