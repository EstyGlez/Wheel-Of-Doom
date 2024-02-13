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

    // Espera 2 segundos antes de girar la ruleta
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simula la animación de la ruleta girando
    for (let i = 0; i < 10; i++) {
      await new Promise((resolve) => setTimeout(resolve, 200));
      const randomIndex = Math.floor(Math.random() * remainingUsers.length);
      setSelectedUser(remainingUsers[randomIndex]);
    }

    // Detiene la animación y selecciona al ganador
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSpinning(false);
    const randomIndex = Math.floor(Math.random() * remainingUsers.length);
    const selected = remainingUsers[randomIndex];
    setSelectedUser(selected);
    setRemainingUsers(remainingUsers.filter((user) => user.id !== selected.id));

    // Notifica al componente padre que el sorteo ha finalizado
    onSorteoComplete();
  };

  return (
    <section className="cont-roulette">
      <section className="Inst">
        <h2 className="text-roulette" >Instrucciones:</h2>
          <ol>
            <li className="text-roulette">Selecciona los participantes de la tabla anterior</li>
            <li className="text-roulette">Haz girar la ruleta clicando en el botón: ¡Encuéntrala!</li>
            <li className="text-roulette">Deja que la reina cotilla haga su trabajo</li>
            <li className="text-roulette">¡¡¡Ya tienes una sospechosa!!!</li>
          </ol>
      
      </section>
      <div id="but-rou"  className={`sorteo-container${spinning ? " spinning" : ""}`}>
        <button
          onClick={handleSorteo}
          disabled={spinning}
          className={spinning ? "stopped" : ""}
        >
          ¡Encuéntrala!
        </button>
        <div className="roulette">
          <div className={`wheel${spinning ? " spinning" : ""}`}>
            <img src={rul} alt="Rueda de la ruleta" />
          </div>
          {selectedUser && (
            <div className="resultado">
              <p className="text-roulette">La Reina Cotilla es:</p>
              <p className="text-roulette">{`${selectedUser.userName} ${selectedUser.surName}`}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RouletteTable;