import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { plainToInstance } from 'class-transformer';
import { ResponseGetDto } from './dto/responseget.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.coursesService.findOne(id);
    return plainToInstance(ResponseGetDto, result,{
      excludeExtraneousValues: true
    })
  }
}
