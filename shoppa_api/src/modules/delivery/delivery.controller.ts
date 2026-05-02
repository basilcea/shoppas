import { Body, Controller, Get, Param, Patch, Query, Req, UseGuards } from '@nestjs/common'
import { DeliveryService } from './delivery.service'
import { AuthGuard } from '../../common/guards/auth.guard'

@Controller('delivery')
@UseGuards(AuthGuard)
export class DeliveryController {
  constructor(private svc: DeliveryService) {}

  // Pre-delivery helper: split purchased items by client for packing labels
  @Get('packing/preview')
  preview(@Req() req: any, @Query('session_id') sessionId: string) {
    return this.svc.packingPreview(req.user.id, sessionId)
  }

  // Update order delivery status lifecycle
  @Patch(':orderId/status')
  setStatus(
    @Req() req: any,
    @Param('orderId') orderId: string,
    @Body() body: { status: 'packed' | 'out_for_delivery' | 'delivered' },
  ) {
    return this.svc.setStatus(req.user.id, orderId, body.status)
  }
}
