import { Controller, Get } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}
  @Get('list_movies')
  async listMovies() {
    try {
      return await this.movieService.listAllMovie();
    } catch (error) {
      throw new Error(error);
    }
  }
}
