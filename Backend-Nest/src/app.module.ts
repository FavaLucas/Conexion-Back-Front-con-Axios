import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeliculaController } from './controllers/pelicula.controller';
import { PeliculaService } from './services/pelicula.service';
import { LoginController } from './controllers/login.controller';
import { LoginService } from './services/login.service';
import { JwtModule } from '@nestjs/jwt';
import { GenerosController } from './controllers/generos.controller';
import { GenerosService } from './services/generos.service';
import { DatabaseService } from './services/db.services';
import { JwtMiddlewareGuard } from './services/JWTGuard.service';

@Module({
  imports: [JwtModule.register({
    secret:'asdas321654as3d21zsdaSDAS',
    signOptions: {expiresIn: '1h'},
    
  })],
  controllers: [AppController, PeliculaController, LoginController, GenerosController],
  providers: [AppService, PeliculaService, LoginService, GenerosService, DatabaseService, JwtMiddlewareGuard],
})
export class AppModule {}
