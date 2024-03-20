import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { ActiveAuth } from '@/auth/decorators/active-auth.decorator';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UpdateUserInput } from './dto/update-user.input';
import { AuthPayload } from '@/auth/interfaces/payload.interface';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User)
  async getCurrentUser(@ActiveAuth('sub') userId: string): Promise<User> {
    return await this.usersService.findOneById(userId);
  }

  @Mutation(() => User)
  async updateUser(
    @ActiveAuth('sub') userId: string,
    @Args('data') data: UpdateUserInput,
  ): Promise<User> {
    return await this.usersService.update(userId, data);
  }

  @Mutation(() => Boolean)
  async deactivateUser(
    @ActiveAuth() payload: Partial<AuthPayload>,
  ): Promise<boolean> {
    await this.usersService.deactivate(payload);
    return true;
  }

  @Mutation(() => Boolean)
  async deleteUser(
    @ActiveAuth() payload: Partial<AuthPayload>,
  ): Promise<boolean> {
    await this.usersService.softDelete(payload);
    return true;
  }
}
