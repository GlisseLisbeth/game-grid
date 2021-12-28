import React,  { useState } from 'react';
import '../styles/Form.css';

function Form({ handleNewGame }) {
  const [size, setSize] = useState(1);
  const [color, setColor] = useState('black');

  return (
    <div id='form'>
      <span>Tamaño:</span>
        <input type='text' placeholder='#' defaultValue={1} onChange={(e) => setSize(Number(e.target.value))}/>
        <br />
        <button id='newGame' onClick={(e) => handleNewGame(e, size, color)}>Cambiar el tamaño</button>
    </div>
  );
}

export default Form;