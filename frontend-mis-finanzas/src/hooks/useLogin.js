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
      const token = response?.data.token;
      const status = response?.status;
      setResponse(token);
      setResponseStatus(status);
      return token; 
      
    } catch ({response}) {
        console.log("response es: ", response)
        const error = response?.data.error;
        const status = response?.status;
        setResponse(error);
        setResponseStatus(status);
        return null
        
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
