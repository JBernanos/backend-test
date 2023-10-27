import { IsString, IsNotEmpty } from "../services/validation/validation";

export class userInputDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  document: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  favorite_color: string;

  @IsString()
  @IsNotEmpty()
  comments: string;
}

class Data {
  message: string;
}
export class userOutputDto {
  status: number;

  data: Data;
}
