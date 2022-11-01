import React from 'react'
import './testimonials.css'
import avatarFernando from '../../assets/images/avatar-fernando.png'
import avatarNatalia from '../../assets/images/avatar-natalia.jpeg'
import avatarJuan from '../../assets/images/avatar-juan.jpeg'
import avatarStanislava from '../../assets/images/avatar-stanislava.jpeg'
import avatarJulio from '../../assets/images/avatar-julio.jpeg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonialsArray = [
    // {
    //     avatar: avatarJulio,
    //     name: 'Julio Cesar Ramírez Mendoza',
    //     link: 'https://www.linkedin.com/in/juliocodes/',
    //     review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Illum neque laudantium tempora sit aliquam natus sunt cumque perspiciatis! Vel natus consequatur, odio assumenda itaque facilis blanditiis rem dicta eaque quos?',

    // },
    {
        avatar: avatarNatalia,
        name: 'Natalia Bebebino',
        link: 'https://www.linkedin.com/in/natalia-bebebino-7b31a246/',
        review: 'I had the pleasure to get to know Matías during Plataforma 5 Coding Bootcamp. Ever since we started studying, he has proved to be a very curious and capable programmer, always asking the right questions and making sure everybody was on the same page.',

    },
    // {
    //     avatar: avatarStanislava,
    //     name: 'Stanislava Berberova',
    //     link: 'https://www.linkedin.com/in/sberberova/',
    //     review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Illum neque laudantium tempora sit aliquam natus sunt cumque perspiciatis! Vel natus consequatur, odio assumenda itaque facilis blanditiis rem dicta eaque quos?',
    // },
    // {
    //     avatar: avatarJuan,
    //     name: 'Juan Camilo Romero',
    //     link: 'https://www.linkedin.com/in/romerocam/',
    //     review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Illum neque laudantium tempora sit aliquam natus sunt cumque perspiciatis! Vel natus consequatur, odio assumenda itaque facilis blanditiis rem dicta eaque quos?',
    // },
    {
        avatar: avatarFernando,
        name: 'Fernando Sanchez Ramundo',
        link: 'https://www.linkedin.com/in/fernando-sanchez-ramundo/',
        review: 'I worked with Matias in Plataforma 5 Bootamp. We Pair Programmed several Workshops and we where teammates in the two weeks Ecommerce project called "Dreamcars". He not only has excelent technical skills but he also is a great person and a great partner to work with.',

    },
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Reviews From Teammates</h5>
            <h2>Recommendations</h2>

            <Swiper className='container testimonials__container'
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    testimonialsArray.map(({ avatar, name, link, review }, index) => {

                        return (
                            <SwiperSlide key={index} className='testimonial'>
                                <a href={link} target={'_blank'} rel="noreferrer">
                                    <div className='teammate__avatar'>
                                        <img src={avatar} alt={name} />
                                    </div>
                                    <h5 className='teammate__name'>{name}</h5>
                                </a>
                                <small className='teammate__review'>{review}</small>
                            </SwiperSlide>
                        )

                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials