import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './user.model';

@Module({
  imports: [TypeOrmModule.forFeature([UserModel])],
  providers: [UserService],
})
export class UserModule {}
