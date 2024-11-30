import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Messaging extends Document {
    
  @Prop({ required: true })
  firstname: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true})
  content: string;

}


export const MessagingSchema = SchemaFactory.createForClass(Messaging);