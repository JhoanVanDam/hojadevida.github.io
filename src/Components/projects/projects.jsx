import React, { Component } from 'react';
import imgP1 from './img/drogueria.png';
import './projects.css';
class projects extends Component {
    render() {
        const buscar = (parametro) => {
            parametro.toUpperCase();

            const busquedaURL = "https://github.com/JhoanVanDam?tab=repositories&q=&type=&language=" + parametro + "&sort=";
            window.open(busquedaURL);
        };



        const projectsItem = (img, title, description, tools) => {
            return (
                <div className='projects-item'>
                    <img src={img} alt="item-project-logo" className='projects-item-image' />
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

        const languages = ['JavaScript', 'HTML', 'CSS', 'PHP', 'SQL'];


        return (
            <div className='projects-main' >
                <h5 id='proyectos'>Proyectos</h5>
                {projectsItem(imgP1, "Droguería Nubia", "Sistema de drogurería para contabilidad de ingresos", languages)}
                {projectsItem(imgP1, "Droguería Nubia", "Sistema de drogurería para contabilidad de ingresos", languages)}
            </div>
        );
    }
};
export default projects;