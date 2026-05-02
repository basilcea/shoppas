import { SupabaseService } from '../auth/supabase.service';
export declare class DashboardService {
    private sb;
    constructor(sb: SupabaseService);
    getTodaySummary(userId: string): Promise<{
        todayOrders: any[];
        activeSessions: any[];
        earningsSummary: any;
    }>;
    getQuickActions(userId: string): Promise<{
        key: string;
        label: string;
        href: string;
    }[]>;
}
