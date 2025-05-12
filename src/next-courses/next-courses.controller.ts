import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { NextCoursesService } from './next-courses.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';
@Controller('next-courses')
export class NextCoursesController {
  constructor(private readonly nextCoursesService: NextCoursesService) {}

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.nextCoursesService.findAll(paginationDto);
  }

}
