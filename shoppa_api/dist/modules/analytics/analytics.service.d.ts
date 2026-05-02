import { SupabaseService } from '../auth/supabase.service';
export declare class AnalyticsService {
    private sb;
    constructor(sb: SupabaseService);
    summary(shopperId: string, range: 'day' | 'week'): Promise<any>;
}
