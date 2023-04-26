import React from 'react'
import Slider from '../Slider/Slider'
import {useGetBanksQuery} from "../../redux/banksApi";

export default function LargestBanks() {

  const {data = [], isLoading = false} = useGetBanksQuery(5)

  if (isLoading) return (
    <div className="spinner-border" role="status">
      <span className="sr-only"></span>
    </div>
  )

  return (
    <section className='The_largest_banks'>
        <h1>Крупнейшие банки Республики Беларуси</h1>
        <Slider array={data} path={"banks"}/>

    </section>
  )
}
