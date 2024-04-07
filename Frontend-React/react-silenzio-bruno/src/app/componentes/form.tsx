import React, { useState } from 'react';
import { getPeliculas, modificarPelicula } from '../services/Peliculas';
import './form.css';

// export function Formulario({ getAllPeliculas }) {
export function Formulario() {
  

  const [formData, setFormData] = useState({
    id:'',
    titulo: '',
    reparto: [],
    generos: [],
    sinopsis: '',
    imagen: '',
    duracion: '',
    fechaDeLanzamiento: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    modificarPelicula(formData);
    // getAllPeliculas();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="label">
      <h2>pelicula a modificar:</h2>
        id:  
        <input type="number" name="id" value={formData.id} onChange={handleChange} className="input" />
      </label>
      <br />
      <label className="label">
        Titulo: 
        <input type="text" name="titulo" value={formData.titulo} onChange={handleChange} className="input" />
      </label>
      <br />
      <label className="label">
        Reparto: 
        <input type="text" name="reparto" value={formData.reparto} onChange={handleChange} className="input" />
      </label>
      <br />
      <label className="label">
        Generos:  
        <input type="text" name="generos" value={formData.generos} onChange={handleChange} className="input" />
      </label>
      <br />
      <label className="label">
        Sinopsis: 
        <input type="text" name="sinopsis" value={formData.sinopsis} onChange={handleChange} className="input" />
      </label>
      <br />
      <label className="label">
        imagen: 
        <input type="text" name="imagen" value={formData.imagen} onChange={handleChange} className="input" />
      </label>
      <br />
      <label className="label">
        duracion: 
        <input type="text" name="duracion" value={formData.duracion} onChange={handleChange} className="input" />
      </label>
      <br />
      <label className="label">
        fecha: 
        <input type="text" name="fechaDeLanzamiento" value={formData.fechaDeLanzamiento} onChange={handleChange} className="input" />
      </label>
      <br />
      <button type="submit" className="submit-button">Enviar</button>
    </form>
  );
}

export default Formulario;
