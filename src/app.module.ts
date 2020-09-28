import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import * as path from 'path';

import { UserModule } from './user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 4444,
      username: 'postgres',
      password: 'thepassword',
      database: 'thenotebookdev',
      synchronize: true,
      logging: false,
      entities: [
        path.join(__dirname, '../dist/**/**.model{.ts,.js}'),
        path.join(__dirname, './**/**.model{.ts,.js}'),
      ],
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
