import { DatabaseModule } from './../../database/database.module';
import { Module } from '@nestjs/common';
import { SeatService } from './service/seat.service';
import { SeatController } from './controller/seat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seat } from './entity/seat.entity';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Seat])],
  providers: [SeatService],
  controllers: [SeatController],
})
export class SeatModule {}
