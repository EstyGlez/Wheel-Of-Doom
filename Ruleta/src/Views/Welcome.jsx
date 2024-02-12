/* import React from 'react'*/
import "./welcome.css"
import logo from "./images/logo.svg"
import xoxo from "./images/xoxo.svg"
import { useLocation, useNavigate } from 'react-router-dom';

function Welcome() {

    const location = useLocation();
    const username = location.state?.username;

    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/home');
    };

    const goToRoulette = () => {
        navigate('/ruleta');
    };

    return (
        <>

            <section className='logoandbuttons'>
                <div>
                    <img className='logo' src={logo} alt="logo"></img>
                </div>

                <section className="infoaccess">
                    <p className="intro">
                        Bienvenida {username}, en esta web podrás acceder a la lista de los alumnos más estilosos de Málaga y podrás hacer que participen en cualquiera de tus sorteos. Pincha abajo y accede directamente.
                    </p>
                    <div className="buttonbox">
                        <button onClick={goToHome}>FORMULARIO</button>
                        <button onClick={goToRoulette}>RULETA</button>
                    </div>
                    <img className='xoxo' src={xoxo} alt="xoxo"></img>
                </section>
            </section>

        </>
    )
}

export default Welcome

// <Link to="/home" className="link">FORMULARIO</Link>
// <Link to="/roulette" className="link">RULETA</Link>
