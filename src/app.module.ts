import { SeatModule } from './api/seat/seat.module';
import { DatabaseModule } from './database/database.module';
import { MovieModule } from './api/movie/movie.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuditoriumController } from './api/auditorium/controller/auditorium.controller';
import { AuditoriumService } from './api/auditorium/service/auditorium.service';
import { AuditoriumModule } from './api/auditorium/auditorium.module';

@Module({
  imports: [MovieModule, DatabaseModule, AuditoriumModule, SeatModule],
  controllers: [AppController, AuditoriumController],
  providers: [AppService, AuditoriumService],
  exports: [DatabaseModule],
})
export class AppModule {}
