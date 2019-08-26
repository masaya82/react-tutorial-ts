import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

interface SquareProps {
  value: string;
  onClick: () => void;
}

const Square = (props: SquareProps) => {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
};

const Board = () => {
  let [squares, setSquares] = useState<string[]>(Array(9).fill(null));
  let [xIsNext, setXIsNext] = useState<boolean>(true);
  const handleClick = (i: number) => {
    const squaresCurrent = squares.slice();
    squaresCurrent[i] = xIsNext ? "X" : "O";
    setSquares((squares = squaresCurrent));
    setXIsNext(!xIsNext);
  };
  const renderSquare = (i: number) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  let status = "Next player: " + (xIsNext ? "X" : "O");

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

const Game = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
