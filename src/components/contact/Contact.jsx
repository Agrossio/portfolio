import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
// import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser'

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                alert('Email sent OK!')
            }, (error) => {
                console.log(error.text);
                alert(error.text)
            });

        e.target.reset();
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>abossio@gmail.com</h5>
                        <a href='mailto:abossio@gmail.com' target={'_blank'} rel='noreferrer'>Send a message</a>
                    </article>
                    {/* <article className='contact__option'>
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Facebook Messenger</h4>
                        <h5>Matias Abossio</h5>
                        <a href='https://m.me/matias.abossio' target={'_blank'} rel='noreferrer'>Send a message</a>
                    </article> */}
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>Phone</h5>
                        <a href='https://wa.me/5491141744671' target={'_blank'} rel='noreferrer'>Send a message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Full Name' required />
                    <input type='email' name='email' placeholder='Your Email' required />
                    <textarea name='message' rows='10' placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact