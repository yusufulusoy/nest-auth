import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import databaseConfig from '../database/database.config';
import redisConfig from '../redis/redis.config';
import { validate } from './config.validation';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.development'],
      load: [databaseConfig, redisConfig],
      validate,
    }),
  ],
})
export class ConfigModule {}
