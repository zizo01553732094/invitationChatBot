import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InvitationsController } from './invitations.controller';
import { InvitationsService } from './invitations.service';
import { InvitationsRepository } from './invitations.repository';
import { InvitationSchema } from './invitations.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Invitation', schema: InvitationSchema }]),
  ],
  controllers: [InvitationsController],
  providers: [InvitationsService, InvitationsRepository],
})
export class InvitationsModule {}