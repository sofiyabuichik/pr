import React from 'react';
import Slide from './Slide';


function Slider({array, width = 800, path = null}) {
  const [score, setScore] = React.useState(0)

  const increment = () => score < array.length-3 ? setScore(score+1) : setScore(0)

  const decrement = () => score > 0 ? setScore(score-1) : setScore(array.length-3)

  return (
    <div className='slider'>
      {
        array.length > 3 &&
        <button className='arrow-back slider-btn' onClick={decrement}>
          &#8249;
        </button>
      }
      <div className="slider-container_wrapper" style={{width: `${width}px`}}>
        <div className="slides-container" style={{transform: `translate(${score * -269}px)`}}>
          {array.map((item) => <Slide key={item.id || Date.now()} path={path} item={item} width={width / 3 - 30}/>)}
        </div>
      </div>

      {
        array.length > 3 &&
        <>
          <button className='arrow-back slider-btn' onClick={increment}>
            &#8250;
          </button>
          <div className="slider-dots">
            {
              array.map((el, index, arr) => index < arr.length - 2 && <div className={`slider-dot ${index === score ? "active" : null}`} onClick={() => setScore(index)}></div>)
            }
          </div>
        </>

      }
    </div>
  );
}

export default Slider;