import { ObjectType, Field } from '@nestjs/graphql';
import { GraphQLJWT } from 'graphql-scalars';
import { AuthTokenType } from '../interfaces/token.interface';

@ObjectType()
export class AuthToken implements AuthTokenType {
  @Field(() => GraphQLJWT)
  access: string;

  @Field(() => GraphQLJWT)
  refresh: string;
}
