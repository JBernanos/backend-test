import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

export * from "class-validator";

export const validationPipe = async (schema: new () => {}, requestObject: object) => {
  const transformedClass: any = plainToInstance(schema, requestObject);
  const errors = await validate(transformedClass);
  if (errors.length > 0) return errors;
  else return [];
};

export const assemblyErrorArray = (validationErrors: any[]): string[] => {
  const errorArray: string[] = [];
  validationErrors.forEach((error) => {
    const errorKeys = Object.keys(error.constraints);
    errorKeys.forEach((key) => {
      errorArray.push(error.constraints[key]);
    });
  });
  return errorArray;
};
