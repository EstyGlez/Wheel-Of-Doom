import React from 'react';
import logo from './images/logo.svg';
import xoxo from './images/xoxo.svg';
import './welcomeViews.css';

function Welcome() {
    return (
        <section className='logoandbuttons'>
            <div>
                <img className='logo' src={logo} alt="logo"></img>
            </div>
            <section className="infoaccess">
                <p className="intro">
                    Bienvenida @usuaria! En esta web podrás acceder a la lista de los alumnos más estilosos de Málaga y podrás hacer que participen en cualquiera de tus sorteos. Pincha abajo y accede directamente.
                </p>
                <div className="buttonbox">
                    <button type="submit">FORMULARIO</button>
                    <button type="submit">RULETA DE LA SUERTE</button>
                </div>
                <img className='xoxo' src={xoxo} alt="xoxo"></img>
            </section>
        </section>
    )
}

export default Welcome;

