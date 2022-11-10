import React from 'react'

export default function ChashbackCard({ChashbackCardArray = [1, 2, 3]}) {
  return (
    <div className='ChashbekCard'>
        <h1>Кэшбэк карты</h1>
        <h3 className='Chashbekh3'>Кешбэк — это возврат некоторой части расходов на оплату товаров и услуг.</h3>
        <div className='Chashback_sliders'>
            {
                ChashbackCardArray.map((chashcard) => {
                    return(
                        <div className='slider' key={chashcard}>
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
