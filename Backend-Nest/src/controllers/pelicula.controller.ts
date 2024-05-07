import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Patch, Post, Put, Req, UseGuards } from "@nestjs/common";
// import { iPelicula } from "src/modules/iPelicula.module";
import { PeliculaService } from "src/services/pelicula.service";
import { iPeliculaDTO } from "src/dto/iPeliculaDTO.dto";
import { JwtMiddlewareGuard } from "src/services/JWTGuard.service";
import { EditoresGuard } from "src/services/EditoresGuard.service";
import { Request } from "express";

// import { iPeliculas } from "src/modules/iPelicula.dto";

@Controller('/api/peliculas')
// Guard utilizado a nivel controlador
// @UseGuards(JwtMiddlewareGuard)
export class PeliculaController {
  constructor(private readonly peliculaService: PeliculaService) { }

  @Post()
  // Guard utilizado a nivel Endpoint
  // Revisar como es el correcto uso de @Req() para la propagacion de datos
  // @UseGuards(EditoresGuard)
  async crearPelicula(@Body() nuevaPelicula: iPeliculaDTO, @Req() request: Request): Promise<iPeliculaDTO> {
    console.log(request['user']);
    return await this.peliculaService.crearPelicula(nuevaPelicula);
  }

  @Get()
  async getAllPeliculas(): Promise<iPeliculaDTO[]> {
    return await this.peliculaService.getAllPeliculas();
  }

  @Get('/:id')
  async getPeliculaById(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST, })) idBuscado: number): Promise<iPeliculaDTO> {
    return await this.peliculaService.getPeliculaById(idBuscado);
  }

  @Put('/:peliculaId')
  async actualizarGenero(@Body() body: iPeliculaDTO, @Param('peliculaId') peliculaId: number): Promise<iPeliculaDTO> {
    return await this.peliculaService.actualizarPelicula(peliculaId, body);
  };
  @Delete('/:peliculaId')
  async eliminarGenero(@Param('peliculaId') peliculaId: number): Promise<void> {
    // retornar codigo 204
    return await this.peliculaService.eliminarPelicula(peliculaId);
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