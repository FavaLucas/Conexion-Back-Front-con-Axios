
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { iGeneroDTO } from "src/dto/iGeneroDTO.dto";
import { DatabaseService } from "./db.services";
import generosQueries from "./queries/generos.queries";
import { QueryResult, ResultSetHeader, RowDataPacket } from "mysql2";
import { Pool, createPool, PoolConnection, FieldPacket } from 'mysql2/promise'

@Injectable()
export class GenerosService {
  constructor(private dbService: DatabaseService) { }

  async getAllGeneros(): Promise<iGeneroDTO[]> {
    const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(generosQueries.selectAll, []);
    const resultGenero = resultQuery.map((rs: RowDataPacket) => {
      return {
        generoId: rs['generoId'],
        nombreGenero: rs['nombre'],
      };
    });
    return resultGenero;
  };

  async crearGenero(genero: iGeneroDTO): Promise<iGeneroDTO> {
    const resultQuery: ResultSetHeader = await this.dbService.executeQuery(generosQueries.insert, [genero.generoId, genero.nombreGenero]);
    return {
      generoId: resultQuery.insertId,
      nombreGenero: genero.nombreGenero,
    };
  };

  async actualizarGenero(generoId: number, genero: iGeneroDTO): Promise<iGeneroDTO> {
    const resultQuery: ResultSetHeader = await this.dbService.executeQuery(generosQueries.update, [genero.nombreGenero, generoId]);
    if (resultQuery.affectedRows == 1) {
      return genero;
    }
    throw new HttpException("No se pudo actualizar el Genero ya que no se encontro el Id", HttpStatus.NOT_FOUND)
  };


  async eliminarGenero(generoId: number): Promise<void> {
    const resultQuery: ResultSetHeader = await this.dbService.executeQuery(generosQueries.delete, [generoId]);
    if (resultQuery.affectedRows == 0) {
      throw new HttpException("No se pudo eliminar el Genero por que no existe dicho Id", HttpStatus.NOT_FOUND)
    };
  };


}
