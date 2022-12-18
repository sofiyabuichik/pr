import React from 'react'
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <section className='foter_navigation_home_page'>
        <div className="logo-wrapper">
          <img src='../../../logo.png' alt='logo'/>
          <h4>Анализируй - Выгодно <br/>Просто выбирите лучшее!</h4>
        </div>
        <div className="link_wrapper">
          <Link to="/" children="Главная"/>
          <Link to="/banks" children="Банки"/>
          <Link to="/cashback" children="Кэшбэк карты"/>
          <Link to="/installment" children="Карта рассрочки"/>
        </div>
    </section>
  )
}
