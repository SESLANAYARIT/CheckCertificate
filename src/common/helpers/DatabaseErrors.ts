import {
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { EntityNotFoundError } from 'typeorm';

export const handleDatabaseError = (error: any) => {
  const logger = new Logger('CoursesService');
  // Puedes usar error.errno para identificar errores de MySQL
  if (error instanceof EntityNotFoundError) {
    throw new NotFoundException('Product not found');
  }

  switch (error.errno) {
    case 1062:
      throw new BadRequestException('Duplicate entry: ' + error.message); // Clave duplicada
    case 1452:
      throw new BadRequestException(
        'Cannot add or update child row: a foreign key constraint fails',
      );
    case 1048:
      throw new BadRequestException('Column cannot be null: ' + error.message);
    case 1064:
      throw new InternalServerErrorException('Syntax error in SQL query');
    default:
      logger?.error?.(error);
      throw new InternalServerErrorException('Unexpected database error');
  }
};
