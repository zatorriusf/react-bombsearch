import React from 'react';
import './pause.scss';

function Pause({handlePause}) {
    return (
        <div className='pause-screen'>
            <h1>PAUSED</h1>
            <button onClick={handlePause}>Resume</button>
        </div>
    )
}

export default Pause
