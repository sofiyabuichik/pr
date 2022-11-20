import React from 'react';
import Slide from './Slide';

function Slider({array, width = 800, path}) {
  const [score, setScore] = React.useState(0)

  const increment = () => score < array.length-3 && setScore(score+1)
  

  const decrement = () => score > 0 && setScore(score-1)
  

  return (
    <div className='slider'> 

      <button className='arrow-back slider-btn' onClick={decrement}>
      &#8249;
      </button>
      <div className="slider-container_wrapper" style={{width: `${width}px`}}>
        <div className="slides-container" style={{transform: `translate(${score * -270}px)`}}>
          {array.map((item) => <Slide path={path} item={item} width={width / 3 - 30}/>)}
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