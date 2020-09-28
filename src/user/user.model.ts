import { ObjectType, Field } from '@nestjs/graphql';
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
} from 'typeorm';

@ObjectType()
@Entity('user')
export class UserModel extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ unique: true })
  username: string;

  @Field()
  @Column()
  password: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column({ nullable: true })
  email?: string;

  @BeforeInsert()
  async setup(): Promise<void> {
    const salts: string = bcrypt.genSaltSync(12);
    this.password = await bcrypt.hash(this.password, salts);
    this.id = uuid();
  }
}
