import React,{useState} from 'react';
import Board from './cmpnt/board/Board';
import Pause from './cmpnt/Pause/Pause';
import NewGame from './cmpnt/NewGame/NewGame'
import './App.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPauseCircle } from "@fortawesome/free-solid-svg-icons";

const defaultBoardState = {
  rows : 3,
  cols : 3,
  bombs : 1
}

function App() {
  const [boardState, setBoardState] = useState(defaultBoardState);
  const [paused, setPaused] = useState(false);
  const [newGame, setNewGame] = useState(true);

  const handlePause = () =>{
    setPaused(!paused);
  }
  const handleNewGame = () =>{
    setPaused(!paused);
    setNewGame(true);
  }
  const startGame = (levelObj) =>{
    setBoardState(levelObj);
    setNewGame(false);
  }
  return (
    <div className="App">
      {newGame && <NewGame startGame={startGame}/>}
      {!paused && !newGame && <div className='controls'>
        <FontAwesomeIcon icon={faPauseCircle} onClick={handlePause}/>
      </div>}
      {!paused && !newGame && <Board rows={boardState.rows}
             cols={boardState.cols}
             bombs={boardState.bombs}/>}
      {(paused) && !newGame &&<Pause handlePause={handlePause} handleNewGame={handleNewGame}/>}
    </div>
  );
}

export default App;
