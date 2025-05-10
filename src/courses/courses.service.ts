import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}
  findOne(id: string) {
    try {
      return this.studentRepository.findOneOrFail({
        where: { id },
        relations: ['course'],
      });
    } catch (error) {
      return new NotFoundException('Reconocimiento no encontrado');
    }

  }
}
