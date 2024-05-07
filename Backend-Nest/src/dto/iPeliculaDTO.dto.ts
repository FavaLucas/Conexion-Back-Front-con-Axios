import { IsString, IsInt, IsOptional } from "class-validator";

export class iPeliculaDTO {
  @IsInt()
  @IsOptional()
  peliculaId?:number;
  @IsString()
  @IsOptional()
  titulo?: string;
  @IsString()
  @IsOptional()
  sinopsis?: string;
  @IsString()
  @IsOptional()
  imagen?: string;
  @IsInt()
  @IsOptional()
  duracion?: number;
  @IsString()
  @IsOptional()
  fechaLanzamiento?: string;
} 