import React, { Component } from 'react';
import './experience.css';
class experience extends Component {

    render() {


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
                            <span key={index}>{language}</span>
                        ))}
                    </div>
                </div>
            );
        };

        const languages1 = ['JavaScript', 'HTML', 'CSS', 'JAVA', 'SQL'];
        const languages2 = ['JavaScript', 'HTML', 'CSS','PHH'];
   



        return (
            <div className='experience-main' id='experiencia'>
                {experienceItem('2022-2023', 'Desarrollador de software', 'Academusoft', 'Trabajé en el mantenimiento y desarrollo de las IES contratadas en el CIADTI', languages1, getColor())}
                {experienceItem('2022-2023', 'Desarrollador de software', 'FreeLance', 'Desarrollo e integración de la página de un videojuego', languages2, getColor())}
            </div>
        );
    }
};
export default experience;