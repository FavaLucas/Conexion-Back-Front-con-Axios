import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class EditoresGuard implements CanActivate {
  // constructor(private readonly JwtService: JwtService) { }
  constructor() { }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    try {
      const usuarioRequest = request.user;
      let esEditor = false;
      if (usuarioRequest.roles) {
        usuarioRequest.roles.forEach((rol) => {
          if (rol === 'Editor' || rol === 'Admin') {
            esEditor = true;
          }
        });
      }
      return esEditor;
    } catch (error) {
      return false;
    };
  };
}









