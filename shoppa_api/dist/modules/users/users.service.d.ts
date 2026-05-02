import { SupabaseService } from '../auth/supabase.service';
import { UserEntity } from './users.entity';
export declare class UsersService {
    private supabase;
    constructor(supabase: SupabaseService);
    getProfile(userId: string): Promise<UserEntity>;
    upsertProfile(user: Partial<UserEntity> & {
        id: string;
    }): Promise<UserEntity>;
}
