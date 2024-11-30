import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Messaging } from './schema/messaging.schema';

@Injectable()
export class MessagingService {
  constructor(@InjectModel(Messaging.name) private messagingModel: Model<Messaging>) {}

  async create(createMessagingDto: any): Promise<Messaging> {
    const createdMessaging = new this.messagingModel(createMessagingDto);
    return createdMessaging.save();
  }
   
  async findAll(): Promise<Messaging[]> {
    return this.messagingModel.find().exec();
  }


}

