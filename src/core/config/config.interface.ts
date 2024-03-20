import { Environment } from './config.enum';

export interface IEnvironmentVariables {
  /**
   * The environment the application is running in (e.g. development, production, test, provision)
   * @default development
   */
  NODE_ENV: Environment;
  /**
   * The port the application will listen on (e.g. 3000)
   * @default 3000
   */
  PORT: number;
}
