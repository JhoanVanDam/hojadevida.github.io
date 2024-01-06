import React, { Component } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';
import CV from './Source/JhoanCV2024.pdf';

class contact extends Component {
    render() {


        const downloadCV = () => {
            const link = document.createElement('a');
            link.href = CV;
            link.download = 'JhoanCV2024.pdf';
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };



        function enviarEmail(e) {
            e.preventDefault();
            var form = document.getElementById('my-form');
            emailjs.sendForm('service_suvexlb', "template_e3g33uj", form, 'K9rso39CwpYmmU2h3').then((result) => {
                console.log(result.text);
                alert("se ha enviado");
            }, (error) => {
                console.log(error.text);
                alert("No se ha enviado");
            });

        }

        return (
            <div className='contact-main'>
                <div className='contact-title'>
                    <h5 id='contacto'>Contáctame</h5>
                </div>
                <form id='my-form' onSubmit={enviarEmail}>
                    <div className='contact-main-form'>
                        <label htmlFor='name'>Nombre</label>
                        <input required id='name' type="text" name="user_name" placeholder='Ingrese el nombre' />
                        <label htmlFor='email'>Email</label>
                        <input required id='email' type="email" name="user_email" placeholder='Ingrese el email' />
                        <label required htmlFor='message'>Mensaje</label>
                        <textarea id='message' name="user_message" placeholder='Mensaje' />
                        <button type="submit" >Enviar</button>
                    </div>
                </form>
                <div className='contact-main-cv'>
                    <h3>Descargar Curriculum</h3>
                    <i className="fa-solid fa-file" />
                    <button type='button' onClick={downloadCV}>Descargar</button>
                </div>
            </div>
        );
    }
};
export default contact;