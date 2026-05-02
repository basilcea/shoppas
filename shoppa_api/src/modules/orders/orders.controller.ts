import { Body, Controller, Get, Param, Post, Query, Req, UseGuards } from '@nestjs/common'
import { OrdersService } from './orders.service'
import { AuthGuard } from '../../common/guards/auth.guard'

@Controller('orders')
@UseGuards(AuthGuard)
export class OrdersController {
  constructor(private svc: OrdersService) {}

  @Get()
  list(@Req() req: any, @Query('status') status?: string) {
    return this.svc.list(req.user.id, status)
  }

  @Get(':id')
  get(@Req() req: any, @Param('id') id: string) {
    return this.svc.get(req.user.id, id)
  }

  @Post()
  create(@Req() req: any, @Body() body: any) {
    return this.svc.create(req.user.id, body)
  }
}
