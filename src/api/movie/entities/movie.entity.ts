import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MovieRepo {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'movie_id',
  })
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

  @Column({
    nullable: false,
    default: null,
    foreignKeyConstraintName: 'auditorium_id',
  })
  slots: number;
}
