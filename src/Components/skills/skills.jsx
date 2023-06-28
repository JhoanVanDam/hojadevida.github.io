import React, { Component } from "react";
import styles from "./skills.css";
class skills extends Component {
    render() {
        const languageBar = {
            HTML: '80%',
            JAVA: '63%',
            CSS: '60%',
            JAVASCRIPT: '30%',
            PHP: '40%',
            SPRING: '50%',
            REACT: '56%',
            ANGULAR: '60%'
        };

        return (

            <div className="skill-main-1" >
                <h5 id="habilidades">Habilidades</h5>
                <div className="skill-main">
                    <div className="skill-item" >
                        <label>HTML</label>
                        <i className="fa-brands fa-html5" style={{ color: 'rgb(246,74,29)' }}></i>
                        <div className="skill-bar">
                            <div className="skill-item-level" style={{ width: languageBar.HTML }}>
                            </div>
                            <label>{languageBar.HTML}</label>
                        </div>
                    </div>
                    <div className="skill-item">
                        <label>JAVA</label>
                        <i className="fa-brands fa-java" style={{ backgroundImage: 'linear-gradient(to bottom, red 50%, rgb(0,132,194) 50%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}></i>
                        <div className="skill-bar">
                            <div className="skill-item-level" style={{ width: languageBar.JAVA }}>
                            </div>
                            <label>{languageBar.JAVA}</label>
                        </div>
                    </div>
                    <div className="skill-item">
                        <label>CSS</label>
                        <i className="fa-brands fa-css3" style={{ color: 'blue' }}></i>
                        <div className="skill-bar">
                            <div className="skill-item-level" style={{ width: languageBar.CSS }}>
                            </div>
                            <label>{languageBar.CSS}</label>
                        </div>
                    </div>
                    <div className="skill-item">
                        <label>JAVASCRIPT</label>
                        <i className="fa-brands fa-js" style={{ color: 'yellow' }}></i>
                        <div className="skill-bar">
                            <div className="skill-item-level" style={{ width: languageBar.JAVASCRIPT }}>
                            </div>
                            <label>{languageBar.JAVASCRIPT}</label>
                        </div>
                    </div>
                    <div className="skill-item">
                        <label>PHP</label>
                        <i className="fa-brands fa-php" style={{ color: 'purple' }}></i>
                        <div className="skill-bar">
                            <div className="skill-item-level" style={{ width: languageBar.PHP }}>
                            </div>
                            <label>{languageBar.PHP}</label>
                        </div>
                    </div>
                    <div className="skill-item">
                        <label>SPRINGBOOT</label>
                        <i className="fa-solid fa-leaf" style={{ color: '#00ff00b0' }}></i>
                        <div className="skill-bar">
                            <div className="skill-item-level" style={{ width: languageBar.SPRING }}>
                            </div>
                            <label>{languageBar.SPRING}</label>
                        </div>
                    </div>
                    <div className="skill-item">
                        <label>REACT</label>
                        <i className="fa-brands fa-react" style={{ color: 'lightblue' }}></i>
                        <div className="skill-bar">
                            <div className="skill-item-level" style={{ width: languageBar.REACT }}>
                            </div>
                            <label>{languageBar.REACT}</label>
                        </div>
                    </div>
                    <div className="skill-item">
                        <label>ANGULAR</label>
                        <i className="fa-brands fa-angular" style={{ color: 'red' }}></i>
                        <div className="skill-bar">
                            <div className="skill-item-level" style={{ width: languageBar.ANGULAR }}>
                            </div>
                            <label>{languageBar.ANGULAR}</label>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
export default skills;