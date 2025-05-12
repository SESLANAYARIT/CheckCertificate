import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NextCourse } from './entities/next-course.entity';
import { MoreThan, Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { handleDatabaseError } from 'src/common/helpers';

@Injectable()
export class NextCoursesService {
  constructor(
    @InjectRepository(NextCourse)
    private readonly nextCourseRepository: Repository<NextCourse>,
  ) {}

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;
    const today = new Date();
    try {
      return this.nextCourseRepository.find({
        where: {date: MoreThan(today) },
        take: limit,
        skip: offset,
      });
    } catch (error) {
      handleDatabaseError(error);
    }
  }
}
