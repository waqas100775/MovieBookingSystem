import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovieRepo } from './entities/movie.entity';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieRepo)
    private readonly movieRepository: Repository<MovieRepo>,
  ) {}
  async listAllMovie() {
    try {
      return 'Getting All Movie';
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async addSlots() {
    try {
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
