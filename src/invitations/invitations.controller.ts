import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { InvitationsService } from './invitations.service';
import { Invitation } from './invitations.schema';

@Controller('invitations')
export class InvitationsController {
  constructor(private readonly invitationsService: InvitationsService) {}

  @Post()
  async createInvitation(
    @Body('senderId') senderId: string,
    @Body('email') email: string,
    @Body('groupId') groupId: string,
  ): Promise<{ message: string }> {
    await this.invitationsService.createInvitation(senderId, email, groupId);
    return { message: 'Invitation sent successfully' };
  }

  @Get(':token')
  async getInvitation(@Param('token') token: string): Promise<Invitation | null> {
    return this.invitationsService.getInvitationByToken(token);
  }
}