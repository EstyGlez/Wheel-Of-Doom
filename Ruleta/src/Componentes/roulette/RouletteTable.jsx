import { useState, useEffect } from "react";
import rul from "/src/assets/img/rul.png"
import "./rouletteTable.css"

const RouletteTable = ({ userList, onSorteoComplete }) => {
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
    if (spinning) {
      return;
    }

    if (remainingUsers.length === 0) {
      alert("No hay más sospechosas");
      return;
    }

    setSpinning(true);

    
    await new Promise((resolve) => setTimeout(resolve, 2000));

    
    for (let i = 0; i < 10; i++) {
      await new Promise((resolve) => setTimeout(resolve, 200));
      const randomIndex = Math.floor(Math.random() * remainingUsers.length);
      setSelectedUser(remainingUsers[randomIndex]);
    }

    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSpinning(false);
    const randomIndex = Math.floor(Math.random() * remainingUsers.length);
    const selected = remainingUsers[randomIndex];
    setSelectedUser(selected);
    setRemainingUsers(remainingUsers.filter((user) => user.id !== selected.id));

    
    onSorteoComplete();
  };

  return (
    <section className="cont-roulette">
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
    </section>
  );
};

export default RouletteTable;