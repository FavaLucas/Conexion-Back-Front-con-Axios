
import { Injectable } from "@nestjs/common";
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
}
