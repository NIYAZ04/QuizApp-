import React from 'react';

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
      <h3>{question}</h3>
      <div className="options">
        {options.map((option, index) => (
          <button
            key={index}
            className={selectedAnswer === option ? 'selected' : ''}
            onClick={() => onSelectAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="navigation">
        <button onClick={onPrev}>Previous</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

export default QuestionCard;
