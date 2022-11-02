import React from 'react'
import './nav.css'
import { GiMushroomHouse } from 'react-icons/gi'
import { AiOutlineUser } from 'react-icons/ai'
//import { MdWorkOutline } from 'react-icons/md'
import { BsStack } from 'react-icons/bs'
import { RiStarLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'
import underConstruction from '../../assets/images/under-construction/under-construction-small.png'
import HeaderSocials from '../header/HeaderSocials'


const Nav = () => {

    const [activeNav, setActiveNav] = useState('#');

    return (
        <>
            <img src={underConstruction} className='under__construction' alt='Under Construction Sign' />
            <HeaderSocials />
            <nav>
                <a href='#header' className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#')}><GiMushroomHouse /></a>
                <a href='#about' className={activeNav === '#about' ? 'active' : ''} onClick={() => setActiveNav('#about')}><AiOutlineUser /></a>
                <a href='#stack' className={activeNav === '#stack' ? 'active' : ''} onClick={() => setActiveNav('#stack')}><BsStack /></a>
                <a href='#featured' className={activeNav === '#featured' ? 'active' : ''} onClick={() => setActiveNav('#featured')}><RiStarLine /></a>
                <a href='#contact' className={activeNav === '#contact' ? 'active' : ''} onClick={() => setActiveNav('#contact')}><BiMessageSquareDetail /></a>
            </nav >
            {/* <a href='#contact' className='scroll_down'>Scroll Down</a> */}
        </>
    )
}

export default Nav