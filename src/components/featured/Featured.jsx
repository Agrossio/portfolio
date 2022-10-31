import React from 'react'
import './featured.css'
import { BiCheck } from 'react-icons/bi'

const Featured = () => {
    return (
        <section id='featured'>
            <h5>My Last Projects</h5>
            <h2>Featured</h2>
            <div className='container featured__container'>
                <article className='project'>
                    <div className='project__head'>
                        <h3>UX/UI</h3>
                    </div>
                    <ul className='project__list'>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF UX/UI */}
                <article className='project'>
                    <div className='project__head'>
                        <h3>Web Development</h3>
                    </div>
                    <ul className='project__list'>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF WEB DEVELOPMENT */}
                <article className='project'>
                    <div className='project__head'>
                        <h3>Content Creation</h3>
                    </div>
                    <ul className='project__list'>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='project__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF CONTENT CREATION */}
            </div>
        </section>
    )
}

export default Featured