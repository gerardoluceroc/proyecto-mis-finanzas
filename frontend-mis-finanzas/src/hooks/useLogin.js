import { useState } from "react"
import axios from "axios";
import { url_loginSession } from "../api/spring-backend";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);  // Guardar la respuesta completa de la API
  // const [error, setError] = useState(null);
  const [responseStatus, setResponseStatus] = useState(null);

  const loginSession = async ({email, password}) => {
    const body = {
      email,
      password,
    };

    setLoading(true);  // Indicamos que la petición está en proceso
    try {
      const response = await axios.post(url_loginSession, body);  // Realizas la petición POST      
      const token = response?.data?.token || null;  // Asegurarse que token no sea undefined
      const status = response?.status || null;  // Asegurarse que status no sea undefined

      if (token) {
        setResponse(token);
        setResponseStatus(status);
        return { token, status }; 
      } else {
        throw new Error("Token no disponible");
      }

    } catch (error) {
        const errorMessage = error?.response?.data?.error || "Error desconocido";  // Manejo de errores
        const status = error?.response?.status || null;
        setResponse(errorMessage);
        setResponseStatus(status);
        return null;
    } finally {
        setLoading(false);  // Indicamos que la petición terminó, independientemente de si tuvo éxito o no
    }
};


  return {
    loading,
    response,
    loginSession,
    responseStatus
  };
};

export default useLogin;
