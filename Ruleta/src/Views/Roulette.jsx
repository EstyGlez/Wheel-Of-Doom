import { useState, useEffect } from 'react';
import RouletteTable from "../Componentes/roulette/RouletteTable.jsx";
import { UserService } from '../../userService.js';
import NavBar from '../Componentes/navBar/NavBar.jsx';
import Footer from '../Componentes/footer/Footer.jsx';

function Roulette() {
  const [userList, setUserList] = useState([]); 
  

  useEffect(() => {
    
    async function fetchData() {
      try {
        const users = await UserService.getAllUsers();
        setUserList(users);
      } catch (error) {
        console.error('Error al obtener la lista de usuarios:', error);
      }
    }
    fetchData();
  }, []); 

  const handleSorteoComplete = () => {
<<<<<<< HEAD
    
=======
   
>>>>>>> c8743d6e251b8a08b535b651cc11def078df114d
    console.log("Sorteo completado");
  };

  return (
    <>
      <NavBar />
      <RouletteTable userList={userList} onSorteoComplete={handleSorteoComplete} />
      <Footer />
    </>
  );
}

export default Roulette;
