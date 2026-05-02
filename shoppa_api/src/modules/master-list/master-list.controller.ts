import { Body, Controller, Get, Patch, Query, Req, UseGuards } from '@nestjs/common'
import { MasterListService } from './master-list.service'
import { AuthGuard } from '../../common/guards/auth.guard'

@Controller('master-list')
@UseGuards(AuthGuard)
export class MasterListController {
  constructor(private svc: MasterListService) {}

  @Get()
  async get(@Req() req: any, @Query('groupBy') groupBy: 'category' | 'store' = 'category') {
    return this.svc.getCombinedList(req.user.id, groupBy)
  }

  @Patch('item')
  async updateItemStatus(
    @Req() req: any,
    @Body() body: { item_id: string; action: 'bought' | 'unavailable' | 'substitute'; substitute_item_id?: string },
  ) {
    return this.svc.updateItemStatus(req.user.id, body)
  }
}
