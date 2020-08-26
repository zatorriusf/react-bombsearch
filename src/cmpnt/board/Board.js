import React ,{useState} from "react";
import Tile from "../tile/Tile";
import "./Board.scss";

const defaultState = {
    rows : 3,
    cols : 3,
    bombs : 1
  }

export default function Board() {
    const [boardState, setBoardState] = useState(defaultState);
    const flippedCells = [];
    const updateGrid = (id) =>{
        const [row,col] = id.split('-');
        console.log(`value at cell [${row},${col}] ${grid[row][col]}`);
        if (grid[row][col] ==='B'){
            console.log('You lose!')
        } else {
            flippedCells.push([row,col]);
            console.log(flippedCells);
            if(flippedCells.length === (boardState.rows * boardState.cols) - boardState.bombs){
                console.log('you won!')
            }
        }
            
        
    }
    const genBoard = (cols,rows,bombs) => {
        if(bombs > cols * rows){
            return [];
        }
        if(bombs === cols * rows){
            const grid= Array(rows).fill(null).map( () => Array(cols).fill('B'));
            return grid;  
        }
        if(bombs === 0){
            const grid= Array(rows).fill(null).map( () => Array(cols).fill(0));
            return grid;  
        }
        const grid= Array(rows).fill(null).map( () => Array(cols).fill(0));
        
        
        const randoCell = () => {
            const mineX = Math.floor(Math.random() * cols);
          const mineY = Math.floor(Math.random() * rows);
          return [mineX,mineY]
        }
        const placeMines = (numMines) =>{
            if(numMines === 0){
          return;
          }
            //arr should be a two dimentional array will need to find random unfilled
          let mineX,mineY;
          
          do{
              [mineX,mineY] = randoCell();
          } while( grid[mineY][mineX] === 'B')
          const surroundingCells = [
              [mineY - 1,mineX - 1],
            [mineY - 1,mineX],
            [mineY - 1,mineX + 1],
            [mineY,mineX - 1],
            [mineY ,mineX + 1],
            [mineY + 1,mineX - 1],
            [mineY + 1,mineX],
            [mineY + 1,mineX + 1],
            ]
          
          if(grid[mineY][mineX] !== 'B'){
              //place bomb
              grid[mineY][mineX] = 'B';
            //increment value for surrounding cells
            for(let cells of surroundingCells){
                const [x,y] = cells
              //verify in bounds
              if(x < 0 || x >= rows || y < 0 || y>= cols){
              continue;
              }
              //verify the cell isn't a bomb and add one to the value
              if(grid[x][y] !=='B'){
                  grid[x][y] +=1; 
              }
            }
            placeMines(numMines - 1);
          }
        }
        placeMines(bombs);
        return grid
        }
        const grid = genBoard(boardState.cols,boardState.rows,boardState.bombs);
        const board = grid.map((row,rowIndex) => {
           return (<div className='row'>
               {row.map((card,cardIndex) => <Tile cardBack={card} 
                                                  key={`${rowIndex}-${cardIndex}`} 
                                                  id={`${rowIndex}-${cardIndex}`}
                                                  updateGrid = {updateGrid}/>)}
            </div>)
        });

    

  return (
    <div className="Board">
      <p>hi</p>
      {board}
    </div>
  );
}
