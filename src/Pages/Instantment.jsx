import React from 'react'
import Slider from "../Components/Slider/Slider";
import {useGetInstallmentCardsQuery} from "../redux/installmentCardApi";

function Instantment () {

  const {data = [], isLoading = false} = useGetInstallmentCardsQuery()

  return (
    <section>
      <h1>Карты рассрочки</h1>
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

export default Instantment