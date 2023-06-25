import React, { Component } from 'react';
import './experience.css';
class experience extends Component {

    render() {
        const Colors = [
            'rgb(100, 0, 95)',
            'rgb(32, 97, 83)',
            'rgb(24, 73, 14)',
            'rgb(35, 19, 109)',
            'rgb(63, 68, 14)'
        ];


        const getColor = () => {
            var posColors = Math.floor(Math.random() * (Colors.length));
            return Colors[posColors];



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

        const languages = ['JavaScript', 'HTML', 'CSS'];



        return (
            <div className='experience-main' id='experiencia'>
                {experienceItem('2022-2023', 'Desarrollador de software', 'Academusoft', 'Trabajé en el mantenimiento y desarrollo de las IES contratadas en el CIADTI', languages, getColor())}
                {experienceItem('2022-2023', 'Software Developer', 'Project XYZ', 'Worked on frontend development', languages, getColor())}
                {experienceItem('2022-2023', 'Software Developer', 'Project XYZ', 'Worked on frontend development', languages, getColor())}
                {experienceItem('2022-2023', 'Software Developer', 'Project XYZ', 'Worked on frontend development', languages, getColor())}
                {experienceItem('2022-2023', 'Software Developer', 'Project XYZ', 'Worked on frontend development', languages, getColor())}
            </div>
        );
    }
};
export default experience;