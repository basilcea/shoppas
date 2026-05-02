import { SupabaseService } from '../auth/supabase.service';
export declare class ChatService {
    private sb;
    constructor(sb: SupabaseService);
    getMessages(userId: string, thread: string): Promise<any[]>;
    sendMessage(userId: string, body: {
        thread: string;
        message: string;
        quick_reply?: boolean;
    }): Promise<any>;
}
