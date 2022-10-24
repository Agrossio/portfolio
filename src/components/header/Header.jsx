import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Foto 3.png'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Matias Abossio</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA />

                <div className="me">
                    <img src={ME} alt="Matias" />
                </div>

                <a href="#contact" className='scroll_down'>Scroll Down</a>

            </div>
        </header>
    )
}

export default Header