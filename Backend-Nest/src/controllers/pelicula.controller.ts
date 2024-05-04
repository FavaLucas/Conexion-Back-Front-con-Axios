import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Patch, Post, UseGuards } from "@nestjs/common";
// import { iPelicula } from "src/modules/iPelicula.module";
import { PeliculaService } from "src/services/pelicula.service";
import { iPeliculaDTO } from "src/dto/iPeliculaDTO.dto";
import { JwtMiddlewareGuard } from "src/services/JWTGuard.service";
import { EditoresGuard } from "src/services/EditoresGuard.service";
// import { iPeliculas } from "src/modules/iPelicula.dto";

@Controller('/api/peliculas')
@UseGuards(JwtMiddlewareGuard)
export class PeliculaController {
  constructor(private readonly peliculaService: PeliculaService) { }

  @Post()
  @UseGuards(EditoresGuard)
  async crearPelicula(@Body() nuevaPelicula: iPeliculaDTO): Promise<iPeliculaDTO> {
    return await this.peliculaService.crearPelicula(nuevaPelicula);
  }

  @Get()
  async getAllPeliculas(): Promise<iPeliculaDTO[]> {
    return await this.peliculaService.getAllPeliculas();
  }

  @Get('/:id')
  async getPeliculaById(@Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.BAD_REQUEST,})) idBuscado: number): Promise<iPeliculaDTO> {
    return await this.peliculaService.getPeliculaById(idBuscado);
  }



  
  
  // @Delete()
  // deletePeliculasById(@Body() peliDTO: iPeliculaDto): iPelicula[] {
  //   try {
  //     return this.peliculaService.deletePeliculasById(peliDTO);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  
  // @Patch()
  // actualizarPelicula(@Body() peliDTO: iPeliculaDto): iPelicula {
  //   console.log(this.peliculaService.actualizarPelicula(peliDTO));
  //   return this.peliculaService.actualizarPelicula(peliDTO);
  // }
  
  // Metodo que funciona sobre el Arreglo peliculaDB Hardcodeado - NO UTILIZAR
  // @Get()
  // getPeliculas(): iPelicula[] {
  //   return this.peliculaService.getPeliculas();
  // }

}