import React from 'react'
import "./login.css"
import logo from "./images/logo.svg"


function Login() {


    return (
        <>
            <section className='logoandlogin'>
                <div>
                    <img className='logo' src={logo} alt="logo"></img>
                </div>

                <div>
                    <form>
                        <div className='label'>
                            <label>
                                <input id='loginlabel' type='text' placeholder='Nombre de Usuario'>
                                </input>
                            </label>
                        </div>
                        <div className='label'>
                            <label>
                                <input type='text' placeholder='Contraseña'>
                                </input>
                            </label>
                        </div>
                        <button className='access' type="submit">ACCEDER</button>

                    </form>
                </div>
            </section>

        </>
    )
}

export default Login