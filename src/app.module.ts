import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@/core/config/config.module';
import { DatabaseModule } from '@/core/database/database.module';
import { GraphqlModule } from '@/core/graphql/graphql.module';
import { RedisModule } from '@/core/redis/redis.module';
import { UsersModule } from '@/users/users.module';
import { AuthModule } from '@/auth/auth.module';
import { AuthGuard } from '@/auth/auth.guard';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    RedisModule,
    GraphqlModule,
    AuthModule,
    UsersModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    }
  ],
})
export class AppModule {}
