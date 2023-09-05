import React from 'react'
// import Resume from '../../assets/cv/Matias Abossio Resume (no cel).pdf'
// import CV from '../../assets/cv/CV Matias Abossio (sin cel).pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href='https://drive.google.com/file/d/1SZtYOnz4n0kJIUIxz5a_fQA4ZVc_tZi4/view?usp=drive_link' target='_blank' rel='noreferrer' className='btn'>Resume</a>
            <a href='https://drive.google.com/file/d/1XuHCpn-H6Sq3-Mnl_OyenS5IgvVt8LkV/view?usp=drive_link' target='_blank' rel='noreferrer' className='btn'>CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CTA
