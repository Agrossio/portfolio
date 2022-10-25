import React from 'react'
import Resume from '../../assets/cv/Matias Hernan Abossio Gonzalez Resume (no cel).pdf'
import CV from '../../assets/cv/Matias Hernan Abossio Gonzalez (sin cel).pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={Resume} download className='btn'>Download Resume</a>
            <a href={CV} download className='btn'>Descargar CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CTA