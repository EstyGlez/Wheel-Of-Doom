import { useState, useEffect } from 'react';
import AdminList from '../Componentes/adminlist/Adminlist.jsx';
import { UserService } from "../../userService.js"
import NavBar from "../Componentes/navBar/NavBar.jsx"

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
      <NavBar/>
      <AdminList userList={userList}/>
      
    </>
  );
}

export default Home;