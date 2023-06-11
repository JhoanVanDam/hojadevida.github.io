import React, { Component } from "react";
import befooterstyle from "./footer.css";
import cat from "./gato.webp";


class beefooter extends Component {
    style() {
        console.log({ befooterstyle });
    }
    render() {
        return (

            <div className="footer-main">
                <div className='footer-social-network'>
                    <a href="https://www.facebook.com/jhoanvandam" rel="noreferrer" target="_blank"><i className="fa-brands fa-facebook fa-2x"></i></a>
                    <a href="https://wa.me/+573228407701" rel="noreferrer" target="_blank"><i className="fa-brands fa-whatsapp fa-2x" ></i></a>
                    <a href="https://www.instagram.com/jhoanvandam" rel="noreferrer" target="_blank"><i className="fa-brands fa-instagram fa-2x" ></i></a>
                    <a href="https://www.linkedin.com/in/jhoanvandam" rel="noreferrer" target="_blank"><i className="fa-brands fa-linkedin fa-2x" ></i></a>
                    <a href="https://www.github.com/jhoanvandam" rel="noreferrer" target="_blank"><i className="fa-brands fa-github fa-2x" ></i></a>
                </div>
                <a href="/"><img id="catlogo" src={cat} alt="catlogo" /></a>
                <p>
                    ™ © 2023 Todos los derechos reservados, Este sitio son marcas comerciales, marcas de servicios o marcas registradas de Jhoan, Inc.
                </p>
            </div>
        );
    }
}
export default beefooter;