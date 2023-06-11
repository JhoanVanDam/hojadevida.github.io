import React, { Component } from "react";
import style from "./about.css";
import jhoan from "./jhoan2.jpg";
class about extends Component {
    render() {
        return (
            <div className="about-main" id="go-about-main">
                <img src={jhoan} alt="logo" />
                <div className="about-description">
                    <p>
                        Estudiante de Redes Y
                        Sistemas
                        Teleinformáticos.
                        Me considero una
                        persona responsable y
                        ordenada.
                        Buscando mi primera
                        experiencia laboral.
                    </p>
                </div>
            </div>
        );
    }
}
export default about;