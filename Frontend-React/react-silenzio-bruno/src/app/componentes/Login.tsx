import './login.css';
import React, { useState } from 'react'
import { loginUser } from '../services/Peliculas';


export const Login = () => {
  const [usuario, setUsuario] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(usuario);
    // Login del Peliucas.JS
    loginUser(usuario);
  };


  return (
    <>
    <form onSubmit={handleSubmit}>
      <label className="label">
        <h2>Login</h2>
        <input type="string" name="user" value={usuario.username} onChange={handleChange} className="input" />
        <input type="string" name="password" value={usuario.password} onChange={handleChange} className="input" />
      </label>
      <br />
      <button type="submit" className="submit-button">Enviar</button>
    </form>
    </>

    
  )
}
