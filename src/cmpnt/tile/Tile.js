import React,{useRef,useState} from "react";
import './tile.scss';



export default function Tile() {

    const checkBox = useRef('');
    const [cardBack,setCardBack] = useState('');
    const updateCard = () =>{
        console.log(checkBox.current.checked);
        setCardBack(`I've been flipped`);
        checkBox.current.disabled = true;
    }
  return (
    <div>
      <label>
        <input type="checkbox" ref={checkBox} onClick={updateCard}/>
        <div className="card">
          <div className="front"></div>
          <div className="back" >{cardBack}</div>
        </div>
      </label>
    </div>
  );
}


