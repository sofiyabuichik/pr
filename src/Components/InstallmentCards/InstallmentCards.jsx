import React from 'react'
import Slider from '../Slider/Slider'
import {useGetInstallmentCardsQuery} from "../../redux/installmentCardApi";

export default function InstallmentCards() {

  const {data = [], isLoading = false} = useGetInstallmentCardsQuery()

  if (isLoading) return (
    <div className="spinner-border" role="status">
      <span className="sr-only"></span>
    </div>
  )

  return (
    <section className='InstallmentCards'>
        <h1>Карты рассрочки</h1>
        <p className='installment_h3'>Карта рассрочки — это карта, по которой пользователь может совершать покупки в магазинах, пользуясь кредитным лимитом, установленным банком, и при этом никогда (кроме случая просрочки) не платить проценты банку.</p>
        <div className='Installment_sliders'>  
            <Slider array={data} path={"installment"}/>
        </div>
    </section>
  )
}
