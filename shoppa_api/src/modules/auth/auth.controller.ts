import { Body, Controller, Get, Post, Req } from '@nestjs/common'
import { SupabaseService } from './supabase.service'
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator'

class SignUpDto {
  @IsEmail()
  email!: string
  @MinLength(6)
  password!: string
}

class SignInDto {
  @IsEmail()
  email!: string
  @IsNotEmpty()
  password!: string
}

@Controller('auth')
export class AuthController {
  constructor(private readonly supabase: SupabaseService) {}

  @Post('signup')
  async signUp(@Body() dto: SignUpDto) {
    return this.supabase.signUp(dto.email, dto.password)
  }

  @Post('signin')
  async signIn(@Body() dto: SignInDto) {
    return this.supabase.signIn(dto.email, dto.password)
  }

  @Post('signout')
  async signOut(@Req() req: any) {
    const token = (req.headers['authorization'] || '').replace('Bearer ', '')
    return this.supabase.signOut(token)
  }

  @Get('me')
  async me(@Req() req: any) {
    const token = (req.headers['authorization'] || '').replace('Bearer ', '')
    return this.supabase.getUser(token)
  }

  @Post('forgot-password')
  async forgot(@Body() body: { email: string; redirectTo?: string }) {
    return this.supabase.resetPasswordForEmail(body.email, body.redirectTo)
  }
}
