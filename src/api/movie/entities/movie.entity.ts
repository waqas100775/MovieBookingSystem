import { Auditorium } from 'src/api/auditorium/entity/auditorium.entity';
import {
  Column,
  Entity,
  Index,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn({})
  @Index()
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

  @Column({
    nullable: false,
    default: '',
  })
  image: string;

  @Column({
    nullable: false,
    default: '',
  })
  date: string;

  @OneToMany(() => Auditorium, (Auditorium) => Auditorium.movie)
  auditoriums: Auditorium[];
}
