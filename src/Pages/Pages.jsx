import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import OrderNow from './OrderNow/OrderNow';
import Home from './home/home';
import Cart from './Cart/Cart';
import PlaceOrder from './PlaceOrder/PlaceOrder';
import About from '../Components/About';
import Testimonial from '../Components/Testimonial';
import Contact from '../Components/Contact';



function Pages () {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Testimonial" element={<Testimonial />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/OrderNow" element={<OrderNow />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/order" element={<PlaceOrder />} />
    </Routes>
  )
}


export default Pages