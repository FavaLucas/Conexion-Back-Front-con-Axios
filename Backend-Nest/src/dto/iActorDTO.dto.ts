import { IsInt, IsOptional, IsString } from "class-validator";

export class iActorDTO {
  @IsInt()
  @IsOptional()
  actorId?: number;
  @IsString()
  @IsOptional()
  nombreCompleto?: string;
} 

