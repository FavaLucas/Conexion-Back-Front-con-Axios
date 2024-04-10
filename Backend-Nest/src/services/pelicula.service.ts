import { Injectable } from "@nestjs/common";
import { iPelicula } from "src/modules/iPelicula.module";


let peliculasDB = [
  {
    "titulo": "titulo 1",
    "reparto": [],
    "generos": [],
    "sinopsis": "sinopsis 1",
    "imagen": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/341.jpg",
    "duracion": 62,
    "fechaDeLanzamiento": "fechaDeLanzamiento 1",
    "id": 1
  },
  {
    "titulo": "titulo 2",
    "reparto": [],
    "generos": [],
    "sinopsis": "sinopsis 2",
    "imagen": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/840.jpg",
    "duracion": 96,
    "fechaDeLanzamiento": "fechaDeLanzamiento 2",
    "id": 2
  },
  // {
  //   "titulo": "titulo 3",
  //   "reparto": [],
  //   "generos": [],
  //   "sinopsis": "sinopsis 3",
  //   "imagen": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/856.jpg",
  //   "duracion": 59,
  //   "fechaDeLanzamiento": "fechaDeLanzamiento 3",
  //   "id": 3
  // },
  // {
  //   "titulo": "titulo 4",
  //   "reparto": [],
  //   "generos": [],
  //   "sinopsis": "sinopsis 4",
  //   "imagen": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/354.jpg",
  //   "duracion": 96,
  //   "fechaDeLanzamiento": "fechaDeLanzamiento 4",
  //   "id": 4
  // },
  // {
  //   "titulo": "titulo 5",
  //   "reparto": [],
  //   "generos": [],
  //   "sinopsis": "sinopsis 5",
  //   "imagen": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/192.jpg",
  //   "duracion": 22,
  //   "fechaDeLanzamiento": "fechaDeLanzamiento 5",
  //   "id": 5
  // },
  // {
  //   "titulo": "titulo 6",
  //   "reparto": [],
  //   "generos": [],
  //   "sinopsis": "sinopsis 6",
  //   "imagen": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/996.jpg",
  //   "duracion": 6,
  //   "fechaDeLanzamiento": "fechaDeLanzamiento 6",
  //   "id": 6
  // },
  // {
  //   "titulo": "titulo 7",
  //   "reparto": [],
  //   "generos": [],
  //   "sinopsis": "sinopsis 7",
  //   "imagen": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/709.jpg",
  //   "duracion": 12,
  //   "fechaDeLanzamiento": "fechaDeLanzamiento 7",
  //   "id": 7
  // },
  // {
  //   "titulo": "titulo 8",
  //   "reparto": [],
  //   "generos": [],
  //   "sinopsis": "sinopsis 8",
  //   "imagen": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/472.jpg",
  //   "duracion": 33,
  //   "fechaDeLanzamiento": "fechaDeLanzamiento 8",
  //   "id": 8
  // },
  // {
  //   "titulo": "titulo 9",
  //   "reparto": [],
  //   "generos": [],
  //   "sinopsis": "sinopsis 9",
  //   "imagen": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/484.jpg",
  //   "duracion": 41,
  //   "fechaDeLanzamiento": "fechaDeLanzamiento 9",
  //   "id": 9
  // }
]

@Injectable()
export class PeliculaService {
  getPeliculas(): iPelicula[] {
    return peliculasDB
  }

  deletePeliculasById(peliDTO):iPelicula[] {
    const id=peliDTO.id;
    console.log(id)
    let peliculas = peliculasDB.filter((pl)=> pl.id != id);
    console.log(peliculas)
    return peliculas;
  }

  actualizarPelicula(peliDTO): iPelicula {

    const peliEncontrada = peliculasDB.find((peli) => peli.id == peliDTO.id);
    try {
      if (peliEncontrada) {
        peliEncontrada.titulo = peliDTO.titulo ? peliDTO.titulo : peliEncontrada.titulo;
        peliEncontrada.reparto = peliDTO.reparto ? peliDTO.reparto : peliEncontrada.reparto;
        peliEncontrada.generos = peliDTO.generos ? peliDTO.generos : peliEncontrada.generos;
        peliEncontrada.sinopsis = peliDTO.sinopsis ? peliDTO.sinopsis : peliEncontrada.sinopsis;
        peliEncontrada.imagen = peliDTO.imagen ? peliDTO.imagen : peliEncontrada.imagen;
        peliEncontrada.duracion = peliDTO.duracion ? peliDTO.duracion : peliEncontrada.duracion;
        peliEncontrada.fechaDeLanzamiento = peliDTO.fechaDeLanzamiento ? peliDTO.fechaDeLanzamiento : peliEncontrada.fechaDeLanzamiento;
        
        return peliEncontrada;
      }
    } catch (error) {
      console.log(error,'no de encontro')
    }
  }
  
}