import { applyDecorators } from '@nestjs/common';
import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsNumber,
  Min,
  IsDateString,
  IsArray,
  IsOptional,
  ValidationOptions,
  ValidateNested,
  Matches,
} from 'class-validator';

/**
 * Cadena obligatoria con longitud mínima (por defecto 1)
 */
export function IsRequiredString(minLength = 1, options?: ValidationOptions) {
  return applyDecorators(IsString(options), IsNotEmpty(), MinLength(minLength));
}

/**
 * Cadena opcional con longitud mínima (por defecto 1)
 */
export function IsOptionalString(minLength = 1) {
  return applyDecorators(IsString(), MinLength(minLength), IsOptional());
}

/**
 * Número obligatorio con mínimo valor (por defecto 1)
 */
export function IsRequiredNumber(min = 1) {
  return applyDecorators(IsNumber(), IsNotEmpty(), Min(min));
}

/**
 * Número opcional con mínimo valor (por defecto 1)
 */
export function IsOptionalNumber(min = 1) {
  return applyDecorators(IsNumber(), Min(min), IsOptional());
}

/**
 * Fecha en formato ISO (obligatoria)
 */
export function IsRequiredDateString() {
  return applyDecorators(IsDateString(), IsNotEmpty());
}

/**
 * Arreglo opcional de cadenas
 */
export function IsOptionalStringArray() {
  return applyDecorators(IsArray(), IsString({ each: true }), IsOptional());
}

/**
 * Objeto anidado obligatorio validado
 */
export function IsRequiredNestedObject(typeFn: () => any) {
  return applyDecorators(ValidateNested(), Type(typeFn), IsNotEmpty());
}

/**
 * Objeto anidado opcional validado
 */
export function IsOptionalNestedObject(typeFn: () => any) {
  return applyDecorators(ValidateNested(), Type(typeFn), IsOptional());
}

/**
 * Validador para el formato de hora (HH:mm)
 */
export function IsTime() {
  const timeRegex = /^([01]?[0-9]|2[0-3]):([0-5]?[0-9])$/; // Formato de hora HH:mm
  return Matches(timeRegex, {
    message: 'El formato de hora debe ser HH:mm (ejemplo: 11:00)',
  });
}
