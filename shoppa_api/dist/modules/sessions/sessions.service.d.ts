import { SupabaseService } from '../auth/supabase.service';
export declare class SessionsService {
    private sb;
    constructor(sb: SupabaseService);
    active(shopperId: string): Promise<any[]>;
    create(shopperId: string, body: any): Promise<any>;
    updateStatus(shopperId: string, id: string, status: string): Promise<any>;
}
