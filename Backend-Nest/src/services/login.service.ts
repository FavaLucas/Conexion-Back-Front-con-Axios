
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcryptjs'
import { iUsuarioDto } from "src/dto/usuario.dto";

let passAlmacenado = '';
// bcrypt.hash('lucas', 8).then((valor) => (passAlmacenado = valor));

@Injectable()
export class LoginService {
  salt: string = "asdasd3211654as3d2a1s";
  lucasHash: string;
  constructor(private jwtService: JwtService) { }


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
        roles: ['User', 'Reg-latam'],
      }
    };
    return false;
  }

  login(user: iUsuarioDto) {
    const payload = { user };
    return {
      accessToken: this.jwtService.sign(payload),
    }
  }
}


