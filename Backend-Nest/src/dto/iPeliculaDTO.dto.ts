import { IsString, IsInt, IsOptional } from "class-validator";

export class iPeliculaDTO {
  @IsInt()
  @IsOptional()
  peliculaId?:number;
  @IsString()
  titulo?: string;
  @IsString()
  sinopsis?: string;
  @IsString()
  imagen?: string;
  @IsInt()
  duracion?: number;
  @IsString()
  fechaLanzamiento?: string;
} 