import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, Length } from 'class-validator';

@InputType()
export class SignInInput {
  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => String)
  @Length(8, 20)
  password: string;
}
