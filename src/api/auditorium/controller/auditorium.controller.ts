import { AuditoriumService } from './../service/auditorium.service';
import { ResponseService } from './../../../utils/response/response.service';
import { Body, Controller, Get, Post, Query, Req, Res } from '@nestjs/common';
import { Public } from 'src/utils/decorators/public.decorator';
import { Response } from 'express';

@Controller('auditorium')
export class AuditoriumController {
  constructor(
    private readonly responseService: ResponseService,
    private readonly auditoriumService: AuditoriumService,
  ) {}

  @Public()
  @Post('add_auditorium')
  async createAuditorium(
    @Body() body: any,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      return this.responseService.successResponse(
        true,
        await this.auditoriumService.addAuditorium(body),
        res,
      );
    } catch (error) {
      return this.responseService.serverFailureResponse(error.message, res);
    }
  }

  @Public()
  @Get('list_auditorium_by_id')
  async getAuditoriumByID(@Query() query: any, @Res() res: Response) {
    try {
      console.log('query: ', query);

      return this.responseService.successResponse(
        true,
        await this.auditoriumService.getAuditorium(query.id),
        res,
      );
    } catch (error) {
      return this.responseService.serverFailureResponse(error.message, res);
    }
  }
}
