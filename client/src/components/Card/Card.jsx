import React from 'react'
import "./Card.css"

const Card = ({imageUrl,description = "default"}) => {
  return (
    <div className='wrapper'>
        <div className='img-div'>
        <img src={imageUrl} alt="image"  />
        </div>
        <div className="text-div">
            <p>{description}</p>
            <button>Click me</button>
        </div>
    </div>
  )
}

export default Card
