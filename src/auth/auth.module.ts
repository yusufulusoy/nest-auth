import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UsersModule } from '@/users/users.module';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { AuthGuard } from './auth.guard';

@Global()
@Module({
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        global: true,
        signOptions: {
          issuer: configService.get('auth.jwt.issuer'),
          audience: configService.get('auth.jwt.audience'),
        },
        verifyOptions: {
          issuer: configService.get('auth.jwt.issuer'),
          audience: configService.get('auth.jwt.audience'),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [AuthResolver, AuthService, AuthGuard],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
