import React, { useEffect, useState } from 'react'
import Board from './Board'
import GameOver from './GameOver'
import GameState from './GameState'
import Reset from './Reset'
import gameOverSoundAsset from '../sounds/gameOver.wav'
import clickSoundAsset from '../sounds/clickSound.wav'

const gameOverSound = new Audio(gameOverSoundAsset)
gameOverSound.volume = 0.2;
const clickSound = new Audio(clickSoundAsset)
clickSound.volume = 0.5;

const PLAYER_O = "O"
const PLAYER_X = "X"

const winningCombinations = [
    //rows
    { combo: [0, 1, 2], strikeClass: "strike-row-1" },
    { combo: [3, 4, 5], strikeClass: "strike-row-2" },
    { combo: [6, 7, 8], strikeClass: "strike-row-3" },
    //colume
    { combo: [0, 3, 6], strikeClass: "strike-column-1" },
    { combo: [1, 4, 7], strikeClass: "strike-column-2" },
    { combo: [2, 5, 8], strikeClass: "strike-column-3" },
    //digonals
    { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
    { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },

]

const checkWinner = (tiles, setStrikeClass, setGameState) => {
    for (const wining of winningCombinations) {
        const { combo, strikeClass } = wining;
        const tileValue1 = tiles[combo[0]]
        const tileValue2 = tiles[combo[1]]
        const tileValue3 = tiles[combo[2]]

        if (tileValue1 !== null && tileValue1 === tileValue2 && tileValue1 === tileValue3) {
            setStrikeClass(strikeClass)
            if(tileValue1 === PLAYER_X){
                setGameState(GameState.playXWins)
            }else{
                setGameState(GameState.playOWins)
            }
            return;
        }
    }

    const areAllTilesFill = tiles.every((tile) => tile !== null)
    if(areAllTilesFill){
        setGameState(GameState.draw)
    }
    // console.log('chexk');
}
const TicTacToe = () => {
    const [tiles, setTiles] = useState(Array(9).fill(null))
    const [playTurn, setPlayTurn] = useState(PLAYER_X)
    const [strikeClass, setStrikeClass] = useState()
    const [gameState, setGameState] = useState(GameState.inProgress)
    const handleTileClick = (index) => {
        if(gameState !== GameState.inProgress){
            return;
        }
        if (tiles[index] != null) return;
        const newTile = [...tiles]
        newTile[index] = playTurn
        setTiles(newTile)
        if (playTurn === PLAYER_X) {
            setPlayTurn(PLAYER_O)
        } else {
            setPlayTurn(PLAYER_X)
        }
    }

    const handleReset = ()=>{
        setGameState(GameState.inProgress)
        setTiles(Array(9).fill(null))
        setPlayTurn(PLAYER_X)
        setStrikeClass(null)
    }

    useEffect(() => {
        checkWinner(tiles, setStrikeClass, setGameState)
    }, [tiles])

    useEffect(()=>{
        if(tiles.some((tile)=> tile !== null)){
            clickSound.play()
        }
    },[tiles])

    useEffect(()=>{
        if(gameState !== GameState.inProgress){
            gameOverSound.play()
        }
    },[gameState])

    return (
        <div>
            <h1>Tic Tac Toe</h1>
            <Board playTurn={playTurn} tile={tiles} onTileClick={handleTileClick} strikeClass={strikeClass} />
            <GameOver gameState={gameState}/>
            <Reset gameState={gameState} onReset={handleReset}/>
        </div>
    )
}

export default TicTacToe