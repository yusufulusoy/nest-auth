import ms from 'ms';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { RedisService } from '@/core/redis/redis.service';
import { UsersService } from '@/users/users.service';
import { AuthTokenType, TokenConfig, TokenType } from './interfaces/token.interface';
import { AuthPayload } from './interfaces/payload.interface';
import { SignUpInput } from './dto/signup.input';
import { randomUUID } from 'crypto';
import { SignInInput } from './dto/signin.input';

@Injectable()
export class AuthService {
  private readonly redisPrefix: string = 'jwt';
  private readonly tokens: Record<TokenType, TokenConfig>;

  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly redisService: RedisService,
  ) {
    this.tokens = {
      [TokenType.ACCESS]: this.getTokenConfig(TokenType.ACCESS),
      [TokenType.REFRESH]: this.getTokenConfig(TokenType.REFRESH),
    };
  }

  private getTokenConfig(tokenType: TokenType): TokenConfig {
    return {
      secret: this.configService.get<string>(`auth.jwt.${tokenType}.secret`),
      expiresIn: this.configService.get<string>(`auth.jwt.${tokenType}.expiration`),
    };
  }

  private getExpirationAsSeconds(tokenType: TokenType): number {
    return ms(this.tokens[tokenType].expiresIn) / 1000;
  }

  private async storeToken(
    tokenType: TokenType,
    payload: Partial<AuthPayload>,
  ): Promise<void> {
    const key = `${this.redisPrefix}:${tokenType}:${payload.jti}`;
    const value = JSON.stringify(payload);
    const expiration = this.getExpirationAsSeconds(tokenType);

    await this.redisService.set(key, value, expiration);
  }

  private async removeToken(
    tokenType: TokenType,
    jti: AuthPayload['jti'],
  ): Promise<void> {
    const key = `${this.redisPrefix}:${tokenType}:${jti}`;

    await this.redisService.del(key);
  }

  private async verifyToken(
    tokenType: TokenType,
    jti: AuthPayload['jti'],
  ): Promise<AuthPayload> {
    const key = `${this.redisPrefix}:${tokenType}:${jti}`;
    const value = await this.redisService.get(key);

    if (!value) {
      throw new Error('Token not found');
    }

    return JSON.parse(value);
  }

  private async generateToken(
    tokenType: TokenType,
    payload: Partial<AuthPayload>,
  ): Promise<string> {
    payload.use = tokenType;

    await this.storeToken(tokenType, payload);
    return this.jwtService.signAsync(payload, this.tokens[tokenType]);
  }

  private async generateAuthTokens(
    payload: Partial<AuthPayload>,
  ): Promise<AuthTokenType> {
    payload.jti = randomUUID();

    const access = await this.generateToken(TokenType.ACCESS, payload);
    const refresh = await this.generateToken(TokenType.REFRESH, payload);

    return { access, refresh };
  }

  async refreshAuthTokens(token: AuthTokenType['refresh']): Promise<AuthTokenType> {
    const payload = await this.jwtService.verifyAsync<AuthPayload>(token);
    const isValidToken = await this.verifyToken(TokenType.REFRESH, payload.jti);

    await this.removeToken(TokenType.ACCESS, isValidToken.jti);
    await this.removeToken(TokenType.REFRESH, isValidToken.jti);

    return this.generateAuthTokens(payload);
  }

  async validateAuth(payload: Partial<AuthPayload>): Promise<boolean> {
    const isValidUser = await this.userService.findOneById(payload.sub);
    const areValidTokens = await Promise.all(
      Object.keys(TokenType).map((key) => {
        return this.verifyToken(TokenType[key], payload.jti);
      }),
    );

    return isValidUser && areValidTokens.every(Boolean);
  }

  async signUp(data: SignUpInput): Promise<AuthTokenType> {
    const user = await this.userService.create(data);
    return await this.generateAuthTokens({ sub: user.id });
  }

  async signIn(data: SignInInput): Promise<AuthTokenType> {
    const user = await this.userService.findOneByEmail(data.email);

    if (!user) {
      throw new Error('INVALID_CREDENTIALS');
    }

    const isValidPassword = await this.userService.comparePassword(
      data.password,
      user.password,
    );

    if (!isValidPassword) {
      throw new Error('INVALID_CREDENTIALS');
    }

    return await this.generateAuthTokens({ sub: user.id });
  }

  async signOut(payload: Partial<AuthPayload>): Promise<void> {
    await Promise.all(
      Object.keys(TokenType).map((key) => {
        return this.removeToken(TokenType[key], payload.jti);
      }),
    );
  }
}
