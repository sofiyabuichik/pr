import React from 'react'
import Slider from "../Components/Slider/Slider";
import {useGetCashbackCardsQuery} from "../redux/cashbackCardApi";
import Slide from "../Components/Slider/Slide";

function PageCashback() {
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

export default PageCashback