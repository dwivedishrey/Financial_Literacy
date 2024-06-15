import React from 'react'
import Navbar from './Components/Navbar.js'
import About from './Components/About.js'
import FAQ from './Components/Faq.js'
import ContactUS from './Components/ContactUS'
import Footer from './Components/footer.js'
import Service from './Components/Services.js'


const Main = () => {
  return (
    <>
    <Navbar/>
    <About/>
    <Service/>
    <FAQ/>
    <ContactUS/>
    <Footer/>
    </>
  )
}

export default Main