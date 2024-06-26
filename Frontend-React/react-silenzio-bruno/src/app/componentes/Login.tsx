import './login.css';
import React, { useState } from 'react'
import { getPeliculas, loginUser } from '../services/Peliculas';


export const Login = () => {
  const [usuario, setUsuario] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setUsuario(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(usuario);
    // Login del Peliucas.JS
    loginUser(usuario);
  };


  return (
    <>
      
    <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        {/* <input type="number" onChange={handleChange} /> */}
        <input type="text" name="username" value={usuario.username} onChange={handleChange} className="input" />
        <input type="text" name="password" value={usuario.password} onChange={handleChange} className="input" />
      
      <br />
      <button type="submit" className="submit-button" onClick={getPeliculas}>Enviar</button>
    </form>
    </>

    
  )
}
