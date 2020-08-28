import React,{useState} from 'react';
import CustomForm from '../CustomForm/CustomForm';
import './newgame.scss';


function NewGame({startGame}) {
    const [customRequest, setCustomeRequest] = useState(false);
    
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
                <li onClick={() => {startGame(easy)}}>Easy</li>
                <li onClick={() => {startGame(medium)}}>Medium</li>
                <li onClick={() => {startGame(hard)}}>Hard</li>
                <li onClick={() => {setCustomeRequest(true);}}>Custom</li>
            </ul>
            {customRequest &&<CustomForm startGame={startGame}/>}
        </div>
    )
}

export default NewGame
