import { SupabaseService } from './supabase.service';
declare class SignUpDto {
    email: string;
    password: string;
}
declare class SignInDto {
    email: string;
    password: string;
}
export declare class AuthController {
    private readonly supabase;
    constructor(supabase: SupabaseService);
    signUp(dto: SignUpDto): Promise<{
        user: import("@supabase/auth-js").User | null;
        session: import("@supabase/auth-js").Session | null;
    }>;
    signIn(dto: SignInDto): Promise<{
        user: import("@supabase/auth-js").User;
        session: import("@supabase/auth-js").Session;
        weakPassword?: import("@supabase/auth-js").WeakPassword;
    }>;
    signOut(req: any): Promise<{
        ok: boolean;
    }>;
    me(req: any): Promise<{
        user: import("@supabase/auth-js").User;
    }>;
    forgotPassword(body: {
        email: string;
        redirectTo?: string;
    }): Promise<{
        ok: boolean;
        data: {};
    }>;
    oauthUrl(req: any): Promise<{
        provider: string;
        redirectTo: string | null;
    }>;
}
export {};
