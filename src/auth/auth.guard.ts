import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard {
  private readonly accessTokenSecret: string;

  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly authService: AuthService,
    private reflector: Reflector,
  ) {
    this.accessTokenSecret = this.configService.get<string>(
      'auth.jwt.access.secret',
    );
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers['authorization']?.split(' ') || [];
    return type === 'Bearer' ? token : undefined;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>('isPublic', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) return true;

    const { req } = GqlExecutionContext.create(context).getContext();
    const token = this.extractTokenFromHeader(req);

    if (!token) throw new UnauthorizedException();

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: this.accessTokenSecret,
      });

      const isValidAuth = await this.authService.validateAuth(payload);

      if (!isValidAuth) throw new UnauthorizedException('INVALID_AUTH');

      req.auth = payload;
    } catch (error) {
      throw new UnauthorizedException(error);
    }

    return true;
  }
}
