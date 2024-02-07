import { useState, useEffect } from 'react';
import './App.css';
import Queen from './Componentes/BlogQueen/Queen.jsx';
import Home from './Views/Home.jsx';
import RouletteTable from './Componentes/roulette/RouletteTable.jsx';
import { UserService } from "../userService.js"

function App() {
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
      <Queen />
      <Home />
      {/* Pasa la lista de usuarios como prop userList a Roulette */}
      <RouletteTable userList={userList} />
    </>
  );
}

export default App;