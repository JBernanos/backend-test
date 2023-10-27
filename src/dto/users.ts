import { IsString, IsNotEmpty } from "../services/validation/validation";

export class userDto {
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsString()
  @IsNotEmpty()
  document?: string;

  @IsString()
  @IsNotEmpty()
  email?: string;

  @IsString()
  @IsNotEmpty()
  favorite_color?: string;

  @IsString()
  @IsNotEmpty()
  comments?: string;
}
