import React from 'react'
import './stack.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const frontArray = [
    {
        technology: 'HTML',
        level: '...',
    },
    {
        technology: 'CSS',
        level: '...',
    },
    {
        technology: 'Bootstrap',
        level: '...',
    },
    {
        technology: 'React.js',
        level: '...',
    },
    {
        technology: 'Next.js',
        level: '...',
    },
    {
        technology: 'Axios',
        level: '...',
    },
    {
        technology: 'Redux',
        level: '...',
    },
]

const backArray = [
    {
        technology: 'Node.js',
        level: '...',
    },
    {
        technology: 'PostgreSQL',
        level: '...',
    },
    {
        technology: 'MongoDB',
        level: '...',
    },
    {
        technology: 'Express',
        level: '...',
    },
    {
        technology: 'Sequelize',
        level: '...',
    },
    {
        technology: 'Mongoose',
        level: '...',
    },
    {
        technology: 'JWT',
        level: '...',
    },
    {
        technology: 'Nodemailer',
        level: '...',
    },
]
const Stack = () => {
    return (
        <section id='stack'>
            <h5>Main Tech Skills I Have</h5>
            <h2>Tech Stack</h2>
            <div className='container stack__container'>
                <div className='stack__frontend'>
                    <h3>Frontend Development</h3>
                    <div className='stack__content'>
                        {
                            frontArray.map(({ technology, level }, index) => {
                                return (<article className='stack__details' key={index}>
                                    <BsPatchCheckFill className='stack__details-icon' />
                                    <div>
                                        <h4>{technology}</h4>
                                        {/* <small className='text-light'>{level}</small> */}
                                    </div>
                                </article>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='stack__backend'>
                    <h3>Backend Development</h3>
                    <div className="stack__content">
                        {
                            backArray.map(({ technology, level }, index) => {
                                return (<article className='stack__details' key={index}>
                                    <BsPatchCheckFill className='stack__details-icon' />
                                    <div>
                                        <h4>{technology}</h4>
                                        {/* <small className='text-light'>{level}</small> */}
                                    </div>
                                </article>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stack