import { MongooseModule } from '@nestjs/mongoose';
import { DynamicModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModuleFactoryOptions } from '@nestjs/mongoose/dist/interfaces/mongoose-options.interface';
import { ConfigurationEnum, MongoOptions } from '../config';

export const DEFAULT_CONNECTION = 'default';

export const mongooseProvider: DynamicModule = MongooseModule.forRootAsync({
  connectionName: DEFAULT_CONNECTION,
  imports: [ConfigModule],
  inject: [ConfigService],
  async useFactory(config: ConfigService) {
    const mongo = config.get<MongoOptions>(ConfigurationEnum.MONGO);

    return {
      uri: mongo.uri,
    } as MongooseModuleFactoryOptions;
  },
});
