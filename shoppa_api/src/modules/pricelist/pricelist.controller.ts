import { Body, Controller, Get, Patch, Post, Req, UseGuards } from '@nestjs/common'
import { PriceListService } from './pricelist.service'
import { AuthGuard } from '../../common/guards/auth.guard'

@Controller('pricelist')
@UseGuards(AuthGuard)
export class PriceListController {
  constructor(private svc: PriceListService) {}

  @Get()
  get(@Req() req: any) {
    return this.svc.get(req.user.id)
  }

  @Post()
  upsert(@Req() req: any, @Body() body: { product: string; category: string; min_quantity: number; quantity_unit: string; amount: number }) {
    return this.svc.upsert(req.user.id, body)
  }

  @Patch('bulk')
  bulk(@Req() req: any, @Body() body: Array<{ product: string; category: string; min_quantity: number; quantity_unit: string; amount: number }>) {
    return this.svc.bulkUpsert(req.user.id, body)
  }
}
