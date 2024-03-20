import { plainToInstance } from 'class-transformer';
import {
  IsDefined,
  IsEnum,
  IsNumber,
  Max,
  Min,
  validateSync,
} from 'class-validator';
import { Environment } from './config.enum';
import { IEnvironmentVariables } from './config.interface';

class EnvironmentVariables implements Partial<IEnvironmentVariables> {
  @IsEnum(Environment, {
    message: `Environment variable NODE_ENV must be one of the following values [${Object.values(
      Environment,
    ).join(', ')}]`,
  })
  @IsDefined({ message: 'Environment variable NODE_ENV is required' })
  NODE_ENV: Environment;

  @IsNumber(
    { allowInfinity: false },
    { message: 'Environment variable PORT must be a number' },
  )
  @IsDefined({ message: 'Environment variable PORT is required' })
  @Min(0, { message: 'Environment variable PORT must be greater than 0' })
  @Max(65535, { message: 'Environment variable PORT must be less than 65536' })
  PORT: number;
}

export function validate(
  config: Record<string, unknown>,
): EnvironmentVariables {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return validatedConfig;
}
