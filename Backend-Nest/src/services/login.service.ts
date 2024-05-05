
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { iUsuarioDTO } from "src/dto/iUsuarioDTO.dto";
// import * as bcrypt from 'bcryptjs'

// let passAlmacenado = '';
// bcrypt.hash('lucas', 8).then((valor) => (passAlmacenado = valor));

@Injectable()
export class LoginService {
  constructor(private jwtService: JwtService) { }

  // Aca luego vamos a modificar por que desde una base de datos buscaremos el usr y pass y lo controlaremos vs el que nos llega.
  async validateUser(username: string, password: string): Promise<any> {
    if (username === 'lucas' && password === 'lucas') {
      return {
        username: 'lucas',
        roles: ['Admin']
      };
    }
    if (username === 'kevin' && password === 'kevin') {
      return {
        username: 'kevin',
        roles: ['User'],
      }
    };
    if (username === 'mario' && password === 'mario') {
      return {
        username: 'kevin',
        roles: ['Editor'],
      }
    };
    return false;
  }

  login(user: iUsuarioDTO) {
    const payload =  user ;
    return {
      accessToken: this.jwtService.sign(payload),
    }
  }
}


