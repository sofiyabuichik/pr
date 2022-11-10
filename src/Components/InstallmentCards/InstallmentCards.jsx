import React from 'react'

export default function InstallmentCards({InstallmentCardsArray = [1, 2, 3]}) {
  return (
    <div className='InstallmentCards'>
        <h1>Карты рассрочки</h1>
        <h3 className='installment_h3'>Карта рассрочки — это карта, по которой пользователь может совершать покупки в магазинах, пользуясь кредитным лимитом, установленным банком, и при этом никогда (кроме случая просрочки) не платить проценты банку.</h3>
        <div className='Installment_sliders'>  
            {
                InstallmentCardsArray.map((instcard) => {
                    return(<div className='slider' key={instcard}>
                        <img src='../../../../../../../aliexpress.png' alt='aliexpress'></img>
                        <h2>Name cards</h2>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        </div>
                    )
                })
            }
        </div>
        {/*<img className='Installment_Switches1' src='../../../../SwitchesPolygon1.png'></img>
            <img className='Installment_Switches2' src='../../../../SwitchesPolygon2.png'></img>*/}
        {/*<div className='dots_navigation'>
            <img src='../../../../../../Ellipse1.png'></img>
            <img src='../../../../../../Ellipse2.png'></img>
            <img src='../../../../../../Ellipse3.png'></img>
        </div>*/}
    </div>
  )
}
