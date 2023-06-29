import React, { Component } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';
class contact extends Component {
    render() {

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
            </div>
        );
    }
};
export default contact;