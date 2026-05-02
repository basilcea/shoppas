import { SupabaseService } from '../auth/supabase.service';
export declare class AvailabilityService {
    private sb;
    constructor(sb: SupabaseService);
    get(shopperId: string): Promise<any>;
    set(shopperId: string, body: {
        next_start: string;
        deadline: string;
        max_clients: number;
    }): Promise<any>;
}
