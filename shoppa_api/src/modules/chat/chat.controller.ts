import { Body, Controller, Get, Post, Query, Req, UseGuards } from '@nestjs/common'
import { ChatService } from './chat.service'
import { AuthGuard } from '../../common/guards/auth.guard'

@Controller('chat')
@UseGuards(AuthGuard)
export class ChatController {
  constructor(private svc: ChatService) {}

  @Get('messages')
  messages(@Req() req: any, @Query('thread') thread: string) {
    return this.svc.getMessages(req.user.id, thread)
  }

  @Post('messages')
  send(@Req() req: any, @Body() body: { thread: string; message: string; quick_reply?: boolean }) {
    return this.svc.sendMessage(req.user.id, body)
  }
}
