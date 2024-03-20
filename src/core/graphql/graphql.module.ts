import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql';
import { ConfigService } from '@nestjs/config';
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';

const advancedPlayground = (configService: ConfigService) => {
  const landingPage =
    configService.get('NODE_ENV') === 'production'
      ? ApolloServerPluginLandingPageProductionDefault()
      : ApolloServerPluginLandingPageLocalDefault();

  return configService.get('graphql.playground') === 'true' &&
    configService.get('graphql.playgroundType') === 'advanced'
    ? [landingPage]
    : [];
};

@Module({
  imports: [
    NestGraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: async (configService: ConfigService) => ({
        path: configService.get('graphql.path'),
        sortSchema: configService.get('graphql.sortSchema') === 'true',
        autoSchemaFile:
          configService.get('graphql.autoSchemaFile') === 'true'
            ? join(process.cwd(), 'src/schema.gql')
            : false,
        playground:
          configService.get('graphql.playground') === 'true' &&
          configService.get('graphql.playgroundType') === 'basic',
        plugins: [...advancedPlayground(configService)],
      }),
      inject: [ConfigService],
    }),
  ],
})
export class GraphqlModule {}
