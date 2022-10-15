import { DatabaseModule } from './../../database/database.module';
import { Module } from '@nestjs/common';
import { MovieRepo } from './entities/movie.entity';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([MovieRepo])],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
