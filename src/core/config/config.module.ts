import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { validate } from './config.validation';
import databaseConfig from '../database/database.config';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.development'],
      load: [databaseConfig],
      validate,
    }),
  ],
})
export class ConfigModule {}
