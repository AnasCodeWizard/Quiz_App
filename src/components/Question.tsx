import React from 'react';
import './Question.css';

interface QuestionProps {
  question: string;
  answers: string[];
  correctAnswer: string;
  handleAnswerOptionClick: (isCorrect: boolean) => void;
}

const Question: React.FC<QuestionProps> = ({ question, answers, correctAnswer, handleAnswerOptionClick }) => {
  return (
    <div>
      <div className="question-section">
        <div className="question-text">{question}</div>
      </div>
      <div className="answer-section">
        {answers.map((answer, index) => (
          <button
            key={index}
            className="answer"
            onClick={() => handleAnswerOptionClick(answer === correctAnswer)}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
