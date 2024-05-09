import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeliculaController } from './controllers/pelicula.controller';
import { PeliculaService } from './services/pelicula.service';
import { LoginController } from './controllers/login.controller';
import { LoginService } from './services/login.service';
import { GenerosController } from './controllers/generos.controller';
import { GenerosService } from './services/generos.service';
import { DatabaseService } from './services/db.services';
import { JwtMiddlewareGuard } from './services/JWTGuard.service';
import { JwtModule } from '@nestjs/jwt';
import { EditoresGuard } from './services/EditoresGuard.service';
import { ActoresController } from './controllers/actores.controller';
import { ActoresService } from './services/actores.service';

// La clave secreta es la clave que nosotros definimos para encriptar. Suelen venir en certificados. Nosotros ponemos esta al azar para poder hacer el ejercicio. Suelen ser largas.
@Module({
  imports: [JwtModule.register({
    secret:'asdas321654as3d216532as1fd3214332f132d132d1fv31s56d4q98d7as431casdacxcvgytrbtyhzsdaSDAS',
    signOptions: {expiresIn: '1h'},
    
  })],
  controllers: [AppController, PeliculaController, LoginController, GenerosController, ActoresController],
  providers: [AppService, PeliculaService, LoginService, GenerosService, DatabaseService, JwtMiddlewareGuard, EditoresGuard, ActoresService],
})
export class AppModule {}
