import { GraphQLVoid } from 'graphql-scalars';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Public } from './decorators/public.decorator';
import { ActiveAuth } from './decorators/active-auth.decorator';
import { AuthToken } from './entities/auth.entity';
import { SignUpInput } from './dto/signup.input';
import { SignInInput } from './dto/signin.input';
import { AuthService } from './auth.service';
import { RefreshTokenInput } from './dto/refresh-token.input';
import { AuthPayload } from './interfaces/payload.interface';

@Resolver(() => AuthToken)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Mutation(() => AuthToken)
  async signUp(@Args('data') data: SignUpInput): Promise<AuthToken> {
    return this.authService.signUp(data);
  }

  @Public()
  @Mutation(() => AuthToken)
  async signIn(@Args('data') data: SignInInput): Promise<AuthToken> {
    return this.authService.signIn(data);
  }

  @Mutation(() => GraphQLVoid, { nullable: true })
  async signOut(@ActiveAuth() payload: Partial<AuthPayload>): Promise<void> {
    await this.authService.signOut(payload);
  }

  // @todo: args not working
  @Public()
  @Mutation(() => AuthToken)
  async refreshTokens(@Args() data: RefreshTokenInput): Promise<AuthToken> {
    console.log('rs token', data);
    return this.authService.refreshAuthTokens(data.token);
  }
}
