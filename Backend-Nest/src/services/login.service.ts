
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcryptjs'
import { AnyMxRecord } from "dns";


let passAlmacenado = '';
// bcrypt.hash('lucas', 8).then((valor) => (passAlmacenado = valor));

@Injectable()
export class LoginService {
  salt: string ="asdasd3211654as3d2a1s";
  lucasHash: string;
  constructor(private jwtService: JwtService) { 
    this.genSalt();
  }

  async genSalt() {
    this.lucasHash = await bcrypt.hash('lucas', this.salt);
  }

  async validateUser(username: string, password: string): Promise<any> {
    //obtener de la base de datos el usuario lucas
    if (username === 'lucas') {
      const passEncriptado = await bcrypt.hash(password, this.salt);
      if (this.lucasHash == passEncriptado) {
        // retorno el objeto usuario
        return {
          username: username,
          role: 'ADMIN',
          nombre: 'Lucas Fava',
        }
      };
      return null;
    }
    return null;
  }

  login(user: any) {
    const payload = { usuario: user };
    return {
      accessToken: this.jwtService.sign(payload),
    }
  }
}