import { IsString, IsNotEmpty } from "../services/validation/validation";

export class colorInputDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

class Data {
  message: string;
}
export class colorOutputDto {
  status: number;

  data: Data;
}
