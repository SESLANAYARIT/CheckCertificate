/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  ValidationOptions,
  registerDecorator,
  ValidationArguments,
} from 'class-validator';

export function IsForbidden(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isForbidden',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          return value === undefined;
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} is not allowed to be updated`;
        },
      },
    });
  };
}
///@IsForbidden
