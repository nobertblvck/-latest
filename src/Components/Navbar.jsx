import React, { useState } from 'react'
import Logo from '../Assets/Logo.svg'
import { BsCart2 } from 'react-icons/bs'
import { HiOutlineBars3 } from 'react-icons/hi2'
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import CommentRoundedIcon from '@mui/icons-material/CommentRounded'
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import { assets } from '../Assets/assets'
import { Link } from 'react-router-dom'



const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const menuOptions = [
    {
      text: 'Home',
      icon: <HomeIcon />,
    },
    {
      text: 'About',
      icon: <InfoIcon />,
    },
    {
      text: 'Testimonials',
      icon: <CommentRoundedIcon />,
    },
    {
      text: 'Contact',
      icon: <PhoneRoundedIcon />,
    },
    {
      text: 'Cart',
      icon: <ShoppingCartRoundedIcon />,
    },
    {
      text: 'Sign In',
      icon: <profile_icon />,
    },
  ]

  return (
    <nav>
      <Link to="/">
        <div className="nav-logo-container">
          <img src={Logo} alt="" />
        </div>
      </Link>
      <div className="navbar-links-container">
        <Link to="/" className="navbar-links">
          Home
        </Link>
        <Link to="/About" className="navbar-links">
          About
        </Link>
        <Link to="/Testimonial" className="navbar-links">
          Testimonials
        </Link>
        <Link to="/Contact" className="navbar-links">
          Contact
        </Link>
        <Link to="/Cart">
          <BsCart2 className="navbar-cart-icon" />
          <div className="dot"></div>
        </Link>
        <div className="navbar-right">
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
            ></input>
            <img
              className="search-icon"
              height="2rem"
              width="25rem"
              src={assets.search_icon}
            />
          </div>
          <Link to="OrderNow">
            <button className="signin-button">Order Now</button>
          </Link>
        </div>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  )
}

export default Navbar
