import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import appConfig from '@/app.config';
import databaseConfig from '@/core/database/database.config';
import redisConfig from '@/core/redis/redis.config';
import graphqlConfig from '@/core/graphql/graphql.config';
import authConfig from '@/auth/auth.config';
import { validate } from './config.validation';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.development'],
      load: [appConfig, databaseConfig, redisConfig, graphqlConfig, authConfig],
      validate,
    }),
  ],
})
export class ConfigModule {}
 