import React, { useEffect, useState } from 'react'
import './nav.css'
import { AiOutlineUser, AiOutlineHome } from 'react-icons/ai'
//import { MdWorkOutline } from 'react-icons/md'
import { BsStack } from 'react-icons/bs'
import { RiStarLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'

import underConstruction from '../../assets/images/under-construction/under-construction-small.png'
import HeaderSocials from '../header/HeaderSocials'


const Nav = () => {

    const [activeNav, setActiveNav] = useState('#');

    const [fadeOut, setFadeOut] = useState('under__construction');


    useEffect(() => {
        setTimeout(setFadeOut('under__construction fadeOut'), 0)
    }, [])


    return (
        <>
            <img src={underConstruction} className={fadeOut} alt='Under Construction Sign' />
            <HeaderSocials />
            <nav>
                <a href='#header' className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#')}><AiOutlineHome /></a>
                <a href='#about' className={activeNav === '#about' ? 'active' : ''} onClick={() => setActiveNav('#about')}><AiOutlineUser /></a>
                <a href='#stack' className={activeNav === '#stack' ? 'active' : ''} onClick={() => setActiveNav('#stack')}><BsStack /></a>
                <a href='#portfolio' className={activeNav === '#portfolio' ? 'active' : ''} onClick={() => setActiveNav('#portfolio')}><RiStarLine /></a>
                <a href='#contact' className={activeNav === '#contact' ? 'active' : ''} onClick={() => setActiveNav('#contact')}><BiMessageSquareDetail /></a>
            </nav >
            {/* <a href='#contact' className='scroll_down'>Scroll Down</a> */}
        </>
    )
}

export default Nav
