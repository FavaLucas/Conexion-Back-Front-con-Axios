import clienteAxios from './Axios.js';

export const loginUser = async (usuario) => {
  try {
    const response = await Promise.resolve(clienteAxios.post("http://localhost:8080/auth/login", usuario));
    sessionStorage.setItem('token', response.data.accessToken);
    console.log(response);
    console.log("Llegamos aca");
    return response;
  } catch (error) {
    console.log(error);
  }
}