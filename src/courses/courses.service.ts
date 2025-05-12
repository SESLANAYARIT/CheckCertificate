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
  async findOne(id: string) {
    try {
      return await this.studentRepository.findOneOrFail({
        where: { id },
        relations: ['course'],
      });
    } catch (error) {
      throw new NotFoundException('Reconocimiento no encontrado');
    }

  }
}
