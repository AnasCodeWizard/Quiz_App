import React, { useState } from 'react';
import Question from './Question';
import './Quiz.css';

interface QuizData {
  question: string;
  answers: string[];
  correct: string;
}

const quizData: QuizData[] = [
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct: "Jupiter"
  },
  {
    question: "Who developed the theory of relativity?",
    answers: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
    correct: "Albert Einstein"
  },
  {
    question: "Which element has the atomic number 1?",
    answers: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
    correct: "Hydrogen"
  },
  {
    question: "What is the smallest country in the world by land area?",
    answers: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    correct: "Vatican City"
  },
  {
    question: "Which ocean is the deepest?",
    answers: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Southern Ocean"],
    correct: "Pacific Ocean"
  },
  {
    question: "What is the capital of Canada?",
    answers: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    correct: "Ottawa"
  },
  {
    question: "Who wrote the play 'Hamlet'?",
    answers: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
    correct: "William Shakespeare"
  },
  {
    question: "Which planet is closest to the sun?",
    answers: ["Earth", "Venus", "Mercury", "Mars"],
    correct: "Mercury"
  },
  {
    question: "What is the currency of Japan?",
    answers: ["Yuan", "Won", "Yen", "Ringgit"],
    correct: "Yen"
  },
  {
    question: "Who painted the ceiling of the Sistine Chapel?",
    answers: ["Leonardo da Vinci", "Vincent van Gogh", "Michelangelo", "Raphael"],
    correct: "Michelangelo"
  }
];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          <h1>Quiz Completed</h1>
          <p>You scored {score} out of {quizData.length}</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{quizData.length}
          </div>
          <Question
            question={quizData[currentQuestion].question}
            answers={quizData[currentQuestion].answers}
            correctAnswer={quizData[currentQuestion].correct}
            handleAnswerOptionClick={handleAnswerOptionClick}
          />
        </div>
      )}
    </div>
  );
};

export default Quiz;