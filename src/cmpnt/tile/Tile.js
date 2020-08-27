import React,{useState,useImperativeHandle,useRef} from "react";
import './tile.scss';



const Tile = (props,ref) => {

    const [btnTxt,setBtnTxt] = useState(props.cardFront);
    const btnRef = useRef();
    useImperativeHandle(ref, () =>({
      btnRef,
      updateBtn
    }))
    const updateBtn = () =>{
        btnRef.current.disabled = true;
        setBtnTxt(props.cardBack);
        props.updateGrid(props.id);
    }
  return (
    <>
      <button id={props.id} className ='tile-btn' ref = {btnRef} onClick={updateBtn}>{btnTxt}</button>
    </>
  );
}

export default React.forwardRef(Tile);
