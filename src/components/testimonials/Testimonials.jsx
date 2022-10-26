import React from 'react'
import './testimonials.css'
import avatar1 from '../../assets/profileImage/transparent.png'

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Reviews From Teammates</h5>
            <h2>Testimonials</h2>

            <div className='container testimonials__container'>
                <article className='testimonial'>
                    <div className='teammate__avatar'>
                        <img src={avatar1} alt="Natalia Bebebino" />
                    </div>
                    <h5 className='teammate__name'>Natalia Bebebino</h5>
                    <small className='teammate__review'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque laudantium tempora sit aliquam natus sunt cumque perspiciatis! Vel natus consequatur, odio assumenda itaque facilis blanditiis rem dicta eaque quos?
                    </small>
                </article>
                <article className='testimonial'>
                    <div className='teammate__avatar'>
                        <img src={avatar1} alt="Natalia Bebebino" />
                    </div>
                    <h5 className='teammate__name'>Natalia Bebebino</h5>
                    <small className='teammate__review'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque laudantium tempora sit aliquam natus sunt cumque perspiciatis! Vel natus consequatur, odio assumenda itaque facilis blanditiis rem dicta eaque quos?
                    </small>
                </article>
                <article className='testimonial'>
                    <div className='teammate__avatar'>
                        <img src={avatar1} alt="Natalia Bebebino" />
                    </div>
                    <h5 className='teammate__name'>Natalia Bebebino</h5>
                    <small className='teammate__review'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque laudantium tempora sit aliquam natus sunt cumque perspiciatis! Vel natus consequatur, odio assumenda itaque facilis blanditiis rem dicta eaque quos?
                    </small>
                </article>
                <article className='testimonial'>
                    <div className='teammate__avatar'>
                        <img src={avatar1} alt="Natalia Bebebino" />
                    </div>
                    <h5 className='teammate__name'>Natalia Bebebino</h5>
                    <small className='teammate__review'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque laudantium tempora sit aliquam natus sunt cumque perspiciatis! Vel natus consequatur, odio assumenda itaque facilis blanditiis rem dicta eaque quos?
                    </small>
                </article>
            </div>
        </section>
    )
}

export default Testimonials