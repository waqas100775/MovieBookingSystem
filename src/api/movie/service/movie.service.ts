import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from '../entities/movie.entity';
import { MovieInterface } from '../interface/movie';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly repo: Repository<Movie>,
  ) {}
  async listAllMovie() {
    try {
      return 'Getting All Movie';
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async addMovie(movieObj: MovieInterface) {
    try {
      return await this.repo.save(movieObj);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getMovie(id: number) {
    try {
      return await this.repo.findOne({ where: { id } });
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
