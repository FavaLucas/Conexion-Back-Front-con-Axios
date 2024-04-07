import React from 'react';
import { IPelicula } from '../interfaces/ipelicula';
import './card.css';




export function PeliculaCard(props: IPelicula) {
  const { id, titulo, sinopsis, generos, duracion, reparto, imagen, fechaDeLanzamiento } = props;


  return (
    <div className="pelicula-container">
      <img className="pelicula-img" src={imagen} alt={titulo} />
      <div className="pelicula-info">
        <h3>{titulo}</h3>
        <p>Sinopsis: {sinopsis}</p>
        <p>Duración: {duracion}</p>
        <p>Fecha de Lanzamiento: {fechaDeLanzamiento}</p>
        <div className="generos">
          <h5>Géneros: </h5>
          <ul>{generos}</ul>
        </div>
        <div className="generos">
          <h5>Reparto: </h5>
          <ul>{reparto}</ul>
        </div>
        <p>id:{id}</p>
      </div>
      <br /><br />
    </div>
  );
}
