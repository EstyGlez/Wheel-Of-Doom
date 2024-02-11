import React from 'react';
import logo from './images/logo.svg';
import './login.css';

function Login() {
    return (
        <section className='logoandlogin'>
            <div>
                <img className='logo' src={logo} alt="logo"></img>
            </div>
            <div>
                <form>
                    <div className='label'>
                        <label>
                            <input id='username' type='text' placeholder='Nombre de Usuario'></input>
                        </label>
                    </div>
                    <div className='label'>
                        <label>
                            <input id='password' type='password' placeholder='Contraseña'></input>
                        </label>
                    </div>
                    <button className='access' type="submit">ACCEDER</button>
                </form>
            </div>
        </section>
    )
}

export default Login;
