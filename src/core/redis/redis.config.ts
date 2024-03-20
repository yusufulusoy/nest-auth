import { registerAs } from '@nestjs/config';

export default registerAs('redis', () => ({
  keyPrefix: process.env.REDIS_KEY_PREFIX + ':',
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT, 10) || 6379,
  db: parseInt(process.env.REDIS_DB, 10) || 0,
  ...(process.env.REDIS_USERNAME && { username: process.env.REDIS_USERNAME }),
  ...(process.env.REDIS_PASSWORD && { password: process.env.REDIS_PASSWORD }),
}));
