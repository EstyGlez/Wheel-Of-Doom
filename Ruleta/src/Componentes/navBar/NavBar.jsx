/* import React from 'react'*/
import "./navbar.css"
import logo from "./Componentes/comp_images/logo.svg"
import iconlogin from "./Componentes/comp_images/iconlogin.svg"
import iconlogout from "./Componentes/comp_images/iconlogout.svg"


function NavBar() {


    return (
        <>
            <navbar>
                <section>
                    <img className='logo' src={logo} alt="logo"></img>
                </section>

                <section>
                    <button >Formulario</button>
                    <button >Ruleta</button>
                </section>

                <section>
                    <div>
                        <img src={iconlogin} alt="login"></img>
                        <p>@usuaria</p>
                    </div>

                    <div>
                        <img src={iconlogout} alt="logout"></img>
                        <p>Salir</p>
                    </div>
                </section>

            </navbar>

        </>
    )
}

export default NavBar