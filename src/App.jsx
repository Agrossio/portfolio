import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Stack from './components/stack/Stack'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
// import Featured from './components/featured/Featured'

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Stack />
            {/*<Featured />*/}
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}

export default App
