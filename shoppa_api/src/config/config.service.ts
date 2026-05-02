import { Injectable } from '@nestjs/common'

@Injectable()
export class AppConfigService {
  readonly port: number = parseInt(process.env.PORT ?? '4000', 10)
  readonly supabaseUrl: string = process.env.SUPABASE_URL ?? ''
  readonly supabaseAnonKey: string = process.env.SUPABASE_ANON_KEY ?? ''
}
