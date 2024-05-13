import React from 'react'
import './AppDownload.css'
import { assets } from '../../Assets/assets'
const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Download <br /> Foodie App
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload