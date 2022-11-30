import React from 'react';
import {Button} from "@mui/material";
import Slider from '../Components/Slider/Slider';

function Banks({banksArray}) {

  console.log(banksArray)

  return (
      <section id={1}>
        <h1>Банки</h1>
        {
          banksArray.map(bank => (


            <div className="bank_block">
              <div className="image_block">
                <img src={bank.image} alt=""/>
              </div>
              <div className="info_block">
                <h3>{bank.name}</h3>
                <p>{bank.description}</p>
              </div>
              <div className="divbutton">
                <Button variant="text">Подробнее</Button>
              </div>
              <div className="content_block">
                <div className="cashback_content">
                  <Slider array={bank.chashbackCards}/>
                {bank.chashbackCards.map(card =>(
                  card.name
                ))}
                </div>
              </div>
            </div>
          ))
        }
      </section>
  )
}

export default Banks;