import { useState } from "react"
import { url_registerUser } from "../api/spring-backend";
import axios from "axios";

const useRegister = () => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [responseStatus, setResponseStatus] = useState(null);

    const registerUser = async ({ email, password, name, lastName }) => {
        const body = {
            email,
            password,
            name,
            lastName
        };
    
        setLoading(true);
        try {
            const response = await axios.post(url_registerUser, body);
            
            const status = response?.status || null;
            // Solo devolvemos el status en caso de éxito
            return { status };
    
        } catch (error) {
            const errorMessage = error?.response?.data?.error || "Error desconocido";
            const status = error?.response?.status || null;
            
            // Devolvemos el errorMessage y status en caso de fallo
            return { errorMessage, status };
        } finally {
            setLoading(false);
        }
    }
    

  return {
    loading,
    response,
    responseStatus,
    registerUser

  }
}

export default useRegister