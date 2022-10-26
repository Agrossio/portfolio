import React from 'react'
import './portfolio.css'
import projectImg1 from '../../assets/projects/project1.png'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className='container portfolio'>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={projectImg1} alt="Bookings App" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <a href='https://github.com/Agrossio/bookings' className='btn' target={'_blank'} rel="noreferrer">Github</a>
                    <a href='https://cruce-bookingapp.vercel.app/' className='btn btn-primary' target={'_blank'} rel="noreferrer">Live Demo</a>
                </article>
            </div>
        </section>
    )
}

export default Portfolio