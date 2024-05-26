import React from 'react';

interface AnswerButtonProps {
  answer: string;
  handleClick: () => void;
}

const AnswerButton: React.FC<AnswerButtonProps> = ({ answer, handleClick }) => {
  return (
    <button className="answer" onClick={handleClick}>
      {answer}
    </button>
  );
};

export default AnswerButton;
