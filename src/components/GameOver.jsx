import React from 'react'
import GameState from './GameState'

const GameOver = ({gameState}) => {
    switch(gameState){
        case GameState.inProgress:
            return<></>
        case GameState.playOWins:
            return <div className='game-over'> O Wins</div>
        case GameState.playXWins:
            return <div className='game-over'> X Wins</div>
        case GameState.draw:
            return <div className='game-over'>Draw</div>
        default:
            return <></>
    }
}

export default GameOver