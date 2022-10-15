import { AuditoriumController } from './controller/auditorium.controller';
import { DatabaseModule } from './../../database/database.module';
import { Module } from '@nestjs/common';
import { AuditoriumService } from './service/auditorium.service';
import { Auditorium } from './entity/auditorium.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponseService } from 'src/utils/response/response.service';
import { MovieModule } from '../movie/movie.module';

@Module({
  imports: [
    DatabaseModule,
    MovieModule,
    TypeOrmModule.forFeature([Auditorium]),
  ],
  controllers: [AuditoriumController],
  providers: [AuditoriumService, ResponseService],
  exports: [AuditoriumService],
})
export class AuditoriumModule {}
