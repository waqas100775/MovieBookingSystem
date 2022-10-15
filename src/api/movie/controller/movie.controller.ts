import { ResponseService } from '../../../utils/response/response.service';
import { Body, Controller, Get, Post, Query, Req, Res } from '@nestjs/common';
import { MovieService } from '../service/movie.service';
import { Public } from 'src/utils/decorators/public.decorator';
import { Response } from 'express';

@Controller('movie')
export class MovieController {
  constructor(
    private readonly movieService: MovieService,
    private readonly responseService: ResponseService,
  ) {}

  @Get('list_movies')
  async listMovies() {
    try {
      return await this.movieService.listAllMovie();
    } catch (error) {
      throw new Error(error);
    }
  }

  @Public()
  @Get('list_movie_by_id')
  async getMovieByID(@Query() query: any, @Res() res: Response) {
    try {
      console.log('query: ', query);

      return this.responseService.successResponse(
        true,
        await this.movieService.getMovie(query.id),
        res,
      );
    } catch (error) {
      return this.responseService.serverFailureResponse(error.message, res);
    }
  }

  @Public()
  @Post('add_movie')
  async createAuditorium(
    @Body() body: any,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      return this.responseService.successResponse(
        true,
        await this.movieService.addMovie(body),
        res,
      );
    } catch (error) {
      return this.responseService.serverFailureResponse(error.message, res);
    }
  }
}
