import { Body, Controller, Post, Get, UseGuards, Put, Param, Delete, HttpStatus } from "@nestjs/common";
import { iGeneroDTO } from "src/dto/iGeneroDTO.dto";
import { JwtMiddlewareGuard } from "src/services/JWTGuard.service";
import { GenerosService } from "src/services/generos.service";

@Controller('/api/generos')
// @UseGuards(JwtMiddlewareGuard)
export class GenerosController {
  constructor(private readonly generosService: GenerosService) { }

  @Get()
  async getGeneros(): Promise<iGeneroDTO[]> {
    return await this.generosService.getAllGeneros();
  };


  @Post()
  async crearGenero(@Body() body: iGeneroDTO): Promise<iGeneroDTO> {
    return await this.generosService.crearGenero(body);
  };

  @Put('/:generoId')
  async actualizarGenero(@Body() body: iGeneroDTO, @Param('generoId') generoId: number): Promise<iGeneroDTO> {
    return await this.generosService.actualizarGenero(generoId, body);
  };

  @Delete('/:generoId')
  async eliminarGenero(@Param('generoId') generoId: number): Promise<void> {
    // retornar codigo 204
    return await this.generosService.eliminarGenero(generoId);
  }
}

// update generos set nombreGenero = 'Suspenso' where generoId = 1;