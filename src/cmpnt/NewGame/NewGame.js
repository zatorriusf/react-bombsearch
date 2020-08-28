import React from 'react';
import './newgame.scss';


function NewGame({startGame}) {
    const easy = {
        rows : 9,
        cols : 9,
        bombs : 10
    }
    const medium = {
        rows : 13,
        cols : 15,
        bombs : 10
    }
    const hard = {
        rows : 16,
        cols : 30,
        bombs: 99
    }
    
    return (
        <div className='new-game'>
            <h1>Select your difficulty</h1>
            <ul>
                <li className='easy' onClick={() => {startGame(easy)}}>Easy</li>
                <li className='medium' onClick={() => {startGame(medium)}}>Medium</li>
                <li className='hard' onClick={() => {startGame(hard)}}>Hard</li>
                <li>Custom</li>
            </ul>
        </div>
    )
}

export default NewGame
