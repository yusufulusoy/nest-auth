import { Module } from '@nestjs/common';
import { ConfigModule } from '@/core/config/config.module';
import { DatabaseModule } from '@/core/database/database.module';
import { GraphqlModule } from '@/core/graphql/graphql.module';
import { RedisModule } from '@/core/redis/redis.module';

@Module({
  imports: [ConfigModule, DatabaseModule, RedisModule, GraphqlModule],
})
export class AppModule {}
