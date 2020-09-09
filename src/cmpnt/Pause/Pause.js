import React from 'react';
import './pause.scss';

function Pause({handlePause,handleNewGame}) {
    return (
        <div className='pause-screen'>
            <h1>PAUSED</h1>
            <button onClick={handlePause}>Resume</button>
            <button onClick={handleNewGame}>New Game</button>
        </div>
    )
}

export default Pause
