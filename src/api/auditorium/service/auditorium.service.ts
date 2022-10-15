import { MovieService } from './../../movie/service/movie.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auditorium } from '../entity/auditorium.entity';

@Injectable()
export class AuditoriumService {
  constructor(
    @InjectRepository(Auditorium) private readonly repo: Repository<Auditorium>,
    private readonly movieService: MovieService,
  ) {}

  async addAuditorium(body) {
    try {
      const seats = [];
      const movie = await this.movieService.getMovie(body.movie_id);

      const getName = (row, col) => {
        return String.fromCharCode(65 + row).toUpperCase() + col.toString();
      };

      for (let i = 0; i < body.rows; i++) {
        for (let j = 0; j < body.columns; j++) {
          seats.push({
            name: getName(i, j),
            description: 'qwerty',
          });
        }
      }
      return await this.repo.save({ ...body, movie, seats });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getAuditorium(id: number) {
    try {
      return await this.repo.findOne({
        where: { id },
        relations: ['movie', 'seats'],
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
