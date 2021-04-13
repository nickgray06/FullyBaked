import React from 'react'
import FlipCard from './FlipCard';

export default function JokeCard({joke}) {

    return (
        <div className="card-bois">
          <FlipCard joke={joke}/>
        </div>
    )
}
