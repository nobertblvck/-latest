import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Testimonial from './Testimonial';
import Footer from './Footer';
import Work from './Work';
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import {FiArrowRight} from "react-icons/fi";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className='primary-text'>
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <Link to="OrderNow">
          <button className='secondary-button'>
            Order Now <FiArrowRight/>
          </button>
          </Link>
        </div>
        <div className='home-image-container'>
            <img src={BannerImage} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Header