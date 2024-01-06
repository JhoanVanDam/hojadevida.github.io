import React, { Component } from 'react';
import './experience.css';
class experience extends Component {



    render() {

        const buscar = (parametro) => {
            parametro.toUpperCase();

            const busquedaURL = "https://github.com/JhoanVanDam?tab=repositories&q=&type=&language=" + parametro + "&sort=";
            window.open(busquedaURL);
        }

        const getColor = () => {
            var r = Math.floor(Math.random() * 128);
            var g = Math.floor(Math.random() * 128);
            var b = Math.floor(Math.random() * 128);

            var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';

            return color;



        }
        const experienceItem = (date, ocupation, title, description, languages, color) => {
            return (
                <div className='experience-item' style={{ backgroundColor: color }}>
                    <span className='experience-item-date'>{date}</span>
                    <span className='experience-item-ocupation'>{ocupation}</span>
                    <span className='experience-item-title'>{title}</span>
                    <span className='experience-item-description'>{description}</span>
                    <div className='experience-item-languages'>
                        {languages.map((language, index) => (
                            <span key={index} onClick={() => buscar(language)}>{language}</span>
                        ))}
                    </div>
                </div>
            );
        };

        const languages1 = ['Excel', 'SQL'];
        const languages2 = ['JavaScript', 'HTML', 'CSS', 'PHP', 'SQL'];
        const languages3 = ['JavaScript', 'HTML', 'CSS', 'JAVA', 'SQL'];




        return (
            <div>
                <h5 className='experience-title' id='experiencia'>Experiencia</h5>
                <div className='experience-main'>
                    {experienceItem('2022', 'Desarrollador de software', 'FreeLance', 'Desarrollo e integración de la página de un videojuego', languages2, getColor())}
                    {experienceItem('2023', 'Desarrollador de software', 'Academusoft', 'Trabajé en el mantenimiento y desarrollo de las IES', languages3, getColor())}
                </div>
            </div>
        );
    }
};
export default experience;