import React from 'react'
import './portfolio.css'
import img1 from '../../assets/projects/project1.png'
import img2 from '../../assets/projects/project2.png'

const projectsArray = [
    {
        id: 1,
        image: img1,
        title: 'Bookings App',
        linkTarget: '_blank',
        github: 'https://github.com/Agrossio/bookings',
        demo: 'https://cruce-bookingapp.vercel.app/',
        demoText: 'Live Demo',
    },
    {
        id: 2,
        image: img2,
        title: 'Ecommerce - Dreamcars',
        linkTarget: '_self',
        github: 'https://github.com/Agrossio/dreamcars',
        demo: '#portfolio',
        demoText: 'To Be Deployed',
    },
    {
        id: 3,
        image: img1,
        title: 'Bookings App',
        linkTarget: '_blank',
        github: 'https://github.com/Agrossio/bookings',
        demo: 'https://cruce-bookingapp.vercel.app/',
        demoText: 'Live Demo',
    },
    {
        id: 4,
        image: img1,
        title: 'Bookings App',
        linkTarget: '_blank',
        github: 'https://github.com/Agrossio/bookings',
        demo: 'https://cruce-bookingapp.vercel.app/',
        demoText: 'Live Demo',
    },
    {
        id: 5,
        image: img1,
        title: 'Bookings App',
        linkTarget: '_blank',
        github: 'https://github.com/Agrossio/bookings',
        demo: 'https://cruce-bookingapp.vercel.app/',
        demoText: 'Live Demo',
    },
    {
        id: 6,
        image: img1,
        title: 'Bookings App',
        linkTarget: '_blank',
        github: 'https://github.com/Agrossio/bookings',
        demo: 'https://cruce-bookingapp.vercel.app/',
        demoText: 'Live Demo',
    },
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                {
                    projectsArray.map((project, id) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className='portfolio__item-image'>
                                    <img src={project.image} alt={project.title} />
                                </div>
                                <h3>{project.title}</h3>
                                <div className='portfolio__item-cta'>
                                    <a href={project.github} className='btn' target={'_blank'} rel="noreferrer">Github</a>
                                    <a href={project.demo} className='btn btn-primary' target={project.linkTarget} rel="noreferrer">{project.demoText}</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio