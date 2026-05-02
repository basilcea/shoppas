import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common'
import { DashboardService } from './dashboard.service'
import { AuthGuard } from '../../common/guards/auth.guard'

@Controller('dashboard')
@UseGuards(AuthGuard)
export class DashboardController {
  constructor(private svc: DashboardService) {}

  @Get('today')
  today(@Req() req: any) {
    return this.svc.getTodaySummary(req.user.id)
  }

  @Get('quick-actions')
  quickActions(@Req() req: any) {
    return this.svc.getQuickActions(req.user.id)
  }
}
