import { useState } from 'react';
import "./queen.css";
import ads_click from './ads_click.svg';

const CotillaComponente = () => {
  const [mostrarCotilleos, setMostrarCotilleos] = useState(false);

  const cotilleos = [
    '¡Grupo 1 ha sido visto robando el código de Grupo 2!',
    '¡Grupo 3 ha borrado accidentalmente el código de Grupo 5!',
    'Se rumorea que Grupo 2 ha estado espiando los commits de Grupo 3.',
    'Grupo 5 está planeando un golpe de estado en el repositorio de Grupo 1.',
  ];

  const toggleMostrarCotilleos = () => {
    setMostrarCotilleos(!mostrarCotilleos);
  };

  return (
    <div>

      {/* <button onClick={toggleMostrarCotilleos} className="boton-diana">
        <img src={ads_click} alt="Botón de Diana" />
      </button> */}

      <img
        src={ads_click}
        alt="Botón de Diana"
        onClick={toggleMostrarCotilleos}
        className="boton-diana"
      />

      {mostrarCotilleos && (
        <div className="cotilleos">
          <h2>¡Cotilleos Calientes!</h2>
          <ul>
            {cotilleos.map((cotilleo, index) => (
              <li key={index}>{cotilleo}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CotillaComponente;