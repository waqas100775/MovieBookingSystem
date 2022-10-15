import { Seat } from './../entity/seat.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SeatService {
  constructor(
    @InjectRepository(Seat)
    private readonly repo: Repository<Seat>,
  ) {}

  async createAuditoriumSeatGrid(auditoriumId: number) {
    try {
      //   this.seatRepository.save({ auditorium: auditoriumId });
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
