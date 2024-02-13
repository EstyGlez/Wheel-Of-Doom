import "./navbar.css"
import logo from "./images_navbar/logo.svg"
import iconlogin from "./images_navbar/iconlogin.svg"
import iconlogout from "./images_navbar/iconlogout.svg"
import { Link, useLocation } from 'react-router-dom';

function NavBar() {

    const location = useLocation();
    const username = location.state?.username;

    return (
        <>

            <navbar className="navbar">
                <section>
                    <img className='logonavbar' src={logo} alt="logo"></img>
                </section>

                <section className="menu">
                    <Link to="/home" className="link">FORMULARIO</Link>
                    <Link to="/roulette" className="link">RULETA</Link>
                </section>
                <section className="options">
                    <div className="login">
                        <img src={iconlogin} alt="login" id="img_login"></img>
                        <div className="usern">{username}</div>
                    </div>

                    <div className="logout">
                        <img src={iconlogout} alt="logout" id="img_logout"></img>
                        <Link to="/login" className="link">Salir</Link>
                    </div>
                </section>
            </navbar>

        </>
    )
}

export default NavBar
