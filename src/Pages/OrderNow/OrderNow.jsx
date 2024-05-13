import React from 'react'
import './OrderNow.css'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import { menu_list } from '../../Assets/assets'
import { FoodBankTwoTone } from '@mui/icons-material'
import FoodItem from '../../Components/fooditem/FoodItem'
import Navbar from '../../Components/Navbar'
import { useState } from 'react'
import Footer from '../../Components/Footer'

const OrderNow = () => {
   const [category,setCategory] = useState ("All")
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes,
        delight in the abundance of flavors as you navigate through our diverse
        menu, filled with culinary treasures waiting to be discovered.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? 'All' : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? 'active' : ''}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
      <FoodDisplay category={category} />
    </div>
  )
}

export default OrderNow
