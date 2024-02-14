<<<<<<< HEAD
=======

>>>>>>> c8743d6e251b8a08b535b651cc11def078df114d
import Queen from "../BlogQueen/Queen.jsx";
import "./footer.css";
import la_reina from "./images-footer/la_reina.svg";

function Footer() {

    return (
        <>
            <footer>
                <section className="footerleft">
                    <img src={la_reina} alt='reina_cotilla' />
                    <div className="queenco"> <Queen /> </div>
                </section>
                <section className="footerright">
                    <p> Developed by Grupo 4 Creations © </p>
                </section>
            </footer>
        </>
    );
}

export default Footer;