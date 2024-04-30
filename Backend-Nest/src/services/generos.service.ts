
import { Injectable } from "@nestjs/common";
import { iGenero } from "src/modules/iGenero.dto";
import { DatabaseService } from "./db.services";
import generosQueries from "./queries/generos.queries";
import { QueryResult, ResultSetHeader, RowDataPacket } from "mysql2";
import { Pool, createPool, PoolConnection, FieldPacket } from 'mysql2/promise'

@Injectable()
export class GenerosService {
  constructor(private dbService: DatabaseService) { }

  async getAllGeneros(): Promise<iGenero[]> {
    const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(generosQueries.selectAll, []);
    const resultGenero = resultQuery.map((rs: RowDataPacket) => {
      return {
        generoId: rs['generoId'],
        nombre: rs['nombre'],
      };
    });
    return resultGenero;
  };


  async crearGenero(genero: iGenero): Promise<iGenero> {
    const resultQuery: ResultSetHeader = await this.dbService.executeQuery(generosQueries.insert, [genero.nombre]);

    return {
      generoId: resultQuery.insertId,
      nombre: genero.nombre,
    };
  };
}