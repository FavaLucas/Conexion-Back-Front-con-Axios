import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
// import { iPelicula } from "src/modules/iPelicula.module";
import { iActorDTO } from "src/dto/iActorDTO.dto";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import peliculasQueries from "./queries/peliculas.queries";
import { DatabaseService } from './db.services';
import actoresQueries from "./queries/actores.queries";

@Injectable()
export class ActoresService {
  constructor(private dbService: DatabaseService) { }

  async crearActor(actor: iActorDTO): Promise<iActorDTO> {
    const resultQuery: ResultSetHeader = await this.dbService.executeQuery(actoresQueries.insert, [actor.nombreCompleto]);
    return {
      actorId: resultQuery.insertId,
      nombreCompleto: actor.nombreCompleto,
    };
  };

  // async getAllPeliculas(): Promise<iPeliculaDTO[]> {
  //   const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(peliculasQueries.selectAll, []);
  //   const resultPeliculas = resultQuery.map((rs: RowDataPacket) => {
  //     return {
  //       peliculaId: rs['peliculaId'],
  //       titulo: rs['titulo'],
  //       sinopsis: rs['sinopsis'],
  //       imagen: rs['imagen'],
  //       duracion: rs['duracion'],
  //       fechaLanzamiento: rs['fechaLanzamiento'],
  //     };
  //   });
  //   return resultPeliculas;
  // };

  // async getPeliculaById(idBuscado: number): Promise<iPeliculaDTO> {
  //   const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(peliculasQueries.selectById, [idBuscado]);

  //   if (resultQuery.length === 0) {
  //     throw new NotFoundException(`No existe una pelicula con id: ${idBuscado}`);
  //   }
  //   const result = resultQuery[0];

  //   return {
  //     peliculaId: result['peliculaId'],
  //     titulo: result['titulo'],
  //     sinopsis: result['sinopsis'],
  //     imagen: result['imagen'],
  //     duracion: result['duracion'],
  //     fechaLanzamiento: result['fechaLanzamiento'],
  //   };
  // }
  // async actualizarPelicula(peliculaId: number, pelicula: iPeliculaDTO): Promise<iPeliculaDTO> {
  //   const resultQuery: ResultSetHeader = await this.dbService.executeQuery(peliculasQueries.update, [pelicula.titulo, peliculaId]);
  //   if (resultQuery.affectedRows == 1) {
  //     return pelicula;
  //   }
  //   throw new HttpException("No se pudo actualizar la Pelicula ya que no se encontro el Id", HttpStatus.NOT_FOUND)
  // };


  // async eliminarPelicula(peliculaId: number): Promise<void | string> {
  //   try {
  //     const resultQuery: ResultSetHeader = await this.dbService.executeQuery(peliculasQueries.deleteById, [peliculaId]);
  //     if (resultQuery.affectedRows == 0) {
  //       throw new HttpException("No se pudo eliminar la Pelicula por que no existe dicho Id", HttpStatus.NOT_FOUND)
  //     } else { return ('Pelicula eliminada con exito'); }
  //     ;
  //   } catch (error) {
  //     if (error.errnumero == 1451) {
  //       // Error 409 conflicto entre lo que se quiere eliminar y lo que hay en la base de datos
  //       throw new HttpException('No se pudo eliminar la Pelicula ya que esta referenciado por otro registro', HttpStatus.CONFLICT);
  //     }
  //     throw new HttpException(`Error eliminando Pelicula: ${error.sqlMessage}`, HttpStatus.INTERNAL_SERVER_ERROR);
  //   }

  };