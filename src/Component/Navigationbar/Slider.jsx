import React from 'react'
import {slide as Menu} from 'react-burger-menu'
import './Slider.style.css'
export default function Slider() {
  return (
      <>
       <Menu className='navbar-toggler'>
      <a className="navbar" href="/">MOBILE </a>
      <a className="menu-item" href="/salads">
      TV & AV
      </a>
      <a className="menu-item" href="/pizzas">
      APPLIANCES
      </a>
      <a className="menu-item" href="/desserts">
      IT
      </a>
      <a className="menu-item" href="/desserts">
      SHOP
      </a>
    </Menu>
      </>
  )
}
