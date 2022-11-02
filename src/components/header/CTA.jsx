import React from 'react'
// import Resume from '../../assets/cv/Matias Abossio Resume (no cel).pdf'
// import CV from '../../assets/cv/CV Matias Abossio (sin cel).pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href='https://drive.google.com/file/d/1xj1jvgr2tbsGy_KWAs_9OAaERhWYdJfx/view?usp=sharing' target='_blank' rel='noreferrer' className='btn'>Resume</a>
            <a href='https://drive.google.com/file/d/1QzyIJus74Pvm_hyUDlwKXFsGlB0bMYvf/view?usp=sharing' target='_blank' rel='noreferrer' className='btn'>CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CTA