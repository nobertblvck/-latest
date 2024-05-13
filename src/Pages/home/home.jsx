import React, { useState } from 'react'
import './home.css'
import Navbar from '../../Components/Navbar'
import Header from '../../Components/Header'
import About from '../../Components/About'
import Work from '../../Components/Work'
import Testimonial from '../../Components/Testimonial'
import Footer from '../../Components/Footer'
import AppDownload from '../../Components/AppDownload/AppDownload'

const Home = () => {


  return (
    <>
      <div>
        <Header />
        <About />
        <Work />
        <Testimonial />
        <AppDownload />
      </div>
    </>
  )
}

export default Home