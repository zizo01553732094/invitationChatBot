import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Invitation } from './invitations/invitations.schema';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvitationsModule } from './invitations/invitations.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    InvitationsModule, 
 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
