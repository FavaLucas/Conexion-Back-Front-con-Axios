import { CanActivate, ExecutionContext } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

export class EditoresGuard implements CanActivate {
  constructor(private readonly JwtService: JwtService) { }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();


    try {
      const UsuarioRequest = request.user;
      let esEditor = false;
      
      if (UsuarioRequest.roles) {
        UsuarioRequest.roles.forEach((rol) => {
          if (rol === 'editor' || rol === 'Admin') {
            esEditor = true;
          }
        });
      }
      return esEditor;
    } catch (error) {
      return false;
    }
  }

}




