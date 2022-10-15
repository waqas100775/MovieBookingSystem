import { DatabaseModule } from './database/database.module';
import { MovieModule } from './api/movie/movie.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MovieModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [DatabaseModule],
})
export class AppModule {}
