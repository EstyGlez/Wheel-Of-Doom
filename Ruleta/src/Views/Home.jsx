import { useState, useEffect } from 'react';
import AdminList from '../Componentes/adminList/AdminList.jsx';
import { UserService } from "../../userService.js"

function Home() {
  const [userList, setUserList] = useState([]); // Estado para almacenar la lista de usuarios
  

  useEffect(() => {
    // Llama a UserService para obtener la lista de usuarios al montar el componente
    async function fetchData() {
      try {
        const users = await UserService.getAllUsers();
        setUserList(users);
      } catch (error) {
        console.error('Error al obtener la lista de usuarios:', error);
      }
    }
    fetchData();
  }, []); // Llama a useEffect solo una vez al montar el componente

  

  return (
    <>
      
      <AdminList userList={userList}/>
      
    </>
  );
}

export default Home;