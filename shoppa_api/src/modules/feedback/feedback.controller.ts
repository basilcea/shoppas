import { Body, Controller, Get, Post, Query, Req, UseGuards } from '@nestjs/common'
import { FeedbackService } from './feedback.service'
import { AuthGuard } from '../../common/guards/auth.guard'

@Controller('feedback')
@UseGuards(AuthGuard)
export class FeedbackController {
  constructor(private svc: FeedbackService) {}

  @Get()
  list(@Req() req: any, @Query('order_id') orderId?: string) {
    return this.svc.list(req.user.id, orderId)
  }

  @Post()
  submit(
    @Req() req: any,
    @Body()
    body: { order_id: string; target: 'shopper' | 'client' | 'platform'; rating: number; comment?: string },
  ) {
    return this.svc.submit(req.user.id, body)
  }
}
