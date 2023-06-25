import React, { Component } from 'react';
import styles from './navbarstatic.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link, animateScroll as scroll } from 'react-scroll';

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
                    Desarrollador
                </label>
                <Link to="sobremi" smooth={true} duration={500} offset={-50} className='navbarstatic-a'>
                    Sobre mí
                </Link>
                <Link to="experiencia" smooth={true} duration={500} offset={-50} className='navbarstatic-a'>
                    Experiencia
                </Link>
                <Link to="habilidades" smooth={true} duration={500} offset={-50} className='navbarstatic-a'>
                    Habilidades
                </Link>
                <Link to="proyectos" smooth={true} duration={500} offset={-50} className='navbarstatic-a'>
                    Proyectos
                </Link>

                <div className='navbarstatic-social-network'>
                    <a href="https://www.facebook.com/jhoanvandam" rel="noreferrer" target="_blank"><i className="fa-brands fa-facebook fa-2x"></i></a>
                    <a href="https://wa.me/+573228407701" rel="noreferrer" target="_blank"><i className="fa-brands fa-whatsapp fa-2x" ></i></a>
                    <a href="https://www.instagram.com/jhoanvandam" rel="noreferrer" target="_blank"><i className="fa-brands fa-instagram fa-2x" ></i></a>
                    <a href="https://www.linkedin.com/in/jhoanvandam" rel="noreferrer" target="_blank"><i className="fa-brands fa-linkedin fa-2x" ></i></a>
                    <a href="https://www.github.com/jhoanvandam" rel="noreferrer" target="_blank"><i className="fa-brands fa-github fa-2x" ></i></a>
                </div>
            </div>
        );

    }
}
export default navbarstatic;