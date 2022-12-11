import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

export default function Slide({item, width, path}) {

  console.log(item)
  return (
    <Link to={`/${path}#${item.id}`}>
      <div
        className='slide'
        key={item}
        style={{width: `${width}px`}}
      >
        <div className="img-container">
          <img src={item.image} alt={item.name}/>
        </div>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
      </div>
    </Link>
  )
}
