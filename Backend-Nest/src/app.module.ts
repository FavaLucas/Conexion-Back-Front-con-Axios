import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeliculaController } from './controllers/pelicula.controller';
import { PeliculaService } from './services/pelicula.service';

@Module({
  imports: [],
  controllers: [AppController, PeliculaController],
  providers: [AppService, PeliculaService],
})
export class AppModule {}
