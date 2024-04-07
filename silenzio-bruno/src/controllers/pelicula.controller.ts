import { Body, Controller, Delete, Get, Param, Patch } from "@nestjs/common";
import { iPelicula } from "src/modules/iPelicula.module";
import { PeliculaService } from "src/services/pelicula.service";
import { iPeliculaDto } from "src/dto/pelicula.dto";

@Controller('/api/peliculas')
export class PeliculaController {
  constructor(private readonly peliculaService: PeliculaService) { }

  @Get()
  getPeliculas(): iPelicula[] {
    return this.peliculaService.getPeliculas();
  }

  @Delete()
  deletePeliculasById(@Body() peliDTO: iPeliculaDto): iPelicula[] {
    try {
        return this.peliculaService.deletePeliculasById(peliDTO);
    } catch (error) {
        console.log(error)
    }
}

@Patch()
actualizarPelicula(@Body() peliDTO: iPeliculaDto): iPelicula {
    console.log(this.peliculaService.actualizarPelicula(peliDTO));
    return this.peliculaService.actualizarPelicula(peliDTO);
}
}