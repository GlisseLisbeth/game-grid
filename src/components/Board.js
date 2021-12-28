import React from 'react';
import Row from './Row';
import '../styles/Board.css';

function Board({ board, handleChangeColor }) {
  return (
    <div id='grid'>
      <table id='board'>
        <tbody>
          {board.map((row, i) => <Row handleChangeColor={handleChangeColor} rowIndex={i} rowData={row} key={i} />)}
        </tbody>
      </table>
    </div>
  );
}

export default Board;