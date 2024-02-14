import { useState, useEffect } from 'react';
import AdminList from '../Componentes/adminlist/Adminlist.jsx';
import { UserService } from "../../userService.js";
import NavBar from "../Componentes/navBar/NavBar.jsx";
import Footer from "../Componentes/footer/Footer.jsx";

function Home() {
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
  

  return (
    <>
      <NavBar/>
      <AdminList userList={userList}/>
      <Footer />
    </>
  );
}

export default Home;
