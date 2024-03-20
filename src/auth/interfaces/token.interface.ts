export enum TokenType {
  ACCESS = 'access',
  REFRESH = 'refresh',
}

export interface TokenConfig {
  secret: string;
  expiresIn: string;
}

export interface AuthTokenType extends Record<TokenType, string> {}
