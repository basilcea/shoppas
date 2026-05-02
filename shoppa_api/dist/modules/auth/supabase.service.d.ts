import { SupabaseClient } from '@supabase/supabase-js';
export declare class SupabaseService {
    private client?;
    constructor();
    private ensureClient;
    signUp(email: string, password: string): Promise<{
        user: import("@supabase/supabase-js").AuthUser | null;
        session: import("@supabase/supabase-js").AuthSession | null;
    }>;
    signIn(email: string, password: string): Promise<{
        user: import("@supabase/supabase-js").AuthUser;
        session: import("@supabase/supabase-js").AuthSession;
        weakPassword?: import("@supabase/supabase-js").WeakPassword;
    }>;
    signOut(accessToken?: string): Promise<{
        ok: boolean;
    }>;
    getUser(accessToken: string): Promise<{
        user: import("@supabase/supabase-js").AuthUser;
    }>;
    verify(accessToken: string): Promise<import("@supabase/supabase-js").AuthUser>;
    forgotPassword(email: string, redirectTo?: string): Promise<{
        ok: boolean;
        data: {};
    }>;
    oauthUrl(provider: string, redirectTo?: string): Promise<{
        provider: string;
        redirectTo: string | null;
    }>;
    getClient(): SupabaseClient<any, "public", "public", any, any>;
}
