import React from 'react'
import './about.css'
import ME from '../../assets/images/profile1.png'
import { FaAward } from 'react-icons/fa'
// import { VscFolderLibrary } from 'react-icons/vsc'
import { SiPepsi, SiMicrosoftedge } from 'react-icons/si'

const About = () => {
    return (

        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt="Matias" />
                    </div>
                </div>
                <div className='about__content'>
                    <div className='about__cards'>
                        <a href="https://www.plataforma5.la/" target={'_blank'} rel="noreferrer">
                            <article className='about__card'>
                                <FaAward className='about__icon' />
                                <h5>Plataforma 5 </h5>
                                <small>Coding Bootcamp</small>
                            </article>
                        </a>
                        <a href="https://www.pepsico.com/" target={'_blank'} rel="noreferrer">
                            <article className='about__card'>
                                <SiPepsi className='about__icon' />
                                <h5>PepsiCo</h5>
                                <small>Worked 9+ Years</small>
                            </article>
                        </a>
                        <a href="https://asjservicios.com.ar/" target={'_blank'} rel="noreferrer">
                            <article className='about__card'>
                                <SiMicrosoftedge className='about__icon' />
                                <h5>ASJ Sevicios</h5>
                                <small>Java Spring Boot Dev</small>
                            </article>
                        </a>
                    </div>
                    <p>My name is Matias Abossio, I'm a Java + Spring Boot Developer from Argentina and also a 9 year Consumer Goods Industry experienced Engineer. Nowadays, I'm working at ASJ Servicios (a Grupo Petersen Company), after finishing an in company bootcamp. On October-22 I've graduated from Plataforma 5 PERN Coding Bootcamp, adding +800 hours of coding applying Pair Programming and Agile Methodologies to my background.
                    </p>
                    <p>Regarding my way of working, my first concern is to understand the business and its needs, particularly where my actions will have influence. I believe this is the best way to offer solutions that truly add value to the client and avoid wasting effort on activities that seem impactful when they actually aren't.
                    </p>

                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About
