import React from 'react'
import './nav.css'
import { GiMushroomHouse } from 'react-icons/gi'
import { AiOutlineUser } from 'react-icons/ai'
import { MdWorkOutline } from 'react-icons/md'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'


const Nav = () => {

    const [activeNav, setActiveNav] = useState('#');

    return (
        <nav>
            <a href='#header' className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#')}><GiMushroomHouse /></a>
            <a href='#about' className={activeNav === '#about' ? 'active' : ''} onClick={() => setActiveNav('#about')}><AiOutlineUser /></a>
            <a href='#experience' className={activeNav === '#experience' ? 'active' : ''} onClick={() => setActiveNav('#experience')}><MdWorkOutline /></a>
            <a href='#services' className={activeNav === '#services' ? 'active' : ''} onClick={() => setActiveNav('#services')}><RiServiceLine /></a>
            <a href='#contact' className={activeNav === '#contact' ? 'active' : ''} onClick={() => setActiveNav('#contact')}><BiMessageSquareDetail /></a>
        </nav >
    )
}

export default Nav