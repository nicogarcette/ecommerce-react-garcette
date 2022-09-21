import React from "react";
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
                <a href="">Contacto</a>
                <a href="#">Av. siempreviva 123</a>
                <a href="#">ayuda</a>
            </div>
            <div className="box__footer">
                <h2>Categorias</h2>
                <a href="#">calzado</a>
                <a href="#">indumentaria</a>
                <a href="#">accesorios</a>             
            </div>

            <div className="box__footer">
                <h2>Redes Sociales</h2>
                <a href="#"><i className="fa-brands fa-facebook"></i></a>

                <a href="#"><i className="fa-brands fa-instagram"></i></a>
            </div>

        </div>

        <div className="box__copyright">
            <hr/>
            <p>Todos los derechos reservados © 2021 <b>Nicolas garcette</b></p>
        </div>
    </footer>
)}
export default Footer;