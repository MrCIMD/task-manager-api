import { Module } from '@nestjs/common';
import { mongooseProvider } from './mongoose.provider';

@Module({
  imports: [mongooseProvider],
})
export class DatabaseModule {}
