import React from 'react'
// import Resume from '../../assets/cv/Matias Abossio Resume (no cel).pdf'
// import CV from '../../assets/cv/CV Matias Abossio (sin cel).pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href='https://drive.google.com/file/d/1yZ1ZV0vAJ74czWEvnyX5wROT1mkHskmH/view?usp=drive_link' target='_blank' rel='noreferrer' className='btn'>Resume</a>
            <a href='https://drive.google.com/file/d/117LOFvHhus9b1STxcb32g_AX1bDl40ZT/view?usp=drive_link' target='_blank' rel='noreferrer' className='btn'>CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CTA