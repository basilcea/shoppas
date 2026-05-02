import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common'
import { AllocationService } from './allocation.service'
import { AuthGuard } from '../../common/guards/auth.guard'

@Controller('allocation')
@UseGuards(AuthGuard)
export class AllocationController {
  constructor(private svc: AllocationService) {}

  @Post('preview')
  preview(
    @Req() req: any,
    @Body() body: { item_id: string; requested_total: number; available_total: number; client_breakdown: Array<{ client_id: string; requested: number }> },
  ) {
    return this.svc.preview(body)
  }

  @Post('confirm')
  confirm(@Req() req: any, @Body() body: { item_id: string; allocations: Array<{ client_id: string; quantity: number }> }) {
    return this.svc.confirm(req.user.id, body)
  }
}
