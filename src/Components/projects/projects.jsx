import React, { Component } from 'react';
import imgP1 from './img/drogueria.webp';
import imgP2 from './img/miel.webp';
import imgP3 from './img/ValorantApi.webp';
import imgP4 from './img/phpapp.webp';
import imgP5 from './img/mailhack.webp';
import imgP6 from './img/ValorantApi.webp';
import imgP7 from './img/hojadevida.webp';
import './projects.css';
class projects extends Component {
    render() {
        const buscar = (parametro) => {
            parametro.toUpperCase();

            const busquedaURL = "https://github.com/JhoanVanDam?tab=repositories&q=&type=&language=" + parametro + "&sort=";
            window.open(busquedaURL);
        };

        const llevarProyecto = (parametro) => {
            parametro.toUpperCase();

            const busquedaURL = "https://github.com/JhoanVanDam/" + parametro ;
            window.open(busquedaURL);
        };

        const projectsItem = (img, name, title, description, tools) => {
            return (
                <div className='projects-item'>
                    <img src={img} alt="item-project-logo" className='projects-item-image' onClick={() => llevarProyecto(name)} />
                    <span className='projects-item-title'>{title}</span>
                    <span className='projects-item-description'>{description}</span>
                    <div className='project-item-tools'>
                        {tools.map((tool, index) => (
                            <span key={index} onClick={() => buscar(tool)}>{tool}</span>
                        ))}
                    </div>
                </div>
            );
        };

        const languages1 = ['SQL', 'JAVA'];
        const languages2 = ['JavaScript', 'HTML', 'CSS', 'React'];
        const languages3 = ['JAVA', 'HIBERNATE', 'SPRINGBOOT', 'MAVEN', 'JPA', 'SPRING SECURITY', 'JWT', 'SQL'];
        const languages4 = ['JavaScript', 'HTML', 'CSS', 'PHP', 'SQL'];
        const languages5 = ['JAVA', 'GMAIL','MAVEN'];
        const languages6 = ['JAVA', 'HIBERNATE', 'SPRINGBOOT', 'MAVEN', 'JPA', 'SPRING SECURITY', 'JWT', 'SQL'];
        const languages7 = ['JavaScript', 'HTML', 'CSS', 'React'];


        return (
            <div className='projects-main' >
                <h5 id='proyectos'>Proyectos</h5>
                {projectsItem(imgP1, "Drogueria", "Droguería Nubia", "Sistema de drogurería para contabilidad de ingresos", languages1)}
                {projectsItem(imgP2, "MielView.github.io", "Vista Miel", "Vista hecha en react sobre el proyecto de miel de una universidad", languages2)}
                {projectsItem(imgP3, "-Valorant-Api", "Valorant API", "Api Rest hecha en Java con Spring Boot, trae la información sobre el juego Valorant", languages3)}
                {projectsItem(imgP4, "GamePage-Php-", "Game Page", "CMS hecho en php nativo MVC, trata sobre la pagina de un juego principalmente. También se puede cambiar a otra temática", languages4)}
                {projectsItem(imgP5, "MailHack", "MailHack", "Vírus hecho en java nativo, el cual si lo abres me envia captura de tu pantalla cada 10 segundos", languages5)}
                {projectsItem(imgP6, "Notas-Api", "Notas Api", "Api Rest hecha en Java con Spring Boot, permite a los usuarios iniciar sesión y crear su cuenta. La principal función es guardar apuntes para cada usuario", languages6)}
                {projectsItem(imgP7, "hojadevida.github.io", "Hoja de vida", "Hoja de vida en la que expongo mis proyectos, habilidades y sobre mí. Hecha en react.", languages7)}
            </div>
        );
    }
};
export default projects;