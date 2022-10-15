import { DatabaseModule } from '../../database/database.module';
import { Module } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MovieController } from './controller/movie.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponseService } from 'src/utils/response/response.service';
import { MovieService } from './service/movie.service';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Movie])],
  controllers: [MovieController],
  providers: [MovieService, ResponseService],
  exports: [MovieService],
})
export class MovieModule {}
