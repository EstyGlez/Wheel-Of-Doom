<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
/*import Login from "./Views/Login.jsx"*/
// import Welcome from "./Views/Welcome.jsx"
import NavBar from "./Componentes/navBar/NavBar.jsx"

function App() {
  

  return (
    <>
     {/* <Login/> */}
     {/* <Welcome/> */}
     <NavBar/>
=======
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

  const handleSorteoComplete = () => {
    // Lógica que quieres ejecutar cuando el sorteo ha finalizado
    console.log("Sorteo completado");
  };

  return (
    <>
      <Queen />
      <Home userList={userList}/>
      <RouletteTable userList={userList} onSorteoComplete={handleSorteoComplete} />
>>>>>>> Sandra
    </>
  );
}

export default App;