import React from 'react'
import Slider from '../Slider/Slider'
import {useGetCashbackCardsQuery} from "../../redux/cashbackCardApi";

export default function CashbackCard() {


  const {data = [], isLoading = false} = useGetCashbackCardsQuery(5)

  if (isLoading) return (
    <div className="spinner-border" role="status">
      <span className="sr-only"></span>
    </div>
  )

  return (
    <section className='ChashbekCard'>
        <h1>Кэшбэк карты</h1>
        <p className='Chashbekh3'>Кешбэк — это возврат некоторой части расходов на оплату товаров и услуг.</p>

        <Slider array={data} path={"cashback"}/>

    </section>
  )
}
