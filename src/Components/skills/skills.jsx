import React from "react";
import "./skills.css";

const Skills = () => {
    const skillsData = [
        { name: "HTML", icon: "fa-brands fa-html5", color: "rgb(246,74,29)" },
        { name: "JAVA", icon: "fa-brands fa-java", gradient: "linear-gradient(to bottom, red 50%, rgb(0,132,194) 50%)", color: "transparent" },
        { name: "CSS", icon: "fa-brands fa-css3", color: "blue" },
        { name: "JAVASCRIPT", icon: "fa-brands fa-js", color: "yellow" },
        { name: "PHP", icon: "fa-brands fa-php", color: "purple" },
        { name: "SPRINGBOOT", icon: "fa-solid fa-leaf", color: "#00ff00b0" },
        { name: "REACT", icon: "fa-brands fa-react", color: "lightblue" },
        { name: "ANGULAR", icon: "fa-brands fa-angular", color: "red" }
    ];

    return (
        <div className="skill-main-1">
            <h5 id="habilidades">Habilidades</h5>
            <div className="skill-main">
                {skillsData.map((skill, index) => (
                    <div className="skill-item" key={index}>
                        <label>{skill.name}</label>
                        <i className={skill.icon} style={{ color: skill.color, backgroundImage: skill.gradient, backgroundClip: 'text', WebkitBackgroundClip: 'text' }}></i>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
