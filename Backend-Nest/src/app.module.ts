import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeliculaController } from './controllers/pelicula.controller';
import { PeliculaService } from './services/pelicula.service';
import { LoginController } from './controllers/login.controller';
import { LoginService } from './services/login.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [JwtService],
  controllers: [AppController, PeliculaController, LoginController],
  providers: [AppService, PeliculaService, LoginService],
})
export class AppModule {}
