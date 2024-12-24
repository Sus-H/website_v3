import { useState } from 'react';

const tiles = [
    ["A", 1],
    ["B", 4],
    ["C", 5],
    ["D", 3],
    ["E", 1],
    ["F", 5],
    ["G", 3],
    ["H", 4],
    ["I", 1],
    ["J", 7],
    ["K", 6],
    ["L", 3],
    ["M", 4],
    ["N", 2],
    ["O", 1],
    ["P", 4],
    ["Q", 8],
    ["R", 2],
    ["S", 2],
    ["T", 2],
    ["U", 4],
    ["V", 5],
    ["W", 5],
    ["X", 7],
    ["Y", 4],
    ["Z", 8],
]
console.log(tiles[1])



function generateRandomTile(){
    const boardSize = 24
    const pickedTile = tiles[Math.floor(Math.random()*boardSize)]
    const pickedLetter = pickedTile[0]
    const letterValue = pickedTile[1]
    return([pickedLetter, letterValue]) 
}

function generateBoard(){
    const board = Array.from({ length: 25 }, () => generateRandomTile());
    console.log(board)
    return(board)
}

function Board(){
    function Tile({letter, value, handleMouseDown}) {
        const classNameDefault = 'border flex justify-center'
        const classname2 = 'hover:bg-pink-900 active:bg-violet-700'
        const bgColor = ''
        return (
            <button className={classNameDefault+classname2} onMouseDown={handleMouseDown}>
                <div className='flex place-items-end'>
                    <p className='ml-4 mt-1 mb-1 text-xl'>{letter}</p>
                    <p className='ml-2 mr-1 text-xs'>{value}</p>
                </div>
            </button>
        )
    }

    const [endGame, setEndGame] = useState(false)
    const [lastRound, setLastRound] = useState(false)
    
    const [isMouseDown, setIsMouseDown] = useState(false)
    const handleMouseDown = () => {setIsMouseDown(true)}
    const board = generateBoard()
    if (lastRound == true){
        setEndGame(true)
    }
    return(
        <div className='grid grid-cols-5 max-w-md gap-1'>
            {board.map(([letter,value, isMouseDown]) => <Tile letter={letter} value={value} handleMouseDown/>)}
        </div>
    )
}

function WordDisplay() {
    return (
        <div className='text-center border p-3'>
            Boggled Word
        </div>
    )
}

export function BoggleGame(){
    return(
        <div className='border p-4 grid justify-center gap-4'>
            <WordDisplay/>
            <Board/>
        </div>
    )
}