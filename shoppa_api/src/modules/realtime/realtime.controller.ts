import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common'
import { RealtimeService } from './realtime.service'
import { AuthGuard } from '../../common/guards/auth.guard'

@Controller('realtime')
@UseGuards(AuthGuard)
export class RealtimeController {
  constructor(private svc: RealtimeService) {}

  @Post('subscribe')
  subscribe(@Req() req: any, @Body() body: { channel: string }) {
    return this.svc.subscribeChannel(req.user.id, body.channel)
  }
}
