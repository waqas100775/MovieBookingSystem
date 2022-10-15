import { Module } from '@nestjs/common';
import { SeatService } from './service/seat.service';
import { SeatController } from './controller/seat.controller';

@Module({
  providers: [SeatService],
  controllers: [SeatController],
})
export class SeatModule {}
