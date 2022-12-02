import React from "react";
import styled from "styled-components";
import { UserAction } from "../type/tictactoe";

const StyledUserBoxButton = styled.button`
  font-size: 20px;
  font-weight: 900;
  min-height: 30px;
  min-width: 30px;
  flex: 1;
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

const StyledBoardRow = styled.div`
  display: flex;
`;

const Board = () => {
  // const squares = Array(9).fill(null);

  const [squares, setSquares] = React.useState<Array<UserAction>>(
    Array(9).fill(null)
  );

  const [status, setStatus] = React.useState<String>("Game not started");
  const [winner, setWinner] = React.useState<UserAction>(null);
  const [nextValue, setNextValue] = React.useState<UserAction>("X");

  function selectSquare(square: number) {
    const squaresCopy = [...squares];
    squaresCopy[square] = nextValue;
    setSquares(squaresCopy);
    setNextValue((prev) => (prev === "X" ? "O" : "X"));
  }

  React.useEffect(() => {
    console.log(squares);
  }, [squares]);

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
      <StyledStatusSection>{status}</StyledStatusSection>
      <StyledBoardRow>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </StyledBoardRow>
      <StyledBoardRow>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </StyledBoardRow>
      <StyledBoardRow>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </StyledBoardRow>
      <StyledRestartButton onClick={restart}>Restart</StyledRestartButton>
    </div>
  );
};

export default Board;
