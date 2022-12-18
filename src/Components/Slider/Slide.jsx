import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { useInView } from 'react-intersection-observer';
import {Skeleton} from "@mui/material";

export default function Slide({item, width, path}) {

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <Link to={path ? `/${path}#${item.id}` : "#"}>
      <div
        id={item.id}
        className='slide'
        key={item}
        style={{width: `${width}px`}}
      >
        <div className="img-container" ref={ref}>
          {
            inView ? <img src={item.image} alt={item.name}/> : <Skeleton variant="rectangular" width={200} height={150} />
          }
        </div>
        <div className="slide-text">
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
      </div>
    </Link>
  )
}
