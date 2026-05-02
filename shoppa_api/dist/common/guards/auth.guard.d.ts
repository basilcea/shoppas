import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { SupabaseService } from '../../modules/auth/supabase.service';
export declare class AuthGuard implements CanActivate {
    private reflector;
    private supabase;
    constructor(reflector: Reflector, supabase: SupabaseService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
