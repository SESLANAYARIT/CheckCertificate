import { Exclude, Expose, Type } from 'class-transformer';

@Exclude()
class CourseResponse {
  @Expose()
  title: string;

  @Expose()
  tipo: string;

  @Expose()
  date: Date;

  @Expose()
  lugar: string;

  @Expose()
  duracion: number;
}
@Exclude()
export class ResponseGetDto {
  @Expose()
  name: string;

  @Expose()
  folio: string;

  @Expose()
  @Type(() => CourseResponse) // Esto es clave para transformar objetos anidados
  course: CourseResponse;
}
