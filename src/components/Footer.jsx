import React from "react";
import { Link} from "react-router-dom";
import logo from "../assets/img/logo.png"

const Footer = () =>{

return(
    <footer>

        <div className="container__footer">
            <div className="box__footer">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="terms">
                    <p>Koston.</p>
                </div>
            </div>
            <div className="box__footer">
                <h2>Nosotros</h2>
                <p>Contacto</p>
                <p>Av. siempreviva 123</p>
                <p>ayuda</p>
            </div>
            <div className="box__footer">
                <h2>Categorias</h2>
                <Link to='/'>inicio</Link>
                <Link to='/categoria/calzado'>calzado</Link>
                <Link to='/categoria/indumentaria'>indumentaria</Link>          
            </div>

            <div className="box__footer ">
                <h2>Redes Sociales</h2>
                <div className="logos">
                    <a href="https://www.facebook.com/" target="_blank" rel='noreferrer'><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/" target="_blank" rel='noreferrer'><i className="fa-brands fa-instagram"></i></a>
                </div>
            </div>

        </div>

        <div className="box__copyright">
            <hr/>
            <p>Todos los derechos reservados © 2021 <b>Nicolas garcette</b></p>
        </div>
    </footer>
)}
export default Footer;