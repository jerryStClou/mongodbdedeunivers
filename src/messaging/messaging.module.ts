import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Messaging, MessagingSchema } from './schema/messaging.schema';
import { MessagingService } from './messaging.service';
import { MessagingController } from './messaging.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: Messaging.name, schema: MessagingSchema }])],
    providers: [MessagingService],
    controllers: [MessagingController],
  })
  export class MessagingModule {}