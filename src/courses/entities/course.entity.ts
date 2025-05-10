import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from './student.entity';

@Entity()
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  title: string;

  @Column({ type: 'varchar', length: 255 })
  tipo: string;

  @Column({ type: 'date', nullable: false })
  date: Date;

  @Column({ type: 'varchar', length: 255 })
  lugar: string;

  @Column({ type: 'int', nullable: false })
  duracion: number;

  @Column({ type: 'varchar', length: 255 })
  textoApoyo: string;

  @OneToMany(() => Student, (student) => student.course, {
    cascade: true,
  })
  students?: Student[];
}
