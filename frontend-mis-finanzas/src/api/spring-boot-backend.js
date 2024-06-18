export const URL_SERVER = "http://localhost:8080"
export const PATH_USERS = "/users"

//Función para obtener todos los usuarios
export const getAllUsers = async () => {

    const response = await fetch(`${URL_SERVER}${PATH_USERS}`);
    const users = await response.json();
    return users;

}