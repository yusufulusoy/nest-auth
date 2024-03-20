import { ArgsType, Field } from '@nestjs/graphql';
import { GraphQLJWT } from 'graphql-scalars';

@ArgsType()
export class RefreshTokenInput {
  @Field(() => GraphQLJWT)
  token: string;
}
