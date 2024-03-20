import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthPayload } from '../interfaces/payload.interface';

export const ActiveAuth = createParamDecorator(
  (field: keyof AuthPayload | undefined, ctx: ExecutionContext) => {
    const request = GqlExecutionContext.create(ctx).getContext().req;
    const auth: AuthPayload | undefined = request.auth;
    return field ? auth?.[field] : auth;
  },
);
