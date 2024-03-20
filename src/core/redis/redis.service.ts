import { Inject, Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';
import { IORedisKey } from './redis.constants';

@Injectable()
export class RedisService {
  constructor(
    @Inject(IORedisKey)
    private readonly redisClient: Redis,
  ) {}

  async get(key: string): Promise<string> {
    try {
      return await this.redisClient.get(key);
    } catch (error) {
      throw new Error(error);
    }
  }

  async set(
    key: string,
    value: string | number,
    expiredIn?: number,
  ): Promise<void> {
    try {
      await this.redisClient.set(key, value, 'EX', expiredIn);
    } catch (error) {
      throw new Error(error);
    }
  }

  async del(key: string): Promise<void> {
    try {
      await this.redisClient.del(key);
    } catch (error) {
      throw new Error(error);
    }
  }

  async keys(pattern?: string): Promise<string[]> {
    try {
      return await this.redisClient.keys(pattern || '*');
    } catch (error) {
      throw new Error(error);
    }
  }

  async validate(key: string, value: string): Promise<boolean> {
    return value === (await this.get(key));
  }
}
