import React from 'react'
import {Button} from "@mui/material";

export default function HomeTextBlock() {
  return (
    <div className="home__text_block">
        <h1> АНАЛИЗИРУЙ И ВЫБИРАЙ ЛУЧШЕЕ!</h1>
        <h3>Не знаешь какую карту тебе лучше выбрать? Заходи и смотри, что для тебя будет Выгодно!</h3>
        <Button variant={"outlined"} id='learn-more'>Узнай больше</Button>
        <div className='img-phone'>
            <img className='img-phone-1' src='phone.png' alt={"phone.png"}></img>
            <img className='img-dialog-1' src='dialog-1.png' alt={"phone.png"}></img>
            <img className='img-dialog-2' src='dialog-2.png' alt={"phone.png"}></img>
            <img className='img-pic' src='pic.png' alt={"phone.png"}></img>
            <img className='img-circle-bg' src='circles-bg.png' alt={"phone.png"}></img>
        </div>
    </div>
  )
}
