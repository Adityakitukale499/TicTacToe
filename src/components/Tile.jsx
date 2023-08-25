import React from 'react'

const Tile = ({className, value, onClick, playTurn}) => {
    let hoverClass = null
    if(value == null && playTurn != null){
        hoverClass = `${playTurn.toLowerCase()}-hover`;
    }
  return (
    <div onClick={onClick} className={`tile ${className} ${hoverClass}`}>{value}</div>
  )
}

export default Tile