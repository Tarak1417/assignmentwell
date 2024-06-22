import React, { useState } from 'react';

import { MoveRight } from 'lucide-react';
import { MoveLeft } from 'lucide-react';
import './scrol.css';

const Scroller = () => {
  const [values, setValues] = useState([0, 0, 0]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const calculateProgress = () => {
    const filledSliders = values.filter((value) => value > 0);
    return (filledSliders.length / values.length) * 100;
  };

  const questions = [
    "How satisfied are you with your current job?",
    "How often do you feel stressed at work?",
    "How well do you manage your work-life balance?"
  ];

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleListItemClick = (index, value) => {
    const newValues = [...values];
    newValues[currentQuestion] = value;
    setValues(newValues);
  };

  return (
    <div className="container">
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${calculateProgress()}%` }}
        ></div>
      </div>
      <div className="question">
        <h2>
          Question {currentQuestion + 1}: {questions[currentQuestion]}
        </h2>
        <ul>
          <li onClick={() => handleListItemClick(currentQuestion, 1)}>Strongly Disagree</li>
          <li onClick={() => handleListItemClick(currentQuestion, 2)}>Disagree</li>
          <li onClick={() => handleListItemClick(currentQuestion, 3)}>Neutral</li>
          <li onClick={() => handleListItemClick(currentQuestion, 4)}>Agree</li>
          <li onClick={() => handleListItemClick(currentQuestion, 5)}>Strongly Agree</li>
          <li onClick={() => handleListItemClick(currentQuestion, 0)}>No Answer</li>
        </ul>
      </div>
      <div className="navigation">
        <p onClick={prevQuestion} disabled={currentQuestion === 0}>
       <MoveLeft/>
        </p>
        <p onClick={nextQuestion} disabled={currentQuestion === questions.length - 1}>
         <MoveRight/>
        </p>
      </div>
    </div>
  );
};

export default Scroller;