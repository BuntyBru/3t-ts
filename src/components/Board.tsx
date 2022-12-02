import React from "react";
import styled from "styled-components";
import { UserAction } from "../type/tictactoe";

const StyledUserBoxButton = styled.button`
  padding: 15px;
`;

const StyledRestartButton = styled.button`
  padding: 5px;
  font-weight: 900;
  margin-top: 20px;
`;

const StyledStatusSection = styled.div`
  margin-bottom: 20px;
  font-weight: 900;
  font-size: 16px;
`;

const Board = () => {
  // const squares = Array(9).fill(null);

  const [squares, setSquares] = React.useState<Array<UserAction>>(
    Array(9).fill(null)
  );
  // 🐨 We'll need the following bits of derived state:
  // - nextValue ('X' or 'O')
  // - winner ('X', 'O', or null)
  // - status (`Winner: ${winner}`, `Scratch: Cat's game`, or `Next player: ${nextValue}`)

  function selectSquare(square: number) {
    console.log(square);
  }

  function restart() {}

  function renderSquare(i: number) {
    return (
      <StyledUserBoxButton onClick={() => selectSquare(i)}>
        {squares[i]}
      </StyledUserBoxButton>
    );
  }

  return (
    <div>
      {/* 🐨 put the status in the div below */}
      <StyledStatusSection>STATUS</StyledStatusSection>
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
      <StyledRestartButton onClick={restart}>Restart</StyledRestartButton>
    </div>
  );
};

export default Board;
