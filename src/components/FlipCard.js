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

        <div onClick={handleClick}>
          {delivery}
        </div>
      </ReactCardFlip>
  )
}
