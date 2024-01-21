
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { v4 as uuidv4} from 'uuid';
import { InvitationsRepository } from './invitations.repository';
import { Invitation } from './invitations.schema';



@Injectable()
export class InvitationsService {
  constructor(private readonly invitationsRepository: InvitationsRepository) {}

  async generateToken(): Promise<string> {
    return uuidv4();
  }

  async sendInvitationEmail(email: string, token: string): Promise<void> {
    
  }

  async createInvitation(senderId: string, email: string, groupId: string): Promise<Invitation> {
    const token = await this.generateToken();

    const Invitation: Invitation  = {

      email,
      token, 
      senderId,
      groupId,
    };

    const createdInvitation = await this.invitationsRepository.create(invitation);

    await this.sendInvitationEmail(email, token);

    return createdInvitation;
  }

  async getInvitationByToken(token: string): Promise<Invitation | null> {
    return this.invitationsRepository.findByToken(token);
  }
}