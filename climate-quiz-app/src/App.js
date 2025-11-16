import React, { useState } from "react";
import questions from "./data/questions";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import "./index.css";

export default function App() {
  const [stage, setStage] = useState("start"); // start, quiz, results
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleStart = () => setStage("quiz");

  const handleSelect = (label) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQ] = label;
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setStage("results");
    }
  };

  const handlePrev = () => {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
  };

  const calculateTotalPoints = () => {
    return answers.reduce((sum, answer, i) => {
      if (!answer) return sum;
      const option = questions[i].options.find((o) => o.label === answer);
      return sum + (option ? option.points : 0);
    }, 0);
  };

  const handleRetake = () => {
    setAnswers(Array(questions.length).fill(null));
    setCurrentQ(0);
    setStage("start");
  };

  if (stage === "start") {
    return (
      <div className="container start-container">
        <h1 className="title">Climate Quiz</h1>
        <button className="btn" onClick={handleStart}>Start</button>
      </div>
    );
  }

  if (stage === "quiz") {
    const q = questions[currentQ];
    const selected = answers[currentQ];

    return (
      <div className="container">
        <Quiz question={q} selectedAnswer={selected} onSelect={handleSelect} />
        <div className="navigation">
          <button onClick={handlePrev} disabled={currentQ === 0} className="btn nav-btn">
            Previous
          </button>
          <button onClick={handleNext} disabled={!selected} className="btn nav-btn">
            {currentQ === questions.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    );
  }

  if (stage === "results") {
    return (
      <Results totalPoints={calculateTotalPoints()} onRetake={handleRetake} />
    );
  }

  return null;
}
