import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common'
import { AnalyticsService } from './analytics.service'
import { AuthGuard } from '../../common/guards/auth.guard'

@Controller('analytics')
@UseGuards(AuthGuard)
export class AnalyticsController {
  constructor(private svc: AnalyticsService) {}

  @Get('summary')
  summary(@Req() req: any, @Query('range') range: 'day' | 'week' = 'day') {
    return this.svc.summary(req.user.id, range)
  }
}
