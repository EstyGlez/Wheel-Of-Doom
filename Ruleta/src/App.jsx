import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Componentes/login/Login.jsx';
import Welcome from './Componentes/welcome/WelcomeViews.jsx';
import Home from './Views/Home.jsx';
import Roulette from './Componentes/roulette/RouletteTable.jsx';

function App() {
  const [users, setUsers] = useState([]);
  const [participantsForRoulette, setParticipantsForRoulette] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const allUsers = await UserService.getAllUsers();
        setUsers(allUsers);
        setParticipantsForRoulette(allUsers);
      } catch (error) {
        console.error('Hubo un problema al obtener los usuarios:', error);
      }
    }
    fetchUsers();
  }, []);

  const handleAddUser = async (newUser) => {
    try {
      await UserService.submitUser(newUser);
      setUsers([...users, newUser]);
      setParticipantsForRoulette([...participantsForRoulette, newUser]);
    } catch (error) {
      console.error('Hubo un problema al añadir el usuario:', error);
    }
  };

  const handleUpdateUser = async (userId, updatedUserData) => {
    try {
      await UserService.updateUser(userId, updatedUserData);
      const updatedUsers = users.map(user =>
        user.id === userId ? { ...user, ...updatedUserData } : user
      );
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Hubo un problema al actualizar el usuario:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await UserService.deleteUser(userId);
      const filteredUsers = users.filter(user => user.id !== userId);
      setUsers(filteredUsers);
      setParticipantsForRoulette(filteredUsers);
    } catch (error) {
      console.error('Hubo un problema al eliminar el usuario:', error);
    }
  };

  const handleAddToSecondTable = (user) => {
    // Aquí puedes implementar la lógica para añadir el usuario a la segunda tabla si es necesario
  };

  const handleSorteoComplete = () => {
    // Aquí puedes implementar cualquier lógica que necesites después de que se complete el sorteo
  };

  return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/roulette" element={<Roulette />} />
        </Routes>
      </Router>
    );
  }
  
  export default App;

