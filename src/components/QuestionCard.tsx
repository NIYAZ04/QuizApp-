import React from 'react';
import './QuestionCard.css';

interface QuestionCardProps {
  question: string;
  options: string[];
  selectedAnswer: string;
  onSelectAnswer: (answer: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  options,
  selectedAnswer,
  onSelectAnswer,
  onNext,
  onPrev,
}) => {
  return (
    <div className="question-card">
      <h2 className="question-text">{question}</h2>
      <div className="options">
        {options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${selectedAnswer === option ? 'selected' : ''}`}
            onClick={() => onSelectAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="navigation">
        <button onClick={onPrev} disabled={false} className="nav-button">
          Previous
        </button>
        <button onClick={onNext} disabled={false} className="nav-button">
          Next
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
