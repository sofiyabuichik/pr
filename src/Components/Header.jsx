import React from 'react'
import { BrowserRouter, Link, Route, Routes, Router } from 'react-router-dom'
import Banks from '../Pages/Banks'
import Chashbek from '../Pages/Chashbek'
import Home from '../Pages/Home'
import Rassrochka from '../Pages/Rassrochka'

export default function Header() {
  return (
    <>
        <div className="container">
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
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/chashbek" element={<Chashbek/>}/>
            <Route exact path="/rassrochka" element={<Rassrochka/>}/>
            <Route exact path="/banks" element={<Banks/>}/>
        </Routes>    
                    
    </>
  )
}
