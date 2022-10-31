import React from 'react'
import './featured.css'
import { BiCheck } from 'react-icons/bi'

const Featured = () => {
    return (
        <section id='featured'>
            <h5>My Last Projects Stack</h5>
            <h2>Featured</h2>
            <div className='container featured__container'>
                <article className='project'>
                    <div className='project__head'>
                        <h3>Bookings App</h3>
                    </div>
                    <ul className='project__list'>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Node.js</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Next.js</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Mongoose</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>JWT</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Bcrypt</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>NextAuth</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Nodemailer</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Async-lock</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>React</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Axios</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Chakra-UI</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>React-Calendar</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Trello</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Figma</p>
                        </li>
                    </ul>
                </article>
                {/* END OF BOOKINGS APP */}
                <article className='project'>
                    <div className='project__head'>
                        <h3>Ecommerce</h3>
                    </div>
                    <ul className='project__list'>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Axios</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Bcryptjs</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Sequelize</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Express</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>JWT</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Nodemailer</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>React</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Bootstrap</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Axios</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Redux</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Trello</p>
                        </li>
                    </ul>
                </article>
                {/* END OF ECOMMERCE */}
                <article className='project'>
                    <div className='project__head'>
                        <h3>MatMDB</h3>
                    </div>
                    <ul className='project__list'>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Node.js</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Bcrypt</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Express</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>JWT</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Sequelize</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Bootstrap</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Axios</p>
                        </li>
                    </ul>
                </article>
                {/* END OF MATMDB */}
            </div>
        </section>
    )
}

export default Featured