import React, { useState, useEffect } from "react";
import "./rouletteTable.css";
import { UserService } from "../../../userService.js";
import Home from "../../Views/Home.jsx";
import rul from "/src/assets/img/rul.png"

const RouletteTable = ({ userList }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [remainingUsers, setRemainingUsers] = useState([]);
  const [spinning, setSpinning] = useState(false);


  useEffect(() => {
    if (Array.isArray(userList)) {
      setRemainingUsers([...userList]);
    } else {
      console.error("userList no es un array válido");
      setRemainingUsers([]);
    }
  }, [userList]);

  const handleSorteo = async () => {
    if (remainingUsers.length === 0 || spinning) {
      alert("¡La ruleta ya está en movimiento o todos los usuarios han sido seleccionados!");
      return;
    }

    setSpinning(true);

    await new Promise((resolve) => setTimeout(resolve, 2200));

  const randomIndex = Math.floor(Math.random() * remainingUsers.length);
  const selected = remainingUsers[randomIndex];

  setSelectedUser(selected);
  setRemainingUsers(remainingUsers.filter((user) => user.id !== selected.id));

  setSpinning(false);
};

return (
  <div className="sorteo-container">
    <h2>Sorteo</h2>
    <button
      onClick={handleSorteo}
      disabled={remainingUsers.length === 0 || spinning}
      className={spinning ? 'stopped' : ''}  
    >
      Sortear
    </button>
    <div className="roulette">
      <div className={`wheel${spinning ? ' spinning' : ''}`}>
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
);
};

export default RouletteTable;