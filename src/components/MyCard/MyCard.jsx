import React from 'react';

import './MyCard.css';

function Card({image, title, description}) {
  return (
    <div className='card' style={{backgroundImage: image}}>
        <img src={image} alt={title} />
        <h2 className='description'>{description}</h2>
        <p className='title'>{title}</p>
    </div>
  )
}

export default Card