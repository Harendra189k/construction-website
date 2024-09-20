import React from 'react'
import NavBar from './NavBar'
import Container from './Container'
import About from './About'
import Services from './Services'
import Projects from './Projects'
import CustomerReviews from './CustomerReviews'
import ContactUs from './ContactUs'
import Footer from './Footer'


const Parent = () => {
  return (
    <>
    <NavBar />
    <Container />
    <About />
    <Services />
    <Projects />
    <CustomerReviews />
    <ContactUs />
    <Footer />
    </>
  )
}

export default Parent
