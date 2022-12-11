import React from 'react'
import { Link} from 'react-router-dom'


export default function Header() {
  return (
    <>
        <div className="header">
            <div className='nav__image_logo'>
                <img src='logo.png' alt={"logo"}></img>
            </div>
            <ul className='ul-links'>
                <Link to="/" children="Главная"/>   
                <Link to="/banks" children="Банки"/>
                <Link to="/cashback" children="Кэшбэк карты"/>
                <Link to="/installment" children="Карта рассрочки"/>
            </ul>
            <div className="nav__search_container">
                <input className='nav_input_search' type="text" placeholder="Search"/>
            </div>
        </div>
           
                    
    </>
  )
}
