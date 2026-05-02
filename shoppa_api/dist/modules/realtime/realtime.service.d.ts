import { SupabaseService } from '../auth/supabase.service';
export declare class RealtimeService {
    private sb;
    constructor(sb: SupabaseService);
    subscribeChannel(_userId: string, _channel: string): Promise<{
        ok: boolean;
    }>;
}
