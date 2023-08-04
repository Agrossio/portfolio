import React from 'react'
import './portfolio.css'
import img1 from '../../assets/projects/project1.png'
import img2 from '../../assets/projects/project2.png'
import img3 from '../../assets/projects/project3.png'
import img4 from '../../assets/projects/project4.png'
import img5 from '../../assets/projects/project5.png'
import img6 from '../../assets/projects/project6.png'
import img7 from '../../assets/projects/project7.png'
import img8 from '../../assets/projects/project8.png'
import img9 from '../../assets/projects/project9.png'

const projectsArray = [
    {
        id: 1,
        image: img1,
        title: 'PokeChallenge',
        linkTarget: '_blank',
        github: 'https://github.com/Agrossio/pokechallenge',
        demo: 'https://pokechallenge.matiabossio.com.ar/api/v1/doc/swagger-ui/index.html',
        demoText: 'Documentation',
    },
    {
        id: 2,
        image: img2,
        title: 'Tus Horas',
        linkTarget: '_blank',
        github: 'https://github.com/Agrossio/GestionHorariosFrontend',
        demo: 'https://horarios.matiabossio.com.ar/',
        demoText: 'Live Demo',
    },
    {
        id: 3,
        image: img3,
        title: 'MatTMDB',
        linkTarget: '_blank',
        github: 'https://github.com/Agrossio/angular_mattmdb',
        demo: 'https://movies.matiabossio.com.ar/',
        demoText: 'Live Demo',
    },
    {
        id: 4,
        image: img4,
        title: 'Bookings App',
        linkTarget: '_blank',
        github: 'https://github.com/Agrossio/bookings',
        demo: 'https://cruce-bookingapp.vercel.app',
        demoText: 'Live Demo',
    },
    {
        id: 5,
        image: img5,
        title: 'Ecommerce - Dreamcars',
        linkTarget: '_self',
        github: 'https://github.com/Agrossio/dreamcars',
        demo: '#portfolio',
        demoText: 'To Be Deployed',
    },
    {
        id: 6,
        image: img6,
        title: 'TMDB',
        linkTarget: '_self',
        github: 'https://github.com/Agrossio/TMDB',
        demo: '#portfolio',
        demoText: 'To Be Deployed',
    },
    {
        id: 7,
        image: img7,
        title: 'Weather Channel',
        linkTarget: '_blank',
        github: 'https://github.com/Agrossio',
        demo: 'https://weatherchannel.matiabossio.com.ar',
        demoText: 'Live Demo',
    },
    {
        id: 8,
        image: img8,
        title: 'To Do List',
        linkTarget: '_blank',
        github: 'https://github.com/Agrossio',
        demo: 'https://todolist.matiabossio.com.ar',
        demoText: 'Live Demo',
    },
    {
        id: 9,
        image: img9,
        title: 'Color Game',
        linkTarget: '_blank',
        github: 'https://github.com/Agrossio/',
        demo: 'https://colorgame.matiabossio.com.ar/',
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
