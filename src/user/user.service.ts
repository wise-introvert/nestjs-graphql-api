import { Injectable } from '@nestjs/common';
import { UserModel } from './user.model';
import { RegisterUserInput } from './inputs';

@Injectable()
export class UserService {
  async register(input: RegisterUserInput): Promise<UserModel> {
    const user: UserModel = await UserModel.create(input).save();
    return user;
  }
}
