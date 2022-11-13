import React from 'react'
import { BrowserRouter, Link} from 'react-router-dom'


export default function Header() {
  return (
    <>
        <div className="header">
            <div className='nav__image_logo'>
                <img src='logo.png'></img>
            </div>
            <ul className='ul-links'>
                <Link to="/" children="Главная"/>   
                <Link to="/chashbek" children="Кэшбэк карты"/>
                <Link to="/rassrochka" children="Карта рассрочки"/>
                <Link to="/banks" children="Банки"/>
            </ul>
            <div className="nav__search_container">
                <input className='nav_inpyt_search' type="text" placeholder="Search"/>
            </div>
        </div>
           
                    
    </>
  )
}