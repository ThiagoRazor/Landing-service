import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

emailjs.init('uPPA88JUU8uq3WJJ9');



export const sendForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    let name = formData.get('name') as string;
    let email = formData.get('email') as string;
    let phone = formData.get('phone') as string;
    let address = formData.get('address') as string;
    let message = formData.get('message') as string;
    let city = formData.get('city') as string;

    const form = event.currentTarget as HTMLFormElement;

    const templateParams = {
        from: email,
        to: 'thiago.silva@ice.ufjf.br',
        subject: 'Dados do formulário',
        cc: email,
        name: name,
        email: email,
        phone: phone,
        address: address,
        message: message,
        city: city
    }


    emailjs.send('service_cn86eb7', 'template_ln3k9ld', templateParams)
        .then((response) => {
            console.log('Formulário enviado com sucesso!', response.status, response.text);
            const successDiv = document.createElement('div');
            successDiv.innerText = 'Form was sent successfully!';
            successDiv.classList.add('yAlert');
            document.body.appendChild(successDiv);
            form.reset();
            document.body.onclick = function (event) {
                document.body.removeChild(successDiv);
            }
        }, (error) => {
            console.log('Erro ao enviar o formulário', error);
            const errorDiv = document.createElement('div');
            errorDiv.innerText = 'Error sending the form!';
            errorDiv.classList.add('nAlert');
            document.body.appendChild(errorDiv);
            document.body.onclick = function (event) {
                document.body.removeChild(errorDiv);
            }
        });


}
