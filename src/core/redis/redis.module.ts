import { Global, Module, OnApplicationShutdown } from '@nestjs/common';
import { Redis } from 'ioredis';
import { ConfigService } from '@nestjs/config';
import { ModuleRef } from '@nestjs/core';
import { IORedisKey } from './redis.constants';
import { RedisService } from './redis.service';

@Global()
@Module({
  providers: [
    {
      provide: IORedisKey,
      useFactory: async (configService: ConfigService) => {
        return new Redis(configService.get('redis'));
      },
      inject: [ConfigService],
    },
    RedisService,
  ],
  exports: [RedisService],
})
export class RedisModule implements OnApplicationShutdown {
  constructor(private readonly moduleRef: ModuleRef) {}

  async onApplicationShutdown(signal?: string): Promise<void> {
    return new Promise<void>((resolve) => {
      const redis = this.moduleRef.get<Redis>(IORedisKey);
      redis.quit();
      redis.on('end', () => {
        resolve();
      });
    });
  }
}
