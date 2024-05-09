import { Body, Controller, Post, Get, UseGuards, Put, Param, Delete, HttpStatus } from "@nestjs/common";
import { iActorDTO } from "src/dto/iActorDTO.dto";
import { JwtMiddlewareGuard } from "src/services/JWTGuard.service";
import { ActoresService } from "src/services/actores.service";
import { GenerosService } from "src/services/generos.service";

@Controller('/api/actores')
// @UseGuards(JwtMiddlewareGuard)
export class ActoresController {
  constructor(private readonly actoresService: ActoresService) { }

  // @Get()
  // async getGeneros(): Promise<iGeneroDTO[]> {
  //   return await this.actoresService.getAllGeneros();
  // };

  @Post()
  async crearActor(@Body() body: iActorDTO): Promise<iActorDTO> {
    return await this.actoresService.crearActor(body);
  };

  // @Put('/:generoId')
  // async actualizarGenero(@Body() body: iGeneroDTO, @Param('generoId') generoId: number): Promise<iGeneroDTO> {
  //   return await this.actoresService.actualizarGenero(generoId, body);
  // };

  // @Delete('/:generoId')
  // async eliminarGenero(@Param('/:generoId') generoId: number): Promise<void> {
  //   // retornar codigo 204
  //   return await this.actoresService.eliminarGenero(generoId);
  // }
}