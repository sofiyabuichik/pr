import React from 'react'
import Slider from '../Slider/Slider'

export default function InstallmentCards({InstallmentCardsArray = [1, 2, 3]}) {
  return (
    <section className='InstallmentCards'>
        <h1>Карты рассрочки</h1>
        <p className='installment_h3'>Карта рассрочки — это карта, по которой пользователь может совершать покупки в магазинах, пользуясь кредитным лимитом, установленным банком, и при этом никогда (кроме случая просрочки) не платить проценты банку.</p>
        <div className='Installment_sliders'>  
            <Slider array={InstallmentCardsArray}/>
        </div>
        {/*<img className='Installment_Switches1' src='../../../../SwitchesPolygon1.png'></img>
            <img className='Installment_Switches2' src='../../../../SwitchesPolygon2.png'></img>*/}
        {/*<div className='dots_navigation'>
            <img src='../../../../../../Ellipse1.png'></img>
            <img src='../../../../../../Ellipse2.png'></img>
            <img src='../../../../../../Ellipse3.png'></img>
        </div>*/}
    </section>
  )
}
