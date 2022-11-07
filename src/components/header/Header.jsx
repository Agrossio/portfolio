import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/images/profile-transparent.png'
// import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <header id='header'>
            <div className="container header__container">
                <h5>Hello World!! I am</h5>
                <h1>Matias Abossio</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA />
                {/* <HeaderSocials /> */}

                {/* <div className='me'>
                    <img src={ME} alt='Matias' />
                </div> */}

                <a href='#contact' className='scroll_down'>Scroll Down</a>

            </div>
        </header>
    )
}

export default Header