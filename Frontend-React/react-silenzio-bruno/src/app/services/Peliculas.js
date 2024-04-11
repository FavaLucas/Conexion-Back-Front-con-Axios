'use client'
import clienteAxios from './Axios.js';

export const getPeliculas = async () => {
  try {
    const response = await Promise.resolve(clienteAxios.get('/peliculas'));
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}
export const deletePeliculaById = async (DTO) => {
  try {
    const response = await Promise.resolve(clienteAxios.delete("http://localhost:8080/api/peliculas", DTO));
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}
export const modificarPelicula = async (DTO) => {
  try {
    const response = await Promise.resolve(clienteAxios.patch("http://localhost:8080/api/peliculas", DTO));
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}
export const loginUser = async (usuario) => {
  try {
    const response = await Promise.resolve(clienteAxios.post("http://localhost:8080/auth/login", usuario));
    console.log(response);
    console.log("Llegamos aca");
    return response;
  } catch (error) {
    console.log(error);
  }
}



