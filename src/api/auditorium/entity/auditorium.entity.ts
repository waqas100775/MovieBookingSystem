import { Movie } from 'src/api/movie/entities/movie.entity';
import { Seat } from './../../seat/entity/seat.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Auditorium {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  name: string;

  @Column({
    nullable: false,
    default: '',
  })
  description: string;

  @Column({
    nullable: false,
    default: '',
  })
  start_at: string;

  @Column({
    nullable: false,
    default: '',
  })
  end_at: string;

  @Column({
    nullable: false,
    default: '',
  })
  date: string;

  @Column({
    nullable: false,
    type: 'integer',
  })
  rows: number;

  @Column({
    nullable: false,
    type: 'integer',
  })
  columns: number;

  @Column({
    nullable: false,
    default: '',
  })
  reserved_seats: string;

  @OneToMany(() => Seat, (Seat) => Seat.auditorium, {
    cascade: true,
  })
  seats: Seat;

  @ManyToOne(() => Movie, (Movie) => Movie.auditoriums)
  movie: Movie;
}
