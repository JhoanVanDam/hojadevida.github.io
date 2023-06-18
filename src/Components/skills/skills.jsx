import React, { Component } from "react";
import styles from "./skills.css";
class skills extends Component {
    render() {
        return (
            <div className="skill-main">
                <h5>Mis habilidades</h5>
                <div className="skill-item" id="habilidades">
                    <label>HTML</label>
                    <i class="fa-brands fa-html5"></i>
                    <div className="skill-item-level" style={{width:"50%"}}></div>
                </div>
                <div className="skill-item">
                    <label>JAVA</label>
                    <i class="fa-brands fa-java"></i>
                    <div className="skill-item-level" style={{width:"50%"}}></div>
                </div>
                <div className="skill-item">
                    <label>CSS</label>
                    <i class="fa-brands fa-css3"></i>
                    <div className="skill-item-level" style={{width:"50%"}}></div>
                </div>
                <div className="skill-item">
                    <label>JAVASCRIPT</label>
                    <i class="fa-brands fa-js"></i>
                    <div className="skill-item-level" style={{width:"50%"}}></div>
                </div>
                <div className="skill-item">
                    <label>PHP</label>
                    <i class="fa-brands fa-php"></i>
                    <div className="skill-item-level" style={{width:"50%"}}></div>
                </div>
                <div className="skill-item">
                    <label>SPRING</label>
                    <i class="fa-solid fa-power-off"></i>
                    <div className="skill-item-level" style={{width:"50%"}}></div>
                </div>
                <div className="skill-item">
                    <label>REACT</label>
                    <i class="fa-brands fa-react"></i>
                    <div className="skill-item-level" style={{width:"50%"}}></div>
                </div>
                <div className="skill-item">
                    <label>ANGULAR</label>
                    <i class="fa-brands fa-angular"></i>
                    <div className="skill-item-level" style={{width:"50%"}}></div>
                </div>
                
            </div>
        );
    }
}
export default skills;