import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config, { ConfigurationEnum } from './common/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      envFilePath: `${process.env.NODE_ENV}.env`,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  public static PORT: number;
  public static HOST: string;
  public static PROTOCOL: string;

  constructor(private readonly _config: ConfigService) {
    AppModule.PORT = this._config.get<number>(ConfigurationEnum.API_PORT);
    AppModule.HOST = this._config.get<string>(ConfigurationEnum.API_HOST);
    AppModule.PROTOCOL = this._config.get<string>(
      ConfigurationEnum.API_PROTOCOL,
    );
  }
}
