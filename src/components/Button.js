import React from 'react'

export default function Button() {

    const refreshPage = () => {
        window.location.reload(false)
    }
    
    return (
        <div className="button-class">
            <button onClick={refreshPage}>-🍰~*420*~🍰-</button>
        </div>
    )
}
