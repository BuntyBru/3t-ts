import React from "react";
import styled from "styled-components";
import { UserAction, HistoryObj } from "../type/tictactoe";

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
  min-width: 420px;
  display: flex;
  gap: 20px;
  align-items: center;
`;

const StyledPlaySection = styled.div`
  flex: 1;
`;

const StyledHistorySection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Board = () => {
  const [squares, setSquares] = React.useState<Array<UserAction>>(
    Array(9).fill(null)
  );

  const [status, setStatus] = React.useState<Boolean>(true);
  const [winner, setWinner] = React.useState<UserAction>(null);
  const [nextValue, setNextValue] = React.useState<UserAction>("X");
  const [history, setHistory] = React.useState<Array<HistoryObj>>([]);
  const [currentStep, setCurrentStep] = React.useState<number>(0);
  const [historyMode, setHistoryMode] = React.useState<Boolean>(false);
  function selectSquare(square: number) {
    if (squares[square]) return;
    if (status) setStatus(false);
    if (historyMode) {
      setHistory(history.slice(0, currentStep + 1));
      setHistoryMode(false);
    }

    if (!winner) {
      setCurrentStep((prev) => prev + 1);
      const squaresCopy = [...squares];
      squaresCopy[square] = nextValue;
      setSquares(squaresCopy);
      setNextValue((prev) => (prev === "X" ? "O" : "X"));
      setWinner(calculateWinner(squaresCopy));
    }
  }

  React.useEffect(() => {
    if (!historyMode) {
      const historyCopy = [...history];
      historyCopy.push({
        valueArray: squares,
        winner: winner,
        nextValue: nextValue,
      });
      setHistory(historyCopy);
    }
  }, [currentStep]);

  function restart() {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setHistory([]);
  }

  function renderSquare(i: number) {
    return (
      <StyledUserBoxButton onClick={() => selectSquare(i)}>
        {squares[i]}
      </StyledUserBoxButton>
    );
  }

  const getMoveDetails = (event: React.MouseEvent) => {
    setHistoryMode(true);
    let index = +(event.target as HTMLInputElement).value;
    setWinner(history[index].winner);
    setSquares(history[index].valueArray);
    setNextValue(history[index].nextValue);
    setCurrentStep(index);
  };

  const moves = history.map((element, index) => {
    const description =
      index === 0 ? "Go to game start" : `Go to step ${index}`;
    const isCurrentStep = index === currentStep;
    return (
      <StyledUserBoxButton
        key={index}
        disabled={isCurrentStep}
        value={index}
        onClick={getMoveDetails}
      >
        {description}
      </StyledUserBoxButton>
    );
  });

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
      <StyledPlaySection>
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
      </StyledPlaySection>

      <StyledHistorySection>{moves}</StyledHistorySection>
    </StyledMainContainer>
  );
};

export default Board;
