import { IsInt, IsOptional, IsString } from "class-validator";

export class iGeneroDTO {
  @IsInt()
  @IsOptional()
  generoId?: number;
  @IsString()
  @IsOptional()
  nombreGenero?: string;
} 