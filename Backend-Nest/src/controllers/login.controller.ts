import { Body, Controller, HttpException, HttpStatus, Post, UseGuards } from "@nestjs/common";
import { JwtMiddlewareGuard } from "src/services/JWTGuard.service";
import { LoginService } from "src/services/login.service";
// import * as bcrypt from 'bcryptjs'


@Controller('/auth')
// @UseGuards(JwtMiddlewareGuard)
export class LoginController {
  constructor(private loginService: LoginService) { }

  @Post('login')
  async login(@Body() body: { username: string, password: string }) {
    const user = await this.loginService.validateUser(body.username, body.password);
    if (!user) {
      throw new HttpException('No autorizado', HttpStatus.UNAUTHORIZED);
    }
    return this.loginService.login(user);
  }
}