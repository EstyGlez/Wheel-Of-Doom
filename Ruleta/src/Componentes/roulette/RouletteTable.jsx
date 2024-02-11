
import React, { useState, useEffect } from 'react';
import './rouletteTable.css';

const Roulette = ({ userList, onSorteoComplete }) => {
  const [drawnParticipant, setDrawnParticipant] = useState(null);
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
      alert("No hay más participantes");
      return;
    }

    setSpinning(true);

    // Simulando la animación de la ruleta girando
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Escogiendo un participante al azar
    const randomIndex = Math.floor(Math.random() * remainingUsers.length);
    const selectedParticipant = remainingUsers[randomIndex];

    setDrawnParticipant(selectedParticipant);

    // Eliminando al participante seleccionado de la lista
    const updatedUsers = remainingUsers.filter(user => user.id !== selectedParticipant.id);
    setRemainingUsers(updatedUsers);

    // Notificando al componente padre que el sorteo ha finalizado
    onSorteoComplete(selectedParticipant);
    setSpinning(false);
  };

  return (
    <div className={`roulette-container${spinning ? ' spinning' : ''}`}>
      <h2>Ruleta de Sorteo</h2>
      <button onClick={handleSorteo} disabled={spinning}>
        {spinning ? 'Girando...' : '¡Girar!'}
      </button>
      <div className="roulette-wheel">
        <img src="roulette-wheel-image.jpg" alt="Rueda de la ruleta" />
      </div>
      {drawnParticipant && (
        <div className="result">
          <p>¡El ganador es: {drawnParticipant.name}!</p>
        </div>
      )}
    </div>
  );
};

export default Roulette;
