import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './countryList.css';
import i18next from 'i18next';

const CountriesList = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [countries, setCountries] = useState([]);


    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch('https://restcountries.com/v2/all');
                const data = await response.json();
                setCountries(data);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };
        fetchCountries();
    }, []);


    const changeLanguage = () => {
        var element = document.getElementById('language-select');
        if (element != null && element.value !== '') {
            let language = element.value;
            language = language.substring(language.length - 3, language.length - 1)
            console.log("language: " + language);
        }
        handleClose();
    }



    return (
        <>
            <a className='navbarstatic-a' onClick={handleShow}>
                Cambiar Idioma
            </a>

            <Modal show={show} onHide={handleClose} backdropClassName="custom-backdrop" dialogClassName="custom-modal" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Idioma</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-select' id='language-select' aria-label='Default select example'>
                        <option defaultValue className="bg-light text-dark"></option>
                        {countries.map((country) => (
                            <option className="bg-light text-dark" key={country.alpha2Code}>
                                {country.name} ({country.alpha2Code})
                            </option>
                        ))}
                    </select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={changeLanguage}>
                        Guardar cambios
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CountriesList;
