import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { SupabaseService } from '../../modules/auth/supabase.service'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private reflector: Reflector, private supabase: SupabaseService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest()
    const token = (request.headers['authorization'] || '').replace('Bearer ', '')
    if (!token) throw new UnauthorizedException('Missing token')
    const user = await this.supabase.verify(token)
    request.user = user
    return true
  }
}
