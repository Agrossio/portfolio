import React from 'react'
import Resume from '../../assets/cv/Matias_Abossio_Resume.pdf'
import CV from '../../assets/cv/CV_Matias_Abossio.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={Resume} download target='_blank' rel='noreferrer' className='btn'>Resume</a>
            <a href={CV} download target='_blank' rel='noreferrer' className='btn'>CV</a>
            {/*<a href='https://drive.google.com/file/d/1EsxbDce-bPhahpjB2IYGaDWAN2RxWCbg/view?usp=sharing' target='_blank' rel='noreferrer' className='btn'>Resume</a>*/}
            {/*<a href='https://drive.google.com/file/d/1HLpGZ_C8YMmg-ASBsD_s41ydIJO6vsPE/view?usp=sharing' target='_blank' rel='noreferrer' className='btn'>CV</a>*/}
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CTA
