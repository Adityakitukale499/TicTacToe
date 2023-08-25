import React from 'react'
import Tile from './Tile'
import Strike from './Strike'

const Board = ({ tile, onTileClick, playTurn,strikeClass }) => {
  return (
    <div className='board'>
      <Tile playTurn={playTurn} onClick={() => onTileClick(0)} value={tile[0]} className="right-border bottom-border" />
      <Tile playTurn={playTurn} onClick={() => onTileClick(1)} value={tile[1]} className="right-border bottom-border" />
      <Tile playTurn={playTurn} onClick={() => onTileClick(2)} value={tile[2]} className=" bottom-border" />
      <Tile playTurn={playTurn} onClick={() => onTileClick(3)} value={tile[3]} className="right-border bottom-border" />
      <Tile playTurn={playTurn} onClick={() => onTileClick(4)} value={tile[4]} className="right-border bottom-border" />
      <Tile playTurn={playTurn} onClick={() => onTileClick(5)} value={tile[5]} className=" bottom-border" />
      <Tile playTurn={playTurn} onClick={() => onTileClick(6)} value={tile[6]} className="right-border " />
      <Tile playTurn={playTurn} onClick={() => onTileClick(7)} value={tile[7]} className="right-border " />
      <Tile playTurn={playTurn} onClick={() => onTileClick(8)} value={tile[8]} />
      <Strike strikeClass={strikeClass}/>
    </div>
  )
}

export default Board