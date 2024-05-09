import { Body, Controller, Post, Get, UseGuards, Put, Param, Delete, HttpStatus, ParseIntPipe } from "@nestjs/common";
import { iActorDTO } from "src/dto/iActorDTO.dto";
import { JwtMiddlewareGuard } from "src/services/JWTGuard.service";
import { ActoresService } from "src/services/actores.service";
import { GenerosService } from "src/services/generos.service";

@Controller('/api/actores')
// @UseGuards(JwtMiddlewareGuard)
export class ActoresController {
  constructor(private readonly actoresService: ActoresService) { }

  @Get()
  async getActores(): Promise<iActorDTO[]> {
    return await this.actoresService.getAllActores();
  };

  @Get('/:id')
  async getActorById(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST, })) idBuscado: number): Promise<iActorDTO> {
    return await this.actoresService.getActorById(idBuscado);
  }

  @Post()
  async crearActor(@Body() body: iActorDTO): Promise<iActorDTO> {
    return await this.actoresService.crearActor(body);
  };

  @Put('/:actorId')
  async actualizarActor(@Body() body: iActorDTO, @Param('actorId') actorId: number): Promise<iActorDTO> {
    return await this.actoresService.actualizarActor(actorId, body);
  };

  @Delete('/:actorId')
  async eliminarActor(@Param('actorId') actorId: number): Promise<void | string> {
    // retornar codigo 204
    return await this.actoresService.eliminarActor(actorId);
  }
}