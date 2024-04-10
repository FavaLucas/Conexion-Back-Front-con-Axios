import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeliculaController } from './controllers/pelicula.controller';
import { PeliculaService } from './services/pelicula.service';
import { LoginController } from './controllers/login.controller';
import { LoginService } from './services/login.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({
    secret:'asdas321654as3d21zsdaSDAS',
    
  })],
  controllers: [AppController, PeliculaController, LoginController],
  providers: [AppService, PeliculaService, LoginService],
})
export class AppModule {}
