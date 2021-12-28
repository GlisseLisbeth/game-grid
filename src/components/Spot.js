import React from 'react';
import '../styles/Board.css';

function Spot({ handleChangeColor, rowIndex, colIndex, data}) {
  return (
    <td onClick={() => handleChangeColor(rowIndex, colIndex)} style={{backgroundColor:data}}></td>
  );
}

export default Spot;