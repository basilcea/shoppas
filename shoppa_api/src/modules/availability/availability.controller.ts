import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common'
import { AvailabilityService } from './availability.service'
import { AuthGuard } from '../../common/guards/auth.guard'

@Controller('availability')
@UseGuards(AuthGuard)
export class AvailabilityController {
  constructor(private svc: AvailabilityService) {}

  @Get()
  get(@Req() req: any) {
    return this.svc.get(req.user.id)
  }

  @Patch()
  set(@Req() req: any, @Body() body: { next_start: string; deadline: string; max_clients: number }) {
    return this.svc.set(req.user.id, body)
  }
}
