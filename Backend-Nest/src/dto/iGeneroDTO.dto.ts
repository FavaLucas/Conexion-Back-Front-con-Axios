import { IsInt, IsString } from "class-validator";

export class iGeneroDTO {
  @IsInt()
  generoId?: number;
  @IsString()
  nombreGenero?: string;
} 