import React, { Component } from "react";
import style from "./about.css";
//import jhoan from "./jhoan2.webp";
class about extends Component {
    render() {
        return (
            <div className="about-main" id="sobremi">
                //<img className="img-logo" src={jhoan} alt="logo" />
                <h5>Sobre mí</h5>
                <div className="about-description">
                    <p>
                        Mi nombre es Jhoan y soy un apasionado del aprendizaje y el crecimiento personal. Siempre busco oportunidades para ampliar mis conocimientos y desarrollar nuevas habilidades.
                        Creo firmemente en la importancia de contribuir al crecimiento de las personas que me rodean al compartir conocimientos, experiencias y recursos. Siempre estoy dispuesto a ayudar en lo que sea necesario.
                    </p>
                    <p>
                        Estudiante de Redes Y
                        Sistemas
                        Teleinformáticos.
                    </p>
                    <p>Mis principales virtues son</p>
                    <ul className="about-description-list">
                        <li>Puntualidad</li>
                        <li>Honestidad</li>
                        <li>Responsabilidad</li>
                        <li>Empatía</li>
                    </ul>

                </div>
            </div>

        );
    }
}
export default about;