import { Module } from '@nestjs/common'
import { PriceListController } from './pricelist.controller'
import { PriceListService } from './pricelist.service'
import { AuthModule } from '../auth/auth.module'

@Module({ imports: [AuthModule], controllers: [PriceListController], providers: [PriceListService] })
export class PriceListModule {}
