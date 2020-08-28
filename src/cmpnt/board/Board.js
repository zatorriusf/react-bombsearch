import React,{createRef}  from "react";
import Tile from "../tile/Tile";
import "./Board.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb,faFlag,faQuestionCircle } from "@fortawesome/free-solid-svg-icons";



export default function Board({cols,rows,bombs}) {
    const flippedCells = [];
    const cellRefs= Array(rows).fill(null).map( () => Array(cols).fill(null).map(() => createRef()));

    const isValidCell = (curRow,curCol) =>{
      return (curRow >=0 && curRow < rows && curCol >=0 &&curCol < cols);
    }
    const updateGrid = (id) =>{
        const [row,col] = id.split('-').map((coord) => Number(coord));
        if(cellRefs[row][col].current.disabled){
          return;
        }
        cellRefs[row][col].current.disabled = true;
        
        const surroundingCells = [
        [row - 1,col - 1],
        [row - 1,col],
        [row - 1,col + 1],
        [row,col - 1],
        [row ,col + 1],
        [row + 1,col - 1],
        [row + 1,col],
        [row + 1,col + 1],
        ].filter(elm => {
          const [x,y] = elm;
          return isValidCell(x,y) && !cellRefs[x][y].current.disabled
        });
        
        console.log(`value at cell [${row},${col}] ${grid[row][col]}`);
        if (grid[row][col] ==='B'){
            console.log('You lose!')
        } else {
            flippedCells.push([row,col]);
            if(flippedCells.length === (rows * cols) - bombs){
              console.log('you won!')
          }
            if(grid[row][col] === 0){
              for(let cell of surroundingCells){
                const[surRow,surCol] = cell;
                if(isValidCell(surRow,surCol) && !cellRefs[surRow][surCol].current.disabled){
                    cellRefs[surRow][surCol].current.updateBtn();
                }
              }
            }
        }
            
        
    }
    const genBoard = (cols,rows,bombs) => {
        //if we're given more bombs than cells
        if(bombs > cols * rows){
            return [];
        }
        //if we get the same number of bombs as cells
        if(bombs === cols * rows){
            const grid= Array(rows).fill(null).map( () => Array(cols).fill('B'));
            return grid;  
        }
        //if we get no bombs 
        if(bombs === 0){
            const grid= Array(rows).fill(null).map( () => Array(cols).fill(0));
            return grid;  
        }
        const grid= Array(rows).fill(null).map( () => Array(cols).fill(0));
        
        const bombPlacement = () =>{
          const bombLocations = [];
          do{
            const y = Math.floor(Math.random() * rows);
            const x = Math.floor(Math.random() * cols);
            if(!bombLocations.includes([y,x])){
              bombLocations.push([y,x]);
            }
          } while(bombLocations.length !== bombs)
          return bombLocations;
        }
        const bombLoactions = bombPlacement();

        for(const bomb of bombLoactions){
          const [y,x] = bomb;
          grid[y][x] = 'B';
          const surroundingCells = [
            [y - 1,x - 1],
            [y - 1,x],
            [y - 1,x + 1],
            [y,x - 1],
            [y ,x + 1],
            [y + 1,x - 1],
            [y + 1,x],
            [y + 1,x + 1],
            ].filter(elm => {
              const [y,x] = elm;
              return isValidCell(y,x) && grid[y][x] !== 'B' 
            });

            for(const cell of surroundingCells){
              const [y,x] = cell;
              grid[y][x]++;
            }
        }
        return grid
        }
        const grid = genBoard(cols,rows,bombs);
        

    

  return (
    <div className="Board">
      {grid.map((row,rowIndex) => {
           return (<div className='row'>
               {row.map((card,cardIndex) => {
                 
                 const tileVal = card === 'B' ? <FontAwesomeIcon icon={faBomb} className='bomb'/>: card;
               return <Tile cardBack={tileVal} 
                                                  key={`${rowIndex}-${cardIndex}`} 
                                                  id={`${rowIndex}-${cardIndex}`}
                                                  updateGrid = {updateGrid}
                                                  ref={cellRefs[rowIndex][cardIndex]}/>})}
            </div>)
        })}
      <FontAwesomeIcon icon={faBomb} className='bomb'/>
      <FontAwesomeIcon icon={faFlag} className='mark flag'/>
      <FontAwesomeIcon icon={faQuestionCircle} className='mark question'/>
    </div>
  );
}
