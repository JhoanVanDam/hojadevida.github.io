import React, { Component } from 'react';
import styles from './navbarstatic.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

class navbarstatic extends Component {
    render() {
        return (
            <div className='navbarstatic-main'>
                <label id='navbarstatic-title-name'>
                    Jhoan Hernández
                </label>
                <label id='navbarstatic-degree'>
                    Tecnólogo en Redes y Sistemas Teleinformáticos
                </label>
                <label id='navbarstatic-role'>
                    Desarrollador Backend
                </label>
                <a href='#' className='navbarstatic-a'>Sobre mí</a>
                <a href='#' className='navbarstatic-a'>Experiencia</a>
                <a href='#' className='navbarstatic-a'>Proyectos</a>
                <div className='navbarstatic-social-network'>
                    <li><a href=''><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a href=''><i className="fa-brands fa-whatsapp" ></i></a></li>
                    <li><a href=''><i className="fa-brands fa-instagram" ></i></a></li>
                    <li><a href=''><i className="fa-brands fa-linkedin" ></i></a></li>
                    <li><a href=''><i className="fa-brands fa-github" ></i></a></li>
                </div>

            </div>
        );

    }
}
export default navbarstatic;