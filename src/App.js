import React, { Component } from 'react';
import Board from './components/Board';
import Form from './components/Form';
import './styles/App.css';

const colorConfig = {
  color1: 'black',
  color2: 'blue',
  color3: 'green',
};

const defaultState = {
  board: null,
  color: colorConfig.color1,
  selectedColor: colorConfig.color1,
  size: 1,
};

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      ...defaultState,
    };
  }

  createBoard = (size, color) => {
    const board = [];
    for (let i = 0; i < size; i++) {
      board.push(Array(size).fill(color));
    }
    return board;
  }

  handleChangeColor = (row, col) => {
    const { board, selectedColor } = this.state;
    board[row][col] = selectedColor;
    this.setState({
      ...this.state,
      board
    });
  }

  handleSelectedColor = (e) => {
    const selectedColor = e.target.getAttribute("data-color");
    this.setState({
      ...this.state,
      selectedColor
    });
  }

  handleNewGame = (e, size, color) => {
    e.preventDefault();
    const board = this.createBoard(size, color);

    if (size < 1 || isNaN(size)) {
      alert('Ingrese un número mayor que 1.');
      return;
    }

    this.setState({
      ...defaultState,
      size, 
      board,
      color
    });

  }

  componentDidMount() {
    const board = this.createBoard(defaultState.size, defaultState.color);
    this.setState({
      ...defaultState,
      board
    });
  }

  render() {
    return (
      <div className="App">
          <h1>Grid Game de tamaño {this.state.size}</h1>
          <Form handleNewGame={this.handleNewGame} />
          {
            this.state.board
              ? <Board board={this.state.board} handleChangeColor={this.handleChangeColor}/> 
              : null
          }
          <h5>Selecciona un color</h5>
          <div className="box">
            <button data-color="black" className={`boxColor ${this.state.selectedColor === colorConfig.color1 ? 'selected': ''}`} style={{backgroundColor: colorConfig.color1}} onClick={this.handleSelectedColor}>

            </button>
            <button data-color="blue" className={`boxColor ${this.state.selectedColor === colorConfig.color2 ? 'selected': ''}`} style={{backgroundColor: colorConfig.color2}} onClick={this.handleSelectedColor}>

            </button>
            <button data-color="green" className={`boxColor ${this.state.selectedColor === colorConfig.color3 ? 'selected': ''}`} style={{backgroundColor: colorConfig.color3}} onClick={this.handleSelectedColor}>

            </button>
          </div>
      </div>
    );
  };
} 

export default App;