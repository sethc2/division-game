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
    return Array.from(answers).sort((a, b) => a - b);
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
      <div style={{ display: "flex", flex: 1 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <div style={{ flex: 1 }}></div>
          <div style={{ flex: 1, fontSize: 32, padding: 6, marginTop: 19 }}>
            {divisor}
          </div>
          <div style={{ flex: 1 }}></div>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              flex: 1,
              fontSize: 32,
              display: "flex",
              alignItems: "flex-end",
              borderBottom: "1px solid black",
              padding: 6,
              width: "20%",
              color:
                guessedAnswer === null
                  ? "gray"
                  : guessCorrect
                  ? "green"
                  : "red",
            }}
          >
            {guessedAnswer || "?"}
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <div
              style={{
                padding: 6,
                flex: "none",
                borderLeft: "1px solid black",
                fontSize: 32,
              }}
            >
              {dividend}
            </div>
            <div style={{ flex: 1 }}></div>
          </div>

          <div style={{ flex: 1 }}></div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "stretch",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flex: 1, width: "100%" }}>
          <button
            style={{ width: "50%", fontSize: 24 }}
            onClick={() => {
              if (!guessCorrect) {
                guess(answers[0]);
              }
            }}
          >
            {answers[0]}
          </button>
          <button
            style={{ width: "50%", fontSize: 24 }}
            onClick={() => {
              if (!guessCorrect) {
                guess(answers[1]);
              }
            }}
          >
            {answers[1]}
          </button>
        </div>
        <div style={{ display: "flex", flex: 1, width: "100%" }}>
          <button
            style={{ width: "50%", fontSize: 24 }}
            onClick={() => {
              if (!guessCorrect) {
                guess(answers[2]);
              }
            }}
          >
            {answers[2]}
          </button>
          <button
            style={{ width: "50%", fontSize: 24 }}
            onClick={() => {
              if (!guessCorrect) {
                guess(answers[3]);
              }
            }}
          >
            {answers[3]}
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <div>Nubmer correct: {numberCorrect}</div>
        <div>Number wrong: {numberWrong}</div>
      </div>
    </div>
  );
}

export default App;
