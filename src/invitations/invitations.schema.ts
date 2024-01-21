import * as mongoose from 'mongoose';

export const InvitationSchema = new mongoose.Schema({
  email: { type: String, required: true },
  token: { type: String, required: true },
  groupId: { type: String, required: true },
  senderId: { type: String, required: true },
});

export interface Invitation extends mongoose.Document {
  email: string;
  token: string;
  groupId: string;
  senderId: string;
}