import React from 'react'

import {
  useNavigate,
} from "react-router-dom";

export default function Slide({item, width, path}) {
  let navigate = useNavigate();
  const clickhandler = () => {
    if (item.id) {
      return navigate(`/${path}#${item.id}`);
    }

  }

  return (
    <div 
      className='slide' 
      key={item} 
      style={{width: `${width}px`}} 
      onClick={clickhandler}
    > 
      <div className="img-container">
        <img src={item.image} alt={item.name}/>
      </div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>  
    </div>
  )
}
