import React, { useMemo, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getProblem(max: number) {
  const divisor = getRandomInt(max) + 1;
  const quotient = getRandomInt(max) + 1;
  const dividend = divisor * quotient;
  return {
    divisor,
    quotient,
    dividend,
  };
}

function App() {
  const maxNumber = 9;
  const [numberCorrect, setNumberCorrect] = useState(0);
  const [numberWrong, setNumberWrong] = useState(0);

  const [currentProblem, setCurrentProblem] = useState(getProblem(maxNumber));

  const answers = useMemo(() => {
    const answers = new Set<number>();
    answers.add(currentProblem.quotient);
    while (answers.size < 4) {
      answers.add(getRandomInt(maxNumber) + 1);
    }
    return Array.from(answers).sort((a, b) => a - b) as [
      number,
      number,
      number,
      number
    ];
  }, [currentProblem]);
  const { dividend, divisor, quotient } = currentProblem;

  const [guessedAnswer, setGuessedAnswer] = useState<number | null>(null);

  const guess = (answer: number) => {
    setGuessedAnswer(answer);
    if (answer === quotient) {
      if (guessedAnswer === null) {
        setNumberCorrect(numberCorrect + 1);
      }
      window.setTimeout(() => {
        setGuessedAnswer(null);
        setCurrentProblem(getProblem(maxNumber));
      }, 1000);
    } else {
      setNumberWrong(numberWrong + 1);
    }
  };

  const guessCorrect = guessedAnswer === quotient;

  return (
    <div className="App">
      <Problem>
        <>
          <span>{dividend}</span>
          <span>÷</span>
          <span>{divisor}</span>
          <span>=</span>
          <span
            style={{
              color:
                guessedAnswer === null
                  ? "gray"
                  : guessCorrect
                  ? "green"
                  : "red",
            }}
          >
            {guessedAnswer || "?"}
          </span>
        </>
      </Problem>
      <Answers answers={answers} guess={guess}></Answers>
      <Results
        numberCorrect={numberCorrect}
        numberWrong={numberWrong}
      ></Results>
    </div>
  );
}

const Problem: React.FC<{}> = ({ children }) => {
  return <div className="problem">{children}</div>;
};

const Answers: React.FC<{
  answers: [number, number, number, number];
  guess: (value: number) => void;
}> = ({ answers, guess }) => {
  return (
    <div className="answers">
      <div style={{ height: "50%", width: "100%" }}>
        <button onClick={() => guess(answers[0])}>{answers[0]}</button>
        <button onClick={() => guess(answers[1])}>{answers[1]}</button>
      </div>
      <div style={{ height: "50%", width: "100%" }}>
        <button onClick={() => guess(answers[2])}>{answers[2]}</button>
        <button onClick={() => guess(answers[3])}>{answers[3]}</button>
      </div>
    </div>
  );
};

const Results: React.FC<{ numberCorrect: number; numberWrong: number }> = ({
  numberCorrect,
  numberWrong,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "33.33%",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <div>Nubmer correct: {numberCorrect}</div>
      <div>Number wrong: {numberWrong}</div>
    </div>
  );
};

export default App;
