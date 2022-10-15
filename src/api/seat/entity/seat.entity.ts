import { Auditorium } from './../../movie/interface/auditorium';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditoriumEntity } from 'src/api/auditorium/entity/auditorium.entity';

@Entity()
export class SeatEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'auditorium_id',
  })
  auditorium_id: number;

  @Column({
    nullable: false,
    default: '',
  })
  name: string;

  @Column({
    name: 'description',
    nullable: false,
    default: '',
  })
  description: string;

  @Column({
    nullable: false,
    default: '',
  })
  start_at: string;

  @ManyToOne(
    () => AuditoriumEntity,
    (AuditoriumEntity) => AuditoriumEntity.seats,
  )
  auditorium: AuditoriumEntity;
}
