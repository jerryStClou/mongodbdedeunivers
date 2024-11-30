import { Controller, Post, Body, Get,Put,Delete,Param  } from '@nestjs/common';
import { MessagingService } from './messaging.service';


@Controller('api/messaging')
export class MessagingController {
    constructor(private readonly messagingService: MessagingService) {}

    @Post('add')
    async create(@Body() createMessagingDto: any) {
      return this.messagingService.create(createMessagingDto);
    } 
  
    @Get("all")
    async findAll() {
      return this.messagingService.findAll();
    }

    
}
