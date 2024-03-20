import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import appConfig from '../app.config';
import databaseConfig from '../database/database.config';
import redisConfig from '../redis/redis.config';
import { validate } from './config.validation';
import graphqlConfig from '../graphql/graphql.config';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.development'],
      load: [appConfig, databaseConfig, redisConfig, graphqlConfig],
      validate,
    }),
  ],
})
export class ConfigModule {}
 