//import React from 'react'
import Queen from "../BlogQueen/Queen.jsx";
import "./footer.css";
import la_reina from "./images-footer/la_reina.svg";

function Footer() {

    return (
        <>
            <footer className='footer'>
                <section>
                    <div className="footer-content">
                        <div className="content-boton">

                             <img src={la_reina} alt='reina_cotilla' />
                             <Queen />
                             
                        </div>
                    </div>
                    <h1>&copy; Developed by Grupo 4 Creations © </h1>
                </section>
            </footer>
        </>
    );
}

export default Footer;