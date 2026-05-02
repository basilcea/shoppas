import { Module } from '@nestjs/common'
import { MasterListController } from './master-list.controller'
import { MasterListService } from './master-list.service'
import { AuthModule } from '../auth/auth.module'

@Module({ imports: [AuthModule], controllers: [MasterListController], providers: [MasterListService] })
export class MasterListModule {}
