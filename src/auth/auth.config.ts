import { registerAs } from '@nestjs/config';
import { TokenConfig, TokenType } from './interfaces/token.interface';

export default registerAs('auth', () => ({
  jwt: {
    issuer: process.env.JWT_ISSUER,
    audience: process.env.JWT_AUDIENCE,
    ...Object.keys(TokenType).reduce((acc, key) => {
      acc[TokenType[key]] = {
        secret: process.env[`JWT_${key.toUpperCase()}_TOKEN_SECRET`],
        expiration: process.env[`JWT_${key.toUpperCase()}_TOKEN_EXPIRATION`],
        notBefore: process.env[`JWT_${key.toUpperCase()}_TOKEN_NOT_BEFORE`],
      };
      return acc;
    }, {} as TokenConfig),
  },
}));
