import React, { useState } from 'react';
import { modificarPelicula } from '../services/Peliculas';
import './form.css';

export function FormularioEliminar() {
  const [formData, setFormData] = useState({
    id: '',
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
    modificarPelicula(formData)

  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="label">
        <h2>pelicula a eliminar:</h2>
        id
        <input type="number" name="id" value={formData.id} onChange={handleChange} className="input" />
      </label>
      <br />
      <button type="submit" className="submit-button">Enviar</button>
    </form>
  );
}

export default FormularioEliminar;
