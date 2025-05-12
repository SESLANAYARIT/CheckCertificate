import { Module } from '@nestjs/common';
import { NextCoursesService } from './next-courses.service';
import { NextCoursesController } from './next-courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NextCourse } from './entities/next-course.entity';

@Module({
  controllers: [NextCoursesController],
  providers: [NextCoursesService],
  imports: [TypeOrmModule.forFeature([NextCourse])],
})
export class NextCoursesModule {}
