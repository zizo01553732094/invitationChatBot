// invitations/invitations.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Invitation } from './invitations.schema';

@Injectable()
export class InvitationsRepository {
  constructor(
    @InjectModel('Invitation') private readonly invitationModel: Model<Invitation>,
  ) {}

  async create(invitation: Invitation): Promise<Invitation> {
    const createdInvitation = new this.invitationModel(invitation);
    return createdInvitation.save();
  }

  async findByToken(token: string): Promise<Invitation | null> {
    return this.invitationModel.findOne({ token }).exec();
  }
}