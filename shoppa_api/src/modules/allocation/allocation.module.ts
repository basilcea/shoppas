import { Module } from '@nestjs/common'
import { AllocationController } from './allocation.controller'
import { AllocationService } from './allocation.service'
import { AuthModule } from '../auth/auth.module'

@Module({ imports: [AuthModule], controllers: [AllocationController], providers: [AllocationService] })
export class AllocationModule {}
