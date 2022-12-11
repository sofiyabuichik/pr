import React from 'react'
import Slider from "../Components/Slider/Slider";
import {useGetCashbackCardsQuery} from "../redux/cashbackCardApi";

function Cashback() {
  const {data = [], isLoading = false} = useGetCashbackCardsQuery()
  return (
    <section>

          <h1>Кэшбэк карты</h1>

      {
        isLoading &&
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      }
          <Slider array={data}/>

    </section>
  )
}

export default Cashback