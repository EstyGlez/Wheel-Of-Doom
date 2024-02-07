import React, { useState, useEffect } from "react";
import "./rouletteTable.css";
import { UserService } from "../../../userService.js";
import Home from "../../Views/Home.jsx";
import rul from "./src/assets"

const RouletteTable = ({ userList }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [remainingUsers, setRemainingUsers] = useState([]);

  useEffect(() => {
    if (Array.isArray(userList)) {
      setRemainingUsers([...userList]);
    } else {
      console.error("userList no es un array válido");
      // En este caso, puedes establecer remainingUsers como un array vacío o manejar el error de otra manera.
      setRemainingUsers([]);
    }
  }, [userList]);

  const handleSorteo = () => {
    if (remainingUsers.length === 0) {
      alert("¡Todos los usuarios han sido seleccionados!");
      return;
    }

    const randomIndex = Math.floor(Math.random() * remainingUsers.length);
    const selected = remainingUsers[randomIndex];

    setSelectedUser(selected);
    setRemainingUsers(remainingUsers.filter((user) => user.id !== selected.id));
  };

  return (
    <body>
    <div className="sorteo-container">
      <h2>Sorteo</h2>
      <button onClick={handleSorteo} disabled={remainingUsers.length === 0}>
        Sortear
      </button>
      <div className="roulette">
      <div className="wheel spin">
        <div className="arrow"></div>
        <img src={rul} alt="Rueda de la ruleta" />
      </div>
      {selectedUser && (
        <div className="resultado">
          <p>Felicidades, el usuario seleccionado es:</p>
          <p>{`${selectedUser.userName} ${selectedUser.surName}`}</p>
        </div>
      )}
    </div>
    </div>
    </body>
  );
};

export default RouletteTable;
