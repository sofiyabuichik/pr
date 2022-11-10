import React from 'react'

export default function HomeTextBlock() {
  return (
    <div className="home__text_block">
        <h1> АНАЛИЗИРУЙ - ВЫГОДНО ПРОСТО ВЫБЕРИТЕ ЛУЧШЕЕ!</h1>
        <h3>Не знаешь какую карту тебе лучше выбрать? Заходи и смотри, что для тебя будет Выгодно!</h3>
        <button className='button-gl-1'>Узнай больше</button>
        <div className='img-phone'>
            <img className='img-phone-1' src='phone.png'></img>
            <img className='img-dialog-1' src='dialog-1.png'></img>
            <img className='img-dialog-2' src='dialog-2.png'></img>
            <img className='img-pic' src='pic.png'></img>
            <img className='img-circle-bg' src='circles-bg.png'></img>
        </div>
    </div>
  )
}
