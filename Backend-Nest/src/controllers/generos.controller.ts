import { Body, Controller, Post, Get } from "@nestjs/common";
import { iPelicula } from "src/modules/iPelicula.module";
import { PeliculaService } from "src/services/pelicula.service";
import { iPeliculaDto } from "src/dto/pelicula.dto";
import { iGenero } from "src/modules/iGenero.dto";
import { GenerosService } from "src/services/generos.service";

@Controller('/api/generos')
export class GenerosController {
  constructor(private readonly generosService: GenerosService) { }

  @Get()
  async getGeneros(): Promise<iGenero[]> {
    return await this.generosService.getAllGeneros();
  }

  @Post()
  async crearGenero(@Body() body: iGenero): Promise<iGenero> {
    return await this.generosService.crearGenero(body);
  }
}