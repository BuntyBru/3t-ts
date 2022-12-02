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

const StyledMainContainer = styled.div`
  min-width: 200px;
`;

const Board = () => {
  const [squares, setSquares] = React.useState<Array<UserAction>>(
    Array(9).fill(null)
  );

  const [status, setStatus] = React.useState<Boolean>(true);
  const [winner, setWinner] = React.useState<UserAction>(null);
  const [nextValue, setNextValue] = React.useState<UserAction>("X");

  function selectSquare(square: number) {
    if (squares[square]) return;
    if (status) setStatus(false);

    if (!winner) {
      const squaresCopy = [...squares];
      squaresCopy[square] = nextValue;
      setSquares(squaresCopy);
      setNextValue((prev) => (prev === "X" ? "O" : "X"));
      setWinner(calculateWinner(squaresCopy));
    }
  }

  function restart() {
    setSquares(Array(9).fill(null));
    setWinner(null);
  }

  function renderSquare(i: number) {
    return (
      <StyledUserBoxButton onClick={() => selectSquare(i)}>
        {squares[i]}
      </StyledUserBoxButton>
    );
  }

  function calculateWinner(squares: Array<UserAction>) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const getStatus = () => {
    return !winner
      ? `${nextValue}'s chance`
      : nextValue === "X"
      ? "O has won"
      : "X has won";
  };

  return (
    <StyledMainContainer>
      <StyledStatusSection>
        {status ? "Game not started" : getStatus()}
      </StyledStatusSection>
      <div>
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
      </div>

      <StyledRestartButton onClick={restart}>Restart</StyledRestartButton>
    </StyledMainContainer>
  );
};

export default Board;
