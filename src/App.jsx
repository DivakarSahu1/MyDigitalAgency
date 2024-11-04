import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
