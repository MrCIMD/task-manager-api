import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger: Logger = new Logger();

  const host = `${AppModule.PROTOCOL}://${AppModule.HOST}${
    AppModule.HOST === 'localhost' ? `:${AppModule.PORT}` : ''
  }`;

  app.enableCors({
    origin: ['http://localhost:3000/'],
  });

  await app.listen(AppModule.PORT);

  logger.log(`Api host run in ${host}`, 'Task Manager');
}

bootstrap();
