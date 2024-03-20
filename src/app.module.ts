import { Module } from '@nestjs/common';
import { ConfigModule } from '@/core/config/config.module';
import { DatabaseModule } from '@/core/database/database.module';
import { RedisModule } from '@/core/redis/redis.module';

@Module({
  imports: [ConfigModule, DatabaseModule, RedisModule],
})
export class AppModule {}
