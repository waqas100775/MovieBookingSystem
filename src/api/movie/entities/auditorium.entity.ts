import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AuditoriumEntity {
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
    default: '',
  })
  total_seats: string;

  @Column({
    nullable: false,
    default: '',
  })
  reserved_seats: string;
}
