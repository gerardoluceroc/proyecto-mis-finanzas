import { useEffect, useState } from "react"
import { getAllUsers } from "../api/spring-boot-backend";


export const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchUsers = async () => {
          try {
              const users = await getAllUsers();
              setUsers(users);
          } catch (err) {
              setError(err.message);
          }
      };

      fetchUsers();
  }, []);

  if (error) {
      return <div>Error: {error}</div>;
  }

  return (
      <div>
          <h1>Lista de Usuarios</h1>
          <ul>
              {users.map((user) => (
                  <li key={user.id}>{user.name}</li>
              ))}
          </ul>
      </div>
  );
};