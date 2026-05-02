import { Body, Controller, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common'
import { SessionsService } from './sessions.service'
import { AuthGuard } from '../../common/guards/auth.guard'

@Controller('sessions')
@UseGuards(AuthGuard)
export class SessionsController {
  constructor(private svc: SessionsService) {}

  @Get('active')
  active(@Req() req: any) {
    return this.svc.active(req.user.id)
  }

  @Post()
  create(@Req() req: any, @Body() body: any) {
    return this.svc.create(req.user.id, body)
  }

  @Patch(':id/status')
  updateStatus(@Req() req: any, @Param('id') id: string, @Body() body: { status: string }) {
    return this.svc.updateStatus(req.user.id, id, body.status)
  }
}
