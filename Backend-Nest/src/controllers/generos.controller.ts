import { Body, Controller, Post, Get, UseGuards } from "@nestjs/common";
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
  }

  @Post()
  async crearGenero(@Body() body: iGeneroDTO): Promise<iGeneroDTO> {
    return await this.generosService.crearGenero(body);
  }
}