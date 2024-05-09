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

  async getAllActores(): Promise<iActorDTO[]> {
    const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(actoresQueries.selectAll, []);
    const resultPeliculas = resultQuery.map((rs: RowDataPacket) => {
      return {
        actorId: rs['actorId'],
        nombreCompleto: rs['nombreCompleto'],
      };
    });
    return resultPeliculas;
  };

  async getActorById(idBuscado: number): Promise<iActorDTO> {
    const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(actoresQueries.selectById, [idBuscado]);

    if (resultQuery.length === 0) {
      throw new NotFoundException(`No existe el actor con id: ${idBuscado}`);
    }
    const result = resultQuery[0];
    return {
      actorId: result['actorId'],
      nombreCompleto: result['nombreCompleto'],
    }
  }


  async actualizarActor(actorId: number, actor: iActorDTO): Promise<iActorDTO> {
    const resultQuery: ResultSetHeader = await this.dbService.executeQuery(actoresQueries.update, [actor.nombreCompleto, actorId]);
    if (resultQuery.affectedRows == 1) {
      return actor;
    }
    throw new HttpException("No se pudo actualizar el actor ya que no se encontro el Id", HttpStatus.NOT_FOUND)
  };


  async eliminarActor(actorId: number): Promise<void | string> {
    try {
      const resultQuery: ResultSetHeader = await this.dbService.executeQuery(actoresQueries.deleteById, [actorId]);
      if (resultQuery.affectedRows == 0) {
        throw new HttpException("No se pudo eliminar el actor por que no existe dicho Id", HttpStatus.NOT_FOUND)
      } else { return ('Actor eliminado con exito'); }
      ;
    } catch (error) {
      if (error.errnumero == 1451) {
        // Error 409 conflicto entre lo que se quiere eliminar y lo que hay en la base de datos
        throw new HttpException('No se pudo eliminar el Actor ya que esta referenciado por otro registro', HttpStatus.CONFLICT);
      }
      throw new HttpException(`Error eliminando Actor: ${error.sqlMessage}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }

  };
}