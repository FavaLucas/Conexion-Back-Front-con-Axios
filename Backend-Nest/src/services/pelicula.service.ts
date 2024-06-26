import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
// import { iPelicula } from "src/modules/iPelicula.module";
import { iPeliculaDTO } from "src/dto/iPeliculaDTO.dto";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import peliculasQueries from "./queries/peliculas.queries";
import { DatabaseService } from './db.services';

@Injectable()
export class PeliculaService {
  constructor(private dbService: DatabaseService) { }

  async crearPelicula(pelicula: iPeliculaDTO): Promise<iPeliculaDTO> {
    const resultQuery: ResultSetHeader = await this.dbService.executeQuery(peliculasQueries.insert, [pelicula.peliculaId, pelicula.titulo, pelicula.sinopsis, pelicula.imagen, pelicula.duracion, pelicula.fechaLanzamiento]);

    return {
      peliculaId: resultQuery.insertId,
      titulo: pelicula.titulo,
      sinopsis: pelicula.sinopsis,
      imagen: pelicula.imagen,
      duracion: pelicula.duracion,
      fechaLanzamiento: pelicula.fechaLanzamiento,
    };
  };

  async getAllPeliculas(): Promise<iPeliculaDTO[]> {
    const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(peliculasQueries.selectAll, []);
    const resultPeliculas = resultQuery.map((rs: RowDataPacket) => {
      return {
        peliculaId: rs['peliculaId'],
        titulo: rs['titulo'],
        sinopsis: rs['sinopsis'],
        imagen: rs['imagen'],
        duracion: rs['duracion'],
        fechaLanzamiento: rs['fechaLanzamiento'],
      };
    });
    return resultPeliculas;
  };

  async getPeliculaById(idBuscado: number): Promise<iPeliculaDTO> {
    const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(peliculasQueries.selectById, [idBuscado]);

    if (resultQuery.length === 0) {
      throw new NotFoundException(`No existe una pelicula con id: ${idBuscado}`);
    }
    const result = resultQuery[0];

    return {
      peliculaId: result['peliculaId'],
      titulo: result['titulo'],
      sinopsis: result['sinopsis'],
      imagen: result['imagen'],
      duracion: result['duracion'],
      fechaLanzamiento: result['fechaLanzamiento'],
    };
  }
  async actualizarPelicula(peliculaId: number, pelicula: iPeliculaDTO): Promise<iPeliculaDTO> {
    const resultQuery: ResultSetHeader = await this.dbService.executeQuery(peliculasQueries.update, [pelicula.titulo, peliculaId]);
    if (resultQuery.affectedRows == 1) {
      return pelicula;
    }
    throw new HttpException("No se pudo actualizar la Pelicula ya que no se encontro el Id", HttpStatus.NOT_FOUND)
  };


  async eliminarPelicula(peliculaId: number): Promise<void | string> {
    try {
      const resultQuery: ResultSetHeader = await this.dbService.executeQuery(peliculasQueries.deleteById, [peliculaId]);
      if (resultQuery.affectedRows == 0) {
        throw new HttpException("No se pudo eliminar la Pelicula por que no existe dicho Id", HttpStatus.NOT_FOUND)
      } else { return ('Pelicula eliminada con exito'); }
      ;
    } catch (error) {
      if (error.errnumero == 1451) {
        // Error 409 conflicto entre lo que se quiere eliminar y lo que hay en la base de datos
        throw new HttpException('No se pudo eliminar la Pelicula ya que esta referenciado por otro registro', HttpStatus.CONFLICT);
      }
      throw new HttpException(`Error eliminando Pelicula: ${error.sqlMessage}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }

  };

  async getActoresPorPelicula(actorId: number ): Promise<any[]> {
    const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(peliculasQueries.selectActores, [actorId]);
    const resultActores = resultQuery.map((rs: RowDataPacket) => {
      return {
        nombreActor: rs['nombreCompleto'],
      };
    });
    return resultActores;
  };







  // getPeliculas(): iPelicula[] {
  //   return peliculasDB
  // }

  // deletePeliculasById(peliDTO): iPelicula[] {
  //   const id = peliDTO.id;
  //   console.log(id)
  //   let peliculas = peliculasDB.filter((pl) => pl.id != id);
  //   console.log(peliculas)
  //   return peliculas;
  // }

  // actualizarPelicula(peliDTO): iPelicula {
  //   const peliEncontrada = peliculasDB.find((peli) => peli.id == peliDTO.id);
  //   try {
  //     if (peliEncontrada) {
  //       peliEncontrada.titulo = peliDTO.titulo ? peliDTO.titulo : peliEncontrada.titulo;
  //       peliEncontrada.reparto = peliDTO.reparto ? peliDTO.reparto : peliEncontrada.reparto;
  //       peliEncontrada.generos = peliDTO.generos ? peliDTO.generos : peliEncontrada.generos;
  //       peliEncontrada.sinopsis = peliDTO.sinopsis ? peliDTO.sinopsis : peliEncontrada.sinopsis;
  //       peliEncontrada.imagen = peliDTO.imagen ? peliDTO.imagen : peliEncontrada.imagen;
  //       peliEncontrada.duracion = peliDTO.duracion ? peliDTO.duracion : peliEncontrada.duracion;
  //       peliEncontrada.fechaDeLanzamiento = peliDTO.fechaDeLanzamiento ? peliDTO.fechaDeLanzamiento : peliEncontrada.fechaDeLanzamiento;

  //       return peliEncontrada;
  //     }
  //   } catch (error) {
  //     console.log(error, 'no de encontro')
  //   }
  // }




  // let peliculasDB = [
  //   {
  //     "titulo": "titulo 1",
  //     "reparto": [],
  //     "generos": [],
  //     "sinopsis": "sinopsis 1",
  //     "imagen": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/341.jpg",
  //     "duracion": 62,
  //     "fechaDeLanzamiento": "fechaDeLanzamiento 1",
  //     "id": 1
  //   },
  //   {
  //     "titulo": "titulo 2",
  //     "reparto": [],
  //     "generos": [],
  //     "sinopsis": "sinopsis 2",
  //     "imagen": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/840.jpg",
  //     "duracion": 96,
  //     "fechaDeLanzamiento": "fechaDeLanzamiento 2",
  //     "id": 2
  //   },
  //   {
  //     "titulo": "titulo 3",
  //     "reparto": [],
  //     "generos": [],
  //     "sinopsis": "sinopsis 3",
  //     "imagen": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/856.jpg",
  //     "duracion": 59,
  //     "fechaDeLanzamiento": "fechaDeLanzamiento 3",
  //     "id": 3
  //   },
  //   {
  //     "titulo": "titulo 4",
  //     "reparto": [],
  //     "generos": [],
  //     "sinopsis": "sinopsis 4",
  //     "imagen": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/354.jpg",
  //     "duracion": 96,
  //     "fechaDeLanzamiento": "fechaDeLanzamiento 4",
  //     "id": 4
  //   },
  //   {
  //     "titulo": "titulo 5",
  //     "reparto": [],
  //     "generos": [],
  //     "sinopsis": "sinopsis 5",
  //     "imagen": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/192.jpg",
  //     "duracion": 22,
  //     "fechaDeLanzamiento": "fechaDeLanzamiento 5",
  //     "id": 5
  //   },
  //   {
  //     "titulo": "titulo 6",
  //     "reparto": [],
  //     "generos": [],
  //     "sinopsis": "sinopsis 6",
  //     "imagen": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/996.jpg",
  //     "duracion": 6,
  //     "fechaDeLanzamiento": "fechaDeLanzamiento 6",
  //     "id": 6
  //   },
  //   {
  //     "titulo": "titulo 7",
  //     "reparto": [],
  //     "generos": [],
  //     "sinopsis": "sinopsis 7",
  //     "imagen": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/709.jpg",
  //     "duracion": 12,
  //     "fechaDeLanzamiento": "fechaDeLanzamiento 7",
  //     "id": 7
  //   },
  //   {
  //     "titulo": "titulo 8",
  //     "reparto": [],
  //     "generos": [],
  //     "sinopsis": "sinopsis 8",
  //     "imagen": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/472.jpg",
  //     "duracion": 33,
  //     "fechaDeLanzamiento": "fechaDeLanzamiento 8",
  //     "id": 8
  //   },
  //   {
  //     "titulo": "titulo 9",
  //     "reparto": [],
  //     "generos": [],
  //     "sinopsis": "sinopsis 9",
  //     "imagen": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/484.jpg",
  //     "duracion": 41,
  //     "fechaDeLanzamiento": "fechaDeLanzamiento 9",
  //     "id": 9
  //   }
  // ]
}