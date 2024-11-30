import { Controller, Post, Body, Get,Put,Delete,Param  } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('auth')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @Post('register')
  async create(@Body() createUserDto: any) {
    return this.userService.create(createUserDto);
  }

  @Get("all")
  async findAll() {
    return this.userService.findAll();
  }

  @Get(':name')
  async findOne(@Param('name') name: string) {
    return this.userService.findOne(name);
  }

  
  @Put(':name')
  async update(@Param('name') name: string, @Body() updateUserDto: any) {
    return this.userService.update(name, updateUserDto);
  }

  @Delete(':name')
  async delete(@Param('name') name: string) {
    return this.userService.delete(name);
  }
}