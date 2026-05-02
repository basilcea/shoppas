import { Body, Controller, Get, Param, Patch, Req } from '@nestjs/common'
import { ClientViewsService } from './client-views.service'

// Public endpoints for clients viewing (token validation could be via signed links)
@Controller('client')
export class ClientViewsController {
  constructor(private svc: ClientViewsService) {}

  @Get('order/:id')
  getOrder(@Param('id') id: string) {
    return this.svc.getOrderPublic(id)
  }

  @Patch('order/:id/approve')
  approve(@Param('id') id: string, @Body() body: { item_id?: string; approve: boolean; suggestion?: string }) {
    return this.svc.clientApprove(id, body)
  }
}
