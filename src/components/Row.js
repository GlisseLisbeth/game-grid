import React from 'react';
import Spot from './Spot';
import '../styles/Board.css';

function Row({ rowIndex, rowData, handleChangeColor }) {
  return (
    <tr>
      {rowData.map((data, i) => (
        <Spot 
        handleChangeColor={handleChangeColor}
          rowIndex={rowIndex} 
          colIndex={i} 
          data={data} 
          key={i} 
        />
      ))}
    </tr>
  );
}

export default Row;