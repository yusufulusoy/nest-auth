export interface AuthPayload {
  /**
   * Issuer
   * @description The issuer of the token (who issued the token)
   * @example 'https://www.example.com' or 'https://www.example.com/api'
   * @see https://tools.ietf.org/html/rfc7519#section-4.1.1
   */
  iss: string;

  /**
   * Audience
   * @description The audience of the token (who the token is intended for)
   * @example 'https://www.example.com' or 'https://www.example.com/api'
   * @see https://tools.ietf.org/html/rfc7519#section-4.1.3
   */
  aud: string;

  /**
   * Subject
   * @description The subject of the token (who the token is about)
   * @example '1234567890' or 'f81d4fae-7dec-11d0-a765-00a0c91e6bf6'
   * @see https://tools.ietf.org/html/rfc7519#section-4.1.2
   * @see https://tools.ietf.org/html/rfc4122
   * @see https://www.iana.org/assignments/uuid-urn-namespaces/uuid-urn-namespaces.xhtml
   * @see https://www.iana.org/assignments/jose/jose.xhtml#webfinger
   */
  sub: string;

  /**
   * Issued At
   * @description The time the token was issued
   * @example 1617220000
   * @see https://tools.ietf.org/html/rfc7519#section-4.1.6
   */
  iat: number;

  /**
   * Not Before
   * @description The time before which the token must not be accepted for processing
   * @example 1617220000
   * @see https://tools.ietf.org/html/rfc7519#section-4.1.5
   */
  nbf: number;

  /**
   * Expiration Time
   * @description The time the token expires
   * @example 1617220000
   * @see https://tools.ietf.org/html/rfc7519#section-4.1.4
   */
  exp: number;

  /**
   * JWT ID
   * @description A unique identifier for the token
   * @example '1234567890' or 'f81d4fae-7dec-11d0-a765-00a0c91e6bf6'
   * @see https://tools.ietf.org/html/rfc7519#section-4.1.7
   * @see https://tools.ietf.org/html/rfc4122
   * @see https://www.iana.org/assignments/uuid-urn-namespaces/uuid-urn-namespaces.xhtml
   * @see https://www.iana.org/assignments/jose/jose.xhtml#webfinger
   */
  jti: string;

  /**
   * Token Type
   * @description The type of token
   * @example 'Bearer'
   * @see https://tools.ietf.org/html/rfc6750
   * @see https://tools.ietf.org/html/rfc6749#section-5.1
   * @see https://tools.ietf.org/html/rfc6749#section-4.4
   */
  typ?: string;

  /**
   * Token Use
   * @description The token use
   * @example 'access_token' or 'refresh_token'
   * @see https://tools.ietf.org/html/rfc6749#section-1.4
   */
  use?: string;

  /**
   * Token Scope
   * @description The token scope
   * @example 'read' or 'write'
   * @see https://tools.ietf.org/html/rfc6749#section-3.3
   */
  scope?: string;
}
