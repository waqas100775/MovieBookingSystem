import { Global, Module } from '@nestjs/common';
import PostgressDataBaseProvider from './provider/postgress.provider';

@Global()
@Module({
  imports: [PostgressDataBaseProvider],
  exports: [PostgressDataBaseProvider],
})
export class DatabaseModule {}
