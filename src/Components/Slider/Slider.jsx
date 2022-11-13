import React from 'react';

function Slider({array}) {
  const [score, setScore] = React.useState(0)

  const increment = () => score < array.length-3 && setScore(score+1)
  

  const decrement = () => score > 0 && setScore(score-1)
  

  return (
    <div className='slider'> 

      <button className='arrow-back slider-btn' onClick={decrement}>
      &#8249;
      </button>
      <div className="slider-container_wrapper">
        <div className="slides-container" style={{transform: `translate(${score * -270}px)`}}>
          {array.map((bank) => {
              return ( 
                <div className='slide' key={bank}> 
                  {/*<img src='../../../../../../../belbanc.png' alt='БеларусБанк'></img>*/}
                  <h2>БеларусБанк</h2>
                  <h3>{bank}</h3>  
                </div>
              )
          })}
        </div>
      </div>
      <button className='arrow-back slider-btn' onClick={increment}>
      &#8250;
      </button>
      {
        array.length > 3 &&
        <div className="slider-dots">
          {
            array.map((el, index, arr) => index < arr.length - 2 && <div className={`slider-dot ${index === score ? "active" : null}`} onClick={() => setScore(index)}></div>)
          }
        </div>
      }
    </div>
  );
}

export default Slider;