import { Auditorium } from 'src/api/auditorium/entity/auditorium.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Seat {
  @PrimaryGeneratedColumn({})
  id: number;

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

  @ManyToOne(() => Auditorium, (Auditorium) => Auditorium.seats)
  auditorium: Auditorium;
}
