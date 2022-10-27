import React from 'react'
import './contact.css'
import { TbMailFast } from 'react-icons/tb'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact_options'>
                    <article className='contact__option'>
                        <TbMailFast />
                        <h4>Email</h4>
                        <h5>abossio@gmail.com</h5>
                        <a href='mailto:abossio@gmail.com' target={'_blank'} rel='noreferrer'>Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine />
                        <h4>Messenger</h4>
                        <h5>Matias Abossio</h5>
                        <a href='https://m.me/matias.abossio' target={'_blank'} rel='noreferrer'>Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp />
                        <h4>Whatsapp</h4>
                        <h5>abossio@gmail.com</h5>
                        <a href='https://wa.me/5491141744671' target={'_blank'} rel='noreferrer'>Send a message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form action=''>
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