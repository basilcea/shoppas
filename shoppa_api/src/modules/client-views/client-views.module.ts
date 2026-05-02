import { Module } from '@nestjs/common'
import { ClientViewsController } from './client-views.controller'
import { ClientViewsService } from './client-views.service'
import { AuthModule } from '../auth/auth.module'

@Module({ imports: [AuthModule], controllers: [ClientViewsController], providers: [ClientViewsService] })
export class ClientViewsModule {}
