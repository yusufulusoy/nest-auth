import { registerAs } from '@nestjs/config';

export default registerAs('graphql', () => ({
  path: process.env.GRAPHQL_PATH || '/graphql',
  playground: process.env.GRAPHQL_PLAYGROUND || true,
  playgroundType: process.env.GRAPHQL_PLAYGROUND_TYPE || 'basic',
  autoSchemaFile: process.env.GRAPHQL_AUTO_SCHEMA_FILE || true,
  sortSchema: process.env.GRAPHQL_SORT_SCHEMA || true,
}));
