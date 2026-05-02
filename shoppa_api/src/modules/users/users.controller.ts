import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common'
import { UsersService } from './users.service'
import { AuthGuard } from '../../common/guards/auth.guard'

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private users: UsersService) {}

  @Get('me')
  async me(@Req() req: any) {
    return this.users.getProfile(req.user.id)
  }

  @Patch('me')
  async update(@Req() req: any, @Body() body: any) {
    return this.users.upsertProfile({ id: req.user.id, ...body })
  }
}
