import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/user.module';
import { MessagingModule } from './messaging/messaging.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestjs2'),
    UserModule,MessagingModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
