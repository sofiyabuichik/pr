import React from 'react'
import Slider from '../Slider/Slider'

export default function LargestBanks({banksArray = [1,2,3]}) {
  

  return (
    <section className='The_largest_banks'>
        <h1>Крупнейшие банки Республики Беларуси</h1>
        <Slider array={banksArray} />

    </section>
  )
}
