import React, { Component } from "react";
import style from "./about.css";
import jhoan from "./jhoan.webp";
class about extends Component {
    render() {
        return (
            <div className="about-main" id="sobremi">
                <img src={jhoan} alt="logo" />
                <div className="about-description">
                    <h5>Sobre mí</h5>
                    
                    <p>
                        Estudiante de Redes Y
                        Sistemas
                        Teleinformáticos.
                        Me considero una
                        persona responsable y
                        ordenada, mis principales virtudes
                        son la honestidad y el trabajo duro.
                    </p>
                </div>
            </div>
            
        );
    }
}
export default about;