import React, { Component } from 'react';
import './experience.css';
class experience extends Component {

    render() {
        const experienceItem = (date, ocupation, title, description, languages) => {
            return (
                <div className='experience-item'>
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
                {experienceItem('2022-2023', 'Software Developer', 'Project XYZ', 'Worked on frontend development', languages)}
                {experienceItem('2022-2023', 'Software Developer', 'Project XYZ', 'Worked on frontend development', languages)}
                {experienceItem('2022-2023', 'Software Developer', 'Project XYZ', 'Worked on frontend development', languages)}
                {experienceItem('2022-2023', 'Software Developer', 'Project XYZ', 'Worked on frontend development', languages)}
                {experienceItem('2022-2023', 'Software Developer', 'Project XYZ', 'Worked on frontend development', languages)}
            </div>
        );
    }
};
export default experience;