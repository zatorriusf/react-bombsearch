import React,{useRef} from 'react';
import './customform.scss'

function CustomForm({startGame}) {
    const customRowEl = useRef();
    const customColEl = useRef();
    const customBombsEl = useRef();
    return (
        <form className='custom-form'>
                    <section className='custom-form__section'><label htmlFor='rows'>Rows</label><input ref={customRowEl} type="number" min='0' max='30'/></section>
                    <section className='custom-form__section'><label htmlFor='rows'>Cols</label><input ref={customColEl} type="number" min='0' max='30'/></section>
                    <section className='custom-form__section'><label htmlFor='rows'>Bombs</label><input ref={customBombsEl} type="number" min='0' max='900'/></section>
                    <button onClick={() => {startGame({rows:Number(customRowEl.current.value),
                                                cols:Number(customColEl.current.value),
                                                bombs:Number(customBombsEl.current.value)})}}>Start Custom Game</button>
                </form>
    )
}

export default CustomForm
