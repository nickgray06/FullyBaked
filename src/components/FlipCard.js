import ReactCardFlip from 'react-card-flip';
import React, { useState } from 'react'

export default function FlipCard({joke}) {

  const { setup, delivery } = joke
  const [ isFlipped, setIsFlipped ] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return(
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div onClick={handleClick}>
          {setup}
        </div>

        <div onClick={handleClick} style={{color: 'rgba(222, 138, 98)'}}>
          {delivery}
        </div>
      </ReactCardFlip>
  )
}
