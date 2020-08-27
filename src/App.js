import React,{useState} from 'react';
import Board from './cmpnt/board/Board';
import './App.scss';
import Pause from './cmpnt/Pause/Pause';
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
  const handlePause = () =>{
    setPaused(!paused);
  }
  return (
    <div className="App">
      {!paused && <div className='controls'>
        <FontAwesomeIcon icon={faPauseCircle} onClick={handlePause}/>
      </div>}
      {!paused && <Board rows={boardState.rows}
             cols={boardState.cols}
             bombs={boardState.bombs}/>}
      {(paused) &&<Pause handlePause={handlePause}/>}
    </div>
  );
}

export default App;
