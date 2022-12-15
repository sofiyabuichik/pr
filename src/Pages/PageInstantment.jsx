import React from 'react'
import Slider from "../Components/Slider/Slider";
import {useGetInstallmentCardsQuery} from "../redux/installmentCardApi";
import Slide from "../Components/Slider/Slide";

function PageInstantment () {

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
      <div className="cards-container">
        <>
          {

            data && data.map((card) => <Slide item={card}/>)
            // data && data.map((card) => <Slide item={card}/>)

          }
        </>
      </div>
      {/*<Slider array={data}/>*/}
    </section>
  )
}

export default PageInstantment