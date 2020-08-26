import React,{useRef,useState} from "react";
import './tile.scss';



export default function Tile(props) {

    const tileBtn = useRef('');
    const [btnTxt,setBtnTxt] = useState(props.cardFront);
    const updateBtn = () =>{

        setBtnTxt(props.cardBack);
        props.updateGrid(tileBtn.current.id);
        tileBtn.current.disabled = true;

    }
  return (
    <>
      <button id={props.id} className ='tile-btn' ref = {tileBtn} onClick={updateBtn}>{btnTxt}</button>
    </>
  );
}


