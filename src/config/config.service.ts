import * as dotenv from 'dotenv';
import * as Joi from 'joi';
import { Injectable } from '@nestjs/common';
import { ConfigInterface } from './interface/config.interface';
import { ConsoleService } from '../utils/console/console.service';
const consoleService = new ConsoleService();

@Injectable()
export class ConfigService {
  private readonly envConfig: ConfigInterface;
  constructor() {
    dotenv.config({ path: `env/.env.${process.env.NODE_ENV}` });
    const config: { [name: string]: string } = process.env;
    const parsedConfig = JSON.parse(JSON.stringify(config));
    this.envConfig = this.validateInput(parsedConfig);
  }

  private validateInput = (envConfig): ConfigInterface => {
    const envVarSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string()
        .required()
        .valid(
          'development',
          'production',
          'staging',
          'provision',
          'inspection',
        )
        .default('development'),
      NODE_PORT: Joi.number().required(),
      PG_PORT: Joi.string().required(),
      PG_TYPE: Joi.string().required(),
      PG_HOST: Joi.string().required(),
      PG_USERNAME: Joi.string().required(),
      PG_PASSWORD: Joi.string().required(),
      PG_DATABASE: Joi.string().required(),
    });

    const { error, value: validatedEnvConfig } = envVarSchema.validate(
      envConfig,
      {
        abortEarly: false,
        allowUnknown: true,
      },
    );
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    consoleService.print('Joi Schema Verified in config.service.ts');
    return validatedEnvConfig;
  };

  get NODE_ENV(): string {
    return this.envConfig.NODE_ENV;
  }

  get NODE_PORT(): string {
    return this.envConfig.NODE_PORT;
  }

  get PG_PORT(): string {
    return this.envConfig.PG_PORT;
  }

  get PG_TYPE(): string {
    return this.envConfig.PG_TYPE;
  }

  get PG_HOST(): string {
    return this.envConfig.PG_HOST;
  }

  get PG_USERNAME(): string {
    return this.envConfig.PG_USERNAME;
  }

  get PG_PASSWORD(): string {
    return this.envConfig.PG_PASSWORD;
  }

  get PG_DATABASE(): string {
    return this.envConfig.PG_DATABASE;
  }
}
