import React from 'react'

export default function LargestBanks({banksArray = [1,2,3]}) {
  const [score, setScore] = React.useState(0)
  function incHandler (event) {
    console.log(event)
    event.preventDefault()
    setScore(score+1)
  }

  return (
    <div className='The_largest_banks'>
        <h1>Крупнейшие банки Республики Беларуси</h1>
        <div className='slider'> 
          <button className='arrow-back'>
            Назад
          </button>
          <div className="slides-contener">
            {banksArray.map((bank) => {
                return ( 
                  <div className='slide' key={bank}> 
                    {/*<img src='../../../../../../../belbanc.png' alt='БеларусБанк'></img>*/}
                    <h2>БеларусБанк</h2>
                    <h3>{bank}</h3>  
                  </div>
                )
                })}
          </div>
          <button className='arrow-back' onClick={e => incHandler(e)}>
            Вперед
          </button>
          {score}
        </div>
    </div>
  )
}
