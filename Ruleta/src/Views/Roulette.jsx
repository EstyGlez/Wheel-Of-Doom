import { useState, useEffect } from 'react';
import RouletteTable from "../Componentes/roulette/RouletteTable.jsx";
import { UserService } from '../../userService.js';
import NavBar from '../Componentes/navBar/NavBar.jsx';

function Roulette() {
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

  const handleSorteoComplete = () => {
    // Lógica que quieres ejecutar cuando el sorteo ha finalizado
    console.log("Sorteo completado");
  };

  return (
    <>
      <NavBar />
      <RouletteTable userList={userList} onSorteoComplete={handleSorteoComplete} />
    </>
  );
}

export default Roulette;
