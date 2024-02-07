import React, { useState, useEffect } from "react";
import rul from "/src/assets/img/rul.png"
import AdminList from "../../Views/Home";
import "./rouletteTable.css"

const RouletteTable = ({ userList }) => {
  
  const [selectedUser, setSelectedUser] = useState(null);
  const [remainingUsers, setRemainingUsers] = useState([]);
  const [spinning, setSpinning] = useState(false); // Agrega esta línea para inicializar selectedUser


  useEffect(() => {
    if (Array.isArray(userList)) {
      setRemainingUsers([...userList]);
    } else {
      console.error("userList no es un array válido");
      setRemainingUsers([]);
    }
  }, [userList]);

  const handleSorteo = async () => {
    if (spinning) {
      // Si la ruleta está girando, no permitir más acciones
      return;
    }

    if (remainingUsers.length === 0) {
      alert("No hay más sospechosas");
      return;
    }

    setSpinning(true);

    await new Promise((resolve) => setTimeout(resolve, 2200));

    const randomIndex = Math.floor(Math.random() * remainingUsers.length);
    const selected = remainingUsers[randomIndex];

    setSelectedUser(selected);
    setRemainingUsers(remainingUsers.filter((user) => user.id !== selected.id));

    setSpinning(false);

    // Notifica al componente padre que el sorteo ha finalizado
    onSorteoComplete();
  };

  

  return (
    <div className={`sorteo-container${spinning ? " spinning" : ""}`}>
      <h2>Sorteo</h2>
      <button
        onClick={handleSorteo}
        disabled={spinning}
        className={spinning ? "stopped" : ""}
      >
        Encontrada!
      </button>
      <div className="roulette">
     
        <div className={`wheel${spinning ? " spinning" : ""}`}>
          <img src={rul} alt="Rueda de la ruleta" />
        </div>
        {selectedUser && (
          <div className="resultado">
            <p>La Reina Cotilla es:</p>
            <p>{`${selectedUser.userName} ${selectedUser.surName}`}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RouletteTable;