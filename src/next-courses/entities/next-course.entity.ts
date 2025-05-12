import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class NextCourse {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 255, nullable: false })
  title: string;

  @Column('date', { nullable: false })
  date: Date;

  @Column('time', { nullable: false })
  time: string;

  @Column('varchar', { length: 255, nullable: false })
  lugar: string;
}
