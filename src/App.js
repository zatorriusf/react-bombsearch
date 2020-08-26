import React,{useState} from 'react';
import Board from './cmpnt/board/Board';
import './App.scss';

const defaultBoardState = {
  rows : 3,
  cols : 3,
  bombs : 1
}

function App() {
  const [boardState, setBoardState] = useState(defaultBoardState);

  return (
    <div className="App">
      <Board rows={boardState.rows}
             cols={boardState.cols}
             bombs={boardState.bombs}/>
    </div>
  );
}

export default App;
