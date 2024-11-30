import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: any): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(name: string): Promise<User> {
    return this.userModel.findOne({ name }).exec();
  }

  async update(name: string, updateUserDto: any): Promise<User> {
    return this.userModel.findOneAndUpdate({ name }, updateUserDto, { new: true }).exec();
  }

  async delete(name: string): Promise<User> {
    return this.userModel.findOneAndDelete({ name }).exec();
  }

}