'use client'
import { deletePeliculaById, getPeliculas } from '../app/services/Peliculas';
import { Formulario } from '../app/componentes/form'
import { IPelicula } from './interfaces/ipelicula';
import { useEffect, useState } from 'react';
import { PeliculaCard } from './componentes/CardPelicula';
import FormularioEliminar from './componentes/formEliminar';



export default function Home() {

  const [peliculas, setPeliculas] = useState<IPelicula[]>([])
  
  const getAllPeliculas = async () => {
    try {
      let rtaPeliculas: any = await getPeliculas();
      rtaPeliculas = rtaPeliculas.data
      setPeliculas(rtaPeliculas);
    } catch (error: any) {
      alert(error.message);
    }
  };

  const deletePeliculaSeleccionada = () => {
    deletePeliculaById();
  }

  useEffect(() => {
    async function fetchPeliculas() {
      try {
        const response = await getPeliculas();
        if (response) {
          setPeliculas(response.data);
        } else {
          console.error('El resultado de getPeliculas no es un array:', response);
        }
      } catch (error) {
        console.error('Error al obtener las películas:', error);
      }
    }

    fetchPeliculas();
  }, []);

  return (
    <>
      
      <div>
        <h1>Movies</h1>
        <ul>
          {peliculas.map(pelicula => (
            <PeliculaCard
              key={pelicula.id}
              id={pelicula.id}
              titulo={pelicula.titulo}
              reparto={pelicula.reparto}
              generos={pelicula.generos}
              sinopsis={pelicula.sinopsis}
              imagen={pelicula.imagen}
              duracion={pelicula.duracion}
              fechaDeLanzamiento={pelicula.fechaDeLanzamiento}
            />
          ))}
        </ul>
      </div>

      <br /><br />
      <br />
      <div>
      {/* <Formulario getAllPeliculas={getAllPeliculas} /> */}
      <Formulario/>
      <button onClick={getAllPeliculas}>Actualizar Películas</button>
      </div>
      
      <div>
        <FormularioEliminar/>
      </div>

    </>
  );
}
