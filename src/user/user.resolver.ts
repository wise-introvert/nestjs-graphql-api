import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { UserModel } from './user.model';
import { Inject } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserInput } from './inputs';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(@Inject(UserService) private service: UserService) {}

  @Mutation(() => UserModel)
  async register(@Args() input: RegisterUserInput): Promise<UserModel> {
    return this.service.register(input);
  }
}
